#!/usr/bin/env node
/**
 * Fails when this repo's pinned @itsmonkie/web-shared version has fallen behind
 * the package's latest release (itsmonkie/rcordr#1098 AC#5).
 *
 * Renovate opens the bump PRs; this reports when they have not been merged, or
 * when Renovate has silently stopped working. Automated bumping ASSUMES
 * success — only this DETECTS failure, which is why it is the layer that has to
 * exist.
 *
 * Per-repo by design (decided 2026-08-08). Each consumer checks itself, so no
 * cross-repo credential is needed: the pinned version is read from a file in
 * this checkout, and web-shared is public, so the workflow's built-in
 * GITHUB_TOKEN can read its tags. There is no PAT and no shared secret.
 *
 * Exit codes: 0 = current or within tolerance, 1 = behind, 2 = could not
 * verify. Two and one are both failures — an unknown is NOT a pass.
 */

import { readFileSync } from 'node:fs'

const OWNER = 'itsmonkie'
const PACKAGE_REPO = 'web-shared'
const DEP_NAME = '@itsmonkie/web-shared'

/** Path to the package.json declaring the dependency, relative to the repo root. */
const MANIFEST = process.env.MANIFEST_PATH ?? 'package.json'

/**
 * Tolerance in DAYS, measured from the FIRST release this repo missed — not
 * from the newest one.
 *
 * Measuring from the newest release is wrong in a way that silently disables
 * the check: every new tag resets the clock, so a package releasing more often
 * than the tolerance window keeps every stale consumer permanently "within
 * tolerance" no matter how many versions behind it is. Measuring from the
 * oldest unadopted release asks the question that matters — how long has this
 * repo been behind? — and cannot be reset by upstream activity.
 */
const TOLERANCE_DAYS = Number(process.env.TOLERANCE_DAYS ?? 14)

const token = process.env.GITHUB_TOKEN

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      Accept: 'application/vnd.github+json',
      'User-Agent': 'web-shared-currency-check',
    },
  })
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status} ${res.statusText}`)
  return res.json()
}

/** The pinned tag, read straight off disk — no API call, no credential. */
function pinnedTag() {
  const raw = readFileSync(MANIFEST, 'utf8')
  const manifest = JSON.parse(raw)
  const spec = manifest.dependencies?.[DEP_NAME] ?? manifest.devDependencies?.[DEP_NAME] ?? null

  if (spec === null) return null

  const match = spec.match(/#(v\d+\.\d+\.\d+)/)
  if (!match) {
    // Depended on, but not pinned to a semver tag. That is its own problem:
    // an unpinned git dependency moves under you.
    throw new Error(`${DEP_NAME} is present but not pinned to a vX.Y.Z tag: "${spec}"`)
  }
  return match[1]
}

function parseSemver(tag) {
  const [major, minor, patch] = tag.slice(1).split('.').map(Number)
  return { major, minor, patch }
}

/** True when `a` is strictly newer than `b`. */
function isNewer(a, b) {
  const x = parseSemver(a)
  const y = parseSemver(b)
  if (x.major !== y.major) return x.major > y.major
  if (x.minor !== y.minor) return x.minor > y.minor
  return x.patch > y.patch
}

async function tagDate(tag, tags) {
  const entry = tags.find((t) => t.name === tag)
  if (!entry) throw new Error(`tag ${tag} not found on web-shared`)
  const commit = await gh(`/repos/${OWNER}/${PACKAGE_REPO}/commits/${entry.commit.sha}`)
  return new Date(commit.commit.committer.date)
}

async function releaseState(pinned) {
  const tags = await gh(`/repos/${OWNER}/${PACKAGE_REPO}/tags?per_page=100`)
  const semver = tags.filter((t) => /^v\d+\.\d+\.\d+$/.test(t.name))
  if (semver.length === 0) throw new Error('no semver tags found on web-shared')

  const sorted = [...semver].sort((a, b) => (isNewer(a.name, b.name) ? 1 : -1))
  const latest = sorted[sorted.length - 1].name

  // The oldest release newer than what we are pinned to - the first one we
  // missed. Its age is how long this repo has actually been behind.
  const missed = sorted.filter((t) => isNewer(t.name, pinned))
  const firstMissed = missed.length > 0 ? missed[0].name : null

  return {
    latest,
    firstMissed,
    firstMissedDate: firstMissed ? await tagDate(firstMissed, semver) : null,
  }
}

let pinned
try {
  pinned = pinnedTag()
} catch (err) {
  console.error(`COULD NOT VERIFY: reading ${MANIFEST} failed - ${err.message}`)
  process.exit(2)
}

if (pinned === null) {
  console.log(`${DEP_NAME} is not a dependency of ${MANIFEST} - nothing to check.`)
  process.exit(0)
}

let state
try {
  state = await releaseState(pinned)
} catch (err) {
  // Fail LOUD. A check that cannot see the upstream version has not passed -
  // it has failed to run, and reporting that as "current" is how a detection
  // control becomes decorative.
  console.error(`COULD NOT VERIFY: reading web-shared's tags failed - ${err.message}`)
  console.error(`Pinned here: ${pinned}. Latest: UNKNOWN. This is not a pass.`)
  process.exit(2)
}

console.log(`Pinned (${MANIFEST}): ${pinned}`)
console.log(`Latest (${OWNER}/${PACKAGE_REPO}): ${state.latest}`)

if (state.firstMissed === null) {
  console.log('\nCurrent.')
  process.exit(0)
}

const daysBehind = Math.floor((Date.now() - state.firstMissedDate.getTime()) / 86_400_000)
console.log(`First release missed: ${state.firstMissed}, ${daysBehind}d ago`)
console.log(`Tolerance: ${TOLERANCE_DAYS}d behind`)

if (daysBehind <= TOLERANCE_DAYS) {
  console.log(
    `\nBehind (${pinned} -> ${state.latest}), but within the ${TOLERANCE_DAYS}d tolerance.`
  )
  process.exit(0)
}

console.error(
  `\nSTALE: pinned ${pinned}, latest ${state.latest}. ` +
    `Behind since ${state.firstMissed} ${daysBehind}d ago (> ${TOLERANCE_DAYS}d tolerance).`
)
process.exit(1)

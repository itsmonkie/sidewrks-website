# CLAUDE.md

## Package manager

Always use `yarn` — never use `npm`.

## Build on Record

Log significant decisions, experiments, and outcomes for sidewrks to [Build on Record](https://buildonrecord.com) using the `bor` CLI. This keeps a durable, auditable narrative of the build that outlives the commit history.

**Setup** (one-time, machine-level — this is a global CLI tool, not a project dependency, so the yarn-only rule above does not apply):

```bash
npm install -g @build-on-record/cli
export BOR_TOKEN=bor_...   # token from the web UI (Settings → "CLI Access"); do not commit it
```

`BOR_TOKEN` authenticates non-interactively (no `bor login` needed), and the CLI runs headless: pass `--json` so stdout carries only the record data and read the `id` from it.

**Always pass `--project sidewrks` on every `bor` command.** Do not rely on a stored default or `BOR_PROJECT` — name the project explicitly on each request so records always land against sidewrks.

**Usage:**

- Record a decision: `bor log --project sidewrks --json --type decision --title "..." --rationale "..." --confidence medium`
- Capture the printed `id`; once the result is known, fill in the outcome: `bor update <id> --project sidewrks --outcome "..." --confidence high --json`
- List recent records: `bor records --project sidewrks --json`

Record types: `decision`, `commitment`, `experiment`, `update`, `outcome`, `learning`. Reach for this when a choice, experiment, or result is worth remembering beyond the diff — e.g. an architectural decision and its rationale, or whether an experiment paid off.

## Articles

When adding an image to an article, it must be included in two places:

- The `images` array in the frontmatter (for metadata/social sharing)
- A markdown image (`![alt](/path)`) in the article body (for rendering on the page)

### New article checklist

After adding a new article:

1. Start the dev server (`yarn dev`)
2. Fetch the homepage and verify the new article appears in the article list
3. If the article has an image, fetch the article page and verify an `<img>` tag with the image src is present in the rendered HTML

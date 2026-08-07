/**
 * Single source of truth for the analytics/consent configuration passed to
 * @itsmonkie/web-shared. Imported by app/layout.tsx so production config and
 * anything else referencing it cannot drift apart.
 *
 * See itsmonkie/rcordr#1098 for the estate-wide decisions behind these.
 */

export const GA_MEASUREMENT_ID = 'G-KF8THVE3DB'

/**
 * Explicit literal list, seeded from this property's GA hostName report
 * (521318121, 90 days). Deliberately NOT derived from siteMetadata.siteUrl:
 * that is an SEO/content field, so an unrelated canonical-URL change would
 * silently flip analytics, and a value already carrying `www.` would produce
 * `www.www.` and drop the apex entirely.
 *
 * Apex is included even though only www has ever been observed, as insurance
 * against an apex undercount. Never add a *.vercel.app or preview host.
 */
export const PRODUCTION_HOSTS = ['sidewrks.com', 'www.sidewrks.com']

/**
 * NEW key. Must differ from every entry in CONSENT_LEGACY_KEYS: readConsent
 * short-circuits on the current key, so reusing the old one would make the
 * migration unreachable dead code.
 */
export const CONSENT_STORAGE_KEY = 'sidewrks-consent'

/** The pre-adoption key, holding the bare strings 'accepted' / 'declined'. */
export const CONSENT_LEGACY_KEYS = ['cookie-consent']

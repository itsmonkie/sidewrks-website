'use client'

import { useConsent } from '@itsmonkie/web-shared'
import Link from './Link'

/**
 * Cookie consent banner. Presentation only — consent state, persistence,
 * migration and the GA teardown live in @itsmonkie/web-shared.
 *
 * Two things this adoption fixes, beyond sharing the implementation:
 *
 * 1. Declining used to do nothing to tracking already running. `next/script`
 *    never removes an injected script, so gtag.js stayed resident and GA4
 *    enhanced measurement kept firing until a full page load — the defect in
 *    itsmonkie/sidewrks-website#6. Declining now sets `ga-disable-<id>` and
 *    clears the GA cookies.
 * 2. Accepting used to call `window.location.reload()` to make the analytics
 *    component notice. Consent is reactive through context now, so the reload
 *    is gone.
 */
export default function CookieConsent() {
  const { hydrated, bannerOpen, setAnalyticsConsent } = useConsent()

  if (!hydrated || !bannerOpen) return null

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This site uses cookies for analytics.{' '}
          <Link href="/privacy" className="underline">
            Learn more
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setAnalyticsConsent(false)}
            className="rounded px-4 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Decline
          </button>
          <button
            onClick={() => setAnalyticsConsent(true)}
            className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

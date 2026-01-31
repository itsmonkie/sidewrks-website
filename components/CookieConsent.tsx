'use client'

import { useState, useEffect } from 'react'
import Link from './Link'

const CONSENT_KEY = 'cookie-consent'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === null) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setShowBanner(false)
    window.location.reload()
  }

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

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
            onClick={handleDecline}
            className="rounded px-4 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(CONSENT_KEY) === 'accepted'
}

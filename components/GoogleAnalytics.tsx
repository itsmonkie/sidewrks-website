'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

const GA_ID = 'G-KF8THVE3DB'
const CONSENT_KEY = 'cookie-consent'

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    // Only fire GA in production: on the site's own canonical host (apex or
    // www), never on localhost or preview deploys, which would otherwise
    // contaminate the production GA property. Gate on siteMetadata.siteUrl so
    // this tracks whatever domain the app already treats as canonical.
    let isProdHost = false
    try {
      const prodHost = new URL(siteMetadata.siteUrl).hostname
      const host = window.location.hostname
      isProdHost = host === prodHost || host === `www.${prodHost}`
    } catch {
      isProdHost = false
    }
    setEnabled(consent === 'accepted' && isProdHost)
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}

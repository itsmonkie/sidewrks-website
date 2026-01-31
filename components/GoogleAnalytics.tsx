'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const GA_ID = 'G-KF8THVE3DB'
const CONSENT_KEY = 'cookie-consent'

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    setHasConsent(consent === 'accepted')
  }, [])

  if (!hasConsent) return null

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

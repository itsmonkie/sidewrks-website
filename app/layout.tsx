import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk, Montserrat } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import CookieConsent from '@/components/CookieConsent'
import { ConsentProvider, GoogleAnalytics } from '@itsmonkie/web-shared'
import {
  GA_MEASUREMENT_ID,
  PRODUCTION_HOSTS,
  CONSENT_STORAGE_KEY,
  CONSENT_LEGACY_KEYS,
} from '@/lib/analytics-config'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} ${montserrat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F7F8F6" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-gray-50 pl-[calc(100vw-100%)] text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <ThemeProviders>
          <ConsentProvider
            measurementId={GA_MEASUREMENT_ID}
            storageKey={CONSENT_STORAGE_KEY}
            legacyKeys={CONSENT_LEGACY_KEYS}
          >
            {/* GA loads only when ALL of: analytics consent accepted, a
              measurement ID is present, the host is on the production
              allowlist, and the deployment environment is not preview or
              development. envSignal is read SERVER-side here and passed down;
              undefined is allowed and degrades to hostname-only gating, so a
              missing signal can never cause silent under-collection. */}
            <GoogleAnalytics
              measurementId={GA_MEASUREMENT_ID}
              productionHosts={PRODUCTION_HOSTS}
              envSignal={process.env.VERCEL_ENV}
            />
            <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
            <SectionContainer>
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main className="mb-auto">{children}</main>
              </SearchProvider>
              <Footer />
            </SectionContainer>
            <CookieConsent />
          </ConsentProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}

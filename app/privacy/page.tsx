import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Sidewrks - how we handle your data.',
})

export default function PrivacyPolicy() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
          Last updated: 31 January 2026
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <h2>Overview</h2>
        <p>
          Sidewrks is a personal website and blog. I respect your privacy and aim to be transparent
          about any data collection. This policy explains what information is collected and how it
          is used.
        </p>

        <h2>Information collected</h2>

        <h3>Analytics</h3>
        <p>
          This site uses Google Analytics to understand how visitors use the site. This service
          collects anonymous usage data including pages visited, time spent on the site, and general
          geographic location. This data helps me understand what content is useful and improve the
          site.
        </p>
        <p>
          Google Analytics uses cookies to collect this information. You can opt out of Google
          Analytics by using the{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>

        <h3>Newsletter</h3>
        <p>
          If you subscribe to the newsletter, your email address is collected and stored by
          Buttondown, the newsletter service provider. Your email is used solely to send you
          updates. You can unsubscribe at any time using the link in any newsletter email.
        </p>

        <h3>Hosting</h3>
        <p>
          This site is hosted on Vercel. Vercel may collect standard server logs including IP
          addresses for security and performance monitoring. See{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel&apos;s privacy policy
          </a>{' '}
          for more details.
        </p>

        <h2>Cookies</h2>
        <p>
          This site uses cookies for analytics purposes as described above. No cookies are used for
          advertising or tracking across other websites.
        </p>

        <h2>Third-party links</h2>
        <p>
          This site may contain links to external websites. I am not responsible for the privacy
          practices of those sites.
        </p>

        <h2>Your rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of any personal data I
          hold about you. If you have subscribed to the newsletter, you can unsubscribe at any time.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          This privacy policy may be updated from time to time. Any changes will be posted on this
          page with an updated revision date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy, please reach out via the contact
          details on the About page.
        </p>
      </div>
    </div>
  )
}

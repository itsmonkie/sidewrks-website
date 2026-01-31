import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Sidewrks.',
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
        <p>This site collects minimal data. Here is what you should know.</p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Analytics:</strong> Google Analytics collects anonymous usage data (pages
            visited, general location). No personal information is collected.
          </li>
          <li>
            <strong>Newsletter:</strong> If you subscribe, your email is stored by Buttondown. You
            can unsubscribe anytime.
          </li>
          <li>
            <strong>Hosting:</strong> Vercel collects standard server logs for security purposes.
          </li>
        </ul>

        <h2>Cookies</h2>
        <p>This site uses cookies for analytics only. No advertising or cross-site tracking.</p>

        <h2>Your rights</h2>
        <p>You can request access to, correction of, or deletion of your data at any time.</p>

        <h2>Third-party services</h2>
        <ul>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Analytics Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://buttondown.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buttondown Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Privacy Policy
            </a>
          </li>
        </ul>

        <h2>Contact</h2>
        <p>Questions? Reach out via the contact details on the About page.</p>
      </div>
    </div>
  )
}

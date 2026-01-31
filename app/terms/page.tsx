import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Terms of Use',
  description: 'Terms of use for Sidewrks.',
})

export default function TermsOfUse() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Terms of Use
        </h1>
        <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
          Last updated: 31 January 2026
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <p>By using this site, you agree to these terms.</p>

        <h2>Use of content</h2>
        <p>
          Content on this site is for informational purposes. You may read, share, and link to
          content freely. You may not republish, sell, or claim content as your own without
          permission.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All content, design, and code on this site is owned by Sidewrks unless otherwise stated.
          Third-party trademarks belong to their respective owners.
        </p>

        <h2>User conduct</h2>
        <p>
          If you interact with this site (e.g., newsletter signup), you agree not to misuse the
          service, submit false information, or attempt to disrupt the site.
        </p>

        <h2>Disclaimer</h2>
        <p>
          Content is provided &quot;as is&quot; without warranties. Opinions expressed are personal
          and do not constitute professional advice. Use information at your own discretion.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          Sidewrks is not liable for any damages arising from use of this site or reliance on its
          content.
        </p>

        <h2>External links</h2>
        <p>
          This site may link to external websites. These links are provided for convenience.
          Sidewrks is not responsible for external content.
        </p>

        <h2>Changes</h2>
        <p>These terms may be updated at any time. Continued use constitutes acceptance.</p>

        <h2>Contact</h2>
        <p>
          Questions? Email <a href="mailto:contact@sidewrks.com">contact@sidewrks.com</a>.
        </p>
      </div>
    </div>
  )
}

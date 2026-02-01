/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Sidewrks',
  author: 'Matt', // or your full name if you want it public
  headerTitle: 'Sidewrks',
  description:
    'A quiet workspace for shipping side projects. Decisions, progress, and outcomes in public.',
  language: 'en-GB',
  theme: 'system', // system, dark or light

  // Update these once your domain is live
  siteUrl: 'https://sidewrks.com',
  siteRepo: 'https://github.com/<your-handle>/sidewrks', // optional, set when public

  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social-card.png`,

  // Keep only the socials you will actually link to on day one
  email: 'contact@sidewrks.com',
  github: '', // e.g. https://github.com/<your-handle>
  linkedin: '', // e.g. https://www.linkedin.com/in/<your-handle>
  x: '', // optional

  locale: 'en-GB',

  // I’d keep nav non-sticky for a calmer feel
  stickyNav: false,

  // Optional: keep analytics config but don't enable until you actually set an ID
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
      // src: 'https://analytics.your-domain.com/script.js',
    },
  },

  newsletter: {
    provider: 'buttondown',
  },

  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: 'itsmonkie/sidewrks-website',
      repositoryId: 'R_kgDOQ1d6TQ',
      category: 'Blog Comments',
      categoryId: 'DIC_kwDOQ1d6Tc4C1uhF',
      mapping: 'pathname',
      strict: '1',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'dark',
      lang: 'en',
    },
  },

  // Keep kbar search if you like (it’s useful once notes/projects grow)
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata

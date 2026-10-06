// Redirects from the Vercel deployment. GitHub Pages has no server-side redirects, so
// `bin/postexport.mjs` turns each of these into a static HTML page that forwards the visitor
// (see that script for how query-conditional (`has`) and conflicting entries are handled).
module.exports = [
  {
    source: '/blog/finding-product-market-fit-at-hera-with-june',
    destination: '/customer-stories/hera',
    permanent: true,
  },
  {
    // Was pages/new.tsx, a getServerSideProps redirect.
    source: '/new',
    destination: '/',
    permanent: true,
  },
  {
    source: '/integrations/freshpaint',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/tango',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/around',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/grain',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/jitter',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/craft',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/copy-ai',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/texts',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/spline',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/ghost',
    destination: '/',
    permanent: true,
  },
  {
    // Old role pages, still linked from blog posts.
    source: '/role/product',
    destination: '/',
    permanent: true,
  },
  {
    source: '/role/success-sales',
    destination: '/',
    permanent: true,
  },
  {
    source: '/roles/product',
    destination: '/',
    permanent: true,
  },
  {
    source: '/roles/success-sales',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/height',
    destination: '/',
    permanent: true,
  },
  {
    source: '/Resources',
    destination: '/blog',
    permanent: true,
  },
  {
    // Vercel matched redirects case-insensitively; pages/404.tsx retries unknown URLs lowercased.
    source: '/resources',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/lenny',
    destination: '/coupon/lenny',
    permanent: true,
  },
  {
    source: '/aakash',
    destination: '/coupon/aakash',
    permanent: true,
  },
  {
    source: '/howtheygrow',
    destination: '/coupon/howtheygrow',
    permanent: true,
  },
  {
    source: '/strategybreakdowns',
    destination: '/coupon/strategybreakdowns',
    permanent: true,
  },
  {
    source: '/cheers',
    destination: 'https://youtu.be/icRBlvERa30',
    permanent: true,
  },
  {
    source: '/blog/building-a-product-led-company-at-multis',
    destination: '/customer-stories/multis',
    permanent: true,
  },
  {
    source: '/blog/converting-more-trials-with',
    destination: '/customer-stories/crew',
    permanent: true,
  },
  {
    source: '/blog/monitoring-releases-with-waldo',
    destination: '/customer-stories/waldo',
    permanent: true,
  },
  {
    source: '/amplitude',
    destination: '/june-vs-amplitude',
    permanent: true,
  },
  {
    source: '/blog/building-a-saas-product',
    destination: '/blog/adding-ai-to-your-saas-product',
    permanent: true,
  },
  {
    source: '/attio',
    destination: '/integration/attio',
    permanent: true,
  },
  {
    source: '/hubspot',
    destination: '/integration/hubspot',
    permanent: true,
  },
  {
    source: '/template/retention',
    destination: 'https://help.june.so/en/articles/5978485-user-retention',
    permanent: true,
  },
  {
    source: '/template/active-users',
    destination: 'https://help.june.so/en/articles/5978684-active-users',
    permanent: true,
  },
  {
    source: '/template/funnel',
    destination: 'https://help.june.so/en/articles/5978640-funnel',
    permanent: true,
  },
  {
    source: '/logos-q3/raisely.svg',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/manifesto',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/retention',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/audit',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/active-users',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/power-users',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/slipping',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/feature-release',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/feature-launches',
    permanent: true,
  },
  {
    source: '/templates/engagement',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/customer-stories/multis',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/customer-stories',
    permanent: true,
  },
  {
    source: '/customer-stories/building-the-platform-for-data-quality-everyone-loves',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/customer-stories/soda',
    permanent: true,
  },
  {
    source: '/templates/feature-retention',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/feature-launches',
    permanent: true,
  },
  {
    source: '/templates/funnel',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/power-groups',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/new-users',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/company-retention',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/feature-usage',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/feature-launches',
    permanent: true,
  },
  {
    source: '/vision',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/personas/founders',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/personas/marketing',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/personas/product',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/personas/engineering',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/personas/marketing',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/blog/6-ways-to-make-fast-product-decisions-with-analytics-2',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/blog/6-ways-to-measure-users-behaviours',
    permanent: true,
  },
  {
    source: '/customer-stories/hera',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/customer-stories',
    permanent: true,
  },
  {
    source: '/customer-stories/hera',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/customer-stories',
    permanent: true,
  },
  {
    source: '/template/active-users',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/retention',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/retention',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/feature-usage',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/feature-launches',
    permanent: true,
  },
  {
    source: '/template/signup-conversion',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/company-retention',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/funnel',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/power-users',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/engagement',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/feature-retention',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/feature-launches',
    permanent: true,
  },
  {
    source: '/template/audit',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/activation',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    source: '/template/slipping',
    has: [
      {
        type: 'query',
        key: 'ref',
        value: 'june.ghost.io',
      },
    ],
    destination: '/',
    permanent: true,
  },
  {
    // Older URLs of posts, recovered from the Wayback Machine.
    source: '/customer-stories/build-a-successful-freight-platform-with-product-data',
    destination: '/customer-stories/xchange',
    permanent: true,
  },
  {
    source: '/customer-stories/delighting-new-sign-ups-at-reveal',
    destination: '/customer-stories/reveal',
    permanent: true,
  },
  {
    source: '/guides/expansion-and-upsell',
    destination: '/guides/upsell',
    permanent: true,
  },
  {
    source: '/guides/how-to-leverage-product-date-to-close-renewal-deals-in-hubspot',
    destination: '/guides/renewals',
    permanent: true,
  },
  {
    source: '/blog/my-schedule-as-a-founder',
    destination: 'https://www.youtube.com/watch?v=QhIpHN0To2s',
    permanent: true,
  },
  {
    // Docs pages from before the docs were reorganized.
    source: '/docs/api',
    destination: '/docs/tracking/http-api/authentication',
    permanent: true,
  },
  {
    source: '/docs/browser',
    destination: '/docs/tracking/web/browser',
    permanent: true,
  },
  {
    source: '/docs/companies/identify',
    destination: '/docs/advanced/group',
    permanent: true,
  },
  {
    source: '/docs/companies/track',
    destination: '/docs/advanced/track-event',
    permanent: true,
  },
  {
    source: '/docs/identifying-users',
    destination: '/docs/quickstart/identify',
    permanent: true,
  },
  {
    source: '/docs/install',
    destination: '/docs/quickstart/install',
    permanent: true,
  },
  {
    source: '/docs/node',
    destination: '/docs/tracking/server/node-js',
    permanent: true,
  },
  {
    source: '/docs/python',
    destination: '/docs/tracking/server/python',
    permanent: true,
  },
  {
    source: '/docs/quick-start',
    destination: '/docs/quickstart/install',
    permanent: true,
  },
  {
    source: '/docs/react',
    destination: '/docs/tracking/web/react',
    permanent: true,
  },
  {
    source: '/docs/ruby',
    destination: '/docs/tracking/server/ruby',
    permanent: true,
  },
  {
    source: '/docs/tracking-events',
    destination: '/docs/quickstart/track-event',
    permanent: true,
  },
  {
    source: '/docs/tracking-groups',
    destination: '/docs/advanced/group',
    permanent: true,
  },
  {
    source: '/docs/users/identify',
    destination: '/docs/quickstart/identify',
    permanent: true,
  },
  {
    source: '/docs/users/track',
    destination: '/docs/quickstart/track-event',
    permanent: true,
  },
  {
    source: '/docs/what-is-june',
    destination: '/docs/start-here',
    permanent: true,
  },
  {
    // Retired marketing pages that were never redirected (their siblings go to /).
    source: '/great-product',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/maze',
    destination: '/',
    permanent: true,
  },
  {
    source: '/great-product/polywork',
    destination: '/',
    permanent: true,
  },
  {
    source: '/personas/design',
    destination: '/',
    permanent: true,
  },
  {
    source: '/personas/success',
    destination: '/',
    permanent: true,
  },
  {
    source: '/method',
    destination: '/',
    permanent: true,
  },
  {
    source: '/method/keep-it-simple',
    destination: '/',
    permanent: true,
  },
  {
    source: '/method/start-small',
    destination: '/',
    permanent: true,
  },
  {
    source: '/method/stay-small',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/activation',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/active-groups',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/company-funnel',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/control-center',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/explorer',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/new-groups',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/signup-conversion',
    destination: '/',
    permanent: true,
  },
  {
    source: '/templates/slipping-groups',
    destination: '/',
    permanent: true,
  },
  {
    source: '/use-case',
    destination: '/',
    permanent: true,
  },
  {
    source: '/cards',
    destination: '/',
    permanent: true,
  },
  {
    source: '/privacy',
    destination: 'https://help.june.so/en/articles/6823521-privacy-policy',
    permanent: true,
  },
  {
    source: '/salesforce',
    destination: '/integration/salesforce',
    permanent: true,
  },
];

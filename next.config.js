// The site is exported as static HTML (`next export`) and hosted on GitHub Pages, so there is
// no server: no image optimization, no redirects/rewrites/headers, no getServerSideProps.
// Redirects live in redirects.js and are emitted as static pages by bin/postexport.mjs.

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => {
    config.resolve.symlinks = false;
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      use: [{ loader: 'url-loader', options: { limit: 100000 } }],
    });
    return config;
  },
  // Inlined into the static bundle at build time. These are the production values; they are
  // fixed here so the output never depends on whichever .env the build machine has.
  env: {
    JUNE_API_HOST: 'https://api.june.so',
    JUNE_APP_HOST: 'https://analytics.june.so',
  },
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
};

module.exports = withBundleAnalyzer(withMDX(config));

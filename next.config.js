/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'kodecite.ai' }],
        destination: 'https://www.kodecite.ai/:path*',
        permanent: true,
      },
      {
        // Merged into the canonical "how to rank in Google AI Overviews" pillar
        source: '/blog/ai-overviews-local-businesses',
        destination: '/blog/how-to-rank-in-google-ai-overviews-for-local-businesses',
        permanent: true,
      },
      {
        // Merged into the canonical AEO/GEO-vs-SEO pillar
        source: '/blog/is-geo-a-replacement-for-seo-or-an-addition',
        destination: '/blog/aeo-geo-making-seo-better',
        permanent: true,
      },
      // Retired platform/performance posts -> closest surviving pillar
      {
        source: '/blog/wordpress-losing-ai-search',
        destination: '/blog/why-is-my-website-traffic-dropping-2026',
        permanent: true,
      },
      {
        source: '/blog/vercel-vs-wordpress-performance',
        destination: '/blog/why-is-my-website-traffic-dropping-2026',
        permanent: true,
      },
      {
        source: '/blog/cold-load-vs-cached-ai-crawlers',
        destination: '/blog/why-is-my-website-traffic-dropping-2026',
        permanent: true,
      },
      {
        source: '/blog/why-website-burning-ai-tokens',
        destination: '/blog/why-is-my-website-traffic-dropping-2026',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

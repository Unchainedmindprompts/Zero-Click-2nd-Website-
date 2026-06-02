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
    ];
  },
};

module.exports = nextConfig;

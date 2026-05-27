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
    ];
  },
};

module.exports = nextConfig;

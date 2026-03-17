import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kodecite.ai';
  const currentDate = new Date().toISOString();

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/why-now`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Blog posts
    {
      url: `${baseUrl}/blog/what-is-zero-click-search`,
      lastModified: new Date('2026-01-15').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/wordpress-losing-ai-search`,
      lastModified: new Date('2026-01-22').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-we-indexed-49-pages-48-hours`,
      lastModified: new Date('2026-02-01').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/schema-markup-complete-guide`,
      lastModified: new Date('2026-02-08').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/facebook-ads-local-business-2026`,
      lastModified: new Date('2026-02-12').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-overviews-local-businesses`,
      lastModified: new Date('2026-02-18').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/vercel-vs-wordpress-performance`,
      lastModified: new Date('2026-02-22').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/custom-audiences-facebook`,
      lastModified: new Date('2026-02-27').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/why-website-burning-ai-tokens`,
      lastModified: new Date('2026-03-03').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/2026-digital-land-rush-ai-visibility`,
      lastModified: new Date('2026-03-07').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/aeo-geo-making-seo-better`,
      lastModified: new Date('2026-03-08').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/automation-vs-digital-real-estate`,
      lastModified: new Date('2026-03-10').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/false-legacy-layer-ai-visibility`,
      lastModified: new Date('2026-03-07').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-rank-in-google-ai-overviews-for-local-businesses`,
      lastModified: new Date('2026-03-10').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/inw-basecamp-arizona-launch`,
      lastModified: new Date('2026-03-01').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/why-is-my-website-traffic-dropping-2026`,
      lastModified: new Date('2026-03-11').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/the-shortlist-problem`,
      lastModified: new Date('2026-03-17').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/10-millisecond-advantage-wearable-era`,
      lastModified: new Date('2026-03-17').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

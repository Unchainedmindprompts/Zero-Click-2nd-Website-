import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kodecite.ai';

  return [
    // Core pages
    { url: baseUrl, lastModified: new Date('2026-05-20').toISOString(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date('2026-05-20').toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2026-05-20').toISOString(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2026-05-20').toISOString(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog posts
    { url: `${baseUrl}/blog/google-ai-search-smb-entity-infrastructure`, lastModified: new Date('2026-05-20').toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog/entity-first-search-local-businesses`, lastModified: new Date('2026-05-09').toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog/compressed-search-entity-trust`, lastModified: new Date('2026-05-09').toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog/f1-framework-for-aeo`, lastModified: new Date('2026-04-23').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/what-is-an-entity-graph`, lastModified: new Date('2026-04-17').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/below-the-content-layer`, lastModified: new Date('2026-04-22').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/2026-digital-land-rush-ai-visibility`, lastModified: new Date('2026-03-07').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/false-legacy-layer-ai-visibility`, lastModified: new Date('2026-03-07').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/the-shortlist-problem`, lastModified: new Date('2026-03-17').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/10-millisecond-advantage-wearable-era`, lastModified: new Date('2026-03-17').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/the-ai-search-stack-nobody-is-building-for-small-businesses`, lastModified: new Date('2026-03-13').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/aeo-geo-making-seo-better`, lastModified: new Date('2026-03-08').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/automation-vs-digital-real-estate`, lastModified: new Date('2026-03-10').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-rank-in-google-ai-overviews-for-local-businesses`, lastModified: new Date('2026-03-10').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/why-is-my-website-traffic-dropping-2026`, lastModified: new Date('2026-03-11').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/video-authority-layer-ai-assets-2026`, lastModified: new Date('2026-03-23').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/schema-markup-complete-guide`, lastModified: new Date('2026-02-08').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/what-is-zero-click-search`, lastModified: new Date('2026-01-15').toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-we-indexed-49-pages-48-hours`, lastModified: new Date('2026-02-01').toISOString(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/inw-basecamp-arizona-launch`, lastModified: new Date('2026-02-26').toISOString(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/facebook-ads-local-business-2026`, lastModified: new Date('2026-02-12').toISOString(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/custom-audiences-facebook`, lastModified: new Date('2026-02-27').toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}

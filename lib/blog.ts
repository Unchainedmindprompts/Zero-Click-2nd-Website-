export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
};

// Insights taxonomy after the infrastructure reposition.
// AEO/GEO are no longer primary. PAID MEDIA is removed from the filter chips.
// Retired URLs stay live; they are simply not featured and not surfaced
// as related reading from active articles.
export const blogPosts: BlogPost[] = [
  {
    slug: 'from-recommended-to-actionable-luxe-window-works',
    title: 'From Recommended to Actionable: How Luxe Window Works Became Ready for AI Agents',
    category: 'CASE STUDIES',
    date: 'August 22, 2026',
    readTime: '12 min read',
    excerpt: 'How Luxe moved from AI discovery to a live, protected in-home consultation capability — what the authorized production test proved, and what it did not.',
    featured: true,
  },
  {
    slug: 'aeo-technical-seo-done-correctly',
    title: 'AEO Is Technical SEO Done Correctly for the AI Search Era',
    category: 'TECHNICAL',
    date: 'July 6, 2026',
    readTime: '13 min read',
    excerpt: 'Discovery work still matters. The incomplete takeaway is treating AEO as the product. The work underneath is business truth, a connected entity graph, and — when the business permits it — a controlled next step.',
    featured: true,
  },
  {
    slug: 'google-reviews-wont-save-you-from-ai-search',
    title: "Your Google Reviews Won't Save You From AI Search",
    category: 'BUSINESS TRUTH',
    date: 'July 2, 2026',
    readTime: '9 min read',
    excerpt: 'Reviews are proof. They are not a complete business model. AI can find a rating and still not know what you do, where you work, or what a customer is allowed to request.',
    featured: true,
  },
  {
    slug: 'why-your-website-cant-talk-to-ai',
    title: "The Language Problem: Why Your Website Can't Talk to AI — And What to Do About It",
    category: 'TECHNICAL',
    date: 'June 14, 2026',
    readTime: '14 min read',
    excerpt: 'AI systems read structured facts, not hope. Plugin schema is a delivery format. The product is an accurate business model machines can verify — and, later, act on safely.',
    featured: true,
  },
  {
    slug: 'google-ai-search-smb-entity-infrastructure',
    title: 'Google Is Turning Search Into an Answer Engine. Most SMB Websites Are Not Built for What Comes Next.',
    category: 'AGENTIC WEB',
    date: 'May 20, 2026',
    readTime: '14 min read',
    excerpt: 'Answer interfaces compress the journey from question to recommendation. The businesses that hold up are the ones with a clear, owned model — not the ones with the most pages.',
    featured: true,
  },
  {
    slug: 'entity-first-search-local-businesses',
    title: 'Entity-First Search: How Local Businesses Become the Answer AI Systems Recommend',
    category: 'BUSINESS TRUTH',
    date: 'May 9, 2026',
    readTime: '16 min read',
    excerpt: 'Recommendation starts with a real-world entity, not a pile of pages. The next requirement is knowing what that entity is allowed to do.',
    featured: true,
  },
  {
    slug: 'compressed-search-entity-trust',
    title: 'Compressed Search Is Coming: Why Entity Trust Will Matter More Than Content Volume',
    category: 'DISCOVERY',
    date: 'May 9, 2026',
    readTime: '18 min read',
    excerpt: 'When the list gets shorter, trust and a usable business model matter more than publishing more articles. Visibility is the discovery layer — not the complete product.',
    featured: true,
  },
  {
    slug: 'f1-framework-for-aeo',
    title: 'The F1 Framework for AEO: Why Most Businesses Are Trying to Win the AI Race in an Economy Car',
    category: 'AGENTIC WEB',
    date: 'April 23, 2026',
    readTime: '13 min read',
    excerpt: 'Historical AEO sequencing piece. The current Kodecite model is Truth, Capability, Control, Action, and Distribution — not chassis, engine, aero, and graphics.',
  },
  {
    slug: '2026-digital-land-rush-ai-visibility',
    title: 'The 2026 Digital Land Rush: Why Waiting on AI Visibility Could Cost Your Business Everything',
    category: 'DISCOVERY',
    date: 'March 7, 2026',
    readTime: '7 min read',
    excerpt: 'Earlier urgency essay on AI visibility. Kept live. The current offer is owned infrastructure, not a land rush.',
  },
  {
    slug: 'what-is-an-entity-graph',
    title: 'What Is an Entity Graph — And Why the Technology Behind It Has Been Hiding in Plain Sight for Over a Decade',
    category: 'BUSINESS TRUTH',
    date: 'April 17, 2026',
    readTime: '11 min read',
    excerpt: 'Schema.org is a language. An entity graph is that language used to publish one authoritative business. Discovery can follow. Action requires a second layer.',
  },
  {
    slug: 'below-the-content-layer',
    title: 'Below The Content Layer — Where Your Real SEO, AEO & GEO Opportunity Lives',
    category: 'BUSINESS TRUTH',
    date: 'April 22, 2026',
    readTime: '12 min read',
    excerpt: 'Content sits on top of identity, services, geography, and rules. If that layer is missing, more articles will not make the business usable by AI.',
  },
  {
    slug: 'false-legacy-layer-ai-visibility',
    title: 'The False Legacy Layer: Why Your AI Mentions Today Could Disappear Tomorrow',
    category: 'DISCOVERY',
    date: 'March 7, 2026',
    readTime: '8 min read',
    excerpt: 'Earlier essay on borrowed AI mentions. Kept live as a discovery note — not a featured offer.',
  },
  {
    slug: 'the-shortlist-problem',
    title: 'The Shortlist Problem: Why AI Will Recommend One Local Business — And Why It Might Not Be Yours',
    category: 'DISCOVERY',
    date: 'March 17, 2026',
    readTime: '10 min read',
    excerpt: 'Shortlists are a discovery problem. Being the name is still not the same as being safe to act with.',
  },
  {
    slug: 'the-ai-search-stack-nobody-is-building-for-small-businesses',
    title: "The AI Search Stack Nobody Is Building for Small Businesses — And Why That's About to Change",
    category: 'AGENTIC WEB',
    date: 'March 13, 2026',
    readTime: '6 min read',
    excerpt: 'Enterprise stacks and subscription platforms leave a gap: owned truth, owned capability, and owned control for a real service business.',
  },
  {
    slug: 'aeo-geo-making-seo-better',
    title: "AEO + GEO Isn't Replacing SEO — It's Making It Better",
    category: 'DISCOVERY',
    date: 'March 8, 2026',
    readTime: '9 min read',
    excerpt: 'SEO, AEO, and GEO overlap as discovery. They do not replace the need for a business model machines can verify and, when permitted, use.',
  },
  {
    slug: 'why-is-my-website-traffic-dropping-2026',
    title: 'Why Is My Website Traffic Dropping in 2026?',
    category: 'DISCOVERY',
    date: 'March 11, 2026',
    readTime: '8 min read',
    excerpt: 'Earlier diagnostic on zero-click and AI Overviews. Kept live. Traffic change is a discovery symptom, not the complete product.',
  },
  {
    slug: 'automation-vs-digital-real-estate',
    title: 'Why Automating Everything Is Failing Most Businesses',
    category: 'CONTROLLED ACTION',
    date: 'March 10, 2026',
    readTime: '7 min read',
    excerpt: 'Automation without an accurate business model and control layer is how false bookings and bad handoffs get created. Own the rules first.',
  },
  {
    slug: '10-millisecond-advantage-wearable-era',
    title: 'When Your Customer Stops Searching and Starts Asking — Is Your Business Ready?',
    category: 'AGENTIC WEB',
    date: 'March 17, 2026',
    readTime: '8 min read',
    excerpt: 'Asking is the new search. The business that holds up is the one a system can understand, verify, and safely take a next step with.',
  },
  {
    slug: 'video-authority-layer-ai-assets-2026',
    title: 'Why Your Videos Stay Trapped on YouTube — And How Owned Infrastructure Turns Them Into AI Authority Assets in 2026',
    category: 'DISCOVERY',
    date: 'March 23, 2026',
    readTime: '8 min read',
    excerpt: 'Owned video pages can support discovery. They still sit on top of business truth. They do not, by themselves, create a safe action.',
  },
  {
    slug: 'how-to-rank-in-google-ai-overviews-for-local-businesses',
    title: 'How to Rank in Google AI Overviews for Local Businesses',
    category: 'DISCOVERY',
    date: 'March 10, 2026',
    readTime: '6 min read',
    excerpt: 'A discovery guide. Appearing in an Overview is visibility — one layer, not a complete agent-ready business.',
  },
  {
    slug: 'what-is-zero-click-search',
    title: 'What Is Zero Click Search and Why Your Business Is Invisible',
    category: 'DISCOVERY',
    date: 'January 15, 2026',
    readTime: '4 min read',
    excerpt: 'Zero-click is a discovery shift. The complete job is making the business understandable, verifiable, and safe to act with.',
  },
  {
    slug: 'schema-markup-complete-guide',
    title: 'Schema Markup: The Complete Guide for Local Service Businesses',
    category: 'TECHNICAL',
    date: 'February 8, 2026',
    readTime: '5 min read',
    excerpt: 'How to publish business truth in Schema.org. Schema is a delivery format. It does not make AI know a business with certainty, and it is not an action endpoint.',
  },
  {
    slug: 'how-we-indexed-49-pages-48-hours',
    title: 'How We Indexed 49 New Pages in 48 Hours — The Luxe Window Works Case Study',
    category: 'CASE STUDIES',
    date: 'February 1, 2026',
    readTime: '5 min read',
    excerpt: 'The earlier Luxe chapter: owned rebuild and indexing. The later chapter is the live consultation capability.',
  },
  {
    slug: 'inw-basecamp-arizona-launch',
    title: 'Same-Day Schema Validation: The INW Basecamp Arizona Launch',
    category: 'CASE STUDIES',
    date: 'February 26, 2026',
    readTime: '4 min read',
    excerpt: 'Earlier same-day launch note, including Facebook campaigns. Kept live. Not a featured offer.',
  },
  {
    slug: 'facebook-ads-local-business-2026',
    title: 'Facebook Ads for Local Service Businesses in 2026: The Flywheel Method',
    category: 'ARCHIVE',
    date: 'February 12, 2026',
    readTime: '5 min read',
    excerpt: 'Historical paid-media article. URL stays live. Paid media is not part of the current Kodecite offer.',
  },
  {
    slug: 'custom-audiences-facebook',
    title: 'The Three Custom Audiences Every Local Business Needs on Facebook',
    category: 'ARCHIVE',
    date: 'February 27, 2026',
    readTime: '4 min read',
    excerpt: 'Historical paid-media article. URL stays live. Paid media is not part of the current Kodecite offer.',
  },
];

export const CATEGORIES = [
  'ALL',
  'AGENTIC WEB',
  'BUSINESS TRUTH',
  'CAPABILITIES',
  'CONTROLLED ACTION',
  'DISCOVERY',
  'TECHNICAL',
  'CASE STUDIES',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const RETIRED_FROM_SURFACING = [
  '2026-digital-land-rush-ai-visibility',
  'false-legacy-layer-ai-visibility',
  'f1-framework-for-aeo',
  'why-is-my-website-traffic-dropping-2026',
  'inw-basecamp-arizona-launch',
  'facebook-ads-local-business-2026',
  'custom-audiences-facebook',
] as const;

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostsByCategory(category: Category): BlogPost[] {
  if (category === 'ALL') return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

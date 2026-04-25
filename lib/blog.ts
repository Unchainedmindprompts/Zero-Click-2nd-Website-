export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
};

// Single source of truth for blog index.
// Dates and excerpts derived from each post's metadata export + blogPostingSchema.
// Categories mapped to design-system filter chips:
// STRATEGY | FRAMEWORK | FOUNDATIONS | TECHNICAL | PLATFORM | PAID MEDIA | CASE STUDY | DIAGNOSTIC
export const blogPosts: BlogPost[] = [
  {
    slug: 'f1-framework-for-aeo',
    title: 'The F1 Framework for AEO: Why Most Businesses Are Trying to Win the AI Race in an Economy Car',
    category: 'FRAMEWORK',
    date: 'April 23, 2026',
    readTime: '13 min read',
    excerpt: 'Most AEO advice focuses on the wrong layer. The businesses winning AI discovery built the stack in the right order — chassis, engine, aero, graphics. Here is what that means and how to sequence the work.',
    featured: true,
  },
  {
    slug: '2026-digital-land-rush-ai-visibility',
    title: 'The 2026 Digital Land Rush: Why Waiting on AI Visibility Could Cost Your Business Everything',
    category: 'STRATEGY',
    date: 'March 7, 2026',
    readTime: '7 min read',
    excerpt: 'In 2026, AI visibility is the new ocean-front property for local businesses. Claim your digital real estate now — before PE roll-ups lock it up.',
    featured: true,
  },
  {
    slug: 'what-is-an-entity-graph',
    title: "What Is an Entity Graph — And Why the Technology Behind It Has Been Hiding in Plain Sight for Over a Decade",
    category: 'FOUNDATIONS',
    date: 'April 17, 2026',
    readTime: '11 min read',
    excerpt: "Schema.org launched in 2011 as the standard language of the internet. Over a decade later it's still misunderstood and misused — even by digital marketing practitioners. Here's what schema actually is, what an entity graph is, and why it matters more right now than it ever has.",
  },
  {
    slug: 'below-the-content-layer',
    title: 'Below The Content Layer — Where Your Real SEO, AEO & GEO Opportunity Lives',
    category: 'FOUNDATIONS',
    date: 'April 22, 2026',
    readTime: '12 min read',
    excerpt: 'The content layer conversation is everywhere right now — and most of it stops too soon. Here is the layer underneath that determines whether AI recommends you or skips you entirely.',
  },
  {
    slug: 'false-legacy-layer-ai-visibility',
    title: 'The False Legacy Layer: Why Your AI Mentions Today Could Disappear Tomorrow',
    category: 'STRATEGY',
    date: 'March 7, 2026',
    readTime: '8 min read',
    excerpt: "Your business is showing up in AI answers — but is it earned authority or borrowed time? Here's the truth about the False Legacy Layer and what it means for your market position.",
  },
  {
    slug: 'the-shortlist-problem',
    title: 'The Shortlist Problem: Why AI Will Recommend One Local Business — And Why It Might Not Be Yours',
    category: 'STRATEGY',
    date: 'March 17, 2026',
    readTime: '10 min read',
    excerpt: "As AI assistants and screenless wearables take over local discovery, recommendation lists will compress to one or two names per niche. Here's how to become one of them.",
  },
  {
    slug: 'the-ai-search-stack-nobody-is-building-for-small-businesses',
    title: "The AI Search Stack Nobody Is Building for Small Businesses — And Why That's About to Change",
    category: 'FOUNDATIONS',
    date: 'March 13, 2026',
    readTime: '6 min read',
    excerpt: "Enterprise SEO is built for enterprises. Subscription platforms are built for volume. Neither one gets you recommended by AI. Here's the gap in the market — and what fills it.",
  },
  {
    slug: 'is-geo-a-replacement-for-seo-or-an-addition',
    title: 'Is GEO a Replacement for SEO — Or Something You Add On Top?',
    category: 'STRATEGY',
    date: 'March 12, 2026',
    readTime: '10 min read',
    excerpt: "GEO doesn't replace SEO — it builds on top of it. Here's exactly how Generative Engine Optimization works alongside your existing SEO foundation and what you need to add to start appearing in AI-generated answers.",
  },
  {
    slug: 'aeo-geo-making-seo-better',
    title: "AEO + GEO Isn't Replacing SEO — It's Making It Better",
    category: 'STRATEGY',
    date: 'March 8, 2026',
    readTime: '9 min read',
    excerpt: 'When you build websites that language models can truly understand, trust, and cite, you get stronger rankings, richer snippets, and AI recommendations as a natural byproduct.',
  },
  {
    slug: 'why-is-my-website-traffic-dropping-2026',
    title: 'Why Is My Website Traffic Dropping in 2026?',
    category: 'DIAGNOSTIC',
    date: 'March 11, 2026',
    readTime: '8 min read',
    excerpt: "Organic traffic dropping with no clear reason? Google AI Overviews and zero-click search are causing 20–50% traffic declines for businesses. Here's what's happening and how to fix it.",
  },
  {
    slug: 'cold-load-vs-cached-ai-crawlers',
    title: "Your Site Feels Fast to You — But AI Crawlers See Something Very Different",
    category: 'TECHNICAL',
    date: 'March 23, 2026',
    readTime: '5 min read',
    excerpt: "Your browser remembers your website. AI crawlers never do. The difference between a warm cached load and a cold crawl is the difference between being cited by AI — and being invisible to it.",
  },
  {
    slug: 'automation-vs-digital-real-estate',
    title: 'Why Automating Everything Is Failing Most Businesses',
    category: 'STRATEGY',
    date: 'March 10, 2026',
    readTime: '7 min read',
    excerpt: "AI automation is failing 80–95% of businesses. The smarter play in 2026 isn't automating everything — it's making sure AI recommends you first.",
  },
  {
    slug: '10-millisecond-advantage-wearable-era',
    title: 'When Your Customer Stops Searching and Starts Asking — Is Your Business Ready?',
    category: 'STRATEGY',
    date: 'March 17, 2026',
    readTime: '8 min read',
    excerpt: "People are asking AI assistants and wearable devices for local business recommendations instead of searching Google. Here's what that means for your business — and what to do about it.",
  },
  {
    slug: 'video-authority-layer-ai-assets-2026',
    title: "Why Your Videos Stay Trapped on YouTube — And How Owned Infrastructure Turns Them Into AI Authority Assets in 2026",
    category: 'STRATEGY',
    date: 'March 23, 2026',
    readTime: '8 min read',
    excerpt: "Most service businesses upload videos and hope the algorithm rewards them. It won't. Here's how structured infrastructure turns your existing video content into AI-cited authority across ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  },
  {
    slug: 'ai-overviews-local-businesses',
    title: 'How to Get Your Local Business Featured in Google AI Overviews',
    category: 'STRATEGY',
    date: 'February 18, 2026',
    readTime: '5 min read',
    excerpt: "Google AI Overviews are replacing traditional search results for millions of queries. Here's the exact framework for getting local businesses cited as the source — not buried below it.",
  },
  {
    slug: 'how-to-rank-in-google-ai-overviews-for-local-businesses',
    title: 'How to Rank in Google AI Overviews for Local Businesses',
    category: 'STRATEGY',
    date: 'March 10, 2026',
    readTime: '6 min read',
    excerpt: 'Learn how local businesses can appear in Google AI Overviews through structured data, schema markup, E-E-A-T signals, and AI-first content strategies.',
  },
  {
    slug: 'why-website-burning-ai-tokens',
    title: "Why Your Website Is Burning Through AI Tokens — And Costing You Business",
    category: 'TECHNICAL',
    date: 'March 3, 2026',
    readTime: '5 min read',
    excerpt: "AI agents crawl your site on a token budget. If your WordPress, Wix, or Squarespace site burns through that budget before answering the question, you don't get recommended.",
  },
  {
    slug: 'what-is-zero-click-search',
    title: 'What Is Zero Click Search and Why Your Business Is Invisible',
    category: 'FOUNDATIONS',
    date: 'January 15, 2026',
    readTime: '4 min read',
    excerpt: 'AI Overviews, ChatGPT, and Perplexity are answering questions without sending traffic to websites. Learn what zero click search means for your business and the exact steps to stay visible.',
  },
  {
    slug: 'schema-markup-complete-guide',
    title: 'Schema Markup: The Complete Guide for Local Service Businesses',
    category: 'TECHNICAL',
    date: 'February 8, 2026',
    readTime: '5 min read',
    excerpt: 'A step-by-step guide to implementing JSON-LD schema markup that makes your business visible to AI. Covers LocalBusiness, Service, FAQPage, and BreadcrumbList schemas with real implementation details.',
  },
  {
    slug: 'wordpress-losing-ai-search',
    title: 'Why WordPress Sites Are Losing the AI Search War',
    category: 'PLATFORM',
    date: 'January 22, 2026',
    readTime: '4 min read',
    excerpt: 'Bloated plugins, slow Core Web Vitals, and poor technical structure are making WordPress sites invisible to AI search engines. Here\'s why custom Next.js wins — and what the numbers say.',
  },
  {
    slug: 'vercel-vs-wordpress-performance',
    title: 'Next.js vs. WordPress: Real Performance Numbers for Local Businesses',
    category: 'PLATFORM',
    date: 'February 22, 2026',
    readTime: '4 min read',
    excerpt: 'We ran the same site on both platforms. The results are not close. Core Web Vitals, Lighthouse scores, time to first byte, and AI crawler accessibility — the data that should change your hosting decision.',
  },
  {
    slug: 'how-we-indexed-49-pages-48-hours',
    title: 'How We Indexed 49 New Pages in 48 Hours — The Luxe Window Works Case Study',
    category: 'CASE STUDY',
    date: 'February 1, 2026',
    readTime: '5 min read',
    excerpt: 'The complete technical breakdown of the Luxe Window Works SEO overhaul — how a Post Falls, Idaho window treatments business went from 75 to 124 indexed pages in 48 hours with zero schema errors.',
  },
  {
    slug: 'inw-basecamp-arizona-launch',
    title: 'Same-Day Schema Validation: The INW Basecamp Arizona Launch',
    category: 'CASE STUDY',
    date: 'February 26, 2026',
    readTime: '4 min read',
    excerpt: 'From concept to live landing page, validated schema, and active Facebook campaigns in one day. The complete behind-the-scenes story of how we opened a new market for an existing business in hours.',
  },
  {
    slug: 'facebook-ads-local-business-2026',
    title: 'Facebook Ads for Local Service Businesses in 2026: The Flywheel Method',
    category: 'PAID MEDIA',
    date: 'February 12, 2026',
    readTime: '5 min read',
    excerpt: 'Stop running ads that drain budget. Build a Facebook ad system that compounds — pixel data feeding audiences, retargeting warming leads, and lookalikes scaling what works. The Flywheel Method explained.',
  },
  {
    slug: 'custom-audiences-facebook',
    title: 'The Three Custom Audiences Every Local Business Needs on Facebook',
    category: 'PAID MEDIA',
    date: 'February 27, 2026',
    readTime: '4 min read',
    excerpt: "Most businesses set up one broad audience and wonder why their ads don't convert. These three layered audiences — awareness, intent, and retargeting — are the foundation of every campaign we build.",
  },
];

export const CATEGORIES = [
  'ALL',
  'STRATEGY',
  'FRAMEWORK',
  'FOUNDATIONS',
  'TECHNICAL',
  'PLATFORM',
  'PAID MEDIA',
  'CASE STUDY',
  'DIAGNOSTIC',
] as const;

export type Category = (typeof CATEGORIES)[number];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostsByCategory(category: Category): BlogPost[] {
  if (category === 'ALL') return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

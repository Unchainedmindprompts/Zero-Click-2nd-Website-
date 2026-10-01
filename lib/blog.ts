export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
};

// Insights span the customer journey: understanding, evidence, discovery and action.
// Article copy revised October 1, 2026; original publication dates are preserved.
// Historical paid-media work is not part of the current offer.
//
// Retired URLs stay live at /blog/<slug> and remain in sitemap.ts.
// They are excluded from Insights listing, featured cards, category chips,
// category counts, and related-reading. Direct URL access is unchanged.
// Do not redirect, noindex, delete, or 410 those pages in this PR.
export const blogPosts: BlogPost[] = [
  {
    slug: 'from-recommended-to-actionable-luxe-window-works',
    title: "How an AI Assistant Sent Luxe Window Works a Real Consultation Request",
    category: "CASE STUDIES",
    date: 'August 22, 2026',
    readTime: "7 min read",
    excerpt: "The business information, request rules and production test that let an outside AI submit one real consultation request to Luxe Window Works.",
    featured: true,
  },
  {
    slug: 'aeo-technical-seo-done-correctly',
    title: "What Technical SEO Gives Your Customer’s AI Assistant",
    category: "TECHNICAL",
    date: 'July 6, 2026',
    readTime: "5 min read",
    excerpt: "A practical technical foundation for readable business facts, connected evidence and reliable customer actions across search and AI.",
  },
  {
    slug: 'google-reviews-wont-save-you-from-ai-search',
    title: "Turn Your Reputation Into Evidence an AI Assistant Can Check",
    category: "BUSINESS TRUTH",
    date: 'July 2, 2026',
    readTime: "5 min read",
    excerpt: "Reviews matter. Connect them with relevant services, people, credentials and project evidence so customers and their assistants can assess fit.",
    featured: true,
  },
  {
    slug: 'why-your-website-cant-talk-to-ai',
    title: "Can Your Customer’s AI Assistant Understand Your Website?",
    category: "TECHNICAL",
    date: 'June 14, 2026',
    readTime: "5 min read",
    excerpt: "A practical website review for clear identity, relevant services, checkable evidence and a next step an outside assistant can use.",
  },
  {
    slug: 'google-ai-search-smb-entity-infrastructure',
    title: "Google AI Search and the Business Facts Customers Need",
    category: 'AGENTIC WEB',
    date: 'May 20, 2026',
    readTime: "5 min read",
    excerpt: "Prepare a small-business website for AI-assisted research with clear identity, useful services, verifiable evidence, and an accurate next step.",
  },
  {
    slug: 'entity-first-search-local-businesses',
    title: "Help AI Connect Your Business, People, Services and Proof",
    category: "BUSINESS TRUTH",
    date: 'May 9, 2026',
    readTime: "4 min read",
    excerpt: "A practical guide to modeling the relationships an AI assistant needs to evaluate a service business and help a customer take the next step.",
    featured: true,
  },
  {
    slug: 'compressed-search-entity-trust',
    title: "Compressed Search: Give AI a Clear Reason to Choose You",
    category: 'DISCOVERY',
    date: 'May 9, 2026',
    readTime: "5 min read",
    excerpt: "When assistants summarize business options, specific identity, credentials, evidence, and next steps help customers make an informed choice.",
  },
  {
    slug: 'f1-framework-for-aeo',
    title: "The F1 Framework: Sequence Your AI-Ready Business Build",
    category: 'AGENTIC WEB',
    date: 'April 23, 2026',
    readTime: "5 min read",
    excerpt: "Use a practical F1-inspired framework to prioritize access, business identity, decision-making content, evidence, and a tested customer action.",
  },
  {
    slug: '2026-digital-land-rush-ai-visibility',
    title: "A Practical 2026 Plan for AI-Ready Businesses",
    category: 'DISCOVERY',
    date: 'March 7, 2026',
    readTime: "5 min read",
    excerpt: "Build an owned business foundation for AI-assisted customers with a phased plan for accurate facts, evidence, and one useful next step.",
  },
  {
    slug: 'what-is-an-entity-graph',
    title: "What Is an Entity Graph? A Connected Map of Your Business",
    category: "BUSINESS TRUTH",
    date: 'April 17, 2026',
    readTime: "5 min read",
    excerpt: "Understand how an entity graph connects a business, its owner, services, locations and evidence, and where live agent capabilities begin.",
  },
  {
    slug: 'below-the-content-layer',
    title: "Before More Content, Make the Business Clear",
    category: "BUSINESS TRUTH",
    date: 'April 22, 2026',
    readTime: "4 min read",
    excerpt: "How to build a reliable business record that connects website copy, people, services, proof and the next action a customer can request.",
  },
  {
    slug: 'false-legacy-layer-ai-visibility',
    title: "Your Business Appears in AI. What Does That Prove?",
    category: 'DISCOVERY',
    date: 'March 7, 2026',
    readTime: "5 min read",
    excerpt: "Turn an AI mention into useful evidence: inspect accuracy, sources, customer fit, and the next step before deciding what to improve.",
  },
  {
    slug: 'the-shortlist-problem',
    title: "The Shortlist Problem: Help AI Understand Who You Fit",
    category: 'DISCOVERY',
    date: 'March 17, 2026',
    readTime: "5 min read",
    excerpt: "Help customers and their AI assistants compare your business using specific services, relevant proof, clear conditions, and a useful next step.",
  },
  {
    slug: 'the-ai-search-stack-nobody-is-building-for-small-businesses',
    title: "The Business Foundation Behind AI Discovery and Action",
    category: 'AGENTIC WEB',
    date: 'March 13, 2026',
    readTime: "5 min read",
    excerpt: "A practical small-business stack for readable identity, connected evidence, clear offers, and tested actions that customers can use through AI assistants.",
    featured: true,
  },
  {
    slug: 'aeo-geo-making-seo-better',
    title: "SEO, AEO and GEO: One Business, Many Ways to Be Found",
    category: "DISCOVERY",
    date: 'March 8, 2026',
    readTime: "5 min read",
    excerpt: "How search visibility, AI recommendations and delegated customer requests connect through accurate business information and a useful next step.",
  },
  {
    slug: 'why-is-my-website-traffic-dropping-2026',
    title: "Why Is Your Website Traffic Dropping? Diagnose It First",
    category: 'DISCOVERY',
    date: 'March 11, 2026',
    readTime: "5 min read",
    excerpt: "Investigate a traffic drop with tracking, indexing, query, and customer-outcome checks before attributing it to AI Overviews or zero-click search.",
  },
  {
    slug: 'automation-vs-digital-real-estate',
    title: "Where AI Helps a Business: Discovery and the Next Step",
    category: 'CONTROLLED ACTION',
    date: 'March 10, 2026',
    readTime: "5 min read",
    excerpt: "Choose AI investments by the customer journey: accurate discovery, useful comparisons, and a reliable next step, alongside internal time savings.",
  },
  {
    slug: '10-millisecond-advantage-wearable-era',
    title: "When Customers Ask Their AI to Find a Business",
    category: 'AGENTIC WEB',
    date: 'March 17, 2026',
    readTime: "5 min read",
    excerpt: "Prepare for customers who delegate to AI assistants: clear business facts, credible evidence, useful next steps, and a website that works across devices.",
    featured: true,
  },
  {
    slug: 'video-authority-layer-ai-assets-2026',
    title: "Make Your Business Videos Useful to Customers and AI",
    category: 'DISCOVERY',
    date: 'March 23, 2026',
    readTime: "5 min read",
    excerpt: "Connect videos to services, people, accurate transcripts, and structured metadata so customers and assistants can evaluate the work and take the next step.",
  },
  {
    slug: 'how-to-rank-in-google-ai-overviews-for-local-businesses',
    title: "Google AI Overviews: A Practical Guide for Local Businesses",
    category: 'DISCOVERY',
    date: 'March 10, 2026',
    readTime: "5 min read",
    excerpt: "Check Google AI search eligibility, improve service information and evidence, and measure the customer journey without promising AI Overview placement.",
  },
  {
    slug: 'what-is-zero-click-search',
    title: "What Zero-Click Search Means for Your Business",
    category: 'DISCOVERY',
    date: 'January 15, 2026',
    readTime: "5 min read",
    excerpt: "Understand zero-click search, distinguish attention from customer outcomes, and help people or their AI assistants take the right next step.",
  },
  {
    slug: 'schema-markup-complete-guide',
    title: "Schema Markup for a Business AI Can Understand",
    category: "TECHNICAL",
    date: 'February 8, 2026',
    readTime: "5 min read",
    excerpt: "A practical guide to business identity, people, services, evidence and offers in JSON-LD, with validation and an honest boundary between description and action.",
    featured: true,
  },
  {
    slug: 'how-we-indexed-49-pages-48-hours',
    title: "How We Indexed 49 New Pages in 48 Hours: The Earlier Luxe Chapter",
    category: "CASE STUDIES",
    date: 'February 1, 2026',
    readTime: "4 min read",
    excerpt: "The reported Luxe Window Works indexing result, what the foundation work addressed, and how discovery later connected to an agent-submitted consultation request.",
  },
  {
    slug: 'inw-basecamp-arizona-launch',
    title: "The INW Basecamp Arizona Launch: A Focused Foundation for a New Market",
    category: "CASE STUDIES",
    date: 'February 26, 2026',
    readTime: "4 min read",
    excerpt: "Lessons from an earlier same-day landing-page launch: define the offer, separate launch checks from market outcomes and connect inquiries to human follow-up.",
  },
  {
    slug: 'facebook-ads-local-business-2026',
    title: "Paid Traffic and an Owned Website: Lessons for Service Businesses",
    category: "ARCHIVE",
    date: 'February 12, 2026',
    readTime: "4 min read",
    excerpt: "An updated archival guide to matching paid traffic with a clear offer, useful evidence, qualified inquiries and honest measurement.",
  },
  {
    slug: 'custom-audiences-facebook',
    title: "Customer Context, Better Inquiries and the Limits of Audience Targeting",
    category: "ARCHIVE",
    date: 'February 27, 2026',
    readTime: "4 min read",
    excerpt: "An updated archival guide to engagement, website and customer audiences, with a focus on permission, fit and the owned customer journey.",
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

// Retired URLs stay live at /blog/<slug> and remain in the sitemap.
// They are excluded from Insights listing, featured cards, category chips,
// category counts, and related-reading. Direct URL access is unchanged.
const retiredSet = new Set<string>(RETIRED_FROM_SURFACING);

export function isRetiredFromSurfacing(slug: string): boolean {
  return retiredSet.has(slug);
}

export function getPublicPosts(): BlogPost[] {
  return blogPosts.filter((p) => !isRetiredFromSurfacing(p.slug));
}

export function getFeaturedPosts(): BlogPost[] {
  return getPublicPosts().filter((p) => p.featured);
}

export function getPostsByCategory(category: Category): BlogPost[] {
  const posts = getPublicPosts();
  if (category === 'ALL') return posts;
  return posts.filter((p) => p.category === category);
}

export function getVisibleCategories(): Category[] {
  const publicPosts = getPublicPosts();
  return CATEGORIES.filter((cat) => {
    if (cat === 'ALL') return true;
    return publicPosts.some((p) => p.category === cat);
  });
}

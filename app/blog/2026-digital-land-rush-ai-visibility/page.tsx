import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The 2026 Digital Land Rush: Why Waiting on AI Visibility Could Cost Your Business Everything | KodeCite.AI',
  description:
    'In 2026, AI visibility is the new ocean-front property for local businesses. Claim your digital real estate now — before PE roll-ups lock it up. Free AEO Audit inside.',
  alternates: {
    canonical: 'https://kodecite.ai/blog/2026-digital-land-rush-ai-visibility',
  },
  openGraph: {
    title:
      'The 2026 Digital Land Rush: Why Waiting on AI Visibility Could Cost Your Business Everything',
    description:
      'In 2026, AI visibility is the new ocean-front property for local businesses. Claim your digital real estate now — before PE roll-ups lock it up. Free AEO Audit inside.',
    url: 'https://kodecite.ai/blog/2026-digital-land-rush-ai-visibility',
    type: 'article',
    publishedTime: '2026-03-07',
    authors: ['Mark Abplanalp'],
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    'The 2026 Digital Land Rush: Why Waiting on AI Visibility Could Cost Your Business Everything',
  description:
    'In 2026, AI visibility is the new ocean-front property for local businesses. Claim your digital real estate now — before PE roll-ups lock it up. Free AEO Audit inside.',
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    url: 'https://kodecite.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'KodeCite.AI',
    url: 'https://kodecite.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kodecite.ai/logo.png',
    },
  },
  datePublished: '2026-03-07',
  dateModified: '2026-03-07',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/2026-digital-land-rush-ai-visibility',
  },
  url: 'https://kodecite.ai/blog/2026-digital-land-rush-ai-visibility',
  keywords: [
    'AI visibility',
    'answer engine optimization',
    'AEO',
    'local business AI',
    'AI search optimization',
    'ChatGPT local business',
    'Perplexity local search',
    'Google AI Overviews',
    'digital land rush 2026',
    'AI citations local business',
  ],
  articleSection: 'AI Search Strategy',
  wordCount: 1450,
  about: [
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'AI Search Visibility' },
    { '@type': 'Thing', name: 'Local Business Marketing' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'ChatGPT' },
    { '@type': 'Thing', name: 'Perplexity' },
    { '@type': 'Thing', name: 'Google AI Overviews' },
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'KodeCite.AI',
  description:
    'AI Search Optimization and Answer Engine Optimization (AEO) consultancy helping local and regional businesses become the default AI-cited authority in their market.',
  url: 'https://kodecite.ai',
  logo: 'https://kodecite.ai/logo.png',
  image: 'https://kodecite.ai/og-image.png',
  telephone: '',
  email: 'sales@kodecite.ai',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Post Falls',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.7182,
    longitude: -116.9516,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Post Falls',
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'City',
      name: "Coeur d'Alene",
      containedInPlace: { '@type': 'State', name: 'Idaho' },
    },
    {
      '@type': 'City',
      name: 'Spokane',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    {
      '@type': 'City',
      name: 'Spokane Valley',
      containedInPlace: { '@type': 'State', name: 'Washington' },
    },
    { '@type': 'AdministrativeArea', name: 'North Idaho' },
    { '@type': 'AdministrativeArea', name: 'Eastern Washington' },
    { '@type': 'AdministrativeArea', name: 'Inland Northwest' },
    { '@type': 'AdministrativeArea', name: 'Pacific Northwest' },
  ],
  knowsAbout: [
    'Answer Engine Optimization',
    'AI Search Optimization',
    'Local Business AI Visibility',
    'Schema Markup',
    'llms.txt',
    'agent.json',
    'Next.js Performance',
    'PageSpeed Optimization',
    'Structured Data',
    'Google AI Overviews',
    'ChatGPT Citations',
    'Perplexity Optimization',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AEO Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Free AEO Audit',
          description:
            'A no-obligation audit showing exactly where your business is invisible to AI and what it takes to fix it.',
          url: 'https://kodecite.ai/contact',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Machine-Priority Infrastructure',
          description:
            'Next.js websites scoring 100/100 on all PageSpeed metrics, built for AI crawlers first.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Source of Truth Engine',
          description:
            'Schema markup, llms.txt, and agent.json that ensure AI models describe your brand accurately.',
        },
      },
    ],
  },
  sameAs: ['https://kodecite.ai'],
};

export default function DigitalLandRush2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#6a5a48] mb-8">
            <Link href="/" className="hover:text-[#a0723a] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0a0806] truncate">The 2026 Digital Land Rush</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AI Search Strategy</span>
            <span className="text-[#6a5a48] text-sm font-poppins">8 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            The 2026 Digital Land Rush:{' '}
            <span className="text-[#a0723a]">Why Waiting on AI Visibility Could Cost Your Business Everything</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            In 2026, AI visibility is the new ocean-front property for local businesses. Claim your digital real estate now — before PE roll-ups lock it up. Free AEO Audit inside.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">MA</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">March 7, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article + Sidebar */}
      <section className="py-16 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-8">
                  Imagine standing on the coast of Southern California in 1955, looking at a mile of undeveloped ocean-front property that nobody has claimed yet. The land is there. The value is there. It just hasn&apos;t been recognized yet.
                </p>

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-8">
                  You could buy that beachfront property for almost nothing. Or you could wait until the rest of the world catches on.
                </p>

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-8">
                  That is exactly where we are in 2026 with AI visibility for local businesses.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Right now, there is a massive, largely unclaimed stretch of digital real estate — the space where AI systems like ChatGPT, Perplexity, and Google&apos;s AI Overviews go to answer questions about your industry, your services, and your market. When someone asks &quot;who is the best HVAC company in Post Falls?&quot; or &quot;what realtor knows Coeur d&apos;Alene the best?&quot; — there is a source that gets cited. There is a business that gets recommended.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  In most local markets right now, that prime digital territory is still wide open. Most local businesses haven&apos;t claimed it. Most haven&apos;t even realized it exists.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  That window won&apos;t stay open forever. In fact, it&apos;s already starting to close.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Most Expensive Phrase in Local Business: &quot;I&apos;ll Deal With It When It Happens&quot;
                </h2>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Why Waiting Feels Reasonable — And Why It Isn&apos;t
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Every business owner I talk to nods when I explain the shift happening in search and AI discovery. They get it. They understand that AI is changing how customers find businesses.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  And then a lot of them say some version of the same thing: &quot;I&apos;ll worry about it when it becomes a real problem for my business.&quot;
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  That instinct makes sense for most business decisions. If a new technology is speculative, waiting to see if it sticks is reasonable. But this is different. And here&apos;s why.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Right now, claiming strong AI visibility for your business is like buying that beachfront property before anyone else knows it&apos;s valuable. It is relatively fast, relatively affordable, and the competition for your specific market is still low.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  In 18 to 24 months, after the rest of the market catches on, that same effort will cost two to three times more and take two to three times longer — because you will be fighting against businesses that already own the territory.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  You are not just making a timing decision. You are making a compounding investment decision.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Waiting is not a neutral choice. Every month you delay is a month your competitor could be building an advantage that gets harder to close.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  How the Timeline Actually Works: Compounding Visibility
                </h2>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  AI Visibility Compounds Like a Portfolio — Early Investors Win Biggest
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Think about how a well-managed investment portfolio works. In the early months, the growth feels slow and unremarkable. But the compounding effect builds on itself. By the time several years have passed, the early investor is sitting on a position that a late investor simply cannot replicate — because the late investor missed the compounding window.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  AI visibility works the same way.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The 6, 12, and 18-Month Milestones for Local AI Dominance
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here is what the real timeline looks like for a local business that starts building structured AI visibility today:
                </p>

                {/* Timeline visual */}
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">COMPOUNDING VISIBILITY MILESTONES</p>
                  <div className="space-y-4">
                    {[
                      {
                        period: 'Months 1–6',
                        label: 'Foundation',
                        desc: 'Schema structured, pages machine-readable, speed optimized. Early AI citations begin appearing — Perplexity, ChatGPT, AI Overviews.',
                        color: 'text-[#6a5a48]',
                      },
                      {
                        period: 'Months 6–12',
                        label: 'Compounding Begins',
                        desc: 'More citations = more trust signals = higher AI response priority. Competitors without structured data remain invisible.',
                        color: 'text-[#0a0806]',
                      },
                      {
                        period: 'Months 12–18',
                        label: 'Local Dominance',
                        desc: 'Your business becomes the default recommended source for your category in your city. New competitors are years behind.',
                        color: 'text-[#a0723a]',
                      },
                    ].map((item) => (
                      <div key={item.period} className="flex items-start gap-4 p-4 bg-[#f8f5f0] rounded-lg border border-[rgba(100,70,30,0.15)]">
                        <div className="flex-shrink-0 min-w-[90px]">
                          <p className="text-[#a0723a] text-xs font-bold font-poppins">{item.period}</p>
                          <p className={`${item.color} text-sm font-semibold font-poppins`}>{item.label}</p>
                        </div>
                        <p className="text-[#6a5a48] text-xs font-poppins leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The businesses that wait until this becomes &quot;obvious&quot; will be trying to buy that beachfront lot after the houses are already built. The land still exists — but the price is completely different, the competition is entrenched, and the best spots are already taken.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Quiet Threat Most Local Business Owners Haven&apos;t Noticed Yet
                </h2>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Private Equity Is Already Buying Your Competition
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  There is another reason the timing matters more than most business owners realize, and it has nothing to do with AI directly.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Private equity firms have been quietly buying up local service businesses for years — HVAC companies, plumbing operations, roofing contractors, pest control services, property management firms. The roll-up strategy is simple: acquire dozens or hundreds of locations, standardize operations, centralize marketing, and use scale to dominate local markets.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  These firms already have the capital, the teams, and the technology infrastructure to move fast when a new channel opens up. And AI visibility is a new channel that is opening right now.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  When Corporate Competitors Move on AI, They Won&apos;t Move Slowly
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  When corporate-backed competitors in your market decide to prioritize AI optimization — and they will — they will not be one business owner trying to figure out schema markup in their spare time. They will deploy teams and standardized playbooks across dozens of locations simultaneously.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The independent business owner who waits for that moment to begin is not competing from behind. They are competing from far behind, against a funded opponent who already understands the terrain.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  But here is what matters: those corporate operations have a structural weakness that money cannot easily fix.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Advantage Corporate Money Can&apos;t Buy: Authentic Local Knowledge
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  AI systems do not just evaluate businesses based on size or ad spend. They evaluate sources based on fidelity, specificity, and trust. And in local markets, nothing creates trust signals faster than genuine, deep, authentic local knowledge.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A PE-backed HVAC company that acquired your local competitor can flood the market with generic content. They can implement schema across all their locations. They can build fast websites with professional design.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The Content PE Firms Simply Cannot Manufacture
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  What they cannot do is manufacture 15 years of real experience in your specific market. They cannot replicate the article you write about how the extreme temperature swings in North Idaho create unique insulation challenges in older homes. They cannot fake the review from your neighbor who you helped navigate a tricky installation in a tight crawl space. They cannot generate authentic content about the specific neighborhoods, seasonal patterns, and community quirks that make your market different from every other market.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  That authentic local depth, when properly structured for machine readability, becomes a compounding moat that corporate scale cannot easily replicate. AI systems increasingly reward genuine expertise and local specificity over generic authority.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The business that turns its authentic local knowledge into structured, machine-readable authority will outperform a funded competitor spending 10 times more on generic content.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  There is one more angle worth considering: if you ever choose to sell your business, being the dominant AI-cited authority in your local market makes you significantly more valuable to an acquirer. You are not just a business with customers — you are a business with an established, compounding digital presence that an acquirer inherits on day one.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Why the Window Is Open Right Now — And How Quickly It Closes
                </h2>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The Current State of AI Visibility in Most Local Markets
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  In most local markets across Northern Idaho, the Northwest, and the majority of mid-sized regional cities in the US, the current state of AI-structured visibility looks something like this: most local service businesses have little or no machine-readable schema. Most are built on platforms optimized for human visitors, not AI systems. Most have never heard of llms.txt or agent.json — the emerging signals that help AI agents identify and cite businesses by default.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  That is not a criticism. It is an opportunity.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  What Early Movers Get That Late Arrivals Never Can
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The digital real estate in your category and your market is largely unclaimed. The businesses that move now — before the rush, before corporate roll-ups deploy their teams, before every agency in the region starts offering the same services — get the compounding advantage of the early investor.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The businesses that wait will still have options. But those options will be more expensive, more competitive, and more time-consuming to execute. And they will be playing catch-up against businesses that have been compounding for 12, 18, or 24 months.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The land rush analogy holds precisely because of what happens after the rush. The people who bought early are sitting on assets that generate returns for decades. The people who bought late paid far more and waited far longer for the same outcome. And some of the best spots? Those were claimed long before the late buyers even started looking.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Window Is Open — But It Won&apos;t Stay That Way
                </h2>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Your Local Expertise Is Already the Raw Material AI Rewards
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  You built your business on something real: local expertise, genuine relationships, and a reputation earned one customer at a time. That is exactly the raw material AI systems are learning to reward.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The question is not whether AI-mediated discovery will matter for your business. It already does for a growing segment of your potential customers. The question is whether you will be the business that shows up as the trusted, cited authority when they ask — or whether you will let that territory get claimed by someone else.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The window is open. The land is still affordable. The compounding clock starts the day you begin.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  <Link href="https://kodecite.ai" className="text-[#a0723a] hover:underline">KodeCite.ai</Link> helps independent local and regional businesses build structured AI visibility through high-performance sites, machine-readable authority layers, and Answer Engine Optimization strategies that turn local expertise into permanent AI dominance.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Get your <Link href="/contact" className="text-[#a0723a] hover:underline">free AEO Audit</Link> at <Link href="https://kodecite.ai" className="text-[#a0723a] hover:underline">KodeCite.ai</Link>.
                </p>

                <div className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#a0723a] font-semibold font-poppins hover:text-[#8a5f2e] transition-colors"
                  >
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Back to The Playbook
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="eyebrow mb-4 text-xs">THE COMPOUNDING CLOCK</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">6mo</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">to first meaningful AI citations</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">2–3×</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">more effort required if you wait 18–24 months</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">Now</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">the window is still open</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(160,114,58,0.3)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Claim Your Digital Territory
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    Find out exactly where your business is invisible to AI — and what it takes to fix it. No obligation.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get Your Free AEO Audit
                  </Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-zero-click-search" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        What Is Zero Click Search and Why Your Business Is Invisible
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">8 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/schema-markup-complete-guide" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          Schema Markup: The Complete Guide for Local Service Businesses
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">12 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/ai-overviews-local-businesses" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          How to Get Your Local Business Featured in Google AI Overviews
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">7 min read</p>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-20 bg-[#1c1814] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">THE WINDOW IS OPEN</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[rgba(240,232,216,0.9)] mb-4">
            Don&apos;t Let Competitors Claim Your Digital Territory
          </h2>
          <p className="text-[rgba(240,232,216,0.6)] font-poppins mb-8 leading-relaxed">
            AI visibility compounds. Every month you wait is a month a competitor could be pulling ahead. Start with a{' '}
            <Link href="/contact" className="text-[#a0723a] hover:underline">free AEO Audit</Link>{' '}
            and see exactly where you stand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Get Your Free AEO Audit
            </Link>
            <Link href="/blog" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

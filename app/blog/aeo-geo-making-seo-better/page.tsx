import type { Metadata } from 'next';
import Link from 'next/link';
import BarChart from './BarChart';

export const metadata: Metadata = {
  title: "AEO + GEO Isn't Replacing SEO — It's Making It Better | KodeCite.AI",
  description:
    "When you build websites that language models can truly understand, trust, and cite, you get stronger rankings, richer snippets, and AI recommendations as a natural byproduct. Here's exactly why local businesses should act now.",
  alternates: {
    canonical: 'https://kodecite.ai/blog/aeo-geo-making-seo-better',
  },
  openGraph: {
    title: "AEO + GEO Isn't Replacing SEO — It's Making It Better",
    description:
      'When you build websites that language models can truly understand, trust, and cite, you get stronger rankings, richer snippets, and AI recommendations as a natural byproduct.',
    url: 'https://kodecite.ai/blog/aeo-geo-making-seo-better',
    type: 'article',
    publishedTime: '2026-03-08',
    authors: ['Mark Abplanalp'],
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: "AEO + GEO Isn't Replacing SEO — It's Making It Better",
  description:
    "When you build websites that language models can truly understand, trust, and cite, you get stronger rankings, richer snippets, and AI recommendations as a natural byproduct. Here's exactly why local businesses should act now.",
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
  datePublished: '2026-03-08',
  dateModified: '2026-03-08',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/aeo-geo-making-seo-better',
  },
  url: 'https://kodecite.ai/blog/aeo-geo-making-seo-better',
  keywords: [
    'AEO',
    'GEO',
    'answer engine optimization',
    'generative engine optimization',
    'AI search optimization',
    'local business SEO',
    'structured schema',
    'llms.txt',
    'agent.json',
    'AI recommendations',
    'local service business AI',
  ],
  articleSection: 'Search Strategy',
  wordCount: 1800,
  about: [
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'Generative Engine Optimization' },
    { '@type': 'Thing', name: 'Search Engine Optimization' },
    { '@type': 'Thing', name: 'Local Business Marketing' },
    { '@type': 'Thing', name: 'Structured Data' },
    { '@type': 'Thing', name: 'Agent-to-Agent Commerce' },
  ],
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'BrightEdge AI Search Research 2025',
      publisher: { '@type': 'Organization', name: 'BrightEdge' },
    },
    {
      '@type': 'CreativeWork',
      name: 'Semrush AI Visibility Report',
      publisher: { '@type': 'Organization', name: 'Semrush' },
    },
    {
      '@type': 'CreativeWork',
      name: 'Gartner Digital Markets Research',
      publisher: { '@type': 'Organization', name: 'Gartner' },
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does AEO replace traditional SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) do not replace traditional SEO — they amplify it. The same infrastructure that makes a site readable and trustworthy for AI language models also improves Google rankings, rich snippets, and Core Web Vitals scores. It is one strategy that wins across every channel simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do large language models decide which local business to recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LLMs evaluate four factors: extractability (can the model cleanly parse your business facts), factual consistency (does your information match across all platforms), entity authority (do you have clear E-E-A-T signals), and citation worthiness (has your content been referenced by trusted sources). The business with the most machine-readable, factually consistent, structurally complete presence wins the recommendation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Four-Layer Authority Engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Four-Layer Authority Engine is KodeCite.AI's framework for making a local business the trusted default recommendation for both AI agents and traditional search. The four layers are: (1) High-Performance Edge Infrastructure — sub-1-second load times on Next.js; (2) Zero-Error Structured Schema — LocalBusiness, Service, FAQ, and Review schema; (3) llms.txt — a structured plain-text file that tells language models what your business does and who it serves; (4) agent.json — a machine-readable capability file that enables Agent-to-Agent commerce.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is llms.txt and why does it matter for local businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "llms.txt is a structured plain-text file placed at your domain root that tells language models exactly what your business does, who it serves, and what it should be cited for. It functions as your business's handshake document with every LLM that indexes the web, helping AI systems accurately represent your business rather than guessing or hallucinating details.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is agent.json and how does it enable Agent-to-Agent commerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'agent.json is a machine-readable capability file that enables direct Agent-to-Agent (A2A) transactions. As AI agents begin booking appointments and placing orders on behalf of users, businesses with agent.json implemented will be the ones agents can transact with directly — booking appointments, placing service requests, and initiating commerce without requiring human intervention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which local service businesses are most affected by AI agent discovery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local services with high-intent, time-sensitive, trust-dependent decisions are most immediately affected: home services (HVAC, plumbing, roofing), professional services (legal, financial, real estate), health and wellness (dentists, chiropractors, physical therapy), restaurants, and auto repair. These are exactly the categories where people are most likely to delegate the discovery decision to an AI agent.',
      },
    },
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
    { '@type': 'City', name: 'Post Falls', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: "Coeur d'Alene", containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Spokane', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'City', name: 'Spokane Valley', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'AdministrativeArea', name: 'North Idaho' },
    { '@type': 'AdministrativeArea', name: 'Eastern Washington' },
    { '@type': 'AdministrativeArea', name: 'Inland Northwest' },
    { '@type': 'AdministrativeArea', name: 'Pacific Northwest' },
  ],
  knowsAbout: [
    'Answer Engine Optimization',
    'Generative Engine Optimization',
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
    'Agent-to-Agent Commerce',
  ],
};

const industryRows = [
  { industry: 'Home Services', examples: 'HVAC, Plumbing, Roofing', urgency: 'Critical', tag: 'High Intent' },
  { industry: 'Professional Services', examples: 'Legal, Financial, Real Estate', urgency: 'Critical', tag: 'Trust-Dependent' },
  { industry: 'Health & Wellness', examples: 'Dentists, Chiro, PT', urgency: 'High', tag: 'Time-Sensitive' },
  { industry: 'Restaurants & Food', examples: 'Dining, Catering, Delivery', urgency: 'High', tag: 'High Frequency' },
  { industry: 'Auto Services', examples: 'Repair, Detailing, Tires', urgency: 'High', tag: 'Urgent Need' },
];

const pillars = [
  {
    number: '01',
    title: 'High-Performance Edge Infrastructure',
    body: 'Sub-1-second load times via Next.js on Vercel Edge. AI crawlers abandon slow sites before reading them — speed is table stakes, not a bonus.',
  },
  {
    number: '02',
    title: 'Zero-Error Structured Schema',
    body: 'LocalBusiness, Service, FAQ, and Review schema with zero validation errors. Every field is a machine-readable fact that AI systems can cite with confidence.',
  },
  {
    number: '03',
    title: 'llms.txt — Your AI Identity File',
    body: 'A structured plain-text file that tells every LLM crawling the web exactly what your business does, who it serves, and what it should be cited for.',
  },
  {
    number: '04',
    title: 'agent.json — A2A Commerce Ready',
    body: "A machine-readable capability file that enables AI agents to transact with your business directly — booking appointments and initiating services on a user's behalf.",
  },
];

const checklistItems = [
  'Your schema errors drop to zero — Google immediately reads you as a trusted entity',
  'Your Core Web Vitals pass — AI crawlers and Google ranking systems both reward you',
  'Your llms.txt is live — every LLM that indexes the web now knows exactly who you are',
  'Your content answers real questions directly — AI systems extract and cite you',
  'Your NAP is consistent everywhere — entity recognition becomes unambiguous',
  'Your agent.json is deployed — you are ready for the A2A commerce era',
];

export default function AeoGeoMakingSEOBetter() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
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
            <span className="text-[#0a0806] truncate">AEO + GEO Making SEO Better</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Search Strategy</span>
            <span className="text-[#6a5a48] text-sm font-poppins">10 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            AEO + GEO Isn&apos;t Replacing SEO —{' '}
            <span className="text-[#a0723a]">It&apos;s Making It Better</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            When you build websites that language models can truly understand, trust, and cite, you get stronger rankings, richer snippets, and AI recommendations as a natural byproduct. Here&apos;s exactly why local businesses should act now.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">MA</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">March 8, 2026</p>
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
                  Every week, a local business owner asks some version of the same question: &ldquo;Should I be doing AEO and GEO instead of SEO — or in addition to it?&rdquo; The answer reframes the question entirely. AEO and GEO do not compete with SEO. They are SEO, upgraded. When you build websites that language models can truly parse and trust, traditional search rewards you too. It is one investment that wins every channel simultaneously.
                </p>

                {/* Section 1: The Moment Everything Changed */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Moment Everything Changed
                </h2>

                {/* Scenario Box */}
                <div
                  className="my-8 rounded-xl p-8 relative overflow-hidden"
                  style={{ background: '#1a2940', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="absolute top-4 left-5 text-8xl leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.08)', fontFamily: 'Georgia, serif' }}
                  >
                    &ldquo;
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#a0723a' }}>
                      THE COEUR D&apos;ALENE SCENARIO
                    </p>
                    <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(240,232,216,0.85)' }}>
                      A homeowner in Coeur d&apos;Alene asks Apple Intelligence: &ldquo;Find me the best-reviewed HVAC company near me that can do emergency service today.&rdquo; Apple Intelligence does not open Google. It queries its AI layer, synthesizes business data, cross-references structured signals, and returns one name. The homeowner calls that business.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(240,232,216,0.7)' }}>
                      The business that gets recommended was not the one that spent the most on Google Ads last month. It was the one whose digital infrastructure was readable, consistent, and credible enough for the AI to trust with a recommendation. That infrastructure is exactly what makes you rank in traditional search too.
                    </p>
                  </div>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  This scenario is not a projection. It is already happening via Meta Ray-Ban glasses, Perplexity, ChatGPT, and Google AI Overviews today. The businesses that win these recommendations share one characteristic: they have built websites that machines can read as clearly as humans do.
                </p>

                {/* Section 2: Why Rankings Are Becoming Secondary */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Why Rankings Are Becoming Secondary — And Why That Helps You
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  BrightEdge research found that 99% of AI Overview sources come from the top organic results. That single data point rewrites the conventional wisdom. A GEO win — being cited in an AI-generated answer — is nearly always also an SEO win. The infrastructure that earns AI trust earns ranking trust simultaneously. Here is why:
                </p>

                <ol className="space-y-4 mb-8">
                  {[
                    {
                      n: '1',
                      title: 'Extractability',
                      body: 'Can the model cleanly parse your business facts? Clean HTML, logical heading hierarchy, and direct-answer content all improve crawl efficiency — which is also what Google rewards with better rankings and featured snippets.',
                    },
                    {
                      n: '2',
                      title: 'Factual Consistency',
                      body: 'Does your information match across all platforms? Consistent NAP data, matching schema, and unified business details are the foundation of both local SEO and AI entity recognition.',
                    },
                    {
                      n: '3',
                      title: 'Entity Authority',
                      body: 'Do you have clear E-E-A-T signals? Schema, citations, reviews, and content depth that demonstrate genuine expertise are exactly what Google\'s quality raters and AI recommendation engines both look for.',
                    },
                    {
                      n: '4',
                      title: 'Citation Worthiness',
                      body: 'Has your content been referenced by trusted sources? Inbound links and references that build traditional domain authority also signal to language models that your content is worth citing.',
                    },
                  ].map((item) => (
                    <li key={item.n} className="flex gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm"
                        style={{ background: '#a0723a', color: '#f8f5f0' }}
                      >
                        {item.n}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0a0806] mb-1">{item.title}</p>
                        <p className="text-[#6a5a48] leading-relaxed text-sm">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Animated Bar Chart */}
                <BarChart />

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  {[
                    { stat: '99%', label: 'of AI Overview sources rank in organic top 10', source: 'BrightEdge 2025' },
                    { stat: '3×', label: 'more AI citations for sites with zero schema errors', source: 'Semrush AI Report' },
                    { stat: '68%', label: 'of local searches now trigger an AI-generated answer', source: 'Gartner Digital Markets' },
                  ].map((card) => (
                    <div
                      key={card.stat}
                      className="rounded-xl p-5 text-center"
                      style={{ background: '#1a2940', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <p className="font-playfair text-4xl font-bold mb-1" style={{ color: '#a0723a' }}>
                        {card.stat}
                      </p>
                      <p className="text-sm leading-snug mb-2" style={{ color: 'rgba(240,232,216,0.8)' }}>
                        {card.label}
                      </p>
                      <p className="text-xs" style={{ color: 'rgba(240,232,216,0.4)' }}>{card.source}</p>
                    </div>
                  ))}
                </div>

                {/* Section 3: Four-Layer Authority Engine */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The{' '}
                  <Link href="/services" className="text-[#1a56db] hover:underline">
                    Four-Layer Authority Engine
                  </Link>
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  KodeCite.AI&apos;s framework for making a local business the trusted default for both AI agents and traditional search is built on four layers that reinforce each other. Each layer independently improves traditional SEO metrics. Together, they create the machine-readable authority that AI systems cite and recommend.
                </p>

                {/* 2x2 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  {pillars.map((pillar) => (
                    <div
                      key={pillar.number}
                      className="rounded-xl p-6 transition-all duration-300 border hover:border-[rgba(160,114,58,0.6)]"
                      style={{
                        background: '#f2ede4',
                        border: '1px solid rgba(160,114,58,0.2)',
                      }}
                    >
                      <p className="font-playfair text-3xl font-bold mb-3" style={{ color: 'rgba(160,114,58,0.4)' }}>
                        {pillar.number}
                      </p>
                      <p className="font-semibold text-[#0a0806] mb-2 leading-snug">{pillar.title}</p>
                      <p className="text-[#6a5a48] text-sm leading-relaxed">{pillar.body}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Notice what every one of these layers does in parallel: it improves your traditional search performance. A faster site ranks better. Zero-error schema earns rich snippets. Consistent entity signals boost local pack visibility. Content that answers questions directly wins featured snippets. The{' '}
                  <Link href="/services" className="text-[#1a56db] hover:underline">
                    Four-Layer Authority Engine
                  </Link>{' '}
                  is not a separate strategy from SEO. It is SEO done at the level AI demands.
                </p>

                {/* Section 4: Local Service Businesses */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Local Service Businesses: Who Gets Hit First — And Who Wins First
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Not all businesses are equally affected by AI agent discovery. The categories most immediately impacted share three characteristics: high intent (the user has already decided to buy), time sensitivity (the decision has to be made now), and trust dependence (the wrong choice has real consequences). These are exactly the categories where people delegate the discovery decision to an AI agent.
                </p>

                {/* Four Scenario Boxes */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: '"Find me an HVAC tech who can come today."',
                      body: "A user asks their phone's AI assistant to book emergency HVAC service. The AI queries structured business data, checks reviews, confirms availability signals — and calls the business with the clearest, most complete profile. No Google search. No scrolling.",
                    },
                    {
                      title: '"Which dentist near me is accepting new patients?"',
                      body: 'A relocating family asks ChatGPT for a dentist recommendation in their new city. The AI synthesizes reviews, practice schema, and entity signals. The practice with FAQPage schema answering this exact question gets cited. The one without it does not exist in the response.',
                    },
                    {
                      title: '"Book a table for two at the best-reviewed Italian place."',
                      body: "An Apple Intelligence user doesn't search — they delegate. The AI cross-references restaurant schema, review signals, and reservation capability data. Businesses with agent.json deployed can complete the booking without human intervention.",
                    },
                    {
                      title: '"Who does the best roof replacement in Spokane Valley?"',
                      body: "Perplexity synthesizes contractor reviews, license signals, geographic schema, and structured content. The roofing company with hyper-local content and zero-error LocalBusiness schema becomes the cited authority. The one without it is invisible to the query.",
                    },
                  ].map((scenario, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-6 relative overflow-hidden"
                      style={{ background: '#1a2940', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div
                        className="absolute top-3 left-4 text-6xl leading-none select-none pointer-events-none"
                        style={{ color: 'rgba(255,255,255,0.06)', fontFamily: 'Georgia, serif' }}
                      >
                        &ldquo;
                      </div>
                      <div className="relative z-10">
                        <p className="font-semibold mb-2 italic" style={{ color: '#a0723a' }}>
                          {scenario.title}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,232,216,0.75)' }}>
                          {scenario.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Industry Table */}
                <div className="my-8 overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(160,114,58,0.2)' }}>
                  <table className="w-full min-w-[500px] text-sm">
                    <thead>
                      <tr style={{ background: '#1a2940' }}>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-wider uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>Industry</th>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-wider uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>Examples</th>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-wider uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>AI Urgency</th>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-wider uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {industryRows.map((row, i) => (
                        <tr
                          key={row.industry}
                          style={{ background: i % 2 === 0 ? '#f2ede4' : '#f8f5f0' }}
                        >
                          <td className="px-5 py-3 font-semibold text-[#0a0806]">{row.industry}</td>
                          <td className="px-5 py-3 text-[#6a5a48]">{row.examples}</td>
                          <td className="px-5 py-3">
                            <span
                              className="px-2 py-0.5 rounded text-xs font-semibold"
                              style={{
                                background: row.urgency === 'Critical' ? 'rgba(220,38,38,0.12)' : 'rgba(234,179,8,0.12)',
                                color: row.urgency === 'Critical' ? '#dc2626' : '#b45309',
                              }}
                            >
                              {row.urgency}
                            </span>
                          </td>
                          <td className="px-5 py-3">
                            <span
                              className="px-2 py-0.5 rounded text-xs font-semibold"
                              style={{ background: 'rgba(160,114,58,0.15)', color: '#a0723a' }}
                            >
                              {row.tag}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Section 5: The Beautiful Side Effect */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Beautiful Side Effect
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here is what makes the AEO + GEO + SEO convergence so powerful for local businesses right now: every action you take to become AI-readable automatically improves your traditional search performance. There is no tradeoff. When you fix your AEO infrastructure, you get a traditional SEO upgrade as a free side effect.
                </p>

                <div className="space-y-3 my-8">
                  {checklistItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: '#1d4ed8' }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#6a5a48] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Each one of those actions is an AEO action. Each one also improves your Google rankings, your rich snippet eligibility, your local pack visibility, and your Core Web Vitals scores. One infrastructure investment. Every channel rewarded.
                </p>

                {/* Section 6: What This Means Right Now */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  What This Means Right Now
                </h2>

                {/* Pull Quote */}
                <blockquote
                  className="my-8 pl-6 py-2"
                  style={{ borderLeft: '4px solid #1d4ed8' }}
                >
                  <p className="text-xl font-semibold italic leading-relaxed" style={{ color: '#0a0806' }}>
                    &ldquo;The question is no longer whether to do AEO alongside SEO. The question is whether you want to run one strategy that wins everywhere, or two separate strategies that each win somewhere.&rdquo;
                  </p>
                  <footer className="mt-3 text-sm" style={{ color: '#6a5a48' }}>
                    — Mark Abplanalp, KodeCite.AI
                  </footer>
                </blockquote>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Local service businesses in North Idaho, Eastern Washington, and markets like yours are still in the early window. Most competitors have not structured their presence for machine discovery. The businesses that move now get compounding advantages — AI citations build trust signals that improve rankings, which generate more AI citations. The flywheel starts with the first correctly implemented schema tag.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The businesses that wait are not just late to a new channel. They are watching their traditional SEO positions get eroded by competitors who built the infrastructure that wins both games simultaneously.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  <Link href="https://kodecite.ai" className="text-[#1a56db] hover:underline">KodeCite.ai</Link> builds the complete infrastructure — high-performance Next.js sites, zero-error schema, <Link href="/services" className="text-[#1a56db] hover:underline">llms.txt</Link> and <Link href="/services" className="text-[#1a56db] hover:underline">agent.json</Link> — so local businesses become the trusted default for both AI recommendations and traditional search simultaneously.
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
                  <p className="eyebrow mb-4 text-xs">AEO + GEO WIN = SEO WIN</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">99%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">of AI Overview sources rank in organic top results</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">1×</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">infrastructure investment wins AI and traditional search</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">Now</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">the window is still open in most local markets</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(160,114,58,0.3)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Ready to Win Both Channels?
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    Find out exactly how your site looks to AI right now — and what it takes to become the trusted default in your market.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Book Your Free Scaffolding Audit
                  </Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/false-legacy-layer-ai-visibility" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        The False Legacy Layer: Why Your AI Citations Could Disappear Tomorrow
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">9 min read</p>
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

      {/* CTA Block with radial glow */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: '#1c1814' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(160,114,58,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">ONE STRATEGY. EVERY CHANNEL.</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4" style={{ color: 'rgba(240,232,216,0.9)' }}>
            Build the Infrastructure That Wins AI <em>and</em> Google Simultaneously
          </h2>
          <p className="font-poppins mb-8 leading-relaxed" style={{ color: 'rgba(240,232,216,0.6)' }}>
            Most businesses still think they have to choose. They don&apos;t. Let&apos;s show you exactly where your current site falls short — and what it takes to become the cited, recommended, and ranked authority in your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Book Your Free Scaffolding Audit
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

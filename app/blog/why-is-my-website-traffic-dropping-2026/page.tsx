import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Is My Website Traffic Dropping in 2026? | KodeCite.AI',
  description:
    'Organic traffic dropping with no clear reason? Google AI Overviews and zero-click search are causing 20-50% traffic declines for businesses. Here\'s what\'s happening and how to fix it.',
  alternates: {
    canonical: 'https://kodecite.ai/blog/why-is-my-website-traffic-dropping-2026',
  },
  openGraph: {
    title: 'Why Is My Website Traffic Dropping in 2026?',
    description:
      'Your rankings are fine. Your traffic is falling. Here\'s the real reason — and what to do about it.',
    url: 'https://kodecite.ai/blog/why-is-my-website-traffic-dropping-2026',
    type: 'article',
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why Is My Website Traffic Dropping in 2026?',
  description:
    'If your organic traffic is declining in 2025 or 2026 and nothing has changed on your end, Google AI Overviews and zero-click search are almost certainly the cause. Here\'s what\'s happening and how to fix it.',
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    url: 'https://kodecite.ai',
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
  datePublished: '2026-03-11',
  dateModified: '2026-03-11',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/why-is-my-website-traffic-dropping-2026',
  },
  image: 'https://kodecite.ai/images/blog/website-traffic-dropping-2026.jpg',
  keywords: [
    'website traffic dropping',
    'Google AI Overviews',
    'zero-click search',
    'AEO',
    'answer engine optimization',
    'AI search optimization',
    'organic traffic decline 2026',
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my website traffic dropping in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common cause of organic traffic drops in 2025 and 2026 is Google\'s AI Overviews, which answer search queries directly on the results page — eliminating the need for users to click through to any website. This zero-click phenomenon can cause 20% to 50% declines in organic clicks even when rankings haven\'t changed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is zero-click search and how does it affect my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero-click search happens when Google answers a query directly in the search results through features like AI Overviews, Featured Snippets, or Knowledge Panels — meaning the user gets their answer without visiting any website. For businesses that rely on informational content to drive awareness and leads, zero-click search can significantly reduce organic traffic even while maintaining strong rankings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if Google AI Overviews are causing my traffic drop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Google Search Console, look for queries where impressions are holding steady or growing but clicks are declining. This divergence pattern — impressions up, clicks down — is the fingerprint of AI Overview impact. You can also manually search your top keywords to see if an AI Overview now appears at the top of results.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between SEO and AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional SEO (Search Engine Optimization) focuses on ranking in Google\'s blue link results through keywords, backlinks, and on-page optimization. AEO (Answer Engine Optimization) focuses on becoming the trusted source that AI systems select to generate their answers — which requires structured data, answer-first content, and consistent entity signals across the web.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get my business to appear in Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To appear in Google AI Overviews, businesses need to implement structured data (schema markup), create content that directly answers customer questions in a clear answer-first format, maintain consistent business information across all online directories, and build strong E-E-A-T signals. Schema markup alone can increase AI citation likelihood by up to 28%.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://kodecite.ai',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://kodecite.ai/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Why Is My Website Traffic Dropping in 2026?',
      item: 'https://kodecite.ai/blog/why-is-my-website-traffic-dropping-2026',
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  articleBody:
    "If your Google Analytics looks like a ski slope heading downhill and nothing has changed on your end, the answer is Google AI Overviews and zero-click search. AI Overviews are responsible for 20% to 50% declines in organic clicks for affected queries — even when rankings haven't moved.",
  wordCount: '1800',
  articleSection: 'AI Search Optimization',
  inLanguage: 'en-US',
};

// Chart data
const chartData = [
  { month: 'Mo 1', impressions: 20, clicks: 18 },
  { month: 'Mo 2', impressions: 25, clicks: 20 },
  { month: 'Mo 3', impressions: 32, clicks: 22 },
  { month: 'Mo 4', impressions: 42, clicks: 20 },
  { month: 'Mo 5', impressions: 55, clicks: 17 },
  { month: 'Mo 6', impressions: 65, clicks: 14 },
  { month: 'Mo 7', impressions: 72, clicks: 12 },
  { month: 'Mo 8', impressions: 80, clicks: 10 },
  { month: 'Mo 9', impressions: 85, clicks: 9 },
  { month: 'Mo 10', impressions: 90, clicks: 8 },
  { month: 'Mo 11', impressions: 95, clicks: 7 },
  { month: 'Mo 12', impressions: 100, clicks: 6 },
];

function TrafficDivergenceChart() {
  const width = 560;
  const height = 260;
  const paddingLeft = 48;
  const paddingRight = 24;
  const paddingTop = 40;
  const paddingBottom = 48;
  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  const maxVal = 100;
  const toX = (i: number) => paddingLeft + (i / (chartData.length - 1)) * chartW;
  const toY = (val: number) => paddingTop + chartH - (val / maxVal) * chartH;

  const impressionsPath = chartData
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(d.impressions)}`)
    .join(' ');
  const clicksPath = chartData
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(d.clicks)}`)
    .join(' ');

  const yTicks = [0, 25, 50, 75, 100];

  return (
    <div className="my-10 bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6 overflow-x-auto">
      <p className="font-poppins font-bold text-[#0a0806] text-sm mb-1">
        The AI Overview Traffic Pattern: Impressions Rise, Clicks Fall
      </p>
      <p className="font-poppins text-[#6a5a48] text-xs mb-4">Relative Volume (0–100) over 12 months — illustrative data</p>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full max-w-[560px]"
        aria-label="Chart showing impressions rising while clicks fall over 12 months"
      >
        {/* Grid lines */}
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={paddingLeft}
              y1={toY(tick)}
              x2={width - paddingRight}
              y2={toY(tick)}
              stroke="rgba(100,70,30,0.12)"
              strokeWidth={1}
            />
            <text
              x={paddingLeft - 6}
              y={toY(tick) + 4}
              textAnchor="end"
              fontSize={10}
              fill="#6a5a48"
              fontFamily="sans-serif"
            >
              {tick}
            </text>
          </g>
        ))}

        {/* X axis labels */}
        {chartData.map((d, i) => (
          i % 2 === 0 ? (
            <text
              key={i}
              x={toX(i)}
              y={height - 8}
              textAnchor="middle"
              fontSize={9}
              fill="#6a5a48"
              fontFamily="sans-serif"
            >
              {d.month}
            </text>
          ) : null
        ))}

        {/* AI Overviews annotation at month 3 */}
        <line
          x1={toX(2)}
          y1={paddingTop}
          x2={toX(2)}
          y2={paddingTop + chartH}
          stroke="rgba(100,70,30,0.25)"
          strokeWidth={1}
          strokeDasharray="4,3"
        />
        <text
          x={toX(2) + 4}
          y={paddingTop + 14}
          fontSize={9}
          fill="#a0723a"
          fontFamily="sans-serif"
          fontWeight="600"
        >
          AI Overviews expand
        </text>

        {/* Impressions line (purple) */}
        <path
          d={impressionsPath}
          fill="none"
          stroke="#7c3aed"
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Clicks line (orange) */}
        <path
          d={clicksPath}
          fill="none"
          stroke="#f97316"
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Legend */}
        <circle cx={paddingLeft + 8} cy={paddingTop - 18} r={5} fill="#7c3aed" />
        <text x={paddingLeft + 18} y={paddingTop - 14} fontSize={10} fill="#0a0806" fontFamily="sans-serif">
          Impressions
        </text>
        <circle cx={paddingLeft + 100} cy={paddingTop - 18} r={5} fill="#f97316" />
        <text x={paddingLeft + 110} y={paddingTop - 14} fontSize={10} fill="#0a0806" fontFamily="sans-serif">
          Clicks
        </text>
      </svg>
    </div>
  );
}

export default function WhyIsMyWebsiteTrafficDropping() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#6a5a48] mb-8">
            <Link href="/" className="hover:text-[#a0723a] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0a0806] truncate">Why Is My Website Traffic Dropping in 2026?</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[#6a5a48] text-sm font-poppins">9 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            Why Is My Website Traffic{' '}
            <span className="text-[#a0723a]">Dropping in 2026?</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            If your Google Analytics looks like a ski slope heading downhill and nothing has changed on your end — no redesign, no penalties, no obvious mistakes — you&apos;re not alone. Here&apos;s what&apos;s actually happening.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">KC</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">March 11, 2026</p>
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

            {/* Article Content */}
            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Thousands of business owners are watching their organic traffic decline in 2025 and 2026 with no idea why. The answer isn&apos;t a Google penalty. It&apos;s not your competitors outranking you. It&apos;s something far more fundamental — and if you don&apos;t understand what&apos;s happening, no amount of traditional SEO work will fix it.
                </p>

                {/* ── The Real Reason ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  The Real Reason Your Traffic Is Dropping
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Google changed the game. Again.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  For the past two decades, the path was simple: rank on page one, get clicks, get customers. SEO was the lever. Keywords, backlinks, page speed — pull the right levers and the traffic followed.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  That model is breaking down.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Google&apos;s AI Overviews — the AI-generated answer blocks that now appear at the top of search results — are answering questions directly on the results page. Users are getting what they need without clicking a single link. This phenomenon is called zero-click search, and it is the primary driver behind the traffic drops businesses are experiencing right now.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Research shows that AI Overviews and zero-click results are responsible for <strong className="text-[#0a0806]">20% to 50% declines in organic clicks</strong> for affected queries — even when a website&apos;s rankings haven&apos;t moved at all. You can be ranking #1 and still losing traffic. That&apos;s the new reality.
                </p>

                {/* ── Zero-Click Search ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  What Is Zero-Click Search and Why Does It Matter?
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Zero-click search happens when Google answers a query directly in the search results, eliminating the need for the user to visit any website. This isn&apos;t new — Featured Snippets have done this for years — but AI Overviews have dramatically expanded the scope.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Where Featured Snippets answered simple factual questions, AI Overviews now synthesize complex answers from multiple sources, covering topics that used to require clicking through to read a full article.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  The Queries Most Affected
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Not all traffic is affected equally. The queries hit hardest by zero-click are:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-[#4a3b2c]">
                  <li><strong className="text-[#0a0806]">Informational queries</strong> — &ldquo;how to,&rdquo; &ldquo;what is,&rdquo; &ldquo;why does&rdquo; — content that answers questions</li>
                  <li><strong className="text-[#0a0806]">Local service queries</strong> — &ldquo;best HVAC company near me,&rdquo; &ldquo;top divorce attorney in [city]&rdquo;</li>
                  <li><strong className="text-[#0a0806]">Definition and comparison queries</strong> — &ldquo;difference between X and Y,&rdquo; &ldquo;is X worth it&rdquo;</li>
                  <li><strong className="text-[#0a0806]">Process queries</strong> — step-by-step guides, tutorials, checklists</li>
                </ul>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  If your business relies on informational content to drive awareness and leads, this is where you&apos;re feeling the pain most acutely.
                </p>

                {/* ── Traditional SEO vs AI-Era ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  Traditional SEO vs. AI-Era Visibility
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  The fundamental shift happening right now is the difference between <em>ranking</em> and being <em>recommended</em>.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Traditional SEO got you ranked. Being ranked meant being visible. Being visible meant getting clicks. AI search works differently — Google&apos;s AI doesn&apos;t just rank pages, it selects sources it trusts enough to pull from and synthesize into an answer. Getting selected requires a different set of signals than getting ranked.
                </p>

                {/* Comparison Table */}
                <div className="my-10 rounded-xl overflow-hidden border border-[rgba(100,70,30,0.2)]">
                  <div className="bg-[#1c1814] px-6 py-4">
                    <p className="font-poppins font-bold text-[rgba(240,232,216,0.9)] text-base tracking-wide">
                      Traditional SEO vs. AI-Era Visibility
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-poppins">
                      <thead>
                        <tr className="bg-[#f2ede4]">
                          <th className="text-left px-6 py-3 font-semibold text-[#0a0806] border-b border-[rgba(100,70,30,0.2)] w-1/2">
                            Traditional SEO
                          </th>
                          <th className="text-left px-6 py-3 font-semibold text-[#a0723a] border-b border-[rgba(100,70,30,0.2)] w-1/2">
                            AI-Era Visibility
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Optimizes for keyword rankings', 'Optimizes for AI citation and recommendation'],
                          ['Targets human readers primarily', 'Must communicate clearly to both humans and AI'],
                          ['Focuses on backlinks and domain authority', 'Focuses on structured data and entity clarity'],
                          ['Success metric: page one rankings', 'Success metric: AI citations and zero-click mentions'],
                          ['Page-level optimization', 'Site-wide schema and trust signal architecture'],
                          ['Measured in weeks', 'Compounding authority built over months'],
                        ].map(([left, right], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-[#f8f5f0]' : 'bg-[#f2ede4]'}>
                            <td className="px-6 py-3.5 text-[#4a3b2c] border-b border-[rgba(100,70,30,0.08)]">{left}</td>
                            <td className="px-6 py-3.5 text-[#4a3b2c] border-b border-[rgba(100,70,30,0.08)]">{right}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  The businesses appearing inside AI Overviews aren&apos;t just well-ranked — they&apos;re structured, authoritative, and clearly readable by AI systems. That&apos;s the new competitive advantage.
                </p>

                {/* ── How to Tell ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  How to Tell If AI Overviews Are Causing Your Drop
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Before you fix anything, confirm the diagnosis. Here&apos;s how to check:
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Step 1: Open Google Search Console
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Go to Performance → Search type: Web → set the date range to the last 6 months. Look for queries where your impressions are holding steady or growing but your clicks are declining. That pattern — <strong className="text-[#0a0806]">impressions up, clicks down</strong> — is the fingerprint of AI Overview impact.
                </p>

                <TrafficDivergenceChart />

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Step 2: Search Your Top Queries Manually
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Take the keywords that used to drive your most traffic and search them in Google. Is there an AI Overview at the top? If yes, that&apos;s your answer.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Step 3: Check Your Click-Through Rate Trend
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  In Search Console, toggle on Average CTR. If your CTR has been declining steadily over the past 6–12 months without a corresponding drop in position, AI Overviews are almost certainly absorbing the clicks that used to come to you.
                </p>

                {/* ── Three Levers ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  The Three Levers That Determine AI Visibility
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  If traditional rankings no longer guarantee traffic, what does? There are three foundational signals that determine whether Google&apos;s AI pulls from your site or passes you by.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Lever 1: Structured Data and Schema Markup
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Schema markup is code added to your website that tells search engines — and AI systems — exactly what your business does, who it serves, where it operates, and why it&apos;s credible. It&apos;s the difference between Google guessing what your content means and knowing with certainty.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  For local businesses and professional service firms, the most critical schema types are:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-[#4a3b2c]">
                  <li><strong className="text-[#0a0806]">LocalBusiness schema</strong> — your name, address, phone, hours, service area</li>
                  <li><strong className="text-[#0a0806]">Service schema</strong> — specific offerings and who they&apos;re for</li>
                  <li><strong className="text-[#0a0806]">FAQPage schema</strong> — direct answers to the questions your customers ask</li>
                  <li><strong className="text-[#0a0806]">Article/BlogPosting schema</strong> — signals content authority and authorship</li>
                  <li><strong className="text-[#0a0806]">BreadcrumbList schema</strong> — helps AI understand your site structure</li>
                </ul>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Studies indicate that properly implemented schema markup can increase the likelihood of AI citation by up to 28%. Most small business websites have none of it.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Lever 2: Answer-First Content Structure
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  AI systems are built to extract answers. They favor content that is structured to deliver the answer first, then the supporting detail — what journalists call the inverted pyramid.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  This means moving away from long introductions and burying the answer five paragraphs in. Lead with the answer. Use clear H2 and H3 headings that mirror the questions people are actually asking. Write in complete, standalone sentences that make sense without context. The goal is to make your content as easy as possible for an AI system to extract a precise, trustworthy answer from.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Lever 3: Entity Authority and Consistency
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  AI systems don&apos;t just evaluate individual pages — they build a picture of your entire business entity across the web. Your website, your Google Business Profile, review sites, directories, social profiles, and press mentions all contribute to how AI systems perceive your authority and trustworthiness.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Inconsistent information — different phone numbers, varying business names, outdated addresses — creates uncertainty. AI systems prioritize certainty. The businesses that get recommended are the ones where every data point across the web confirms the same clear, consistent identity.
                </p>

                {/* ── Industry ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  What This Means for Your Industry
                </h2>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Lawyers and Law Firms
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Legal queries are among the most heavily affected by AI Overviews. When someone searches &ldquo;do I need a personal injury lawyer&rdquo; or &ldquo;what does an estate attorney do,&rdquo; Google&apos;s AI now answers directly. Firms that aren&apos;t structured as authoritative sources for AI extraction are losing the awareness-stage traffic that used to feed their intake funnel.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  CPAs and Accounting Firms
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Tax and financial queries are high-intent and heavily searched. &ldquo;What can I deduct as a home office&rdquo; and &ldquo;do I need a CPA for my small business&rdquo; are exactly the types of questions AI Overviews now answer. CPAs who aren&apos;t optimized for AI citation are invisible at the moment a potential client is forming their decision.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Insurance Brokers
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Insurance queries are comparison-heavy — exactly the content type AI Overviews excel at synthesizing. Brokers who don&apos;t have structured, AI-readable content explaining their offerings, their differentiators, and their local service area are being passed over.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Trades — HVAC, Electricians, Plumbers
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Local service queries are increasingly answered with AI-generated recommendations. When someone searches &ldquo;best HVAC company in [city]&rdquo; or &ldquo;how do I know if my furnace needs replacing,&rdquo; Google&apos;s AI is synthesizing an answer and surfacing specific businesses. Trades that have invested in structured local data and authoritative content are the ones getting recommended.
                </p>

                {/* ── Winning ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  The Businesses Winning Right Now
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  The traffic drop you&apos;re experiencing isn&apos;t permanent — it&apos;s a transition. And like every transition, it rewards early movers.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  The businesses gaining ground right now share a common profile:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-[#4a3b2c]">
                  <li>Their websites speak clearly to AI systems through structured data</li>
                  <li>Their content directly answers the questions their customers are asking</li>
                  <li>Their digital presence is consistent, verified, and authoritative across the web</li>
                  <li>They&apos;ve moved beyond thinking about &ldquo;ranking&rdquo; and started thinking about being <em>recommended</em></li>
                </ul>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  This isn&apos;t a small tweak to your existing SEO strategy. It&apos;s a new layer — Answer Engine Optimization (AEO) — built on top of traditional SEO fundamentals but designed specifically for the AI-driven search environment.
                </p>

                {/* ── Next Steps ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  Your Next Steps
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  If your traffic is dropping and you now understand why, here&apos;s where to start:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-3 text-[#4a3b2c]">
                  <li><strong className="text-[#0a0806]">Run the Search Console diagnosis</strong> described above. Confirm that AI Overviews are the driver before changing anything.</li>
                  <li><strong className="text-[#0a0806]">Audit your schema markup.</strong> Use Google&apos;s Rich Results Test to check what structured data your site currently has. If the answer is nothing or very little, that&apos;s your first fix.</li>
                  <li><strong className="text-[#0a0806]">Review your content structure.</strong> Are you leading with answers? Are your headings written as questions your customers actually ask? Are your pages easy to scan and extract from?</li>
                  <li><strong className="text-[#0a0806]">Verify your entity consistency.</strong> Search your business name across Google, Yelp, your industry directories, and your Google Business Profile. Make sure every listing matches exactly.</li>
                  <li><strong className="text-[#0a0806]">Add an FAQ section to your key pages.</strong> Marked up with FAQPage schema, these become prime candidates for AI extraction and can appear directly in AI Overviews.</li>
                </ol>
                <p className="text-[#4a3b2c] leading-relaxed mb-8">
                  The businesses that take these steps in the next 6–12 months will be the ones showing up in AI Overviews while their competitors keep watching their traffic slide.
                </p>

                {/* Visual Checklist */}
                <div className="my-10 bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-8">
                  <p className="eyebrow mb-6 text-xs justify-start">YOUR AI VISIBILITY DIAGNOSTIC CHECKLIST</p>
                  <ul className="space-y-4">
                    {[
                      'Run Search Console diagnosis — look for impressions up, clicks down pattern',
                      "Audit schema markup with Google's Rich Results Test",
                      'Review content structure — are you leading with answers?',
                      'Verify entity consistency across all directories and listings',
                      'Add FAQ section with FAQPage schema to key pages',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 border-[#a0723a] bg-white flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#a0723a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-[#4a3b2c] font-poppins text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ Section */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6 mb-10">
                  {[
                    {
                      q: 'Why is my website traffic dropping in 2026?',
                      a: "The most common cause of organic traffic drops in 2025 and 2026 is Google's AI Overviews, which answer search queries directly on the results page — eliminating the need for users to click through to any website. This zero-click phenomenon can cause 20% to 50% declines in organic clicks even when rankings haven't changed.",
                    },
                    {
                      q: 'What is zero-click search and how does it affect my business?',
                      a: 'Zero-click search happens when Google answers a query directly in the search results through features like AI Overviews, Featured Snippets, or Knowledge Panels — meaning the user gets their answer without visiting any website. For businesses that rely on informational content to drive awareness and leads, zero-click search can significantly reduce organic traffic even while maintaining strong rankings.',
                    },
                    {
                      q: 'How do I know if Google AI Overviews are causing my traffic drop?',
                      a: 'In Google Search Console, look for queries where impressions are holding steady or growing but clicks are declining. This divergence pattern — impressions up, clicks down — is the fingerprint of AI Overview impact. You can also manually search your top keywords to see if an AI Overview now appears at the top of results.',
                    },
                    {
                      q: 'What is the difference between SEO and AEO?',
                      a: "Traditional SEO (Search Engine Optimization) focuses on ranking in Google's blue link results through keywords, backlinks, and on-page optimization. AEO (Answer Engine Optimization) focuses on becoming the trusted source that AI systems select to generate their answers — which requires structured data, answer-first content, and consistent entity signals across the web.",
                    },
                    {
                      q: 'How do I get my business to appear in Google AI Overviews?',
                      a: 'To appear in Google AI Overviews, businesses need to implement structured data (schema markup), create content that directly answers customer questions in a clear answer-first format, maintain consistent business information across all online directories, and build strong E-E-A-T signals. Schema markup alone can increase AI citation likelihood by up to 28%.',
                    },
                  ].map(({ q, a }, i) => (
                    <div key={i} className="border-b border-[rgba(100,70,30,0.15)] pb-6">
                      <h3 className="font-poppins font-semibold text-[#0a0806] text-base mb-2">{q}</h3>
                      <p className="text-[#4a3b2c] text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>

                {/* Back to blog */}
                <div className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#a0723a] font-semibold font-poppins hover:text-[#1a56db] transition-colors"
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

                {/* Key Stats */}
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs justify-start">BY THE NUMBERS</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">20–50%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">decline in organic clicks from AI Overview impact, even with stable rankings</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">28%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">increase in AI citation likelihood with proper schema markup</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">60%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">of Google searches now end without a single click</p>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Is AI Killing Your Traffic?
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We diagnose exactly why your traffic is dropping and rebuild your digital presence to get recommended — not just ranked.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get Your Free Audit
                  </Link>
                </div>

                {/* Related Posts */}
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs justify-start">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-zero-click-search" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        What Is Zero Click Search and Why Your Business Is Invisible
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">8 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/how-to-rank-in-google-ai-overviews-for-local-businesses" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          How to Rank in Google AI Overviews for Local Businesses
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">10 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/schema-markup-complete-guide" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          Schema Markup: The Complete Guide for Local Service Businesses
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">12 min read</p>
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

      {/* CTA */}
      <section className="py-20 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">STOP LOSING TRAFFIC</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#0a0806] mb-4">
            Ready to Get Recommended Instead of Ignored?
          </h2>
          <p className="text-[#6a5a48] font-poppins mb-8 leading-relaxed">
            The structured data, content strategy, and entity clarity that earns AI citations takes less time to build than you think — and the competitive window won&apos;t stay open. Let&apos;s talk about your site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Start the Conversation
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

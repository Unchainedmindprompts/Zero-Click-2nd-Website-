import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The AI Search Stack Nobody Is Building for Small Businesses — And Why That\'s About to Change',
  description:
    'Enterprise SEO is built for enterprises. Subscription platforms are built for volume. Neither one gets you recommended by AI. Here\'s the gap in the market — and what fills it.',
  openGraph: {
    title: 'The AI Search Stack Nobody Is Building for Small Businesses — And Why That\'s About to Change',
    description:
      'Enterprise SEO is built for enterprises. Subscription platforms are built for volume. Neither one gets you recommended by AI. Here\'s the gap in the market — and what fills it.',
    url: 'https://www.kodecite.ai/blog/the-ai-search-stack-nobody-is-building-for-small-businesses',
    type: 'article',
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The AI Search Stack Nobody Is Building for Small Businesses — And Why That\'s About to Change',
  description:
    'Enterprise SEO is built for enterprises. Subscription platforms are built for volume. Neither one gets you recommended by AI. Here\'s the gap in the market — and what fills it.',
  datePublished: '2026-03-13',
  dateModified: '2026-03-13',
  author: { '@id': 'https://www.kodecite.ai/#founder' },
  publisher: { '@id': 'https://www.kodecite.ai/#organization' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/the-ai-search-stack-nobody-is-building-for-small-businesses',
  },
  keywords: [
    'AI search optimization',
    'AEO',
    'GEO',
    'enterprise SEO',
    'small business AI visibility',
    'Next.js performance',
    'PageSpeed',
    'AI crawlers',
  ],
  articleSection: 'AEO & AI Search',
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why can\'t enterprise SEO platforms like BrightEdge help small businesses with AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enterprise SEO platforms are designed for Fortune 500 companies with dedicated marketing teams and $3,000–$10,000+ monthly budgets. They optimize existing infrastructure — they don\'t build it. Small businesses typically don\'t have the technical foundation these tools require to be effective, nor the team to operate them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why don\'t subscription website platforms work for AI search visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subscription platforms were built for the SEO landscape of 2015–2020. Their shared infrastructure typically delivers page load times of 3–10 seconds and PageSpeed scores of 40–65. AI crawlers operate on token budgets and skip slow, bloated sites before processing the most important content — meaning subscription platform sites are largely invisible to AI systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean to build a website from the ground up for AI discoverability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI-native website starts with edge infrastructure — Next.js deployed on a global CDN for sub-second load times and PageSpeed scores of 90+. Layered on top: answer-first content architecture, custom JSON-LD schema per page type, a complete SEO foundation (entity consistency, Google Business Profile, llms.txt), and AEO/GEO optimization. Every layer is built to be machine-readable from the first byte.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does page speed affect whether AI systems cite your business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI crawlers operate on token budgets — they process a fixed amount of content per crawl session. A site that loads in 0.8 seconds gets fully processed. A site that loads in 5 seconds exhausts the crawler\'s budget before reaching key content. The result is incomplete indexing and near-zero citation in AI-generated answers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it too late to establish AI search visibility for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The window is still open — but it is closing. AI systems build trust in sources over time. Businesses establishing authority now, before their competitors understand what is happening, will hold that position through future model updates and algorithm changes. Waiting means finding the position occupied.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kodecite.ai/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'The AI Search Stack Nobody Is Building for Small Businesses',
      item: 'https://kodecite.ai/blog/the-ai-search-stack-nobody-is-building-for-small-businesses',
    },
  ],
};

export default function AISearchStackNobodyIsBuilding() {
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
            <span className="text-[#0a0806] truncate">The AI Search Stack Nobody Is Building for Small Businesses</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[#6a5a48] text-sm font-poppins">12 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            The AI Search Stack Nobody Is Building for Small Businesses —{' '}
            <span className="text-[#a0723a]">And Why That&apos;s About to Change</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            Enterprise SEO is built for enterprises. Subscription platforms are built for volume. Neither one gets you recommended by AI. Here&apos;s the gap in the market — and what fills it.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">MA</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">March 13, 2026</p>
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

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-8">
                  There is a gap in the market that almost nobody is talking about.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  On one end, enterprise SEO platforms — sophisticated, expensive, powerful tools built for corporations with dedicated marketing teams and five-figure monthly budgets. On the other end, subscription website builders and WordPress agencies — cheap, fast, templated, automated, built to serve thousands of businesses at once.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  In the middle: the overwhelming majority of small and mid-sized businesses in America. The local attorney. The independent financial advisor. The real estate agent building their own brand. The HVAC company that has been in business for twenty years and still can&apos;t get recommended by ChatGPT.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Both tiers claim to solve the AI discoverability problem. Neither one actually does — for fundamentally different reasons. And almost nobody is building the solution that sits in between.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  That is about to change. But first, you need to understand why the current market is failing you.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Three-Tier Market Nobody Is Talking About
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The AI search optimization market has quietly split into three distinct tiers. Understanding where each one sits — and what it actually delivers — is the first step toward making a decision that compounds instead of costs.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Tier One: Enterprise SEO Platforms
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Enterprise platforms are built for one customer: the Fortune 500. They offer powerful keyword research engines, competitive intelligence, automated on-page optimization, and AI-powered insights across thousands of pages simultaneously. They require dedicated SEO teams to operate, enterprise-grade integrations to connect, and monthly investments that start in the thousands and climb from there.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  What they do well is genuinely impressive. What they do not do is build the foundation. They assume you already have fast, technically sound infrastructure in place. They optimize what exists. They cannot fix a slow, bloated, AI-invisible site by layering reporting tools on top of it.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Tier Two: Subscription Website Platforms
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Subscription platforms — the real estate website builders, the WordPress agencies, the monthly SaaS site tools — promise simplicity. Pay monthly, get a website, get some automated blog content, get listed on Google. For years, this was good enough.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  It is no longer good enough. And the reason is infrastructure.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The average subscription platform site loads in 3 to 10 seconds on mobile. Industry benchmarks for 2026 require under 2.5 seconds to avoid bounce rates spiking 20 to 50 percent per additional second of delay. Real estate and local service traffic is now 60 to 68 percent mobile — buyers scrolling on phones, making split-second trust decisions based on whether your site loads before they lose patience.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  More critically: AI crawlers do not wait. They operate on token budgets — strict limits on how much content they process per crawl session. A slow, bloated site exhausts that budget before the crawler reaches your most important content. You get incomplete indexing at best, zero citation at worst.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Tier Three: Built From the Ground Up for AI
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  This tier barely exists yet. It is the gap in the market.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  A site built from scratch specifically for AI discoverability looks fundamentally different from anything in Tier One or Tier Two. It starts with edge infrastructure — Next.js deployed on global CDN servers that deliver content in milliseconds from wherever the user or crawler is located. It layers in answer-first content architecture, custom schema markup, a proper SEO foundation, and AEO/GEO optimization on top. Every layer is intentional. Every layer reinforces the one below it. The result is a site that AI systems do not just crawl — they trust, cite, and recommend.
                </p>

                {/* Market Landscape Table */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-6">
                  The Market Landscape at a Glance
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm font-poppins border-collapse">
                    <thead>
                      <tr className="bg-[#0a0806] text-[#f8f5f0]">
                        <th className="text-left p-3 font-semibold"></th>
                        <th className="text-left p-3 font-semibold">Enterprise Platforms</th>
                        <th className="text-left p-3 font-semibold">Subscription Builders</th>
                        <th className="text-left p-3 font-semibold">Built for AI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Target customer', 'Fortune 500', 'Small business volume', 'Small-mid business serious about AI'],
                        ['Monthly cost', '$3,000–$10,000+', '$150–$600', '$0 after build'],
                        ['You own it', 'No — software license', 'No — rented platform', 'Yes — outright'],
                        ['Infrastructure', 'Assumes you have it', 'Shared, templated, slow', 'Edge-optimized, sub-second'],
                        ['PageSpeed scores', 'Depends on your site', 'Typically 40–65', '90–100'],
                        ['AI schema', 'Reporting tools', 'Template-level', 'Custom per page/article'],
                        ['Content', 'Your team creates it', 'Auto-generated', 'Bespoke, answer-first'],
                        ['AI citation result', 'Possible if foundation exists', 'Rarely cited', 'Built to be cited'],
                        ['Team required', 'Yes — dedicated SEO dept', 'No', 'No'],
                      ].map(([label, col1, col2, col3], i) => (
                        <tr key={label} className={i % 2 === 0 ? 'bg-[#f2ede4]' : 'bg-[#f8f5f0]'}>
                          <td className="p-3 font-semibold text-[#0a0806]">{label}</td>
                          <td className="p-3 text-[#6a5a48]">{col1}</td>
                          <td className="p-3 text-[#6a5a48]">{col2}</td>
                          <td className="p-3 text-[#a0723a] font-medium">{col3}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Why Infrastructure Is the Discoverability Advantage Nobody Is Selling You
                </h2>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Most conversations about AI search optimization focus on content — what you write, how you structure it, which keywords you target. Content matters. But content sitting on slow, bloated infrastructure is like a perfectly written message that never gets delivered.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  AI systems crawl the web continuously. They evaluate sources not just on content quality but on technical signals — how fast the server responds, how cleanly the HTML is structured, how efficiently the page communicates its meaning. A site that delivers its most important content in 0.8 seconds with clean schema markup and proper heading hierarchy gets processed completely. A site that takes 5 seconds to load and buries its answers in walls of unstructured text gets skipped.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  This is not theory. It is how large language models process web content at scale.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  What Edge Infrastructure Actually Means
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-4">
                  Edge infrastructure means your site is not hosted on a single server somewhere in a data center. It is deployed across a global network of servers — every major city, every region — so that when a user in Miami or a crawler in Google&apos;s data center makes a request, the response comes from the nearest node in milliseconds.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-2">Next.js on Vercel&apos;s edge network delivers:</p>
                <ul className="list-none mb-6 space-y-2">
                  {[
                    'Time to First Byte (TTFB) under 100 milliseconds',
                    'Largest Contentful Paint (LCP) under 1.5 seconds — well inside Google\'s 2.5s threshold',
                    'Interaction to Next Paint (INP) under 100 milliseconds — half Google\'s 200ms threshold',
                    'Cumulative Layout Shift (CLS) near zero — pages don\'t jump as they load',
                    'PageSpeed Insights scores consistently in the 90 to 100 range',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#6a5a48]">
                      <span className="mt-1.5 w-4 h-0.5 bg-[#a0723a] flex-shrink-0 inline-block" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Subscription platform sites, by contrast, often deliver TTFB of 400 to 800 milliseconds and LCP of 3 to 6 seconds — on a good day. On shared hosting under traffic load, those numbers get worse.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Performance Gap in Real Numbers
                </h2>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The difference between a purpose-built AI-native site and a subscription platform site is not marginal. It is structural.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-4">
                  Load Time vs. Conversion Rate Impact
                </h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm font-poppins border-collapse">
                    <thead>
                      <tr className="bg-[#0a0806] text-[#f8f5f0]">
                        <th className="text-left p-3 font-semibold">Load Time</th>
                        <th className="text-left p-3 font-semibold">Bounce Rate Increase</th>
                        <th className="text-left p-3 font-semibold">Conversion Rate Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['1 second', 'Baseline', 'Baseline'],
                        ['2 seconds', '+9%', '-7%'],
                        ['3 seconds', '+22%', '-20%'],
                        ['5 seconds', '+38%', '-38%'],
                        ['10 seconds', '+123%', '-65%'],
                      ].map(([time, bounce, conversion], i) => (
                        <tr key={time} className={i % 2 === 0 ? 'bg-[#f2ede4]' : 'bg-[#f8f5f0]'}>
                          <td className="p-3 font-semibold text-[#0a0806]">{time}</td>
                          <td className="p-3 text-[#6a5a48]">{bounce}</td>
                          <td className="p-3 text-[#6a5a48]">{conversion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[#6a5a48] text-sm italic mb-6">
                  Source: Google/Deloitte Mobile Speed Study; Core Web Vitals 2025–2026 benchmarks
                </p>

                <div className="bg-[#f2ede4] border-l-4 border-[#a0723a] p-5 rounded-r-lg mb-8">
                  <p className="text-[#0a0806] font-semibold font-poppins mb-1">Worth noting:</p>
                  <p className="text-[#6a5a48] text-sm leading-relaxed">
                    2025–2026 retail and travel data continues to confirm the pattern — a 0.1-second improvement in load time lifts conversions 8–10% in high-intent verticals. The compounding effect of building fast from the start is not marginal.
                  </p>
                </div>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-4">
                  Core Web Vitals Thresholds (2026)
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-4">
                  Google&apos;s current passing thresholds — the bar every site is measured against:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm font-poppins border-collapse">
                    <thead>
                      <tr className="bg-[#0a0806] text-[#f8f5f0]">
                        <th className="text-left p-3 font-semibold">Metric</th>
                        <th className="text-left p-3 font-semibold">Passing Threshold</th>
                        <th className="text-left p-3 font-semibold">What It Measures</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#f2ede4]">
                        <td className="p-3 font-semibold text-[#0a0806]">LCP (Largest Contentful Paint)</td>
                        <td className="p-3 text-[#a0723a] font-medium">≤ 2.5 seconds</td>
                        <td className="p-3 text-[#6a5a48]">How fast main content loads</td>
                      </tr>
                      <tr className="bg-[#f8f5f0]">
                        <td className="p-3 font-semibold text-[#0a0806]">INP (Interaction to Next Paint)</td>
                        <td className="p-3 text-[#a0723a] font-medium">&lt; 200 milliseconds</td>
                        <td className="p-3 text-[#6a5a48]">How fast the page responds to input</td>
                      </tr>
                      <tr className="bg-[#f2ede4]">
                        <td className="p-3 font-semibold text-[#0a0806]">CLS (Cumulative Layout Shift)</td>
                        <td className="p-3 text-[#a0723a] font-medium">&lt; 0.1</td>
                        <td className="p-3 text-[#6a5a48]">Visual stability — does content jump around</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  According to Chrome UX Report data, 66%+ of sites now pass at least one Core Web Vitals threshold. Subscription builders and templated platforms consistently underperform the field — meaning your competitors on purpose-built infrastructure are pulling further ahead every month.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-4">
                  PageSpeed Reality Check
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm font-poppins border-collapse">
                    <thead>
                      <tr className="bg-[#0a0806] text-[#f8f5f0]">
                        <th className="text-left p-3 font-semibold">Platform Type</th>
                        <th className="text-left p-3 font-semibold">Typical PageSpeed Score</th>
                        <th className="text-left p-3 font-semibold">Typical LCP (Mobile)</th>
                        <th className="text-left p-3 font-semibold">AI Crawler Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#f2ede4]">
                        <td className="p-3 text-[#6a5a48]">Enterprise platform site</td>
                        <td className="p-3 text-[#6a5a48]">Varies</td>
                        <td className="p-3 text-[#6a5a48]">Varies</td>
                        <td className="p-3 text-[#6a5a48]">Can work if foundation is solid</td>
                      </tr>
                      <tr className="bg-[#f8f5f0]">
                        <td className="p-3 text-[#6a5a48]">WordPress / subscription builder</td>
                        <td className="p-3 text-[#6a5a48]">40–65</td>
                        <td className="p-3 text-[#6a5a48]">3–8 seconds</td>
                        <td className="p-3 text-[#6a5a48]">Partial indexing, low citation</td>
                      </tr>
                      <tr className="bg-[#f2ede4]">
                        <td className="p-3 font-semibold text-[#0a0806]">Next.js edge-deployed site</td>
                        <td className="p-3 text-[#a0723a] font-medium">90–100</td>
                        <td className="p-3 text-[#a0723a] font-medium">0.8–1.5 seconds</td>
                        <td className="p-3 text-[#a0723a] font-medium">Complete indexing, citation-ready</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  A 1-second load time has been shown to generate up to 3 times the conversion rate of a 5-second load. For AI crawlers operating on token budgets, that speed differential determines whether your content gets read at all.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The KodeCite.AI Methodology Stack
                </h2>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  What makes a site genuinely AI-discoverable is not any single element. It is a complete system where every layer is built correctly and each one reinforces the layers above and below it.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  This is the methodology we build from the ground up — for every client, every time.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Layer 1 — Edge Infrastructure
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Next.js deployed on Vercel&apos;s global edge network. Sub-second delivery. PageSpeed 90+. Core Web Vitals in the green. This is the chassis. Everything else sits on top of it.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Layer 2 — Content Architecture
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Answer-first structure on every page and article. H1 defines the primary question being answered. H2 sections break down the supporting arguments. H3 subsections provide specific detail. The most important answer comes first — not buried after three paragraphs of preamble. AI systems extract answers from the top of content blocks. We write for that behavior.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Layer 3 — Custom Schema Markup
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Not template schema copy-pasted across every page. Custom JSON-LD per article type — BlogPosting, FAQPage, Service, LocalBusiness, BreadcrumbList — each one specific to what that piece of content actually is and what question it answers. Validated against Google&apos;s Rich Results Test before deployment.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Layer 4 — SEO Foundation
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Technical health, keyword signals, entity consistency across every directory and platform. Google Business Profile, Bing Places, Apple Business Connect, llms.txt, agent.json. The signals that tell search engines and AI systems that this entity is real, authoritative, and consistent.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Layer 5 — AEO + GEO
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Answer Engine Optimization and Generative Engine Optimization layered on top of everything below. By the time this layer is added, the system beneath it is already doing its job. AEO structures content to be extracted as direct answers. GEO optimizes entity signals so AI systems confidently recommend the business by name.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Why This Gap Exists — And Why It Is Closing Fast
                </h2>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Enterprise platforms were not built for small businesses. The economics do not work — a $5,000 per month software subscription requires a team to operate and a marketing budget to justify. Small businesses cannot absorb that cost or complexity.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Subscription platforms were not built for AI. They were built for the SEO landscape of 2015 to 2020 — keyword-optimized pages, backlink accumulation, Google ranking factors that no longer dominate the buyer journey. The infrastructure they run on was never designed for the token-budget economics of AI crawlers. Retrofitting a slow, bloated WordPress site for AI discoverability is like installing a jet engine in a station wagon.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The reason nobody is building Tier Three at scale is that it cannot be scaled without sacrificing the thing that makes it work. Bespoke content written for a specific market, custom schema built for a specific business type, a methodology executed with care — these things take time. They require understanding both the technology and the business. That constraint is intentional. It is also the point.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Window Is Open — But Not Indefinitely
                </h2>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The businesses establishing AI visibility right now — appearing in ChatGPT recommendations, getting cited in Google AI Overviews, surfacing in Perplexity answers — are doing it before their competitors understand what is happening.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  AI systems build trust in sources over time. The businesses that establish that trust now will hold it through the next wave of model updates, search algorithm changes, and platform shifts. The businesses that wait will find the position occupied.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Enterprise SEO platforms will not build this for you. Subscription platforms cannot. The infrastructure, the content architecture, the schema, the SEO foundation, the AEO/GEO layer — all of it has to be built together, from the ground up, as a system.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-2 font-semibold text-[#0a0806]">
                  That is the stack nobody is building for small businesses.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Until now.
                </p>

                <div className="bg-[#f2ede4] border border-[rgba(100,70,30,0.2)] rounded-xl p-6 mb-8">
                  <p className="text-[#6a5a48] text-sm leading-relaxed italic">
                    KodeCite.AI builds AI-native digital foundations for small and mid-sized businesses — from edge infrastructure to generative engine optimization. We work with 3 to 5 new clients per month. If you&apos;re ready to stop being invisible to AI,{' '}
                    <Link href="/contact" className="text-[#a0723a] hover:text-[#E8C478] transition-colors font-semibold">
                      start the conversation
                    </Link>
                    .
                  </p>
                </div>

                {/* Back to blog */}
                <div className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#a0723a] font-semibold font-poppins hover:text-[#E8C478] transition-colors"
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
                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">BY THE NUMBERS</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">90–100</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">PageSpeed scores on edge-deployed sites</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">3×</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">higher conversion rate at 1s vs. 5s load time</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">3–5</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">new clients per month — intentionally limited</p>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Ready to Stop Being Invisible to AI?
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We build the complete AI-native stack — edge infrastructure, schema markup, answer-first content, and GEO — for 3 to 5 businesses per month.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Start the Conversation
                  </Link>
                </div>

                {/* Related Posts */}
                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/vercel-vs-wordpress-performance" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        Vercel vs. WordPress: The Performance Gap That Costs You AI Visibility
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
                      <Link href="/blog/aeo-geo-making-seo-better" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          AEO and GEO: Making SEO Better, Not Replacing It
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">9 min read</p>
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
          <p className="eyebrow mb-4">THE WINDOW IS OPEN</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#0a0806] mb-4">
            Build the Stack Before Your Competitors Do
          </h2>
          <p className="text-[#6a5a48] font-poppins mb-8 leading-relaxed">
            AI visibility compounds over time. The businesses that build the right foundation now will hold that position. We work with 3 to 5 clients per month — by design.
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

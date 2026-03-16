import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is GEO a Replacement for SEO — Or Something You Add On Top? | KodeCite.AI',
  description:
    "GEO doesn't replace SEO — it builds on top of it. Here's exactly how Generative Engine Optimization works alongside your existing SEO foundation and what you need to add to start appearing in AI-generated answers.",
  alternates: {
    canonical: 'https://kodecite.ai/blog/is-geo-a-replacement-for-seo-or-an-addition',
  },
  openGraph: {
    title: 'Is GEO a Replacement for SEO — Or Something You Add On Top?',
    description:
      "The businesses winning AI visibility right now didn't abandon SEO. They added GEO on top of it. Here's the difference and how to do both.",
    url: 'https://www.kodecite.ai/blog/is-geo-a-replacement-for-seo-or-an-addition',
    type: 'article',
    publishedTime: '2026-03-12',
    authors: ['Mark Abplanalp'],
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Is GEO a Replacement for SEO — Or Something You Add On Top?',
  description:
    "GEO and SEO aren't competing strategies — they're sequential layers. Here's exactly how Generative Engine Optimization builds on your existing SEO foundation, what it requires that SEO doesn't, and why the businesses getting this right now are the ones that will dominate AI-powered search.",
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
  datePublished: '2026-03-12',
  dateModified: '2026-03-12',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/is-geo-a-replacement-for-seo-or-an-addition',
  },
  keywords: [
    'GEO',
    'SEO',
    'generative engine optimization',
    'AEO',
    'answer engine optimization',
    'AI search optimization',
    'GEO vs SEO',
    'is GEO replacing SEO',
  ],
  articleSection: 'Search Strategy',
  wordCount: 2100,
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is GEO replacing SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — GEO builds on top of SEO rather than replacing it. AI systems use many of the same trust signals as traditional search engines — domain authority, content quality, technical site health — to evaluate which sources to cite. Strong SEO creates the foundation that makes GEO possible. The two strategies are sequential, not competing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between GEO and SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO optimizes your website to rank in traditional search engine results through keywords, backlinks, and technical site health. GEO optimizes your presence to be cited inside AI-generated answers across Google AI Overviews, ChatGPT, Perplexity, and other LLM platforms. GEO requires additional signals SEO doesn\'t — including structured schema markup, answer-first content structure, entity consistency across the web, and AI-readable files like llms.txt.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GEO — Generative Engine Optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generative Engine Optimization (GEO) is the practice of optimizing your digital presence to be cited and recommended by AI-generated responses. As AI platforms like Google AI Overviews, ChatGPT, and Perplexity increasingly answer search queries directly rather than returning a list of links, GEO focuses on becoming the trusted source these systems select — through structured data, authoritative content, and consistent entity signals across the web.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is AEO — Answer Engine Optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Answer Engine Optimization (AEO) focuses specifically on structuring content to directly answer the questions people ask AI systems — in a format that can be extracted and presented as an authoritative response. This includes FAQPage schema markup, answer-first content structure where the direct answer comes before supporting detail, and clear definitive statements that AI can cite with confidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to do both SEO and GEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — the businesses winning AI visibility right now have both. They have the SEO foundation that AI systems use to evaluate trustworthiness, and they've added the structured data, answer-first content, and entity signals that AI systems use to select their sources. Abandoning SEO for GEO, or waiting to add GEO until later, are both mistakes that leave visibility on the table.",
      },
    },
  ],
};

const definedTermSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'SEO',
    alternateName: 'Search Engine Optimization',
    description:
      'Optimizing your website to rank in traditional search engine results through keywords, backlinks, and technical site health.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'GEO',
    alternateName: 'Generative Engine Optimization',
    description:
      'Optimizing your digital presence to be cited and recommended by AI-generated responses across Google AI Overviews, ChatGPT, Perplexity, and emerging LLM platforms.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'AEO',
    alternateName: 'Answer Engine Optimization',
    description:
      'Structuring content to directly answer questions in a format AI systems can extract and present as authoritative answers, using FAQPage schema and answer-first content structure.',
  },
];

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
      name: 'Is GEO a Replacement for SEO — Or Something You Add On Top?',
      item: 'https://kodecite.ai/blog/is-geo-a-replacement-for-seo-or-an-addition',
    },
  ],
};

const termCards = [
  {
    abbr: 'SEO',
    full: 'Search Engine Optimization',
    definition:
      'Optimizing your website to rank in traditional search results through keywords, backlinks, and technical site health.',
    accent: '#a0723a',
  },
  {
    abbr: 'GEO',
    full: 'Generative Engine Optimization',
    definition:
      'Optimizing your presence to be cited by AI-generated responses across Google AI Overviews, ChatGPT, Perplexity, and emerging LLM platforms.',
    accent: '#1a56db',
  },
  {
    abbr: 'AEO',
    full: 'Answer Engine Optimization',
    definition:
      'Structuring content to directly answer questions in a format AI systems can extract and present as authoritative answers.',
    accent: '#0e7f5a',
  },
];

const comparisonRows = [
  { seo: 'Domain authority and trust', geo: 'Structured data AI can parse and cite' },
  { seo: 'Keyword rankings in blue links', geo: 'Citations inside AI-generated answers' },
  { seo: 'Technical site health', geo: 'Entity clarity across the web' },
  { seo: 'Quality content for human readers', geo: 'Answer-first content structured for AI extraction' },
  { seo: 'Backlink authority', geo: 'Consistent signals across directories and AI-readable files' },
  { seo: 'Page one visibility', geo: 'Visibility inside the answer itself' },
];

const geoRequirements = [
  {
    title: 'Structured Data and Schema Markup',
    body: "Schema markup — code that tells search engines and AI systems exactly what your content means — has existed for years but was largely optional for SEO purposes. For GEO, it's essential. AI systems use structured data to extract and verify information with confidence. Without it, they're guessing. And when they're guessing, they choose sources that make it easier. FAQPage schema, LocalBusiness schema, Article schema, Service schema — these aren't technical details for developers. They're the vocabulary your website uses to communicate directly with AI systems.",
  },
  {
    title: 'Answer-First Content Structure',
    body: "Traditional SEO content was often built around keyword density and topical coverage. The goal was to be comprehensive. AI systems reward a different structure — one that leads with the direct answer, then provides supporting detail. The inverted pyramid. Clear, definitive statements that can be extracted and cited without additional context. If your content buries the answer five paragraphs in after a lengthy introduction, AI systems will find a source that doesn't.",
  },
  {
    title: 'Entity Consistency Across the Web',
    body: "AI systems don't evaluate your website in isolation. They cross-reference your business identity across Google Business Profile, industry directories, review platforms, social profiles, and press mentions. Inconsistent information — different phone numbers, varying business names, outdated addresses — creates uncertainty. AI systems prioritize certainty.",
  },
  {
    title: 'AI-Readable Files',
    body: "Emerging standards like llms.txt and agent.json give AI crawlers explicit, structured information about who you are, what you do, and which content to prioritize. These files are the newest layer of GEO — and one of the least adopted, which makes early implementation a meaningful competitive advantage.",
  },
];

export default function IsGeoReplacementForSeo() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span className="text-[#0a0806] truncate">Is GEO a Replacement for SEO?</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Search Strategy</span>
            <span className="text-[#6a5a48] text-sm font-poppins">11 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            Is GEO a Replacement for SEO —{' '}
            <span className="text-[#a0723a]">Or Something You Add On Top?</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            GEO and SEO aren&apos;t competing strategies — they&apos;re sequential layers. Here&apos;s exactly how
            Generative Engine Optimization builds on your existing SEO foundation, what it requires that SEO
            doesn&apos;t, and why the businesses getting this right now are the ones that will dominate
            AI-powered search.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">MA</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">March 12, 2026</p>
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
                  If you&apos;ve been paying attention to the marketing conversation lately, you&apos;ve probably
                  encountered a new set of initials sitting alongside the familiar ones. SEO you know. Now
                  there&apos;s GEO — Generative Engine Optimization. And AEO — Answer Engine Optimization. And
                  suddenly everyone seems to have an opinion about whether these things replace what you&apos;ve
                  already built or simply add to it. The short answer is neither framing is quite right. And
                  understanding why matters more than most businesses realize.
                </p>

                {/* Section 1 */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  What SEO Actually Does — And What It Doesn&apos;t
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Search Engine Optimization has been the dominant framework for online visibility for nearly
                  three decades. The premise is straightforward: optimize your website so that Google&apos;s
                  algorithm ranks it highly for relevant keywords, and traffic follows.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  That premise still works. Google still processes billions of searches every day. Page one
                  rankings still drive meaningful traffic. The fundamentals of technical SEO — site speed,
                  crawlability, proper heading structure, quality content, authoritative backlinks — are not
                  going away.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  But something has changed about what happens after Google processes a search. And that change
                  is where the conversation about GEO and AEO actually begins.
                </p>

                {/* Section 2 */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Shift That Changes Everything
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Until recently, the search results page was a list of links. Google&apos;s job was to rank
                  those links. Your job was to be near the top of that list. The user&apos;s job was to click.
                  That model is fracturing.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Google&apos;s AI Overviews now synthesize answers directly on the results page for a
                  significant and growing percentage of queries. ChatGPT, Perplexity, and other AI platforms are
                  increasingly the first stop for research, recommendations, and purchasing decisions. Voice
                  assistants answer questions without returning a list of links at all.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  In each of these scenarios, the user isn&apos;t clicking through to websites the way they used
                  to. They&apos;re receiving synthesized answers generated by AI systems that have already
                  decided which sources to trust and which to ignore. This is the environment GEO and AEO were
                  designed for — not to replace the old game, but to win the new one being played simultaneously.
                </p>

                {/* Section 3 — Defining the Terms */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Defining the Terms Clearly
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Before going further, it&apos;s worth being precise about what these terms actually mean —
                  because the marketing around them has gotten sloppy.
                </p>

                {/* Definition Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  {termCards.map((card) => (
                    <div
                      key={card.abbr}
                      className="rounded-xl p-6 flex flex-col"
                      style={{
                        background: '#f2ede4',
                        border: `1px solid ${card.accent}33`,
                        boxShadow: `0 2px 12px ${card.accent}0f`,
                      }}
                    >
                      <div
                        className="font-playfair font-bold text-4xl mb-1"
                        style={{ color: card.accent }}
                      >
                        {card.abbr}
                      </div>
                      <div
                        className="text-xs font-semibold tracking-wider uppercase mb-3 font-poppins"
                        style={{ color: card.accent }}
                      >
                        {card.full}
                      </div>
                      <p className="text-[#6a5a48] text-sm leading-relaxed font-poppins">{card.definition}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  In practice, GEO and AEO overlap significantly. Both are concerned with being the source AI
                  chooses. The distinction is mostly one of emphasis.
                </p>

                {/* Section 4 — Why Replacement Framing Is Wrong */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Why the &ldquo;Replacement&rdquo; Framing Is Wrong
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here is the mistake most people make when they encounter GEO for the first time: they assume
                  it&apos;s a competing strategy that makes their SEO investment obsolete. It isn&apos;t. And
                  understanding why requires understanding how AI systems actually evaluate sources.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  When an AI platform generates a response — whether it&apos;s Google&apos;s AI Overview, a
                  ChatGPT answer, or a Perplexity summary — it isn&apos;t pulling from a separate database of
                  AI-approved content. It&apos;s drawing from the same indexed web that traditional search
                  engines crawl. The signals it uses to evaluate trustworthiness — domain authority, content
                  quality, backlink profile, technical site health — are largely the same signals Google has been
                  measuring for decades.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Strong SEO creates the foundation that makes GEO possible. A website that Google trusts is a
                  website that AI systems are more likely to cite. They aren&apos;t separate games. They&apos;re
                  the same game with an additional layer on top.
                </p>

                {/* Comparison Table */}
                <div className="my-8 overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(160,114,58,0.2)' }}>
                  <table className="w-full min-w-[480px] text-sm">
                    <thead>
                      <tr style={{ background: '#1a2940' }}>
                        <th
                          className="text-left px-5 py-4 font-semibold text-xs tracking-wider uppercase"
                          style={{ color: '#a0723a' }}
                        >
                          What SEO Builds
                        </th>
                        <th
                          className="text-left px-5 py-4 font-semibold text-xs tracking-wider uppercase"
                          style={{ color: '#1a56db' }}
                        >
                          What GEO Adds
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr
                          key={i}
                          style={{ background: i % 2 === 0 ? '#f2ede4' : '#f8f5f0' }}
                        >
                          <td className="px-5 py-3 text-[#0a0806]">{row.seo}</td>
                          <td className="px-5 py-3 text-[#0a0806]">{row.geo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Section 5 — What GEO Requires */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  What GEO Requires That SEO Doesn&apos;t
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  That said, doing SEO well does not automatically mean you&apos;re optimized for generative AI.
                  There are specific signals GEO requires that traditional SEO never prioritized.
                </p>

                {geoRequirements.map((req) => (
                  <div key={req.title} className="mb-8">
                    <h3 className="font-poppins font-bold text-lg text-[#0a0806] mb-3">{req.title}</h3>
                    <p className="text-[#6a5a48] leading-relaxed">{req.body}</p>
                  </div>
                ))}

                {/* Section 6 — Businesses That Get This Wrong */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Businesses That Get This Wrong
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The most common mistake is treating GEO as a replacement for SEO investment — abandoning the
                  fundamentals in pursuit of the new thing. The second most common mistake is treating GEO as
                  something to add later — assuming that strong SEO is sufficient and that the AI layer can wait.
                  Neither approach is correct.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Businesses that are winning visibility right now — appearing in AI Overviews, getting cited by
                  ChatGPT, showing up in Perplexity responses — have done both. They have the SEO foundation
                  that AI systems use to evaluate trustworthiness, and they&apos;ve added the structured data,
                  answer-first content, and entity signals that AI systems use to select their sources.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The window to establish that position before your competitors do is open right now. It
                  won&apos;t stay open indefinitely.
                </p>

                {/* Section 7 — Visual Analogy Callout */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  A Practical Way to Think About It
                </h2>

                {/* Styled Callout Card */}
                <div
                  className="my-8 rounded-xl p-8 relative overflow-hidden"
                  style={{ background: '#1a2940', border: '1px solid rgba(160,114,58,0.25)' }}
                >
                  <div
                    className="absolute top-4 left-5 text-9xl leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(160,114,58,0.12)', fontFamily: 'Georgia, serif' }}
                  >
                    &ldquo;
                  </div>
                  <div className="relative z-10">
                    <p
                      className="text-xl md:text-2xl font-playfair font-semibold italic leading-relaxed mb-4"
                      style={{ color: 'rgba(240,232,216,0.92)' }}
                    >
                      If SEO is the foundation of your house, GEO is the roof. You cannot have a functional
                      roof without a solid foundation. But a foundation without a roof doesn&apos;t protect you
                      from the weather that&apos;s already arrived.
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                      <div
                        className="w-1 h-8 rounded-full"
                        style={{ background: '#a0723a' }}
                      />
                      <p className="text-sm font-poppins font-semibold" style={{ color: '#a0723a' }}>
                        Key Takeaway — The sequence matters as much as the strategy
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The businesses asking &ldquo;should I do GEO instead of SEO&rdquo; are asking the wrong
                  question. The right question is: &ldquo;How do I build both, in the right order, without
                  wasting resources on either?&rdquo;
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  That answer looks different for every business — depending on where your SEO foundation
                  currently stands, which AI platforms matter most for your industry, and what queries your
                  potential customers are actually using AI to answer.
                </p>

                {/* Section 8 — Where to Start */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Where to Start
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  If you&apos;re trying to understand your current position and what needs to happen next, the
                  honest starting point is an audit of both layers — your traditional SEO health and your AI
                  visibility signals.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  This is exactly how we approach every new client at KodeCite.AI. Before we touch a single GEO
                  signal, we audit the SEO foundation first. Because if the foundation has problems — technical
                  issues, thin content, crawl errors, inconsistent NAP data — building GEO on top of it is like
                  adding the roof before the walls are straight. The first order of business is always to
                  understand what&apos;s there and fix what needs fixing.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  For some businesses, that means SEO work comes first. For others, the foundation is solid and
                  we move directly into the GEO layer. Either way, the sequence is the same: foundation first,
                  AI optimization second. That approach is a deliberate differentiator. A lot of agencies
                  selling GEO services right now are ignoring the foundation entirely — dropping schema markup
                  onto a technically broken site and calling it AI optimization. It isn&apos;t. And the results
                  reflect that.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  For most small and mid-sized businesses, the gaps on the GEO side are significant and fixable
                  relatively quickly once the foundation is sound. Schema markup can be implemented. Content can
                  be restructured. Entity consistency can be established. AI-readable files can be created.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The two strategies aren&apos;t in competition. They&apos;re in sequence. And the businesses
                  that understand that sequence — and work with someone who respects it — are the ones that will
                  be recommended, not just ranked, as AI-powered search becomes the default way people find and
                  choose who to work with.
                </p>

                {/* CTA inline */}
                <div
                  className="my-8 rounded-xl p-6"
                  style={{ background: '#f2ede4', border: '1px solid rgba(160,114,58,0.25)' }}
                >
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-2 leading-snug">
                    At KodeCite.AI, we help businesses build both layers.
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-4">
                    The SEO foundation and the GEO signals that get you cited, recommended, and chosen by AI
                    systems. If you&apos;re trying to understand where you stand and what to prioritize,
                    let&apos;s talk.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-gold text-sm font-bold px-6 py-3 rounded-md inline-block"
                  >
                    Book Your Free Scaffolding Audit
                  </Link>
                </div>

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
                  <p className="eyebrow mb-4 text-xs">FOUNDATION FIRST</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">2-in-1</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">
                        One strategy that wins both traditional search and AI citations
                      </p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">99%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">
                        of AI Overview sources already rank in organic top results
                      </p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">Now</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">
                        The window to establish authority before competitors is still open
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(160,114,58,0.3)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Where Does Your Site Stand Today?
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    Find out exactly how your SEO foundation and AI visibility signals look right now — and what
                    it takes to appear in AI-generated answers.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block"
                  >
                    Book Your Free Scaffolding Audit
                  </Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/aeo-geo-making-seo-better" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        AEO + GEO Isn&apos;t Replacing SEO — It&apos;s Making It Better
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">10 min read</p>
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
                      <Link href="/blog/why-is-my-website-traffic-dropping-2026" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          Why Is My Website Traffic Dropping in 2026?
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

      {/* CTA Block */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: '#1c1814' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(160,114,58,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">SEO + GEO. FOUNDATION + ROOF.</p>
          <h2
            className="font-poppins font-bold text-3xl md:text-4xl mb-4"
            style={{ color: 'rgba(240,232,216,0.9)' }}
          >
            Build Both Layers — In the Right Order
          </h2>
          <p
            className="font-poppins mb-8 leading-relaxed"
            style={{ color: 'rgba(240,232,216,0.6)' }}
          >
            Most businesses are either skipping the foundation or waiting too long to add the roof. We audit
            both layers, fix what&apos;s broken, and build what&apos;s missing — so you get ranked and
            recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block"
            >
              Book Your Free Scaffolding Audit
            </Link>
            <Link
              href="/blog"
              className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

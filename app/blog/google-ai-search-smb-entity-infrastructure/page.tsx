import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Google's Answer Engine & SMB Websites",
  description:
    "Google Search is becoming an answer engine — AI Mode, AI Overviews, agents. Most SMB sites aren't built for it. Here's the entity infrastructure that is.",
  alternates: {
    canonical: 'https://www.kodecite.ai/blog/google-ai-search-smb-entity-infrastructure',
  },
  openGraph: {
    title: 'Google Is Turning Search Into an Answer Engine. Most SMB Websites Are Not Built for What Comes Next.',
    description:
      'Google Search is moving toward AI-generated answers, AI Mode, Gemini-powered assistance, and compressed recommendations. Here is why SMB websites need entity clarity, structured trust, and AI-readable infrastructure.',
    url: 'https://www.kodecite.ai/blog/google-ai-search-smb-entity-infrastructure',
    type: 'article',
    publishedTime: '2026-05-20',
    authors: ['Mark Abplanalp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.kodecite.ai/blog/google-ai-search-smb-entity-infrastructure#article',
  headline: 'Google Is Turning Search Into an Answer Engine. Most SMB Websites Are Not Built for What Comes Next.',
  description:
    'Google Search is moving toward AI-generated answers, AI Mode, Gemini-powered assistance, and compressed recommendations. Here is why SMB websites need entity clarity, structured trust, and AI-readable infrastructure.',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.kodecite.ai/images/google-ai-search-smb-entity-infrastructure.png',
    width: 1672,
    height: 941,
  },
  datePublished: '2026-05-20T00:00:00-07:00',
  dateModified: '2026-05-20T00:00:00-07:00',
  url: 'https://www.kodecite.ai/blog/google-ai-search-smb-entity-infrastructure',
  articleSection: 'AI Search Strategy',
  wordCount: 2800,
  keywords: [
    'AI search', 'AI Overviews', 'Google AI Mode', 'entity infrastructure',
    'structured data', 'answer engine optimization', 'SMB SEO', 'local search',
    'schema markup', 'AI-readable websites', 'entity clarity', 'machine-readable trust',
  ],
  author: {
    '@type': 'Person',
    '@id': 'https://www.kodecite.ai/#founder',
    name: 'Mark Abplanalp',
    jobTitle: 'Founder',
    url: 'https://www.kodecite.ai',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.kodecite.ai/#business',
    name: 'KodeCite.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.kodecite.ai/og-image.png',
      width: 1200,
      height: 630,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.kodecite.ai/blog/google-ai-search-smb-entity-infrastructure',
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.kodecite.ai/blog',
    name: 'KodeCite.ai Blog',
    url: 'https://www.kodecite.ai/blog',
  },
  about: [
    { '@type': 'DefinedTerm', name: 'AI Search' },
    { '@type': 'DefinedTerm', name: 'Entity Infrastructure' },
    { '@type': 'DefinedTerm', name: 'Structured Data' },
    { '@type': 'DefinedTerm', name: 'Answer Engine Optimization' },
    { '@type': 'DefinedTerm', name: 'Local Search' },
    { '@type': 'DefinedTerm', name: 'AI Overviews' },
    { '@type': 'DefinedTerm', name: 'AI Mode' },
    { '@type': 'DefinedTerm', name: 'SMB Digital Infrastructure' },
    { '@type': 'DefinedTerm', name: 'Entity Clarity' },
  ],
  mentions: [
    {
      '@type': 'Organization',
      name: 'Google',
      url: 'https://www.google.com',
      sameAs: 'https://www.wikidata.org/wiki/Q95',
    },
    {
      '@type': 'Organization',
      name: 'Google Search Central',
      url: 'https://developers.google.com/search',
    },
    {
      '@type': 'Organization',
      name: 'Schema.org',
      url: 'https://schema.org',
    },
    {
      '@type': 'Thing',
      name: 'Google AI Mode',
      url: 'https://blog.google/products-and-platforms/products/search/google-search-ai-mode-update/',
    },
    {
      '@type': 'Thing',
      name: 'Google AI Overviews',
      url: 'https://blog.google/products/search/ai-overviews-and-ai-mode/',
    },
    {
      '@type': 'Organization',
      name: 'Gemini',
      url: 'https://gemini.google.com',
    },
    {
      '@type': 'Organization',
      name: 'WordPress',
      url: 'https://wordpress.org',
      sameAs: 'https://en.wikipedia.org/wiki/WordPress',
    },
    {
      '@type': 'Organization',
      name: 'Wix',
      url: 'https://www.wix.com',
      sameAs: 'https://en.wikipedia.org/wiki/Wix.com',
    },
    {
      '@type': 'Organization',
      name: 'Squarespace',
      url: 'https://www.squarespace.com',
      sameAs: 'https://en.wikipedia.org/wiki/Squarespace',
    },
  ],
  citation: [
    {
      '@type': 'NewsArticle',
      name: 'AI in Search: Going beyond information to intelligence',
      url: 'https://blog.google/products-and-platforms/products/search/google-search-ai-mode-update/',
      publisher: { '@type': 'Organization', name: 'Google' },
    },
    {
      '@type': 'NewsArticle',
      name: 'Google Search’s I/O 2026 updates: AI agents and more',
      url: 'https://blog.google/products-and-platforms/products/search/search-io-2026/',
      publisher: { '@type': 'Organization', name: 'Google' },
      datePublished: '2026-05-20',
    },
    {
      '@type': 'NewsArticle',
      name: 'AI Overviews in Google Search expanding to more than 100 countries',
      url: 'https://blog.google/products/search/ai-overviews-search-october-2024/',
      publisher: { '@type': 'Organization', name: 'Google' },
      datePublished: '2024-10-28',
    },
    {
      '@type': 'TechArticle',
      name: 'Introduction to structured data markup in Google Search',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data',
      publisher: { '@type': 'Organization', name: 'Google Search Central' },
    },
    {
      '@type': 'TechArticle',
      name: 'General structured data guidelines',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies',
      publisher: { '@type': 'Organization', name: 'Google Search Central' },
    },
    {
      '@type': 'TechArticle',
      name: 'Structured data markup that Google Search supports',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/search-gallery',
      publisher: { '@type': 'Organization', name: 'Google Search Central' },
    },
    {
      '@type': 'WebPage',
      name: 'Introducing Schema.org: Bing, Google and Yahoo Unite to Build the Web of Objects',
      url: 'https://blogs.bing.com/search/June-2011/Introducing-Schema-org-Bing,-Google-and-Yahoo-Uni',
      publisher: { '@type': 'Organization', name: 'Microsoft Bing' },
      datePublished: '2011-06-02',
    },
    {
      '@type': 'WebSite',
      name: 'Schema.org',
      url: 'https://schema.org',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.kodecite.ai/blog/google-ai-search-smb-entity-infrastructure#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What changed with Google Search and AI Mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Search is moving toward AI-generated answers, AI Mode, conversational exploration, and Gemini-powered assistance. This means more users may receive synthesized answers instead of manually browsing long lists of results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do AI Overviews make entity clarity more important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Overviews compress information. When answers are compressed, search systems need higher confidence in the sources they use. A business with clear identity, services, locations, proof, and corroboration is easier to understand and recommend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does structured data guarantee rankings in AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Structured data does not guarantee rankings, AI Overview inclusion, or traffic. It helps search systems better understand page meaning and relationships when used accurately and in alignment with visible page content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can WordPress websites use schema correctly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, yes. WordPress can output structured data. The issue is that most SMB WordPress implementations rely on plugins, themes, and page builders that are not designed around a coherent sitewide entity system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between content SEO and entity infrastructure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Content SEO often focuses on publishing pages for keywords. Entity infrastructure connects the business, people, services, locations, reviews, credentials, sources, and articles into a clearer machine-readable trust system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do SMBs need more content or better machine-readable trust?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both can matter, but more content without trust infrastructure becomes noise. The stronger strategy is useful content connected to a clear business identity, service-area relevance, proof, and source-backed claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do reviews and credentials support AI visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reviews and credentials help prove that a business is real, trusted, and qualified. When they are consistently represented across the website and external profiles, they strengthen the business\'s credibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Kodecite built for AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kodecite builds websites around entity clarity, structured data, fast architecture, answer-first content, citations, reviews, credentials, and internal authority clusters. That is the kind of infrastructure compressed AI search increasingly needs.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.kodecite.ai/blog/google-ai-search-smb-entity-infrastructure#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Google Is Turning Search Into an Answer Engine',
      item: 'https://www.kodecite.ai/blog/google-ai-search-smb-entity-infrastructure',
    },
  ],
};

export default function GoogleAISearchSMBPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[var(--d-bg)] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-inter text-[var(--d-fg-dim)] mb-8">
            <Link href="/" className="hover:text-[var(--d-accent)] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[var(--d-accent)] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[var(--d-fg)] truncate">Google Is Turning Search Into an Answer Engine</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AI Search Strategy</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">14 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            Google Is Turning Search Into an Answer Engine.{' '}
            <span className="text-[var(--d-accent)]">Most SMB Websites Are Not Built for What Comes Next.</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            AI Overviews, AI Mode, and Gemini-powered search are compressing the journey from question to recommendation.
            The businesses that win are not the ones with the most content. They are the ones with the clearest, most
            verifiable machine-readable identity.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[var(--d-line)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--d-accent)] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-inter">MA</span>
              </div>
              <div>
                <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
                <p className="text-[var(--d-fg-dim)] text-xs font-inter">May 20, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-[var(--d-bg)] px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/google-ai-search-smb-entity-infrastructure.png"
            alt="Google AI search turning into an answer engine — SMB entity infrastructure"
            width={1672}
            height={941}
            className="w-full rounded-xl shadow-sm"
            priority
          />
        </div>
      </section>

      <div className="section-divider" />

      {/* Article + Sidebar */}
      <section className="py-16 bg-[var(--d-bg)] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="prose-content font-inter">

                <p className="text-[var(--d-fg-dim)] text-lg leading-relaxed mb-8">
                  Google Search is changing from a list of links into a system that can summarize, compare, recommend,
                  and help users take action. AI Overviews, AI Mode, Gemini-powered search experiences, and agentic
                  interfaces are all pointing in the same direction: search is becoming more compressed, more
                  conversational, and more dependent on trusted source material.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  For small and mid-sized businesses, the old strategy of &ldquo;publish more content and hope something
                  ranks&rdquo; is not enough. The future of SMB search will favor businesses that make their identity,
                  services, locations, credentials, reviews, and expertise easier for AI systems to understand and verify.
                </p>

                <div className="bg-[rgba(93,213,255,0.06)] rounded-xl border border-[rgba(93,213,255,0.2)] p-6 my-8">
                  <p className="eyebrow mb-3 text-xs">THE CORE SHIFT</p>
                  <p className="text-[var(--d-fg)] font-inter font-semibold text-lg leading-snug">
                    The future of SMB search is not who publishes the most content. It is who gives AI systems the
                    clearest, most verifiable map of who the business is, what it does, where it serves, and why it
                    should be trusted.
                  </p>
                </div>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  What Changed?
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Traditional search was built around discovery through browsing. A user searched, scanned a page of
                  results, opened several websites, compared options, read reviews, and eventually made a decision.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  AI search compresses that journey. Instead of asking users to compare ten results, AI Overviews and
                  AI Mode can summarize the landscape directly. Instead of sending users into a long research process,
                  Gemini-style interfaces can help them ask follow-up questions, compare options, and move closer to a
                  decision inside the search experience itself.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  That shift changes what a business website needs to do. A website no longer exists only to impress a
                  visitor after they click. It also needs to help search and AI systems understand whether the business
                  deserves to be recommended before the click ever happens.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  Google Is Not Hiding the Direction of Travel
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Google has been clear about where Search is going. In its <a href="https://blog.google/products-and-platforms/products/search/google-search-ai-mode-update/" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">official AI Search announcements</a>, Google
                  describes AI Mode as a more powerful way to search, ask follow-up questions, explore topics, and
                  receive more complete answers. At <a href="https://blog.google/products-and-platforms/products/search/search-io-2026/" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">Google I/O 2026</a>, Google went further — upgrading AI Mode with Gemini 3.5 Flash, launching the biggest redesign of the Search box in 25 years, and rolling out information agents and agentic booking. Google has also continued <a href="https://blog.google/products/search/ai-overviews-search-october-2024/" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">expanding AI Overviews</a> and source discovery
                  features designed to help users connect with relevant websites, brands, and original content.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  That matters because AI-generated answers still need source material. The web is not disappearing.
                  But the way the web is used inside search is changing. Instead of every website competing only for a
                  traditional blue-link click, websites increasingly compete to become trusted source material for
                  AI-generated answers, comparisons, and recommendations.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  For SMBs, that creates both risk and opportunity. The risk is that generic, slow, poorly structured
                  websites become easier to ignore. The opportunity is that a business with real-world trust, strong
                  reviews, clear services, local expertise, and a technically clean website can become easier for AI
                  systems to understand than larger competitors with weaker structure.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  The Problem Is Not Content Volume. It Is Entity Clarity.
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Most SMBs are told to create more content. More blog posts. More landing pages. More social posts.
                  More videos. More keywords. Content still matters, but content by itself is not the whole game
                  anymore. A disconnected blog post is just another page. A useful article connected to a clear
                  business identity becomes part of a larger trust system.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  AI systems need to answer basic questions before they can confidently recommend a business:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      q: 'Who is the business?',
                      a: 'The website should make the business identity unmistakable. The name, location, ownership, services, and brand should be consistent across the site and across external profiles.',
                    },
                    {
                      q: 'Who is the expert?',
                      a: 'For many SMBs, the person matters as much as the company. A dentist, attorney, realtor, physician, contractor, consultant, or founder often carries the trust. The website should make that professional identity clear.',
                    },
                    {
                      q: 'Where does the business serve?',
                      a: 'Local and regional businesses need more than a city name in a footer. They need clear service-area context, location relevance, and pages that support the places where they actually operate.',
                    },
                    {
                      q: 'What is the business specifically good at?',
                      a: 'A generic "we do everything" message is hard for search systems to classify. A strong site makes services, specialties, and use cases easy to understand.',
                    },
                    {
                      q: 'What proof supports the business?',
                      a: 'Reviews, credentials, awards, years in business, case studies, third-party profiles, and source-backed articles all help establish credibility.',
                    },
                    {
                      q: 'Which pages confirm the same story?',
                      a: 'The homepage, service pages, location pages, articles, FAQs, and review content should reinforce the same entity instead of creating disconnected signals.',
                    },
                  ].map((item) => (
                    <div
                      key={item.q}
                      style={{
                        background: 'var(--d-bg-2)',
                        border: '1px solid var(--d-line)',
                        borderLeft: '3px solid var(--d-accent)',
                        borderRadius: '10px',
                        padding: '20px 24px',
                      }}
                    >
                      <p className="font-inter font-semibold text-[var(--d-fg)] mb-2">{item.q}</p>
                      <p className="text-[var(--d-fg-dim)] text-sm leading-relaxed font-inter">{item.a}</p>
                    </div>
                  ))}
                </div>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  Structured Data Matters Because It Reduces Ambiguity
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  <a
                    href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--d-accent)] hover:underline"
                  >
                    Google Search Central explains
                  </a>{' '}
                  that structured data gives Google explicit clues about the meaning of a page. That does not mean
                  structured data guarantees rankings. It does not. But it does mean structured data can help search
                  systems classify what a page is about, what kind of entity is being described, and how the page
                  relates to the rest of the website.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  For SMBs, that distinction is important. The goal is not to &ldquo;trick&rdquo; search engines with
                  markup. The goal is to make the real business easier to understand. A local business with real
                  reviews, real credentials, real services, real locations, and real expertise should not leave those
                  signals buried in vague copy, page-builder templates, or disconnected blog posts. The website should
                  express those signals clearly for both humans and machines.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  Most SMB Websites Were Not Built for AI Search
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Most small business websites were built for a previous era. They were designed to look acceptable on
                  a screen, describe basic services, and capture form submissions. Many are built on themes, page
                  builders, plugins, and templates. That can work for a traditional brochure site, but it often fails
                  to create the kind of consistent machine-readable clarity AI search increasingly needs.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-4 text-xs">COMMON GAPS</p>
                  <ul className="space-y-2">
                    {[
                      'Generic service pages with no entity context',
                      'Weak or duplicated schema from plugins',
                      'Missing person/provider identity details',
                      'Thin or absent location and service-area context',
                      'Slow page performance that AI crawlers abandon',
                      'Disconnected blog content with no entity linkage',
                      'Reviews visible to humans but not in the trust graph',
                      'Credentials mentioned once, never reinforced',
                      'External profiles not tied back to the business entity',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[var(--d-accent)] flex-shrink-0 mt-0.5">×</span>
                        <span className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  This is why &ldquo;just create more content&rdquo; is incomplete advice. More content on top of
                  unclear infrastructure often creates more noise.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  WordPress Plugins Usually Do Not Solve the Deeper Problem
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  WordPress, Wix, Squarespace, and other platforms can publish pages. Some can output structured data.
                  Some plugins can add schema markup. The issue is not whether schema can technically exist on these
                  platforms. The issue is that most SMB implementations are not designed around a controlled, sitewide
                  identity system. They are usually assembled from themes, plugins, page builders, third-party widgets,
                  and disconnected content workflows.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  That often leads to schema that is generic, incomplete, duplicated, or detached from the real
                  authority of the business. For AI search, the deeper problem is not whether a page has markup. The
                  problem is whether the entire website makes the business easier to understand, verify, and recommend.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  What an AI-Readable SMB Website Needs
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  An AI-readable SMB website should make the business easy to classify. At a high level, that means
                  the site should clarify:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'The business identity',
                    'The key people behind the business',
                    'The services offered',
                    'The locations served',
                    'The credentials and qualifications that matter',
                    'The reviews and proof that support trust',
                    'The external profiles that corroborate the entity',
                    'The articles and FAQs that answer high-intent questions',
                    'The sources used to support factual claims',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-lg"
                      style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)' }}
                    >
                      <span className="text-[var(--d-accent)] font-bold text-sm flex-shrink-0">✓</span>
                      <span className="text-[var(--d-fg-dim)] text-sm font-inter">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  This is where the next generation of SMB websites will separate from the old one. The website is no
                  longer just a digital brochure. It becomes the business&apos;s machine-readable trust layer.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  Article Content Should Strengthen the Business, Not Float Beside It
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A strong article is not just a keyword page. It should answer a real customer question, use visible
                  sources where needed, and reinforce the business&apos;s actual expertise.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  For example, a relocation-focused realtor should not only write &ldquo;best places to live&rdquo;
                  articles. The stronger strategy is to answer the real decision questions buyers ask before moving:
                  What are the schools like? How bad is winter? What should I know about healthcare? Can I buy acreage
                  safely? Which towns fit different lifestyles? Each article should help the user make a better
                  decision while also strengthening the business&apos;s association with the topic.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  That is the difference between content volume and authority infrastructure.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  Reviews, Credentials, and Third-Party Profiles Become a Trust Flywheel
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Reviews are not just testimonials. For local businesses, reviews are proof that the business has
                  solved real problems for real people. Credentials show qualification. Third-party profiles help
                  corroborate identity. Articles show expertise. Sources support factual claims.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  When these signals are consistent, visible, and technically clean, they create a compounding trust
                  layer that is difficult for competitors to copy quickly. A competitor can publish a similar article.
                  But they cannot instantly recreate years of reviews, credentials, service-area relevance, trusted
                  external profiles, source-backed content, and a coherent website architecture.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  That is why AI search may increase the value of durable digital infrastructure.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  The Strategic Bet
                </h2>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-3 text-xs">THE CORE TENSION</p>
                  <p className="text-[var(--d-fg)] font-inter font-semibold text-xl mb-2">
                    Content is exploding. Recommendations are compressing.
                  </p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed">
                    As more businesses create more content, users are less likely to manually sort through all of it.
                    AI systems will increasingly help summarize, compare, filter, and recommend. In that environment,
                    the clearest trusted entity has an advantage.
                  </p>
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The businesses that start building this infrastructure now may be years ahead of competitors who wait
                  until AI search behavior becomes obvious. <a href="https://blogs.bing.com/search/June-2011/Introducing-Schema-org-Bing,-Google-and-Yahoo-Uni" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">Schema.org has existed since June 2011</a>, and many SMB websites
                  still do not use structured data well. It is unlikely that the entire market suddenly wakes up and
                  builds sophisticated entity clarity overnight.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  That gap is where the opportunity lives.
                </p>

                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-10 mb-4">
                  KodeCite&apos;s View
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  KodeCite was built for this shift. We believe SMB websites need to move beyond surface-level design
                  and generic content. They need fast, structured, source-aware, entity-first infrastructure that helps
                  AI systems understand the business as clearly as a human customer would.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The goal is not to game search. The goal is to make the truth about a business easier to verify.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {[
                    'Who are they?',
                    'Where do they serve?',
                    'What are they good at?',
                    'What proof supports them?',
                    'Which sources confirm the claims?',
                    'Which pages reinforce the same story?',
                  ].map((q) => (
                    <div
                      key={q}
                      className="p-3 rounded-lg text-center"
                      style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)' }}
                    >
                      <p className="text-[var(--d-fg-dim)] text-xs font-inter leading-snug">{q}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-8">
                  As search becomes more compressed and AI-driven, those questions become more important, not less.{' '}
                  <Link href="/machine-read" className="text-[var(--d-accent)] hover:underline">
                    Run a free Machine Read on your site
                  </Link>{' '}
                  to see exactly how AI systems are reading your business right now.
                </p>

                {/* FAQ Section */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-6">
                  FAQ
                </h2>

                <div className="space-y-4 mb-12">
                  {[
                    {
                      q: 'What changed with Google Search and AI Mode?',
                      a: 'Google Search is moving toward AI-generated answers, AI Mode, conversational exploration, and Gemini-powered assistance. This means more users may receive synthesized answers instead of manually browsing long lists of results.',
                    },
                    {
                      q: 'Why do AI Overviews make entity clarity more important?',
                      a: 'AI Overviews compress information. When answers are compressed, search systems need higher confidence in the sources they use. A business with clear identity, services, locations, proof, and corroboration is easier to understand and recommend.',
                    },
                    {
                      q: 'Does structured data guarantee rankings in AI Overviews?',
                      a: 'No. Structured data does not guarantee rankings, AI Overview inclusion, or traffic. It helps search systems better understand page meaning and relationships when used accurately and in alignment with visible page content.',
                    },
                    {
                      q: 'Can WordPress websites use schema correctly?',
                      a: "Technically, yes. WordPress can output structured data. The issue is that most SMB WordPress implementations rely on plugins, themes, and page builders that are not designed around a coherent sitewide entity system.",
                    },
                    {
                      q: 'What is the difference between content SEO and entity infrastructure?',
                      a: 'Content SEO often focuses on publishing pages for keywords. Entity infrastructure connects the business, people, services, locations, reviews, credentials, sources, and articles into a clearer machine-readable trust system.',
                    },
                    {
                      q: 'Do SMBs need more content or better machine-readable trust?',
                      a: 'Both can matter, but more content without trust infrastructure becomes noise. The stronger strategy is useful content connected to a clear business identity, service-area relevance, proof, and source-backed claims.',
                    },
                    {
                      q: 'How do reviews and credentials support AI visibility?',
                      a: "Reviews and credentials help prove that a business is real, trusted, and qualified. When they are consistently represented across the website and external profiles, they strengthen the business's credibility.",
                    },
                    {
                      q: 'Why is KodeCite built for AI search?',
                      a: 'KodeCite builds websites around entity clarity, structured data, fast architecture, answer-first content, citations, reviews, credentials, and internal authority clusters. That is the kind of infrastructure compressed AI search increasingly needs.',
                    },
                  ].map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-xl overflow-hidden"
                      style={{ border: '1px solid var(--d-line)', background: 'var(--d-bg-2)' }}
                    >
                      <summary
                        className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-inter font-semibold text-[var(--d-fg)]"
                        style={{ fontSize: '15px' }}
                      >
                        {item.q}
                        <svg
                          className="w-4 h-4 flex-shrink-0 text-[var(--d-accent)] transition-transform group-open:rotate-180"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>

                {/* Sources */}
                <div
                  className="rounded-xl p-6 mb-10"
                  style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)' }}
                >
                  <p className="eyebrow mb-4 text-xs">SOURCES</p>
                  <ul className="space-y-2">
                    {[
                      {
                        label: 'Google — AI Overviews and AI Mode',
                        href: 'https://blog.google/products/search/ai-overviews-and-ai-mode/',
                      },
                      {
                        label: 'Google Search Central — Introduction to structured data markup',
                        href: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data',
                      },
                      {
                        label: 'Google Search Central — General structured data guidelines',
                        href: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies',
                      },
                      {
                        label: 'Google Search Central — Structured data markup Google supports',
                        href: 'https://developers.google.com/search/docs/guides/search-gallery',
                      },
                      {
                        label: 'Schema.org',
                        href: 'https://schema.org',
                      },
                    ].map((s) => (
                      <li key={s.href} className="flex items-start gap-2">
                        <span className="text-[var(--d-accent)] flex-shrink-0 text-xs mt-1">→</span>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--d-fg-dim)] text-sm font-inter hover:text-[var(--d-accent)] transition-colors"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--d-line)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[var(--d-accent)] font-semibold font-inter hover:text-[var(--d-accent)] transition-colors"
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

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">THE NEW SEARCH REALITY</p>
                  <div className="space-y-4">
                    <div className="border-b border-[var(--d-line)] pb-4">
                      <p className="text-[var(--d-accent)] font-bold text-3xl font-inter">2011</p>
                      <p className="text-[var(--d-fg-dim)] text-sm font-inter mt-1">Schema.org launched — most SMB sites still ignore it</p>
                    </div>
                    <div className="border-b border-[var(--d-line)] pb-4">
                      <p className="text-[var(--d-accent)] font-bold text-3xl font-inter">1</p>
                      <p className="text-[var(--d-fg-dim)] text-sm font-inter mt-1">AI recommendation per local niche — compressed from ten blue links</p>
                    </div>
                    <div>
                      <p className="text-[var(--d-accent)] font-bold text-3xl font-inter">Now</p>
                      <p className="text-[var(--d-fg-dim)] text-sm font-inter mt-1">the gap between structured and unstructured is where the opportunity lives</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-bold text-[var(--d-fg)] text-lg mb-3 leading-snug">
                    Is Your Site Machine-Readable?
                  </p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">
                    Find out exactly how AI systems see your business — schema gaps, entity coherence, trust signals.
                    Free. 24–48 hour turnaround.
                  </p>
                  <Link href="/machine-read" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get My Free Machine Read
                  </Link>
                </div>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/entity-first-search-local-businesses" className="block group">
                      <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                        Entity-First Search: How Local Businesses Become the Answer AI Recommends
                      </p>
                      <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">16 min read</p>
                    </Link>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/what-is-an-entity-graph" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          What Is an Entity Graph — And Why It&apos;s Been Hiding in Plain Sight for a Decade
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">11 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/below-the-content-layer" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          Below The Content Layer — Where Your Real SEO Opportunity Lives
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">12 min read</p>
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

      <section className="py-20 bg-[var(--d-bg-3)] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">THE INFRASTRUCTURE GAP IS REAL</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-[var(--d-fg)] mb-4">
            Most SMB websites are not built for what search is becoming.
          </h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">
            A Machine Read shows you exactly where your business is invisible to AI systems and what it would take to
            close the gap. Free. No pitch. 24–48 hour turnaround.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/machine-read" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Get My Free Machine Read
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

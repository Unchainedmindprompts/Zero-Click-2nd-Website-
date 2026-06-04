import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Entity-First Search: How Local Businesses Become the Answer AI Systems Recommend | KodeCite.ai',
  description:
    'Entity-first search is how AI systems decide who to recommend. Learn what an entity graph is, the five most common entity gaps, and how to build machine-readable authority that gets local businesses cited by AI.',
  alternates: { canonical: 'https://www.kodecite.ai/blog/entity-first-search-local-businesses' },
  openGraph: {
    title: 'Entity-First Search: How Local Businesses Become the Answer AI Systems Recommend',
    description:
      'Entity-first search is how AI systems decide who to recommend. Learn what an entity graph is, the five most common entity gaps, and how to build machine-readable authority.',
    url: 'https://www.kodecite.ai/blog/entity-first-search-local-businesses',
    type: 'article',
    publishedTime: '2026-05-09',
    authors: ['Mark Abplanalp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entity-First Search: How Local Businesses Become the Answer AI Systems Recommend',
    description:
      'Entity-first search is how AI systems decide who to recommend. Learn what an entity graph is, the five most common entity gaps, and how to build machine-readable authority.',
    images: ['https://www.kodecite.ai/images/entity-first-search-hero.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.kodecite.ai/blog/entity-first-search-local-businesses#article',
  headline: 'Entity-First Search: How Local Businesses Become the Answer AI Systems Recommend',
  description:
    'Entity-first search is how AI systems decide who to recommend. This guide explains what an entity graph is, the most common entity gaps, and how to build machine-readable authority that gets local businesses cited by AI.',
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
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.kodecite.ai/blog',
    name: 'KodeCite.ai Blog',
    url: 'https://www.kodecite.ai/blog',
  },
  datePublished: '2026-05-09T00:00:00-07:00',
  dateModified: '2026-05-09T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.kodecite.ai/blog/entity-first-search-local-businesses',
  },
  url: 'https://www.kodecite.ai/blog/entity-first-search-local-businesses',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.kodecite.ai/images/entity-first-search-hero.png',
    width: 1200,
    height: 630,
  },
  keywords: [
    'entity-first search',
    'entity graph local business',
    'AI recommendations local business',
    'machine-readable business identity',
    'schema markup local SEO',
    'answer engine optimization',
    'AI search visibility 2026',
    'entity trust signals',
    'local business entity graph',
    'GEO generative engine optimization',
    'AEO answer engine optimization',
    'Google Knowledge Graph local business',
    'structured data local SEO',
    'entity gaps local business',
    'AI discovery local business',
  ],
  articleSection: 'AI Search Foundations',
  wordCount: 4600,
  about: [
    { '@type': 'DefinedTerm', name: 'Entity-First Search' },
    { '@type': 'DefinedTerm', '@id': 'https://www.kodecite.ai/#entity-graph', name: 'Entity Graph', inDefinedTermSet: { '@id': 'https://www.kodecite.ai/#glossary' } },
    { '@type': 'DefinedTerm', name: 'Machine-Readable Business Identity' },
    { '@type': 'DefinedTerm', name: 'Answer Engine Optimization' },
    { '@type': 'DefinedTerm', name: 'AI Discovery for Local Businesses' },
    { '@type': 'DefinedTerm', name: 'Structured Data and Schema.org' },
    { '@type': 'DefinedTerm', name: 'Local Business AI Visibility' },
    { '@id': 'https://www.kodecite.ai/#business' },
  ],
  mentions: [
    { '@type': 'Organization', '@id': 'https://www.google.com/', name: 'Google', url: 'https://www.google.com', sameAs: 'https://www.wikidata.org/wiki/Q95' },
    { '@type': 'Organization', name: 'Schema.org', url: 'https://schema.org', sameAs: 'https://www.wikidata.org/wiki/Q3475322' },
    { '@type': 'Thing', name: 'Google Knowledge Graph', url: 'https://blog.google/products/search/introducing-knowledge-graph-things-not/', sameAs: 'https://www.wikidata.org/wiki/Q648625' },
    { '@type': 'Organization', name: 'Next.js', url: 'https://nextjs.org' },
    { '@type': 'Organization', name: 'WordPress', url: 'https://wordpress.org' },
    { '@type': 'Organization', name: 'Wix', url: 'https://www.wix.com' },
    { '@type': 'Organization', name: 'Squarespace', url: 'https://www.squarespace.com' },
    { '@type': 'Organization', name: 'Google Business Profile', url: 'https://business.google.com' },
    { '@type': 'Organization', name: 'Bing Places', url: 'https://www.bingplaces.com' },
    { '@type': 'Organization', name: 'Apple Business Connect', url: 'https://businessconnect.apple.com' },
    { '@type': 'Organization', name: 'Better Business Bureau', url: 'https://www.bbb.org' },
    { '@type': 'Organization', name: 'Yelp', url: 'https://www.yelp.com' },
    { '@type': 'Organization', name: 'Yellow Pages', url: 'https://www.yellowpages.com' },
    { '@type': 'Organization', name: 'Houzz', url: 'https://www.houzz.com' },
    { '@type': 'Organization', name: 'Avvo', url: 'https://www.avvo.com' },
    { '@type': 'Organization', name: 'Healthgrades', url: 'https://www.healthgrades.com' },
    { '@type': 'Organization', name: 'NMLS Consumer Access', url: 'https://www.nmlsconsumeraccess.org' },
    { '@type': 'SoftwareApplication', name: 'Schema Markup Validator', url: 'https://validator.schema.org/' },
    { '@type': 'SoftwareApplication', name: 'Google Rich Results Test', url: 'https://search.google.com/test/rich-results' },
  ],
  citation: [
    { '@type': 'WebPage', name: 'Introducing the Knowledge Graph: things, not strings', url: 'https://blog.google/products/search/introducing-knowledge-graph-things-not/', publisher: { '@type': 'Organization', name: 'Google' }, datePublished: '2012-05-16' },
    { '@type': 'WebPage', name: 'Introducing Schema.org: Bing, Google and Yahoo Unite to Build the Web of Objects', url: 'https://blogs.bing.com/search/June-2011/Introducing-Schema-org-Bing,-Google-and-Yahoo-Uni', publisher: { '@type': 'Organization', name: 'Microsoft Bing' }, datePublished: '2011-06-02' },
    { '@type': 'TechArticle', name: 'JavaScript SEO basics', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics', publisher: { '@type': 'Organization', name: 'Google Search Central' } },
    { '@type': 'TechArticle', name: 'General structured data guidelines', url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies', publisher: { '@type': 'Organization', name: 'Google Search Central' } },
    { '@type': 'TechArticle', name: 'Introduction to structured data markup in Google Search', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data', publisher: { '@type': 'Organization', name: 'Google Search Central' } },
    { '@type': 'CreativeWork', name: 'JSON-LD 1.1 Recommendation (W3C)', url: 'https://www.w3.org/TR/json-ld11/', publisher: { '@type': 'Organization', name: 'W3C' } },
    { '@type': 'WebSite', name: 'Schema.org', url: 'https://schema.org' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.kodecite.ai/blog/entity-first-search-local-businesses#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is entity-first search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entity-first search describes how modern AI systems and search engines organize information around things — people, places, businesses, services — rather than around text and keywords. Instead of matching pages to queries, AI systems build structured representations of entities and query those representations. A local business that wants to appear in AI recommendations needs to be understood as a clear, verifiable entity, not just a page with content.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is entity-first search different from traditional SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional SEO focused on keywords, content volume, and backlinks. Entity-first search focuses on structured identity: is the business clearly defined, consistently corroborated across the web, and connected through machine-readable schema? Both approaches overlap — strong SEO still matters — but entity signals determine whether an AI system can confidently recommend a business when the recommendation set is small.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an entity graph for a local business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An entity graph is the full network of structured, machine-readable relationships that connect every part of a business into a coherent identity. It includes the business organization node, founder and practitioner nodes, service nodes, location nodes, article nodes, and external profile references — all linked through shared @id identifiers in JSON-LD schema so AI systems can understand the business as a connected whole, not just a collection of pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do AI systems use entity information to decide who to recommend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI systems evaluate businesses against a confidence threshold. They cross-reference the website against external sources — Google Business Profile, Bing Places, Apple Business Connect, BBB, Yelp, Yellow Pages, and industry directories — looking for consistency in name, address, phone, business type, and service descriptions. Businesses that are easy to verify across multiple sources are safer to recommend. Businesses with inconsistent or ambiguous entity signals are often filtered out, not because they are bad, but because the evidence is unclear.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a complete entity look like for a local service business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete entity for a local service business includes: a correctly typed LocalBusiness or specific subtype (DentalPractice, HomeAndConstructionBusiness, LegalService, etc.) with consistent NAP data; a Person schema for the owner or practitioners with credentials connected to the organization; individual service pages with Service schema; location pages for service areas; FAQ schema on key pages; article nodes connected back to the organization via isPartOf; and sameAs references to all verified external profiles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common entity gaps local businesses have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five most common entity gaps are: inconsistent NAP data across directories; schema using wrong business types (Organization instead of a specific subtype, or SoftwareApplication for WordPress); reviews disconnected from service pages with no structured proof layer; missing provider or practitioner identity schema; and platform-dependent markup from WordPress, Wix, or Squarespace plugins that conflicts with or duplicates structured data, sending contradictory signals to AI systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does adding schema markup alone make a strong entity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Schema markup declares the entity, but an entity graph requires corroboration. A business can have perfect JSON-LD on its website and still have a weak entity if the external profiles are inconsistent, the provider identity is missing, the reviews are disconnected, or the site cannot be crawled cleanly. Schema is a necessary first layer, not the complete solution. The entity graph is built from schema plus consistent external signals plus fast, crawlable infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Google Business Profile connect to my entity graph?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Business Profile is a corroboration node — it should match what the website declares, not define the entity in place of the website. The website defines the entity through JSON-LD schema. Google Business Profile, Bing Places, Apple Business Connect, and other directory profiles then corroborate that definition with consistent NAP data, business type, service descriptions, and location. The website is the source of truth. External profiles are the supporting witnesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it matter which website platform I use for entity-first search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, significantly. WordPress, Wix, and Squarespace produce bloated HTML that consumes AI token budgets, JavaScript-rendered content that AI crawlers may not see on a cold load, and schema generated automatically by plugins — often with errors, wrong types, or conflicting markup. A purpose-built Next.js site with server-side rendering, clean JSON-LD, and structured architecture gives AI systems accurate signals on the first crawl without ambiguity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the first step toward building a stronger entity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first step is an honest audit of your current entity signals: what schema exists on the site and whether it is correct, whether NAP data is consistent across all external profiles, whether provider identity is declared, and whether the website can be crawled cleanly without JavaScript dependency. A Machine Read — which is exactly what KodeCite offers at no cost — shows you what AI systems can currently verify about your business and where the highest-priority gaps are.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.kodecite.ai/blog/entity-first-search-local-businesses#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Entity-First Search: How Local Businesses Become the Answer AI Recommends',
      item: 'https://www.kodecite.ai/blog/entity-first-search-local-businesses',
    },
  ],
};

export default function EntityFirstSearchLocalBusinesses() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-36 pb-16 bg-[var(--d-bg)] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-inter text-[var(--d-fg-dim)] mb-8">
            <Link href="/" className="hover:text-[var(--d-accent)] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/blog" className="hover:text-[var(--d-accent)] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[var(--d-fg)] truncate">Entity-First Search</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AI Search Foundations</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">16 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            Entity-First Search:{' '}
            <span className="text-[var(--d-accent)]">How Local Businesses Become the Answer AI Systems Recommend</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            AI systems do not search through text. They query structured representations of real-world entities. Understanding that distinction is the first step toward becoming the business AI recommends.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[var(--d-line)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-inter">MA</span>
              </div>
              <div>
                <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
                <p className="text-[var(--d-fg-dim)] text-xs font-inter">May 9, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero Image ──────────────────────────────────────── */}
      <section className="bg-[var(--d-bg)] px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/entity-first-search-hero.png"
            alt="Entity-First Search — how local businesses become the answer AI systems recommend"
            width={1200}
            height={630}
            className="w-full rounded-xl shadow-sm"
            priority
          />
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Body + Sidebar ──────────────────────────────────── */}
      <section className="py-16 bg-[var(--d-bg)] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Article body ─────────────────────────────── */}
            <article className="lg:col-span-2">
              <div className="prose-content font-inter">

                <p className="text-[var(--d-fg-dim)] text-lg leading-relaxed mb-6">
                  There is a question every local business should be asking in 2026: when someone asks an AI assistant for a recommendation, how does the system decide who to suggest?
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The answer starts with entity. Not content volume. Not backlink count alone. Not review quantity in isolation. Those signals matter — but they feed into something more fundamental. AI systems organize their understanding of the world around entities: real things with attributes, relationships, and verifiable properties.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-3 text-xs">THE CORE IDEA</p>
                  <p className="text-[var(--d-fg-dim)] font-inter text-sm leading-relaxed">
                    A local business that wants to be recommended by AI needs to be understood as a clear, trusted entity — not just a website with pages. That is what entity-first search means.
                  </p>
                </div>

                {/* ── Section 1 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  What Is Entity-First Search?
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Entity-first search describes how modern AI systems and search engines approach information retrieval. Instead of indexing pages and matching text to query keywords, they build structured representations of the things in the world — people, businesses, places, services, events — and query those representations directly. This is the same principle behind Google&apos;s <a href="https://blog.google/products/search/introducing-knowledge-graph-things-not/" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">Knowledge Graph</a>, launched in 2012 with the tagline &ldquo;things, not strings.&rdquo;
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Search Used to Be About Words. Now It Is About Things.
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  In traditional SEO, you optimized text. You researched keywords people were typing, wrote content using those keywords, earned backlinks to signal importance, and waited for the algorithm to rank your page. The system matched strings of text to strings of text in the query.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  That model still exists. But it is not the full picture of how AI systems decide who to recommend. Modern AI systems — and the knowledge layers underneath them — ask different questions:
                </p>

                <ul className="flex flex-col gap-1 mb-6 pl-4">
                  {[
                    'What kind of thing is this?',
                    'What does it do?',
                    'Where does it operate?',
                    'Who is connected to it?',
                    'What do external sources say about it?',
                    'Is it consistent, verifiable, and trustworthy?',
                  ].map((q) => (
                    <li key={q} className="text-[var(--d-fg-dim)] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[var(--d-accent)] mt-0.5 flex-shrink-0">›</span>
                      {q}
                    </li>
                  ))}
                </ul>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  These are entity-level questions. Answering them requires more than content. It requires structure.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  An Entity Is What Something IS, Not Just What It Says About Itself
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  A business entity is not its homepage copy. It is the totality of machine-readable information that defines the business. That includes:
                </p>

                <div className="bg-[rgba(255,255,255,0.10)] rounded-xl p-5 my-6 border-l-4 border-[var(--d-accent)]">
                  <div className="flex flex-col gap-1 font-mono text-xs tracking-wider text-[var(--d-fg-dim)]">
                    {[
                      'Business type (LocalBusiness subtype)',
                      'Name, address, phone, service area',
                      'Owner and practitioners',
                      'Services and specializations',
                      'External profiles (Google, Bing, Apple, BBB, Yelp)',
                      'Credentials and certifications',
                      'Reviews, citations, third-party mentions',
                      'Content, FAQs, videos, owned proof assets',
                    ].map((item) => (
                      <p key={item} className="py-1 border-b border-[var(--d-line)] last:border-0">{item}</p>
                    ))}
                  </div>
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A business can write excellent content and still have a weak entity. Conversely, a business with a clean, consistent, well-connected entity is easier for AI systems to recall, verify, and recommend — even with less content.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Entity-First Means the Entity Comes Before the Content
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The practical implication: content strategy should follow entity strategy. The entity graph defines what the business is. Content amplifies and expands that definition. When the entity is unclear, content adds noise. When the entity is clean, content compounds.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Most local business websites are built in the wrong order — full of content with no structured entity underneath. That is the gap.
                </p>

                {/* ── Section 2 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  Why the Old SEO Model Is No Longer Enough
                </h2>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Evolution From Keywords to Topics to Entities
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  SEO has moved through generations. First-generation SEO was keyword-centric: match the page to what people typed. Second-generation was topic authority: build enough content depth to signal expertise. Third-generation — where AI systems operate — is entity-centric: become a clearly defined, verifiable entity in the knowledge layers underneath search. The vocabulary that makes this possible is <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">Schema.org</a>, the shared structured-data standard <a href="https://blogs.bing.com/search/June-2011/Introducing-Schema-org-Bing,-Google-and-Yahoo-Uni" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">co-founded by Google, Bing, and Yahoo in June 2011</a>.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Each generation still matters. Keywords inform content. Topic depth still builds authority. But neither alone is sufficient when AI systems need to recommend specific businesses for specific queries with high confidence.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Problem With Platform-Dependent Websites
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  Many small businesses built their web presence on WordPress, Wix, or Squarespace. Those platforms are designed for human visitors — not machine extraction. They typically produce:
                </p>

                <ul className="flex flex-col gap-1 mb-6 pl-4">
                  {[
                    'Bloated HTML that exhausts AI token budgets before the key information is found',
                    'Schema generated automatically by plugins, often with errors or wrong types',
                    'JavaScript-rendered content that AI crawlers may not see on a cold load',
                    'No coherent entity graph — just page after page with loosely related content',
                  ].map((item) => (
                    <li key={item} className="text-[var(--d-fg-dim)] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[var(--d-accent)] mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The result is a website that looks fine to a human visitor but sends confusing, incomplete, or conflicting signals to AI systems. <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">Google&apos;s own JavaScript SEO guidance</a> recommends server-side or pre-rendering for exactly this reason — not all crawlers run JavaScript, and content trapped behind client-side rendering may never get indexed.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  What AI Systems Actually Evaluate
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  When an AI system encounters a business, it is not running a keyword match. It is asking:
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-6">
                  <p className="eyebrow mb-4 text-xs">THE MACHINE&apos;S EVALUATION</p>
                  <div className="flex flex-col gap-3">
                    {[
                      ['Resolvability', 'Can I identify this as a real, specific business entity?'],
                      ['Consistency', 'Does information about this business match across multiple sources?'],
                      ['Extractability', 'Can I pull key attributes without ambiguity?'],
                      ['Relevance', 'Is this business relevant, trustworthy, and local enough for this query?'],
                    ].map(([label, desc]) => (
                      <div key={label} className="border-b border-[var(--d-line)] pb-3 last:border-0 last:pb-0">
                        <p className="text-[var(--d-fg)] font-semibold font-inter text-sm">{label}</p>
                        <p className="text-[var(--d-fg-dim)] font-inter text-sm mt-1">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Section 3 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  The Entity Graph
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  An entity graph is not one schema tag on one page. It is a network of structured relationships that connect every part of the business into a coherent, machine-readable whole.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  An Entity Graph Is Not One Schema Tag
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Most discussions of schema markup focus on individual page types. A homepage gets LocalBusiness. A blog post gets BlogPosting. A service page gets Service. That is a start. But individual schemas on individual pages do not constitute an entity graph.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  An entity graph connects those schemas through shared identifiers — @id references — so that the business, its founder, its services, its location, its articles, its videos, and its reviews all point to the same entity. The connection matters as much as the individual declarations.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Nodes and Relationships That Matter
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  A complete entity graph for a local business includes:
                </p>

                <div className="bg-[rgba(255,255,255,0.10)] rounded-xl p-5 my-6 border-l-4 border-[var(--d-accent)]">
                  <div className="flex flex-col gap-1 font-mono text-xs tracking-wider text-[var(--d-fg-dim)]">
                    {[
                      'Organization node  (@id: /#organization)',
                      'Founder node        (@id: /#founder)',
                      'Website node        (@id: /#website)',
                      'Service nodes       → connected to organization',
                      'Location nodes      → with geo coordinates',
                      'Article nodes       → isPartOf → website',
                      'FAQ nodes           → on key landing pages',
                      'Video nodes         → when embedded on site',
                      'sameAs references   → all verified profiles',
                    ].map((item) => (
                      <p key={item} className="py-1 border-b border-[var(--d-line)] last:border-0">{item}</p>
                    ))}
                  </div>
                  <p className="text-[var(--d-fg-mute)] text-xs font-inter mt-3">Every node reinforces every other node.</p>
                </div>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Why Consistency Across the Web Matters
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Entities are not just defined by what is on the website. They are corroborated by what exists across the web. AI systems cross-reference the website against Google Business Profile, Bing Places, Apple Business Connect, BBB, Yelp, Yellow Pages, Houzz, Reddit, and industry-specific directories. If the business name, address, or phone number is inconsistent across these sources — different spellings, old addresses, missing profiles — the entity signal weakens. Corroboration requires consistency.
                </p>

                {/* ── Section 4 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  How AI Systems Use Entity Graphs
                </h2>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  AI Systems Cross-Reference Signals Before Recommending
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  When a user asks an AI assistant &ldquo;who is the best HVAC company in my area,&rdquo; the system is not simply pulling the nearest keyword match. It is evaluating a set of businesses against a confidence threshold. The businesses that get recommended are the ones the system can most confidently verify as relevant, local, credible, and trustworthy.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Corroboration Beats Repetition
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The old SEO instinct was to repeat. If the keyword appeared twenty times on the page, the page would rank for it. Entity-first search works differently. Repetition does not increase confidence. Corroboration does.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A business mentioned consistently across Google, Bing, Apple Maps, BBB, Yelp, and Yellow Pages — with matching NAP data and consistent service descriptions — is easier for an AI system to corroborate than a business that only defines itself on its own website.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Why AI Systems Default to Safe, Clear Entities
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  AI systems err toward confidence. If the evidence around a business is ambiguous, the system may simply not recommend it — not because the business is bad, but because the evidence is unclear. An inconsistent NAP, a wrong business type in schema, a WordPress site with conflicting plugin markup, a Google Business Profile that has not been updated in three years — all of these create hesitation. <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">Google&apos;s own structured data guidelines</a> are explicit that markup must match the visible content of the page; mismatched signals weaken confidence.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-6">
                  <p className="eyebrow mb-3 text-xs">THE SAFEST PATH</p>
                  <p className="text-[var(--d-fg)] font-inter font-semibold text-lg leading-snug">
                    The safest path to being recommended is being easy to verify.
                  </p>
                  <p className="text-[var(--d-fg-dim)] font-inter text-sm leading-relaxed mt-3">
                    Not the loudest. Not the most prolific. The clearest.
                  </p>
                </div>

                {/* ── Section 5 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  What a Complete Entity Graph Looks Like for a Local Business
                </h2>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Business Identity Layer
                </h3>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-6 pl-2">
                  {[
                    'Correct LocalBusiness subtype', 'Consistent legal name',
                    'Primary address (full, current)', 'Phone matching all profiles',
                    'Service area declared', 'Hours of operation',
                    'Website URL matching canonical', 'sameAs to all external profiles',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[var(--d-ok)] text-xs flex-shrink-0">✓</span>
                      <span className="text-[var(--d-fg-dim)] text-sm font-inter">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  People and Credentials Layer
                </h3>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-6 pl-2">
                  {[
                    'Owner as Person schema', 'Connected to organization',
                    'Credentials in schema', 'Role and title declared',
                    'Bio page with image', 'Practitioner pages for multi-provider',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[var(--d-ok)] text-xs flex-shrink-0">✓</span>
                      <span className="text-[var(--d-fg-dim)] text-sm font-inter">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Services, Locations, and Proof
                </h3>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-6 pl-2">
                  {[
                    'Individual service pages', 'Service schema on each page',
                    'Location pages with geo', 'Breadcrumb hierarchy',
                    'FAQPage on key pages', 'Case study or project pages',
                    'Video schema when applicable', 'Review aggregate reference',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[var(--d-ok)] text-xs flex-shrink-0">✓</span>
                      <span className="text-[var(--d-fg-dim)] text-sm font-inter">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Content Layer
                </h3>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-6 pl-2">
                  {[
                    'Articles with BlogPosting schema', 'isPartOf connecting to website',
                    'Author pointing to founder', 'Internal links to service pages',
                    'FAQ sections on articles', 'Content answering real questions',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[var(--d-ok)] text-xs flex-shrink-0">✓</span>
                      <span className="text-[var(--d-fg-dim)] text-sm font-inter">{item}</span>
                    </div>
                  ))}
                </div>

                {/* ── Section 6 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  The Five Most Common Entity Gaps
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Most local businesses have entity gaps they are not aware of. Here are the five that appear most consistently — and matter most.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-6">
                  <div className="flex flex-col gap-5">
                    {[
                      {
                        num: '01',
                        title: 'Inconsistent NAP Across Directories',
                        desc: 'The business name or phone number is slightly different on Google than on Yelp. The address uses "Suite 4" in one place and "#4" in another. These inconsistencies are invisible to humans but highly visible to AI crawlers.',
                      },
                      {
                        num: '02',
                        title: 'Schema Present but Wrong Type',
                        desc: 'WordPress plugins often generate schema errors or apply a generic Organization type when the site needs a more specific subtype — DentalPractice, HomeAndConstructionBusiness, LegalService. Wrong types miss out on the richer signals those subtypes carry.',
                      },
                      {
                        num: '03',
                        title: 'Reviews Disconnected From Service Pages',
                        desc: 'Hundreds of Google reviews exist for the business but are not referenced in schema. No aggregate rating, no structured proof layer connecting reviews to specific services. The reviews exist only as off-site signals.',
                      },
                      {
                        num: '04',
                        title: 'Provider Identity Missing',
                        desc: 'The business has no Person schema for the owner or lead practitioner. A dental practice has four dentists but zero person schema for any of them. AI systems cannot resolve the human behind the service.',
                      },
                      {
                        num: '05',
                        title: 'Platform-Dependent Conflicting Markup',
                        desc: 'WordPress, Wix, and Squarespace often add their own meta tags, Open Graph, and schema that conflicts with or duplicates markup from SEO plugins. The result is contradictory signals. AI systems may not know which to trust.',
                      },
                    ].map((item) => (
                      <div key={item.num} className="border-b border-[var(--d-line)] pb-5 last:border-0 last:pb-0">
                        <div className="flex items-start gap-3">
                          <span className="text-[var(--d-accent)] font-bold font-mono text-lg leading-none flex-shrink-0 pt-0.5">{item.num}</span>
                          <div>
                            <p className="text-[var(--d-fg)] font-semibold font-inter text-sm mb-1">{item.title}</p>
                            <p className="text-[var(--d-fg-dim)] font-inter text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Section 7 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  How to Build Your Entity Graph the Right Way
                </h2>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Website as the Entity Anchor
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The website should be the source of truth. Not a Google profile. Not a Yelp page. Not a brokerage listing. The website should define the entity clearly, with structured JSON-LD that declares the business, its people, its services, its locations, and its content.
                </p>

                <div className="bg-[rgba(255,255,255,0.10)] rounded-xl p-5 my-6 border-l-4 border-[var(--d-ok)]">
                  <p className="text-[var(--d-fg)] font-semibold font-inter text-sm mb-3">The right relationship:</p>
                  <div className="flex flex-col gap-1 font-inter text-sm text-[var(--d-fg-dim)]">
                    {[
                      'The website defines the entity.',
                      'Google Business Profile corroborates it.',
                      'Bing Places corroborates it.',
                      'Apple Business Connect corroborates it.',
                      'Yelp, BBB, and Yellow Pages support it.',
                      'Industry directories support it.',
                    ].map((item) => (
                      <p key={item} className="py-1 border-b border-[var(--d-line)] last:border-0">{item}</p>
                    ))}
                  </div>
                  <p className="text-[var(--d-fg-mute)] text-xs font-inter mt-3">Everything should point back to one clear business identity.</p>
                </div>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Directories That Corroborate
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  After the website is clean and structured, external profiles should be updated to match exactly: Google Business Profile, Bing Places, Apple Business Connect, BBB, Yelp, Yellow Pages, and industry-specific directories — Houzz for contractors, Avvo for attorneys, Healthgrades for medical, NMLS for mortgage, and others. NAP consistency is non-negotiable. Business type and service descriptions should match.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Schema That Declares and Connects
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  The entity graph is built with JSON-LD. The key principles:
                </p>

                <ul className="flex flex-col gap-1 mb-6 pl-4">
                  {[
                    'Use @id references to connect nodes, not just inline type declarations',
                    'Use specific subtypes where available (DentalPractice, not Organization)',
                    'Connect articles back to the organization via publisher and isPartOf',
                    'Connect practitioners to the organization via memberOf and worksFor',
                    'Connect services to the organization via provider',
                    'Use sameAs to list all verified external profile URLs',
                  ].map((item) => (
                    <li key={item} className="text-[var(--d-fg-dim)] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[var(--d-accent)] mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mt-6 mb-6">
                  Validate everything with the <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">Schema Markup Validator</a> and Google&apos;s <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity">Rich Results Test</a> before shipping.
                </p>

                {/* ── Section 8 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  Entity-First Search in Practice
                </h2>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The HVAC Example
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A local HVAC company has been in business for 22 years. The owner is a master technician with multiple certifications. They have 340 Google reviews averaging 4.9 stars.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg-dim)]">Old model:</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-5">
                  A WordPress website with a homepage, contact page, and three service pages with thin, generic content. Schema from a plugin that declares Organization and nothing else.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg-dim)]">Entity-first model:</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A Next.js site with the company as an Organization entity connected to the owner as a Person entity with certifications, individual service pages (heating installation, AC repair, furnace maintenance) each with Service schema, an FAQ page addressing real customer questions, project pages for large jobs, video schema for how-to content, and consistent profiles on Google, Bing, Apple Business Connect, BBB, and Yellow Pages — all pointing back to the same entity. When a voice assistant is asked &ldquo;who does the best HVAC work in [city],&rdquo; the entity-first site gives the AI enough to work with to recommend confidently.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Dentist Example
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg-dim)]">Old model:</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-5">
                  A Wix website with a few service pages, a bio for the dentist, and a contact form. The Google Business Profile is accurate. The Yelp listing is outdated. Schema is auto-generated and generic.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg-dim)]">Entity-first model:</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A clean site with DentalPractice schema connected to the dentist as a Person entity with credentials, individual service pages for general, cosmetic, orthodontic, and restorative dentistry — each with Service schema — patient FAQ answers with FAQPage schema, staff pages for associates, an aggregate review reference, video schema for the welcome video, and sameAs links to Google, Yelp (updated), Apple Business Connect, and Healthgrades.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Realtor Example
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg-dim)]">Old model:</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-5">
                  Top-producing realtor with profiles on Zillow and Realtor.com. Their own website is a page on the brokerage domain. There is no entity anchor they control. Their best proof lives on platforms they do not own.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg-dim)]">Entity-first model:</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Owned domain with Person schema for the realtor, service connections for buyer representation, seller representation, and relocation, sameAs links to Zillow and other profiles, a sold-property archive, transaction-based blog content linking to service pages, and FAQ schema addressing buyer and seller questions. The realtor now owns their entity anchor and builds authority on a foundation they control.
                </p>

                {/* ── Section 9 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  Making AI Systems Recommend You
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Entity-first search is not a single fix. It is a strategy for how a business presents itself to machines. The goal is not to trick an AI system — it is to be easy to understand, verify, and trust.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The businesses that get recommended by AI are not always the best in their market. But they are almost always among the clearest. Clarity, consistency, and corroboration compound over time.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-4 text-xs">THE THREE PRINCIPLES</p>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        word: 'Clarity',
                        desc: 'The business entity is precisely defined in machine-readable schema — correct type, correct attributes, correct relationships.',
                      },
                      {
                        word: 'Consistency',
                        desc: 'Every external profile matches the website exactly. NAP data, business type, service descriptions, and contact details align.',
                      },
                      {
                        word: 'Corroboration',
                        desc: 'Multiple independent sources confirm the same entity. The website declares it. Google confirms it. BBB supports it. Industry directories reinforce it.',
                      },
                    ].map((item) => (
                      <div key={item.word} className="border-b border-[var(--d-line)] pb-4 last:border-0 last:pb-0">
                        <p className="text-[var(--d-accent)] font-bold font-inter text-base mb-1">{item.word}</p>
                        <p className="text-[var(--d-fg-dim)] font-inter text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A business that invests in its entity graph in 2026 is not just improving its SEO. It is building the foundation that will determine whether it gets recommended by the AI systems, voice assistants, and agentic tools that define local discovery for the next decade.
                </p>

                <p className="text-[var(--d-fg)] font-inter font-semibold text-lg leading-relaxed">
                  That foundation is what KodeCite builds.
                </p>

                {/* ── FAQ ────────────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-16 mb-6">Frequently Asked Questions</h2>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      q: "What is entity-first search?",
                      a: "Entity-first search describes how modern AI systems and search engines organize information around things — people, places, businesses, services — rather than around text and keywords. A local business that wants to appear in AI recommendations needs to be understood as a clear, verifiable entity, not just a page with content.",
                    },
                    {
                      q: "How is entity-first search different from traditional SEO?",
                      a: "Traditional SEO focused on keywords, content volume, and backlinks. Entity-first search focuses on structured identity: is the business clearly defined, consistently corroborated across the web, and connected through machine-readable schema? Both approaches overlap — strong SEO still matters — but entity signals determine whether an AI system can confidently recommend a business when the recommendation set is small.",
                    },
                    {
                      q: "What is an entity graph for a local business?",
                      a: "An entity graph is the full network of structured, machine-readable relationships that connect every part of a business into a coherent identity. It includes the business organization node, founder and practitioner nodes, service nodes, location nodes, article nodes, and external profile references — all linked through shared @id identifiers in JSON-LD schema so AI systems can understand the business as a connected whole.",
                    },
                    {
                      q: "How do AI systems use entity information to decide who to recommend?",
                      a: "AI systems evaluate businesses against a confidence threshold, cross-referencing the website against external sources — Google Business Profile, Bing Places, Apple Business Connect, BBB, Yelp, Yellow Pages, and industry directories — looking for consistency in name, address, phone, business type, and service descriptions. Businesses easy to verify across multiple sources are safer to recommend. Businesses with inconsistent or ambiguous entity signals are often filtered out.",
                    },
                    {
                      q: "What are the five most common entity gaps local businesses have?",
                      a: "The five most common entity gaps are: inconsistent NAP data across directories; schema using wrong business types; reviews disconnected from service pages with no structured proof layer; missing provider or practitioner identity schema; and platform-dependent markup from WordPress, Wix, or Squarespace plugins that conflicts with or duplicates structured data, sending contradictory signals to AI systems.",
                    },
                    {
                      q: "Does adding schema markup alone make a strong entity?",
                      a: "No. Schema markup declares the entity, but a strong entity graph requires corroboration. A business can have perfect JSON-LD on its website and still have a weak entity if external profiles are inconsistent, provider identity is missing, or the site cannot be crawled cleanly. Schema is a necessary first layer, not the complete solution.",
                    },
                    {
                      q: "How does Google Business Profile connect to my entity graph?",
                      a: "Google Business Profile is a corroboration node — it should match what the website declares, not define the entity in place of the website. The website defines the entity through JSON-LD schema. Google Business Profile, Bing Places, Apple Business Connect, and other directory profiles then corroborate that definition with consistent NAP data, business type, and service descriptions.",
                    },
                    {
                      q: "Does it matter which website platform I use for entity-first search?",
                      a: "Yes, significantly. WordPress, Wix, and Squarespace produce bloated HTML that consumes AI token budgets, JavaScript-rendered content that AI crawlers may not see on a cold load, and schema generated by plugins that is often wrong or conflicting. A purpose-built Next.js site with server-side rendering and clean JSON-LD gives AI systems accurate signals on the first crawl without ambiguity.",
                    },
                    {
                      q: "Can a business with great reviews but weak entity signals still get recommended by AI?",
                      a: "Possibly, but inconsistently. Reviews are a corroboration signal — they help, but they do not replace a structured entity. If the business name, address, or business type is ambiguous in schema, AI systems may struggle to connect those reviews to the right entity. A strong entity graph makes every corroboration signal — including reviews — count more.",
                    },
                    {
                      q: "What is the first step toward building a stronger entity?",
                      a: "The first step is an honest audit of your current entity signals: what schema exists on the site and whether it is correct, whether NAP data is consistent across all external profiles, whether provider identity is declared, and whether the website can be crawled cleanly without JavaScript dependency. A Machine Read — which is what KodeCite offers at no cost — shows you what AI systems can currently verify about your business and where the highest-priority gaps are.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-t border-[var(--d-line)] pt-5">
                      <p className="font-inter font-semibold text-[var(--d-fg)] mb-2">{item.q}</p>
                      <p className="font-inter text-[var(--d-fg-dim)] text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>

              </div>
            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                {/* Entity vs Content comparison */}
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">ENTITY VS CONTENT</p>
                  <div className="space-y-4">
                    {[
                      {
                        label: 'Old model',
                        desc: 'More content, more keywords, more pages',
                        accent: 'var(--d-fg-mute)',
                      },
                      {
                        label: 'Entity-first',
                        desc: 'Clear identity, consistent corroboration, structured proof',
                        accent: 'var(--d-accent)',
                      },
                    ].map((item, i, arr) => (
                      <div key={item.label} className={i < arr.length - 1 ? 'border-b border-[var(--d-line)] pb-4' : ''}>
                        <p className="font-bold font-inter text-sm" style={{ color: item.accent }}>{item.label}</p>
                        <p className="text-[var(--d-fg-dim)] text-sm font-inter mt-1">{item.desc}</p>
                      </div>
                    ))}
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <p className="text-[var(--d-fg-mute)] text-xs font-inter">Content still matters. But the entity graph is the foundation that makes content count.</p>
                    </div>
                  </div>
                </div>

                {/* Machine Read CTA */}
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-bold text-[var(--d-fg)] text-lg mb-3 leading-snug">
                    Find Your Entity Gaps
                  </p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">
                    A Machine Read shows exactly what AI systems can verify about your business right now — and where the gaps are.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get My Free Machine Read
                  </Link>
                </div>

                {/* Related reading */}
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-an-entity-graph" className="block group">
                      <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                        What Is an Entity Graph — And Why the Technology Behind It Has Been Hiding in Plain Sight
                      </p>
                      <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">11 min read</p>
                    </Link>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/below-the-content-layer" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          Below The Content Layer — Where Your Real SEO, AEO &amp; GEO Opportunity Lives
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">12 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/compressed-search-entity-trust" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          Compressed Search Is Coming: Why Entity Trust Will Matter More Than Content Volume
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">18 min read</p>
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

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[var(--d-bg-3)] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">YOUR ENTITY GRAPH STARTS HERE</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-[var(--d-fg)] mb-4">
            Find out what AI can actually verify about your business.
          </h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">
            A Machine Read shows you exactly where your entity signals are strong — and where the gaps are leaving recommendations on the table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
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

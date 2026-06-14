import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, entityGraphTerm, businessRef } from '@/lib/schema';

export const metadata: Metadata = {
  title: "Why Your Website Can't Talk to AI",
  description:
    'AI systems read your site like a customs officer reads a passport — looking for verified, structured facts. Why default plugin schema fails, and what fixes it.',
  alternates: { canonical: 'https://www.kodecite.ai/blog/why-your-website-cant-talk-to-ai' },
  openGraph: {
    title: "The Language Problem: Why Your Website Can't Talk to AI — And What to Do About It",
    description:
      'AI systems parse your site for verified, structured, machine-readable facts. Default plugin schema is shallow and often unreadable on cold crawl. Here is what an engineered entity graph does differently.',
    url: 'https://www.kodecite.ai/blog/why-your-website-cant-talk-to-ai',
    type: 'article',
    publishedTime: '2026-06-14',
    authors: ['Mark Abplanalp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.kodecite.ai/blog/why-your-website-cant-talk-to-ai#article',
  headline: "The Language Problem: Why Your Website Can't Talk to AI — And What to Do About It",
  description:
    'AI systems parse your website for verified, structured, machine-readable facts — the way a customs officer reads a passport. Why default plugin schema is shallow and often unreadable on cold crawl, and what an engineered entity graph does instead.',
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: blogCollectionPage,
  datePublished: '2026-06-14T00:00:00-07:00',
  dateModified: '2026-06-14T00:00:00-07:00',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.kodecite.ai/blog/why-your-website-cant-talk-to-ai' },
  url: 'https://www.kodecite.ai/blog/why-your-website-cant-talk-to-ai',
  image: { '@type': 'ImageObject', url: 'https://www.kodecite.ai/og-image.png', width: 1200, height: 630 },
  articleSection: 'AEO & AI Search',
  wordCount: 2600,
  keywords: [
    'entity graph', 'schema markup', 'JSON-LD', 'server-side rendering', 'AI crawlers',
    'AI search visibility', 'answer engine optimization', 'WordPress schema', 'sameAs', 'cold crawl',
  ],
  about: [
    entityGraphTerm,
    { '@type': 'DefinedTerm', name: 'Schema Markup' },
    { '@type': 'DefinedTerm', name: 'Server-Side Rendering' },
    { '@type': 'DefinedTerm', name: 'Entity Disambiguation' },
    { '@type': 'DefinedTerm', name: 'Answer Engine Optimization' },
    businessRef,
  ],
  mentions: [
    { '@type': 'Organization', '@id': 'https://www.google.com/', name: 'Google', url: 'https://www.google.com', sameAs: 'https://www.wikidata.org/wiki/Q95' },
    { '@type': 'Organization', name: 'OpenAI', url: 'https://openai.com', sameAs: 'https://www.wikidata.org/wiki/Q21708200' },
    { '@type': 'Organization', name: 'Perplexity', url: 'https://www.perplexity.ai' },
    { '@type': 'Organization', name: 'Anthropic (Claude)', url: 'https://www.anthropic.com/claude' },
    { '@type': 'Organization', name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com' },
    { '@type': 'Thing', name: 'Google AI Overviews', url: 'https://blog.google/products/search/ai-overviews-and-ai-mode/' },
    { '@type': 'Thing', name: 'Google Knowledge Graph', url: 'https://blog.google/products/search/introducing-knowledge-graph-things-not/', sameAs: 'https://www.wikidata.org/wiki/Q648625' },
    { '@type': 'Organization', name: 'Schema.org', url: 'https://schema.org', sameAs: 'https://www.wikidata.org/wiki/Q3475322' },
    { '@type': 'Organization', name: 'Vercel', url: 'https://vercel.com' },
    { '@type': 'Organization', name: 'Next.js', url: 'https://nextjs.org' },
    { '@type': 'Organization', name: 'WordPress', url: 'https://wordpress.org' },
    { '@type': 'Organization', name: 'Yoast', url: 'https://yoast.com/' },
    { '@type': 'Organization', name: 'Rank Math', url: 'https://rankmath.com/' },
    { '@type': 'GovernmentOrganization', name: 'Idaho Real Estate Commission', url: 'https://irec.idaho.gov/' },
  ],
  citation: [
    { '@type': 'TechArticle', name: 'The rise of the AI crawler', url: 'https://vercel.com/blog/the-rise-of-the-ai-crawler', publisher: { '@type': 'Organization', name: 'Vercel' }, datePublished: '2024-12-12' },
    { '@type': 'TechArticle', name: 'The Technical SEO Audit Needs A New Layer', url: 'https://www.searchenginejournal.com/technical-seo-audit-new-layer/571583/', publisher: { '@type': 'Organization', name: 'Search Engine Journal' } },
    { '@type': 'TechArticle', name: 'Yoast Schema — technology and approach', url: 'https://developer.yoast.com/features/schema/technology-approach/', publisher: { '@type': 'Organization', name: 'Yoast' } },
    { '@type': 'WebSite', name: 'Schema.org', url: 'https://schema.org' },
    { '@type': 'GovernmentService', name: 'Idaho Real Estate Commission', url: 'https://irec.idaho.gov/' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.kodecite.ai/blog/why-your-website-cant-talk-to-ai#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Why doesn't my SEO agency solve this problem?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional SEO was built for ranking on a list of ten results, and much of the industry still optimizes for that — backlinks, keyword phrases, page titles. Those still matter for organic search, but AI recommendations lean on a different signal: entity verification and structured trust. Many agencies lack the engineering capacity to build custom entity graphs at the code level, and the plugins they rely on tend to produce generic output.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between schema and an entity graph?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schema is a vocabulary — standardized terms, defined at Schema.org, that describe things in machine-readable ways. An entity graph is an architecture that uses that vocabulary to connect stable, interconnected identities — your business, founder, website, and content — through permanent @id anchors that let AI systems traverse the relationships. Plugin-generated schema often uses the vocabulary but builds only a shallow, templated graph.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this mean my WordPress site can never rank in AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress itself is not disqualifying. The problems are (1) generic plugin-generated schema and (2) JavaScript-dependent rendering, which creates a cold-crawl gap for AI systems that read content without executing JavaScript. Sophisticated developers can address parts of this on WordPress. What is harder to achieve is the full entity-graph architecture — stable @id anchors, a single @graph source of truth, and reliable server-side rendering on cold crawl.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your market and competitive position. In a less saturated market, meaningful AI citations can appear within weeks; in competitive markets the timeline is longer. What is consistent is that the entity graph compounds — every new piece of content that correctly references the canonical graph strengthens the overall signal, and the infrastructure keeps working after launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What exactly does a Machine Read show me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Machine Read is a technical audit of your current AI visibility: schema completeness (which entities are declared and which are missing), cold-crawl performance (can AI read your content without executing JavaScript), entity verification (do your directories, Google Business Profile, and schema agree on your NAP), your current citation status in tools like ChatGPT, Perplexity, and Google AI Mode, and a prioritized gap list.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.kodecite.ai/blog/why-your-website-cant-talk-to-ai#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: 'The Language Problem: Why Your Website Can’t Talk to AI', item: 'https://www.kodecite.ai/blog/why-your-website-cant-talk-to-ai' },
  ],
};

const link = 'text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity';

export default function WhyYourWebsiteCantTalkToAI() {
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
            <span className="text-[var(--d-fg)] truncate">The Language Problem</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">14 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            The Language Problem:{' '}
            <span className="text-[var(--d-accent)]">Why Your Website Can&apos;t Talk to AI — And What to Do About It</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            The systems deciding whether to recommend your business don&apos;t read your homepage the way a buyer does.
            They parse it the way a customs officer reads a passport — looking for verified, structured facts. Here&apos;s
            why default plugin schema fails that test, and what fixes it.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[var(--d-line)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-inter">MA</span>
              </div>
              <div>
                <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
                <p className="text-[var(--d-fg-dim)] text-xs font-inter">June 14, 2026</p>
              </div>
            </div>
          </div>
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

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Imagine you&apos;re traveling in Japan. You don&apos;t speak Japanese. A stranger stops you, and you
                  need to explain your business — not just what you sell, but who your customers are, where you&apos;re
                  located, your hours, what makes you trustworthy, how someone contacts you, and why you&apos;re better
                  than the three other businesses two blocks away.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  You&apos;d try. Hand gestures, broken phrases, a translation app that keeps getting things wrong. You
                  might get across the basics — &ldquo;I sell windows,&rdquo; &ldquo;Post Falls, Idaho,&rdquo; &ldquo;call
                  this number.&rdquo; But the nuance? The credentials? The complete picture that would make a stranger
                  confidently say &ldquo;yes, go to this specific business&rdquo;? Lost in translation. That stranger
                  would probably shrug and say &ldquo;I don&apos;t know&rdquo; rather than risk a bad recommendation.
                </p>
                <p className="text-[var(--d-fg)] leading-relaxed mb-6 font-medium">
                  That is your website right now, in front of an AI system.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">
                  What AI Systems Actually Do When They &ldquo;Read&rdquo; Your Website
                </h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Most owners think about their website the way they think about a billboard — something humans look at.
                  But the systems now deciding whether to recommend your business are not human. They&apos;re language
                  models, knowledge graphs, and answer engines: ChatGPT, Google&apos;s AI Overviews, Bing Copilot,
                  Perplexity. They parse your page the way a customs officer reads a passport — looking for verified,
                  structured, machine-readable facts that confirm who you are and whether you can be trusted.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  When those systems process a query like &ldquo;who&apos;s the best window treatment company in Post
                  Falls,&rdquo; they&apos;re not keyword-matching. They&apos;re looking for a verifiable entity. Google
                  resolves the entities on a page against its{' '}
                  <a href="https://blog.google/products/search/introducing-knowledge-graph-things-not/" target="_blank" rel="noopener noreferrer" className={link}>Knowledge Graph</a>{' '}
                  — deciding, for example, that this &ldquo;Apple&rdquo; is the company, not the fruit — and uses that
                  resolved entity layer to decide which pages deserve to surface (Jottler, 2026). A business the system
                  can identify, confirm, and cross-reference against authoritative sources is one it can recommend with
                  confidence.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  &ldquo;Confidence&rdquo; is the key word. When the structured data about your business is thin,
                  ambiguous, or contradictory — which it almost certainly is on WordPress, Wix, or Squarespace with
                  default settings — the system has a harder time placing you. Entity recognition runs on three signals
                  working together: structured data ({' '}
                  <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className={link}>Schema.org</a>{' '}
                  markup), corroborating mentions across authoritative sources, and a consistent identity — the same name,
                  description, and <code className="text-[var(--d-accent)]">sameAs</code> URLs everywhere (Jottler, 2026).
                  When those signals are weak, the system surfaces the business it can most clearly understand — and it
                  names that business instead.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">The Plugin Problem</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Every major WordPress SEO plugin — Yoast, Rank Math, Schema Pro — generates structured data
                  automatically. To be fair: the better plugins do build a connected graph.{' '}
                  <a href="https://developer.yoast.com/features/schema/technology-approach/" target="_blank" rel="noopener noreferrer" className={link}>Yoast</a>{' '}
                  automatically generates a unified <code className="text-[var(--d-accent)]">@graph</code> on every page,
                  wiring together Organization, WebSite, WebPage, Article, and Person through stable{' '}
                  <code className="text-[var(--d-accent)]">@id</code> anchors. So the issue isn&apos;t that plugins
                  &ldquo;can&apos;t build a graph.&rdquo; The real gap is three things plugins genuinely don&apos;t do
                  well — and each is independently verifiable.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  <strong className="text-[var(--d-fg)]">First: the graph is shallow and generic.</strong> The plugin
                  builds a templated graph. In one analysis of 150 independent agency websites, 88% relied on generic
                  LocalBusiness markup rather than a specific subtype (LovedByAI, 2026). To an AI, a generic
                  LocalBusiness &ldquo;could be a pizza shop or a dry cleaner&rdquo; — it lacks the semantic weight of a
                  precise type. What plugins don&apos;t express out of the box is what actually wins recommendations:
                  deep credential chains tied to issuing authorities, custom <code className="text-[var(--d-accent)]">knowsAbout</code>{' '}
                  topical authority, rich citation arrays, and precise geographic depth (DEV Community, 2026).
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  <strong className="text-[var(--d-fg)]">Second: most of these sites can&apos;t be read on cold crawl.</strong>{' '}
                  This is the more decisive problem — even a perfect graph is invisible if the AI crawler can&apos;t read
                  it without executing JavaScript. It gets its own section below.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  <strong className="text-[var(--d-fg)]">Third: a plugin fills in blanks; it doesn&apos;t make
                  entity-architecture decisions.</strong> It can&apos;t decide which specific Schema.org subtype best
                  describes you, which credentials to surface, which topics establish your authority, or how to model
                  your service geography. That judgment — knowing what the schema should <em>say</em> — is the actual
                  work, and no plugin does it for you.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">Why This Is the Moment That Matters</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  For the first twenty years of the commercial web, much of Google&apos;s job was to match keywords. Your
                  content was the product — volume of words, keywords targeted, backlinks earned. That world still
                  exists, but it&apos;s changing fast. AI Overviews, ChatGPT, Perplexity, and Bing Copilot generate one
                  synthesized answer and point to the handful of sources that informed it. Perplexity typically
                  synthesizes from roughly 5 to 10 sources and cites only a few (AI Labs Audit, 2026), and Google&apos;s
                  AI Overviews usually surface just 3 to 6 source cards (AEO Hunt, 2026). The output of a search is
                  condensing from a page of options into a small set of cited entities.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The businesses that make that cut aren&apos;t necessarily the ones with the most content. They&apos;re
                  the ones the AI can read clearly, verify, and select with confidence. Citation selection is based on
                  extractability and entity authority — not raw ranking position. A page can rank first organically and
                  never be cited; a page on page two can be the primary cited source (Project36, 2025). Meanwhile the web
                  is being flooded with AI-generated content at unprecedented scale. The supply of content is effectively
                  infinite. The number of cited entities is small.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">What KodeCite Builds Instead</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  KodeCite doesn&apos;t rely on platforms or plugins. We build your website at the code level — Next.js,
                  deployed on Vercel&apos;s edge — and engineer your structured data the way a software architect
                  engineers a system. The modern best-practice pattern is exactly this: declare all entities in a single
                  <code className="text-[var(--d-accent)]"> @graph</code> block with cross-referenced{' '}
                  <code className="text-[var(--d-accent)]">@id</code> URIs, letting AI systems reconstruct the
                  relationships between them — an approach that has overtaken the older &ldquo;one schema block per
                  page&rdquo; method (DEV Community, 2026). That entity graph declares:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-[var(--d-fg-dim)] leading-relaxed">
                  <li><strong className="text-[var(--d-fg)]">Who you are</strong> — the precise Schema.org subtype that applies, not a generic catch-all. The more specific the type, the more accurately AI systems categorize and recommend you.</li>
                  <li><strong className="text-[var(--d-fg)]">What you&apos;re credentialed to do</strong> — designations and certifications, made machine-readable and connected to the issuing authority where possible (for a licensed agent in Idaho, the <a href="https://irec.idaho.gov/" target="_blank" rel="noopener noreferrer" className={link}>Idaho Real Estate Commission</a>).</li>
                  <li><strong className="text-[var(--d-fg)]">Where you operate</strong> — not just an address, but precise <code className="text-[var(--d-accent)]">areaServed</code> (a GeoCircle of latitude/longitude plus radius, or specific geographic identifiers) so AI knows exactly where you work.</li>
                  <li><strong className="text-[var(--d-fg)]">Who else agrees you&apos;re real</strong> — the <code className="text-[var(--d-accent)]">sameAs</code> layer of verified external profiles (Google Business Profile, BBB, licensing records, Wikidata). Bidirectional links are corroborative claims; one-directional links are unverified assertions (Ibrahim Anwar).</li>
                  <li><strong className="text-[var(--d-fg)]">What you&apos;re expert in</strong> — the <code className="text-[var(--d-accent)]">knowsAbout</code> property and a content-cluster architecture that signals topical authority in a specific geography.</li>
                  <li><strong className="text-[var(--d-fg)]">How to contact and transact</strong> — structured, unambiguous contact and service pathways AI systems can extract directly.</li>
                </ul>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  This is what it means for your website to speak the native language fluently — not broken phrases and a
                  hope that the AI pieces it together, but a complete, precise declaration of your business identity that
                  an AI system can traverse, verify, and cite.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">Why Code-Level Rendering Matters as Much as the Schema</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  There&apos;s a second half to this problem: even perfect schema is useless if the AI crawler can&apos;t
                  read it on the first request. Most AI crawlers do not execute JavaScript.{' '}
                  <a href="https://vercel.com/blog/the-rise-of-the-ai-crawler" target="_blank" rel="noopener noreferrer" className={link}>Vercel&apos;s large-scale analysis of AI crawler traffic</a>{' '}
                  — covering hundreds of millions of requests — found that none of the major AI crawlers (OpenAI&apos;s
                  GPTBot, Anthropic&apos;s ClaudeBot, Perplexity&apos;s PerplexityBot, and others) render JavaScript.
                  ChatGPT and Claude crawlers download JavaScript files (about 11.5% and 23.8% of requests respectively),
                  but they don&apos;t run them (Vercel, 2024).{' '}
                  <a href="https://www.searchenginejournal.com/technical-seo-audit-new-layer/571583/" target="_blank" rel="noopener noreferrer" className={link}>Search Engine Journal</a>{' '}
                  reached the same conclusion: server-side rendering is &ldquo;a requirement for AI search visibility, not
                  an optimization.&rdquo;
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The implication: if your content, schema, and internal links only appear after client-side JavaScript
                  executes, they may be invisible to the systems powering ChatGPT, Claude, and Perplexity. Server-side
                  rendering — the default in a properly built Next.js application — delivers complete, readable HTML on
                  the first request. You can test your own site in five minutes: run <code className="text-[var(--d-accent)]">curl</code>{' '}
                  on a key page (or use &ldquo;View Source,&rdquo; not &ldquo;Inspect Element&rdquo;). If your core
                  content and schema aren&apos;t in the raw response, the AI crawlers can&apos;t see them either.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">The Difference That&apos;s Already Showing Up</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  We&apos;ve watched this play out. Take Shirin Abplanalp, a licensed REALTOR&reg; with 11 years of
                  experience and more than 100 transactions closed — but all of that was built in Bend, Oregon. When she
                  relocated and launched on this infrastructure in early 2026, she was brand new to North Idaho: no local
                  closings, no Google Business Profile, competing against agents who had worked that market for two
                  decades.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Within roughly eight weeks, the AI engines were treating her site as a primary source for North Idaho
                  relocation queries. Bing Copilot built entire city-comparison answers almost wholly from her data —
                  citing the site for nearly every figure: population, home values, days-on-market, commute times.
                  ChatGPT named her site as a reference. Perplexity cited her articles directly. On an eight-week-old
                  site with zero Idaho closings — not because she&apos;d outspent anyone, but because her entity graph
                  was clean, complete, and readable on cold crawl in a way that competing plugin-built sites were not.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  This is consistent with how these systems are documented to behave: citation goes to the source the
                  engine can extract cleanly and verify as an authoritative entity — not to whoever has the longest local
                  track record (Project36, 2025). The infrastructure created the local authority before the local track
                  record existed. That&apos;s the difference.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">The Question Worth Asking Right Now</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  If you&apos;re reading this on a WordPress site, or your designer recently &ldquo;added schema&rdquo;
                  using a plugin, the question is simple: what exactly does an AI system see when it crawls your business?
                  Not what your site looks like to a human visitor — what it looks like to a machine deciding whether to
                  recommend you. A{' '}
                  <Link href="/contact" className={link}>Machine Read</Link>{' '}
                  shows you the real picture: your schema architecture, entity completeness, NAP consistency across
                  directories, and cold-crawl readability — not the one a plugin dashboard implies.
                </p>

                {/* ── FAQ ────────────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-16 mb-6">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-6">
                  {[
                    { q: "Why doesn't my SEO agency solve this problem?", a: "Traditional SEO was built for ranking on a list of ten results, and much of the industry still optimizes for that — backlinks, keywords, titles. Those still matter for organic search, but AI recommendations lean on a different signal: entity verification and structured trust. Many agencies lack the engineering capacity to build custom entity graphs at the code level, and the plugins they rely on tend to produce generic output." },
                    { q: "What's the difference between schema and an entity graph?", a: "Schema is a vocabulary — standardized terms from Schema.org that describe things in machine-readable ways. An entity graph is an architecture that uses that vocabulary to connect stable identities — your business, founder, website, content — through permanent @id anchors AI systems can traverse. Plugin schema often uses the vocabulary but builds only a shallow, templated graph." },
                    { q: "Does this mean my WordPress site can never rank in AI?", a: "WordPress itself isn't disqualifying. The problems are (1) generic plugin-generated schema and (2) JavaScript-dependent rendering, which creates a cold-crawl gap. Sophisticated developers can address parts of this on WordPress; what's harder is the full entity-graph architecture — stable @id anchors, a single @graph source of truth, and reliable server-side rendering on cold crawl." },
                    { q: "How long does it take to see results?", a: "It depends on your market. In a less saturated market, meaningful AI citations can appear within weeks; in competitive markets, longer. What's consistent is that the entity graph compounds — every new piece of content that correctly references the canonical graph strengthens the signal, and the infrastructure keeps working after launch." },
                    { q: "What exactly does a Machine Read show me?", a: "A technical audit of your current AI visibility: schema completeness, cold-crawl performance (can AI read your content without executing JavaScript), entity verification (do your directories, Google Business Profile, and schema agree on your NAP), your current citation status in ChatGPT, Perplexity, and Google AI Mode, and a prioritized gap list." },
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

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-bold text-[var(--d-fg)] text-lg mb-3 leading-snug">
                    What Does AI Actually See?
                  </p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">
                    A Machine Read shows what AI systems can verify about your business right now — schema, entity completeness, NAP consistency, and cold-crawl readability.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get My Free Machine Read
                  </Link>
                </div>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-an-entity-graph" className="block group">
                      <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                        What Is an Entity Graph — And Why It Has Been Hiding in Plain Sight for a Decade
                      </p>
                      <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">14 min read</p>
                    </Link>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/entity-first-search-local-businesses" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          Entity-First Search: How Local Businesses Become the Answer AI Systems Recommend
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">12 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/schema-markup-complete-guide" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          Schema Markup: The Complete Guide for Local Service Businesses
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

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[var(--d-bg-3)] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">SPEAK THE NATIVE LANGUAGE</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-[var(--d-fg)] mb-4">
            Find out what AI actually sees.
          </h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">
            A Machine Read shows you exactly what AI systems can verify about your business right now — and where the gaps are.
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, entityGraphTerm, businessRef } from '@/lib/schema';

const URL = 'https://www.kodecite.ai/blog/aeo-technical-seo-done-correctly';

export const metadata: Metadata = {
  title: 'AEO Is Technical SEO Done Correctly for the AI Search Era',
  description:
    "SEO isn't dead — shallow SEO is. AEO is what proper technical SEO becomes when it's built for AI search: entity graph infrastructure the machines can understand, verify, and recommend.",
  alternates: { canonical: URL },
  openGraph: {
    title: 'AEO Is Technical SEO Done Correctly for the AI Search Era',
    description:
      "SEO isn't dead — shallow SEO is. AEO is proper technical SEO built for AI search: entity graph infrastructure machines can understand, verify, and cite.",
    url: URL,
    type: 'article',
    publishedTime: '2026-07-06',
    authors: ['Mark Abplanalp'],
    images: [{ url: 'https://www.kodecite.ai/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO Is Technical SEO Done Correctly for the AI Search Era',
    description:
      "SEO isn't dead — shallow SEO is. AEO is proper technical SEO built for AI search: entity graph infrastructure machines can understand, verify, and cite.",
    images: ['https://www.kodecite.ai/og-image.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${URL}#article`,
  headline: 'AEO Is Technical SEO Done Correctly for the AI Search Era',
  name: 'AEO Is Technical SEO Done Correctly for the AI Search Era',
  description:
    "SEO isn't dead — shallow SEO is. AEO is what proper technical SEO becomes when it's built for AI search: entity graph infrastructure the machines can understand, verify, and recommend.",
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: blogCollectionPage,
  datePublished: '2026-07-06T00:00:00-07:00',
  dateModified: '2026-07-06T00:00:00-07:00',
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  url: URL,
  image: { '@type': 'ImageObject', url: 'https://www.kodecite.ai/og-image.png', width: 1200, height: 630 },
  articleSection: 'AEO Foundations',
  wordCount: 2600,
  inLanguage: 'en-US',
  keywords: [
    'technical SEO', 'answer engine optimization', 'AEO', 'entity graph', 'schema markup',
    'JSON-LD', 'AI search visibility', 'Next.js', 'llms.txt', 'agent.json', 'local SEO',
  ],
  about: [
    { '@type': 'Thing', name: 'Technical SEO' },
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    entityGraphTerm,
    { '@type': 'Thing', name: 'Schema.org', sameAs: 'https://schema.org' },
    { '@type': 'Thing', name: 'AI Search Visibility' },
    { '@type': 'Thing', name: 'Local SEO' },
    businessRef,
  ],
  mentions: [
    { '@type': 'Organization', name: 'Google', url: 'https://www.google.com', sameAs: 'https://www.wikidata.org/wiki/Q95' },
    { '@type': 'Thing', name: 'Google AI Overviews', url: 'https://blog.google/products/search/ai-overviews-and-ai-mode/' },
    { '@type': 'Thing', name: 'Google AI Mode', url: 'https://support.google.com/websearch/answer/16011537' },
    { '@type': 'Organization', name: 'OpenAI', url: 'https://openai.com', sameAs: 'https://www.wikidata.org/wiki/Q21708200' },
    { '@type': 'Organization', name: 'Perplexity', url: 'https://www.perplexity.ai' },
    { '@type': 'Organization', name: 'Google Gemini', url: 'https://gemini.google.com' },
    { '@type': 'Organization', name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com' },
    { '@type': 'Organization', name: 'WordPress', url: 'https://wordpress.org' },
    { '@type': 'Organization', name: 'Yoast', url: 'https://yoast.com' },
    { '@type': 'Organization', name: 'Rank Math', url: 'https://rankmath.com' },
    { '@type': 'Organization', name: 'Wix', url: 'https://www.wix.com' },
    { '@type': 'Organization', name: 'Squarespace', url: 'https://www.squarespace.com' },
    { '@type': 'Organization', name: 'Next.js', url: 'https://nextjs.org' },
    { '@type': 'Organization', name: 'Schema.org', url: 'https://schema.org', sameAs: 'https://www.wikidata.org/wiki/Q3475322' },
  ],
  citation: [
    { '@type': 'WebPage', name: 'AI Overviews in Google Search', url: 'https://search.google/ways-to-search/ai-overviews/', publisher: { '@type': 'Organization', name: 'Google' } },
    { '@type': 'WebPage', name: 'AI Mode in Google Search (Help)', url: 'https://support.google.com/websearch/answer/16011537', publisher: { '@type': 'Organization', name: 'Google' } },
    { '@type': 'WebSite', name: 'Schema.org', url: 'https://schema.org' },
  ],
};

const faqItems = [
  {
    q: 'Is AEO replacing SEO?',
    a: "No. AEO is not a separate discipline that replaces SEO — it is what proper technical SEO becomes when it is built for AI search. Traditional SEO focused on ranking individual pages. AEO extends that same technical foundation to give answer engines a clear, verified business identity they can understand, cite, and recommend. Shallow SEO is what's fading. Real technical SEO matters more than ever.",
  },
  {
    q: 'Can Yoast or Rank Math create an entity graph?',
    a: "Plugins like Yoast and Rank Math can output schema markup, which is genuinely useful and better than nothing. What they typically don't do is build one clean, connected, unambiguous entity graph across your entire site. Most plugin implementations generate page-level markup from templates with limited control, which can leave you with contradictory or disconnected identity signals. The issue isn't the plugin's honesty — it's the ceiling on control it can give a small business.",
  },
  {
    q: 'Why does Next.js help with AI search optimization?',
    a: "Next.js doesn't rank you higher by itself — no framework does. Its advantage is control. It lets us server-render content into clean HTML, write custom JSON-LD per page, define stable @id anchors so every entity connects correctly, deliver pages fast from the edge, and add emerging machine-readable identity files like llms.txt and agent.json — all without plugin conflicts or contradictory markup. That precision at the infrastructure layer is what makes a business legible to AI systems.",
  },
  {
    q: 'What is the difference between schema markup and an entity graph?',
    a: "Schema markup is structured data placed on individual pages. An entity graph is a single, connected map of your whole business — the organization, founder, services, locations, reviews, citations, and external profiles — all tied together with stable IDs and consistent relationships. Put simply: schema plugins generate markup; entity graphs create meaning. Markup describes a page. An entity graph defines who you are, everywhere, unambiguously.",
  },
  {
    q: 'What should local businesses do first?',
    a: "Find out what the machines currently see. Before rebuilding anything, get an honest read on whether AI systems can understand and verify your business today — your entity clarity, your schema, your identity signals. That diagnosis tells you whether you have a content problem, an infrastructure problem, or both, and it keeps you from spending money on the shallow fixes that won't move the needle in AI search. Running a free Machine Read is the fastest way to get that picture.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${URL}#faq`,
  isPartOf: { '@id': `${URL}#article` },
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: 'AEO Is Technical SEO Done Correctly for the AI Search Era', item: URL },
  ],
};

const link = 'text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity';

const checklist = [
  ['Clean, crawlable architecture', 'a site machines can navigate without dead ends'],
  ['Fast, server-rendered pages', 'content present in the HTML, delivered quickly'],
  ['Canonical URLs', 'one authoritative address per page, no duplicates competing'],
  ['Precise metadata', 'titles and descriptions that are accurate and non-duplicated'],
  ['Custom JSON-LD', 'written per page, not stamped from a generic template'],
  ['Connected LocalBusiness / Organization schema', 'one canonical business identity'],
  ['Service schema', 'each service named and linked to the business'],
  ['Article schema', 'for published content, tied into the graph'],
  ['FAQPage schema', 'when you have real, visible FAQs on the page (and only then)'],
  ['BreadcrumbList schema', 'so structure is legible'],
  ['Citation-backed content', 'claims supported by sources, not vibes'],
  ['External sameAs profiles', 'off-site listings that confirm the same identity'],
  ['Location and service clarity', 'no guessing where you work or what you do'],
  ['Review corroboration', 'proof connected to the entity it belongs to'],
  ['Machine-readable AI identity files', 'llms.txt and agent.json — emerging, low-cost, forward-looking'],
  ['Clear conversion paths', 'an obvious next action for both people and agents'],
];

const sources: [string, string][] = [
  ['Google — AI Overviews', 'https://search.google/ways-to-search/ai-overviews/'],
  ['Google — AI Mode in Search (Help)', 'https://support.google.com/websearch/answer/16011537'],
  ['Schema.org', 'https://schema.org/'],
];

export default function AeoTechnicalSeoDoneCorrectly() {
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
            <span className="text-[var(--d-fg)] truncate">AEO Is Technical SEO Done Correctly</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO Foundations</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">13 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            AEO Is Technical SEO <span className="text-[var(--d-accent)]">Done Correctly for the AI Search Era</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            &ldquo;AI is going to kill SEO&rdquo; is the wrong takeaway. SEO isn&apos;t dead — shallow SEO is. Here&apos;s the
            technical case for why AEO is simply proper technical SEO, built correctly for the age of AI answer engines.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[var(--d-line)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-inter">MA</span>
              </div>
              <div>
                <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
                <p className="text-[var(--d-fg-dim)] text-xs font-inter">July 6, 2026</p>
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

            <article className="lg:col-span-2">
              <div className="prose-content font-inter">

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  You have probably heard some version of this line lately: &ldquo;AI is going to kill SEO.&rdquo; It gets
                  repeated in podcasts, LinkedIn posts, and sales calls, usually right before someone tries to sell you
                  something new. And for a lot of local business owners — the dentist, the custom builder, the HVAC company,
                  the CPA firm — it lands as a quiet worry. You spent years and real money getting found on Google. Now you
                  are being told the ground moved.
                </p>
                <p className="text-[var(--d-fg)] leading-relaxed mb-6 font-medium">
                  Here is the more accurate way to say it. SEO is not dead. Shallow SEO is.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The kind of SEO that was sold to most small businesses — install a plugin, publish a few keyword pages,
                  optimize the Google Business Profile, buy some backlinks, tick the meta-tag boxes — was always the thin
                  version. It worked well enough when search was ten blue links and a map. It does not hold up when Google,
                  ChatGPT, Perplexity, Gemini, and Copilot are trying to understand your business well enough to describe it
                  in a sentence.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The correct conclusion is not that SEO stopped mattering. The correct conclusion is that SEO got more
                  technical, more entity-driven, and more dependent on infrastructure. AEO — Answer Engine Optimization — is
                  not a competing discipline that replaces SEO. AEO is what proper technical SEO becomes when it is built
                  correctly for the AI search era. That is the whole argument. The rest of this piece explains why, and what
                  it means for your site.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">The search environment changed. The goal changed with it.</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  For twenty years, &ldquo;getting found&rdquo; meant one thing: rank on page one. You optimized a page, it
                  climbed, people clicked, you won.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Look at a results screen today. Above the old blue links you get a map pack, an{' '}
                  <a href="https://search.google/ways-to-search/ai-overviews/" target="_blank" rel="noopener noreferrer" className={link}>AI Overview</a>{' '}
                  summarizing an answer, &ldquo;People also ask&rdquo; boxes, and increasingly an{' '}
                  <a href="https://support.google.com/websearch/answer/16011537" target="_blank" rel="noopener noreferrer" className={link}>AI Mode</a>{' '}
                  conversation that never shows a traditional list at all. Step off Google entirely and your customers are
                  asking ChatGPT for a recommendation, asking Perplexity to compare three local providers, or letting Gemini
                  and Bing Copilot draft the shortlist before they ever visit a website.
                </p>
                <p className="text-[var(--d-fg)] leading-relaxed mb-6 font-medium">
                  The goal is no longer only to rank. The goal is to be understood, verified, cited, and recommended.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Those are not the same job. Ranking is about a page earning a position. Recommendation is about a business
                  earning trust — enough that a machine will put your name in an answer it is willing to stand behind. A page
                  can rank without the underlying business being legible to an AI system at all. That gap is exactly where
                  most SMBs are quietly losing ground right now, and it is invisible on a rankings report. (We wrote about
                  that language gap in more detail in{' '}
                  <Link href="/blog/why-your-website-cant-talk-to-ai" className={link}>Why Your Website Can&apos;t Talk to AI</Link>.)
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">Traditional SEO optimized pages. AI search evaluates entities.</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  This is the hinge of the whole shift, so it is worth slowing down. Classic SEO treats the web as a pile of
                  documents. Each page is a document you optimize — title, headings, keywords, links — so a search engine
                  ranks it for a query. The unit of work is the page.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  AI search treats the web as a graph of entities. The unit is not the page; it is the thing — your business,
                  its people, its services, its locations, its proof. Before an answer engine will recommend you, it is
                  quietly trying to answer a set of questions about that entity:
                </p>
                <ul className="flex flex-col gap-2.5 mb-6 pl-5 list-disc marker:text-[var(--d-accent)]">
                  {[
                    'Who is this business? Is it one clear, consistent identity, or three slightly different versions across the homepage, the footer, and the About page?',
                    'Who owns or represents it? Is there a real, named person or team behind it?',
                    'What does it actually do? In plain, structured terms — not just implied by a hero image.',
                    'Where does it operate? Which city, which service area, which locations?',
                    'Which services does it provide? Named and connected, not buried in paragraphs.',
                    'What proof supports the claims? Reviews, credentials, case studies, results.',
                    'What outside sources verify it? Consistent listings and profiles that agree with each other.',
                    'Which pages explain the services, locations, FAQs, and the next action — and are they connected in a way a machine can follow?',
                  ].map((li) => (
                    <li key={li} className="text-[var(--d-fg-dim)] leading-relaxed">{li}</li>
                  ))}
                </ul>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Traditional page optimization does not answer those questions. It was never designed to. This is the
                  difference between page optimization and business identity — and AI systems are grading you on the second one.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">The plugin schema problem</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Somebody says &ldquo;just add schema.&rdquo; And technically, you can. Yoast, Rank Math, Wix, Squarespace,
                  and most WordPress page builders will output{' '}
                  <a href="https://schema.org/" target="_blank" rel="noopener noreferrer" className={link}>structured data</a>{' '}
                  for you. That is real, and it is genuinely better than nothing. If you are running one of those today, you
                  are not doing something wrong — you are just working with a tool that has a ceiling.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The ceiling is this: outputting schema on individual pages is not the same as building a canonical entity
                  graph across your whole site. Most plugin implementations generate markup page by page, from templates,
                  with limited control over the details that matter for AI understanding. In practice that tends to produce a
                  few recurring problems: schema that describes the page but never firmly nails down the business as one
                  entity; multiple, slightly contradictory versions of your organization across templates; IDs that are
                  auto-generated and unstable, so nothing reliably connects to anything else; and, when you stack plugins or
                  themes, duplicate or conflicting blocks that make the machine less certain, not more.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The result is markup that is present but ambiguous. And ambiguity is the enemy here. An answer engine
                  deciding whether to cite you is looking for a clean, unambiguous identity it can trust. Contradictory or
                  disconnected schema does not just fail to help — it can actively muddy the signal. So the honest framing is
                  not &ldquo;plugins are bad.&rdquo; It is that most plugin setups do not give a small business the level of
                  control needed to build one clean, connected, sitewide identity with no contradictions.
                </p>

                <blockquote className="my-8 border-l-2 border-[var(--d-accent)] pl-6">
                  <p className="font-inter text-[var(--d-fg)] text-lg md:text-xl leading-relaxed italic">
                    Schema plugins generate markup. Entity graphs create meaning.
                  </p>
                </blockquote>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Markup is data on a page. Meaning is what happens when every piece of that data is connected, consistent,
                  and anchored — so the machine stops guessing and starts knowing who you are. (More on that distinction in{' '}
                  <Link href="/blog/what-is-an-entity-graph" className={link}>What Is an Entity Graph</Link>.)
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">What a canonical entity graph actually does</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A canonical entity graph is a single, connected map of your business that a machine can read. Instead of
                  scattered, page-level markup, you get one authoritative identity, defined once with stable IDs, that every
                  page references and extends. It ties together the business itself (the canonical{' '}
                  <a href="https://schema.org/Organization" target="_blank" rel="noopener noreferrer" className={link}>organization</a>{' '}
                  / <a href="https://schema.org/LocalBusiness" target="_blank" rel="noopener noreferrer" className={link}>local business</a>),
                  the founder or team, the services, the locations, the articles, the FAQs, the breadcrumbs, the reviews, the
                  citations, the images, the offers, the contact actions, and the{' '}
                  <a href="https://schema.org/sameAs" target="_blank" rel="noopener noreferrer" className={link}>external profiles</a>{' '}
                  that confirm the same identity off-site.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The magic is not any single item on that list. It is that they are all connected with stable IDs and
                  consistent relationships, so a service links back to the same business, which links to the same founder,
                  which is confirmed by the same external profiles. One entity, one identity, described the same way
                  everywhere. That is the layer most SMB SEO never touches — the layer below the content. (We go deeper on it
                  in <Link href="/blog/below-the-content-layer" className={link}>Below the Content Layer</Link>.) It is also the
                  layer that determines whether an AI system can confidently say your name.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">Why Next.js gives KodeCite an infrastructure advantage</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Let&apos;s be clear about what this is and is not. Next.js does not automatically rank you higher. No
                  framework does, and anyone promising that is selling the shallow version again. What Next.js gives us is
                  control — the ability to build the entity graph deliberately instead of hoping a plugin approximates it.
                  With it we can define server-rendered content (so the words and structure are in the HTML the machine reads,
                  not assembled later by scripts it may skip), clean HTML without theme and plugin cruft fighting each other,
                  custom JSON-LD per page, stable <code className="text-[var(--d-accent)]">@id</code> anchors so the business,
                  founder, services, and locations are the same entities everywhere, canonical metadata that is precise and
                  non-duplicated, fast edge delivery, and{' '}
                  <code className="text-[var(--d-accent)]">llms.txt</code> and{' '}
                  <code className="text-[var(--d-accent)]">agent.json</code> — emerging machine-readable identity files.
                  Adoption is still early and no major provider guarantees it reads them yet, but they are low-cost to publish
                  and position you for where AI discovery is heading.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  None of that is magic. It is precision. The advantage is that we are working at the infrastructure layer,
                  not the content layer — building the foundation the AI reads first, with nothing in the way. Most
                  builder-and-plugin stacks simply were not designed to give an owner that level of control, and that is not a
                  moral failing of the owner. It is a limitation of the tool.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">What proper technical SEO looks like now</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  If you want a concrete picture, here is the checklist — what &ldquo;doing technical SEO deeply enough for AI
                  search&rdquo; actually means in 2026:
                </p>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {checklist.map(([t, d]) => (
                    <li key={t} className="flex items-start gap-3 text-[var(--d-fg-dim)] leading-relaxed">
                      <span style={{ color: 'var(--d-accent)', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      <span><strong className="text-[var(--d-fg)]">{t}</strong> — {d}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Notice what this list is not: it is not &ldquo;publish more blog posts&rdquo; and it is not &ldquo;add a
                  plugin.&rdquo; It is architecture. (If you want the full breakdown of the structured-data pieces
                  specifically, see{' '}
                  <Link href="/blog/schema-markup-complete-guide" className={link}>The Schema Markup Guide for Local Service Businesses</Link>.)
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">Why this produces AEO results</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  AEO visibility is not a trick or a hack. There is no secret prompt that makes ChatGPT recommend you. AEO is
                  the natural outcome of technical SEO that gives answer engines a clear, verified business identity to work
                  with. Walk it through from the machine&apos;s side. When an AI system can understand your business (because
                  the entity graph is clean and unambiguous), verify your claims (because reviews, citations, and external
                  profiles agree), and connect you to specific services, locations, proof, and content (because everything is
                  anchored with stable IDs) — then you become dramatically easier to cite and recommend. Not because you
                  gamed anything. Because you are legible.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The flip side is the uncomfortable one. If a machine cannot confidently tell who you are, what you do, and
                  where — it will reach for a competitor it can describe. Very often that competitor is a national brand or a
                  private-equity-backed roll-up with cleaner infrastructure, not a better business. Reviews alone will not
                  save you from that; we covered why in{' '}
                  <Link href="/blog/google-reviews-wont-save-you-from-ai-search" className={link}>Google Reviews Won&apos;t Save You From AI Search</Link>.
                  The businesses that win the recommendation are the ones the machine can trust enough to name.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">The bottom line</h2>
                <ul className="flex flex-col gap-2.5 mb-6 pl-5 list-disc marker:text-[var(--d-accent)]">
                  {[
                    <><strong className="text-[var(--d-fg)]">SEO still matters.</strong> Getting found did not stop being important.</>,
                    <><strong className="text-[var(--d-fg)]">Shallow SEO is underperforming.</strong> Plugins, keyword pages, and basic meta tags were always the thin version, and AI search exposes the gap.</>,
                    <><strong className="text-[var(--d-fg)]">AEO is not a replacement for SEO.</strong> Anyone telling you SEO is dead is selling the confusion.</>,
                    <><strong className="text-[var(--d-fg)]">AEO is what technical SEO becomes when it is built for AI search</strong> — more entity-driven, more infrastructure-dependent, more precise.</>,
                    <><strong className="text-[var(--d-fg)]">The future belongs to businesses with a clear, machine-readable identity</strong> — not to whoever published the most content or installed the most schema plugins.</>,
                  ].map((node, i) => (
                    <li key={i} className="text-[var(--d-fg-dim)] leading-relaxed">{node}</li>
                  ))}
                </ul>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The dividing line in your market is no longer who ranks. It is who the machine can understand well enough to
                  recommend. That is an architecture problem, and architecture problems are solvable. (For the broader case on
                  why AEO and GEO are an evolution rather than a replacement, see{' '}
                  <Link href="/blog/aeo-geo-making-seo-better" className={link}>AEO/GEO Isn&apos;t Replacing SEO</Link>.)
                </p>

                {/* ── FAQ ────────────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-16 mb-6">Frequently asked questions</h2>
                <div className="flex flex-col gap-5">
                  {faqItems.map((item, i) => (
                    <div key={i} className="border-t border-[var(--d-line)] pt-5">
                      <p className="font-inter font-semibold text-[var(--d-fg)] mb-2">{item.q}</p>
                      <p className="font-inter text-[var(--d-fg-dim)] text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>

                {/* ── Sources ────────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-16 mb-6">Sources</h2>
                <ul className="flex flex-col gap-2.5">
                  {sources.map(([name, url]) => (
                    <li key={url} className="text-sm leading-relaxed">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] hover:underline break-words">{name}</a>
                    </li>
                  ))}
                </ul>

              </div>
            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-bold text-[var(--d-fg)] text-lg mb-3 leading-snug">
                    What do the machines see?
                  </p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">
                    A free Machine Read shows whether AI systems can understand and verify your business right now — the
                    entity graph, the schema, the identity signals — and exactly where they get confused.
                  </p>
                  <Link href="/machine-read" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Run My Free Machine Read
                  </Link>
                </div>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-an-entity-graph" className="block group">
                      <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                        What Is an Entity Graph
                      </p>
                      <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">14 min read</p>
                    </Link>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/why-your-website-cant-talk-to-ai" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          The Language Problem: Why Your Website Can&apos;t Talk to AI
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">14 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/google-reviews-wont-save-you-from-ai-search" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          Your Google Reviews Won&apos;t Save You From AI Search
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">9 min read</p>
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
          <p className="eyebrow mb-4">SEE WHERE YOU STAND</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-[var(--d-fg)] mb-4">
            Find out what the machines see.
          </h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">
            Run a free Machine Read — we look at your site the way an answer engine does, and show you exactly where it gets
            confused and where it gets confident. No jargon, no scare tactics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/machine-read" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Run My Free Machine Read
            </Link>
            <Link href="/services" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

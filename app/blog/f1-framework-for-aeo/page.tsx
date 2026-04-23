import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The F1 Framework for AEO: Why Most Businesses Are Trying to Win an AI Race in an Economy Car | KodeCite.ai',
  description:
    'Most AEO advice focuses on the wrong layer. The businesses winning AI discovery built the stack in the right order — chassis, engine, aero, graphics. Here is what that means and how to sequence the work.',
  alternates: { canonical: 'https://www.kodecite.ai/blog/f1-framework-for-aeo' },
  openGraph: {
    title: 'The F1 Framework for AEO: Why Most Businesses Are Trying to Win an AI Race in an Economy Car',
    description:
      'Most AEO advice focuses on the wrong layer. The businesses winning AI discovery built the stack in the right order — chassis, engine, aero, graphics. Here is what that means and how to sequence the work.',
    url: 'https://www.kodecite.ai/blog/f1-framework-for-aeo',
    type: 'article',
    publishedTime: '2026-04-23',
    authors: ['Mark Abplanalp'],
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The F1 Framework for AEO: Why Most Businesses Are Trying to Win an AI Race in an Economy Car',
  description:
    'Most AEO advice focuses on the wrong layer. The businesses winning AI discovery built the stack in the right order — chassis, engine, aero, graphics. Here is what that means and how to sequence the work.',
  author: { '@id': 'https://www.kodecite.ai/#founder' },
  publisher: { '@id': 'https://www.kodecite.ai/#organization' },
  datePublished: '2026-04-23T00:00:00+00:00',
  dateModified: '2026-04-23T00:00:00+00:00',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.kodecite.ai/blog/f1-framework-for-aeo' },
  url: 'https://www.kodecite.ai/blog/f1-framework-for-aeo',
  keywords: [
    'AEO', 'answer engine optimization', 'AI search visibility', 'entity graph',
    'schema markup', 'GEO', 'generative engine optimization', 'AI search stack',
    'local SEO', 'ChatGPT visibility', 'Perplexity SEO',
  ],
  articleSection: 'AEO & AI Search',
  wordCount: 2600,
  about: [
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'Entity Graph' },
    { '@type': 'Thing', name: 'AI Search Visibility' },
    { '@type': 'Thing', name: 'Schema Markup' },
    { '@type': 'Thing', name: 'Website Infrastructure' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'ChatGPT' },
    { '@type': 'Thing', name: 'Perplexity' },
    { '@type': 'Thing', name: 'Google AI Overviews' },
    { '@type': 'Thing', name: 'Schema.org' },
    { '@type': 'Thing', name: 'Next.js' },
    { '@type': 'Thing', name: 'Vercel' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.kodecite.ai/blog/f1-framework-for-aeo#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the F1 framework for AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The F1 framework maps the four layers of AI search visibility to how a Formula 1 team builds a car. Layer 1 is the chassis — your website infrastructure. Layer 2 is the engine — your entity graph and schema markup. Layer 3 is the aerodynamic package — your content. Layer 4 is the graphics — off-site mentions and citations. Most businesses build in the wrong order, applying graphics before the chassis is right.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why does website infrastructure matter for AI search visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AI crawlers need to read your content on a cold load — no caching, no browser memory. Sites built on client-side-rendered platforms like Wix, Squarespace, or WordPress with heavy plugin bloat often render content via JavaScript that AI crawlers can't see. A proper infrastructure chassis means a server-side rendered framework like Next.js on edge hosting, so crawlers see your full content immediately.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is an entity graph and why is it the engine of AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An entity graph is Schema.org deployed correctly — every element of your business connected through stable @id anchors into a single machine-readable identity. Without it, AI systems can't confidently identify who you are, what you do, or why you should be trusted. They can extract information from your content but can't recommend the business behind it with confidence.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does content fit into the AEO stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Content is the third layer — the aerodynamic package that channels performance into speed. Answer-first H1s, clear H2 hierarchy mapped to questions buyers ask, short extractable paragraphs, FAQ sections wired to FAQPage schema, and internal linking that reinforces entity relationships. Without the infrastructure and entity graph beneath it, even perfectly structured content has nothing to attach to.",
      },
    },
    {
      '@type': 'Question',
      name: 'How should regional and local businesses sequence their AEO work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Fix the layers in order. Start with the chassis — audit platform, rendering, crawlability, and hosting. Then build the engine — get schema right, declare entities, wire relationships, fill sameAs arrays. Then tune the aero — restructure content to be answer-first and wired to schema. Then apply the graphics — pursue mentions, press, directories, and citations. Every layer compounds with the ones beneath it.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: 'The F1 Framework for AEO', item: 'https://www.kodecite.ai/blog/f1-framework-for-aeo' },
  ],
};

export default function F1FrameworkForAEO() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#6a5a48] mb-8">
            <Link href="/" className="hover:text-[#a0723a] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#0a0806] truncate">The F1 Framework for AEO</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[#6a5a48] text-sm font-poppins">12 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            The F1 Framework for AEO:{' '}
            <span className="text-[#a0723a]">Why Most Businesses Are Trying to Win the AI Race in an Economy Car</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            Most AEO advice focuses on the wrong layer. The businesses winning AI discovery built the stack in the right order — chassis, engine, aero, graphics. Here is what that means and how to sequence the work.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">MA</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">April 23, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Body + Sidebar — placeholder */}
      <section className="py-16 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-6">
                  Most of the conversation about AI search visibility right now is focused on the wrong layer. Agencies are selling brand mentions, Reddit tactics, citation building, and content volume — all of which matter, but none of which work in isolation. The businesses winning the AI discovery game aren&apos;t winning because they got their content on the right Reddit thread. They&apos;re winning because everything underneath that content is built correctly.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  The best way to understand this is to borrow a framework from Formula 1.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">How an F1 Team Actually Builds a Winning Car</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A Formula 1 team doesn&apos;t start building a car by picking out which sponsor logos will go on the side. They don&apos;t start with the paint job. They don&apos;t even start with the aerodynamic package. They start with the chassis — the structural foundation that determines how every other component will perform.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Then they build the engine. Because without a properly engineered engine matched to the chassis, the car can&apos;t generate the power it needs to compete.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Then comes the aerodynamic package — the bodywork, the wings, the ducts — all designed to channel air efficiently so the engine&apos;s power actually translates into speed on the track.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  And then, only at the end, do the sponsor logos get applied. Because graphics without performance are just expensive decoration.
                </p>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6 my-8">
                  <p className="eyebrow mb-3 text-xs">THE BUILD ORDER</p>
                  <p className="text-[#3a2e24] font-poppins text-sm leading-relaxed">
                    Every serious F1 team builds in this order: chassis, engine, aero, graphics. Reverse the order and you get a car that looks fast and loses every race.
                  </p>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  The AEO and GEO space works exactly the same way. And most businesses — and most agencies selling to them — are working in reverse.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">The AEO Stack, Mapped to F1</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Here&apos;s how the F1 build order translates to how businesses get found by AI search engines like ChatGPT, Perplexity, Claude, and Google&apos;s AI Overviews:
                </p>

                <h3 className="font-playfair font-bold text-xl text-[#0a0806] mt-8 mb-4">Layer 1 — The Chassis is your Infrastructure</h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  This is the underlying website platform. The hosting, the rendering model, the page structure, the crawlability. This is what determines whether AI systems can actually read and extract your content in the first place.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Most small and mid-sized businesses are running what amounts to an economy car on the track. WordPress sites buried under plugin bloat. Wix and Squarespace templates that render everything client-side. Squarespace commerce sites with slow page loads and inconsistent structure. Legacy builds with broken sitemaps, unreliable uptime, and content hidden behind JavaScript that AI crawlers can&apos;t see.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6 font-medium" style={{ color: '#0a0806' }}>
                  You can bolt the best engine in the world onto an economy car chassis. It still loses to a McLaren.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A proper chassis for AI discovery is a site built on a modern framework — Next.js, Astro, or similar — deployed on edge infrastructure like Vercel or Cloudflare, rendered server-side so crawlers see the content immediately, with clean sitemaps, fast load times, and page structures designed for extraction from the ground up.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  This is the layer almost nobody talks about and almost everybody skips. It&apos;s also the layer that determines whether any of the work above it actually functions.
                </p>

                <h3 className="font-playfair font-bold text-xl text-[#0a0806] mt-8 mb-4">Layer 2 — The Engine is your Entity Graph</h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Once the chassis is right, the engine determines performance. In AEO terms, the engine is your entity graph — the structured data, schema markup, and identity signals that tell AI systems exactly who you are, what you do, where you operate, and what makes you trustworthy.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Run any regional or local SMB&apos;s website through a schema validator and the results are almost always ugly. Missing schema entirely. LocalBusiness markup with wrong categories. Person schema that doesn&apos;t link to Organization schema. Empty <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">sameAs</code> arrays. Review markup that doesn&apos;t match the reviews on the page. No Article schema on blog posts. No FAQPage schema on FAQ pages. No BreadcrumbList hierarchy. Basic mistakes stacked on top of each other.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  And for the minority of businesses that have decent schema, there&apos;s still enormous room for improvement. Schema isn&apos;t just about whether it exists. It&apos;s about whether it&apos;s wired to reality — whether the entities declared in code actually match the entities on the page, and whether the relationships between them (author to article, business to employee, product to offer) are declared cleanly enough for a machine to resolve without hedging.
                </p>

                <div className="bg-[#1c1814] rounded-xl p-6 my-8">
                  <p className="font-poppins leading-relaxed" style={{ color: 'rgba(240,232,216,0.85)' }}>
                    Without a clean entity graph, AI systems can&apos;t confidently identify who you are. And if they can&apos;t identify you, they won&apos;t recommend you. They&apos;ll recommend whoever has the clearer signal — even if that business is objectively worse than yours.
                  </p>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  A well-tuned engine on a broken chassis still loses. But a clean chassis paired with a properly engineered engine — that&apos;s where the compounding starts.
                </p>

                <h3 className="font-playfair font-bold text-xl text-[#0a0806] mt-8 mb-4">Layer 3 — The Aero Package is your Content</h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  With chassis and engine in place, the aerodynamic package channels performance into actual speed. In AEO terms, content is what turns a technically-sound site into one that AI systems can extract, synthesize, and cite.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Most content on the web is structurally useless for AI extraction. Articles buried in walls of text with no clear hierarchy. H1s that don&apos;t answer questions. Long-winded introductions that force a model to hunt for the actual information. No FAQ sections. No clear relationships between ideas. No structured summaries.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Properly structured content for AI discovery follows a different pattern. Answer-first H1s. H2 hierarchy that maps to specific questions buyers are actually asking. Short, extractable paragraphs. FAQ sections wired to FAQPage schema. Internal linking that reinforces entity relationships. Content that&apos;s written to be cited, not just read.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  But here&apos;s the catch that most content marketers miss: without the engine (entity graph), content has nothing to attach to. The model reads the article, finds good information, but can&apos;t confidently resolve which business the article is recommending. Without the chassis (infrastructure), the content doesn&apos;t even get rendered to the crawler in the first place.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10 font-medium" style={{ color: '#0a0806' }}>
                  Content is critical. It&apos;s also the third layer, not the first.
                </p>

                <h3 className="font-playfair font-bold text-xl text-[#0a0806] mt-8 mb-4">Layer 4 — The Graphics are your Mentions</h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Finally, the sponsor logos. The graphics. The loud branding on the side of the car.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  In AEO terms, this is your off-site mention layer. Press coverage, directory listings, Reddit threads, guest posts, citation-building, social media presence, third-party reviews. Everything that happens outside your site but points back to your brand.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  These matter. Mentions are a real signal to AI systems — they increase the probability your business gets surfaced as an answer. But they&apos;re the fourth layer for a reason.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A sponsor will not pay to put their logo on a car that can&apos;t win. And even if the sponsor does pay, nobody wants to see their logo driving in circles while other teams lap them.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The practical version of this: a brand mention in a great article points to your website. If the website is structurally broken, the entity signals are confused, and the content can&apos;t be extracted cleanly, the mention dead-ends. The AI system reads the mention, tries to resolve it to a real entity, fails to resolve it confidently, and moves on to a competitor whose foundation is actually readable.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10 font-medium" style={{ color: '#0a0806' }}>
                  Mentions work on top of the stack underneath them. They don&apos;t replace it.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">Why the Industry Is Selling This Backwards</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  If the right order is chassis, engine, aero, graphics — why is most of the AEO and GEO industry selling the reverse?
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Because the graphics are easy to sell, and easy to teach, and easy to show in a case study. &ldquo;Here&apos;s how we got your brand mentioned in X&rdquo; is a clean deliverable. &ldquo;Here&apos;s how we rebuilt the foundation of your website so that AI systems can read it correctly&rdquo; is a longer conversation, a bigger investment, and a less Instagram-friendly before-and-after.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The foundation work is slow. It&apos;s technical. It&apos;s unsexy. It&apos;s also the only work that compounds.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Most agencies are incentivized to sell the fast win because that&apos;s what buyers ask for. Buyers come in saying &ldquo;I want to show up in ChatGPT&rdquo; and the agency sells them the tactic that&apos;s easiest to deliver. The foundation stays broken. The mentions generate short-term movement. The results plateau. The client churns.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  The businesses that win long-term are the ones who let somebody rebuild the chassis first — even if the first six months feel slower than just buying content placements.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">The Competitive Opening for Regional and Local Businesses</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here&apos;s what makes this moment genuinely unusual: most of the market is getting this wrong.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Enterprise brands have the budgets and the technical teams to build the stack correctly. They&apos;re already doing it. The businesses being recommended by ChatGPT when someone asks about a category are increasingly the ones who invested in the infrastructure early.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  At the regional and local level, the market is wide open. The vast majority of local service businesses — law firms, financial advisors, medical practices, home services, real estate teams — are running on economy car chassis with missing engines and no aero package at all. They&apos;re competing on graphics alone, which means they&apos;re not really competing.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The first mover in each category — the first regional law firm, the first local real estate team, the first area med spa — that commits to building the stack correctly doesn&apos;t just win a little. They become the default answer. AI systems compress the field to one or two names per category per region. There&apos;s no page two of recommendations. Whoever builds the foundation first owns the citation.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  The window for this is real but finite. The expectation over the next 18 to 24 months is that this becomes standard practice at the regional level. The businesses that move now will own their markets by the time the rest of the industry catches up.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">How to Actually Sequence the Work</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  If this framework is right, the practical implication is clear: fix the layers in order.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    { step: '1. Chassis', detail: 'Audit the platform, the rendering, the page structure, the crawlability, the sitemap, the hosting, the core technical foundation. If the site is built on a platform that fundamentally can\'t support what needs to come next, nothing above it will work.' },
                    { step: '2. Engine', detail: 'Get the schema right. Declare the entities. Wire the relationships. Fill the sameAs array with real, verified URLs. Get Person, Organization, LocalBusiness, Article, and FAQPage markup aligned with what\'s actually on the page.' },
                    { step: '3. Aero', detail: 'Restructure the content so it\'s answer-first, extractable, and wired to schema. Build out FAQ sections. Create the internal linking hierarchy that reinforces entity relationships.' },
                    { step: '4. Graphics', detail: 'Build the mention layer. Pursue press, directory listings, Reddit presence, social signals, third-party citations. With the foundation in place, the mentions start working the way they\'re supposed to.' },
                  ].map(({ step, detail }) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="font-playfair font-bold text-[#a0723a] text-lg flex-shrink-0 mt-0.5">{step}</span>
                      <span className="text-[#6a5a48] leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  Every layer compounds with the ones beneath it. Every shortcut skipped is a leak in the overall performance of the car.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">The Race Is Already Underway</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The businesses being surfaced by AI search engines today are the ones that started building this stack correctly two years ago. The businesses being surfaced two years from now are being built right now.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  If you&apos;re running a regional or local service business and you&apos;ve been wondering why your visibility isn&apos;t improving despite the content you&apos;re producing or the mentions you&apos;re buying — the answer is almost certainly underneath. The graphics look fine. The chassis is the problem.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10 font-medium" style={{ color: '#0a0806' }}>
                  You can&apos;t win an F1 race in an economy car. No matter how good the paint job is.
                </p>

                <div className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <Link href="/blog" className="inline-flex items-center gap-2 text-[#a0723a] font-semibold font-poppins hover:text-[#8a5f2e] transition-colors">
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    Back to The Playbook
                  </Link>
                </div>

              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="eyebrow mb-4 text-xs">THE F1 STACK</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-lg font-poppins">Layer 1</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1"><strong className="text-[#0a0806]">Chassis</strong> — Infrastructure, hosting, server-side rendering, crawlability</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-lg font-poppins">Layer 2</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1"><strong className="text-[#0a0806]">Engine</strong> — Entity graph, schema markup, identity signals</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-lg font-poppins">Layer 3</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1"><strong className="text-[#0a0806]">Aero</strong> — Answer-first content, FAQ sections, structured hierarchy</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-lg font-poppins">Layer 4</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1"><strong className="text-[#0a0806]">Graphics</strong> — Mentions, press, directories, citations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(160,114,58,0.3)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">Find Out Where Your Stack Breaks Down</p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We audit your chassis, engine, and aero — and show you exactly where the gaps are before you spend another dollar on graphics.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">Get Your Free AEO Audit</Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/below-the-content-layer" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">Below The Content Layer — Where Your Real SEO, AEO &amp; GEO Opportunity Lives</p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">10 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/what-is-an-entity-graph" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">What Is an Entity Graph — And Why the Technology Behind It Has Been Hiding in Plain Sight</p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">14 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/cold-load-vs-cached-ai-crawlers" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">Your Site Feels Fast to You — But AI Crawlers See Something Very Different</p>
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

      {/* CTA */}
      <section className="py-20 bg-[#1c1814] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">YOU CAN&apos;T WIN AN F1 RACE IN AN ECONOMY CAR</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[rgba(240,232,216,0.9)] mb-4">
            Fix the Foundation. Then Everything Else Compounds.
          </h2>
          <p className="text-[rgba(240,232,216,0.6)] font-poppins mb-8 leading-relaxed">
            Most businesses are spending on graphics while the chassis is broken. A{' '}
            <Link href="/contact" className="text-[#a0723a] hover:underline">free AEO Audit</Link>{' '}
            shows you exactly which layers need work — and in what order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">Get Your Free AEO Audit</Link>
            <Link href="/blog" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">Read More Articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}

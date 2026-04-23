import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Is an Entity Graph — And Why the Technology Behind It Has Been Hiding in Plain Sight for Over a Decade | KodeCite.ai',
  description:
    "Schema.org launched in 2011 as the standard language of the internet. Over a decade later it's still misunderstood and misused — even by digital marketing practitioners. Here's what schema actually is, what an entity graph is, and why it matters more right now than it ever has.",
  alternates: { canonical: 'https://www.kodecite.ai/blog/what-is-an-entity-graph' },
  openGraph: {
    title: 'What Is an Entity Graph — And Why the Technology Behind It Has Been Hiding in Plain Sight for Over a Decade',
    description:
      "Schema.org launched in 2011 as the standard language of the internet. Over a decade later it's still misunderstood and misused — even by digital marketing practitioners. Here's what schema actually is, what an entity graph is, and why it matters more right now than it ever has.",
    url: 'https://www.kodecite.ai/blog/what-is-an-entity-graph',
    type: 'article',
    publishedTime: '2026-04-17',
    authors: ['Mark Abplanalp'],
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is an Entity Graph — And Why the Technology Behind It Has Been Hiding in Plain Sight for Over a Decade',
  description:
    "Schema.org launched in 2011 as the standard language of the internet. Over a decade later it's still misunderstood and misused — even by digital marketing practitioners. Here's what schema actually is, what an entity graph is, and why it matters more right now than it ever has.",
  author: { '@id': 'https://www.kodecite.ai/#founder' },
  publisher: { '@id': 'https://www.kodecite.ai/#organization' },
  datePublished: '2026-04-17T00:00:00+00:00',
  dateModified: '2026-04-17T00:00:00+00:00',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.kodecite.ai/blog/what-is-an-entity-graph' },
  url: 'https://www.kodecite.ai/blog/what-is-an-entity-graph',
  keywords: ['entity graph', 'schema markup', 'schema.org', 'JSON-LD', 'AI search visibility', 'structured data', 'AEO', 'answer engine optimization', 'AI search optimization'],
  articleSection: 'AEO & AI Search',
  wordCount: 2100,
  about: [
    { '@type': 'Thing', name: 'Entity Graph' },
    { '@type': 'Thing', name: 'Schema Markup' },
    { '@type': 'Thing', name: 'JSON-LD' },
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Schema.org' },
    { '@type': 'Thing', name: 'ChatGPT' },
    { '@type': 'Thing', name: 'Perplexity' },
    { '@type': 'Thing', name: 'Google AI Overviews' },
    { '@type': 'Thing', name: 'Google Knowledge Graph' },
  ],
};

export default function WhatIsAnEntityGraph() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#6a5a48] mb-8">
            <Link href="/" className="hover:text-[#a0723a] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#0a0806] truncate">What Is an Entity Graph</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[#6a5a48] text-sm font-poppins">14 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            What Is an Entity Graph —{' '}
            <span className="text-[#a0723a]">And Why the Technology Behind It Has Been Hiding in Plain Sight for Over a Decade</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            Schema.org launched in 2011 as the standard language of the internet. Over a decade later it&apos;s still misunderstood and misused — even by digital marketing practitioners. Here&apos;s what schema actually is, what an entity graph is, and why it matters more right now than it ever has.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">MA</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">April 17, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Body + Sidebar */}
      <section className="py-16 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-6">
                  Schema.org launched in June 2011.
                </p>

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-6">
                  Google, Microsoft, and Yahoo — three companies that competed fiercely on almost everything — agreed on something together. They created a shared vocabulary for the web. A universal language that would allow any website to communicate its meaning directly to machines, not just humans.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The idea was elegant. Instead of forcing search engines to guess what a page was about by analyzing words and links, website owners could simply label their content. This is a business. This is the owner. This is what we do. This is where we operate. This is how you reach us.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  No inference required. No guessing. Just clear, structured, machine-readable identity.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  That was 2011.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  It is now 2026. And the overwhelming majority of websites on the internet either have no schema at all, have schema that is technically broken, or have schema that is so generic and disconnected it communicates almost nothing useful to the systems now making the most important decisions about who gets found and who stays invisible.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The technology that was designed to be the standard language of the internet is still, after more than a decade, one of the most misunderstood and misused tools in digital marketing.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  That gap is not an accident. And closing it is now more important than it has ever been.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">What Schema Actually Is — Stripped Down to Plain Language</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Before we talk about entity graphs, you need to understand what schema markup actually is. Because most explanations make it sound more complicated than it needs to be.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-4">
                  Schema is a label.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  That is it. At its core, schema markup is a standardized system of labels that tells machines what your content <em>means</em> — not just what it says.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here is the difference. Your website might say: &ldquo;Mark Abplanalp has been installing window treatments since 2002.&rdquo; A human reads that and understands immediately — experienced professional, long track record, trustworthy.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A machine reads that and sees words. It can infer meaning, but inference is imperfect. It might associate &ldquo;Mark Abplanalp&rdquo; with window treatments. It might not. It depends on context, links, and a hundred other signals the algorithm is weighing simultaneously.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Schema removes the inference. With proper markup, that same information becomes a structured statement the machine reads with complete clarity: this is a Person, their name is Mark Abplanalp, their job title is Owner and Window Treatment Specialist, they have been working in this industry since 2002, they work for this specific business, and that business is located at this address and serves these cities.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  No guessing. No inference. Direct communication between your website and the machine reading it.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  Schema.org provides the vocabulary — a shared dictionary of types and properties that every major search engine and AI platform has agreed to recognize. Person. Organization. LocalBusiness. BlogPosting. FAQPage. Product. Service. Each type has defined properties. Each property has an accepted format. When you use them correctly, you are speaking the native language of the machines that determine whether your business gets found.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">Why Most Schema Implementations Are Wrong</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here is the uncomfortable truth about schema in 2026: most websites that have it are doing it wrong. And most digital marketing practitioners selling schema services either don&apos;t understand the depth of what&apos;s possible or don&apos;t have the technical ability to implement it correctly.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The most common failure is template schema — the same generic block copy-pasted across every page of a site with a few variables swapped in. A business name here. A phone number there. Maybe an address. The result is schema that technically validates but communicates almost nothing useful. It tells machines you exist. It doesn&apos;t tell them who you are.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The second most common failure is disconnected schema — multiple blocks on the same site that don&apos;t reference each other. A LocalBusiness block that doesn&apos;t connect to the Person who owns it. Blog articles with author fields that point to a flat name string rather than a verified identity. An Organization block that has no relationship to the services it offers or the expert behind them.
                </p>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6 my-8">
                  <p className="eyebrow mb-3 text-xs">THE IDENTITY GAP</p>
                  <p className="text-[#3a2e24] font-poppins text-sm leading-relaxed">
                    Disconnected schema is the digital equivalent of a business card with no name on it. The information is present. The identity isn&apos;t.
                  </p>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-10">
                  The third failure — and this one is especially common among WordPress sites using plugins like Yoast or RankMath — is conflicting schema. Multiple plugins attempting to mark up the same page simultaneously, producing contradictory structured data that confuses rather than clarifies. Google&apos;s Rich Results Test flags errors and warnings on the majority of plugin-generated schema implementations. The practitioners selling these implementations rarely check.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">What an Entity Graph Actually Is</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  This is where it gets important.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  An entity graph is what happens when schema stops being a collection of isolated labels and becomes a connected system of identity.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Think of it this way. A label tells a machine: <em>this thing exists</em>. An entity graph tells a machine: <em>this thing exists, it is connected to these other things, those things are verified by these external sources, and all of it is consistent across every page of this website and every platform where this business has a presence.</em>
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-8 font-medium" style={{ color: '#0a0806' }}>
                  The difference between a label and an entity graph is the difference between a name tag and a verified identity.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here is what a properly built entity graph looks like in practice. Every page of your website references the same named entities through stable, unique identifiers called <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">@id</code> anchors. Your business has an <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">@id</code>. The person who owns the business has an <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">@id</code>. Every article published on the site lists its author as a reference to that person&apos;s <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">@id</code> — not a name string, not a flat object, but a direct connection to the verified identity that owns the expertise behind the content.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  When an AI engine crawls your site, it doesn&apos;t just see pages. It sees a network. The business connects to the owner. The owner connects to their expertise, their credentials, their external profiles. Every article connects back to the same expert. Every service page connects back to the same business. The <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">sameAs</code> arrays on your Organization and Person blocks point to your Google Business Profile, your Yelp listing, your LinkedIn profile, your BBB page — external sources that corroborate the identity you&apos;re claiming.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-4">
                  The machine builds a picture. And the picture is clear, consistent, and verifiable from multiple independent sources.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10 font-medium" style={{ color: '#0a0806' }}>
                  That is an entity graph.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">Why It Matters More Right Now Than It Ever Has</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Schema.org has existed for over a decade. So why does this matter so much more in 2026 than it did in 2015?
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Because the systems processing your structured data changed fundamentally.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  For most of schema&apos;s history, the primary consumer was Google&apos;s ranking algorithm. Schema helped you qualify for rich results — the star ratings, FAQ dropdowns, and breadcrumb trails that made your listing stand out in search results. Valuable, but ultimately incremental.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Then large language models entered the picture.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  ChatGPT, Perplexity, Google AI Overviews, and the growing ecosystem of AI-powered search tools don&apos;t rank pages. They identify trusted sources. They synthesize information from across the web and cite the businesses, experts, and organizations they have enough structured evidence to recommend with confidence.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Entity clarity is not a nice-to-have for these systems. It is a prerequisite.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  An AI engine encountering a business with a complete, connected entity graph — verified identity, linked expertise, corroborated by external sources, consistent across every page — has everything it needs to make a confident recommendation. An AI engine encountering a website with no schema, template schema, or disconnected schema has to guess. And when AI engines guess, they default to the sources they can verify.
                </p>

                <div className="bg-[#1c1814] rounded-xl p-6 my-8">
                  <p className="font-poppins leading-relaxed" style={{ color: 'rgba(240,232,216,0.85)' }}>
                    Your competitor with better entity infrastructure gets recommended. You don&apos;t. Not because their content is better. Not because their business is better. Because the machine knows who they are and isn&apos;t sure about you.
                  </p>
                </div>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">Building an Entity Graph: What It Actually Takes</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A complete entity graph for a local service business has a small number of core components, but every one of them has to be built correctly and connected to the others.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The foundation is a LocalBusiness or Organization block at the layout level — meaning it appears on every page of the site — with a stable <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">@id</code> anchor that every other block on the site can reference. This block includes the business name, contact information, service area, hours, offer catalog, and a <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">sameAs</code> array pointing to every verified external profile where the business has a presence.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Nested inside that block — or connected to it through a separate Person block — is the owner entity. A real named person with their own <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">@id</code>, their job title, a description of their expertise, a <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">knowsAbout</code> array covering every topic they have genuine authority on, and their own <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">sameAs</code> array pointing to their LinkedIn profile, their professional social presence, and any other verifiable external identity.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Every blog article published on the site connects to both of these entities. The author field doesn&apos;t say &ldquo;Mark Abplanalp.&rdquo; It references the <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">@id</code> of the Person block. The publisher field doesn&apos;t say &ldquo;KodeCite.ai.&rdquo; It references the <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">@id</code> of the business block. The <code className="bg-[#f2ede4] px-1.5 py-0.5 rounded text-[#a0723a] text-sm">isPartOf</code> field connects the article to the site&apos;s blog entity, which in turn connects back to the business.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Every connection compounds. Every article published strengthens the same entity. Every external citation corroborates the same identity. Over time the machine&apos;s picture of who you are becomes sharper, more confident, and harder for a competitor to displace.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10 font-medium" style={{ color: '#0a0806' }}>
                  That compounding effect is the moat.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">The Window That Is Still Open</h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Most businesses don&apos;t have this. Most digital marketing agencies don&apos;t build it. Most web developers don&apos;t know it exists.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Schema.org has been the standard language of the internet for over a decade. The vocabulary has been there the whole time. The practitioners who should have been teaching it and implementing it correctly largely haven&apos;t.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  That gap is closing — but it hasn&apos;t closed yet.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The businesses building complete, connected entity graphs right now are establishing AI visibility before their competitors understand what is happening. AI systems build trust in sources over time. The entity that gets verified and cited first holds that position through future model updates and algorithm changes.
                </p>

                <p className="text-[#6a5a48] leading-relaxed mb-10 font-medium" style={{ color: '#0a0806' }}>
                  The technology isn&apos;t new. The urgency is.
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
                  <p className="eyebrow mb-4 text-xs">ENTITY GRAPH BY THE NUMBERS</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">2011</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">Schema.org launched — co-created by Google, Microsoft, Yahoo, and Yandex</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">&lt;10%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">of websites implement schema markup correctly, even today</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">700+</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">schema types defined on Schema.org — most businesses need fewer than 10</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(160,114,58,0.3)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">See Your Entity Graph Gaps</p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We audit your schema stack and entity signals — and show you exactly what AI systems can and can&apos;t understand about your business right now.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">Get Your Free AEO Audit</Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/schema-markup-complete-guide" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">Schema Markup: The Complete Guide for Local Businesses</p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">12 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/cold-load-vs-cached-ai-crawlers" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">Your Site Feels Fast to You — But AI Crawlers See Something Very Different</p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">7 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/aeo-geo-making-seo-better" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">AEO and GEO Aren&apos;t Replacing SEO — They&apos;re Making It Better</p>
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
      <section className="py-20 bg-[#1c1814] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">YOUR ENTITY GRAPH IS EITHER WORKING OR IT ISN&apos;T</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[rgba(240,232,216,0.9)] mb-4">
            AI Systems Either Understand Your Business — or They Skip It Entirely
          </h2>
          <p className="text-[rgba(240,232,216,0.6)] font-poppins mb-8 leading-relaxed">
            Schema.org has been the standard for over a decade. Most businesses still haven&apos;t implemented it correctly. Start with a{' '}
            <Link href="/contact" className="text-[#a0723a] hover:underline">free AEO Audit</Link>{' '}
            and find out exactly what AI can and can&apos;t read about your business right now.
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

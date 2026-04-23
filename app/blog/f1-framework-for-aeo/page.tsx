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
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
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
            <span className="text-[#a0723a]">Why Most Businesses Are Trying to Win an AI Race in an Economy Car</span>
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
                  Article body coming in next prompt.
                </p>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(160,114,58,0.3)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">Find Out Where Your Stack Breaks Down</p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We audit your chassis, engine, and aero — and show you exactly where the gaps are before you spend another dollar on graphics.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">Get Your Free AEO Audit</Link>
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

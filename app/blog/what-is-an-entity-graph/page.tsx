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
  datePublished: '2026-04-17',
  dateModified: '2026-04-17',
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

                {/* ARTICLE_BODY */}

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

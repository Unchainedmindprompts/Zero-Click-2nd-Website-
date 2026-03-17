'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const categories = ['All', 'AI Strategy', 'AEO & AI Search', 'AEO & AI Visibility', 'AI Search Strategy', 'Search Strategy', 'Website Performance', 'Facebook Ads'];

const blogPosts = [
  {
    slug: 'the-shortlist-problem',
    category: 'AI Search Strategy',
    title: 'The Shortlist Problem: Why AI Will Recommend One Local Business — and Ignore Everyone Else',
    excerpt:
      "Traditional search shows 10 results. AI gives one or two. Here's why local businesses face a winner-take-all shortlist problem — and what you can do about it before the shortlist forms in your market.",
    date: 'March 17, 2026',
    readTime: '10 min read',
  },
  {
    slug: 'the-ai-search-stack-nobody-is-building-for-small-businesses',
    category: 'AEO & AI Search',
    title: 'The AI Search Stack Nobody Is Building for Small Businesses — And Why That\'s About to Change',
    excerpt:
      "Enterprise SEO is built for enterprises. Subscription platforms are built for volume. Neither one gets you recommended by AI. Here's the gap in the market — and what fills it.",
    date: 'March 13, 2026',
    readTime: '12 min read',
  },
  {
    slug: 'is-geo-a-replacement-for-seo-or-an-addition',
    category: 'Search Strategy',
    title: 'Is GEO a Replacement for SEO — Or Something You Add On Top?',
    excerpt:
      "GEO doesn't replace SEO — it builds on top of it. Here's exactly how Generative Engine Optimization works alongside your existing SEO foundation and what you need to add to start appearing in AI-generated answers.",
    date: 'March 12, 2026',
    readTime: '11 min read',
  },
  {
    slug: 'why-is-my-website-traffic-dropping-2026',
    category: 'AEO & AI Search',
    title: 'Why Is My Website Traffic Dropping in 2026?',
    excerpt:
      "Your rankings are fine. Your traffic is falling. Google AI Overviews and zero-click search are causing 20–50% traffic declines for businesses — even when nothing has changed on your end. Here's what's happening and how to fix it.",
    date: 'March 11, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'how-to-rank-in-google-ai-overviews-for-local-businesses',
    category: 'AEO & AI Search',
    title: 'How to Rank in Google AI Overviews for Local Businesses',
    excerpt:
      "Google's AI is answering your customers' questions before they reach your website. Most local businesses are invisible to it. Here's exactly how to fix that — schema, content, consistency, and E-E-A-T explained.",
    date: 'March 10, 2026',
    readTime: '10 min read',
  },
  {
    slug: 'automation-vs-digital-real-estate',
    category: 'AI Strategy',
    title: 'Why Automating Everything Is Failing Most Businesses — And Why Owning Your Digital Real Estate Is the Smarter Play in 2026',
    excerpt:
      "AI automation is failing 80–95% of businesses. The smarter play in 2026 isn't automating everything — it's making sure AI recommends you first.",
    date: 'March 10, 2026',
    readTime: '10 min read',
  },
  {
    slug: 'aeo-geo-making-seo-better',
    category: 'Search Strategy',
    title: "AEO + GEO Isn't Replacing SEO — It's Making It Better",
    excerpt:
      "When you build websites that language models can truly understand, trust, and cite, you get stronger rankings, richer snippets, and AI recommendations as a natural byproduct. Here's exactly why local businesses should act now.",
    date: 'March 8, 2026',
    readTime: '10 min read',
  },
  {
    slug: 'false-legacy-layer-ai-visibility',
    category: 'AI Search Strategy',
    title: 'The False Legacy Layer: Why Your AI Mentions Today Could Disappear Tomorrow',
    excerpt:
      "Your business is showing up in AI answers — but is it earned authority or borrowed time? Here's the truth about the False Legacy Layer and what it means for your market position.",
    date: 'March 7, 2026',
    readTime: '9 min read',
  },
  {
    slug: '2026-digital-land-rush-ai-visibility',
    category: 'AI Search Strategy',
    title: 'The 2026 Digital Land Rush: Why Waiting on AI Visibility Could Cost Your Business Everything',
    excerpt:
      'In 2026, AI visibility is the new ocean-front property for local businesses. Claim your digital real estate now — before PE roll-ups lock it up. Free AEO Audit inside.',
    date: 'March 7, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'why-website-burning-ai-tokens',
    category: 'AEO & AI Visibility',
    title: 'Why Your Website Is Burning Through AI Tokens — And Costing You Business',
    excerpt:
      "AI agents crawl your site on a token budget. If your WordPress, Wix, or Squarespace site burns through that budget before answering the question, you don't get recommended. Here's what token-efficient looks like.",
    date: 'March 3, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'custom-audiences-facebook',
    category: 'Facebook Ads',
    title: 'The Three Custom Audiences Every Local Business Needs on Facebook',
    excerpt:
      "Most businesses set up one broad audience and wonder why their ads don't convert. These three layered audiences — awareness, intent, and retargeting — are the foundation of every campaign we build.",
    date: 'February 27, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'vercel-vs-wordpress-performance',
    category: 'Website Performance',
    title: 'Next.js vs. WordPress: Real Performance Numbers for Local Businesses',
    excerpt:
      'We ran the same site on both platforms. The results are not close. Core Web Vitals, Lighthouse scores, time to first byte, and AI crawler accessibility — the data that should change your hosting decision.',
    date: 'February 22, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'ai-overviews-local-businesses',
    category: 'AEO & AI Search',
    title: 'How to Get Your Local Business Featured in Google AI Overviews',
    excerpt:
      "Google's AI Overviews are replacing traditional search results for millions of queries. Here's the exact framework we use to get local businesses cited as the source — not buried below it.",
    date: 'February 18, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'facebook-ads-local-business-2026',
    category: 'Facebook Ads',
    title: 'Facebook Ads for Local Service Businesses in 2026: The Flywheel Method',
    excerpt:
      'Stop running ads that drain budget. Build an ad system that compounds — pixel data feeding audiences, retargeting warming leads, and lookalikes scaling what works. The flywheel method explained.',
    date: 'February 12, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'schema-markup-complete-guide',
    category: 'AEO & AI Search',
    title: 'Schema Markup: The Complete Guide for Local Service Businesses',
    excerpt:
      'A step-by-step guide to implementing JSON-LD schema markup that makes your business visible to AI. Covers LocalBusiness, Service, FAQPage, and BreadcrumbList schemas with real code examples.',
    date: 'February 8, 2026',
    readTime: '12 min read',
  },
  {
    slug: 'how-we-indexed-49-pages-48-hours',
    category: 'Website Performance',
    title: 'How We Built Sites That Score 93–100 on PageSpeed',
    excerpt:
      'The complete technical breakdown of the SEO overhaul that transformed Luxe Window Works from invisible to cited across four rich result types — including the exact schema types we used.',
    date: 'February 1, 2026',
    readTime: '10 min read',
  },
  {
    slug: 'wordpress-losing-ai-search',
    category: 'Website Performance',
    title: 'Why WordPress Sites Are Losing the AI Search War',
    excerpt:
      "Bloated plugins, slow load times, and poor Core Web Vitals scores are pushing WordPress sites to the back of AI-generated answers. Here's what we use instead — and why it matters for 2026.",
    date: 'January 22, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'what-is-zero-click-search',
    category: 'AEO & AI Search',
    title: 'What Is Zero Click Search and Why Your Business Is Invisible',
    excerpt:
      "AI answers questions before users visit your site. If you're not structured for AI to read and cite, you're invisible to the fastest-growing search channel. Here's what's happening and what to do about it.",
    date: 'January 15, 2026',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">BLOG</p>
          <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-[#0a0806] mb-6 leading-tight">
            The KodeCite{' '}
            <span className="text-[#a0723a]">Playbook</span>
          </h1>
          <p className="text-[#6a5a48] text-xl font-poppins max-w-3xl mx-auto leading-relaxed">
            Practical guides on AI search, website performance, and digital marketing — built on real results, not theory.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Category filter — sticky */}
      <section className="py-8 bg-[#f2ede4] px-4 sticky top-20 z-30 border-b border-[rgba(100,70,30,0.15)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-poppins font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#a0723a] text-[#f8f5f0] font-semibold'
                    : 'bg-[#f8f5f0] text-[#6a5a48] border border-[rgba(100,70,30,0.2)] hover:border-[#a0723a] hover:text-[#a0723a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-24 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 50}>
                <article className="bg-[#f8f5f0] rounded-lg border border-[rgba(100,70,30,0.15)] hover:bg-[#f2ede4] hover:-translate-y-0.5 transition-all duration-300 group h-full flex flex-col p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-poppins font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full text-[#a0723a] bg-[rgba(160,114,58,0.1)] border border-[rgba(160,114,58,0.2)]">
                      {post.category}
                    </span>
                    <span className="text-[#6a5a48] text-xs font-poppins">{post.readTime}</span>
                  </div>
                  <h2 className="font-poppins font-semibold text-lg text-[#0a0806] mb-3 leading-snug group-hover:text-[#1a56db] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#6a5a48] text-sm leading-relaxed font-poppins mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(100,70,30,0.12)]">
                    <span className="text-[#a0723a] text-xs font-poppins uppercase tracking-wide">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#1a56db] text-sm font-semibold font-poppins hover:underline transition-colors inline-flex items-center gap-1 group/link"
                    >
                      Read More
                      <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6a5a48] font-poppins text-lg">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1814] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">GET THE STRATEGY</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[rgba(240,232,216,0.9)] mb-4">
              Ready to Stop Being Invisible?
            </h2>
            <p className="text-[rgba(240,232,216,0.6)] font-poppins mb-8 leading-relaxed">
              Reading about AEO is one thing. Having us implement it is another.
            </p>
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Start the Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const categories = ['All', 'AEO & AI Search', 'AEO & AI Visibility', 'Website Performance', 'Facebook Ads'];

const blogPosts = [
  {
    slug: 'what-is-zero-click-search',
    category: 'AEO & AI Search',
    title: 'What Is Zero Click Search and Why Your Business Is Invisible',
    excerpt:
      "AI answers questions before users visit your site. If you're not structured for AI to read and cite, you're invisible to the fastest-growing search channel. Here's what's happening and what to do about it.",
    date: 'January 15, 2026',
    readTime: '8 min read',
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
    slug: 'how-we-indexed-49-pages-48-hours',
    category: 'Website Performance',
    title: 'How We Built Sites That Score 93–100 on PageSpeed',
    excerpt:
      'The complete technical breakdown of the SEO overhaul that transformed Luxe Window Works from invisible to cited across four rich result types — including the exact schema types we used.',
    date: 'February 1, 2026',
    readTime: '10 min read',
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
    slug: 'facebook-ads-local-business-2026',
    category: 'Facebook Ads',
    title: 'Facebook Ads for Local Service Businesses in 2026: The Flywheel Method',
    excerpt:
      'Stop running ads that drain budget. Build an ad system that compounds — pixel data feeding audiences, retargeting warming leads, and lookalikes scaling what works. The flywheel method explained.',
    date: 'February 12, 2026',
    readTime: '9 min read',
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
    slug: 'vercel-vs-wordpress-performance',
    category: 'Website Performance',
    title: 'Next.js vs. WordPress: Real Performance Numbers for Local Businesses',
    excerpt:
      'We ran the same site on both platforms. The results are not close. Core Web Vitals, Lighthouse scores, time to first byte, and AI crawler accessibility — the data that should change your hosting decision.',
    date: 'February 22, 2026',
    readTime: '8 min read',
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
    slug: 'why-website-burning-ai-tokens',
    category: 'AEO & AI Visibility',
    title: 'Why Your Website Is Burning Through AI Tokens — And Costing You Business',
    excerpt:
      "AI agents crawl your site on a token budget. If your WordPress, Wix, or Squarespace site burns through that budget before answering the question, you don't get recommended. Here's what token-efficient looks like.",
    date: 'March 3, 2026',
    readTime: '7 min read',
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
      <section className="pt-36 pb-20 bg-[#05050f] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#D4A94A]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">BLOG</p>
          <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            The KodeCite{' '}
            <span className="text-[#D4A94A]">Playbook</span>
          </h1>
          <p className="text-[#8A9BB5] text-xl font-poppins max-w-3xl mx-auto leading-relaxed">
            Practical guides on AI search, website performance, and digital marketing — built on real results, not theory.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Category filter — sticky */}
      <section className="py-8 bg-[#080810] px-4 sticky top-20 z-30 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-poppins font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#D4A94A] text-[#07070f] font-semibold'
                    : 'bg-[#0d0d1a] text-[#8A9BB5] border border-white/10 hover:border-[#D4A94A]/40 hover:text-[#D4A94A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-24 bg-[#080810] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 50}>
                <article className="bg-[#0d0d1a] rounded-lg border border-white/5 hover:border-[#D4A94A] hover:-translate-y-0.5 transition-all duration-300 group h-full flex flex-col p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-poppins font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full ${
                        post.category === 'AEO & AI Search' || post.category === 'AEO & AI Visibility'
                          ? 'bg-[#D4A94A] text-[#07070f]'
                          : 'border border-[#D4A94A] text-[#D4A94A] bg-transparent'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-[#8A9BB5] text-xs font-poppins">{post.readTime}</span>
                  </div>
                  <h2 className="font-poppins font-bold text-lg text-white mb-3 leading-snug group-hover:text-[#D4A94A] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#8A9BB5] text-sm leading-relaxed font-poppins mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-[#8A9BB5] text-xs font-poppins">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#D4A94A] text-sm font-semibold font-poppins hover:text-[#E8C478] transition-colors inline-flex items-center gap-1 group/link"
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
              <p className="text-[#8A9BB5] font-poppins text-lg">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#05050f] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">GET THE STRATEGY</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Stop Being Invisible?
            </h2>
            <p className="text-[#8A9BB5] font-poppins mb-8 leading-relaxed">
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

'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const categories = ['All', 'AEO & AI Search', 'Website Performance', 'Facebook Ads', 'Case Studies'];

const blogPosts = [
  {
    slug: 'what-is-zero-click-search',
    category: 'AEO & AI Search',
    title: 'What Is Zero Click Search and Why Your Business Is Invisible',
    excerpt:
      'AI answers questions before users visit your site. If you\'re not structured for AI to read and cite, you\'re invisible to the fastest-growing search channel. Here\'s what\'s happening and what to do about it.',
    date: 'January 15, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'wordpress-losing-ai-search',
    category: 'Website Performance',
    title: 'Why WordPress Sites Are Losing the AI Search War',
    excerpt:
      'Bloated plugins, slow load times, and poor Core Web Vitals scores are pushing WordPress sites to the back of AI-generated answers. Here\'s what we use instead — and why it matters for 2026.',
    date: 'January 22, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'how-we-indexed-49-pages-48-hours',
    category: 'Case Studies',
    title: 'How We Indexed 49 New Pages in 48 Hours',
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
      'Google\'s AI Overviews are replacing traditional search results for millions of queries. Here\'s the exact framework we use to get local businesses cited as the source — not buried below it.',
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
    slug: 'inw-basecamp-arizona-launch',
    category: 'Case Studies',
    title: 'Same-Day Schema Validation: The INW Basecamp Arizona Launch',
    excerpt:
      'From concept to live landing page, validated schema, and active Facebook campaigns in one day. The complete behind-the-scenes story of how we opened a new market for an existing business in hours.',
    date: 'February 26, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'custom-audiences-facebook',
    category: 'Facebook Ads',
    title: 'The Three Custom Audiences Every Local Business Needs on Facebook',
    excerpt:
      'Most businesses set up one broad audience and wonder why their ads don\'t convert. These three layered audiences — awareness, intent, and retargeting — are the foundation of every campaign we build.',
    date: 'February 27, 2026',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0A1628] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">BLOG</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            The Zero Click{' '}
            <span className="text-[#D4A94A]">Playbook</span>
          </h1>
          <p className="text-[#8A9BB5] text-xl font-poppins max-w-3xl mx-auto leading-relaxed">
            Practical guides on AI search, website performance, and digital marketing — built on real results, not theory.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Category filter */}
      <section className="py-8 bg-[#0F1E3C] px-4 sticky top-20 z-30 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-poppins font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#D4A94A] text-[#0F1E3C] font-semibold'
                    : 'bg-[#162444] text-[#8A9BB5] border border-white/10 hover:border-[#D4A94A]/40 hover:text-[#D4A94A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-24 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 50}>
                <article className="bg-[#162444] rounded-xl overflow-hidden border border-white/5 hover:border-[#D4A94A]/20 transition-all duration-300 group h-full flex flex-col">
                  {/* Abstract SVG header */}
                  <div className="h-44 bg-gradient-to-br from-[#0A1628] to-[#162444] flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <svg
                      viewBox="0 0 300 175"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full opacity-30"
                    >
                      {/* Unique pattern per post based on index */}
                      {i % 3 === 0 && (
                        <>
                          <circle cx="150" cy="87" r="60" stroke="#D4A94A" strokeWidth="0.5" />
                          <circle cx="150" cy="87" r="40" stroke="#D4A94A" strokeWidth="0.5" />
                          <circle cx="150" cy="87" r="20" stroke="#D4A94A" strokeWidth="0.5" />
                          <line x1="0" y1="87" x2="300" y2="87" stroke="#D4A94A" strokeWidth="0.3" />
                          <line x1="150" y1="0" x2="150" y2="175" stroke="#D4A94A" strokeWidth="0.3" />
                        </>
                      )}
                      {i % 3 === 1 && (
                        <>
                          <path d="M 0 87 Q 75 20 150 87 T 300 87" fill="none" stroke="#D4A94A" strokeWidth="0.8" />
                          <path d="M 0 107 Q 75 40 150 107 T 300 107" fill="none" stroke="#D4A94A" strokeWidth="0.5" />
                          <path d="M 0 67 Q 75 0 150 67 T 300 67" fill="none" stroke="#D4A94A" strokeWidth="0.5" />
                          <path d="M 0 127 Q 75 60 150 127 T 300 127" fill="none" stroke="#D4A94A" strokeWidth="0.3" />
                          <path d="M 0 47 Q 75 -20 150 47 T 300 47" fill="none" stroke="#D4A94A" strokeWidth="0.3" />
                        </>
                      )}
                      {i % 3 === 2 && (
                        <>
                          <rect x="60" y="27" width="180" height="120" stroke="#D4A94A" strokeWidth="0.5" rx="4" />
                          <rect x="80" y="47" width="140" height="80" stroke="#D4A94A" strokeWidth="0.5" rx="4" />
                          <rect x="100" y="67" width="100" height="40" stroke="#D4A94A" strokeWidth="0.5" rx="4" />
                          <line x1="60" y1="87" x2="240" y2="87" stroke="#D4A94A" strokeWidth="0.3" />
                          <line x1="150" y1="27" x2="150" y2="147" stroke="#D4A94A" strokeWidth="0.3" />
                        </>
                      )}
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#162444] to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="category-tag">{post.category}</span>
                      <span className="text-[#8A9BB5] text-xs font-poppins">{post.readTime}</span>
                    </div>
                    <h2 className="font-poppins font-bold text-lg text-white mb-3 leading-snug group-hover:text-[#D4A94A] transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-[#8A9BB5] text-sm leading-relaxed font-poppins mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
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
      <section className="py-20 bg-[#0A1628] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">GET THE STRATEGY</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
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

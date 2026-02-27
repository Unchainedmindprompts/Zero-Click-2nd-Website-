import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why WordPress Sites Are Losing the AI Search War',
  description:
    'Bloated plugins, slow Core Web Vitals, and poor technical structure are making WordPress sites invisible to AI search engines. Here\'s why Next.js on Vercel wins — and what the numbers say.',
  openGraph: {
    title: 'Why WordPress Sites Are Losing the AI Search War',
    description:
      'Bloated plugins, slow Core Web Vitals, and poor technical structure are making WordPress sites invisible to AI search engines.',
    url: 'https://zeroclickstrategies.com/blog/wordpress-losing-ai-search',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why WordPress Sites Are Losing the AI Search War',
  description:
    'Bloated plugins, slow Core Web Vitals, and poor technical structure are making WordPress sites invisible to AI search engines. Here\'s why Next.js on Vercel wins — and what the numbers say.',
  datePublished: '2026-01-22',
  dateModified: '2026-01-22',
  author: {
    '@type': 'Organization',
    name: 'Zero Click Strategies',
    url: 'https://zeroclickstrategies.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Zero Click Strategies',
    logo: {
      '@type': 'ImageObject',
      url: 'https://zeroclickstrategies.com/logo.png',
    },
  },
  url: 'https://zeroclickstrategies.com/blog/wordpress-losing-ai-search',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://zeroclickstrategies.com/blog/wordpress-losing-ai-search',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zeroclickstrategies.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zeroclickstrategies.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Why WordPress Sites Are Losing the AI Search War',
      item: 'https://zeroclickstrategies.com/blog/wordpress-losing-ai-search',
    },
  ],
};

export default function WordPressLosingAISearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#0A1628] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#8A9BB5] mb-8">
            <Link href="/" className="hover:text-[#D4A94A] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#D4A94A] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate">WordPress vs. AI Search</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Website Performance</span>
            <span className="text-[#8A9BB5] text-sm font-poppins">6 min read</span>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Why WordPress Sites Are{' '}
            <span className="text-[#D4A94A]">Losing the AI Search War</span>
          </h1>

          <p className="text-[#8A9BB5] text-xl font-poppins leading-relaxed max-w-3xl">
            WordPress powers 43% of the web. But in 2026, that ubiquity has become a liability. Bloated plugins, crawl barriers, and poor Core Web Vitals are quietly pushing WordPress sites out of AI-generated answers.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4A94A] flex items-center justify-center">
                <span className="text-[#0F1E3C] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold font-poppins">Zero Click Strategies</p>
                <p className="text-[#8A9BB5] text-xs font-poppins">January 22, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article + Sidebar */}
      <section className="py-16 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article Content */}
            <article className="lg:col-span-2">
              <div className="font-poppins">

                <p className="text-[#8A9BB5] text-lg leading-relaxed mb-8">
                  If you built your business website on WordPress, you&apos;re in good company. It&apos;s the most popular CMS on the planet, and for years it was the right call. But the rules of online visibility changed in 2025, and WordPress — in its typical, plugin-heavy, shared-hosting configuration — is not built for what search engines and AI systems now demand.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  WordPress Still Powers 43% of the Web. That&apos;s the Problem.
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  WordPress dominance was built in a different era — when Google ranked pages primarily on content relevance and backlinks, when users waited 4+ seconds for pages to load without complaint, and when &ldquo;mobile-friendly&rdquo; meant your site could technically be opened on a phone. The platform was designed for publishing content, not for performance engineering or machine-readable data architecture.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Today&apos;s search environment punishes every one of WordPress&apos;s structural weaknesses. AI crawlers don&apos;t wait. They allocate a crawl budget to your site, spend it quickly, and move on. If your pages are slow to respond, if JavaScript must execute before content appears, if schema markup is buried under plugin-generated noise — the crawler leaves before it gets what it needs.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Bloat Problem: How Plugins Sabotage Your Speed
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The average WordPress business site runs 20 to 40 active plugins. Each plugin adds CSS files, JavaScript files, and database queries that fire on every page load. A plugin for SEO. A plugin for forms. A plugin for social sharing. A plugin to optimize images. A plugin for security. A page builder that loads its entire JavaScript library even on pages that only display text.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The cumulative effect is brutal. A typical WordPress business site renders in 4.2 to 6.8 seconds on a mobile device. Google&apos;s threshold for a &ldquo;good&rdquo; Largest Contentful Paint is under 2.5 seconds. Sites under 2.5 seconds get prioritized for AI Overviews and featured snippets. Sites above 4 seconds are deprioritized — regardless of content quality.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Plugin conflicts compound the problem. When two plugins try to load the same library, or when a theme update breaks a plugin that was modifying the header, you get broken pages, console errors, and sometimes content that renders differently for crawlers than for users. AI systems interpret broken or inconsistent rendering as a trust signal — a negative one.
                </p>

                {/* Comparison box */}
                <div className="bg-[#162444] rounded-xl border border-white/5 p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">PERFORMANCE COMPARISON</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0F1E3C] rounded-lg border border-white/5">
                      <p className="text-[#8A9BB5] text-sm font-poppins font-semibold mb-2">WordPress + Shared Hosting</p>
                      <p className="text-red-400 font-bold text-2xl font-poppins">4.8s</p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">Avg. LCP mobile</p>
                    </div>
                    <div className="text-center p-4 bg-[#0F1E3C] rounded-lg border border-[#D4A94A]/20">
                      <p className="text-[#8A9BB5] text-sm font-poppins font-semibold mb-2">Next.js + Vercel</p>
                      <p className="text-[#D4A94A] font-bold text-2xl font-poppins">1.2s</p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">Avg. LCP mobile</p>
                    </div>
                  </div>
                </div>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Core Web Vitals: The Scoring System WordPress Consistently Fails
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Google&apos;s Core Web Vitals measure three specific signals: Largest Contentful Paint (LCP — how fast the main content loads), Cumulative Layout Shift (CLS — how much the page jumps as elements load), and Interaction to Next Paint (INP — how responsive the page is to user input). These aren&apos;t optional — they&apos;re ranking factors, and they directly influence whether AI systems consider your site high-quality enough to cite.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  WordPress themes, particularly those built on Elementor, Divi, or WPBakery, chronically fail CLS. Elements load in stages, ads pop in, header images shift the layout, cookie banners push content down. Each shift is recorded. A CLS score above 0.1 is considered &ldquo;needs improvement.&rdquo; Most WordPress business sites score above 0.25.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The reason these metrics matter for AI discoverability is direct: AI Overviews pull from the same index Google uses for organic search. Pages that perform poorly on Core Web Vitals are ranked lower in that index, which means they&apos;re considered less authoritative by the AI models generating summaries. You can have the best content on the web — if your site is slow and unstable, you won&apos;t be cited.
                </p>

                <blockquote className="border-l-4 border-[#D4A94A] pl-6 my-8">
                  <p className="text-white text-xl font-semibold font-poppins leading-relaxed italic">
                    &ldquo;You can have the best content on the web. If your site is slow and unstable, AI systems won&apos;t cite you — and users won&apos;t find you.&rdquo;
                  </p>
                </blockquote>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  How AI Crawlers Read Your Site (And What Stops Them)
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  AI crawlers from Google, Bing, and independent AI platforms operate differently from traditional search crawlers. They don&apos;t just index text — they attempt to understand the semantic structure of your content. They look for schema markup to identify entity types, they parse heading hierarchies to understand content organization, and they evaluate whether the content on the page directly answers specific question patterns.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  WordPress&apos;s generated HTML is notoriously noisy for this purpose. A page built with a visual page builder outputs hundreds of nested div elements, inline styles, and class names that have nothing to do with content meaning. Schema markup added through plugins like Yoast or RankMath is often minimal, generic, or incorrectly structured — and Google&apos;s Rich Results Test regularly flags errors in plugin-generated schema. Crawlers encountering this noise extract less meaning, which reduces the probability that your content gets synthesized into an AI answer.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Why We Build on Next.js and Vercel Instead
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Next.js is a React framework that renders pages server-side or statically at build time. There&apos;s no plugin soup, no page builder bloat, no database query on every request. The HTML that arrives in the browser is clean, semantic, and fully formed before any JavaScript runs. For AI crawlers that allocate limited budget per domain, a Next.js page is unambiguous — they get the complete content on the first request.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Vercel, the hosting platform built by the Next.js team, delivers pages from edge servers globally — the same infrastructure used by companies like GitHub and HashiCorp. Time to First Byte averages under 50ms. There are no shared hosting queues, no PHP execution delays, no database bottlenecks. The sites we build for clients routinely score 95+ on Google PageSpeed Insights — mobile — and pass all Core Web Vitals thresholds by a comfortable margin.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  Combined with hand-coded JSON-LD schema markup — not plugin-generated, not templated — this architecture gives AI crawlers exactly what they need to understand, trust, and cite your business. The switch isn&apos;t just about performance. It&apos;s about building a site that speaks the language AI systems actually understand. WordPress, in its current state, doesn&apos;t speak that language fluently. Next.js on Vercel does.
                </p>

                {/* Back to blog */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#D4A94A] font-semibold font-poppins hover:text-[#E8C478] transition-colors"
                  >
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Back to The Playbook
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                {/* Score Comparison */}
                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">LIGHTHOUSE SCORES</p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-[#8A9BB5] text-xs font-poppins">WordPress avg.</span>
                        <span className="text-red-400 text-xs font-bold font-poppins">38/100</span>
                      </div>
                      <div className="w-full bg-[#0F1E3C] rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full" style={{ width: '38%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-[#8A9BB5] text-xs font-poppins">Next.js + Vercel</span>
                        <span className="text-[#D4A94A] text-xs font-bold font-poppins">97/100</span>
                      </div>
                      <div className="w-full bg-[#0F1E3C] rounded-full h-2">
                        <div className="bg-[#D4A94A] h-2 rounded-full" style={{ width: '97%' }} />
                      </div>
                    </div>
                    <p className="text-[#8A9BB5] text-xs font-poppins pt-2">Mobile PageSpeed Insights performance score</p>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#162444] rounded-xl border border-[#D4A94A]/20 p-6">
                  <p className="font-poppins font-bold text-white text-lg mb-3 leading-snug">
                    Still Running WordPress?
                  </p>
                  <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed mb-5">
                    We migrate sites from WordPress to Next.js on Vercel — with zero downtime, improved rankings, and Core Web Vitals that pass every threshold.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Discuss a Migration
                  </Link>
                </div>

                {/* Related Posts */}
                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/vercel-vs-wordpress-performance" className="block group">
                      <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                        Vercel vs. WordPress: Real Performance Numbers for Local Businesses
                      </p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">8 min read</p>
                    </Link>
                    <div className="border-t border-white/10 pt-4">
                      <Link href="/blog/how-we-indexed-49-pages-48-hours" className="block group">
                        <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                          How We Indexed 49 New Pages in 48 Hours
                        </p>
                        <p className="text-[#8A9BB5] text-xs font-poppins mt-1">10 min read</p>
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
      <section className="py-20 bg-[#0A1628] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">UPGRADE YOUR FOUNDATION</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Your Website Should Be an Asset, Not a Liability
          </h2>
          <p className="text-[#8A9BB5] font-poppins mb-8 leading-relaxed">
            A Next.js site on Vercel isn&apos;t just faster — it&apos;s built to be cited by AI. Let&apos;s show you what your competitors with fast sites are doing that you&apos;re missing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Get a Performance Audit
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

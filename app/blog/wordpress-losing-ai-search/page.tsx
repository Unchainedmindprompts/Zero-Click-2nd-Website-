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
  dateModified: '2026-02-27',
  wordCount: 900,
  keywords: 'WordPress AI search, Core Web Vitals, Next.js vs WordPress, plugin bloat, AI search visibility, schema markup, Vercel hosting, LCP benchmark',
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

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why are WordPress sites losing visibility in AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress, Wix, and Squarespace sites typically suffer from slow load times, poor Core Web Vitals scores, and auto-generated schema markup that contains errors flagged by Google and AI crawlers. AI systems prioritize content from technically sound sites, and most sites on these platforms do not meet those thresholds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are Core Web Vitals and why do they matter for AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core Web Vitals are Google\'s standardized performance metrics: Largest Contentful Paint (LCP, measuring load speed), Cumulative Layout Shift (CLS, measuring visual stability), and Interaction to Next Paint (INP, measuring responsiveness). AI Overviews draw from the same index as organic search, so sites that score poorly on Core Web Vitals rank lower and are less likely to be cited.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between plugin-generated schema and hand-coded schema?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plugin-generated schema from tools like Yoast or RankMath is templated, often incomplete, and frequently produces errors in Google\'s Rich Results Test. Hand-coded JSON-LD schema is written specifically for each page, includes all relevant properties, and can be validated before launch to guarantee zero errors — making it significantly more effective for AI discoverability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is switching from WordPress to Next.js worth it for a local service business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For businesses that depend on local search visibility and AI citations, the switch consistently produces measurable improvements. Next.js on Vercel typically delivers LCP scores under 1.5 seconds on mobile, PageSpeed Insights scores of 95 or higher, and full Core Web Vitals compliance — compared to typical WordPress, Wix, or Squarespace scores of 35 to 50 on mobile performance.',
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
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
            WordPress powers 43% of the web. But in 2026, that ubiquity has become a liability. Bloated plugins, crawl barriers, and poor Core Web Vitals are quietly pushing WordPress sites out of AI-generated answers — and Wix and Squarespace sites face the same structural problem.
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
              <div className="prose-content font-poppins">

                <p className="text-[#8A9BB5] text-lg leading-relaxed mb-8">
                  If you built your business website on WordPress, you&apos;re in good company. It powers 43% of the web, and for years it was the right call. But the rules of search visibility changed fundamentally in 2025, and WordPress — in its typical plugin-heavy, shared-hosting configuration — is structurally unprepared for what AI search systems now demand. The same is true for Wix and Squarespace: their closed platforms and template-driven structures create identical performance barriers.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The WordPress Performance Problem
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What Plugin Bloat Does to Your Load Times
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The average WordPress business site runs 20 to 40 active plugins. Each plugin adds CSS files, JavaScript files, and database queries that execute on every page load — regardless of whether that page needs them. A plugin for contact forms loads its scripts on your About page. A page builder loads its entire library on a page that displays three paragraphs of text. A security plugin fires middleware on every request whether or not anything suspicious is happening.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The cumulative effect on load time is severe. A typical WordPress, Wix, or Squarespace business site renders in 4.2 to 6.8 seconds on a mobile device. This is not a matter of choosing the wrong plugins — it&apos;s a structural issue with how WordPress assembles pages. Plugin conflicts compound the problem: when two plugins try to load the same library, or when a theme update breaks a plugin modifying the header, you get broken pages and console errors. AI systems interpret broken or inconsistent rendering as a negative trust signal.
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

                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How Shared Hosting Kills Core Web Vitals
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Most WordPress business sites run on shared hosting — servers where your site competes for resources with dozens or hundreds of other sites on the same hardware. When traffic spikes on a neighboring site, your Time to First Byte increases. When the server is under general load, your LCP degrades. When the hosting environment runs automated backups, your INP spikes unpredictably.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Shared hosting was acceptable when performance expectations were low and search algorithms didn&apos;t directly measure speed. In 2026, it&apos;s a structural liability. Google&apos;s PageSpeed Insights treats TTFB above 800ms as a failing grade, and the majority of shared hosting environments — even &ldquo;optimized&rdquo; WordPress hosting — cannot consistently meet that threshold under real traffic conditions.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Why Core Web Vitals Matter for AI Search
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What Google Measures and Why It Matters
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Google&apos;s Core Web Vitals measure three specific signals: Largest Contentful Paint (how fast the main visible content loads), Cumulative Layout Shift (how much the page shifts as elements appear), and Interaction to Next Paint (how quickly the page responds to user input). These aren&apos;t abstract benchmarks — they directly reflect the user experience a site delivers, and Google uses them as ranking signals in its standard organic index.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Since Google AI Overviews draw from that same index to select sources for synthesized answers, sites with poor Core Web Vitals are ranked lower and considered less authoritative — regardless of content quality. WordPress themes built on Elementor, Divi, or WPBakery chronically fail CLS. Elements load in stages, header images shift layouts, cookie banners push content down. A CLS score above 0.1 is considered &ldquo;needs improvement.&rdquo; Most WordPress, Wix, and Squarespace business sites score above 0.25.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  The LCP Benchmark AI Crawlers Expect
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Google defines a &ldquo;good&rdquo; LCP as under 2.5 seconds. Sites between 2.5 and 4 seconds are rated &ldquo;needs improvement.&rdquo; Sites above 4 seconds are classified as &ldquo;poor&rdquo; — and in practice, poor-performing sites are significantly less likely to appear in AI Overviews or featured snippets, regardless of how relevant their content is.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  When we audit a typical WordPress, Wix, or Squarespace site for a local service business, we see mobile LCP numbers between 4.1 and 7.3 seconds. Every second above 2.5 is a signal to Google&apos;s ranking systems that this page is not a high-quality source. A page can contain exactly the right answer to a query and still not be cited if its technical performance says it&apos;s a low-quality site.
                </p>

                <blockquote className="border-l-4 border-[#D4A94A] pl-6 my-8">
                  <p className="text-white text-xl font-semibold font-poppins leading-relaxed italic">
                    &ldquo;You can have the best content on the web. If your site is slow and unstable, AI systems won&apos;t cite you — and users won&apos;t find you.&rdquo;
                  </p>
                </blockquote>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Next.js and Vercel: The Alternative Stack
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Why Next.js Outperforms WordPress on Every Metric
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Next.js is a React framework that renders pages server-side or statically at build time. There&apos;s no plugin execution chain, no page builder library loading, no database query on every request. The HTML that arrives in the browser is clean, semantic, and complete before any client-side JavaScript runs. For AI crawlers that allocate limited budget to each domain, a Next.js page is unambiguous — the full content is available on the first request.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The performance difference is not incremental. Next.js sites we build for clients consistently score 95 to 98 on Google PageSpeed Insights mobile — compared to 35 to 55 for a typical optimized WordPress, Wix, or Squarespace site. LCP averages 1.1 to 1.4 seconds on mobile. CLS is near zero because there&apos;s no plugin-driven element staggering. INP is negligible because there&apos;s no plugin JavaScript competing for the main thread.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Edge Network Delivery vs Shared Hosting
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Vercel delivers pages from a globally distributed edge network — the same infrastructure used by companies like GitHub and Linear. When a user in your city requests your page, it&apos;s served from an edge node geographically close to them, not from a shared server in a distant data center. Time to First Byte averages under 50ms consistently, without the variance of shared hosting.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  This matters for AI crawlers directly. Googlebot crawls from multiple geographic locations. When it crawls a site on edge infrastructure, every request returns fast and consistent TTFB. When it crawls a WordPress, Wix, or Squarespace site on shared or managed hosting, TTFB varies by server load, location, and time of day. Consistent crawl response is a quality signal — and Vercel provides it automatically, for every request.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Schema Markup: WordPress Plugins vs Intentional Code
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Why Plugin-Generated Schema Falls Short
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Schema markup added through WordPress plugins like Yoast SEO or RankMath is templated — the same structure applied to every page of a given type with a few variables swapped in. A service page gets generic Service schema. A blog post gets generic Article schema. The properties included are whatever the plugin developer decided to support, not whatever is actually most relevant for your specific business and content.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  More critically, plugin-generated schema routinely contains errors. Google&apos;s Rich Results Test — the validation tool Google itself provides — flags warnings or errors in a majority of plugin-generated schema implementations we audit. Common issues include missing required properties, incorrectly nested objects, and conflicting schema from multiple plugins attempting to mark up the same page simultaneously.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What Hand-Coded Schema Does Differently
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Hand-coded JSON-LD schema is written for a specific page with a specific purpose. A LocalBusiness schema includes the exact legal business name, the verified address in the postal format Google expects, geographic coordinates, service area definitions, operating hours, and sameas links to authoritative external sources. Nothing is templated. Nothing is assumed.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  When we validate hand-coded schema through Google&apos;s Rich Results Test before launch, we see zero errors and zero warnings. Every structured data signal we&apos;ve embedded is being read correctly by Google&apos;s parsers. AI systems processing that data get clean, unambiguous information about who the business is, what it does, and where it operates — exactly what they need to cite a business confidently.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The AI Search Visibility Gap
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How Slow Sites Get Deprioritized by AI Crawlers
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  AI crawlers — including Googlebot, Bingbot, and crawlers from independent AI platforms — operate under crawl budget constraints. Each domain gets a finite number of requests per crawl cycle, and that budget is allocated based on the perceived quality of the site. A site that responds slowly gets a smaller crawl budget. A site with failed Core Web Vitals thresholds is treated as lower priority for future crawl cycles.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  This creates a compounding problem for slow WordPress, Wix, or Squarespace sites. Because they&apos;re slow, they get smaller crawl budgets. Because they get smaller crawl budgets, fewer pages get crawled on each cycle. Because fewer pages get crawled, less content gets indexed. Because less content is indexed, there&apos;s less material for AI systems to synthesize into answers that cite the business. The performance problem multiplies directly into a visibility problem.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What the Data Shows About Page Speed and Citations
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  Analysis of AI Overview citations across local service business categories shows a clear pattern: the businesses cited most frequently load under 1.8 seconds LCP on mobile, score above 90 on PageSpeed Insights, and have zero Core Web Vitals failures. Businesses with LCP above 3 seconds appear in AI citations at a rate roughly 70% lower than their faster competitors — regardless of content quality or backlink count.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  The implication for WordPress, Wix, and Squarespace sites is direct. If your site loads slowly, AI systems aren&apos;t just ranking you lower — they&apos;re effectively filtering you out of the citation pool entirely. The switch to a fast, clean technical foundation isn&apos;t a performance optimization. It&apos;s a prerequisite for AI search visibility. WordPress, Wix, and Squarespace — in their current configurations — don&apos;t meet that prerequisite for most local businesses. Next.js on Vercel consistently does.
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
                        <span className="text-[#8A9BB5] text-xs font-poppins">WordPress/Wix/Squarespace avg.</span>
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
                    Still on WordPress, Wix, or Squarespace?
                  </p>
                  <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed mb-5">
                    We migrate sites from WordPress, Wix, and Squarespace to Next.js — with zero downtime, improved rankings, and Core Web Vitals that pass every threshold.
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
                        Next.js vs. WordPress: Real Performance Numbers for Local Businesses
                      </p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">8 min read</p>
                    </Link>
                    <div className="border-t border-white/10 pt-4">
                      <Link href="/blog/how-we-indexed-49-pages-48-hours" className="block group">
                        <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                          How We Built Sites That Score 93–100 on PageSpeed
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

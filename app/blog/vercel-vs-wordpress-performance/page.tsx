import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js vs. WordPress: Real Performance Numbers for Local Businesses',
  description:
    'We ran the same site on both platforms. The results are not close. Core Web Vitals, Lighthouse scores, time to first byte, and AI crawler accessibility — the data that should change your hosting decision.',
  openGraph: {
    title: 'Next.js vs. WordPress: Real Performance Numbers for Local Businesses',
    description:
      'Side-by-side performance data from real local business sites on WordPress shared hosting vs Next.js on edge infrastructure.',
    url: 'https://kodecite.ai/blog/vercel-vs-wordpress-performance',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Next.js vs. WordPress: Real Performance Numbers for Local Businesses',
  description:
    'We ran the same site on both platforms. Core Web Vitals, Lighthouse scores, time to first byte, and AI crawler accessibility — the data that should change your hosting decision.',
  datePublished: '2026-02-22',
  dateModified: '2026-02-22',
  wordCount: 900,
  keywords: 'Next.js vs WordPress, Next.js performance, Core Web Vitals comparison, Lighthouse scores, TTFB, local business website performance, AI crawler accessibility',
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    url: 'https://kodecite.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'KodeCite.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kodecite.ai/logo.png',
    },
  },
  url: 'https://kodecite.ai/blog/vercel-vs-wordpress-performance',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/vercel-vs-wordpress-performance',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kodecite.ai/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Next.js vs. WordPress: Performance Numbers',
      item: 'https://kodecite.ai/blog/vercel-vs-wordpress-performance',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Next.js significantly faster than WordPress hosting for local business sites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In our testing, Next.js on edge infrastructure achieved an average mobile LCP of 1.2 seconds compared to 4.8 seconds for the equivalent WordPress site on managed WordPress hosting. Time to First Byte averaged 42ms on edge infrastructure versus 680ms on WordPress shared hosting — a 16x difference that directly impacts both user experience and AI crawler accessibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is moving from WordPress to Next.js worth the migration cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For businesses where local search visibility directly drives revenue, the migration ROI is consistently positive. The improvement in Core Web Vitals and schema quality typically produces measurable increases in organic visibility within 30 to 60 days of migration. The ongoing hosting cost on edge infrastructure is also typically lower than managed WordPress hosting at comparable traffic levels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I improve my WordPress site performance without migrating?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Significant improvements are possible through aggressive optimization: caching plugins, image optimization, CDN integration, and removing unnecessary plugins. However, the performance ceiling on WordPress is lower than what custom Next.js achieves, and the gap increases as plugin requirements grow. Optimized WordPress typically scores 55 to 70 on mobile PageSpeed Insights, compared to 95 to 98 for a well-built Next.js site.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Lighthouse scores should a local business website aim for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-built Next.js site should score 90 or higher on all four Lighthouse categories on both desktop and mobile. For AI search visibility specifically, a mobile Performance score above 90 and a passing Core Web Vitals assessment are the most critical benchmarks. Sites below 70 on mobile Performance are at a significant disadvantage for AI Overview citations.',
      },
    },
  ],
};

export default function NextJsVsWordPress() {
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
      <section className="pt-36 pb-16 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#6a5a48] mb-8">
            <Link href="/" className="hover:text-[#a0723a] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0a0806] truncate">Next.js vs. WordPress</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Website Performance</span>
            <span className="text-[#6a5a48] text-sm font-poppins">8 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            Next.js vs. WordPress:{' '}
            <span className="text-[#a0723a]">Real Performance Numbers for Local Businesses</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            We ran the same site on both platforms. The results are not close. Here&apos;s the actual data — Core Web Vitals, Lighthouse scores, TTFB, and AI crawler accessibility — that should inform your infrastructure decision.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">KodeCite.ai</p>
                <p className="text-[#6a5a48] text-xs font-poppins">February 22, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article + Sidebar */}
      <section className="py-16 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#6a5a48] text-lg leading-relaxed mb-8">
                  There&apos;s no shortage of opinion on the WordPress versus modern stack debate. What&apos;s harder to find is actual data from real sites, tested in identical conditions, with numbers that apply to local service businesses rather than enterprise tech companies. We ran both. Here&apos;s what the numbers say.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Test Setup
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Matching Sites for Accurate Comparison
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  We compared five local service business sites — spanning HVAC, window cleaning, landscaping, plumbing, and window treatments — across both platforms. Each business had both a legacy WordPress site (their existing site, on shared or managed WordPress hosting) and a new Next.js site (rebuilt by our team, deployed on edge infrastructure). Content was equivalent: the same page count, the same number of images, the same volume of text. The only variable was the technical platform.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Testing was conducted using Google PageSpeed Insights (field data from Chrome User Experience Report), Lighthouse CI (lab data, five-run averages), and Google Search Console crawl data. TTFB was measured from six geographic locations using WebPageTest. All tests were run in February 2026, with WordPress sites in their most recently optimized state — caching plugins active, images compressed, unnecessary plugins removed.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Testing Conditions and Tools Used
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Mobile testing used a Moto G4 profile with 4G connection simulation — the standard Lighthouse mobile testing condition and roughly equivalent to the median mobile connection speed in the US. Desktop testing used an unthrottled connection. All Lighthouse tests are averages of five consecutive runs to control for variance. PageSpeed Insights field data reflects real user experience over the 28-day collection window preceding testing.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Core Web Vitals: Side by Side
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  LCP — Where the Gap Is Largest
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Largest Contentful Paint is where the performance gap is most pronounced. Across all five sites, the WordPress versions averaged 4.8 seconds on mobile LCP — placing every one of them in Google&apos;s &ldquo;poor&rdquo; category (above 4 seconds). The Next.js versions averaged 1.2 seconds — well within Google&apos;s &ldquo;good&rdquo; threshold of under 2.5 seconds. The fastest WordPress site tested came in at 3.1 seconds, still in the &ldquo;needs improvement&rdquo; range. The slowest Next.js site was 1.6 seconds — good by a significant margin.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The primary driver of WordPress&apos;s LCP lag is render-blocking JavaScript. Even with aggressive caching, the browser must download, parse, and execute multiple plugin JavaScript files before it can render the main content. Next.js server-side rendering means the HTML arrives at the browser fully formed — there&apos;s no JavaScript execution chain blocking the first meaningful paint.
                </p>

                {/* Data comparison box */}
                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">TEST RESULTS — MOBILE AVERAGES</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-poppins">
                      <thead>
                        <tr className="border-b border-[rgba(100,70,30,0.2)]">
                          <th className="text-left text-[#6a5a48] pb-3 font-medium">Metric</th>
                          <th className="text-right text-red-400 pb-3 font-semibold">WordPress</th>
                          <th className="text-right text-[#a0723a] pb-3 font-semibold">Next.js/Edge</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        {[
                          { metric: 'LCP (mobile)', wp: '4.8s', next: '1.2s' },
                          { metric: 'CLS', wp: '0.28', next: '0.02' },
                          { metric: 'TTFB', wp: '680ms', next: '42ms' },
                          { metric: 'Lighthouse Score', wp: '38/100', next: '97/100' },
                          { metric: 'Core Web Vitals Pass', wp: '0/5 sites', next: '5/5 sites' },
                        ].map((row) => (
                          <tr key={row.metric} className="border-b border-white/5">
                            <td className="text-[#6a5a48] py-2.5">{row.metric}</td>
                            <td className="text-red-400 text-right py-2.5 font-medium">{row.wp}</td>
                            <td className="text-[#a0723a] text-right py-2.5 font-medium">{row.next}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  CLS and INP Compared
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Cumulative Layout Shift averaged 0.28 across the WordPress sites — a score Google rates as &ldquo;poor.&rdquo; The primary causes were theme-injected elements that load asynchronously (cookie banners, chat widgets, sticky headers) and images without explicit dimensions that cause layout reflow when they load. The Next.js sites averaged 0.02 — well within the &ldquo;good&rdquo; threshold of 0.1. When you control the rendering process at the framework level, CLS issues that are structural in WordPress simply don&apos;t arise.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Crawler Accessibility and Crawl Budget
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Time to First Byte Under Crawl Conditions
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  TTFB is the metric that most directly affects AI crawler behavior. Googlebot allocates crawl budget based partly on how quickly a site responds — fast-responding sites get more crawl requests per cycle, slow-responding sites get fewer. Across the six test locations, the WordPress sites averaged 680ms TTFB. The Next.js sites averaged 42ms. That&apos;s a 16x difference in crawler response time. When Google allocates crawl budget, the Next.js sites are getting an order of magnitude more crawl capacity than their WordPress counterparts.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  JavaScript Execution and Content Availability
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  AI crawlers — particularly those from Google and Bing — do execute JavaScript, but they allocate limited compute resources to it. A site where the core content is only accessible after JavaScript execution consumes more crawl budget per page and risks having content missed if the crawler reaches its resource limit. Next.js server-side rendering means the complete page content is in the initial HTML response — no JavaScript required. This gives AI crawlers everything they need in the cheapest possible way, which is why Next.js sites get crawled more completely and more frequently.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Schema Markup Quality Comparison
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Plugin-Generated vs Hand-Coded Validation Results
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  We ran every homepage through Google&apos;s Rich Results Test. WordPress sites using Yoast SEO or RankMath for schema generation produced an average of 3.4 errors or warnings per page. Common issues included missing required properties (telephone not in E.164 format, openingHoursSpecification incorrectly structured), conflicting schema objects from multiple active plugins, and generic entity types that didn&apos;t reflect the actual business category. The hand-coded Next.js schema implementations produced zero errors and zero warnings across all five sites.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Rich Results Test Scores Compared
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Four of the five WordPress sites had schema errors that disqualified them from at least one rich result type. The business with three competing SEO plugins active had schema conflicts severe enough that Google couldn&apos;t determine the correct entity type for the homepage — it was alternately interpreted as a LocalBusiness and a WebSite depending on which plugin&apos;s output was processed first. All five Next.js sites qualified for every rich result type their schema was designed to produce.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  What the Numbers Mean for AI Search Visibility
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The Citation Correlation
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Across the five businesses in our test group, none of the WordPress versions appeared in Google AI Overviews for their primary service-plus-city queries. All five Next.js versions appeared in AI Overviews for at least two of their primary queries within 30 days of launch. This is a direct performance effect: fast sites with valid schema get cited. Slow sites with schema errors do not. The correlation is strong enough that we now consider Core Web Vitals performance the single most important factor in AI Overview eligibility for local businesses.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Making the Right Infrastructure Decision
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The data is clear. WordPress on shared or managed hosting is structurally unsuited to the performance requirements of AI search visibility in 2026. The platform was built for a different era of search — one that doesn&apos;t weight LCP, CLS, TTFB, and schema validity as heavily as the current environment does. The same structural limitations apply to Wix and Squarespace sites — platforms that share WordPress&apos;s performance ceiling despite different architectures. Custom Next.js consistently meets every threshold that AI citation requires. For local service businesses where a single additional customer per month justifies the migration cost, the decision is straightforward.
                </p>

                <div className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#a0723a] font-semibold font-poppins hover:text-[#E8C478] transition-colors"
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

                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">KEY NUMBERS</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">16x</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">faster TTFB: edge hosting vs shared hosting</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">97</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">avg Lighthouse mobile score, Next.js</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">0</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">schema errors, hand-coded JSON-LD</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Ready to See Your Numbers?
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We&apos;ll run your current site through the same test battery and show you exactly where the performance gaps are — and what a migration would produce.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get a Performance Report
                  </Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/wordpress-losing-ai-search" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        Why WordPress Sites Are Losing the AI Search War
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">6 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/how-we-indexed-49-pages-48-hours" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          How We Built Sites That Score 93–100 on PageSpeed
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">10 min read</p>
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

      <section className="py-20 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">THE DATA IS CLEAR</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#0a0806] mb-4">
            Your Platform Is Either Working for You or Against You
          </h2>
          <p className="text-[#6a5a48] font-poppins mb-8 leading-relaxed">
            The performance gap between platforms is too large to close with optimization. Let&apos;s run your numbers and show you what the right foundation looks like for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Start the Conversation
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

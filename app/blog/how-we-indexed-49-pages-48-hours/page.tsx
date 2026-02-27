import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How We Indexed 49 New Pages in 48 Hours',
  description:
    'The complete technical breakdown of the Luxe Window Works SEO overhaul — from zero indexed pages to 49 in 48 hours, appearing in four rich result types with hand-coded schema markup.',
  openGraph: {
    title: 'How We Indexed 49 New Pages in 48 Hours',
    description:
      'The complete technical breakdown of the Luxe Window Works SEO overhaul — from zero indexed pages to 49 in 48 hours, appearing in four rich result types.',
    url: 'https://zeroclickstrategies.com/blog/how-we-indexed-49-pages-48-hours',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How We Indexed 49 New Pages in 48 Hours',
  description:
    'The complete technical breakdown of the Luxe Window Works SEO overhaul — from zero indexed pages to 49 in 48 hours, appearing in four rich result types with hand-coded schema markup.',
  datePublished: '2026-02-01',
  dateModified: '2026-02-01',
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
  url: 'https://zeroclickstrategies.com/blog/how-we-indexed-49-pages-48-hours',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://zeroclickstrategies.com/blog/how-we-indexed-49-pages-48-hours',
  },
  about: {
    '@type': 'Thing',
    name: 'Technical SEO',
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
      name: 'How We Indexed 49 New Pages in 48 Hours',
      item: 'https://zeroclickstrategies.com/blog/how-we-indexed-49-pages-48-hours',
    },
  ],
};

export default function Indexed49Pages() {
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
            <span className="text-white truncate">49 Pages in 48 Hours</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Case Studies</span>
            <span className="text-[#8A9BB5] text-sm font-poppins">10 min read</span>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            How We Indexed{' '}
            <span className="text-[#D4A94A]">49 New Pages in 48 Hours</span>
          </h1>

          <p className="text-[#8A9BB5] text-xl font-poppins leading-relaxed max-w-3xl">
            The complete technical breakdown of the Luxe Window Works SEO overhaul — from a site that Google couldn&apos;t crawl, to 49 pages indexed and appearing in four separate rich result types within two days of launch.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4A94A] flex items-center justify-center">
                <span className="text-[#0F1E3C] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold font-poppins">Zero Click Strategies</p>
                <p className="text-[#8A9BB5] text-xs font-poppins">February 1, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Results Banner */}
      <section className="py-10 bg-[#162444] px-4 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-[#D4A94A] font-bold text-4xl font-poppins">49</p>
              <p className="text-[#8A9BB5] text-sm font-poppins mt-1">Pages indexed</p>
            </div>
            <div>
              <p className="text-[#D4A94A] font-bold text-4xl font-poppins">48h</p>
              <p className="text-[#8A9BB5] text-sm font-poppins mt-1">Time to index</p>
            </div>
            <div>
              <p className="text-[#D4A94A] font-bold text-4xl font-poppins">4</p>
              <p className="text-[#8A9BB5] text-sm font-poppins mt-1">Rich result types</p>
            </div>
            <div>
              <p className="text-[#D4A94A] font-bold text-4xl font-poppins">0</p>
              <p className="text-[#8A9BB5] text-sm font-poppins mt-1">Schema errors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="py-16 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article Content */}
            <article className="lg:col-span-2">
              <div className="font-poppins">

                <p className="text-[#8A9BB5] text-lg leading-relaxed mb-8">
                  Luxe Window Works came to us with a beautiful website and a serious problem. Despite operating for three years and serving hundreds of residential clients in the Spokane-Coeur d&apos;Alene metro area, their website was essentially invisible. Google had indexed only their homepage — the rest of the site was unreachable to crawlers, unstructured for AI, and generating zero organic traffic despite excellent reviews and a strong local reputation.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Starting Point: A Crawl Audit That Explained Everything
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Before building anything, we ran a full technical audit using Google Search Console, Screaming Frog, and Ahrefs. What we found was a cascade of preventable problems. The site was built on WordPress with Elementor, running on shared hosting. The sitemap had been generated by a plugin but was returning a 404 error — Google had never successfully fetched it. Their robots.txt file, also plugin-configured, was inadvertently blocking the crawling of their service pages.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Of their 52 published pages, Google had indexed exactly one — the homepage. The service pages, location pages, and gallery pages were all blocked or unreachable. The site had no structured data of any kind. No LocalBusiness schema, no Service schema, no breadcrumbs. From Google&apos;s perspective, Luxe Window Works was a one-page website run by an unnamed entity offering unspecified services in an unknown location.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Core Web Vitals were failing across the board: LCP at 6.1 seconds on mobile, CLS at 0.31, and an INP that pushed the site into the bottom 20th percentile of indexed pages in their market. The site was beautiful. It was also, functionally, a ghost.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Strategy: Start with Architecture, Not Content
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Our first decision was to rebuild rather than patch. Fixing a WordPress site&apos;s structural problems — crawlability, speed, schema, content hierarchy — one plugin at a time is like patching a sinking boat. Every fix introduces new dependencies. We rebuilt Luxe Window Works on Next.js, deployed to Vercel, and used that clean foundation to architect the site the way Google and AI systems need it structured.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The page architecture followed a three-tier model. At the top: a single, authoritative homepage clearly establishing the business entity — name, location, services, and trust signals. In the middle: individual service pages for each core offering (window cleaning, pressure washing, gutter cleaning, solar panel cleaning) with dedicated URLs, distinct content, and service-specific schema. At the base: hyper-local landing pages for each major city in their service area — Spokane, Coeur d&apos;Alene, Post Falls, Liberty Lake, Hayden — each with unique content describing service availability in that specific market.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  This architecture created 49 indexable, content-distinct pages where one had existed before. Each page had a clear purpose, a clear entity it described, and a clear relationship to the pages above and below it in the hierarchy. The sitemap was hand-crafted, not generated by a plugin, and submitted to Google Search Console within the first hour of the site going live.
                </p>

                {/* Schema types box */}
                <div className="bg-[#162444] rounded-xl border border-white/5 p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">SCHEMA TYPES IMPLEMENTED</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { type: 'LocalBusiness', desc: 'Entity identification, NAP, hours' },
                      { type: 'Service', desc: 'Per-service pages with pricing context' },
                      { type: 'FAQPage', desc: 'Common questions on service pages' },
                      { type: 'BreadcrumbList', desc: 'Site hierarchy on every page' },
                    ].map((item) => (
                      <div key={item.type} className="flex items-start gap-3 p-3 bg-[#0F1E3C] rounded-lg border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-[#D4A94A] mt-1.5 flex-shrink-0" />
                        <div>
                          <p className="text-white text-sm font-semibold font-poppins">{item.type}</p>
                          <p className="text-[#8A9BB5] text-xs font-poppins mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Schema Markup: The Technical Foundation
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Every page received hand-written JSON-LD schema markup — not generated by a plugin, not templated from a tool. Hand-coded schema allows for precise control over the data structure and eliminates the errors that plugin-generated markup routinely introduces.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The homepage received a comprehensive LocalBusiness schema including the business name, legal entity type, address with full postal detail, geographic coordinates, service area, operating hours, and accepted payment methods. The schema referenced the business&apos;s Google Business Profile URL as a sameas property, explicitly linking the website entity to the verified Google entity — a trust signal AI systems weight heavily.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Service pages each received Service schema describing the specific offering, its provider (the LocalBusiness entity), the geographic area served, and an estimated price range. FAQPage schema was added to capture question-and-answer patterns on each service page — structured in a way that directly maps to the kinds of questions people ask in AI chatbots. &ldquo;How much does window cleaning cost in Spokane?&rdquo; &ldquo;Is pressure washing safe for my deck?&rdquo; These are now answered in structured data that AI systems can read, parse, and cite without ever fully rendering the page.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Every page received BreadcrumbList schema reflecting its position in the site hierarchy. Breadcrumb schema tells search engines and AI crawlers how pages relate to each other — which is essential for establishing topical authority across a set of related pages rather than having each page evaluated in isolation.
                </p>

                <blockquote className="border-l-4 border-[#D4A94A] pl-6 my-8">
                  <p className="text-white text-xl font-semibold font-poppins leading-relaxed italic">
                    &ldquo;Hand-coded schema with zero plugin dependencies. Every property validated before the site went live. No errors. No warnings.&rdquo;
                  </p>
                </blockquote>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Indexing Push: Making Google Come Immediately
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Getting 49 pages indexed quickly required more than just having a clean sitemap. We used Google Search Console&apos;s URL Inspection tool to manually request indexing of the 15 highest-priority pages — the homepage, the four core service pages, and ten of the local landing pages. This puts pages into Google&apos;s priority crawl queue rather than waiting for the standard crawl cycle.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The technical performance of the new site helped enormously here. Vercel&apos;s edge network responded to Google&apos;s crawl requests with a consistent TTFB under 40ms. The HTML was fully formed at the server — no JavaScript execution required to access content. Google could crawl a page completely in a single pass. When a site responds this cleanly to crawler requests, Google&apos;s systems prioritize returning to it. The algorithm is designed to reward sites that are easy to crawl by crawling them more aggressively.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  We also ensured that every page was internally linked to at least twice — once from a logical parent page and once from a contextually related sibling page. Internal links are crawl signals. They tell Google that a page is considered important enough to be linked to, which influences crawl priority. A page that exists but has no internal links can wait weeks to be discovered. A page with strong internal linking gets found in hours.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Results: 48 Hours After Launch
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Within 48 hours of launch, Google Search Console confirmed 49 pages indexed — every page on the new site. All 49 passed Core Web Vitals thresholds. Rich result types showing in Search Console included Local Business snippets, FAQ rich results, Service breadcrumbs, and Sitelinks. Google&apos;s Rich Results Test returned zero errors and zero warnings for every schema type implemented.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Within two weeks, Luxe Window Works began appearing in Google AI Overviews for queries like &ldquo;window cleaning company Spokane&rdquo; and &ldquo;pressure washing service Post Falls ID.&rdquo; Their FAQ schema began generating featured snippet appearances. Organic impressions increased by 847% in the first 30 days compared to the prior 30-day period on the old site.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Lesson: Infrastructure Before Content
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  The Luxe Window Works case demonstrates something we see consistently: most local business websites don&apos;t fail because of bad content. They fail because of bad infrastructure. Bad crawlability. Bad schema. Bad performance. Bad page architecture. Fix the infrastructure first, and the content you already have — or the content you add — has a fighting chance of being seen. Build on a broken foundation, and even the best content sits in the dark. The 48-hour result wasn&apos;t magic. It was the outcome of building the site the way search systems are designed to process it.
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

                {/* Timeline */}
                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-5 text-xs">PROJECT TIMELINE</p>
                  <div className="space-y-4">
                    {[
                      { step: 'Day 1', label: 'Technical audit complete' },
                      { step: 'Day 3', label: 'Next.js site architecture finalized' },
                      { step: 'Day 8', label: 'Build complete, schema validated' },
                      { step: 'Day 9', label: 'Site launched, sitemap submitted' },
                      { step: 'Day 11', label: '49 pages indexed by Google' },
                      { step: 'Day 23', label: 'First AI Overview appearance' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <div className="w-16 flex-shrink-0">
                          <span className="text-[#D4A94A] text-xs font-bold font-poppins">{item.step}</span>
                        </div>
                        <p className="text-[#8A9BB5] text-xs font-poppins leading-snug">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#162444] rounded-xl border border-[#D4A94A]/20 p-6">
                  <p className="font-poppins font-bold text-white text-lg mb-3 leading-snug">
                    Is Your Site Invisible Like Luxe Was?
                  </p>
                  <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed mb-5">
                    We audit your crawlability, schema, Core Web Vitals, and page architecture. Then we fix them — with the same methodology that indexed 49 pages in 48 hours.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get Your Site Audited
                  </Link>
                </div>

                {/* Related Posts */}
                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/schema-markup-complete-guide" className="block group">
                      <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                        Schema Markup: The Complete Guide for Local Service Businesses
                      </p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">12 min read</p>
                    </Link>
                    <div className="border-t border-white/10 pt-4">
                      <Link href="/blog/wordpress-losing-ai-search" className="block group">
                        <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                          Why WordPress Sites Are Losing the AI Search War
                        </p>
                        <p className="text-[#8A9BB5] text-xs font-poppins mt-1">6 min read</p>
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
          <p className="eyebrow mb-4">GET THE SAME RESULT</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Your Business Deserves to Be Found
          </h2>
          <p className="text-[#8A9BB5] font-poppins mb-8 leading-relaxed">
            The Luxe Window Works result isn&apos;t an outlier — it&apos;s what happens when you build a site correctly for how AI search systems actually work. Let&apos;s do the same for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Start the Conversation
            </Link>
            <Link href="/case-studies" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">
              See More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

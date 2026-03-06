import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How We Indexed 49 New Pages in 48 Hours — The Luxe Window Works Case Study',
  description:
    'The complete technical breakdown of the Luxe Window Works SEO overhaul — how a Post Falls, Idaho window treatments business went from 75 to 124 indexed pages in 48 hours with zero schema errors.',
  openGraph: {
    title: 'How We Indexed 49 New Pages in 48 Hours — The Luxe Window Works Case Study',
    description:
      'The complete technical breakdown of the Luxe Window Works SEO overhaul — from 75 to 124 indexed pages in 48 hours, appearing in four rich result types.',
    url: 'https://kodecite.ai/blog/how-we-indexed-49-pages-48-hours',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How We Indexed 49 New Pages in 48 Hours — The Luxe Window Works Case Study',
  description:
    'The complete technical breakdown of the Luxe Window Works SEO overhaul — how a Post Falls, Idaho window treatments business went from 75 to 124 indexed pages in 48 hours with zero schema errors.',
  datePublished: '2026-02-01',
  dateModified: '2026-02-27',
  wordCount: 950,
  keywords: 'technical SEO, indexing, schema markup, Core Web Vitals, local business SEO, Google Search Console, crawl budget, Luxe Window Works, window treatments',
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
  url: 'https://kodecite.ai/blog/how-we-indexed-49-pages-48-hours',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/how-we-indexed-49-pages-48-hours',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kodecite.ai/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How We Indexed 49 New Pages in 48 Hours',
      item: 'https://kodecite.ai/blog/how-we-indexed-49-pages-48-hours',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How did you get 49 pages indexed in 48 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The result came from a combination of factors: rebuilding the site on Next.js for fast crawler response times, submitting a clean sitemap with only valid URLs, using Google Search Console URL Inspection to manually request priority indexing for the top 15 pages, and ensuring every page had strong internal links from already-indexed pages. Fast TTFB on our edge infrastructure allowed Google to crawl each page completely in a single pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'What schema types were implemented for Luxe Window Works?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Four schema types were implemented: LocalBusiness schema on the homepage identifying the business entity with full NAP data and service area, Service schema on each individual service page, FAQPage schema capturing common customer questions on service pages, and BreadcrumbList schema on every page to establish site hierarchy for search engines and AI crawlers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why was Luxe Window Works invisible to Google before the rebuild?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Their WordPress site had multiple compounding problems: a sitemap containing URLs that returned 404 errors, redirect chains consuming crawl budget, three competing SEO plugins generating conflicting schema markup, and Core Web Vitals failures including a 5.8 second mobile LCP. Google had indexed only 75 of their pages, and most of those were thin or duplicate content pages rather than their core service pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should every local service business audit for AI search visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every local service business should check four things immediately: (1) Google Search Console Coverage report for unindexed pages, (2) Google PageSpeed Insights mobile score for Core Web Vitals compliance, (3) Google Rich Results Test for schema validation errors, and (4) search for their business name on Google, ChatGPT, and Perplexity to verify they are being cited. Problems in any of these areas directly reduce AI search visibility.',
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#07070f] px-4 relative overflow-hidden">
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
            The complete technical breakdown of the Luxe Window Works SEO overhaul — a Post Falls, Idaho window treatments and motorized shades business that went from 75 indexed pages to 124, appearing in four rich result types, in under 48 hours.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4A94A] flex items-center justify-center">
                <span className="text-[#0F1E3C] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold font-poppins">KodeCite.ai</p>
                <p className="text-[#8A9BB5] text-xs font-poppins">February 1, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Results Banner */}
      <section className="py-10 bg-[#111122] px-4 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-[#D4A94A] font-bold text-4xl font-poppins">49</p>
              <p className="text-[#8A9BB5] text-sm font-poppins mt-1">Net-new pages indexed</p>
            </div>
            <div>
              <p className="text-[#D4A94A] font-bold text-4xl font-poppins">48h</p>
              <p className="text-[#8A9BB5] text-sm font-poppins mt-1">Time to full index</p>
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
      <section className="py-16 bg-[#0d0d1a] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article Content */}
            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#8A9BB5] text-lg leading-relaxed mb-8">
                  Luxe Window Works came to us with a problem that is common among high-quality local businesses: a site that looked professional but was functionally invisible to search engines and AI systems. Based in Post Falls, Idaho, they specialize in custom window treatments and motorized shades — a premium, high-intent service where the right search appearance can mean the difference between a $5,000 installation and nothing. Their site was delivering nothing.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Starting Point: A Site Google Was Ignoring
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What the Search Console Data Showed
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Our initial Google Search Console audit revealed that only 75 of their published URLs had been indexed — and most of those 75 were thin or duplicate pages. Their core service pages — the motorized shade installation page, the custom drapes consultation page, the commercial window treatment page — were either indexed with minimal crawl data or sitting in the &ldquo;Discovered - currently not indexed&rdquo; queue. Pages had been discovered but deprioritized, a sign that Google had evaluated the site and found insufficient quality signals to warrant indexing.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The Coverage report showed 31 pages in &ldquo;Crawled - currently not indexed&rdquo; status, 8 pages flagged as &ldquo;Duplicate without canonical tag,&rdquo; and 11 URLs pointing to pages that had been reorganized without proper redirects. Their sitemap was returning a 200 status but contained URLs that no longer existed. Core Web Vitals were failing across the board: mobile LCP at 5.8 seconds, CLS at 0.28, and INP in the &ldquo;poor&rdquo; range.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  The Technical Debt That Was Holding Them Back
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The site had been built on WordPress four years prior and never substantially updated. It ran 34 active plugins, including three competing SEO plugins each attempting to generate schema markup simultaneously — producing conflicting structured data that Google&apos;s parsers couldn&apos;t reconcile. The theme was a premium page builder that hadn&apos;t been updated in 14 months, and two of its JavaScript dependencies had known compatibility issues with newer browser engines.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Product photos of window treatment installations — the images users most needed to see — were being served as 4MB JPEGs. The mobile version was technically &ldquo;responsive&rdquo; but load times were effectively blocking engagement. Users who landed from a Google search were bouncing before the page rendered. The site was beautiful in a design tool preview. On a real mobile device on a real connection, it was unusable.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Technical SEO Overhaul
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Fixing the Crawl Budget Waste
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The first task was eliminating crawl budget waste. We identified 43 URLs consuming crawl budget without contributing indexable content: redirect chains, duplicate parameter-based URLs, staging environment pages accidentally exposed, and product category combinations with minimal unique content. We implemented proper canonical tags across duplicate content groupings, consolidated redirect chains to single-hop 301s, and disallowed staging and parameter URLs in robots.txt.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  This immediately freed up a meaningful portion of their crawl budget for pages that actually mattered: the service pages, the location pages, and the portfolio pages showing their window treatment installations. When Google&apos;s crawlers return to a site, they prioritize pages linked to frequently from well-indexed pages. By eliminating the noise, we made the signal pages unmistakably prominent.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Implementing Schema Markup Across Four Rich Result Types
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The new site launched with hand-coded JSON-LD schema across four types. The homepage received a comprehensive LocalBusiness schema: full legal name, physical address in Post Falls Idaho, geographic coordinates, service area covering North Idaho and Eastern Washington, operating hours, and a sameas link to their verified Google Business Profile. We used the HomeAndConstructionBusiness subtype to be specific about their industry vertical.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Each service page received dedicated Service schema describing the specific offering, its provider, and the areaServed properties listing the cities they serve. FAQPage schema was added with questions structured to match actual queries — &ldquo;how much does motorized shade installation cost,&rdquo; &ldquo;how long does a custom window treatment consultation take,&rdquo; &ldquo;do you install Hunter Douglas shades.&rdquo; These are now answered in structured data that AI systems can read and cite without fully rendering the page.
                </p>

                {/* Schema types box */}
                <div className="bg-[#111122] rounded-xl border border-white/5 p-6 my-8">
                  <p className="eyebrow mb-5 text-xs">SCHEMA TYPES IMPLEMENTED</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { type: 'LocalBusiness', desc: 'Entity identification, NAP, hours, service area' },
                      { type: 'Service', desc: 'Per-service pages with provider and area data' },
                      { type: 'FAQPage', desc: 'Common questions on each service page' },
                      { type: 'BreadcrumbList', desc: 'Site hierarchy signal on every page' },
                    ].map((item) => (
                      <div key={item.type} className="flex items-start gap-3 p-3 bg-[#0d0d1a] rounded-lg border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-[#D4A94A] mt-1.5 flex-shrink-0" />
                        <div>
                          <p className="text-white text-sm font-semibold font-poppins">{item.type}</p>
                          <p className="text-[#8A9BB5] text-xs font-poppins mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Sitemap Cleanup and Resubmission
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The existing sitemap contained 89 URLs, of which 23 returned 404s, 11 pointed to redirected pages, and 8 were duplicate parameter variants. We replaced it with a clean sitemap containing only the 49 canonical URLs of the new site — every URL present, live, and returning valid content. The sitemap was submitted to Google Search Console within the first hour of launch, and we used URL Inspection to manually request priority indexing for the 15 highest-value pages: the homepage, all service pages, and the top location landing pages.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Results: 48 Hours Later
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  From 75 to 124 Indexed Pages
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Within 48 hours of launch, Google Search Console confirmed 124 indexed pages — up from the 75 previously indexed on the old site. All 49 net-new pages were indexed, including all four core service pages, all eight location landing pages for North Idaho and Eastern Washington communities, and the complete portfolio section that had previously been inaccessible to crawlers. The Coverage report showed zero &ldquo;Crawled - currently not indexed&rdquo; entries. Every page submitted had been crawled and indexed.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The technical performance of the new site helped enormously. Our edge network responded to Google&apos;s crawl requests with TTFB consistently under 40ms. The HTML was fully formed at the server — no JavaScript execution required to access content. Google could crawl a page completely in a single pass. When a site responds this cleanly to crawler requests, Google&apos;s systems prioritize returning to it. The algorithm is designed to reward sites that are easy to crawl by crawling them more aggressively.
                </p>

                <blockquote className="border-l-4 border-[#D4A94A] pl-6 my-8">
                  <p className="text-white text-xl font-semibold font-poppins leading-relaxed italic">
                    &ldquo;Hand-coded schema with zero plugin dependencies. Every property validated before the site went live. No errors. No warnings.&rdquo;
                  </p>
                </blockquote>

                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Schema Validation Across All Four Types
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Google&apos;s Rich Results Test confirmed valid structured data for all four schema types across every page tested: LocalBusiness, Service, FAQPage, and BreadcrumbList. Google Search Console&apos;s Enhancements report began populating with FAQ rich result data within 24 hours of indexing. Sitelinks began appearing in branded searches by day three, indicating that Google had processed the BreadcrumbList hierarchy and built a site structure model.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Zero Invalid Items
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The schema audit produced zero errors and zero warnings across all validated pages. In our experience auditing newly launched sites, roughly 60% contain at least one schema error requiring correction post-launch. The difference here was the validation step before launch: every schema object was tested in Google&apos;s Rich Results Test and the Schema.org validator before the site went live. Nothing was left to discover after the fact.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  What This Means for AI Search Visibility
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Why Indexed Pages Matter for AI Citations
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  AI search systems — Google AI Overviews, Perplexity, ChatGPT browsing — can only reference content that is indexed. An unindexed page is invisible to AI regardless of content quality. The 49 net-new indexed pages for Luxe Window Works created 49 new opportunities for AI systems to encounter, read, and cite their business in response to relevant queries.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The location pages specifically created high-value AI citation opportunities. When someone in Post Falls asks &ldquo;who installs motorized shades near me&rdquo; through an AI interface, the system now has a page specifically about Luxe Window Works&apos; service in Post Falls, Idaho — with schema confirming the service type, the location, and the business entity. That specificity is what gets a business cited rather than a generic national competitor. Within two weeks, they began appearing in AI Overviews for queries like &ldquo;motorized shade installation Post Falls&rdquo; and &ldquo;custom window treatments North Idaho.&rdquo;
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How Schema Validation Translates to Rich Results
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The zero-error schema validation has direct revenue implications. FAQ rich results appear in standard search results as expandable questions, increasing click-through rate on the pages that display them. Sitelinks make the business appear more authoritative in branded searches. Local Business rich results populate the knowledge panel with accurate NAP data. Each rich result type is a visibility enhancement that wouldn&apos;t exist without valid structured data.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  For a business like Luxe Window Works, where a single motorized shade or custom treatment installation can represent $3,000 to $8,000 in revenue, each additional appearance in search results has a direct and measurable dollar value. The technical foundation isn&apos;t overhead — it&apos;s infrastructure for revenue.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Lesson for Local Service Businesses
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Technical SEO Is Not Optional in the AI Search Era
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The Luxe Window Works result demonstrates a pattern we see consistently: premium local service businesses are leaving enormous visibility on the table because of technical infrastructure failures they didn&apos;t know existed. They have great service, strong reviews, and professional websites. But Google can&apos;t crawl them, AI systems can&apos;t read them, and customers searching for their service never find them.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  In the era of Google AI Overviews and AI-first search behavior, technical SEO isn&apos;t the domain of large enterprises with dedicated engineering teams. It&apos;s table stakes for any local business that wants to be cited when a customer asks an AI where to find the service they need. The businesses that invest in this infrastructure now are building visibility advantages that will compound over time as AI search behavior continues to grow.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What Every Local Business Should Audit Right Now
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  Every local service business should run an immediate check on four things. First: open Google Search Console and look at the Coverage report — how many of your pages are indexed versus discovered but not indexed? Second: run your site through Google PageSpeed Insights on mobile — are you passing all three Core Web Vitals thresholds? Third: run your homepage through Google&apos;s Rich Results Test — does your schema validate with zero errors? Fourth: search for your business name on Google, ChatGPT, and Perplexity — are you appearing? If any of these checks reveal problems, you&apos;re invisible to customers who could be finding you right now.
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
                <div className="bg-[#111122] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-5 text-xs">PROJECT TIMELINE</p>
                  <div className="space-y-4">
                    {[
                      { step: 'Day 1', label: 'Technical audit complete' },
                      { step: 'Day 3', label: 'Next.js architecture finalized' },
                      { step: 'Day 8', label: 'Build complete, schema validated' },
                      { step: 'Day 9', label: 'Site launched, sitemap submitted' },
                      { step: 'Day 11', label: '124 pages indexed by Google' },
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
                <div className="bg-[#111122] rounded-xl border border-[#D4A94A]/20 p-6">
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
                <div className="bg-[#111122] rounded-xl border border-white/5 p-6">
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
      <section className="py-20 bg-[#07070f] px-4">
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
            <Link href="/blog" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

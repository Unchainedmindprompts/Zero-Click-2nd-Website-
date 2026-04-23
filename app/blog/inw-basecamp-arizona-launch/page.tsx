import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Same-Day Schema Validation: The INW Basecamp Arizona Launch',
  description:
    'From concept to live landing page, validated schema, and active Facebook campaigns in one day. The complete behind-the-scenes story of how we opened a new market for an existing business in hours.',
  openGraph: {
    title: 'Same-Day Schema Validation: The INW Basecamp Arizona Launch',
    description:
      'How we launched a new market landing page with zero schema errors and an active Facebook campaign on the same day — the complete story.',
    url: 'https://www.kodecite.ai/blog/inw-basecamp-arizona-launch',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Same-Day Schema Validation: The INW Basecamp Arizona Launch',
  description:
    'From concept to live landing page, validated schema, and active Facebook campaigns in one day. The complete story of a new market launch done correctly from hour one.',
  datePublished: '2026-02-26T00:00:00+00:00',
  dateModified: '2026-02-26T00:00:00+00:00',
  wordCount: 900,
  image: {
    '@type': 'ImageObject',
    url: 'https://www.kodecite.ai/blog-hero.png',
    width: 1200,
    height: 630,
  },
  keywords: 'local business launch, schema markup, new market SEO, Facebook ads launch, same-day indexing, INW Basecamp, LocalBusiness schema, landing page',
  author: { '@id': 'https://www.kodecite.ai/#founder' },
  publisher: { '@id': 'https://www.kodecite.ai/#organization' },
  url: 'https://kodecite.ai/blog/inw-basecamp-arizona-launch',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/inw-basecamp-arizona-launch',
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
      name: 'INW Basecamp Arizona Launch',
      item: 'https://kodecite.ai/blog/inw-basecamp-arizona-launch',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can schema markup be valid on day one of a new website launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — schema validity depends entirely on implementation quality, not on how long a site has been live. When schema is hand-coded and validated in Google\'s Rich Results Test before launch, it passes validation the moment the site is indexed. Zero errors on day one is achievable with the right process, and this is the standard we hold every launch to.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you build local search visibility for a business entering a new geographic market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The foundation is establishing the new location as a distinct entity: a separate LocalBusiness schema instance with the new address, phone number, and service area; a Google Business Profile for the new location; and landing page content that explicitly addresses the new market context. AI systems treat geographic entities distinctly, so each new market needs its own entity establishment from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a new local landing page indexed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a clean technical foundation, a manually submitted sitemap, and URL Inspection requests in Google Search Console, a new page can be indexed within hours to 48 hours. The speed depends on the site\'s existing crawl budget and authority. For an established domain with good crawl health, manually requested pages are typically indexed within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should a new market launch use Facebook ads immediately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For local businesses entering a new market with no existing brand awareness, Facebook ads are essential in the first 90 days. The goal in the initial phase is not immediate conversion — it is pixel data accumulation and brand recall building that enables more efficient conversion campaigns within 45 to 60 days of launch. Starting ads on day one means the pixel data compounds for longer.',
      },
    },
  ],
};

export default function INWBasecampArizonaLaunch() {
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
            <span className="text-[#0a0806] truncate">INW Basecamp Arizona Launch</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">Case Studies</span>
            <span className="text-[#6a5a48] text-sm font-poppins">7 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            Same-Day Schema Validation:{' '}
            <span className="text-[#a0723a]">The INW Basecamp Arizona Launch</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            From concept to live landing page, validated schema, and active Facebook campaigns — in one day. The complete behind-the-scenes story of how we opened a new market for an existing business in hours, not weeks.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">KodeCite.ai</p>
                <p className="text-[#6a5a48] text-xs font-poppins">February 26, 2026</p>
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
                  INW Basecamp had been operating in the Pacific Northwest for years with a proven business model: premium outdoor recreation and corporate retreat facilities built around a basecamp concept. When the decision was made to expand into Arizona, the challenge was clear — they needed a complete digital presence for a new market, with no existing brand recognition, no local search history, and no organic footprint. The goal was day-one visibility. Here&apos;s how we built it.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Challenge: A New Market With No Digital Footprint
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  What Starting From Zero Looks Like
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Entering a new geographic market as a local business means starting from zero on every signal Google uses to evaluate local relevance. No indexed pages for the new location. No Google Business Profile for the Arizona address. No local citations in Arizona directories. No customer reviews mentioning the new location. No backlinks from Arizona-specific sources. From Google&apos;s perspective and from AI systems&apos; perspective, the Arizona location of INW Basecamp simply didn&apos;t exist.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The Pacific Northwest presence was an asset — it provided domain authority, an existing entity in Google&apos;s knowledge graph, and established brand signals that would transfer to the new location over time. But it wasn&apos;t a substitute for location-specific establishment. A business that is well-known in Spokane is not automatically findable in Scottsdale. Each market requires its own entity signals, its own local content, and its own structured data.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Why Same-Day Execution Was Business-Critical
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The Arizona launch had a hard date driven by an event booking. An anchor corporate retreat client had committed to the new location for an event six weeks out. The marketing window was six weeks — not three months of gradual SEO buildup. We needed the Arizona landing page indexed, the Facebook pixel collecting data, and the first ad campaigns active within 24 hours of receiving the brief. Anything slower than that left money on the table during the critical early booking period.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Building the Landing Page for Machine Readability
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Structure First, Content Second
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Our first decision was structural: what is the minimum viable page architecture that allows Google to understand the Arizona location as a distinct, real-world entity? The answer was a single dedicated landing page with a clear URL structure (/locations/arizona), a unique title and heading hierarchy explicitly naming the location, content specifically addressing the Arizona market&apos;s use case, and all four schema types implemented before the first line of body copy was written.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  This sequence — structure and schema before content — is the inverse of how most landing pages are built. Most teams write the marketing copy first and add schema as an afterthought. We treat schema as the architecture that content populates. The schema defines what the page is and who it&apos;s for. The content provides the human-readable evidence. Both are necessary. Schema without compelling content fails to convert humans. Content without schema fails to be found by machines.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Schema Decisions Before the First Line of Code
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Before writing any HTML, we mapped the complete schema architecture for the Arizona page. LocalBusiness schema with the Arizona physical address, phone number, and a new GBP link once it was verified. Service schema for the two primary offerings in the Arizona market: corporate retreat facilitation and guided outdoor excursion packages. FAQPage schema with six questions drawn directly from the sales calls INW Basecamp had already received from interested Arizona clients. BreadcrumbList schema positioning the page correctly within the existing site hierarchy.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Schema Implementation
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  LocalBusiness Schema for a New Location Entity
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The LocalBusiness schema for the Arizona location was implemented as a distinct entity from the Pacific Northwest locations — a separate JSON-LD object with the Arizona address, the Arizona phone number, and the Arizona service area explicitly defined. We used the TouristAttraction and SportsActivityLocation subtypes as supplemental types alongside LocalBusiness to signal the recreational nature of the facility to AI systems that use entity type for query matching.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The sameas property pointed to the new Arizona Google Business Profile URL — added within the same day as the landing page launch. This cross-reference, even on day one, signals to Google that the website entity and the GBP entity are the same real-world location. It accelerates entity recognition significantly compared to leaving the two data points unlinked.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  FAQPage and Service Schema for Day-One Discoverability
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The six FAQPage questions were drawn from actual client inquiries: &ldquo;Does INW Basecamp offer corporate team-building retreats in Arizona?&rdquo; &ldquo;What outdoor activities are available at the Arizona location?&rdquo; &ldquo;How many people can the Arizona facility accommodate?&rdquo; Each answer was written as a complete, standalone response — specific enough to be useful to AI systems, factual enough to be citable. These questions were placed in both the page content as visible Q&A blocks and in the FAQPage schema, ensuring consistency between what users see and what machines read.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Facebook Campaign Architecture
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Cold Audience Strategy for an Unknown Brand in a New Market
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The Facebook campaign launched the same day as the landing page, targeting a cold audience in the Phoenix and Scottsdale metro area. Audience parameters: business decision-makers aged 30 to 55, interests in corporate events, team building, and outdoor recreation, household income in the top quartile for the market. Creative: a 45-second video showcasing the Pacific Northwest facility with Arizona market-specific copy overlaid — the visual proof of concept that the brand&apos;s established quality would extend to the new location.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The goal of this initial campaign was not direct booking. It was pixel data accumulation and first-impression establishment. Every person who watched 50%+ of the video became a retargeting audience member. Every website visitor from the ad was pixeled. The conversion efficiency in weeks 5 and 6 of the campaign — when the anchor event&apos;s booking deadline created urgency — was dramatically higher because we had six weeks of warm audience data to retarget.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Lead Gen vs Direct Booking Decision
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  For a corporate retreat product at INW Basecamp&apos;s price point, direct booking CTAs — &ldquo;Book Now&rdquo; buttons — are the wrong call for cold audiences. The decision cycle for corporate retreat bookings involves multiple stakeholders, budget approval, and logistical review. Asking a cold prospect to book immediately produces almost no conversions and tells Facebook&apos;s algorithm the ads aren&apos;t working. We used lead generation forms instead — &ldquo;Request Information&rdquo; with a low-friction three-field form — which produced qualified leads at a cost the sales team could efficiently convert through the consultative process the product requires.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Same-Day Validation and Launch
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Zero Schema Errors on the First Submission
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The complete schema implementation — LocalBusiness, Service (two types), FAQPage, and BreadcrumbList — was validated in Google&apos;s Rich Results Test before the page went live. Zero errors. Zero warnings. This is the standard we hold every launch to, and it&apos;s achievable when schema is treated as architecture rather than an SEO afterthought. The page launched with every structured data signal in place, which meant Google could begin entity recognition from the first crawl rather than needing to revisit after schema errors were corrected.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  What the First 72 Hours Showed
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Within 24 hours, Google Search Console confirmed the Arizona landing page indexed. Within 48 hours, the FAQ rich results were appearing in Search Console&apos;s Enhancements report. Within 72 hours, branded searches for &ldquo;INW Basecamp Arizona&rdquo; were returning the landing page as the top result. The Facebook campaign had accumulated 847 video views and 23 landing page visits by hour 72 — a modest start, but the pixel data was building. By day 14, retargeting audiences were large enough to run conversion-focused campaigns. The new market had a digital presence, entity recognition, and an active ad pipeline — all from a single day of coordinated execution.
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
                  <p className="eyebrow mb-5 text-xs">LAUNCH DAY TIMELINE</p>
                  <div className="space-y-4">
                    {[
                      { step: 'Hour 1', label: 'Brief received, schema architecture mapped' },
                      { step: 'Hour 4', label: 'Landing page built and validated' },
                      { step: 'Hour 6', label: 'Schema: 0 errors, 0 warnings' },
                      { step: 'Hour 7', label: 'Site live, URL submitted to GSC' },
                      { step: 'Hour 8', label: 'Facebook campaign active' },
                      { step: 'Hour 24', label: 'Page indexed by Google' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3">
                        <div className="w-16 flex-shrink-0">
                          <span className="text-[#a0723a] text-xs font-bold font-poppins">{item.step}</span>
                        </div>
                        <p className="text-[#6a5a48] text-xs font-poppins leading-snug">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Expanding to a New Market?
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We build new market landing pages with day-one schema validation, Google Business Profile setup, and Facebook campaign launch — all in a single coordinated execution.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Plan Your Launch
                  </Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/how-we-indexed-49-pages-48-hours" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        How We Built Sites That Score 93–100 on PageSpeed
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">10 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/facebook-ads-local-business-2026" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          Facebook Ads for Local Service Businesses: The Flywheel Method
                        </p>
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

      <section className="py-20 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">LAUNCH WITH CONFIDENCE</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#0a0806] mb-4">
            New Market. Day-One Visibility.
          </h2>
          <p className="text-[#6a5a48] font-poppins mb-8 leading-relaxed">
            Whether you&apos;re expanding to a new city or launching a new service line, we build the digital foundation that makes AI search systems notice you from day one.
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

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schema Markup: The Complete Guide for Local Service Businesses',
  description:
    'A step-by-step guide to implementing JSON-LD schema markup that makes your business visible to AI. Covers LocalBusiness, Service, FAQPage, and BreadcrumbList schemas with real implementation details.',
  openGraph: {
    title: 'Schema Markup: The Complete Guide for Local Service Businesses',
    description:
      'Learn how to implement the four essential schema types that make your local business visible to Google AI Overviews, ChatGPT, and Perplexity.',
    url: 'https://www.kodecite.ai/blog/schema-markup-complete-guide',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Schema Markup: The Complete Guide for Local Service Businesses',
  description:
    'A step-by-step guide to implementing JSON-LD schema markup that makes your business visible to AI. Covers LocalBusiness, Service, FAQPage, and BreadcrumbList schemas with real implementation details.',
  datePublished: '2026-02-08',
  dateModified: '2026-02-08',
  wordCount: 1100,
  keywords: 'schema markup, JSON-LD, LocalBusiness schema, FAQPage schema, Service schema, BreadcrumbList, structured data, AI search, local SEO',
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
  url: 'https://kodecite.ai/blog/schema-markup-complete-guide',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/schema-markup-complete-guide',
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
      name: 'Schema Markup: The Complete Guide',
      item: 'https://kodecite.ai/blog/schema-markup-complete-guide',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is schema markup and why does it matter for local businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schema markup is structured data code (typically JSON-LD) embedded in your website that explicitly identifies your business entity, services, location, and other attributes to search engines and AI systems. It allows Google AI Overviews, ChatGPT, and Perplexity to read and cite your business accurately rather than guessing at what you offer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What schema types does a local service business need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four essential schema types for local service businesses are: LocalBusiness (entity identification with name, address, phone, and hours), Service (describing each service you offer), FAQPage (structured Q&A content that maps to conversational queries), and BreadcrumbList (site hierarchy signal for every page).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a WordPress plugin for schema markup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plugin-generated schema is better than none, but it frequently produces errors that Google\'s Rich Results Test flags as invalid. Hand-coded JSON-LD schema allows for precise property control and can be validated before launch to guarantee zero errors — which is significantly more effective for AI discoverability and rich result eligibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my schema is working correctly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test your pages in Google\'s Rich Results Test (search.google.com/test/rich-results) and the Schema.org validator. Both tools will identify errors and warnings. Zero errors and zero warnings on both tools means your structured data is being read correctly. Also monitor Google Search Console\'s Enhancements report for rich result eligibility signals.',
      },
    },
  ],
};

export default function SchemaMarkupGuide() {
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
            <span className="text-[#0a0806] truncate">Schema Markup Guide</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[#6a5a48] text-sm font-poppins">12 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            Schema Markup: The Complete Guide for{' '}
            <span className="text-[#a0723a]">Local Service Businesses</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            Schema markup is the language AI and search engines use to understand your business. Most local businesses either don&apos;t have it, have it wrong, or rely on plugins that generate it incorrectly. Here&apos;s how to do it right.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">KodeCite.ai</p>
                <p className="text-[#6a5a48] text-xs font-poppins">February 8, 2026</p>
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
                  Schema markup is the layer of structured data that sits between your website content and the machines that read it. Without it, a search engine or AI crawler encounters your page as a block of text and HTML with no explicit labels — it has to infer what your business is, what it does, and where it operates. With proper schema markup, you tell the machine directly. That directness is what gets you cited.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  What Schema Markup Actually Does
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  How Machines Read Your Website
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  When a Google crawler or AI system visits your website, it encounters HTML — headings, paragraphs, images, links. From this structure, it can infer some things: the page has a title, it has text content, it links to other pages. But without explicit labels, critical information is ambiguous. Is this an article or a product page? Is this address the business location or a client&apos;s address? Is this phone number a main line or a fax number?
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Schema markup, implemented as JSON-LD in a script tag, provides those labels. It says explicitly: this is a LocalBusiness entity, its name is X, its address is Y, its phone is Z, it offers these services, it operates during these hours. Machines don&apos;t have to infer — they can read. And content that is explicitly labeled is significantly more likely to be cited in AI-generated answers than content that requires inference.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Schema vs. HTML: Why Both Matter
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Schema markup and well-structured HTML are complementary signals, not substitutes. Your HTML heading hierarchy tells crawlers the structure and hierarchy of your content — what&apos;s a main topic, what&apos;s a subtopic, what&apos;s a paragraph. Schema tells crawlers the semantic meaning of entities — what type of thing the business is, what type of service a page describes, what the questions and answers mean in context.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A page with excellent heading structure but no schema gives AI systems structural information without entity context. A page with thorough schema but disorganized headings gives entity context without structural clarity. Both are required. Most local business websites are deficient in both — which is why most local businesses are invisible to AI search.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  LocalBusiness Schema: Your Digital Business Card
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The Required Properties Every Business Needs
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  LocalBusiness schema is the foundation. It identifies your business as a real-world entity with a physical presence, tells AI systems what type of business you are, and provides the core data that gets surfaced in knowledge panels, local packs, and AI-generated business summaries. At minimum, your LocalBusiness schema must include: name (the exact legal business name), address with streetAddress, addressLocality, addressRegion, and postalCode, telephone in E.164 format, url pointing to your canonical homepage, and openingHoursSpecification for each day of the week.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Beyond the minimum, include priceRange to give context on your market position, image linking to a professional business photo, and aggregateRating if you have review data. The more complete your LocalBusiness entity, the more confidently AI systems can describe your business in response to relevant queries — and the more likely they are to recommend you specifically rather than a category of businesses generally.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Service Area and Geographic Targeting
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  For service-area businesses — contractors, cleaners, landscapers, anyone who goes to the customer rather than the customer coming to them — areaServed is critical. This property explicitly tells AI systems which geographic areas you serve. Without it, AI systems may assume your business only serves customers who physically visit your location.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Implement areaServed as an array of Place objects, each with a name property for the city or region. For a business serving multiple cities, list each individually. This is the data that powers the &ldquo;near me&rdquo; inference — when someone in a city you serve asks an AI for your type of service, your areaServed data is what triggers the connection.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  The sameas Property and Entity Verification
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The sameas property is one of the most underused signals in local business schema. It links your website entity to your verified presence on authoritative external platforms — your Google Business Profile URL, your Yelp listing, your Facebook page, your Better Business Bureau profile. Each sameas link tells AI systems: this website entity and this verified external entity are the same business.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  This cross-referencing dramatically increases entity confidence. AI systems favor businesses they can verify through multiple authoritative sources. A website with five consistent sameas references looks significantly more credible to a machine than a site asserting its own identity with no external corroboration.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Service Schema: Telling AI What You Do
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Mapping Your Services to Schema Objects
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Each distinct service you offer should have its own page and its own Service schema object. A window cleaning company should have separate pages — and separate schema — for residential window cleaning, commercial window cleaning, pressure washing, gutter cleaning, and any other distinct offerings. Each Service schema includes a name, description, provider reference back to the LocalBusiness entity, and areaServed properties.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The description property is particularly important. Write it as a direct, specific answer to the question &ldquo;what does this service involve?&rdquo; — not as marketing copy. AI systems extract description text verbatim for use in generated summaries. A description that reads like a factual answer to a customer question is far more likely to be cited than one that reads like an ad.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Price Context Without Disclosing Your Rates
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Many local businesses resist adding price information to their schema because they don&apos;t want to publish exact rates. The offers property in Service schema supports priceRange — a string like &ldquo;$$&rdquo; or &ldquo;Starting from $150&rdquo; — that provides AI systems with market-positioning context without committing to specific pricing. When someone asks an AI &ldquo;how much does X service cost,&rdquo; businesses with price context in their schema have a meaningful advantage in being cited with a useful answer.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  FAQPage Schema: Structured Answers for AI Systems
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Writing Questions AI Systems Actually Use
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  FAQPage schema is the most direct bridge between your content and conversational AI queries. Each Question object in your FAQPage should mirror the exact phrasing a customer would use when asking an AI assistant — not a keyword-optimized phrase, but a natural spoken question. &ldquo;How much does gutter cleaning cost in Spokane?&rdquo; is better than &ldquo;Spokane gutter cleaning pricing.&rdquo; AI systems are trained on conversational language. Your questions should match that register.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The acceptedAnswer text should be a complete, standalone answer — one that makes sense if read without any other context. AI systems extract these answers to use as cited responses. An answer that says &ldquo;Yes, we do&rdquo; without context is useless. An answer that says &ldquo;Luxe Window Works provides residential gutter cleaning services throughout Post Falls, Coeur d&apos;Alene, and Spokane Valley — typically taking two to four hours for a standard single-story home&rdquo; is exactly what an AI needs to generate a specific, helpful, citable response.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Formatting FAQ Schema for Maximum Extraction
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Each service page should contain four to six FAQ items covering the questions customers most commonly ask before booking. Keep answer text between 40 and 120 words — long enough to be substantive, short enough to be extractable as a direct answer. Avoid HTML tags within the text property. Keep the language direct and factual. Validate every FAQPage object in Google&apos;s Rich Results Test before the page goes live.
                </p>

                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  BreadcrumbList Schema: The Site Hierarchy Signal
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Why Site Structure Matters for Authority
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  BreadcrumbList schema tells search engines and AI crawlers how your pages relate to each other — which pages are top-level, which are category-level, which are individual service or location pages. This hierarchical signal is how AI systems understand that your business has topical authority across a domain rather than having isolated pages that each need to be evaluated independently.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  A business with BreadcrumbList schema on every page communicates a coherent site architecture: Home → Services → Window Cleaning → Residential Window Cleaning. This hierarchy tells the AI that your residential window cleaning page is part of a comprehensive, organized site about window cleaning services — not a random page that happens to mention the topic. Topical coherence increases citation probability significantly.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-6 mb-3">
                  Implementing Breadcrumbs on Every Page
                </h3>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Every page on your site should have a BreadcrumbList schema object, not just certain pages. The implementation should mirror your visual breadcrumb navigation — if your page shows &ldquo;Home &rsaquo; Services &rsaquo; Window Cleaning&rdquo; in the UI, your schema should reflect exactly that path with the exact same labels and URLs. Consistency between visible navigation and schema markup is a trust signal that plugin-generated breadcrumbs frequently violate by using different text or URL formats.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Implementing all four schema types correctly — LocalBusiness, Service, FAQPage, and BreadcrumbList — is not a one-time project. It&apos;s the technical foundation your site either has or doesn&apos;t. With it, AI systems can read, understand, and cite your business accurately. Without it, they&apos;re guessing. And in a search environment where AI answers questions before users see a single link, guessing means invisible.
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
                  <p className="eyebrow mb-4 text-xs">SCHEMA TYPES COVERED</p>
                  <div className="space-y-3">
                    {[
                      { type: 'LocalBusiness', desc: 'Entity identification & NAP' },
                      { type: 'Service', desc: 'Per-service structured data' },
                      { type: 'FAQPage', desc: 'Conversational Q&A answers' },
                      { type: 'BreadcrumbList', desc: 'Site hierarchy signal' },
                    ].map((item) => (
                      <div key={item.type} className="flex items-start gap-3 p-3 bg-[#f8f5f0] rounded-lg border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-[#a0723a] mt-1.5 flex-shrink-0" />
                        <div>
                          <p className="text-[#0a0806] text-sm font-semibold font-poppins">{item.type}</p>
                          <p className="text-[#6a5a48] text-xs font-poppins mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Get Your Schema Validated
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We audit your existing schema markup, identify every error and missing property, and implement the complete four-type schema stack with zero validation errors.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Request a Schema Audit
                  </Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-zero-click-search" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        What Is Zero Click Search and Why Your Business Is Invisible
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">8 min read</p>
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
          <p className="eyebrow mb-4">BUILD THE FOUNDATION</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#0a0806] mb-4">
            Schema Is the Language AI Uses to Find You
          </h2>
          <p className="text-[#6a5a48] font-poppins mb-8 leading-relaxed">
            Most local businesses don&apos;t have schema. Of those that do, most have errors. A clean, validated schema implementation is one of the highest-leverage things you can do for AI search visibility right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Get Your Schema Implemented
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

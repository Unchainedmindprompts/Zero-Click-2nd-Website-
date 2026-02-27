import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get Your Local Business Featured in Google AI Overviews',
  description:
    'Google AI Overviews are replacing traditional search results for millions of queries. Here\'s the exact framework for getting local businesses cited as the source — not buried below it.',
  openGraph: {
    title: 'How to Get Your Local Business Featured in Google AI Overviews',
    description:
      'The technical and content framework that gets local businesses cited in Google AI Overviews instead of being filtered out.',
    url: 'https://zeroclickstrategies.com/blog/ai-overviews-local-businesses',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Your Local Business Featured in Google AI Overviews',
  description:
    'Google AI Overviews are replacing traditional search results for millions of queries. Here\'s the exact framework for getting local businesses cited as the source — not buried below it.',
  datePublished: '2026-02-18',
  dateModified: '2026-02-18',
  wordCount: 950,
  keywords: 'Google AI Overviews, AI search citations, answer engine optimization, AEO, local business AI visibility, featured in AI Overview, entity recognition, Core Web Vitals',
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
  url: 'https://zeroclickstrategies.com/blog/ai-overviews-local-businesses',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://zeroclickstrategies.com/blog/ai-overviews-local-businesses',
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
      name: 'How to Get Featured in Google AI Overviews',
      item: 'https://zeroclickstrategies.com/blog/ai-overviews-local-businesses',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google AI Overviews (formerly Search Generative Experience) are AI-generated summaries that appear at the top of Google search results, synthesizing information from multiple sources to answer a query directly. They cite sources but present a single cohesive answer, meaning most users never click through to individual websites — making citation in the overview itself the primary visibility goal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get my local business cited in Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key factors are technical and structural: fast page load times with LCP under 2.5 seconds, valid schema markup identifying your business type and services, clean HTML with proper heading hierarchy, content structured as direct answers to specific questions, and consistent NAP data across your web presence. AI Overviews favor businesses that look authoritative to machines, not just to human readers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be ranked number one to appear in Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AI Overviews synthesize from multiple sources across the top results, meaning a page ranking fifth or sixth can be cited if its content is well-structured and directly answers the query. Position matters, but content structure and schema validity often matter more for citation specifically. A page that ranks lower but has superior structured data is frequently cited over a higher-ranking page with poor structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is AI Overview visibility different from standard SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard SEO optimizes for click-through from a list of links. AI Overview optimization (Answer Engine Optimization or AEO) optimizes for being cited as the source inside a synthesized answer. This requires different content structure — direct answers rather than persuasive writing — explicit schema markup, and technical performance standards that traditional SEO does not emphasize.',
      },
    },
  ],
};

export default function AIOverviewsLocalBusinesses() {
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
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#8A9BB5] mb-8">
            <Link href="/" className="hover:text-[#D4A94A] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#D4A94A] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate">AI Overviews for Local Businesses</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[#8A9BB5] text-sm font-poppins">7 min read</span>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            How to Get Your Local Business{' '}
            <span className="text-[#D4A94A]">Featured in Google AI Overviews</span>
          </h1>

          <p className="text-[#8A9BB5] text-xl font-poppins leading-relaxed max-w-3xl">
            Google AI Overviews appear before every blue link for hundreds of millions of queries. If you&apos;re cited, you&apos;re the answer. If you&apos;re not, you don&apos;t exist for that searcher. Here&apos;s the exact framework.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4A94A] flex items-center justify-center">
                <span className="text-[#0F1E3C] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold font-poppins">Zero Click Strategies</p>
                <p className="text-[#8A9BB5] text-xs font-poppins">February 18, 2026</p>
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

            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#8A9BB5] text-lg leading-relaxed mb-8">
                  Google AI Overviews appear at the top of search results for hundreds of millions of queries every day — above the blue links, above the local pack, above everything else. They&apos;re the first thing a user sees. If your business is cited in an AI Overview for a relevant query, you&apos;re the answer. If you&apos;re not, you don&apos;t exist for that searcher. Here&apos;s how to get cited.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  How Google Selects AI Overview Sources
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  The Quality Signals That Determine Citation
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Google&apos;s AI Overview system selects sources from the same index it uses for organic search, applying additional filters for content clarity, entity reliability, and technical quality. A page doesn&apos;t just need to rank — it needs to rank and satisfy several additional criteria that make it suitable for synthesis into an AI-generated answer. Pages with fast load times, valid structured data, direct-answer content, and authoritative entity signals consistently outcompete slower, less structured pages for citation — even when the slower pages rank slightly higher in standard results.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The AI system needs to extract a clear, defensible answer from your page. If your content requires interpretive inference to produce an answer — if the information is present but buried in paragraphs of context, if the key fact appears only once without clear labeling, if the heading structure doesn&apos;t signal what the section is about — the AI may skip your page entirely for a competitor whose content is more explicitly structured.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Why Entity Recognition Is the Starting Point
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Before Google will cite your business in a local AI Overview, it needs to recognize your business as a verified real-world entity. Entity recognition happens through a combination of signals: your Google Business Profile listing, consistent NAP data across your website and major directories, LocalBusiness schema markup on your homepage, and sameas references linking your website entity to your verified external profiles. Businesses that lack these entity establishment signals are treated as unverified sources — and unverified sources are filtered out of AI Overview citation pools.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Technical Requirements for AI Overview Eligibility
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Page Speed and Core Web Vitals Thresholds
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The technical floor for AI Overview eligibility is clear in the data: pages that pass all three Core Web Vitals thresholds — LCP under 2.5 seconds, CLS under 0.1, INP under 200 milliseconds — appear in AI Overview citations at dramatically higher rates than pages that fail these thresholds. This is not correlation. Slow pages get smaller crawl budgets, rank lower in the base index, and provide AI systems with weaker quality signals. Every one of these effects reduces citation probability.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  For local service businesses still on WordPress with shared hosting, this is likely the single largest barrier to AI Overview visibility. A site that loads in 5 seconds on mobile has effectively excluded itself from the citation pool for the majority of high-intent local queries. The fix is a platform change — not a plugin tweak.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Schema Markup That Identifies Your Business
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Schema markup is the most direct way to communicate to AI systems what your business is and what it offers. LocalBusiness schema on your homepage establishes your entity. Service schema on each service page tells AI what specific services you provide and in which areas. FAQPage schema gives AI pre-structured answers it can extract and use verbatim. BreadcrumbList schema tells AI how your pages relate to each other and establishes topical authority across your site.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The schema must be valid — zero errors in Google&apos;s Rich Results Test. Plugin-generated schema with validation errors is worse than no schema in some cases, because errors signal to AI systems that the data is unreliable. Hand-code your schema, validate it before launch, and treat it as infrastructure rather than a one-time task.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Content That AI Overviews Actually Cite
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  The Direct Answer Format
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  AI Overview citations come disproportionately from content structured as direct answers — sentences that state a fact, answer a question, or describe a process in specific, extractable terms. The AI system is looking for text it can lift and use as a cited answer without modification. This means your content should lead with the answer, not build up to it. &ldquo;Window cleaning in Spokane typically costs $150 to $350 for a standard residential home&rdquo; is citable. &ldquo;If you&apos;re wondering about pricing, there are many factors to consider when evaluating the cost of window cleaning services&rdquo; is not.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Structuring Content for Machine Extraction
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Every H2 and H3 heading on your page should function as a question or a direct statement of what the following content answers. AI systems use heading structure to navigate content and identify which sections are relevant to specific queries. A heading that says &ldquo;Our Approach to Service Excellence&rdquo; gives AI no useful signal. A heading that says &ldquo;How Long Does a Window Cleaning Service Take?&rdquo; tells AI exactly what question the following paragraph answers — and makes that paragraph eligible for citation on queries about window cleaning service duration.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Local Business Signals That Boost Citation Probability
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  NAP Consistency Across the Web
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  NAP — Name, Address, Phone — consistency is a foundational local SEO signal that directly feeds AI entity recognition. When your business name, address, and phone number appear consistently across your website, Google Business Profile, Yelp, Facebook, BBB, and major local directories, AI systems can confidently merge all these data points into a single verified entity. Inconsistencies — different phone numbers, abbreviated versus spelled-out street names, doing business as names that don&apos;t match legal names — create entity fragmentation that reduces citation confidence and frequency.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Google Business Profile Optimization
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Your Google Business Profile is the primary entity anchor that Google uses to link your website to your real-world business. A complete, optimized GBP — with accurate categories, service descriptions, current photos, regularly collected reviews, and Q&A responses — dramatically increases the confidence with which Google&apos;s AI can describe your business and cite you in local queries. The GBP and your website should be treated as a single entity system, not separate channels.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Measuring and Improving Your AI Overview Presence
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How to Check if You&apos;re Being Cited
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The most direct method is manual: search your most important queries on Google — &ldquo;[service] in [city]&rdquo; — and observe whether an AI Overview appears and whether your business is cited in it. Google Search Console&apos;s Performance report now shows impressions from AI Overview appearances separately from standard organic results. Monitor both. A business that appears in AI Overviews for 10 high-intent local queries is capturing search attention that its competitors on page one of standard results are not.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Iterating Your Content for Better Extraction
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  If your pages are ranking but not being cited, the issue is usually content structure rather than technical performance. Audit the heading structure of your top-ranking pages and rewrite headings to function as explicit question-and-answer signals. Move key facts to the first sentence of paragraphs rather than burying them mid-paragraph. Add FAQPage schema to service pages with questions that directly match query patterns you&apos;re targeting. Test each changed page in Google&apos;s Rich Results Test, resubmit the URL in Search Console, and monitor AI Overview appearances over the following 30 days.
                </p>

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

                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">AI OVERVIEW CHECKLIST</p>
                  <div className="space-y-3">
                    {[
                      'LCP under 2.5s on mobile',
                      'Valid LocalBusiness schema',
                      'FAQPage schema on service pages',
                      'Direct-answer heading structure',
                      'Consistent NAP across web',
                      'Optimized Google Business Profile',
                      'sameas links to verified profiles',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded border border-[#D4A94A]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-sm bg-[#D4A94A]/40" />
                        </div>
                        <p className="text-[#8A9BB5] text-xs font-poppins leading-snug">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#162444] rounded-xl border border-[#D4A94A]/20 p-6">
                  <p className="font-poppins font-bold text-white text-lg mb-3 leading-snug">
                    Not Appearing in AI Overviews?
                  </p>
                  <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed mb-5">
                    We identify exactly which signals are blocking your AI Overview citations — and fix them with the same methodology that gets our clients cited consistently.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get a Citation Audit
                  </Link>
                </div>

                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-zero-click-search" className="block group">
                      <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                        What Is Zero Click Search and Why Your Business Is Invisible
                      </p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">8 min read</p>
                    </Link>
                    <div className="border-t border-white/10 pt-4">
                      <Link href="/blog/schema-markup-complete-guide" className="block group">
                        <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                          Schema Markup: The Complete Guide for Local Service Businesses
                        </p>
                        <p className="text-[#8A9BB5] text-xs font-poppins mt-1">12 min read</p>
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

      <section className="py-20 bg-[#0A1628] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">BECOME THE CITED SOURCE</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            AI Overviews Are Replacing the Blue Links
          </h2>
          <p className="text-[#8A9BB5] font-poppins mb-8 leading-relaxed">
            The businesses that will dominate local search in the next three years are the ones building for AI citation now. Let&apos;s make sure you&apos;re one of them.
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

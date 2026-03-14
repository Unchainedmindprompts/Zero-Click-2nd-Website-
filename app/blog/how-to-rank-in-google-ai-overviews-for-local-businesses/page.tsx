import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Rank in Google AI Overviews for Local Businesses | KodeCite.AI',
  description:
    'Learn how local businesses can appear in Google AI Overviews through structured data, schema markup, E-E-A-T signals, and AI-first content strategies.',
  alternates: {
    canonical: 'https://kodecite.ai/blog/how-to-rank-in-google-ai-overviews-for-local-businesses',
  },
  openGraph: {
    title: 'How to Rank in Google AI Overviews for Local Businesses',
    description:
      'Most local businesses are invisible to AI search. Here\'s exactly how to change that.',
    url: 'https://kodecite.ai/blog/how-to-rank-in-google-ai-overviews-for-local-businesses',
    type: 'article',
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Rank in Google AI Overviews for Local Businesses',
  description:
    'Learn how local businesses can appear in Google AI Overviews through structured data, schema markup, E-E-A-T signals, and AI-first content strategies.',
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    url: 'https://kodecite.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'KodeCite.AI',
    url: 'https://kodecite.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kodecite.ai/logo.png',
    },
  },
  datePublished: '2026-03-10',
  dateModified: '2026-03-10',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/how-to-rank-in-google-ai-overviews-for-local-businesses',
  },
  image: 'https://kodecite.ai/images/blog/ai-overviews-local-businesses.jpg',
  keywords: [
    'Google AI Overviews',
    'local SEO',
    'AI search optimization',
    'schema markup',
    'AEO',
    'answer engine optimization',
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do local businesses rank in Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local businesses rank in Google AI Overviews by implementing structured data (schema markup), publishing content that directly answers customer questions, maintaining consistent NAP information across the web, and building strong E-E-A-T signals through their website and Google Business Profile.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is schema markup and why does it matter for AI search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Schema markup is structured code added to a website that tells search engines and AI systems exactly what a business does, where it operates, and why it's credible. It allows AI systems to extract and verify business information with confidence, making it far more likely that business will be recommended in AI-generated results.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between traditional SEO and AI Overview optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Traditional SEO focuses on ranking in the blue link results through keywords and backlinks. AI Overview optimization focuses on becoming the trusted source that Google's AI pulls from to generate its answers — which requires structured data, direct question-and-answer content, and strong trust signals across the web.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is llms.txt and should my local business have one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'llms.txt is a simple file placed on your website that gives AI language models a structured summary of your business, content, and services. While not yet mainstream, early adopters who implement it now are establishing AI-readable authority before their competitors catch on.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://kodecite.ai',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://kodecite.ai/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Rank in Google AI Overviews for Local Businesses',
      item: 'https://kodecite.ai/blog/how-to-rank-in-google-ai-overviews-for-local-businesses',
    },
  ],
};

export default function HowToRankInGoogleAIOverviews() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-poppins text-[#6a5a48] mb-8">
            <Link href="/" className="hover:text-[#a0723a] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0a0806] truncate">How to Rank in Google AI Overviews</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[#6a5a48] text-sm font-poppins">10 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            How to Rank in Google AI Overviews{' '}
            <span className="text-[#a0723a]">for Local Businesses</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl">
            Google&apos;s AI is answering your customers&apos; questions before they ever reach your website. Most local businesses are invisible to it — but that&apos;s fixable. Here&apos;s exactly how.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">KC</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">March 10, 2026</p>
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

            {/* Article Content */}
            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                {/* ── What Is a Google AI Overview? ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  What Is a Google AI Overview?
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  A Google AI Overview is the AI-generated summary block that appears above all organic search results for millions of queries every day. It doesn&apos;t link to ten websites and let users decide — it synthesizes a direct answer and typically cites two or three sources it trusts most.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  For local service businesses, this is both a threat and an opportunity. If Google&apos;s AI picks your competitor as the trusted source for &ldquo;best plumber in [city]&rdquo; or &ldquo;how much does a roof replacement cost,&rdquo; your phone stops ringing — even if you have a perfect 5-star rating and 20 years in business.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  The businesses that show up in AI Overviews aren&apos;t necessarily the biggest or most established. They&apos;re the ones whose digital presence is structured so that AI can read, verify, and trust it. That&apos;s a technical problem with a technical solution.
                </p>

                {/* ── Why Local Businesses Are Being Left Out ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  Why Local Businesses Are Being Left Out
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  AI systems like Google&apos;s don&apos;t browse your website the way a human customer does. They send automated crawlers on a tight token budget. If your site is slow, poorly structured, or lacking machine-readable signals, the crawler moves on before it ever understands what you do or who you serve.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Most local business websites fail on three fronts simultaneously:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-[#4a3b2c]">
                  <li>
                    <strong className="text-[#0a0806]">No structured data</strong> — the site has no schema markup telling AI what the business is, where it operates, or what it offers.
                  </li>
                  <li>
                    <strong className="text-[#0a0806]">No direct answers</strong> — content is written for aesthetics, not for answering the specific questions customers type into AI search.
                  </li>
                  <li>
                    <strong className="text-[#0a0806]">Inconsistent presence</strong> — the business name, address, and phone number appear differently across directories, eroding AI confidence.
                  </li>
                </ul>

                {/* Comparison Table */}
                <div className="my-10 rounded-xl overflow-hidden border border-[rgba(100,70,30,0.2)]">
                  <div className="bg-[#1c1814] px-6 py-4">
                    <p className="font-poppins font-bold text-[rgba(240,232,216,0.9)] text-base tracking-wide">
                      Traditional SEO vs AI Overview Optimization
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-poppins">
                      <thead>
                        <tr className="bg-[#f2ede4]">
                          <th className="text-left px-6 py-3 font-semibold text-[#0a0806] border-b border-[rgba(100,70,30,0.2)] w-1/2">
                            Traditional SEO
                          </th>
                          <th className="text-left px-6 py-3 font-semibold text-[#a0723a] border-b border-[rgba(100,70,30,0.2)] w-1/2">
                            AI Overview Optimization
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Optimizes for keyword rankings', 'Optimizes for AI recommendation'],
                          ['Targets human readers', 'Targets both humans and AI systems'],
                          ['Focuses on backlinks and authority', 'Focuses on structured data and trust signals'],
                          ['Measures clicks and impressions', 'Measures citations and AI mentions'],
                          ['Page-level optimization', 'Site-wide schema and entity clarity'],
                        ].map(([left, right], i) => (
                          <tr
                            key={i}
                            className={i % 2 === 0 ? 'bg-[#f8f5f0]' : 'bg-[#f2ede4]'}
                          >
                            <td className="px-6 py-3.5 text-[#4a3b2c] border-b border-[rgba(100,70,30,0.08)]">
                              {left}
                            </td>
                            <td className="px-6 py-3.5 text-[#4a3b2c] border-b border-[rgba(100,70,30,0.08)]">
                              {right}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ── The Foundation: Structured Data and Schema Markup ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  The Foundation: Structured Data and Schema Markup
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Schema markup is JSON-LD code embedded in your website that translates your business information into a language AI systems understand natively. It doesn&apos;t change how your site looks to visitors — it adds an invisible layer of machine-readable context that crawlers read instantly.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Without it, AI has to guess what your business does based on unstructured text. With it, AI knows with certainty. That certainty is what earns citations.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  LocalBusiness Schema
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  This is the foundation. It declares your business name, address, phone number, service area, hours, and category in a format AI can verify against other data sources. If your LocalBusiness schema matches your Google Business Profile exactly, you become significantly more trustworthy in AI&apos;s eyes.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  Service Schema
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  List every service you offer as a distinct Service entity within your schema. Don&apos;t lump them together — a roofing company that declares separate services for shingle replacement, flat roof installation, and storm damage repair gives AI a much clearer picture than one that says &ldquo;we do roofing.&rdquo;
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  FAQPage Schema
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Every question-and-answer pair on your website is an opportunity to become the direct source for an AI-generated answer. FAQPage schema markup labels these pairs explicitly, making it trivial for AI to extract and cite your content when a user asks the same question.
                </p>

                <h3 className="font-poppins font-semibold text-xl text-[#0a0806] mt-8 mb-3">
                  BreadcrumbList Schema
                </h3>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Breadcrumb schema maps the logical hierarchy of your site. It helps AI understand how your content is organized and demonstrates that your site has depth and structure — both signals of a trustworthy, authoritative source.
                </p>

                {/* ── Content That Answers Real Questions ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  Content That Answers Real Questions
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Google&apos;s AI doesn&apos;t pull from the most beautifully designed page. It pulls from the page that most directly answers the question being asked. This means your content strategy needs to shift from impression-based writing to answer-based writing.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Think about the questions your customers ask before they hire you. &ldquo;How much does a bathroom remodel cost in [city]?&rdquo; &ldquo;What&apos;s the difference between a term and whole life policy?&rdquo; &ldquo;How long does it take to replace a roof?&rdquo;
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Each of those questions deserves a page — or at minimum a section — that answers it directly, in the first sentence, without preamble. AI Overviews reward directness. Structure your content with a clear question as the heading (H2 or H3) and the answer in the immediate following paragraph.
                </p>
                <div className="inw-callout my-8">
                  <p className="text-[#4a3b2c] font-poppins leading-relaxed">
                    <strong className="text-[#0a0806]">The one-content rule:</strong> Write one piece of content that answers your customers&apos; most common pre-hire question. Make it specific, make it local, and make it the most complete answer on the internet for that query. Then add FAQPage schema. That single page can become your most powerful AI citation driver.
                  </p>
                </div>

                {/* ── Consistency Across the Web ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  Consistency Across the Web
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  AI systems don&apos;t just read your website. They cross-reference your business identity against dozens of external data sources: Google Business Profile, Yelp, BBB, industry directories, social profiles, and citation aggregators. When your business name, address, and phone number (NAP) appear consistently across all of these, AI confidence in your identity increases dramatically.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Even small inconsistencies — &ldquo;Suite 100&rdquo; vs &ldquo;Ste. 100,&rdquo; or a phone number with and without the area code — introduce doubt. AI systems are probabilistic; they recommend what they&apos;re most confident about. Inconsistency reduces that confidence.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Audit every directory listing your business appears in. Your Google Business Profile is the anchor — match everything else to it exactly. Completeness matters too: a fully populated GBP (categories, services, description, photos, hours, Q&amp;A) carries significantly more weight than a sparse one.
                </p>

                {/* ── The Role of E-E-A-T ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  The Role of E-E-A-T
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  E-E-A-T — Experience, Expertise, Authoritativeness, and Trustworthiness — is Google&apos;s quality framework for evaluating content. It was originally a human quality reviewer guideline, but it now directly informs what Google&apos;s AI considers citation-worthy.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  For local businesses, E-E-A-T is built through:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-[#4a3b2c]">
                  <li>
                    <strong className="text-[#0a0806]">Named authorship</strong> — content attributed to a real person with verifiable credentials, not &ldquo;The Team.&rdquo;
                  </li>
                  <li>
                    <strong className="text-[#0a0806]">Reviews and reputation signals</strong> — consistent 4-star-plus ratings across Google, Yelp, and industry-specific platforms.
                  </li>
                  <li>
                    <strong className="text-[#0a0806]">Licenses, certifications, and associations</strong> — markup that declares these credentials is more powerful than just listing them in text.
                  </li>
                  <li>
                    <strong className="text-[#0a0806]">Original content</strong> — case studies, before-and-after project documentation, and local market insights that can only come from direct experience.
                  </li>
                </ul>

                {/* ── Optimizing for AI-First Discovery ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  Optimizing for AI-First Discovery
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Beyond schema and content, a new layer of AI-specific optimization is emerging. These aren&apos;t mainstream yet, which is exactly why acting now creates a durable competitive advantage.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  <strong className="text-[#0a0806]">llms.txt</strong> — A plain-text file placed at the root of your website that gives AI language models a structured, human-readable summary of your business, services, content hierarchy, and key pages. Think of it as a sitemap designed specifically for AI crawlers.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  <strong className="text-[#0a0806]">Token efficiency</strong> — AI crawlers operate on token budgets. Every unnecessary script, bloated plugin, and rendered JavaScript element consumes budget before the crawler reaches your core content. Clean, fast-loading Next.js or static-site architectures get fully indexed; bloated WordPress sites often get abandoned mid-crawl.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  <strong className="text-[#0a0806]">Entity clarity</strong> — Your business should be identifiable as a distinct entity across the web, not just a domain. This means consistent use of your exact business name in schema, social profiles, and citations — creating a clear knowledge graph node that AI systems can reference with confidence.
                </p>

                {/* ── A Practical Starting Point ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  A Practical Starting Point
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  The full scope of AI visibility optimization can feel overwhelming. It isn&apos;t — but it does require working through it in the right order. Start with the highest-leverage items that have the most immediate impact on AI confidence.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  First, audit your Google Business Profile. It is the single most influential data source for local AI decisions. Every field should be complete, every category accurate, and your primary service area explicitly defined.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  Second, implement LocalBusiness schema on your homepage and key service pages. This is the minimum viable schema stack — it signals to AI exactly what your business is and where it operates.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-6">
                  Third, publish one piece of content that directly answers a high-intent pre-hire question in your industry. Structure it with a question heading, direct answer, and FAQPage schema. This alone can earn your first AI citation.
                </p>

                {/* ── The Window Is Open — But Not Forever ── */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-4">
                  The Window Is Open — But Not Forever
                </h2>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  The businesses that will dominate AI search in 2027 are implementing their structured data stack right now, in 2026. AI systems build knowledge graphs over time — the earlier your business is established as a trusted entity, the harder it is for competitors to displace you.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-4">
                  This isn&apos;t theoretical. We&apos;ve watched local service businesses in competitive markets earn AI citations within weeks of implementing proper schema, content, and consistency strategies. The window is real, it&apos;s open, and it is closing as more businesses catch on.
                </p>
                <p className="text-[#4a3b2c] leading-relaxed mb-8">
                  The question isn&apos;t whether AI search will define local business visibility. It already does. The question is whether your business will be the answer AI recommends — or the one it doesn&apos;t know exists.
                </p>

                {/* ── Quick-Start Checklist ── */}
                <div className="my-10 bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-8">
                  <p className="eyebrow mb-6 text-xs justify-start">YOUR AI OVERVIEW QUICK-START CHECKLIST</p>
                  <ul className="space-y-4">
                    {[
                      'Audit your Google Business Profile — every field complete and accurate',
                      'Check NAP consistency across all directories and listings',
                      'Add LocalBusiness schema to your website',
                      'Write one piece of content answering your customers\' most common pre-hire question',
                      'Add an FAQ section with FAQPage schema markup',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded border-2 border-[#a0723a] bg-white flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#a0723a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-[#4a3b2c] font-poppins text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ Section */}
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mt-10 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6 mb-10">
                  {[
                    {
                      q: 'How do local businesses rank in Google AI Overviews?',
                      a: 'Local businesses rank in Google AI Overviews by implementing structured data (schema markup), publishing content that directly answers customer questions, maintaining consistent NAP information across the web, and building strong E-E-A-T signals through their website and Google Business Profile.',
                    },
                    {
                      q: 'What is schema markup and why does it matter for AI search?',
                      a: "Schema markup is structured code added to a website that tells search engines and AI systems exactly what a business does, where it operates, and why it's credible. It allows AI systems to extract and verify business information with confidence, making it far more likely that business will be recommended in AI-generated results.",
                    },
                    {
                      q: 'What is the difference between traditional SEO and AI Overview optimization?',
                      a: "Traditional SEO focuses on ranking in the blue link results through keywords and backlinks. AI Overview optimization focuses on becoming the trusted source that Google's AI pulls from to generate its answers — which requires structured data, direct question-and-answer content, and strong trust signals across the web.",
                    },
                    {
                      q: 'What is llms.txt and should my local business have one?',
                      a: 'llms.txt is a simple file placed on your website that gives AI language models a structured summary of your business, content, and services. While not yet mainstream, early adopters who implement it now are establishing AI-readable authority before their competitors catch on.',
                    },
                  ].map(({ q, a }, i) => (
                    <div key={i} className="border-b border-[rgba(100,70,30,0.15)] pb-6">
                      <h3 className="font-poppins font-semibold text-[#0a0806] text-base mb-2">{q}</h3>
                      <p className="text-[#4a3b2c] text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>

                {/* Back to blog */}
                <div className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#a0723a] font-semibold font-poppins hover:text-[#1a56db] transition-colors"
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

                {/* Key Stats */}
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs justify-start">BY THE NUMBERS</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">84%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">of AI Overview citations go to sites with schema markup</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">3×</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">more AI citations for businesses with consistent NAP data</p>
                    </div>
                    <div>
                      <p className="text-[#a0723a] font-bold text-3xl font-poppins">2–4 wks</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">average time to first AI citation after schema implementation</p>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Is Your Business Invisible to AI?
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    We audit your schema, content structure, and NAP consistency — then fix what&apos;s keeping you out of AI Overviews.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get Your Free Audit
                  </Link>
                </div>

                {/* Related Posts */}
                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs justify-start">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/schema-markup-complete-guide" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        Schema Markup: The Complete Guide for Local Service Businesses
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">12 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/what-is-zero-click-search" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          What Is Zero Click Search and Why Your Business Is Invisible
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">8 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/aeo-geo-making-seo-better" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          AEO + GEO Isn&apos;t Replacing SEO — It&apos;s Making It Better
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

      {/* CTA */}
      <section className="py-20 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">STOP BEING INVISIBLE</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#0a0806] mb-4">
            Ready to Become the Answer AI Cites?
          </h2>
          <p className="text-[#6a5a48] font-poppins mb-8 leading-relaxed">
            The structured data, content strategy, and entity clarity that earns AI citations takes less time to build than you think — and the competitive window won&apos;t stay open. Let&apos;s talk about your site.
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

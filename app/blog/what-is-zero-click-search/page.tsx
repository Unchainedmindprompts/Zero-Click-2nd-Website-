import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Is Zero Click Search and Why Your Business Is Invisible',
  description:
    'AI Overviews, ChatGPT, and Perplexity are answering questions without sending traffic to websites. Learn what zero click search means for your business and the exact steps to stay visible.',
  openGraph: {
    title: 'What Is Zero Click Search and Why Your Business Is Invisible',
    description:
      'AI Overviews, ChatGPT, and Perplexity are answering questions without sending traffic to websites. Learn what zero click search means for your business.',
    url: 'https://zeroclickstrategies.com/blog/what-is-zero-click-search',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Zero Click Search and Why Your Business Is Invisible',
  description:
    'AI Overviews, ChatGPT, and Perplexity are answering questions without sending traffic to websites. Learn what zero click search means for your business and the exact steps to stay visible.',
  datePublished: '2026-01-15',
  dateModified: '2026-02-27',
  wordCount: 850,
  keywords: 'zero click search, answer engine optimization, AEO, Google AI Overviews, ChatGPT search, Perplexity AI, local business SEO, schema markup',
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    url: 'https://www.zeroclickstrategies.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Zero Click Strategies',
    logo: {
      '@type': 'ImageObject',
      url: 'https://zeroclickstrategies.com/logo.png',
    },
  },
  url: 'https://zeroclickstrategies.com/blog/what-is-zero-click-search',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://zeroclickstrategies.com/blog/what-is-zero-click-search',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.zeroclickstrategies.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zeroclickstrategies.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'What Is Zero Click Search',
      item: 'https://zeroclickstrategies.com/blog/what-is-zero-click-search',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is zero click search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero click search refers to any search query that gets answered directly on the search results page without the user clicking through to a website. More than 60% of Google searches now end without a click, according to SparkToro research.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my website traffic dropping even though my rankings haven\'t changed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zero click search is likely the cause. Google AI Overviews, ChatGPT, and Perplexity are answering questions directly without sending users to websites. You may still rank but receive fewer clicks because AI is intercepting the traffic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Answer Engine Optimization (AEO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Answer Engine Optimization is the discipline of structuring your web presence so AI systems like Google AI Overviews, ChatGPT, and Perplexity can read, understand, and cite your business as the answer to relevant queries.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a business need to appear in Google AI Overviews?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To appear in Google AI Overviews your content needs clean HTML with proper heading hierarchies, schema markup that labels your content for machines, fast page load times, and authoritative direct answers to specific questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Perplexity AI different from Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perplexity AI is built specifically as a search replacement, crawling the web in real time and synthesizing answers with citations. Unlike Google it presents a single synthesized answer with two or three cited sources rather than a list of links.',
      },
    },
  ],
};

export default function WhatIsZeroClickSearch() {
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
            <span className="text-white truncate">What Is Zero Click Search</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO & AI Search</span>
            <span className="text-[#8A9BB5] text-sm font-poppins">8 min read</span>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            What Is Zero Click Search and{' '}
            <span className="text-[#D4A94A]">Why Your Business Is Invisible</span>
          </h1>

          <p className="text-[#8A9BB5] text-xl font-poppins leading-relaxed max-w-3xl">
            AI answers questions before users ever visit a website. If your business isn&apos;t structured for AI to read and cite, you&apos;re invisible to the fastest-growing search channel in history.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4A94A] flex items-center justify-center">
                <span className="text-[#0F1E3C] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold font-poppins">Zero Click Strategies</p>
                <p className="text-[#8A9BB5] text-xs font-poppins">January 15, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article + Sidebar */}
      <section className="py-16 bg-[#0d0d1a] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article Content */}
            <article className="lg:col-span-2">
              <div className="prose-content font-poppins">

                <p className="text-[#8A9BB5] text-lg leading-relaxed mb-8">
                  Open Google right now and search &ldquo;best window cleaning company near me.&rdquo; Before you see a single blue link, there&apos;s a block at the top of the page — Google&apos;s AI Overview — summarizing an answer, listing a few businesses, and giving users everything they need without ever leaving Google. That&apos;s zero click search. And if your business isn&apos;t the one being cited, you don&apos;t exist.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  What Zero Click Search Actually Means
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  The Definition of Zero Click Search
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Zero click search refers to any search query that gets answered directly on the search results page — without the user clicking through to a website. This isn&apos;t new. Featured snippets, knowledge panels, and local packs have been doing this for years. But in 2025, it accelerated dramatically. Google&apos;s AI Overviews rolled out to billions of users, synthesizing answers from across the web and delivering them in conversational, authoritative summaries at the top of results.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How Widespread Is Zero Click Search?
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Research from SparkToro found that more than 60% of Google searches now end without a click. For informational queries — &ldquo;how does X work,&rdquo; &ldquo;what is the best Y&rdquo; — that number is even higher. Users get the answer. They move on. Your website never saw them.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  This isn&apos;t a bug. It&apos;s the intended behavior of a search engine optimizing for user satisfaction. The question for your business is whether you&apos;re the source being cited in that answer — or whether you&apos;re invisible below it.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  AI Overviews: Google&apos;s Answer Engine
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How Google AI Overviews Work
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Google AI Overviews (formerly Search Generative Experience) use large language models to synthesize information from multiple sources and generate a single, comprehensive answer at the top of search results. The sources are cited — sometimes with a small link — but most users never click them. They read the summary and leave.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What Your Content Needs to Appear in AI Overviews
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  To appear in an AI Overview, your content needs to be structured in a way that Google&apos;s crawlers can parse and extract clearly. That means clean HTML with proper heading hierarchies, schema markup that labels your content for machines, fast page load times that allow complete crawling, and authoritative, direct answers to specific questions. A wall of unstructured text, a slow-loading WordPress, Wix, or Squarespace site, or a page without schema won&apos;t cut it.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  ChatGPT and Perplexity: The Other Search Engines You&apos;re Ignoring
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How ChatGPT Handles Business Search Queries
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Google isn&apos;t the only place this is happening. ChatGPT now processes over 100 million queries per day, and a growing percentage of them are business-related searches — &ldquo;find me a good contractor in Spokane,&rdquo; &ldquo;which accounting firms are best for small business,&rdquo; &ldquo;recommend a window cleaning service.&rdquo; ChatGPT answers these from its training data and browsing capability. It doesn&apos;t send users to a list of websites. It gives a recommendation.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  How Perplexity AI Is Replacing Traditional Search
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Perplexity AI goes further — it&apos;s built specifically as a search replacement, crawling the web in real time and synthesizing answers with citations. Its user base has grown to over 15 million monthly active users and climbing. Users ask Perplexity questions like they would a knowledgeable friend. It answers. It cites two or three sources. Those are the businesses that get the attention.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What All AI Search Platforms Have in Common
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Both platforms share the same requirement: they favor structured, authoritative, machine-readable content. They favor businesses that look like credible entities to a machine — with consistent NAP data (name, address, phone), schema markup identifying who you are and what you do, and content that directly answers specific questions. They do not favor businesses that built their web presence for humans in 2015 and never updated their technical foundation.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  What This Is Doing to Your Traffic
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Why Your Rankings Are Fine but Your Traffic Is Dropping
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  If you&apos;ve noticed your organic traffic declining over the last 12 months while your rankings haven&apos;t changed, zero click search is likely the cause. You&apos;re still ranking. But fewer users are clicking. The traffic that used to flow to your website now stays on Google, on ChatGPT, or on Perplexity. The businesses being cited in those AI answers — those are capturing the attention you used to get.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  The Local Business Problem
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The problem compounds for local service businesses specifically. Local searches — &ldquo;best [service] in [city]&rdquo; — are exactly the queries where AI Overviews and AI chatbots are most active. These are high-intent searches from people ready to hire. If an AI answers with your competitor&apos;s name and your competitor&apos;s phone number, the search journey ends before your website ever loads.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  How to Become the Answer Instead of the Also-Ran
                </h2>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  What Is Answer Engine Optimization (AEO)?
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Answer Engine Optimization (AEO) is the discipline of structuring your web presence so AI systems can read it, understand it, and cite it. It&apos;s not optional anymore — it&apos;s table stakes for businesses that want to remain visible as search behavior shifts.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  The Technical Foundation of AEO
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The foundation starts with schema markup: JSON-LD code embedded in your site that explicitly tells AI crawlers who you are, what you do, where you do it, and who vouches for you. LocalBusiness schema, Service schema, FAQPage schema — each one is a structured signal that makes your content more parseable and more citable.
                </p>
                <h3 className="font-poppins font-semibold text-xl text-white mt-6 mb-3">
                  Content Structure for AI Discoverability
                </h3>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  Beyond schema, your site needs to load fast (under 2.5 seconds to Largest Contentful Paint), have clean heading structure that machines can traverse, and contain content that directly and concisely answers questions your customers are actually asking. Not content written for algorithms. Content written as answers — in plain language, with clear context and specific details. The businesses that will thrive in the next five years of search are not the ones with the most backlinks or the most content. They&apos;re the ones that look authoritative to a machine.
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

                {/* Key Stats */}
                <div className="bg-[#111122] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">BY THE NUMBERS</p>
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-4">
                      <p className="text-[#D4A94A] font-bold text-3xl font-poppins">60%+</p>
                      <p className="text-[#8A9BB5] text-sm font-poppins mt-1">of Google searches end without a click</p>
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <p className="text-[#D4A94A] font-bold text-3xl font-poppins">100M+</p>
                      <p className="text-[#8A9BB5] text-sm font-poppins mt-1">daily queries on ChatGPT</p>
                    </div>
                    <div>
                      <p className="text-[#D4A94A] font-bold text-3xl font-poppins">15M+</p>
                      <p className="text-[#8A9BB5] text-sm font-poppins mt-1">monthly Perplexity users</p>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#111122] rounded-xl border border-[#D4A94A]/20 p-6">
                  <p className="font-poppins font-bold text-white text-lg mb-3 leading-snug">
                    Is Your Business Invisible to AI?
                  </p>
                  <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed mb-5">
                    We audit your site&apos;s schema, Core Web Vitals, and content structure to identify exactly where AI crawlers lose you — and fix it.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get Your Free Audit
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
                      <Link href="/blog/ai-overviews-local-businesses" className="block group">
                        <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                          How to Get Your Local Business Featured in Google AI Overviews
                        </p>
                        <p className="text-[#8A9BB5] text-xs font-poppins mt-1">7 min read</p>
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
          <p className="eyebrow mb-4">STOP BEING INVISIBLE</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Become the Answer AI Cites?
          </h2>
          <p className="text-[#8A9BB5] font-poppins mb-8 leading-relaxed">
            Reading about AEO is the first step. Having it implemented correctly is what changes your visibility. Let&apos;s talk about your site.
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

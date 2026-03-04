import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Your Website Is Burning Through AI Tokens — And Costing You Business',
  description:
    'AI agents crawl your site on a token budget. If your WordPress, Wix, or Squarespace site burns through that budget before answering the question, you don\'t get recommended. Here\'s what token-efficient looks like.',
  openGraph: {
    title: 'Why Your Website Is Burning Through AI Tokens — And Costing You Business',
    description:
      'AI agents operate on a token budget. Legacy platforms like WordPress and Wix burn through it before delivering your content — costing you recommendations.',
    url: 'https://zeroclickstrategies.com/blog/why-website-burning-ai-tokens',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Your Website Is Burning Through AI Tokens — And Costing You Business',
  description:
    'AI agents crawl your site on a token budget. If your WordPress, Wix, or Squarespace site burns through that budget before answering the question, you don\'t get recommended. Here\'s what token-efficient looks like.',
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
  wordCount: 1100,
  keywords: 'AI token budget, AI agent crawling, token-efficient website, WordPress AI visibility, Next.js AI search, AEO, answer engine optimization, AI recommendations, website performance AI',
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
  url: 'https://zeroclickstrategies.com/blog/why-website-burning-ai-tokens',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://zeroclickstrategies.com/blog/why-website-burning-ai-tokens',
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
      name: 'Why Your Website Is Burning Through AI Tokens',
      item: 'https://zeroclickstrategies.com/blog/why-website-burning-ai-tokens',
    },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI token budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When an AI agent crawls a website, it operates within a token budget — a limited number of units of information it can process in one session. Every line of code, image tag, script, and navigation element consumes tokens. If a site exhausts the budget before delivering the relevant content, the agent stops reading and moves on without recommending that business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do WordPress and Wix sites perform poorly for AI agent crawling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress loads dozens of plugins, each adding scripts and stylesheets before any content is delivered. Wix wraps everything in proprietary JavaScript that must execute before content is readable. Squarespace generates heavy page structures optimized for visual design, not content accessibility. All of these consume AI token budgets before the agent reaches the information it needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes a website token-efficient for AI agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A token-efficient website delivers relevant content immediately with minimal surrounding noise. Modern frameworks like Next.js use server-side rendering, meaning content is ready the moment an agent arrives — no JavaScript execution delay, no plugin stack, no unnecessary wrapper elements. The result is a site an AI agent can read completely, understand clearly, and cite confidently.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does token efficiency affect AI recommendations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If an AI agent cannot read your site completely within its token budget, it cannot extract the information needed to recommend your business. Token-efficient sites get read fully, understood clearly, and cited consistently. Token-inefficient sites get partially read or skipped entirely — which means they never appear in AI-generated recommendations regardless of how good their content is.',
      },
    },
  ],
};

export default function WhyWebsiteBurningAITokens() {
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
            <span className="text-white truncate">Why Your Website Is Burning Through AI Tokens</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Visibility</span>
            <span className="text-[#8A9BB5] text-sm font-poppins">7 min read</span>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Why Your Website Is Burning Through{' '}
            <span className="text-[#D4A94A]">AI Tokens — And Costing You Business</span>
          </h1>

          <p className="text-[#8A9BB5] text-xl font-poppins leading-relaxed max-w-3xl">
            There&apos;s a conversation happening right now that most business owners have no idea about. It&apos;s between AI agents and your website. And if your site is built on a legacy platform, that conversation is ending way too soon.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D4A94A] flex items-center justify-center">
                <span className="text-[#0F1E3C] font-bold text-sm font-poppins">ZC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold font-poppins">Zero Click Strategies</p>
                <p className="text-[#8A9BB5] text-xs font-poppins">March 3, 2026</p>
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
                  There&apos;s a conversation happening right now that most business owners have no idea about. It&apos;s not between people. It&apos;s between AI agents and your website. And if your site is built on WordPress, Wix, Squarespace, or any other legacy platform, there&apos;s a good chance that conversation is ending way too soon.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  How AI Agents Actually Discover Businesses
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  When someone asks ChatGPT, Perplexity, or any other AI-powered search tool to recommend a business, that AI doesn&apos;t just pull from a database. It sends agents out to crawl, read, and evaluate websites in real time — much like a very fast, very impatient researcher.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Here&apos;s the part most people don&apos;t know: those agents operate on a token budget.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Tokens are essentially the units of information an AI processes at one time. Every line of code, every image tag, every bloated script, every redundant navigation element on your website burns through that budget. And once the budget runs out, the agent stops reading and moves on — whether it found what it needed or not.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  If your website didn&apos;t answer the agent&apos;s question before the budget ran out, you don&apos;t get recommended. It&apos;s that simple.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  The Problem With WordPress, Wix, and Legacy Platforms
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  This is where platforms like WordPress, Wix, Squarespace, and similar builders create a real problem for modern business visibility.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  These platforms were built for a different era — one where the goal was looking good to human visitors on desktop browsers. They accomplish that reasonably well. But under the hood, they are notoriously bloated:
                </p>
                <ul className="space-y-3 mb-6 pl-4">
                  {[
                    'WordPress loads dozens of plugins, each adding their own scripts, stylesheets, and database calls before a single word of your content is delivered',
                    'Wix wraps everything in layers of proprietary JavaScript that has to execute before content becomes readable',
                    'Squarespace generates heavy page structures that prioritize visual design over content accessibility',
                    'All of these platforms produce pages loaded with unnecessary markup, redundant code, and third-party scripts that have nothing to do with answering a customer\'s question',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#8A9BB5] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A94A] flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  To a human visitor with a fast internet connection, these inefficiencies might cause a slight delay. To an AI agent working through a token budget, they&apos;re a wall.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  What Token-Efficient Websites Look Like
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  A token-efficient website delivers the right information as fast as possible with as little noise as possible. Think of it like a well-organized expert versus someone who rambles before getting to the point. The AI agent, like any busy professional, prefers the one who gets to the point.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Modern frameworks like Next.js were built with exactly this kind of performance in mind. Pages are server-rendered, meaning the content is ready to read the moment the agent arrives — no waiting for JavaScript to execute, no plugin stack to wade through, no unnecessary wrapper elements burning through the budget.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The result is a site that an AI agent can read completely, understand clearly, and cite confidently.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  Why This Is a Competitive Advantage Right Now
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Here&apos;s what makes this moment so important: most businesses haven&apos;t figured this out yet.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  Your competitors are still on WordPress. Their web developers are still optimizing for Google PageSpeed scores and human UX, which is fine — but it misses the new game entirely. AI discovery isn&apos;t just about having the right keywords anymore. It&apos;s about being the most readable, most efficient, most clearly structured source of information in your category.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  The businesses that build on AI-native infrastructure today will be the ones AI recommends tomorrow. And once an AI agent learns to trust and cite your site, that visibility compounds over time.
                </p>

                <h2 className="font-poppins font-bold text-2xl text-white mt-10 mb-4">
                  What You Should Be Asking Your Web Developer
                </h2>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  If you&apos;re working with a web developer or marketing agency and they&apos;re still defaulting to WordPress or Wix for new builds, ask them this:
                </p>
                <blockquote className="border-l-2 border-[#D4A94A] pl-6 my-8">
                  <p className="text-white font-poppins font-semibold text-lg leading-relaxed italic">
                    &ldquo;How does this site perform for AI agent crawling and token efficiency?&rdquo;
                  </p>
                </blockquote>
                <p className="text-[#8A9BB5] leading-relaxed mb-6">
                  If they don&apos;t know what you&apos;re talking about, that&apos;s your answer.
                </p>
                <p className="text-[#8A9BB5] leading-relaxed mb-8">
                  The shift from traditional SEO to AI-native visibility is already underway. The businesses that adapt their infrastructure now won&apos;t just survive that shift — they&apos;ll be the ones showing up in every AI recommendation in their market.
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
                  <p className="eyebrow mb-4 text-xs">TOKEN EFFICIENCY CHECKLIST</p>
                  <div className="space-y-3">
                    {[
                      'Server-side rendered content (Next.js)',
                      'No plugin bloat or third-party scripts',
                      'Content readable without JavaScript',
                      'Clean HTML with proper heading hierarchy',
                      'Minimal wrapper elements',
                      'Fast TTFB (time to first byte)',
                      'Valid schema markup — zero errors',
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
                    Is Your Site Burning AI Tokens?
                  </p>
                  <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed mb-5">
                    We audit your site&apos;s AI crawlability and token efficiency — and show you exactly what&apos;s costing you recommendations.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get a Free Discovery Call
                  </Link>
                </div>

                <div className="bg-[#162444] rounded-xl border border-white/5 p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/wordpress-losing-ai-search" className="block group">
                      <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                        Why WordPress Sites Are Losing the AI Search War
                      </p>
                      <p className="text-[#8A9BB5] text-xs font-poppins mt-1">6 min read</p>
                    </Link>
                    <div className="border-t border-white/10 pt-4">
                      <Link href="/blog/vercel-vs-wordpress-performance" className="block group">
                        <p className="text-white text-sm font-semibold font-poppins leading-snug group-hover:text-[#D4A94A] transition-colors">
                          Next.js vs. WordPress: Real Performance Numbers for Local Businesses
                        </p>
                        <p className="text-[#8A9BB5] text-xs font-poppins mt-1">8 min read</p>
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
          <p className="eyebrow mb-4">BUILD FOR HOW AI DISCOVERS YOU</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Stop Burning AI Tokens. Start Getting Recommended.
          </h2>
          <p className="text-[#8A9BB5] font-poppins mb-8 leading-relaxed">
            Zero Click Strategies builds AI-native websites and content systems designed specifically for how AI discovers and recommends businesses. If you want to understand how your current site performs for AI visibility, let&apos;s talk.
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

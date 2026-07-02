import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const URL = 'https://www.kodecite.ai/blog/google-reviews-wont-save-you-from-ai-search';

export const metadata: Metadata = {
  title: "Your Google Reviews Won't Save You From AI Search",
  description:
    'Reviews win the Google map pack. They do not win AI answers. Why a North Idaho business with 1,375 reviews can still be invisible to ChatGPT — and what actually gets you recommended.',
  alternates: { canonical: URL },
  openGraph: {
    title: "Your Google Reviews Won't Save You From AI Search",
    description:
      'Why a North Idaho business with 1,375 reviews can still be invisible to ChatGPT — and what actually gets you cited by AI answer engines.',
    url: URL,
    type: 'article',
    publishedTime: '2026-07-02',
    authors: ['Mark Abplanalp'],
    images: [{ url: 'https://www.kodecite.ai/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Google Reviews Won't Save You From AI Search",
    description:
      'Why a North Idaho business with 1,375 reviews can still be invisible to ChatGPT — and what actually gets you cited by AI answer engines.',
    images: ['https://www.kodecite.ai/og-image.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${URL}#article`,
  headline: "Your Google Reviews Won't Save You From AI Search",
  description:
    'Reviews win the Google map pack; they do not win AI answers. A North Idaho business with 1,375 five-star reviews can still be invisible to ChatGPT, because AI recommendation depends on machine-readable structure, not star count — here is the evidence and what actually gets you cited.',
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: blogCollectionPage,
  datePublished: '2026-07-02T00:00:00-07:00',
  dateModified: '2026-07-02T00:00:00-07:00',
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  url: URL,
  image: { '@type': 'ImageObject', url: 'https://www.kodecite.ai/og-image.png', width: 1200, height: 630 },
  articleSection: 'AEO & AI Search',
  wordCount: 1850,
  keywords: [
    'Google reviews', 'AI search visibility', 'AI Overviews', 'answer engine optimization',
    'local SEO', 'ChatGPT local recommendations', 'entity graph', 'structured data',
    'North Idaho', 'Spokane', 'map pack',
  ],
  about: [
    { '@type': 'DefinedTerm', name: 'Answer Engine Optimization' },
    { '@type': 'DefinedTerm', name: 'AI Search Visibility' },
    { '@type': 'DefinedTerm', name: 'Google Reviews' },
    { '@type': 'DefinedTerm', name: 'Local Search' },
    { '@type': 'DefinedTerm', name: 'Structured Data' },
    businessRef,
  ],
  mentions: [
    { '@type': 'Organization', name: 'OpenAI (ChatGPT)', url: 'https://openai.com', sameAs: 'https://www.wikidata.org/wiki/Q21708200' },
    { '@type': 'Organization', name: 'Perplexity', url: 'https://www.perplexity.ai' },
    { '@type': 'Organization', name: 'Google', url: 'https://www.google.com', sameAs: 'https://www.wikidata.org/wiki/Q95' },
    { '@type': 'Thing', name: 'Google AI Overviews', url: 'https://blog.google/products/search/ai-overviews-and-ai-mode/' },
    { '@type': 'Organization', name: 'Google Gemini', url: 'https://gemini.google.com' },
    { '@type': 'Organization', name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com' },
    { '@type': 'Organization', name: 'BrightLocal', url: 'https://www.brightlocal.com' },
    { '@type': 'Organization', name: 'Local Falcon', url: 'https://www.localfalcon.com' },
    { '@type': 'Organization', name: 'Ahrefs', url: 'https://ahrefs.com' },
    { '@type': 'Organization', name: 'Semrush', url: 'https://www.semrush.com' },
    { '@type': 'Organization', name: 'Vercel', url: 'https://vercel.com' },
    { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' },
    { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington' },
    { '@type': 'AdministrativeArea', name: 'North Idaho', sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle' },
  ],
  citation: [
    { '@type': 'Report', name: 'Local Consumer Review Survey 2026: AI & Trust', url: 'https://www.brightlocal.com/research/lcrs-ai-trust/', publisher: { '@type': 'Organization', name: 'BrightLocal' } },
    { '@type': 'Report', name: 'The Impact of Google AI Overviews on Local Business Search Visibility', url: 'https://www.localfalcon.com/blog/whitepaper-studies-the-impact-of-google-ai-overviews-on-local-business-search-visibility', publisher: { '@type': 'Organization', name: 'Local Falcon' } },
    { '@type': 'TechArticle', name: 'Does Ranking Higher on Google Mean You’ll Get Cited in AI Overviews?', url: 'https://ahrefs.com/blog/does-ranking-higher-on-google-mean-youll-get-cited-in-ai-overviews/', publisher: { '@type': 'Organization', name: 'Ahrefs' } },
    { '@type': 'TechArticle', name: 'AI Search Citation Overlap Study', url: 'https://ahrefs.com/blog/ai-search-overlap/', publisher: { '@type': 'Organization', name: 'Ahrefs' } },
    { '@type': 'TechArticle', name: 'Google AI Overview Citations From Top-Ranking Pages Drop Sharply', url: 'https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/', publisher: { '@type': 'Organization', name: 'Search Engine Journal' } },
    { '@type': 'TechArticle', name: 'The Rise of the AI Crawler', url: 'https://vercel.com/blog/the-rise-of-the-ai-crawler', publisher: { '@type': 'Organization', name: 'Vercel' } },
    { '@type': 'TechArticle', name: 'Technical SEO Impact on AI Search: A Study of 5M URLs', url: 'https://www.semrush.com/blog/technical-seo-impact-on-ai-search-study/', publisher: { '@type': 'Organization', name: 'Semrush' } },
    { '@type': 'TechArticle', name: 'Content Optimization for AI Search: A Study of ~12,000 Prompts', url: 'https://www.semrush.com/blog/content-optimization-ai-search-study/', publisher: { '@type': 'Organization', name: 'Semrush' } },
    { '@type': 'WebPage', name: 'Improve your local ranking on Google (Business Profile Help)', url: 'https://support.google.com/business/answer/7091?hl=en', publisher: { '@type': 'Organization', name: 'Google' } },
    { '@type': 'WebPage', name: 'Google Local Algorithm & Ranking Factors', url: 'https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/', publisher: { '@type': 'Organization', name: 'BrightLocal' } },
    { '@type': 'ScholarlyArticle', name: 'GEO: Generative Engine Optimization', url: 'https://arxiv.org/abs/2311.09735', publisher: { '@type': 'Organization', name: 'Princeton University & Georgia Tech' } },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${URL}#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do Google reviews help with AI search visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not directly. In our test, a Coeur d’Alene-area HVAC company with 1,375 five-star reviews was named in zero of four ChatGPT queries for its core services — ChatGPT instead recommended seven other local companies. Reviews strongly influence the Google map pack, but AI answer engines decide who to name based on machine-readable structure and clear entity signals — not star count.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why doesn’t my business show up in ChatGPT even though I rank on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because AI answers don’t mirror Google rankings. Ahrefs found only a 0.347 correlation between a Google top-10 ranking and being cited in AI Overviews, and just ~11% citation overlap between AI assistants and Google/Bing’s top 10. Ranking well is not the same as being cited by AI.',
      },
    },
    {
      '@type': 'Question',
      name: 'What actually makes AI recommend a local business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A machine-readable foundation: server-rendered content AI crawlers can read (GPTBot, ClaudeBot, and PerplexityBot don’t run JavaScript), a connected structured-data / entity graph, and clear, answer-first, fact-backed content. In Semrush’s analysis of 5 million cited URLs, Organization, Article, and BreadcrumbList schema were the structured-data types that appeared most often on the pages AI engines cite.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: "Your Google Reviews Won't Save You From AI Search", item: URL },
  ],
};

const link = 'text-[var(--d-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity';

const faqItems = [
  {
    q: 'Do Google reviews help with AI search visibility?',
    a: 'Not directly. In our test, a Coeur d’Alene-area HVAC company with 1,375 five-star reviews was named in zero of four ChatGPT queries for its core services — ChatGPT instead recommended seven other local companies. Reviews strongly influence the Google map pack, but AI answer engines decide who to name based on machine-readable structure and clear entity signals — not star count.',
  },
  {
    q: 'Why doesn’t my business show up in ChatGPT even though I rank on Google?',
    a: 'Because AI answers don’t mirror Google rankings. Ahrefs found only a 0.347 correlation between a Google top-10 ranking and being cited in AI Overviews, and just ~11% citation overlap between AI assistants and Google/Bing’s top 10. Ranking well is not the same as being cited by AI.',
  },
  {
    q: 'What actually makes AI recommend a local business?',
    a: 'A machine-readable foundation: server-rendered content AI crawlers can read (GPTBot, ClaudeBot, and PerplexityBot don’t run JavaScript), a connected structured-data / entity graph, and clear, answer-first, fact-backed content. In Semrush’s analysis of 5 million cited URLs, Organization, Article, and BreadcrumbList schema were the types that appeared most often on the pages AI engines cite.',
  },
];

const sources: [string, string][] = [
  ['BrightLocal — Local Consumer Review Survey 2026: AI & Trust', 'https://www.brightlocal.com/research/lcrs-ai-trust/'],
  ['Local Falcon — The Impact of Google AI Overviews on Local Business Search Visibility', 'https://www.localfalcon.com/blog/whitepaper-studies-the-impact-of-google-ai-overviews-on-local-business-search-visibility'],
  ['Ahrefs — Does Ranking Higher on Google Mean You’ll Get Cited in AI Overviews?', 'https://ahrefs.com/blog/does-ranking-higher-on-google-mean-youll-get-cited-in-ai-overviews/'],
  ['Ahrefs — AI Search Citation Overlap Study', 'https://ahrefs.com/blog/ai-search-overlap/'],
  ['Search Engine Journal — AI Overview Citations From Top-Ranking Pages Drop Sharply', 'https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/'],
  ['Vercel — The Rise of the AI Crawler', 'https://vercel.com/blog/the-rise-of-the-ai-crawler'],
  ['Semrush — Technical SEO Impact on AI Search (5M URLs)', 'https://www.semrush.com/blog/technical-seo-impact-on-ai-search-study/'],
  ['Semrush — Content Optimization for AI Search (~12,000 prompts)', 'https://www.semrush.com/blog/content-optimization-ai-search-study/'],
  ['Google Business Profile Help — Improve your local ranking on Google', 'https://support.google.com/business/answer/7091?hl=en'],
  ['BrightLocal — Google Local Algorithm & Ranking Factors', 'https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/'],
  ['Princeton & Georgia Tech — GEO: Generative Engine Optimization (arXiv)', 'https://arxiv.org/abs/2311.09735'],
];

export default function GoogleReviewsWontSaveYou() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-36 pb-16 bg-[var(--d-bg)] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm font-inter text-[var(--d-fg-dim)] mb-8">
            <Link href="/" className="hover:text-[var(--d-accent)] transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/blog" className="hover:text-[var(--d-accent)] transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[var(--d-fg)] truncate">Your Google Reviews Won&apos;t Save You From AI Search</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AEO &amp; AI Search</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">9 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            Your Google Reviews{' '}
            <span className="text-[var(--d-accent)]">Won&apos;t Save You From AI Search</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            Why a North Idaho business with 1,375 reviews can still be invisible to ChatGPT — and
            what actually gets you recommended.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[var(--d-line)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-inter">MA</span>
              </div>
              <div>
                <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
                <p className="text-[var(--d-fg-dim)] text-xs font-inter">July 2, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Body + Sidebar ──────────────────────────────────── */}
      <section className="py-16 bg-[var(--d-bg)] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Article body ─────────────────────────────── */}
            <article className="lg:col-span-2">
              <div className="prose-content font-inter">

                <p className="text-[var(--d-fg)] leading-relaxed mb-6 font-medium text-lg">
                  Reviews win the Google map pack. They do not win AI answers.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  When a customer asks ChatGPT or Perplexity for the best business in your town, the AI doesn&apos;t
                  rank by star count — it names the businesses it can <em>read and verify</em>. A North Idaho company
                  with 1,375 five-star reviews can still go unnamed, because AI recommendation depends on
                  machine-readable structure, not reputation. Here&apos;s the evidence.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">People are asking AI now — not just Google</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  This isn&apos;t a someday problem. In{' '}
                  <a href="https://www.brightlocal.com/research/lcrs-ai-trust/" target="_blank" rel="noopener noreferrer" className={link}>BrightLocal&apos;s 2026 Local Consumer Review Survey</a>,{' '}
                  <strong className="text-[var(--d-fg)]">45% of consumers said they now use AI tools like ChatGPT, Google&apos;s AI Mode, or Gemini to find local
                  business recommendations — up from just 6% a year earlier.</strong> ChatGPT led at 31%, Google&apos;s AI
                  Mode at 23%.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  And it&apos;s showing up inside regular search too: a{' '}
                  <a href="https://www.localfalcon.com/blog/whitepaper-studies-the-impact-of-google-ai-overviews-on-local-business-search-visibility" target="_blank" rel="noopener noreferrer" className={link}>Local Falcon whitepaper</a>{' '}
                  found Google AI Overviews appeared in <strong className="text-[var(--d-fg)]">40.2% of local-business queries</strong> — and higher still for
                  high-commercial service categories (over 60% in categories like cleaning and legal), which is exactly
                  where most local service businesses live. When someone Googles &ldquo;best HVAC company in Coeur
                  d&apos;Alene,&rdquo; an AI-generated answer increasingly sits above the old blue links — and it names a
                  handful of businesses before the customer ever scrolls.
                </p>
                <p className="text-[var(--d-fg)] leading-relaxed mb-6 font-medium">
                  If your business isn&apos;t one of the names, you&apos;re not losing the click. You&apos;re losing the <em>consideration.</em>
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">The paradox: a thousand reviews, still invisible</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  We recently ran a test: we asked ChatGPT the questions its customers actually ask — starting with the best
                  HVAC company in Coeur d&apos;Alene — and looked at who it named. One of the businesses we checked is the
                  area&apos;s #1-reviewed HVAC company: <strong className="text-[var(--d-fg)]">1,375 five-star Google reviews</strong>, the clear market
                  leader. By every traditional measure, they&apos;ve won — they dominate the map pack.
                </p>

                <blockquote className="my-8 border-l-2 border-[var(--d-accent)] pl-6">
                  <p className="font-inter text-[var(--d-fg)] text-lg md:text-xl leading-relaxed italic">
                    Asked for the best HVAC company in Coeur d&apos;Alene, ChatGPT recommended seven local businesses. The one
                    with 1,375 five-star reviews — the clear market leader — wasn&apos;t one of them.
                  </p>
                </blockquote>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Across four ChatGPT queries for its core services, the market leader was named <strong className="text-[var(--d-fg)]">zero times</strong> —
                  ChatGPT instead recommended seven other local companies. The reason is structural. Their reviews live on
                  Google Maps. Their website runs on a page-builder with plugin-generated markup — no connected,
                  machine-readable identity for an AI to read. So ChatGPT had thousands of reasons to <em>trust</em> them on
                  Google Maps and almost nothing to <em>cite</em> them with in an answer.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  More reviews didn&apos;t help. That&apos;s not a fluke — it&apos;s how the two systems actually work.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">Reviews are a <em>map pack</em> signal, not an <em>AI citation</em> signal</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Here&apos;s the part most business owners never hear: Google reviews and AI recommendations are two
                  different machines. Reviews are one of the strongest drivers of the{' '}
                  <strong className="text-[var(--d-fg)]">local pack / Google Maps.</strong> Google&apos;s own{' '}
                  <a href="https://support.google.com/business/answer/7091?hl=en" target="_blank" rel="noopener noreferrer" className={link}>Business Profile documentation</a>{' '}
                  says local ranking is based on &ldquo;relevance, distance, and prominence,&rdquo; and that &ldquo;more reviews
                  and positive ratings can help your business&apos;s local ranking.&rdquo; In the{' '}
                  <a href="https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/" target="_blank" rel="noopener noreferrer" className={link}>expert-consensus local ranking factors</a>,
                  review signals carry roughly <strong className="text-[var(--d-fg)]">15–20% of the weight</strong> for the map pack — meaningful, but behind
                  Google Business Profile and on-page signals.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  But that&apos;s the <em>map pack.</em> AI answer engines are a separate system with a different weighting —
                  and they&apos;re not reading your star count to decide who to name. Reviews are worth having. They&apos;re just
                  not the lever you think they are for AI.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">AI answers don&apos;t even work like Google rankings</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  You might assume &ldquo;well, if I rank #1 on Google, the AI will just cite me.&rdquo; It won&apos;t reliably do
                  that either.
                </p>
                <ul className="flex flex-col gap-3 mb-6 pl-5 list-disc marker:text-[var(--d-accent)]">
                  <li className="text-[var(--d-fg-dim)] leading-relaxed">
                    <a href="https://ahrefs.com/blog/does-ranking-higher-on-google-mean-youll-get-cited-in-ai-overviews/" target="_blank" rel="noopener noreferrer" className={link}>Ahrefs analyzed 1 million keywords</a>{' '}
                    and found the correlation between ranking in Google&apos;s top 10 and being cited in AI Overviews was only{' '}
                    <strong className="text-[var(--d-fg)]">0.347</strong> — &ldquo;even pages ranking #1 only appear in the top three cited links in AI Overviews about
                    50% of the time.&rdquo;
                  </li>
                  <li className="text-[var(--d-fg-dim)] leading-relaxed">
                    Across AI assistants,{' '}
                    <a href="https://ahrefs.com/blog/ai-search-overlap/" target="_blank" rel="noopener noreferrer" className={link}>the citation overlap with Google and Bing&apos;s top 10 is just 11% on average</a>{' '}
                    (Perplexity is the outlier at ~28.6%).
                  </li>
                  <li className="text-[var(--d-fg-dim)] leading-relaxed">
                    And the trend is accelerating:{' '}
                    <a href="https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/" target="_blank" rel="noopener noreferrer" className={link}>only 38% of pages cited in Google AI Overviews also ranked in the top 10 — down from 76% seven months earlier.</a>
                  </li>
                </ul>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Translation: neither your reviews nor your Google ranking guarantees the AI will name you. It&apos;s a
                  different game with different rules.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">What AI actually rewards: structure it can read</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  So what <em>does</em> get you cited? Machine-readable structure. Two hard findings make this concrete.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  <strong className="text-[var(--d-fg)]">AI crawlers mostly can&apos;t run your website.</strong>{' '}
                  <a href="https://vercel.com/blog/the-rise-of-the-ai-crawler" target="_blank" rel="noopener noreferrer" className={link}>Vercel&apos;s analysis of AI crawler behavior</a>{' '}
                  found that GPTBot, ClaudeBot, and PerplexityBot <strong className="text-[var(--d-fg)]">do not execute JavaScript</strong> — they read the raw HTML your
                  server sends. If your site renders its content with JavaScript in the browser (as many builder platforms
                  do), those crawlers can arrive at a nearly blank page. (Google&apos;s own crawler <em>does</em> render
                  JavaScript, which is part of why a site can look fine to Google and be invisible to the pure-AI crawlers.)
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  <strong className="text-[var(--d-fg)]">Structured data shows up on the pages AI cites.</strong>{' '}
                  <a href="https://www.semrush.com/blog/technical-seo-impact-on-ai-search-study/" target="_blank" rel="noopener noreferrer" className={link}>Semrush&apos;s study of 5 million cited URLs</a>{' '}
                  found Organization, Article, and BreadcrumbList schema appear most frequently on pages AI engines cite. In
                  a{' '}
                  <a href="https://www.semrush.com/blog/content-optimization-ai-search-study/" target="_blank" rel="noopener noreferrer" className={link}>separate Semrush study of nearly 12,000 prompts</a>,
                  the strongest correlations with AI citation were content-quality signals: clarity (<strong className="text-[var(--d-fg)]">+32.83%</strong>),
                  E-E-A-T signals (<strong className="text-[var(--d-fg)]">+30.64%</strong>), and Q&amp;A formatting (<strong className="text-[var(--d-fg)]">+25.45%</strong>) — while promotional, salesy tone
                  correlated negatively.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  And the academic work agrees. The peer-reviewed{' '}
                  <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer" className={link}>GEO study from Princeton and Georgia Tech</a>{' '}
                  (KDD 2024) showed that adding statistics, citations, and quotations can boost visibility in AI answers by{' '}
                  <strong className="text-[var(--d-fg)]">up to 40%</strong> — while keyword stuffing, the old traditional-SEO trick, did nothing.
                </p>
                <p className="text-[var(--d-fg)] leading-relaxed mb-6 font-medium">
                  Reviews build human trust. Structure builds <em>machine</em> trust. AI answers run on the second one.
                </p>

                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-12 mb-5">What this means for your business</h2>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  If you&apos;ve poured years into earning reviews, keep them — they still win the map pack, and they still
                  matter to human buyers. But understand what they <em>won&apos;t</em> do: they will not, on their own, make an
                  AI name you when a customer asks for a recommendation.
                </p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The businesses that get cited by AI aren&apos;t the ones with the most reviews. They&apos;re the ones an AI can{' '}
                  <em>read, verify, and quote</em> — because their website is built as machine-readable infrastructure, not a
                  brochure. That&apos;s the gap. And right now, across North Idaho and Spokane, almost no local business has
                  closed it.
                </p>

                {/* ── FAQ ────────────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl md:text-3xl text-[var(--d-fg)] mt-16 mb-6">Frequently asked questions</h2>
                <div className="flex flex-col gap-5">
                  {faqItems.map((item, i) => (
                    <div key={i} className="border-t border-[var(--d-line)] pt-5">
                      <p className="font-inter font-semibold text-[var(--d-fg)] mb-2">{item.q}</p>
                      <p className="font-inter text-[var(--d-fg-dim)] text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>

                {/* ── Sources ────────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-16 mb-6">Sources</h2>
                <ul className="flex flex-col gap-2.5">
                  {sources.map(([name, url]) => (
                    <li key={url} className="text-sm leading-relaxed">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] hover:underline break-words">
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-bold text-[var(--d-fg)] text-lg mb-3 leading-snug">
                    Are you one of the names?
                  </p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">
                    A free Machine Read shows how you show up across ChatGPT, Perplexity, Google AI, Bing Copilot, and Gemini — and exactly where the gap is.
                  </p>
                  <Link href="/machine-read" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Run My Free Machine Read
                  </Link>
                </div>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/why-your-website-cant-talk-to-ai" className="block group">
                      <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                        The Language Problem: Why Your Website Can&apos;t Talk to AI
                      </p>
                      <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">14 min read</p>
                    </Link>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/entity-first-search-local-businesses" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          Entity-First Search: How Local Businesses Become the Answer AI Systems Recommend
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">16 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/how-to-rank-in-google-ai-overviews-for-local-businesses" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          How to Rank in Google AI Overviews for Local Businesses
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">12 min read</p>
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

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-[var(--d-bg-3)] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">SEE WHERE YOU STAND</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-[var(--d-fg)] mb-4">
            Can AI actually find and recommend your business?
          </h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">
            Run a free Machine Read — we check how you show up across ChatGPT, Perplexity, Google AI, Bing Copilot,
            and Gemini, and show you exactly where the gap is. No cost, no pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/machine-read" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Run My Free Machine Read
            </Link>
            <Link href="/services" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

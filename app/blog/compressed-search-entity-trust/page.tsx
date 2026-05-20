import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compressed Search Is Coming: Why Entity Trust Will Matter More Than Content Volume | KodeCite.ai',
  description:
    'Search interfaces are compressing from ten blue links to map packs to AI answers to a single spoken recommendation. When the list gets shorter, entity trust determines who gets recommended.',
  alternates: { canonical: 'https://www.kodecite.ai/blog/compressed-search-entity-trust' },
  openGraph: {
    title: 'Compressed Search Is Coming: Why Entity Trust Will Matter More Than Content Volume',
    description:
      'Search interfaces are compressing from ten blue links to map packs to AI answers to a single spoken recommendation. When the list gets shorter, entity trust determines who gets recommended.',
    url: 'https://www.kodecite.ai/blog/compressed-search-entity-trust',
    type: 'article',
    publishedTime: '2026-05-09',
    authors: ['Mark Abplanalp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compressed Search Is Coming: Why Entity Trust Will Matter More Than Content Volume',
    description:
      'Search interfaces are compressing from ten blue links to map packs to AI answers to a single spoken recommendation. When the list gets shorter, entity trust determines who gets recommended.',
    images: ['https://www.kodecite.ai/images/compressed-search-hero.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.kodecite.ai/blog/compressed-search-entity-trust#article',
  headline: 'Compressed Search Is Coming: Why Entity Trust Will Matter More Than Content Volume',
  description:
    'Search interfaces are compressing from ten blue links to map packs to AI answers to a single spoken recommendation. When the list gets shorter, entity trust determines who gets recommended.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.kodecite.ai/#founder',
    name: 'Mark Abplanalp',
    jobTitle: 'Founder',
    url: 'https://www.kodecite.ai',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.kodecite.ai/#business',
    name: 'KodeCite.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.kodecite.ai/og-image.png',
      width: 1200,
      height: 630,
    },
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': 'https://www.kodecite.ai/blog',
    name: 'KodeCite.ai Blog',
    url: 'https://www.kodecite.ai/blog',
  },
  datePublished: '2026-05-09T00:00:00-07:00',
  dateModified: '2026-05-09T00:00:00-07:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.kodecite.ai/blog/compressed-search-entity-trust',
  },
  url: 'https://www.kodecite.ai/blog/compressed-search-entity-trust',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.kodecite.ai/images/compressed-search-hero.png',
    width: 1200,
    height: 630,
  },
  keywords: [
    'compressed search',
    'entity trust',
    'agentic search',
    'AI recommendations local business',
    'wearable AI discovery',
    'voice search local business',
    'answer engine optimization',
    'machine-readable infrastructure',
    'entity graph',
    'schema markup local SEO',
    'AI search visibility',
    'zero click search',
    'local business AI',
    'screenless search',
    'GEO generative engine optimization',
  ],
  articleSection: 'AI Search Strategy',
  wordCount: 4800,
  about: [
    { '@type': 'DefinedTerm', name: 'Compressed Search' },
    { '@type': 'DefinedTerm', name: 'Entity Trust' },
    { '@type': 'DefinedTerm', name: 'Agentic Search' },
    { '@type': 'DefinedTerm', name: 'Local Business AI Visibility' },
    { '@type': 'DefinedTerm', name: 'Machine-Readable Web Infrastructure' },
    { '@type': 'DefinedTerm', name: 'Voice Search and Wearable Discovery' },
    { '@type': 'DefinedTerm', name: 'Answer Engine Optimization' },
  ],
  mentions: [
    { '@type': 'Organization', name: 'ChatGPT', url: 'https://openai.com/chatgpt' },
    { '@type': 'Organization', name: 'Perplexity', url: 'https://www.perplexity.ai' },
    { '@type': 'Organization', name: 'Google AI Overviews', url: 'https://blog.google/products/search/ai-overviews-and-ai-mode/' },
    { '@type': 'Organization', name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com' },
    { '@type': 'Organization', name: 'Zillow', url: 'https://www.zillow.com' },
    { '@type': 'Organization', name: 'YouTube', url: 'https://www.youtube.com' },
    { '@type': 'Organization', name: 'Schema.org', url: 'https://schema.org' },
    { '@type': 'Organization', name: 'WordPress', url: 'https://wordpress.org' },
  ],
  citation: [
    { '@type': 'CreativeWork', name: 'SparkToro — Zero-Click Search Study', url: 'https://sparktoro.com/blog/less-than-half-of-google-searches-now-result-in-a-click/' },
    { '@type': 'CreativeWork', name: 'Google — AI Overviews', url: 'https://blog.google/products/search/ai-overviews-and-ai-mode/' },
    { '@type': 'CreativeWork', name: 'Schema.org Vocabulary', url: 'https://schema.org' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.kodecite.ai/blog/compressed-search-entity-trust#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is compressed search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Compressed search describes the progressive narrowing of how many results a user actually sees as search interfaces evolve. Desktop search showed ten blue links. Mobile search compressed attention to map packs, snippets, and top organic results. AI search synthesizes a direct answer. Wearable and voice interfaces will narrow recommendations further still — to one or two spoken options. At each stage, fewer businesses make the visible set.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between ranking and being recommended?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ranking is placement in a list. Recommendation is selection. A business can rank on page one and still be passed over. In agentic search — where an AI assistant narrows to one or two options — the business either gets recommended or it doesn't. That binary outcome makes the clarity and verifiability of the business entity far more important than traditional rank position.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why does entity trust matter more as AI search grows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Entity trust is the machine-readable clarity around a business — whether AI systems can confidently resolve who the business is, what it does, where it operates, and why it is credible. When recommendation sets compress, AI systems need to choose among options. The business with a clearly defined, consistently verified entity graph is easier to understand and safer to recommend. Weak entity signals get filtered out when the list is short.",
      },
    },
    {
      '@type': 'Question',
      name: 'How can an established local business improve its machine-readable authority?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most established local businesses already have the hard-to-fake assets: reviews, credentials, completed work, years in business, and local reputation. The gap is structural. Reviews are disconnected from service pages. Credentials are buried in paragraphs. Videos live on YouTube without connecting to the site entity. Listings disappear after closing. The first step is translating existing real-world authority into clean schema markup, consistent directory profiles, connected service and provider pages, and a structured proof layer — so machines can read what customers and the community already know.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean for a website to be machine-readable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A machine-readable website is one that AI crawlers and search engines can access, parse, and understand without ambiguity. It requires server-side rendering so content is visible on a cold load, correct JSON-LD schema that declares the business identity, services, location, and people, consistent NAP data matching external profiles, internal linking that reinforces entity relationships, and content structured to answer specific questions. A site that looks good to humans but is confusing to machines is no longer sufficient in an agentic search environment.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.kodecite.ai/blog/compressed-search-entity-trust#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Compressed Search Is Coming',
      item: 'https://www.kodecite.ai/blog/compressed-search-entity-trust',
    },
  ],
};

export default function CompressedSearchEntityTrust() {
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
            <span className="text-[var(--d-fg)] truncate">Compressed Search Is Coming</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AI Search Strategy</span>
            <span className="text-[var(--d-fg-dim)] text-sm font-inter">18 min read</span>
          </div>

          <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] mb-6 leading-tight">
            Compressed Search Is Coming:{' '}
            <span className="text-[var(--d-accent)]">Why Entity Trust Will Matter More Than Content Volume</span>
          </h1>

          <p className="text-[var(--d-fg-dim)] text-xl font-inter leading-relaxed max-w-3xl">
            Search interfaces are compressing from ten blue links to map packs to AI answers to a single spoken recommendation. When the list gets shorter, entity trust determines who gets recommended.
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[var(--d-line)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-inter">MA</span>
              </div>
              <div>
                <p className="text-[var(--d-fg)] text-sm font-semibold font-inter">Mark Abplanalp</p>
                <p className="text-[var(--d-fg-dim)] text-xs font-inter">May 9, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero Image ──────────────────────────────────────── */}
      <section className="bg-[var(--d-bg)] px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/compressed-search-hero.png"
            alt="Compressed Search Is Coming — search results compressing from many links to a single AI recommendation"
            width={1200}
            height={630}
            className="w-full rounded-xl shadow-sm"
            priority
          />
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

                <p className="text-[var(--d-fg-dim)] text-lg leading-relaxed mb-6">
                  Search is changing for a simple reason: the interface is changing.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  On a desktop, a search engine can show ten blue links, a map pack, ads, featured snippets, videos, images, and related searches.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  On a phone, the screen gets smaller. The number of results people actually see shrinks.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  But in a voice-first or wearable interface — earbuds, smart glasses, in-car assistants, AI agents, and screenless devices — the entire experience compresses even further. No one wants fourteen local business recommendations spoken into their ear. The interface forces a different behavior. Instead of showing everything, the system has to choose.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-3 text-xs">THE CENTRAL CLAIM</p>
                  <p className="text-[var(--d-fg-dim)] font-inter text-sm leading-relaxed">
                    The future of local search is not more results. It is fewer recommendations. And when recommendations compress, entity trust becomes more important than content volume.
                  </p>
                </div>

                {/* ── Section 1 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  The Internet Is Not Dying. Human Browsing Is Being Abstracted Away.
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The phrase &ldquo;dead internet&rdquo; gets used in a lot of different ways. Some versions are exaggerated. Some are conspiratorial. But one part of the idea is directionally correct: human browsing is becoming less central to discovery.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  That does not mean websites disappear. It does not mean content disappears. It does not mean reviews, directories, videos, articles, or business profiles disappear. It means AI systems increasingly sit between the user and the web.
                </p>

                <div className="bg-[rgba(255,255,255,0.10)] rounded-xl p-5 my-6 border-l-4 border-[var(--d-accent)]">
                  <div className="flex flex-col gap-1 font-mono text-xs tracking-wider text-[var(--d-fg-dim)]">
                    {['The user asks.', 'The agent searches.', 'The agent reads.', 'The agent compares.', 'The agent summarizes.', 'The agent recommends.'].map((step) => (
                      <p key={step} className="py-1 border-b border-[var(--d-line)] last:border-0">{step}</p>
                    ))}
                  </div>
                  <p className="text-[var(--d-fg-mute)] text-xs font-inter mt-3">
                    The web still exists underneath the interaction. The human may never manually browse it.
                  </p>
                </div>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Websites Will Still Exist, But Their Job Is Changing
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  For the last twenty years, most business websites were built as digital brochures — designed to impress a human visitor after that visitor clicked. That still matters. But in AI-mediated search, the website has another job before the visitor ever arrives.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  It has to help the machine understand the business. The site needs to answer machine-level questions clearly:
                </p>

                <ul className="flex flex-col gap-1 mb-6 pl-4">
                  {[
                    'Who is this business?',
                    'What does it do?',
                    'Where does it operate?',
                    'Who provides the service?',
                    'What proof supports its claims?',
                    'Are those claims consistent across the web?',
                    'Is the business real, relevant, and trustworthy enough to recommend?',
                  ].map((q) => (
                    <li key={q} className="text-[var(--d-fg-dim)] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[var(--d-accent)] mt-0.5 flex-shrink-0">›</span>
                      {q}
                    </li>
                  ))}
                </ul>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A website that only looks good to humans but is confusing to machines is no longer enough.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  AI Agents Will Read, Compare, and Recommend Before Humans Arrive
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  In traditional search, the business had a chance to persuade the visitor after the click. In agentic search, the AI may evaluate the business before the user ever sees the website. That changes the order of persuasion. The first audience is not always the human. The first audience may be the machine deciding whether the business belongs in the recommendation set.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  That means the website has to be readable, structured, fast, consistent, and connected. It has to be built as a trust layer, not just a design asset.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The New Question Is Not &ldquo;Can You Rank?&rdquo; It Is &ldquo;Can You Be Recommended?&rdquo;
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Ranking and recommendation are not the same thing. Ranking is placement in a list. Recommendation is selection. A business can rank somewhere on a page and still be ignored. But when an AI assistant gives only one, two, or three options, the stakes change. The question becomes: can the AI confidently recommend this business? That confidence does not come from one blog post, one backlink, one citation, or one directory listing. It comes from the full entity picture.
                </p>

                {/* ── Section 2 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  Search Is Moving From Results to Recommendations
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Search is not moving in one clean jump. It is compressing in stages.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Desktop Search Gave Users Ten Blue Links
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Desktop search had room. A user could scan results, open multiple tabs, compare businesses, read reviews, visit websites, and make a decision manually. That model rewarded visibility across a larger surface area. Being on page one mattered. Being in the map pack mattered. Having title tags, backlinks, reviews, and content mattered. Those signals still matter. But the interface allowed more options to exist.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Mobile Search Compressed Attention Into Maps, Snippets, and Ads
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Mobile made search more compressed. Users still had a screen, but they were less likely to scroll deeply. Map packs, ads, snippets, and top organic results captured most of the attention. Local search became more competitive because fewer results were meaningfully visible. A business did not need to be number eleven. It needed to be one of the few options a mobile user actually saw.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  AI Search Compresses the Journey Into Answers
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  AI search compresses the journey further. Instead of showing a user every possible source, the system synthesizes information and produces an answer. That answer may include citations and multiple recommendations. But the user is no longer doing the same kind of manual comparison. The AI system is helping decide which sources matter.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Wearables Will Compress It Even Further
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  Wearables create the most important shift. A screen can show options. A voice assistant has to speak them. Smart glasses, earbuds, watches, and in-car assistants create a natural limit on how many recommendations a user will tolerate.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-6">
                  <p className="eyebrow mb-4 text-xs">THE COMPRESSION IN PRACTICE</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--d-accent)] font-mono text-xs pt-0.5 flex-shrink-0">✗</span>
                      <p className="text-[var(--d-fg-dim)] text-sm font-inter italic leading-snug">&ldquo;Here are twelve dentists in Bend, Oregon. Let me read each profile.&rdquo;</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[var(--d-ok)] font-mono text-xs pt-0.5 flex-shrink-0">✓</span>
                      <p className="text-[var(--d-fg)] text-sm font-inter leading-snug">&ldquo;I found two strong options.&rdquo; — or eventually: &ldquo;I recommend this one.&rdquo;</p>
                    </div>
                  </div>
                  <p className="text-[var(--d-fg-mute)] text-xs font-inter mt-4">That is compressed search.</p>
                </div>

                {/* ── Section 3 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  Why Screenless Search Changes the Game for Local Businesses
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Local search has always been competitive. But screenless search changes the nature of competition. The user is not choosing from every business. The AI system is narrowing the field before the user engages. That means the business has fewer chances to explain itself after the search. It needs to be understood before the recommendation happens.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Voice Interfaces Force Smaller Recommendation Sets
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Voice interfaces reward clarity. The clearer business wins because it is easier to summarize, easier to compare, and easier to recommend. A vague business creates hesitation. A clear business creates confidence.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  If one dentist has a fast, structured website with clear provider schema, service pages, credentials, reviews, FAQs, and consistent external profiles — while another has a generic WordPress site with thin schema and disconnected reviews — the first business gives the AI system more to work with. That does not guarantee a recommendation. But it improves the odds significantly.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  When the List Gets Shorter, Trust Signals Matter More
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  In a long list, weak signals can still appear somewhere. In a short list, weak signals get filtered out. Compressed search raises the bar. The AI system has to decide which businesses are safe, relevant, and credible enough to present. That makes small trust advantages more important:
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-6 pl-2">
                  {[
                    'Clean schema', 'Correct business type', 'Consistent NAP', 'Verified external profiles',
                    'Clear services', 'Real reviews', 'Provider identity', 'Credentials',
                    'Fast crawlable infrastructure', 'Internal links', 'FAQ structure', 'Article schema',
                    'Video schema', 'Proof pages', 'No duplicate or broken markup',
                  ].map((signal) => (
                    <div key={signal} className="flex items-center gap-2">
                      <span className="text-[var(--d-ok)] text-xs flex-shrink-0">✓</span>
                      <span className="text-[var(--d-fg-dim)] text-sm font-inter">{signal}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  None of these alone is the whole answer. Together, they compound.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Being Easier to Verify Becomes a Competitive Advantage
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  In compressed search, the best business does not always win. The clearest verifiable business has the advantage. A local business may have decades of experience, hundreds of reviews, loyal customers, advanced services, and strong community trust. But if that authority is not expressed in a machine-readable way, AI systems may not fully understand it. The business has trust in the real world. But the machine cannot see enough of it. That is the gap KodeCite is built to close.
                </p>

                {/* ── Section 4 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  Entity Trust Becomes the Foundation of AI Discovery
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Entity trust is the machine-readable clarity around a business. It is not just whether the business has content. It is whether machines can resolve the business as a real, credible, local entity.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Entity Trust Starts With Clear Business Identity
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  A business entity should be obvious in code — not guessed, not implied, not reduced to a logo, not hidden inside generic plugin markup. The machine should be able to understand:
                </p>

                <ul className="flex flex-col gap-1 mb-6 pl-4">
                  {[
                    'This is the business.',
                    'This is the business type.',
                    'This is the location.',
                    'This is the phone number.',
                    'This is the service area.',
                    'These are the external profiles.',
                    'These are the services.',
                    'These are the people connected to the business.',
                  ].map((item) => (
                    <li key={item} className="text-[var(--d-fg-dim)] text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-[var(--d-accent)] mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  For many established SMBs, this layer is either missing or badly underbuilt.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Machine Needs to Understand the Person Behind the Business
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  For professional service businesses, the person often matters as much as the company. Dentists, doctors, attorneys, realtors, aestheticians, advisors, architects, specialty contractors. The provider&apos;s identity, credentials, experience, role, and expertise should connect to the business entity.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-6">
                  <p className="eyebrow mb-3 text-xs">THE PERSON IS PART OF THE TRUST GRAPH</p>
                  <div className="grid grid-cols-2 gap-2 text-sm font-inter">
                    {[
                      ['A dentist', 'is not just a logo.'],
                      ['A realtor', 'is not just a brokerage page.'],
                      ['An attorney', 'is not just a firm name.'],
                      ['A med spa', 'is not just a menu of treatments.'],
                    ].map(([subject, predicate]) => (
                      <div key={subject} className="col-span-2 flex items-baseline gap-2">
                        <span className="text-[var(--d-fg)] font-semibold">{subject}</span>
                        <span className="text-[var(--d-fg-dim)]">{predicate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Schema Turns Real-World Authority Into Machine-Readable Structure
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  Schema does not create trust. Schema expresses trust. That distinction matters.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A weak business cannot become authoritative because it added structured data. But an established business with real authority can become much easier for machines to understand when that authority is structured correctly. The goal is not to stuff code onto a page. The goal is to translate what is already true about the business into a clean machine-readable entity graph.
                </p>

                {/* ── Section 5 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  Content Still Matters, But Entity Governs Content
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Content is not dead. Generic content is dying. Content still matters because AI systems need information to read, summarize, compare, and cite. But content works best when it strengthens a clearly defined entity.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Entity Tells the Machine Who Should Be Trusted
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Content without entity clarity is weaker. A model may read a useful article, but still struggle to resolve who wrote it, what business published it, where that business operates, and whether the claims are supported. Entity gives content a home. The article is not floating in space.
                </p>

                <div className="bg-[rgba(255,255,255,0.10)] rounded-xl p-5 my-6 border-l-4 border-[var(--d-accent)]">
                  <div className="flex flex-col gap-1 font-inter text-sm text-[var(--d-fg-dim)]">
                    {[
                      'It belongs to a business.',
                      'It is written by a person.',
                      'It supports a service.',
                      'It connects to a location.',
                      'It references proof.',
                      'It strengthens the entity.',
                    ].map((item) => (
                      <p key={item} className="py-1 border-b border-[var(--d-line)] last:border-0">{item}</p>
                    ))}
                  </div>
                </div>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Articles Should Strengthen the Business Entity
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Every article should do more than target a keyword. It should strengthen the business&apos;s machine-readable identity. A realtor article about buying and selling at the same time should connect to the realtor entity, buyer service page, seller service page, relevant city pages, and client review proof. A dentist article about full mouth reconstruction should connect to the dentist entity, restorative dentistry page, cosmetic dentistry page, provider credentials, FAQs, videos, and relevant patient trust signals.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  That is content governed by entity. Most business blogs are disconnected — published because someone said &ldquo;content helps SEO,&rdquo; but not reinforcing a larger structure. The question is not how much content you have. The better question is what your content makes clearer about your business.
                </p>

                {/* ── Section 6 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  Why Established SMBs Have the Biggest Opportunity
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The biggest opportunity is not with businesses that have no authority. The biggest opportunity is with established businesses whose authority is real but poorly expressed online.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Most Strong Local Businesses Already Have the Trust
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  Many local businesses have already done the hard part. But at the machine level, many of these businesses look generic.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-6">
                  <p className="eyebrow mb-4 text-xs">THE GAP BETWEEN REAL AUTHORITY AND MACHINE AUTHORITY</p>
                  <div className="flex flex-col gap-3">
                    {[
                      ['A 28-year dental practice', 'may be reduced to a basic organization with a logo.'],
                      ['A top realtor', 'may have proof scattered across Zillow, Google, and brokerage profiles but no owned transaction graph.'],
                      ['A skilled contractor', 'may have hundreds of completed projects but no structured project archive.'],
                      ['An attorney', 'may have credentials, practice areas, and client trust, but no clean entity relationship in schema.'],
                    ].map(([subject, gap]) => (
                      <div key={subject} className="border-b border-[var(--d-line)] pb-3 last:border-0 last:pb-0">
                        <p className="text-[var(--d-fg)] font-semibold font-inter text-sm">{subject}</p>
                        <p className="text-[var(--d-fg-dim)] font-inter text-sm mt-1">{gap}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The authority exists. It just is not machine-readable. That is not an authority problem. It is a translation problem.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  KodeCite Translates Existing Reputation Into Machine-Readable Infrastructure
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  KodeCite is built for the business that already earned trust. The goal is not to manufacture authority. The goal is to structure it. We take the business&apos;s real-world assets — reviews, credentials, services, locations, providers, articles, videos, listings, projects, FAQs, and proof — and connect them into a machine-readable foundation that helps search engines and AI systems understand the business more clearly.
                </p>

                {/* ── Section 7 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  External Platforms Should Corroborate You, Not Own Your Proof
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  External platforms matter. Google matters. YouTube matters. Zillow matters. Yelp matters. BBB matters. But those platforms should not be the only places where a business&apos;s proof lives.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Realtor Proof Should Not Live Only on Zillow
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A realtor&apos;s transaction history is one of the strongest forms of proof. But too often that proof lives on Zillow, Realtor.com, Homes.com, MLS feeds, or brokerage platforms — while the realtor&apos;s own website gets left with a bio, a contact form, and a few generic service pages.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Every listing should become an owned proof asset. When the property is active, it exists as a structured listing page. When it sells, it becomes a permanent sold-property page. When the client leaves a review, that review can become a transaction story linking back to the sold listing, the service page, and the realtor entity. That creates a transaction-based authority graph. The proof no longer disappears. It compounds.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  YouTube Videos Should Strengthen the Website Entity
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  YouTube is useful, but YouTube&apos;s ecosystem is built around YouTube. A business video should not depend entirely on YouTube&apos;s algorithm. When a video is embedded on the business website and marked up with video schema, it can strengthen the owned entity graph. The video becomes part of the website&apos;s trust infrastructure — not a post on someone else&apos;s platform.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Website Should Become the Source of Truth
                </h3>

                <div className="bg-[rgba(255,255,255,0.10)] rounded-xl p-5 my-6 border-l-4 border-[var(--d-ok)]">
                  <p className="text-[var(--d-fg)] font-semibold font-inter text-sm mb-3">The right relationship:</p>
                  <div className="flex flex-col gap-1 font-inter text-sm text-[var(--d-fg-dim)]">
                    {[
                      'The website defines the entity.',
                      'Google corroborates it.',
                      'YouTube supports it.',
                      'Zillow supports it.',
                      'Directories support it.',
                      'Reviews support it.',
                    ].map((item) => (
                      <p key={item} className="py-1 border-b border-[var(--d-line)] last:border-0">{item}</p>
                    ))}
                  </div>
                  <p className="text-[var(--d-fg-mute)] text-xs font-inter mt-3">Everything should point back to one clear business identity.</p>
                </div>

                {/* ── Section 8 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  The Businesses That Move Early Are Claiming Digital Real Estate
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Local markets are still early. Most SMB websites are not built for agentic search. They were built for the old web: a human visitor, a visual design, a contact form, and maybe some basic SEO plugin settings. That leaves an opening.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  Small Technical Advantages Compound Over Time
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-4">
                  The advantage may not come from one dramatic change. It may come from dozens of small improvements working together:
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-6 pl-2">
                  {[
                    'A faster site', 'Cleaner markup', 'Better rendering', 'No schema conflicts',
                    'Consistent sameAs profiles', 'Clear service pages', 'Connected articles', 'Visible reviews',
                    'Provider schema', 'FAQ schema', 'Video schema', 'Internal links',
                    'Owned proof pages', 'Accurate directories', 'Crawlable architecture',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[var(--d-ok)] text-xs flex-shrink-0">✓</span>
                      <span className="text-[var(--d-fg-dim)] text-sm font-inter">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Each improvement reduces uncertainty. Each improvement makes the business easier to resolve.
                </p>

                <h3 className="font-inter font-bold text-xl text-[var(--d-fg)] mt-8 mb-4">
                  The Early Window Will Not Stay Open Forever
                </h3>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  This window is real, but it will not stay open forever. Eventually, more agencies will learn the language of AEO, GEO, entity graphs, schema, and machine-readable trust. But local markets move slowly. Many agencies are still selling the old model. Many SMBs are still running on outdated platforms. Many established businesses still have major gaps between their real-world authority and their machine-readable authority. That gap is the opportunity.
                </p>

                {/* ── Section 9 ──────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  What KodeCite Builds for the Agentic Web
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  KodeCite builds the foundation local businesses need as search moves from rankings to recommendations. The goal is not to chase every AI citation. The goal is to make the business easier for AI systems to understand, verify, and recommend.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg)]">Fast Infrastructure for Clean Machine Access</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  A modern site should be fast, crawlable, structured, and designed for extraction — clean rendering, clean sitemaps, strong performance, stable URLs, and a technical foundation that does not fight the rest of the strategy.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg)]">Entity Graphs That Define the Business Clearly</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The entity graph defines the business, the people, the services, the locations, the content, the reviews, the videos, and the external profiles. The goal is to reduce ambiguity. The machine should not have to guess who the business is or what it does.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg)]">Service and Location Pages Built for Extraction</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  Service pages should answer specific buyer questions. Location pages should clarify where the business operates. FAQs should reflect real customer concerns. Articles should support service authority. Content should be built to help both humans and machines understand the business.
                </p>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-3 font-semibold text-[var(--d-fg)]">Owned Proof Assets That Compound Over Time</p>
                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The strongest businesses already create proof every day — they complete projects, serve patients, close transactions, earn reviews, publish videos. KodeCite turns those moments into owned digital assets. Not disposable posts. Not scattered platform signals. Owned proof that compounds.
                </p>

                {/* ── Section 10 ─────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-12 mb-4">
                  The Future of Local Search Is Fewer Recommendations
                </h2>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  The future of local search is not a longer results page. It is a shorter recommendation set. Citations matter. Mentions matter. Backlinks matter. But they are reinforcement signals — not the foundation. If the entity is unclear, those signals reinforce confusion. If the entity is clean, structured, and verifiable, those signals compound.
                </p>

                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6 my-8">
                  <p className="eyebrow mb-4 text-xs">THE GOAL</p>
                  <p className="text-[var(--d-fg)] font-inter font-semibold text-lg leading-snug mb-4">
                    Become the business AI can understand, verify, and recommend.
                  </p>
                  <ul className="flex flex-col gap-1">
                    {[
                      'Who they are.',
                      'What they do.',
                      'Where they operate.',
                      'Who provides the service.',
                      'What proof supports them.',
                      'What content demonstrates expertise.',
                      'What external sources corroborate them.',
                      'What makes them safe to recommend.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[var(--d-accent)] mt-0.5 flex-shrink-0 text-xs">›</span>
                        <span className="text-[var(--d-fg-dim)] text-sm font-inter">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[var(--d-fg-dim)] leading-relaxed mb-6">
                  In the old web, your website had to persuade a visitor. In the agentic web, your website has to inform the machine before the visitor ever arrives. That is why machine-readable trust infrastructure matters.
                </p>

                <p className="text-[var(--d-fg)] font-inter font-semibold text-lg leading-relaxed">
                  Because when AI only gives two recommendations, being easier to understand may be the difference between being invisible and becoming the answer.
                </p>

                {/* ── FAQ ────────────────────────────────────── */}
                <h2 className="font-inter font-bold text-2xl text-[var(--d-fg)] mt-16 mb-6">Frequently Asked Questions</h2>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      q: "What is compressed search?",
                      a: "Compressed search describes the progressive narrowing of how many results a user sees as search interfaces evolve. Desktop showed ten blue links. Mobile compressed to map packs and snippets. AI synthesizes a direct answer. Wearables and voice compress further still — to one or two spoken options.",
                    },
                    {
                      q: "What is the difference between ranking and being recommended?",
                      a: "Ranking is placement in a list. Recommendation is selection. A business can rank on page one and still be passed over. In agentic search — where an AI assistant narrows to one or two options — the business either gets recommended or it doesn't.",
                    },
                    {
                      q: "Why does entity trust matter more as AI search grows?",
                      a: "When recommendation sets compress, AI systems need to choose among options. The business with a clearly defined, consistently verified entity graph is easier to understand and safer to recommend. Weak entity signals get filtered out when the list is short.",
                    },
                    {
                      q: "How can an established local business improve its machine-readable authority?",
                      a: "Most established businesses already have the hard-to-fake assets: reviews, credentials, completed work, years in business, local reputation. The gap is structural. Translating existing real-world authority into clean schema markup, consistent directory profiles, and connected service and provider pages is where the work starts.",
                    },
                    {
                      q: "What does it mean for a website to be machine-readable?",
                      a: "A machine-readable website is one that AI crawlers can access, parse, and understand without ambiguity. It requires server-side rendering, correct JSON-LD schema, consistent NAP data matching external profiles, internal linking that reinforces entity relationships, and content structured to answer specific questions.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-t border-[var(--d-line)] pt-5">
                      <p className="font-inter font-semibold text-[var(--d-fg)] mb-2">{item.q}</p>
                      <p className="font-inter text-[var(--d-fg-dim)] text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>

              </div>
            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                {/* Compression stages visual */}
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">THE COMPRESSION STAGES</p>
                  <div className="space-y-4">
                    {[
                      { stage: 'Stage 1', label: 'Desktop', desc: 'Ten blue links, map packs, ads, videos, snippets' },
                      { stage: 'Stage 2', label: 'Mobile', desc: 'Map pack, top organic results, ads' },
                      { stage: 'Stage 3', label: 'AI Search', desc: 'Synthesized answers with 2–4 citations' },
                      { stage: 'Stage 4', label: 'Wearables', desc: '\"I found two strong options.\"' },
                    ].map((item, i, arr) => (
                      <div key={item.stage} className={i < arr.length - 1 ? 'border-b border-[var(--d-line)] pb-4' : ''}>
                        <p className="text-[var(--d-accent)] font-bold text-lg font-inter">{item.stage}</p>
                        <p className="text-[var(--d-fg-dim)] text-sm font-inter mt-1">
                          <strong className="text-[var(--d-fg)]">{item.label}</strong> — {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Machine Read CTA */}
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-bold text-[var(--d-fg)] text-lg mb-3 leading-snug">
                    See Where Your Entity Stands
                  </p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">
                    A Machine Read shows exactly what AI systems can verify about your business right now — and where the gaps are.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Get My Free Machine Read
                  </Link>
                </div>

                {/* Related reading */}
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/f1-framework-for-aeo" className="block group">
                      <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                        The F1 Framework for AEO: Why Most Businesses Are Trying to Win the AI Race in an Economy Car
                      </p>
                      <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">12 min read</p>
                    </Link>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/the-shortlist-problem" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          The Shortlist Problem: Why AI Will Recommend One Local Business — And Why It Might Not Be Yours
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">10 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[var(--d-line)] pt-4">
                      <Link href="/blog/2026-digital-land-rush-ai-visibility" className="block group">
                        <p className="text-[var(--d-fg)] text-sm font-semibold font-inter leading-snug group-hover:text-[var(--d-accent)] transition-colors">
                          The 2026 Digital Land Rush: Why Waiting on AI Visibility Could Cost Your Business Everything
                        </p>
                        <p className="text-[var(--d-fg-dim)] text-xs font-inter mt-1">7 min read</p>
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
          <p className="eyebrow mb-4">THE WINDOW IS OPEN</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-[var(--d-fg)] mb-4">
            Find out where you actually stand.
          </h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">
            A Machine Read shows you exactly what AI systems can verify about your business right now, and where the gaps are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Get My Free Machine Read
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

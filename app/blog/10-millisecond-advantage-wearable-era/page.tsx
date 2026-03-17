import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When Your Customer Stops Searching and Starts Asking — Is Your Business Ready? | KodeCite.AI',
  description: 'People are asking AI assistants and wearable devices for local business recommendations instead of searching Google. Here\'s what that means for your business — and what to do about it.',
  alternates: {
    canonical: 'https://www.kodecite.ai/blog/10-millisecond-advantage-wearable-era',
  },
  openGraph: {
    title: 'When Your Customer Stops Searching and Starts Asking — Is Your Business Ready?',
    description: 'People are asking AI assistants and wearable devices for local business recommendations instead of searching Google. Here\'s what that means for your business — and what to do about it.',
    url: 'https://www.kodecite.ai/blog/10-millisecond-advantage-wearable-era',
    type: 'article',
    publishedTime: '2026-03-17',
    authors: ['Mark Abplanalp'],
  },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'When Your Customer Stops Searching and Starts Asking — Is Your Business Ready?',
  description: 'People are asking AI assistants and wearable devices for local business recommendations instead of searching Google. Here\'s what that means for your business — and what to do about it.',
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    url: 'https://www.kodecite.ai/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'KodeCite.AI',
    url: 'https://www.kodecite.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.kodecite.ai/logo.png',
    },
  },
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.kodecite.ai/blog/10-millisecond-advantage-wearable-era',
  },
  url: 'https://www.kodecite.ai/blog/10-millisecond-advantage-wearable-era',
  keywords: [
    'wearable AI local business',
    'edge hosting local SEO',
    'llms.txt edge caching',
    'agent.json wearable discovery',
    'AI wearables local recommendations',
    'Vercel edge network',
    'answer engine optimization',
    'AEO local business',
    'Ray-Ban Meta local search',
    'voice AI local business',
    'WordPress maintenance performance',
    'edge server AI crawlers',
    'local business wearable era',
    'AI shortlist local business',
  ],
  articleSection: 'AI Search Strategy',
  wordCount: 1700,
  about: [
    { '@type': 'Thing', name: 'Wearable AI Discovery' },
    { '@type': 'Thing', name: 'Edge Infrastructure for Local Business' },
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'llms.txt' },
    { '@type': 'Thing', name: 'agent.json' },
    { '@type': 'Thing', name: 'AI Recommendation Shortlist' },
    { '@type': 'Thing', name: 'WordPress Performance Maintenance' },
  ],
  mentions: [
    { '@type': 'SoftwareApplication', name: 'ChatGPT' },
    { '@type': 'SoftwareApplication', name: 'Perplexity' },
    { '@type': 'SoftwareApplication', name: 'Google AI Overviews' },
    { '@type': 'Product', name: 'Ray-Ban Meta', manufacturer: { '@type': 'Organization', name: 'Meta' } },
    { '@type': 'Organization', name: 'OpenAI', url: 'https://openai.com' },
    { '@type': 'Organization', name: 'Vercel', url: 'https://vercel.com' },
  ],
  defines: [
    {
      '@type': 'Thing',
      name: 'Four-Layer Authority Engine',
      description: 'KodeCite\'s framework for building AI-discoverable local business infrastructure: edge speed (Next.js on Vercel), per-page JSON-LD schema, llms.txt, and agent.json — designed to be reliably read and cited by AI systems including wearable devices.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do wearable AI devices change how local businesses get discovered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wearable and screenless AI devices use audio interfaces that cannot deliver lists of results. When someone asks their glasses or earbuds for a local business recommendation, the AI gives one or two names — not ten. This compresses the recommendation set dramatically compared to traditional search, making it critical for local businesses to be the one or two names AI systems recommend with confidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is WordPress really a problem for AI discoverability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-maintained WordPress site can perform well. The honest issue is that most small and medium-sized local businesses are not actively maintaining their WordPress sites — plugins accumulate, updates get skipped, and performance degrades gradually without anyone noticing. The median WordPress site with active plugins loads in 3-5 seconds on mobile. AI crawlers favor sites that respond quickly and cleanly, so performance drift directly affects AI discoverability over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is llms.txt and why does a local business need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'llms.txt is a plain-language brief at your site\'s root that tells AI crawlers who you are, what you do, where you operate, and which pages contain your most valuable content. Together with agent.json, they are the "about us" and "business card" your website hands to AI systems before they decide who to recommend. Most local business websites don\'t have either file.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the honest case for acting on AI infrastructure now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI assistants are already answering local business queries today. The same infrastructure that positions you for wearable discovery also improves how you appear in ChatGPT, Perplexity, and Google AI Overviews right now — even if wearables grow slower than expected. It\'s not a wager on one specific future. It\'s a foundation that pays off across multiple scenarios.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Four-Layer Authority Engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Four-Layer Authority Engine is KodeCite\'s framework for building AI-discoverable local business infrastructure. Layer 1 is edge speed — Next.js on Vercel\'s global edge network for consistent sub-second performance without ongoing technical babysitting. Layer 2 is per-page JSON-LD schema encoding your specific expertise, geography, and authority. Layer 3 is llms.txt — your plain-language brief for AI crawlers. Layer 4 is agent.json — your structured identity file for autonomous AI agent discovery.',
      },
    },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'KodeCite.AI',
  description: 'AI Search Optimization and Answer Engine Optimization (AEO) consultancy helping local and regional businesses become the default AI-cited authority in their market.',
  url: 'https://www.kodecite.ai',
  logo: 'https://www.kodecite.ai/logo.png',
  image: 'https://www.kodecite.ai/og-image.png',
  email: 'sales@kodecite.ai',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Post Falls',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.7182,
    longitude: -116.9516,
  },
  areaServed: [
    { '@type': 'City', name: 'Post Falls', containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: "Coeur d'Alene", containedInPlace: { '@type': 'State', name: 'Idaho' } },
    { '@type': 'City', name: 'Spokane', containedInPlace: { '@type': 'State', name: 'Washington' } },
    { '@type': 'AdministrativeArea', name: 'North Idaho' },
    { '@type': 'AdministrativeArea', name: 'Eastern Washington' },
    { '@type': 'AdministrativeArea', name: 'Inland Northwest' },
    { '@type': 'AdministrativeArea', name: 'Pacific Northwest' },
  ],
  knowsAbout: [
    'Answer Engine Optimization',
    'AI Search Optimization',
    'Local Business AI Visibility',
    'Schema Markup',
    'llms.txt',
    'agent.json',
    'Next.js Performance',
    'PageSpeed Optimization',
    'Structured Data',
    'Google AI Overviews',
    'ChatGPT Citations',
    'Perplexity Optimization',
    'Wearable AI Discovery',
    'Edge Infrastructure',
  ],
}

export default function WhenCustomerStopsSearchingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#f8f5f0] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#6a5a48] mb-6 font-poppins">
            <a href="/" className="hover:text-[#a0723a] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</a>
            <span className="mx-2">/</span>
            <span className="text-[#1c1814]">When Your Customer Stops Searching and Starts Asking</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#a0723a] font-poppins">AI Search Strategy</span>
            <span className="text-[#6a5a48] text-xs font-poppins">·</span>
            <span className="text-xs text-[#6a5a48] font-poppins">10 min read</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1c1814] leading-tight mb-6">
            When Your Customer Stops Searching and Starts Asking — Is Your Business Ready?
          </h1>
          <p className="font-poppins text-lg text-[#6a5a48] max-w-3xl mb-8 leading-relaxed">
            People are asking AI assistants and wearable devices for local business recommendations instead of searching Google. Here&apos;s what that means for your business — and what to do about it.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center text-white font-poppins font-semibold text-sm">MA</div>
            <div>
              <p className="font-poppins font-semibold text-sm text-[#1c1814]">Mark Abplanalp</p>
              <p className="font-poppins text-xs text-[#6a5a48]">March 17, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Article + Sidebar */}
      <section className="bg-[#f8f5f0] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article Body */}
            <article className="lg:col-span-2 prose-content font-poppins text-[#6a5a48]">

              <p className="text-lg leading-relaxed mb-6">
                There&apos;s a shift happening in how people find local businesses. It&apos;s not dramatic. It&apos;s not headline news. But if you run a local service business — a law firm, a financial advisory practice, an HVAC company, a med spa — it&apos;s going to quietly shift where your best leads come from: away from traditional search results and toward a handful of AI-recommended businesses.
              </p>
              <p className="leading-relaxed mb-10">
                People are starting to ask instead of search. And that changes almost everything about how local discovery works.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">The Shift From Searching to Asking</h2>
              <p className="leading-relaxed mb-6">
                For twenty-five years, finding a local business meant typing something into Google and picking from a list. The game was visibility — show up high enough on the list and you&apos;d get the click.
              </p>
              <p className="leading-relaxed mb-6">
                That game still exists. But a parallel game has started running alongside it.
              </p>
              <p className="leading-relaxed mb-6">
                When someone asks ChatGPT &quot;who&apos;s the best estate planning attorney near me in Coeur d&apos;Alene,&quot; they don&apos;t get a list. They get a name. Maybe two. The AI synthesizes what it knows, weighs its confidence, and gives a single recommendation it&apos;s willing to stand behind.
              </p>
              <p className="leading-relaxed mb-6">
                Meta Ray-Ban glasses have sold over 7 million units. Google, OpenAI, and Apple are all building or refining screenless and wearable AI devices. When someone asks their glasses &quot;find me a good financial advisor near Spokane&quot; while walking to their car — they hear a name in their ear. There&apos;s no screen. There&apos;s no list. There&apos;s one answer.
              </p>
              <p className="leading-relaxed mb-10">
                I wrote about the structural mechanics of this in <a href="/blog/the-shortlist-problem" className="text-[#1a56db] hover:underline">The Shortlist Problem</a>. The short version: audio interfaces don&apos;t accommodate lists. They pressure AI systems toward one high-confidence recommendation. The businesses that make that recommendation win the lead. The businesses that don&apos;t aren&apos;t ranked lower — they&apos;re simply not in the conversation.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">What Determines Who Gets Recommended</h2>
              <p className="leading-relaxed mb-6">
                In practice, AI systems tend to favor local businesses that are easy to <strong className="text-[#1c1814]">understand, verify, and trust.</strong> The signals they rely on are well documented.
              </p>

              <div className="space-y-4 mb-10">
                <div className="bg-[#f2ede4] rounded-lg p-5 border border-[#e8e0d4]">
                  <p className="font-poppins font-semibold text-[#1c1814] mb-2">Structured data.</p>
                  <p className="leading-relaxed mb-2">JSON-LD schema tells AI systems exactly who you are, what services you offer, where you operate, and what makes you credible. Businesses with custom per-page schema give AI systems clear, machine-readable facts to work from.</p>
                  <p className="leading-relaxed text-sm italic">So what: pages with clear schema are easier for AI to cite with confidence than pages without it.</p>
                </div>
                <div className="bg-[#f2ede4] rounded-lg p-5 border border-[#e8e0d4]">
                  <p className="font-poppins font-semibold text-[#1c1814] mb-2">Machine-readable identity files.</p>
                  <p className="leading-relaxed mb-2">llms.txt is a plain-language brief that tells AI crawlers who you are, what you do, and which pages matter most. agent.json is a structured identity file that encodes your business for autonomous AI agents. Together, they&apos;re the &quot;about us&quot; and &quot;business card&quot; your website hands to AI systems before they decide who to recommend. Most local business websites have neither.</p>
                  <p className="leading-relaxed text-sm italic">So what: without these files, AI systems have to guess who you are and what you do. They usually don&apos;t bother guessing.</p>
                </div>
                <div className="bg-[#f2ede4] rounded-lg p-5 border border-[#e8e0d4]">
                  <p className="font-poppins font-semibold text-[#1c1814] mb-2">Directory consistency.</p>
                  <p className="leading-relaxed mb-2">AI systems cross-reference your business information across Google Business Profile, Bing Places, Apple Business Connect, Yelp, and BBB. Inconsistencies in your name, address, or phone number create ambiguity.</p>
                  <p className="leading-relaxed text-sm italic">So what: if your naming is messy across directories, the AI has to guess which version is right — and it usually just skips the guess entirely.</p>
                </div>
                <div className="bg-[#f2ede4] rounded-lg p-5 border border-[#e8e0d4]">
                  <p className="font-poppins font-semibold text-[#1c1814] mb-2">Review signals.</p>
                  <p className="leading-relaxed">Volume, recency, and specificity of reviews all factor in. Detailed, location-specific reviews carry more weight than generic five-star ratings.</p>
                </div>
                <div className="bg-[#f2ede4] rounded-lg p-5 border border-[#e8e0d4]">
                  <p className="font-poppins font-semibold text-[#1c1814] mb-2">Site performance.</p>
                  <p className="leading-relaxed">AI crawlers prioritize sources that respond quickly and cleanly. This is where most small business owners have a blind spot — and it&apos;s worth examining honestly.</p>
                </div>
              </div>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">The WordPress Conversation Worth Having</h2>
              <p className="leading-relaxed mb-6">
                Let&apos;s be clear about something: WordPress is not the enemy. A well-maintained WordPress site, properly configured with good hosting, updated regularly, and kept lean, can perform well. Some do.
              </p>
              <p className="leading-relaxed mb-6">
                The honest question isn&apos;t &quot;is WordPress capable?&quot; It&apos;s &quot;is your WordPress site actually being maintained that way?&quot;
              </p>
              <p className="leading-relaxed mb-6">
                For most small and medium-sized local businesses, the answer is no — and not because the owners don&apos;t care. It&apos;s because they&apos;re running a business. Plugins accumulate. Theme updates get skipped. Hosting plans don&apos;t get reviewed. A site that loaded in 1.2 seconds at launch is loading in 3.8 seconds two years later, and nobody noticed because the degradation was gradual.
              </p>
              <p className="leading-relaxed mb-6">
                Performance matters to AI crawlers for a straightforward reason: they&apos;re scanning enormous numbers of pages and they prioritize sources that respond quickly and cleanly. A slow, bloated site doesn&apos;t get penalized in some formal sense — it just gets less attention, less thoroughly indexed, and less confidently cited.
              </p>
              <p className="leading-relaxed mb-10">
                According to web performance data, the median WordPress site with active plugins loads in 3–5 seconds on mobile. The sites on the faster end of that range are the ones with dedicated technical attention. Most local business sites aren&apos;t getting that attention — not because the owners are negligent, but because it&apos;s genuinely hard to sustain without ongoing technical resources.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">Where Edge Infrastructure Actually Helps</h2>
              <p className="leading-relaxed mb-6">
                This is the honest case for edge hosting — not that it beats WordPress on a spec sheet, but that it removes the maintenance variable that causes most small business sites to drift.
              </p>
              <p className="leading-relaxed mb-6">
                A Next.js site deployed on a platform like Vercel&apos;s global edge network is fast by default and stays fast. There are no plugins to update, no theme conflicts to resolve, no hosting plan to optimize. The performance you get at launch is the performance you keep with almost no ongoing technical babysitting. For most local firms, that&apos;s the difference between &quot;fast for a month&quot; and &quot;fast for years.&quot;
              </p>
              <p className="leading-relaxed mb-6">
                For a local attorney or financial advisor who is not a technical person and doesn&apos;t have a developer on retainer, this matters practically. You get consistent, predictable site performance without having to think about it.
              </p>
              <p className="leading-relaxed mb-10">
                Edge caching extends this further. Your site&apos;s files — including llms.txt and agent.json — get distributed to server locations around the world. When an AI agent queries your site, it&apos;s hitting a nearby server instead of routing all the way to your origin. Response times are faster and more reliable regardless of where the query originates or what kind of device is making it. It&apos;s one consistent signal among many — and consistent signals compound over time in ways that inconsistent ones don&apos;t.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">The Honest Case for Acting Now</h2>
              <p className="leading-relaxed mb-6">
                I want to be straightforward about what we know and what we&apos;re reasoning toward, because I think that distinction matters.
              </p>
              <p className="leading-relaxed mb-4">
                <strong className="text-[#1c1814]">What we know:</strong> AI assistants are already answering local business queries. Wearable devices that rely on audio interfaces are already in the market and growing. Audio interfaces pressure AI systems toward single recommendations. Structured data, identity files, directory consistency, and site performance are all documented inputs into how AI systems evaluate and recommend local businesses.
              </p>
              <p className="leading-relaxed mb-6">
                <strong className="text-[#1c1814]">What we&apos;re reasoning toward:</strong> As wearable adoption grows, the share of local business discovery that happens through AI recommendation rather than traditional search will increase. The businesses that have built clean, structured, machine-readable infrastructure before that shift compounds will be better positioned than the ones that build it after.
              </p>
              <p className="leading-relaxed mb-10">
                That&apos;s not a guaranteed outcome. It&apos;s a well-reasoned bet — and the key is that the same work helps you today in ChatGPT, Perplexity, and Google AI Overviews, even if wearables grow slower than expected. It&apos;s not a wager on one specific future. It&apos;s a foundation that pays off across multiple scenarios.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">What This Actually Looks Like in Practice</h2>
              <p className="leading-relaxed mb-4">
                The Four-Layer Authority Engine that KodeCite builds into every site:
              </p>

              <div itemScope itemType="https://schema.org/FAQPage">

                <div className="mb-6" itemScope itemType="https://schema.org/Question">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2" itemProp="name">
                    Layer 1 — Edge Speed
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p className="leading-relaxed" itemProp="text">
                      Next.js deployed on Vercel&apos;s global edge network. Consistent sub-second performance on real devices — not because someone is actively maintaining it, but because the architecture produces it by default and keeps producing it without ongoing technical babysitting.
                    </p>
                  </div>
                </div>

                <div className="mb-6" itemScope itemType="https://schema.org/Question">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2" itemProp="name">
                    Layer 2 — Per-Page Schema
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p className="leading-relaxed" itemProp="text">
                      Custom JSON-LD on every page — homepage, service pages, location pages, articles, FAQs — encoding your specific expertise, geography, and authority as machine-readable facts. Zero invalid items at launch, verified before go-live.
                    </p>
                  </div>
                </div>

                <div className="mb-6" itemScope itemType="https://schema.org/Question">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2" itemProp="name">
                    Layer 3 — llms.txt
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p className="leading-relaxed" itemProp="text">
                      Your plain-language brief for AI crawlers. Who you are, what you do, where you operate, which pages matter most. The &quot;about us&quot; your site hands to every AI system that visits before it decides who to recommend.
                    </p>
                  </div>
                </div>

                <div className="mb-10" itemScope itemType="https://schema.org/Question">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2" itemProp="name">
                    Layer 4 — agent.json
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p className="leading-relaxed" itemProp="text">
                      Your structured identity file for autonomous AI agent discovery. The &quot;business card&quot; that tells AI agents exactly how to describe you, recommend you, and — as agent-to-agent commerce develops — interact with your business on behalf of users.
                    </p>
                  </div>
                </div>

              </div>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">The Practical Starting Point</h2>
              <p className="leading-relaxed mb-6">
                If you&apos;re a local service business owner wondering where you actually stand, the starting point is a clear-eyed audit of your current presence.
              </p>
              <p className="leading-relaxed mb-6">
                How does your business currently appear when someone asks ChatGPT or Perplexity about your category in your market? What does your PageSpeed score look like compared to your top three local competitors? Do you have any structured data — and if so, is it valid? Is your NAP data consistent across every major directory?
              </p>
              <p className="leading-relaxed mb-10">
                Most local businesses have never looked at these things. That&apos;s the gap — and it&apos;s also the opportunity, because most of your competitors haven&apos;t looked either.
              </p>

              {/* Closing CTA */}
              <div className="bg-[#1c1814] rounded-xl p-8 mt-12 mb-8">
                <p className="font-poppins font-semibold text-[#a0723a] mb-3">Not sure where you stand?</p>
                <p className="font-poppins text-[#a09080] leading-relaxed mb-5">
                  Get a free AI Scaffolding Audit — we&apos;ll show you exactly how your business currently appears in ChatGPT, Perplexity, and Google AI Overviews. By the end of the audit, you&apos;ll know whether you can get away with tuning what you already have or whether you&apos;re better off with a rebuild. No pitch. No pressure.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-[#a0723a] hover:bg-[#8a6030] text-white font-poppins font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Get Your Free AEO Audit
                </a>
              </div>

              {/* Personal closing note */}
              <p className="leading-relaxed italic text-[#6a5a48] border-t border-[#e8e0d4] pt-8">
                I&apos;m not trying to sell you on a crisis that doesn&apos;t exist. I&apos;m trying to give you an honest picture of where local business discovery is heading — and the same foundation my clients are already building. The window is open. Whether you walk through it is your call.
              </p>
              <p className="font-poppins font-semibold text-[#1c1814] mt-2">— Mark, KodeCite.ai</p>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">

                <div className="bg-[#f2ede4] border border-[#e8e0d4] rounded-xl p-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#a0723a] mb-4">The Discovery Shift</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-playfair text-4xl text-[#1c1814] font-bold">7M+</p>
                      <p className="font-poppins text-sm text-[#6a5a48] mt-1">Ray-Ban Meta glasses already sold — voice AI queries are happening now</p>
                    </div>
                    <div className="border-t border-[#e8e0d4] pt-4">
                      <p className="font-playfair text-4xl text-[#1c1814] font-bold">1–2</p>
                      <p className="font-poppins text-sm text-[#6a5a48] mt-1">names AI recommends per local query — not a list of ten</p>
                    </div>
                    <div className="border-t border-[#e8e0d4] pt-4">
                      <p className="font-playfair text-4xl text-[#1c1814] font-bold">&lt;1%</p>
                      <p className="font-poppins text-sm text-[#6a5a48] mt-1">of local businesses have deployed llms.txt or agent.json</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1c1814] rounded-xl p-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#a0723a] mb-3">Free Audit</p>
                  <p className="font-playfair text-xl text-white mb-3">Find Out Where You Stand</p>
                  <p className="font-poppins text-sm text-[#a09080] mb-5 leading-relaxed">See exactly how your business appears in AI today — and whether your infrastructure is ready for what&apos;s coming.</p>
                  <a
                    href="/contact"
                    className="block text-center bg-[#a0723a] hover:bg-[#8a6030] text-white font-poppins font-semibold text-sm py-3 px-4 rounded-lg transition-colors"
                  >
                    Get Your Free AEO Audit
                  </a>
                </div>

                <div className="bg-[#f2ede4] border border-[#e8e0d4] rounded-xl p-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#a0723a] mb-4">Related Reading</p>
                  <div className="space-y-4">
                    <a href="/blog/the-shortlist-problem" className="block group">
                      <p className="font-poppins text-sm font-semibold text-[#1c1814] group-hover:text-[#a0723a] transition-colors leading-snug">The Shortlist Problem: Why AI Will Recommend One Local Business — And Why It Might Not Be Yours</p>
                      <p className="font-poppins text-xs text-[#6a5a48] mt-1">10 min read</p>
                    </a>
                    <div className="border-t border-[#e8e0d4] pt-4">
                      <a href="/blog/false-legacy-layer-ai-visibility" className="block group">
                        <p className="font-poppins text-sm font-semibold text-[#1c1814] group-hover:text-[#a0723a] transition-colors leading-snug">The False Legacy Layer: Why Your AI Mentions Today Could Disappear Tomorrow</p>
                        <p className="font-poppins text-xs text-[#6a5a48] mt-1">9 min read</p>
                      </a>
                    </div>
                    <div className="border-t border-[#e8e0d4] pt-4">
                      <a href="/blog/2026-digital-land-rush-ai-visibility" className="block group">
                        <p className="font-poppins text-sm font-semibold text-[#1c1814] group-hover:text-[#a0723a] transition-colors leading-snug">The 2026 Digital Land Rush: Why Waiting Could Cost You Everything</p>
                        <p className="font-poppins text-xs text-[#6a5a48] mt-1">8 min read</p>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="bg-[#1c1814] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#a0723a] mb-4">The Window Is Open Now</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6 leading-tight">
            Find Out If Your Business Is Ready
          </h2>
          <p className="font-poppins text-[#a09080] text-lg mb-10 leading-relaxed">
            A free AEO Audit shows you exactly how your business appears in AI today — and what it would take to become the business AI recommends by default.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#a0723a] hover:bg-[#8a6030] text-white font-poppins font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Get Your Free AEO Audit
            </a>
            <a
              href="/blog"
              className="border border-[#6a5a48] hover:border-[#a09080] text-[#a09080] hover:text-white font-poppins font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Read More Articles
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

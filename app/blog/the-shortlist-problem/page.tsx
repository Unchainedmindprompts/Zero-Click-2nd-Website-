import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Shortlist Problem: Why AI Will Recommend One Local Business — And Why It Might Not Be Yours | KodeCite.AI',
  description:
    'As AI assistants and screenless wearables take over local discovery, recommendation lists will compress to one or two names per niche. Here\'s how to become one of them.',
  alternates: {
    canonical: 'https://www.kodecite.ai/blog/the-shortlist-problem',
  },
  openGraph: {
    title: 'The Shortlist Problem: Why AI Will Recommend One Local Business — And Why It Might Not Be Yours',
    description:
      'As AI assistants and screenless wearables take over local discovery, recommendation lists will compress to one or two names per niche. Here\'s how to become one of them.',
    url: 'https://www.kodecite.ai/blog/the-shortlist-problem',
    type: 'article',
    publishedTime: '2026-03-17',
    authors: ['Mark Abplanalp'],
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    'The Shortlist Problem: Why AI Will Recommend One Local Business — And Why It Might Not Be Yours',
  description:
    'As AI assistants and screenless wearables take over local discovery, recommendation lists will compress to one or two names per niche. Here\'s how to become one of them.',
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    url: 'https://www.kodecite.ai/about',
  },
  publisher: { '@id': 'https://www.kodecite.ai/#organization' },
  datePublished: '2026-03-17T00:00:00+00:00',
  dateModified: '2026-03-17T00:00:00+00:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.kodecite.ai/blog/the-shortlist-problem',
  },
  url: 'https://www.kodecite.ai/blog/the-shortlist-problem',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.kodecite.ai/blog-hero.png',
    width: 1200,
    height: 630,
  },
  keywords: [
    'AI recommendation shortlist',
    'wearable AI discovery',
    'answer engine optimization',
    'AEO local business',
    'AI local search',
    'llms.txt',
    'agent.json',
    'zero click search',
    'local business AI visibility',
    'screenless AI',
    'Ray-Ban Meta',
    'ChatGPT local recommendations',
    'Perplexity local search',
    'Google AI Overviews local',
  ],
  articleSection: 'AI Search Strategy',
  wordCount: 1900,
  about: [
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'AI Search Visibility' },
    { '@type': 'Thing', name: 'Wearable AI Discovery' },
    { '@type': 'Thing', name: 'Local Business AI Recommendations' },
    { '@type': 'Thing', name: 'Structured Data for Local Business' },
    { '@type': 'Thing', name: 'Zero Click Search' },
  ],
  mentions: [
    { '@type': 'Thing', name: 'ChatGPT' },
    { '@type': 'Thing', name: 'Perplexity' },
    { '@type': 'Thing', name: 'Google AI Overviews' },
    { '@type': 'Thing', name: 'Ray-Ban Meta' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why will AI assistants recommend only one or two local businesses instead of a full list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Screenless and wearable AI interfaces — smart glasses, earbuds, voice assistants — can't deliver ten options without being unusable. The UX pressure pushes every audio interface toward one high-confidence recommendation. Combined with the reputation risk of bad recommendations, AI systems default to the safest, most verifiable choice. The result is a shortlist of one or two businesses per local niche.",
      },
    },
    {
      '@type': 'Question',
      name: 'What makes a local business eligible for AI recommendation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two criteria determine AI recommendation eligibility: first, genuine real-world excellence — strong reviews, consistent reputation, and honest operations that AI systems can verify. Second, fast, structured, AI-readable web infrastructure — sub-second load times, custom per-page JSON-LD schema, llms.txt, agent.json, and consistent NAP data across all major directories.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is llms.txt and why does it matter for local business AI visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "llms.txt is a natural-language brief deployed at your site's root that tells AI crawlers exactly who you are, what you do, where you operate, and which pages contain your most valuable content. It gives AI systems a direct, unambiguous map to your authority signals — making it significantly easier for them to describe and recommend your business accurately.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get on the AI recommendation shortlist without rebuilding my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on your current platform. Some improvements — adding llms.txt, fixing directory consistency, improving review signals — can be made without rebuilding. However, if your site is on a subscription platform like WordPress, Wix, or Squarespace with real-device load times above two seconds, there are hard performance and schema ceilings that cannot be engineered around without rebuilding on a modern edge chassis like Next.js on Vercel.",
      },
    },
    {
      '@type': 'Question',
      name: 'How soon will wearable AI devices change local search behavior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The behavior shift is already underway with existing voice assistants and AI Overviews. Wearables like Ray-Ban Meta glasses are accelerating it. The technical infrastructure required to rank in Google AI Overviews in 2026 is identical to what will be required for wearable discovery in 2027 and beyond. Businesses building that infrastructure now are compounding an advantage while the competitive window is still open.',
      },
    },
  ],
};

export default function ShortlistProblemPage() {
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

      {/* Hero */}
      <section className="bg-[#f8f5f0] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm text-[#6a5a48] mb-6 font-poppins">
            <Link href="/" className="hover:text-[#a0723a] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#a0723a] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1c1814]">The Shortlist Problem</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#a0723a] font-poppins">AI Search Strategy</span>
            <span className="text-[#6a5a48] text-xs font-poppins">·</span>
            <span className="text-xs text-[#6a5a48] font-poppins">10 min read</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1c1814] leading-tight mb-6">
            The Shortlist Problem: Why AI Will Recommend One Local Business — And Why It Might Not Be Yours
          </h1>
          <p className="font-poppins text-lg text-[#6a5a48] max-w-3xl mb-8 leading-relaxed">
            As AI assistants and screenless wearables take over local discovery, recommendation lists will compress to one or two names per niche. Here&apos;s how to become one of them.
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
                You&apos;re walking to a meeting. You&apos;re wearing a pair of Ray-Ban Meta glasses. You say, out loud, to no one in particular: <em>&quot;Who&apos;s the best estate planning attorney near me?&quot;</em>
              </p>
              <p className="leading-relaxed mb-6">
                You don&apos;t get a list of ten options. You don&apos;t pull out your phone. You don&apos;t open a browser tab.
              </p>
              <p className="leading-relaxed mb-6">
                You hear a name in your ear.
              </p>
              <p className="leading-relaxed mb-10">
                Maybe two names. Probably one. That&apos;s the direction behavior is heading — and the implications for every local professional who lives by inbound are more significant than most people realize.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">From Scrolling to Asking</h2>
              <p className="leading-relaxed mb-6">
                For twenty years, local search worked the same way. Someone typed a query, got a list of ten blue links, and picked one. The game was: be high enough on the list that they picked you.
              </p>
              <p className="leading-relaxed mb-6">
                That game is changing fast.
              </p>
              <p className="leading-relaxed mb-6">
                Sixty percent of Google searches now end without a single click. AI answers the question directly — synthesizing information from multiple sources and delivering a complete response in the search window itself. Google AI Overviews, ChatGPT, Perplexity — they&apos;ve all moved in the same direction. The answer comes to you. You don&apos;t go looking for it.
              </p>
              <p className="leading-relaxed mb-6">
                Wearables accelerate this by an order of magnitude.
              </p>
              <p className="leading-relaxed mb-10">
                When the interface is audio — smart glasses, earbuds, the AI assistant in your car — the entire interaction model changes. Screens invite browsing. Audio demands decisiveness. Nobody wants five names read out loud while they&apos;re walking down the street. The UX pressure on every screenless AI system pushes hard toward one high-confidence recommendation. One name. Maybe two. That&apos;s the entire decision set.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">Why the List Will Compress</h2>
              <p className="leading-relaxed mb-6">
                This isn&apos;t speculation about distant future technology. It&apos;s a logical consequence of how AI recommendation systems work under the constraints of audio interfaces and user patience.
              </p>
              <p className="leading-relaxed mb-6">
                Think about what happens when an AI assistant makes a bad recommendation. The user has a terrible experience. They lose trust in the assistant. They stop using it. For the companies building these systems — Apple, Google, Meta, OpenAI — a bad recommendation is an existential risk to the product.
              </p>
              <p className="leading-relaxed mb-6">
                So the system defaults toward caution. It recommends businesses it can verify. Businesses with consistent signals. Businesses whose online presence matches their real-world reputation. Businesses that are, in the language of machine learning, <em>low risk</em>.
              </p>
              <p className="leading-relaxed mb-6">
                Reading out five options is also cognitively exhausting for the user and reputationally risky for the assistant. One high-confidence answer is better product design.
              </p>
              <p className="leading-relaxed mb-10">
                The result is what you might call a winner&apos;s circle: a small set of local businesses in each niche and geography that meet the threshold for safe recommendation. The businesses outside that circle aren&apos;t ranked lower. They&apos;re simply not in the conversation. The circle is not large. For most local niches in most mid-sized markets, it&apos;s probably three to five businesses at most. In smaller markets, it may be one or two.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">What AI Can&apos;t Fake</h2>
              <p className="leading-relaxed mb-6">
                Before going further, it&apos;s worth being direct about something: none of this infrastructure work matters if the business isn&apos;t genuinely good.
              </p>
              <p className="leading-relaxed mb-6">
                AI systems can&apos;t manufacture integrity. They can read reviews, but they can&apos;t write them — and the signal of authentic, consistent five-star reviews across multiple platforms over multiple years is one that no amount of technical optimization can replicate.
              </p>
              <p className="leading-relaxed mb-6">
                Real-world excellence is the foundation. Consistent NAP data across directories. Genuine client reviews that reflect actual service quality. Real expertise demonstrated through content that answers real questions. Honest operations that hold up to scrutiny.
              </p>
              <p className="leading-relaxed mb-10">
                KodeCite&apos;s work — and any legitimate AEO work — is an amplifier, not a disguise. If the business is excellent, the infrastructure makes sure machines can see and trust that excellence. If the business isn&apos;t excellent, better schema markup won&apos;t save it.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">Why Infrastructure Suddenly Matters Again</h2>
              <p className="leading-relaxed mb-6">
                When an AI crawler visits your website, it&apos;s operating on a budget. Not a financial budget — a compute budget. These systems are scanning millions of pages. They spend more time and resources on pages that load quickly, parse cleanly, and communicate their content clearly. They spend less time — or skip entirely — pages that are slow, bloated, and hard to read.
              </p>
              <p className="leading-relaxed mb-6">
                Most local professional websites are slow, bloated, and hard to read. Not because the designers did bad work, but because of the platforms they were built on.
              </p>
              <p className="leading-relaxed mb-6">
                WordPress with a heavy theme, a page builder, and a dozen active plugins routinely delivers real-device load times of three to eight seconds on a modern phone. Wix and Squarespace are better, but still built on shared infrastructure with inherent performance ceilings. Real estate website subscription builders are often the worst of all — generic templates shared across thousands of agents, with thin or nonexistent structured data.
              </p>
              <p className="leading-relaxed mb-6">
                The contrast with a purpose-built edge deployment is stark. A Next.js site deployed on Vercel&apos;s global CDN loads the same pages in under a second on a real device — not a simulated benchmark, but actual load time on a 2026 iPhone on WiFi or 5G. That&apos;s not a marginal improvement. It&apos;s the difference between getting read and getting skipped.
              </p>
              <p className="leading-relaxed mb-10">
                The critique here isn&apos;t about brand names. It&apos;s about architecture and incentives. Subscription platforms are built to serve thousands of customers at acceptable quality. They&apos;re not built to be the fastest, cleanest, most machine-readable site in your local market. That&apos;s not their job. It&apos;s yours — if you want to be on the shortlist.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">The Machine-Readable Local Expert</h2>
              <p className="leading-relaxed mb-6">
                Speed is necessary but not sufficient. The other half of the equation is structured data — the information architecture that tells AI systems exactly who you are, what you do, where you operate, and why you&apos;re trustworthy.
              </p>
              <p className="leading-relaxed mb-6">
                Most local professional websites communicate this information to humans. They do it poorly, or not at all, for machines.
              </p>
              <p className="leading-relaxed mb-6">
                <strong className="text-[#1c1814] font-semibold">llms.txt</strong> is a natural-language brief for AI crawlers. Think of it as the cover letter your website sends to every AI system that visits. It explains in plain English who the business is, what it does, where it operates, which pages contain the most valuable information, and how the AI should describe the business to users. Most websites don&apos;t have one. The ones that do have a meaningful advantage in how accurately AI systems represent them.
              </p>
              <p className="leading-relaxed mb-6">
                <strong className="text-[#1c1814] font-semibold">agent.json</strong> is a structured identity file — think of it as DNS for AI agents. It encodes the business as a machine-readable entity: services offered, geographic coverage, contact information, authority signals, and the capabilities an autonomous AI system would need to recommend or interact with the business. As AI agents become more autonomous — shopping for services, booking appointments, answering questions on behalf of users — this file becomes the handshake that makes discovery possible.
              </p>
              <p className="leading-relaxed mb-10">
                <strong className="text-[#1c1814] font-semibold">Per-page JSON-LD schema</strong> is the granular layer. Every page on the site — homepage, service pages, location pages, articles, FAQs — carries custom structured data that encodes the specific content and context of that page. Not copy-pasted site-wide boilerplate, but bespoke markup that tells a machine exactly what it&apos;s looking at. Zero invalid items at launch, verified before the site goes live. Together, these layers make it easy for an AI system to say, with confidence: <em>Call this business.</em>
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">The Condensation Hypothesis</h2>
              <p className="leading-relaxed mb-6">
                Here&apos;s the core argument stated plainly.
              </p>
              <p className="leading-relaxed mb-6">
                As AI assistants and screenless wearables go mainstream over the next two to four years, recommendation lists for local services will compress dramatically. The shortlist for any local niche — best estate planning attorney in Coeur d&apos;Alene, best financial advisor in Boise, best real estate agent in Scottsdale — will shrink to one or two names.
              </p>
              <p className="leading-relaxed mb-4">That shortlist will be composed of operators who meet two criteria:</p>
              <p className="leading-relaxed mb-4">
                First, they run genuinely excellent businesses. Strong reviews, consistent reputation, real expertise, honest operations. This is non-negotiable and cannot be engineered around.
              </p>
              <p className="leading-relaxed mb-6">
                Second, they&apos;ve invested in fast, structured, AI-readable web infrastructure. Sub-second load times. Clean markup. Custom schema. AI identity files. Consistent directory presence. Content written to answer questions, not fill pages.
              </p>
              <p className="leading-relaxed mb-6">
                Businesses that meet both criteria will be recommended. Businesses that meet only one will struggle. Businesses that meet neither will be invisible.
              </p>
              <p className="leading-relaxed mb-10">
                Picture this: you&apos;re wearing smart glasses and ask, <em>&quot;Who&apos;s the best real estate agent near me?&quot;</em> The assistant evaluates the local market in real time. It finds three agents with strong reviews, then checks their web presence. Two have slow, generic subscription sites with thin schema. One has a sub-second Next.js site with custom per-page JSON-LD, an llms.txt brief, and consistent NAP data across every major directory. The choice, from the assistant&apos;s perspective, is easy. You hear one name.
              </p>

              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">What This Means for a Local Professional Today</h2>
              <p className="leading-relaxed mb-6">
                The practical implications break down into three areas.
              </p>
              <p className="leading-relaxed mb-4">
                <strong className="text-[#1c1814] font-semibold">Your site needs to load instantly.</strong> Not fast. Instantly. Sub-second on a real device. If you&apos;re on a subscription platform, this may not be achievable without rebuilding. That&apos;s an uncomfortable truth, but it&apos;s the truth.
              </p>
              <p className="leading-relaxed mb-4">
                <strong className="text-[#1c1814] font-semibold">Your expertise needs to be machine-readable.</strong> Schema markup is not optional anymore. Custom per-page JSON-LD that encodes your services, location, credentials, and authority isn&apos;t a nice-to-have — it&apos;s the difference between being understood by AI systems and being guessed at.
              </p>
              <p className="leading-relaxed mb-4">
                <strong className="text-[#1c1814] font-semibold">Your directory presence needs to be consistent.</strong> Google Business Profile, Bing Places, Apple Business Connect, Yelp, BBB — NAP data needs to match exactly across every platform. Inconsistencies create uncertainty for AI systems trying to verify your identity. Uncertainty means you don&apos;t make the shortlist.
              </p>
              <p className="leading-relaxed mb-10">
                <strong className="text-[#1c1814] font-semibold">Your content needs to answer questions, not describe services.</strong> Brochure content tells humans what you do. Answer-first content tells AI systems — and the humans asking them — why you&apos;re the right choice for a specific question in a specific context. The format matters as much as the words.
              </p>

              {/* FAQ / Checklist Section with microdata */}
              <h2 className="font-playfair text-3xl text-[#1c1814] mt-12 mb-5">How to Become the Name AI Recommends</h2>
              <p className="leading-relaxed mb-8">A simple checklist for where to start:</p>

              <div>
                <div className="mb-6">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2">
                    Audit your real-world reputation first.
                  </h3>
                  <p className="leading-relaxed">
                    Reviews, consistency, service quality. No infrastructure work matters if this foundation is weak.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2">
                    Benchmark your site speed.
                  </h3>
                  <p className="leading-relaxed">
                    Run your homepage through PageSpeed Insights. If your mobile score is below 70 or your load time is above two seconds on desktop, you have a structural problem.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2">
                    Check your schema.
                  </h3>
                  <p className="leading-relaxed">
                    Use Google&apos;s Rich Results Test. If you have no structured data, or invalid items, AI systems are guessing about your business.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2">
                    Verify your directory consistency.
                  </h3>
                  <p className="leading-relaxed">
                    Search your business name across GBP, Bing, Apple Maps, and Yelp. Any mismatch in NAP data needs to be corrected.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2">
                    Evaluate your platform honestly.
                  </h3>
                  <p className="leading-relaxed">
                    If you&apos;re on a subscription builder and you&apos;re serious about AI visibility, understand what it can and can&apos;t deliver. Some platforms have hard ceilings on performance and schema depth that can&apos;t be engineered around without rebuilding on a modern edge chassis.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="font-poppins font-semibold text-[#1c1814] mb-2">
                    Add llms.txt.
                  </h3>
                  <p className="leading-relaxed">
                    If you have access to your site&apos;s root directory, this is one of the highest-leverage additions you can make today. A clear, honest brief for AI crawlers about who you are and what you do.
                  </p>
                </div>
              </div>

              <p className="leading-relaxed mb-6">
                The businesses that will dominate local AI recommendations over the next three years are largely the ones making these investments now — while the infrastructure is still novel and the competition is still asleep.
              </p>
              <p className="leading-relaxed mb-10">
                The shortlist is forming. The question is whether your name is on it.
              </p>

              {/* Closing CTA */}
              <div className="bg-[#1c1814] rounded-xl p-8 mt-12">
                <p className="font-poppins text-white leading-relaxed">
                  <strong className="text-[#a0723a]">Not sure where you stand?</strong>{' '}
                  <Link href="/contact" className="text-[#1a56db] underline hover:text-blue-400 transition-colors">
                    Get a free AI Scaffolding Audit
                  </Link>{' '}
                  — we&apos;ll show you exactly how your business currently appears in ChatGPT, Perplexity, and Google AI Overviews, and what it would take to get you on the shortlist.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">

                {/* Stat Card */}
                <div className="bg-[#f2ede4] border border-[#e8e0d4] rounded-xl p-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#a0723a] mb-4">The Shortlist Reality</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-playfair text-4xl text-[#1c1814] font-bold">1–2</p>
                      <p className="font-poppins text-sm text-[#6a5a48] mt-1">businesses AI recommends per local category — not ten</p>
                    </div>
                    <div className="border-t border-[#e8e0d4] pt-4">
                      <p className="font-playfair text-4xl text-[#1c1814] font-bold">&lt;1%</p>
                      <p className="font-poppins text-sm text-[#6a5a48] mt-1">of local businesses have deployed llms.txt or agent.json</p>
                    </div>
                    <div className="border-t border-[#e8e0d4] pt-4">
                      <p className="font-playfair text-4xl text-[#1c1814] font-bold">2027</p>
                      <p className="font-poppins text-sm text-[#6a5a48] mt-1">anticipated mainstream wearable AI hardware — shortlists form before devices ship</p>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#1c1814] rounded-xl p-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#a0723a] mb-3">Free Audit</p>
                  <p className="font-playfair text-xl text-white mb-3">Is Your Business on the Shortlist?</p>
                  <p className="font-poppins text-sm text-[#a09080] mb-5 leading-relaxed">Find out exactly how AI currently describes your business — and what it would take to earn the shortlist position in your market.</p>
                  <Link
                    href="/contact"
                    className="block text-center bg-[#a0723a] hover:bg-[#8a6030] text-white font-poppins font-semibold text-sm py-3 px-4 rounded-lg transition-colors"
                  >
                    Get Your Free AEO Audit
                  </Link>
                </div>

                {/* Related Reading */}
                <div className="bg-[#f2ede4] border border-[#e8e0d4] rounded-xl p-6">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#a0723a] mb-4">Related Reading</p>
                  <div className="space-y-4">
                    <Link href="/blog/false-legacy-layer-ai-visibility" className="block group">
                      <p className="font-poppins text-sm font-semibold text-[#1c1814] group-hover:text-[#a0723a] transition-colors leading-snug">The False Legacy Layer: Why Your AI Mentions Today Could Disappear Tomorrow</p>
                      <p className="font-poppins text-xs text-[#6a5a48] mt-1">9 min read</p>
                    </Link>
                    <div className="border-t border-[#e8e0d4] pt-4">
                      <Link href="/blog/2026-digital-land-rush-ai-visibility" className="block group">
                        <p className="font-poppins text-sm font-semibold text-[#1c1814] group-hover:text-[#a0723a] transition-colors leading-snug">The 2026 Digital Land Rush: Why Waiting Could Cost You Everything</p>
                        <p className="font-poppins text-xs text-[#6a5a48] mt-1">8 min read</p>
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

      {/* Bottom CTA */}
      <section className="bg-[#1c1814] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-[#a0723a] mb-4">The Shortlist Is Forming Now</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6 leading-tight">
            Claim Your Position Before a Competitor Does
          </h2>
          <p className="font-poppins text-[#a09080] text-lg mb-10 leading-relaxed">
            The AI shortlist for your category in your market is still largely uncontested. Start with a free AEO Audit and find out exactly what it would take to become the business AI recommends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#a0723a] hover:bg-[#8a6030] text-white font-poppins font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Get Your Free AEO Audit
            </Link>
            <Link
              href="/blog"
              className="border border-[#6a5a48] hover:border-[#a09080] text-[#a09080] hover:text-white font-poppins font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

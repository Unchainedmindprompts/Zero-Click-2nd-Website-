import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Automating Everything Is Failing Most Businesses — KodeCite.AI',
  description:
    "AI automation is failing 80–95% of businesses. The smarter play in 2026 isn't automating everything — it's making sure AI recommends you first. For local businesses in the Inland Northwest.",
  alternates: {
    canonical: 'https://kodecite.ai/blog/automation-vs-digital-real-estate',
  },
  openGraph: {
    title: 'Why Automating Everything Is Failing Most Businesses — KodeCite.AI',
    description:
      "The real AI opportunity isn't cutting costs — it's making sure AI recommends you first.",
    url: 'https://www.kodecite.ai/blog/automation-vs-digital-real-estate',
    type: 'article',
    publishedTime: '2026-03-10',
    authors: ['Mark Abplanalp'],
  },
};

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    'Why Automating Everything Is Failing Most Businesses — And Why Owning Your Digital Real Estate Is the Smarter Play in 2026',
  description:
    "AI automation is failing 80–95% of businesses. The smarter play in 2026 isn't automating everything — it's making sure AI recommends you first.",
  url: 'https://kodecite.ai/blog/automation-vs-digital-real-estate',
  datePublished: '2026-03-10T00:00:00+00:00',
  dateModified: '2026-03-10T00:00:00+00:00',
  author: { '@id': 'https://www.kodecite.ai/#founder' },
  publisher: { '@id': 'https://www.kodecite.ai/#organization' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kodecite.ai/blog/automation-vs-digital-real-estate',
  },
  keywords: [
    'AI automation',
    'AEO',
    'digital real estate',
    'llms.txt',
    'local business AI',
    "Coeur d'Alene",
    'Inland Northwest',
    'AI visibility',
    'agent.json',
  ],
  about: [
    { '@type': 'Thing', name: 'AI Automation Failure Rates' },
    { '@type': 'Thing', name: 'Answer Engine Optimization' },
    { '@type': 'Thing', name: 'Digital Real Estate' },
    { '@type': 'Thing', name: 'llms.txt' },
    { '@type': 'Thing', name: 'agent.json' },
    { '@type': 'Thing', name: 'Local Business AI Visibility' },
  ],
  mentions: [
    { '@type': 'Person', name: 'Sam Altman', jobTitle: 'CEO, OpenAI' },
    { '@type': 'Person', name: 'Jony Ive', jobTitle: 'Designer, io' },
    { '@type': 'Organization', name: 'OpenAI', url: 'https://openai.com' },
    { '@type': 'Organization', name: 'Perplexity', url: 'https://www.perplexity.ai' },
  ],
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI visibility and why does it matter for local businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI visibility means your business shows up when AI systems like ChatGPT, Perplexity, or voice assistants answer questions about services in your area. As more potential clients skip Google and ask AI directly — "Who\'s a good CPA in Coeur d\'Alene?" — the businesses with proper AI-readable signals get recommended. The ones without those signals get skipped, regardless of how good they are.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is llms.txt and does my business need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Think of llms.txt as your digital ID card for AI systems. It's a small file on your website that tells AI agents exactly who you are, what services you offer, where you operate, and why you're credible. Without it, AI systems have to guess — and they often get it wrong or skip you entirely. For professional service businesses, setting this up is one of the highest-leverage things you can do in 2026.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is AI augmentation different from AI automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automation tries to remove humans from the process. Augmentation keeps humans in the loop but makes them dramatically more effective. For professional service businesses, augmentation is almost always the right play. AI handles research, drafting, and data organization. You handle judgment, relationships, and the trust-building that earns loyalty. Studies consistently show 20–40% better client outcomes with augmentation versus full automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are 80–95% of AI automation projects failing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main culprits are poor data quality, unclear goals, and no measurable ROI framework up front. For local professional service firms there\'s an added issue: automation addresses operational efficiency but does nothing to solve the client acquisition problem. You can run a perfectly automated practice with an empty calendar.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a free AI Scaffolding Audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A free check of what AI systems currently see when they look at your business — your structured data health, site speed, llms.txt and agent.json presence, and overall AI citation authority. No sales pressure. Just an honest picture of where you stand. Takes about 15 minutes on our end.",
      },
    },
  ],
};

const signals = [
  {
    number: '01',
    title: 'llms.txt',
    body: 'Your AI identity card. Tells every AI system who you are, what you do, where you serve, and why to trust you.',
  },
  {
    number: '02',
    title: 'Schema Markup',
    body: 'Structured proof of your expertise — reviews, credentials, certifications — in a format AI reads directly.',
  },
  {
    number: '03',
    title: 'Edge-Fast Site',
    body: 'AI crawlers skip slow sites. Speed is a trust signal, not just a UX detail. Under 1.5 seconds matters.',
  },
  {
    number: '04',
    title: 'agent.json',
    body: 'Future-proofs you for AI agent handoffs — the wave of task-completing AI assistants arriving in 2027.',
  },
  {
    number: '05',
    title: 'Expertise Content',
    body: 'Published answers to real questions — FAQs and local guides that earn AI citations consistently.',
  },
];

const comparisonRows = [
  {
    factor: 'Typical Cost',
    automation: '$20K–$75K+',
    aeo: '$3K–$8K',
    automationNegative: true,
  },
  {
    factor: 'Affects New Client Pipeline',
    automation: 'Rarely',
    aeo: 'Directly',
    automationNegative: true,
  },
  {
    factor: 'ROI Timeline',
    automation: '12–18 months (if at all)',
    aeo: '30–90 days to first signals',
    automationNegative: true,
  },
  {
    factor: 'Failure Rate',
    automation: '80–95%',
    aeo: 'Measurable and verifiable',
    automationNegative: true,
  },
  {
    factor: 'Long-term Moat',
    automation: 'Low — tools commoditize fast',
    aeo: 'High — early signals compound',
    automationNegative: true,
  },
];

const faqItems = [
  {
    q: 'What is AI visibility and why does it matter for local businesses?',
    a: 'AI visibility means your business shows up when AI systems like ChatGPT, Perplexity, or voice assistants answer questions about services in your area. As more potential clients skip Google and ask AI directly — "Who\'s a good CPA in Coeur d\'Alene?" — the businesses with proper AI-readable signals get recommended. The ones without those signals get skipped, regardless of how good they are.',
  },
  {
    q: 'What is llms.txt and does my business need it?',
    a: "Think of llms.txt as your digital ID card for AI systems. It's a small file on your website that tells AI agents exactly who you are, what services you offer, where you operate, and why you're credible. Without it, AI systems have to guess — and they often get it wrong or skip you entirely. For professional service businesses, setting this up is one of the highest-leverage things you can do in 2026.",
  },
  {
    q: 'How is AI augmentation different from AI automation?',
    a: 'Automation tries to remove humans from the process. Augmentation keeps humans in the loop but makes them dramatically more effective. For professional service businesses, augmentation is almost always the right play. AI handles research, drafting, and data organization. You handle judgment, relationships, and the trust-building that earns loyalty. Studies consistently show 20–40% better client outcomes with augmentation versus full automation.',
  },
  {
    q: 'Why are 80–95% of AI automation projects failing?',
    a: "The main culprits are poor data quality, unclear goals, and no measurable ROI framework up front. For local professional service firms there's an added issue: automation addresses operational efficiency but does nothing to solve the client acquisition problem. You can run a perfectly automated practice with an empty calendar.",
  },
  {
    q: 'What is a free AI Scaffolding Audit?',
    a: "A free check of what AI systems currently see when they look at your business — your structured data health, site speed, llms.txt and agent.json presence, and overall AI citation authority. No sales pressure. Just an honest picture of where you stand. Takes about 15 minutes on our end.",
  },
];

export default function AutomationVsDigitalRealEstate() {
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
            <span className="text-[#0a0806] truncate">Why Automating Everything Is Failing Most Businesses</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="category-tag">AI Strategy</span>
            <span className="text-[#6a5a48] text-sm font-poppins">10 min read</span>
          </div>

          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight">
            Why Automating Everything Is Failing Most Businesses —{' '}
            <span className="text-[#a0723a]">And Why Owning Your Digital Real Estate Is the Smarter Play in 2026</span>
          </h1>

          <p className="text-[#6a5a48] text-xl font-poppins leading-relaxed max-w-3xl italic" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
            The real AI opportunity isn&apos;t cutting costs. It&apos;s making sure AI recommends{' '}
            <span style={{ color: '#d4b896' }}>you first.</span>
          </p>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[rgba(100,70,30,0.2)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0723a] flex items-center justify-center">
                <span className="text-[#f8f5f0] font-bold text-sm font-poppins">MA</span>
              </div>
              <div>
                <p className="text-[#0a0806] text-sm font-semibold font-poppins">Mark Abplanalp</p>
                <p className="text-[#6a5a48] text-xs font-poppins">March 2026 · 10 min read</p>
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

                {/* Opening paragraphs */}
                <p className="text-[#6a5a48] text-lg leading-relaxed mb-6">
                  I have talked to several owners here in the Inland Northwest — CPAs, realtors, contractors — who jumped into AI automation because it sounded like the future. The pitch was always the same: &ldquo;Cut the busywork, handle more clients with the same team, free up your time.&rdquo;
                </p>
                <p className="text-[#6a5a48] text-lg leading-relaxed mb-6">
                  For a lot of them, the tools did what they promised. Documents got sorted faster. Emails drafted themselves. Schedules filled in automatically.
                </p>
                <p className="text-[#6a5a48] text-lg leading-relaxed mb-6">
                  But the calendar didn&apos;t magically fill with new clients. The phone stayed quiet. The efficiency was real...{' '}
                  <span style={{ color: '#d4b896' }} className="font-semibold">the growth wasn&apos;t.</span>
                </p>
                <p className="text-[#6a5a48] text-lg leading-relaxed mb-8">
                  That&apos;s the trap most are falling into right now. And it&apos;s why I believe the smarter play in 2026 isn&apos;t automating everything — it&apos;s making sure AI recommends you first.
                </p>

                {/* Stat Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  {[
                    { stat: '80–95%', label: 'of AI automation projects fail to deliver measurable ROI', source: 'MIT Sloan · Gartner · McKinsey 2025–2026' },
                    { stat: '<1%', label: 'of independent local businesses have AI-readable signals set up', source: 'KodeCite.AI audit data 2025–2026' },
                    { stat: '$700B', label: 'combined AI infrastructure spend by hyperscalers in 2026', source: 'CNBC · Futurum · Bridgewater 2026' },
                  ].map((card) => (
                    <div
                      key={card.stat}
                      className="rounded-xl p-5 text-center"
                      style={{ background: '#1a2940', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <p className="font-playfair text-4xl font-bold mb-1" style={{ color: '#d4b896' }}>
                        {card.stat}
                      </p>
                      <p className="text-sm leading-snug mb-2" style={{ color: 'rgba(240,232,216,0.8)' }}>
                        {card.label}
                      </p>
                      <p className="text-xs" style={{ color: 'rgba(240,232,216,0.68)' }}>{card.source}</p>
                    </div>
                  ))}
                </div>

                {/* Section 1 */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Automation Trap: Efficiency Without Demand Is Just Idle Capacity
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here&apos;s what nobody in the automation pitch decks mentions: efficiency only pays off when demand is constant or growing.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Think of it like a pizza shop that buys an automated dough roller. Now you can make twice as many pizzas per hour. But if only 30 people walk in each day, you&apos;ve got an expensive machine sitting idle. You didn&apos;t grow — you just got more efficient at the same volume.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  That&apos;s what pure automation does for most professional service firms. It creates capacity surplus chasing clients — not the other way around.
                </p>

                {/* Pullquote */}
                <blockquote
                  className="my-8 pl-6 py-2"
                  style={{ borderLeft: '4px solid #1d4ed8' }}
                >
                  <p className="text-xl font-semibold italic leading-relaxed" style={{ color: '#0a0806' }}>
                    You built your reputation the hard way — through trust, referrals, showing up. Automation won&apos;t fill your pipeline. But being visible where people are looking? That will.
                  </p>
                </blockquote>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  The more useful question isn&apos;t &ldquo;How do I do more with less?&rdquo; It&apos;s &ldquo;How do I make sure more of the right people find me?&rdquo;
                </p>

                {/* Section 2 */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Smarter Path: Human + AI, Not Human Replaced by AI
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  When I went deep into the research on this, one finding kept coming back: augmentation consistently outperforms full automation by 20–40% on the outcomes that actually matter — client satisfaction, accuracy, retention, trust.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Not efficiency metrics. Real outcomes.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Why? Because the work that CPAs, attorneys, realtors, and contractors do is fundamentally judgment-based. It&apos;s knowing that this particular client is anxious about estate planning because their father just passed — not because of tax rates. It&apos;s knowing that a house on 4th Street in CdA has foundation quirks that don&apos;t show up in inspection reports.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  AI can draft the memo. You add the insight that saves the client thousands. That combination earns loyalty — and referrals.
                </p>

                {/* Highlight Box: Augmentation Formula */}
                <div
                  className="my-8 rounded-xl p-8 relative overflow-hidden"
                  style={{ background: '#1a2940', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="relative z-10">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#d4b896' }}>
                      THE AUGMENTATION FORMULA
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,232,216,0.85)' }}>
                        <span style={{ color: '#d4b896' }} className="font-semibold">AI handles:</span>{' '}
                        Document prep, scheduling, first-draft emails, research aggregation, routine Q&amp;A
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,232,216,0.85)' }}>
                        <span style={{ color: '#d4b896' }} className="font-semibold">You handle:</span>{' '}
                        Judgment calls, relationship moments, complex advice, community presence
                      </p>
                      <p className="text-sm leading-relaxed font-semibold" style={{ color: 'rgba(240,232,216,0.9)' }}>
                        <span style={{ color: '#d4b896' }}>Result:</span>{' '}
                        20–40% better client outcomes — without the costly automation mistake
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Here in the Inland Northwest, your edge isn&apos;t a bigger tech stack. Your edge is that you&apos;re local, you&apos;re known, and you&apos;ve earned real trust. AI should amplify that — not replace it.
                </p>

                {/* Section 3 */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Bigger Opportunity: Making AI Recommend You First
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Augmentation is the smarter internal play. But the biggest opportunity in front of local businesses right now is external — it&apos;s about where new clients find you.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Six months ago, someone in Spokane needing a business attorney would Google it. Today, increasingly, they open ChatGPT or Perplexity and just ask: &ldquo;Who&apos;s a good business attorney in Spokane Valley?&rdquo;
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  And those AI systems answer. Directly. No links clicked. No search results scrolled. They recommend someone.
                </p>

                {/* Scenario Box */}
                <div
                  className="my-8 rounded-xl p-8 relative overflow-hidden"
                  style={{ background: '#1a2940', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="absolute top-4 left-5 text-8xl leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(255,255,255,0.08)', fontFamily: 'Georgia, serif' }}
                  >
                    &ldquo;
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4b896' }}>
                      THE COEUR D&apos;ALENE SCENARIO
                    </p>
                    <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(240,232,216,0.85)' }}>
                      Someone asks their AI glasses: &ldquo;Find me a local CPA who handles construction taxes.&rdquo; The AI doesn&apos;t open Google. It queries its knowledge layer, synthesizes business signals, and returns one name.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(240,232,216,0.7)' }}>
                      The business that gets recommended was not the one that spent the most on ads last month — it was the one whose digital presence was readable, consistent, and credible enough for the AI to trust.
                    </p>
                  </div>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Will that be you? Or your competitor who set up their AI signals six months before you did?
                </p>

                {/* Section 3a */}
                <h3 className="font-playfair font-bold text-xl text-[#0a0806] mt-8 mb-4">
                  What AI-Readable Signals Actually Look Like
                </h3>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Think of it like the difference between a neon sign on Sherman Avenue and a note taped to a telephone pole in the dark. Both technically announce your existence. Only one gets seen.
                </p>

                {/* Signal Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  {signals.map((signal) => (
                    <div
                      key={signal.number}
                      className="rounded-xl p-6 transition-all duration-300"
                      style={{
                        background: '#f2ede4',
                        border: '1px solid rgba(160,114,58,0.2)',
                      }}
                    >
                      <p className="font-playfair text-3xl font-bold mb-3" style={{ color: 'rgba(212,184,150,0.5)' }}>
                        {signal.number}
                      </p>
                      <p className="font-semibold text-[#0a0806] mb-2 leading-snug">{signal.title}</p>
                      <p className="text-[#6a5a48] text-sm leading-relaxed">{signal.body}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  Less than 1% of independent professionals in markets like ours have set these signals up. That&apos;s not a scary stat — it&apos;s a wide-open door.
                </p>

                {/* Section 4 */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  The Investment That Proves This Is Real
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  I get it — new tech hype gets exhausting. But follow the capital.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  The biggest tech companies in the world are collectively spending around $700 billion on AI infrastructure in 2026 alone. They&apos;re not doing it to make better memes or prettier pictures.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  They&apos;re building the highways, the railways, and the electric grid of a new economy. The infrastructure that everything else will run on. And one of the changes that comes with that shift is how people discover and interact with businesses like yours.
                </p>

                {/* Highlight Box: Why This Matters */}
                <div
                  className="my-8 rounded-xl p-8 relative overflow-hidden"
                  style={{ background: '#1a2940', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="relative z-10">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#d4b896' }}>
                      WHY THIS MATTERS FOR YOUR BUSINESS
                    </p>
                    <p className="text-base leading-relaxed mb-3" style={{ color: 'rgba(240,232,216,0.85)' }}>
                      That infrastructure is being built specifically to handle AI agents answering queries — the same queries your future clients are asking right now about who to hire in Spokane, Coeur d&apos;Alene, or Kalispell.
                    </p>
                    <p className="text-base leading-relaxed font-semibold" style={{ color: 'rgba(240,232,216,0.9)' }}>
                      The rails are being built. The question is whether your business is on the map when the trains start running.
                    </p>
                  </div>
                </div>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  OpenAI and Jony Ive — the designer behind the original iPhone — are building a pocket AI device. Late 2026 unveil, first shipments no earlier than early 2027. It&apos;s not replacing your phone — it&apos;s supplementing it with something quieter and smarter.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  And think about it — Ray-Ban and Oakley AI glasses are already here. People are wearing them right now. This isn&apos;t the beginning of a maybe. It&apos;s the early chapter of something already in motion.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  When someone standing outside a coffee shop in CdA asks their glasses &ldquo;Find me a local CPA who handles construction taxes&rdquo; — the AI says the name of whoever has the right signals in place.
                </p>

                {/* Pullquote with attribution */}
                <blockquote
                  className="my-8 pl-6 py-2"
                  style={{ borderLeft: '4px solid #1d4ed8' }}
                >
                  <p className="text-xl font-semibold italic leading-relaxed mb-4" style={{ color: '#0a0806' }}>
                    &ldquo;Sitting in the most beautiful cabin by a lake and in the mountains and just enjoying the peace and calm... You trust it over time, and it does have just this incredible contextual awareness of your whole life.&rdquo;
                  </p>
                  <footer className="text-sm" style={{ color: '#6a5a48' }}>
                    — Sam Altman, CEO, OpenAI · Emerson Collective Demo Day 2025
                  </footer>
                </blockquote>

                {/* Section 4a: Comparison */}
                <h3 className="font-playfair font-bold text-xl text-[#0a0806] mt-8 mb-4">
                  Automation vs. Digital Real Estate: A Direct Comparison
                </h3>

                <div className="my-8 overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(160,114,58,0.2)' }}>
                  <table className="w-full min-w-[480px] text-sm">
                    <thead>
                      <tr style={{ background: '#1a2940' }}>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-wider uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>Factor</th>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-wider uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>Full Automation</th>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-wider uppercase" style={{ color: 'rgba(240,232,216,0.6)' }}>Digital Real Estate (AEO)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr
                          key={row.factor}
                          style={{ background: i % 2 === 0 ? '#f2ede4' : '#f8f5f0' }}
                        >
                          <td className="px-5 py-3 font-semibold text-[#0a0806]">{row.factor}</td>
                          <td className="px-5 py-3">
                            <span style={{ color: '#dc2626' }}>{row.automation}</span>
                          </td>
                          <td className="px-5 py-3">
                            <span style={{ color: '#16a34a' }}>{row.aeo}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Section 5: Action Plan */}
                <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mt-10 mb-4">
                  Your Action Plan: Own the AI Layer Before Nationals Do
                </h2>

                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  Here&apos;s what makes this moment unusual: the cost to establish AI visibility is still low. We&apos;re in the pre-crowded window — the equivalent of claiming a great domain name in 1998 or setting up a solid Google Business Profile in 2012 before everyone else figured it out.
                </p>
                <p className="text-[#6a5a48] leading-relaxed mb-6">
                  National chains and PE roll-ups are quietly building their AI presence across hundreds of locations at once. Your advantage is that you only need to do it once — and the real community trust you&apos;ve earned over years is exactly the raw material AI systems reward.
                </p>

                <ul className="space-y-3 my-6">
                  {[
                    'Set up your llms.txt — your AI identity card. Takes hours, lasts years.',
                    'Implement schema markup — structured proof of your expertise, location, and credibility.',
                    'Audit your site speed — AI crawlers skip slow sites. Under 1.5 seconds matters.',
                    'Publish expertise content — FAQs, local guides, answers to the questions your clients actually ask.',
                    'Add agent.json — position yourself for the AI agent handoff economy arriving in 2027.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: '#1d4ed8' }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#6a5a48] leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>

                {/* Closing pullquote */}
                <blockquote
                  className="my-8 pl-6 py-2"
                  style={{ borderLeft: '4px solid #1d4ed8' }}
                >
                  <p className="text-xl font-semibold italic leading-relaxed" style={{ color: '#0a0806' }}>
                    Your community reputation is gold. Your expertise is exactly the raw material AI systems are looking for. The only missing piece is making sure AI can see it.
                  </p>
                </blockquote>

                <p className="text-[#6a5a48] leading-relaxed mb-8">
                  You&apos;re sitting on a{' '}
                  <span style={{ color: '#d4b896' }} className="font-semibold">gold mine</span>.
                  {' '}You just haven&apos;t filed the claim yet.
                </p>

                {/* FAQ Section */}
                <section className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <h2 className="font-playfair font-bold text-2xl text-[#0a0806] mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {faqItems.map((item) => (
                      <div
                        key={item.q}
                        className="rounded-xl p-6"
                        style={{ background: '#f2ede4', border: '1px solid rgba(160,114,58,0.2)' }}
                      >
                        <h3 className="font-semibold text-[#0a0806] mb-3 leading-snug">
                          {item.q}
                        </h3>
                        <p className="text-[#6a5a48] leading-relaxed text-sm">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="mt-12 pt-8 border-t border-[rgba(100,70,30,0.2)]">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#a0723a] font-semibold font-poppins hover:text-[#8a5f2e] transition-colors"
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

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.2)] p-6">
                  <p className="eyebrow mb-4 text-xs">BY THE NUMBERS</p>
                  <div className="space-y-4">
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="font-bold text-3xl font-poppins" style={{ color: '#d4b896' }}>80–95%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">of AI automation projects fail to deliver measurable ROI</p>
                    </div>
                    <div className="border-b border-[rgba(100,70,30,0.2)] pb-4">
                      <p className="font-bold text-3xl font-poppins" style={{ color: '#d4b896' }}>&lt;1%</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">of local businesses have AI-readable signals in place</p>
                    </div>
                    <div>
                      <p className="font-bold text-3xl font-poppins" style={{ color: '#d4b896' }}>Now</p>
                      <p className="text-[#6a5a48] text-sm font-poppins mt-1">the window is still open in most local markets</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(160,114,58,0.3)] p-6">
                  <p className="font-poppins font-bold text-[#0a0806] text-lg mb-3 leading-snug">
                    Is AI Finding You — Or Skipping You?
                  </p>
                  <p className="text-[#6a5a48] text-sm font-poppins leading-relaxed mb-5">
                    Find out exactly how your site looks to AI right now — and what it takes to become the recommended name in your market.
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">
                    Book Your Free Scaffolding Audit
                  </Link>
                </div>

                <div className="bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/aeo-geo-making-seo-better" className="block group">
                      <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                        AEO + GEO Isn&apos;t Replacing SEO — It&apos;s Making It Better
                      </p>
                      <p className="text-[#6a5a48] text-xs font-poppins mt-1">10 min read</p>
                    </Link>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/false-legacy-layer-ai-visibility" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          The False Legacy Layer: Why Your AI Citations Could Disappear Tomorrow
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">9 min read</p>
                      </Link>
                    </div>
                    <div className="border-t border-[rgba(100,70,30,0.2)] pt-4">
                      <Link href="/blog/2026-digital-land-rush-ai-visibility" className="block group">
                        <p className="text-[#0a0806] text-sm font-semibold font-poppins leading-snug group-hover:text-[#a0723a] transition-colors">
                          The 2026 Digital Land Rush: Why Waiting Could Cost Your Business Everything
                        </p>
                        <p className="text-[#6a5a48] text-xs font-poppins mt-1">8 min read</p>
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

      {/* CTA Block */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: '#1c1814' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(160,114,58,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">READY TO OWN YOUR MARKET?</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4" style={{ color: 'rgba(240,232,216,0.9)' }}>
            Is AI Finding You — Or Skipping You?
          </h2>
          <p className="font-poppins mb-8 leading-relaxed" style={{ color: 'rgba(240,232,216,0.6)' }}>
            If this resonates, let&apos;s check where your business stands — no cost, no pressure. Just clarity on what AI systems see when someone asks about your services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Book Your Free Scaffolding Audit →
            </Link>
            <Link href="/blog" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">
              Read More Articles
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: 'rgba(240,232,216,0.72)' }}>
            kodecite.ai · No cost. No pitch. Just clarity on where you stand.
          </p>
        </div>
      </section>
    </>
  );
}

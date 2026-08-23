import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Why Now: Businesses Need a Usable Model, Not Just Visibility',
  description:
    'Customers already ask AI. Finding a name is not enough. A business needs one owned record of what is true, what is allowed, and what a safe next step is.',
  alternates: {
    canonical: 'https://www.kodecite.ai/why-now',
  },
  openGraph: {
    title: 'Why Now — Usable by AI, Not Just Findable',
    description:
      'Large companies are rebuilding how customers find and act with businesses. The practical response is owned infrastructure — not a land grab and not a citation guarantee.',
    url: 'https://www.kodecite.ai/why-now',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Now — Usable by AI, Not Just Findable',
  description:
    'Customers already ask AI. Finding a name is not enough. A business needs one owned record of what is true, what is allowed, and what a safe next step is.',
  author: {
    '@type': 'Person',
    name: 'Mark Abplanalp',
    jobTitle: 'Founder',
    worksFor: {
      '@type': 'Organization',
      name: 'KodeCite.AI',
      url: 'https://www.kodecite.ai',
    },
  },
  publisher: {
    '@type': 'Organization',
    name: 'KodeCite.AI',
    url: 'https://www.kodecite.ai',
  },
  about: [
    'Owned business infrastructure',
    'Agent-ready businesses',
    'Capability contracts',
    'Controlled action',
    'AI Hardware',
    'llms.txt',
    'agent.json',
  ],
  mentions: [
    { '@type': 'Organization', name: 'OpenAI', url: 'https://openai.com' },
    { '@type': 'Organization', name: 'Microsoft', url: 'https://microsoft.com' },
    {
      '@type': 'Person',
      name: 'Sam Altman',
      jobTitle: 'CEO',
      worksFor: { '@type': 'Organization', name: 'OpenAI' },
    },
    {
      '@type': 'Person',
      name: 'Jony Ive',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'io Products' },
    },
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.kodecite.ai/why-now',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do businesses need to optimize for AI search now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'People already ask ChatGPT, Perplexity, and Google AI. Hardware may change the interface later. The practical work now is publishing one owned record of what the business is, what it can do, and what a safe next step is. That is not a land grab and not a promise of permanent placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the OpenAI Jony Ive AI device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "OpenAI acquired Jony Ive's design studio io for $6.4 billion in 2025 to build a family of AI-native hardware devices. The first is a screenless, pocket-sized device with cameras and microphones that builds contextual awareness of the user's world and routes queries to AI agents. Expected to unveil late 2026, first shipments no earlier than early 2027.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is llms.txt and why does my business need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "llms.txt is a plain-text discovery file at the domain root. Some AI systems look for it. Not every system reads it. It does not make AI know a business with certainty. KodeCite publishes one as a component of distribution — not as the product.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is agent.json?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'agent.json is a machine-readable discovery file. On KodeCite.ai it is identity and discovery only. It does not accept autonomous agent submissions. A real action requires a published capability, validation, and control — and only when the business permits it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from AI search optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical cleanup can show quickly when pages are fast and schema is valid. Recommendation and action are separate. We do not publish a time-to-citation or promise that a specific engine will name the business.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an Agent Readiness Review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A written look at what AI can understand, verify, and safely do with a business today — identity, services, geography, credentials, policies, discovery, action paths, and control gaps. Free within two business days. It is a review request, not a booking.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Why Now', item: 'https://www.kodecite.ai/why-now' },
  ],
};

export default function WhyNowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="eyebrow mb-4">WHY NOW</p>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight max-w-4xl">
            Finding you is not the same as{' '}
            <span className="text-[#a0723a]">being usable.</span>
          </h1>
          <p className="font-cormorant italic text-2xl md:text-3xl text-[#6a5a48] max-w-3xl leading-relaxed">
            Customers already ask AI. The work is publishing what is true, what is allowed, and what a safe next step is.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Intro */}
      <section className="py-20 bg-[#f2ede4] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed text-lg">
              <p>
                The biggest tech companies in the world are collectively spending around{' '}
                <strong className="text-[#0a0806]">$700 billion on AI infrastructure in 2026 alone</strong>. They&apos;re not doing it to make better memes or prettier pictures.
              </p>
              <p>
                They&apos;re building the highways, the railways, and the electric grid of a new economy. The infrastructure that everything else will run on. And one of the changes that comes with that shift is how people discover and interact with businesses like yours.
              </p>
              <p>
                That change is already on phones. Hardware may make it louder later. The practical response is owned infrastructure — not a land grab, and not a promise that every AI system will read a discovery file.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* OpenAI / Jony Ive */}
      <section className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">THE BIG BET: OPENAI&apos;S $6 BILLION MOVE</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              Why Would OpenAI Spend $6.4 Billion on a{' '}
              <span className="text-[#a0723a]">Pocket-Sized Device?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                In 2025, OpenAI — the company behind ChatGPT — paid $6.4 billion to acquire Jony Ive&apos;s design studio. Ive is the designer behind the original iPhone, iPod, and iPad. Their mission: build a family of AI devices starting with something small enough to fit in your pocket, with no screen, always aware of your world through cameras and microphones.
              </p>
              <p>
                Sam Altman, OpenAI&apos;s CEO, described why they&apos;re building it. He said using today&apos;s phones feels like &ldquo;walking through Times Square with flashing lights and people bumping into you.&rdquo; The new device should feel like &ldquo;sitting in the most beautiful cabin by a lake and in the mountains and just enjoying the peace and calm.&rdquo;
              </p>
              <p>
                He added: <em>&ldquo;You trust it over time, and it does have just this incredible contextual awareness of your whole life.&rdquo;</em>
              </p>
              <p>
                Think about what that means. Imagine walking past a business and your pocket AI quietly says: &ldquo;Hey — that&apos;s a great spot for exactly what you need.&rdquo; But only if your business is easy for it to see and trust.
              </p>
              <p>
                The first device is expected to <strong className="text-[#0a0806]">unveil in late 2026</strong>, with first shipments no earlier than early 2027.
              </p>
              <p>
                It&apos;s not replacing your phone — it&apos;s supplementing it with something quieter and smarter.
              </p>
              <p>
                And think about it — Ray-Ban and Oakley AI glasses are already here. People are wearing them right now. This isn&apos;t the beginning of a maybe. It&apos;s the early chapter of something already in motion.
              </p>
              <p>
                Funded. Prototyped. Designed. With a ship date.
              </p>
            </div>
          </ScrollReveal>

          {/* Pull Quote */}
          <ScrollReveal delay={250}>
            <blockquote className="mt-12 border-l-4 border-[#1a56db] pl-6 py-2">
              <p className="font-cormorant italic text-2xl md:text-3xl text-[#0a0806] leading-relaxed mb-4">
                &ldquo;Sitting in the most beautiful cabin by a lake and in the mountains and just enjoying the peace and calm&hellip; You trust it over time, and it does have just this incredible contextual awareness of your whole life.&rdquo;
              </p>
              <cite className="font-poppins text-sm text-[#6a5a48] not-italic">
                — Sam Altman, CEO, OpenAI, Emerson Collective Demo Day 2025
              </cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* What Happens to Invisible Businesses */}
      <section className="py-24 md:py-32 bg-[#f2ede4] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">WHAT HAPPENS WHEN AI KNOWS YOUR WORLD BETTER THAN YOU DO?</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              When Someone Asks Their AI for a Recommendation —{' '}
              <span className="text-[#a0723a]">What Happens to Your Business?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                Here&apos;s the scenario. Someone asks their phone — or soon, their glasses or pocket device: &ldquo;Find me the best [your service] near me.&rdquo;
              </p>
              <p>
                The AI doesn&apos;t show ten blue links. It picks one or two businesses and says: &ldquo;This one.&rdquo;
              </p>
              <p>
                How does it decide? It looks for businesses it can read and trust. Businesses with clean, structured information it can understand — not just a website built for humans to browse, but signals that tell AI systems exactly who you are, what you do, where you are, and why you&apos;re trustworthy.
              </p>
              <p>
                Think of it like having a neon sign vs. a handwritten note in a dark window. Both exist. Only one gets seen.
              </p>
              <p>
                A business with a clear, owned record is easier to understand and safer to recommend. A business without one can still exist and still be found in pieces. The gap is reliability, not a claim that every other site is invisible.
              </p>
            </div>
          </ScrollReveal>

          {/* Callout Card */}
          <ScrollReveal delay={250}>
            <div className="mt-12 rounded-2xl border-l-4 border-[#1a56db] bg-[#f8f5f0] p-8 shadow-sm">
              <p className="font-poppins font-semibold text-[#0a0806] mb-3 uppercase tracking-widest text-xs">
                This Is Already Happening — Not Just Coming
              </p>
              <p className="font-poppins text-[#6a5a48] leading-relaxed">
                ChatGPT, Perplexity, Grok, and Google&apos;s AI answers are already handling hundreds of millions of searches per day without showing traditional results. The hardware just accelerates what&apos;s already in motion.
              </p>
            </div>
          </ScrollReveal>

          {/* Simple Timeline Graphic */}
          <ScrollReveal delay={350}>
            <div className="mt-10 rounded-2xl bg-[#f8f5f0] border border-[rgba(100,70,30,0.15)] p-8">
              <div className="flex flex-col md:flex-row md:items-start relative">
                <div className="hidden md:block absolute" style={{ top: '16px', left: 'calc(16.666% + 16px)', right: 'calc(16.666% + 16px)', height: '2px', background: '#a0723a', opacity: 0.35 }} />
                {[
                  { label: 'NOW', heading: 'AI answers live', lines: ['ChatGPT · Perplexity', 'Google AI Overviews'] },
                  { label: 'LATE 2026', heading: 'OpenAI device unveils', lines: ['Ray-Ban already here', 'First shipments announced'] },
                  { label: '2027+', heading: 'Everyday use begins', lines: ['Ambient AI goes mainstream', 'The rush starts'] },
                ].map((step, i) => (
                  <div key={step.label} className="flex-1 flex flex-col items-center text-center px-4 relative">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-3 relative z-10" style={{ borderColor: '#a0723a', background: '#f8f5f0' }}>
                      <div className="w-3 h-3 rounded-full" style={{ background: '#a0723a' }} />
                    </div>
                    {i < 2 && <div className="md:hidden w-px h-6 mb-3" style={{ background: 'rgba(160,114,58,0.3)' }} />}
                    <span className="font-poppins font-bold text-xs mb-1" style={{ color: '#a0723a', letterSpacing: '0.18em' }}>{step.label}</span>
                    <p className="font-poppins font-semibold text-[#0a0806] text-sm mb-1">{step.heading}</p>
                    {step.lines.map((line) => <p key={line} className="font-poppins text-xs text-[#6a5a48]">{line}</p>)}
                    {i < 2 && <div className="md:hidden h-4" />}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Nationals / Consolidation */}
      <section className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">BIG CHAINS ARE QUIETLY GETTING AHEAD — HERE&apos;S HOW</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              The Nationals Already Know.{' '}
              <span className="text-[#a0723a]">Your Competitors Might Not. Yet.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                While most independent business owners are focused on running their operations — which is exactly what they should be doing — national chains and private equity roll-ups are quietly building the infrastructure to dominate AI recommendations at scale.
              </p>
              <p>
                They&apos;re rebuilding their websites on faster platforms. They&apos;re adding machine-readable signals across thousands of locations at once. They&apos;re making themselves easy for AI to find, read, and recommend — before most people even know that&apos;s a thing.
              </p>
              <p>
                Here in Coeur d&apos;Alene, Spokane, and across the Inland Northwest, you&apos;ve built your reputation one neighbor at a time. Real reviews. Real relationships. Real expertise. That&apos;s exactly the raw material AI systems are designed to reward.
              </p>
              <p>
                But only if it&apos;s structured in a way AI can actually read.
              </p>
              <p>
                A PE-backed chain with 200 locations can deploy this across all of them in a week. You have to do it one business at a time. The good news: you only have to do it once. And the trust you&apos;ve already built? That&apos;s something no national chain can manufacture overnight.
              </p>
              <p>
                Once the rush hits in 2027 and everyone scrambles to catch up, doing this costs significantly more — and in some markets, the best territory will already be gone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* What We Do (plain language) */}
      <section className="py-24 md:py-32 bg-[#f2ede4] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">THE SIMPLE, SMART WAY TO FIGHT BACK</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-4 leading-tight">
              Fast. Clear.{' '}
              <span className="text-[#a0723a]">Built So AI Picks You First.</span>
            </h2>
            <p className="text-[#6a5a48] font-poppins leading-relaxed mb-10">
              Here&apos;s what we actually do — without the tech jargon.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-8">
              {[
                {
                  title: 'We build fast websites from scratch.',
                  body: <>Not patches on slow, outdated platforms. Modern sites that load instantly anywhere in the world. Why does speed matter? AI helpers won&apos;t wait for slow pages. <strong className="text-[#0a0806]">Think of it like a shop with a long line out the door versus one that&apos;s quick and easy — customers and AI both go to the fast one.</strong></>,
                },
                {
                  title: 'We give your business a digital ID card.',
                  body: 'A simple file that tells every major AI system exactly who you are, what you do, where you\'re located, and why you should be trusted. Most businesses don\'t have one. You will.',
                },
                {
                  title: 'We tell AI agents how to work with your business.',
                  body: 'A behind-the-scenes file that lets AI helpers understand your services and send customers your way — automatically, without anyone typing a search. Think of it as your business having a direct line to the AI systems making recommendations.',
                },
                {
                  title: 'We structure your content so AI cites you.',
                  body: 'Every page, every article, every FAQ — formatted so that when an AI is deciding who to reference as the local expert, your content is already in the right shape to be chosen.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#1a56db] flex-shrink-0" />
                  <p className="text-[#6a5a48] font-poppins leading-relaxed">
                    <span className="font-semibold text-[#0a0806]">{item.title} </span>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="mt-10 text-[#6a5a48] font-poppins leading-relaxed">
              This isn&apos;t about gaming anything. It&apos;s about making sure your real expertise and community trust are visible to the systems that are increasingly deciding who gets the call.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">WHEN IS THIS REALLY HITTING? (SPOILER: THE SETUP STARTS NOW)</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              Nobody Knows the Exact Date.{' '}
              <span className="text-[#a0723a]">Everybody Knows It&apos;s Coming.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                Will it be twelve months before this reshapes your market? Twenty-four? The honest answer is that hardware timelines have variables — manufacturing, regulations, consumer adoption.
              </p>
              <p>
                But here&apos;s what doesn&apos;t have variables: the AI systems are live right now. ChatGPT has over <strong className="text-[#0a0806]">300 million weekly users</strong>. Google&apos;s AI answers appear on over a <strong className="text-[#0a0806]">billion searches every day</strong>. Perplexity is growing fast. The recommendations those systems are making today are being shaped by the signals businesses have already put in place.
              </p>
              <p>
                Hardware timelines have variables. The work that does not depend on a ship date is publishing one owned record of the business.
              </p>
              <p>
                And even if the hardware takes a bit longer to go mainstream — 2027 or 2028 for most people — the AI answers happening on phones today are already shifting recommendations right now.
              </p>
              <p>
                Waiting does not make the underlying problem disappear. It also does not mean a competitor automatically owns a permanent slot.
              </p>
              <p>
                The useful move is the same either way: make the business understandable, verifiable, and safe to act with.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
      <section className="py-24 bg-[#f2ede4] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">QUICK ANSWERS TO COMMON QUESTIONS</p>
            <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mb-10">
              Things People Ask Us All the Time
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {[
              {
                q: "I'm not very technical. Is this something I can actually understand?",
                a: "Yes. You need to understand what is true about the business, what a customer can request, and what must stay human. We handle the technical pieces. We do not sell early-or-late fear.",
              },
              {
                q: 'How is this different from regular SEO?',
                a: "SEO, AEO, and GEO overlap as discovery. They help people and engines find a business. The complete job is publishing one owned record so a system can understand the business, know what it is allowed to do, and take the next safe step when you permit it.",
              },
              {
                q: 'What exactly is a "digital ID card" for my business?',
                a: 'llms.txt is a plain-text discovery file. Some AI systems look for it. Not every system reads it. It does not make AI know a business with certainty. It is a distribution component — not the product.',
              },
              {
                q: 'What\'s the "AI agent" file you mentioned?',
                a: "agent.json is a machine-readable discovery file. On KodeCite.ai it is identity and discovery only. It does not accept autonomous submissions. A real action needs a published capability and control — only when the business permits it.",
              },
              {
                q: 'How long before I see results?',
                a: 'Technical cleanup can show quickly when pages are fast and schema is valid. Recommendation and action are separate. We do not publish a time-to-citation or promise that a specific engine will name the business.',
              },
              {
                q: "What's the free review?",
                a: "An Agent Readiness Review looks at what AI can understand, verify, and safely do with the business today. Free written review within two business days. It is a review request, not a booking.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="border-b border-[rgba(100,70,30,0.15)] pb-8">
                  <h3 className="font-poppins font-semibold text-[#0a0806] text-base mb-3">{item.q}</h3>
                  <p className="text-[#6a5a48] font-poppins leading-relaxed text-sm">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24 bg-[#1c1814] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4" style={{ color: '#a0723a' }}>YOUR NEXT STEP</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#f0e8d8] mb-6 leading-tight">
              See what AI can understand, verify, and{' '}
              <span className="text-[#a0723a]">safely do today.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-[rgba(240,232,216,0.7)] font-poppins leading-relaxed text-lg mb-10">
              You&apos;ve built real trust the hard way. The next job is publishing that truth so a system can use it without inventing a booking, a price, or an acceptance.
              <br /><br />
              We start with an Agent Readiness Review — identity, services, geography, policies, discovery, and whether a safe next action exists. No citation guarantee.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <Link
              href="/machine-read"
              className="inline-block font-poppins font-semibold text-white px-10 py-4 rounded-md text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1a56db' }}
            >
              Request an Agent Readiness Review
            </Link>
            <p className="mt-4 text-[rgba(240,232,216,0.70)] font-poppins text-xs">
              Free written review within two business days. This is a review request, not a booking.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

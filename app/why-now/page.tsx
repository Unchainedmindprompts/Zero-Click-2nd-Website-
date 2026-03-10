import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Why Now | KodeCite.AI — The AI Land Grab Is Already Underway',
  description:
    "Trillions committed. Hardware shipping. Agents routing around invisible businesses. Here's why the window to claim your AI search territory is open right now — and won't stay open.",
  alternates: {
    canonical: 'https://www.kodecite.ai/why-now',
  },
  openGraph: {
    title: 'Why Now — The AI Land Grab Is Already Underway',
    description:
      "The frontier labs aren't spending trillions to make better memes. They're rebuilding commerce. Here's what that means for your business.",
    url: 'https://www.kodecite.ai/why-now',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Now — The AI Land Grab Is Already Underway',
  description:
    "Trillions committed. Hardware shipping. Agents routing around invisible businesses. Here's why the window to claim your AI search territory is open right now.",
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
    'Answer Engine Optimization',
    'AI Search Visibility',
    'Agent-to-Agent Economy',
    'AI Hardware',
    'Local Business Marketing',
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
        text: 'AI systems including ChatGPT, Perplexity, and Google AI Overviews are already routing hundreds of millions of queries per day. The authority signals these systems use to decide who to recommend are being established now — before AI hardware like the OpenAI/Jony Ive device ships in 2027. Businesses that build machine-readable infrastructure today claim territory before the mainstream wave arrives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the OpenAI Jony Ive AI device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "OpenAI acquired Jony Ive's design studio io for $6.4 billion in 2025 to build a family of AI-native hardware devices. The first is a screenless, pocket-sized device with cameras and microphones that builds contextual awareness of the user's world and routes queries to AI agents. Expected to ship early 2027.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is agent.json and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "agent.json is a machine-readable file that tells AI agents what your business does, what it can transact, and how to interact with it. As the agent-to-agent (A2A) economy matures under the Linux Foundation's A2A protocol standard, businesses with agent.json files will be discoverable and transactable by autonomous agents. Adoption is currently under 1% among local businesses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is llms.txt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'llms.txt is a plain text file placed at your domain root that tells large language models who your business is, what to cite you for, what pages exist, and how to transact with you. Modeled on robots.txt, it functions as a digital identity card written for AI systems rather than humans.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from AI search optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical wins appear in 30–60 days: schema errors clear, rich results appear, PageSpeed improves. Google entity recognition typically follows in 60–90 days. The AEO and GEO layer compounds over 3–6 months as LLMs begin citing structured entities. Real separation from competitors — AI agent recommendations and compound authority — builds over 6–12 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an AI Scaffolding Audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A free assessment of your business's current machine-readability: schema markup health, structured data validation, agent signal presence (llms.txt, agent.json), site speed and edge-readiness, and overall AI citation authority. KodeCite.AI provides this at no cost before any engagement.",
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
            The Land Grab Is{' '}
            <span className="text-[#a0723a]">Already Underway.</span>
          </h1>
          <p className="font-cormorant italic text-2xl md:text-3xl text-[#6a5a48] max-w-3xl leading-relaxed">
            Most businesses won&apos;t know they&apos;ve lost until the territory is gone.
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
                The frontier labs aren&apos;t dropping hundreds of billions — heading toward trillions — to make better memes or pictures.
              </p>
              <p>
                They&apos;re rebuilding commerce. Piece by piece. Layer by layer. And they&apos;re doing it around autonomous agents that discover, negotiate, book, and pay without humans in the loop.
              </p>
              <p>
                Microsoft committed approximately <strong className="text-[#0a0806]">$80 billion in FY2025 alone</strong> on AI data centers and infrastructure — specifically to accelerate the shift from apps to an agent-to-agent economy.
              </p>
              <p>
                That&apos;s not a bet on a feature. That&apos;s a bet on a new architecture for how business gets done.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* OpenAI / Jony Ive Device */}
      <section className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">THE PROOF POINT</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              OpenAI Just Spent $6.4 Billion on a Pocket-Sized AI Device.{' '}
              <span className="text-[#a0723a]">Here&apos;s Why It Matters to Your Business.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                In 2025, OpenAI acquired Jony Ive&apos;s design studio, io, for $6.4 billion. Their stated mission: build a family of AI-native hardware devices starting with a screenless, pocket-sized, always-aware companion — cameras and microphones on, all the time, building contextual awareness of your world.
              </p>
              <p>
                Sam Altman described the device&apos;s intended experience: using today&apos;s phones feels like &ldquo;walking through Times Square with flashing lights and people bumping into you.&rdquo; The new device should feel like &ldquo;sitting in the most beautiful cabin by a lake and in the mountains and just enjoying the peace and calm.&rdquo;
              </p>
              <p>
                He added: <em>&ldquo;You trust it over time, and it does have just this incredible contextual awareness of your whole life.&rdquo;</em>
              </p>
              <p>
                First device expected to ship: <strong className="text-[#0a0806]">early 2027.</strong> Smart glasses and earbuds follow.
              </p>
              <p>
                This isn&apos;t science fiction. It&apos;s a funded, prototyped, designed product with a ship date.
              </p>
            </div>
          </ScrollReveal>

          {/* Pull Quote */}
          <ScrollReveal delay={250}>
            <blockquote className="mt-12 border-l-4 border-[#1a56db] pl-6 py-2">
              <p className="font-cormorant italic text-2xl md:text-3xl text-[#0a0806] leading-relaxed mb-4">
                &ldquo;You trust it over time, and it does have just this incredible contextual awareness of your whole life.&rdquo;
              </p>
              <cite className="font-poppins text-sm text-[#6a5a48] not-italic">
                — Sam Altman, CEO, OpenAI
              </cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* What This Means Right Now */}
      <section className="py-24 md:py-32 bg-[#f2ede4] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">WHAT THIS MEANS RIGHT NOW</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              When a Device Knows Everything About Your World, What Happens to{' '}
              <span className="text-[#a0723a]">Invisible Businesses?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                Here&apos;s what those devices will do when someone asks: &ldquo;Find me the best [your service] near me.&rdquo;
              </p>
              <p>
                They&apos;ll query AI systems. Those systems will look for businesses with machine-readable signals — structured data, agent.json files, llms.txt identifiers, edge-fast response times. They&apos;ll evaluate, rank, and recommend in milliseconds. No scroll. No ten blue links. No second page.
              </p>
              <p>
                Businesses with the right infrastructure get recommended. Businesses without it get skipped.
              </p>
              <p>
                That decision layer is being built right now — not in 2027 when the hardware ships. The citations, the entity associations, the authority signals AI systems use to make those recommendations? Those are being established today, trained into models today, reinforced by indexed content today.
              </p>
              <p>
                By the time the devices are in pockets and on faces, the territory will already be claimed.
              </p>
            </div>
          </ScrollReveal>

          {/* Callout Card */}
          <ScrollReveal delay={250}>
            <div className="mt-12 rounded-2xl border-l-4 border-[#1a56db] bg-[#f8f5f0] p-8 shadow-sm">
              <p className="font-poppins font-semibold text-[#0a0806] text-base mb-3 uppercase tracking-widest text-xs">
                The Decoupling Has Already Started
              </p>
              <p className="font-poppins text-[#6a5a48] leading-relaxed">
                Traditional search → AI answers and agents. ChatGPT, Perplexity, Grok, Claude, and Google&apos;s AI Overviews are already routing around standard search for hundreds of millions of queries per day. The hardware just accelerates what&apos;s already happening.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Consolidation Threat */}
      <section className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">THE CONSOLIDATION THREAT</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              National Chains and PE Roll-Ups Already Know.{' '}
              <span className="text-[#a0723a]">Do You?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                While most independent businesses are focused on running their operations, national chains and private equity roll-ups are quietly building the infrastructure to dominate AI search at scale.
              </p>
              <p>
                They&apos;re migrating to edge stacks. They&apos;re deploying schema markup across thousands of locations simultaneously. They&apos;re building entity authority in AI systems before the mainstream wave arrives.
              </p>
              <p>
                The asymmetry is stark: a PE-backed chain with 200 locations can deploy AI scaffolding across all of them in a week. An independent business owner has to do it one business at a time.
              </p>
              <p>
                But here&apos;s what the nationals can&apos;t replicate: decades of real community trust, authentic local expertise, genuine reviews from real customers, and the kind of E-E-A-T signals — Experience, Expertise, Authoritativeness, Trustworthiness — that AI systems are specifically designed to reward.
              </p>
              <p>
                That&apos;s your raw material. It&apos;s already there. It just needs to be structured in a language AI can read.
              </p>
              <p>
                Once the land grab ends — and it ends when mainstream hardware adoption arrives in 2027 — reclaiming territory costs five to ten times more. Some of it won&apos;t be reclaimable at all.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Edge-First / Stack */}
      <section className="py-24 md:py-32 bg-[#f2ede4] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">THE ONLY LOGICAL RESPONSE</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              Edge-First. Agent-Ready.{' '}
              <span className="text-[#a0723a]">Built Before the Rush.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                There&apos;s a reason KodeCite.AI builds exclusively on Next.js deployed to Vercel&apos;s edge network. Sub-100ms global response times aren&apos;t a nice-to-have — they&apos;re a requirement for AI agent compatibility. Agents have no patience for slow sites. They move on.
              </p>
              <p className="font-semibold text-[#0a0806]">The full stack:</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-6 space-y-5">
              {[
                {
                  title: 'Edge-speed infrastructure',
                  body: 'Next.js on Vercel, built for the latency requirements of agentic queries, not 2015 WordPress plugins.',
                },
                {
                  title: 'Structured data done right',
                  body: 'Custom JSON-LD schema on every page: LocalBusiness, Article, FAQPage, BreadcrumbList, Person — validated clean through Google\'s Rich Results Test before anything goes live.',
                },
                {
                  title: 'llms.txt',
                  body: 'Your business\'s digital identity card, written for AI systems, not humans. Tells every major model who you are, what you do, what to cite you for, and how to transact with you.',
                },
                {
                  title: 'agent.json',
                  body: 'The A2A protocol layer. As the agent-to-agent economy matures under the Linux Foundation\'s A2A standard, your business already has a machine-readable capability manifest. Your competitors almost certainly don\'t.',
                },
                {
                  title: 'Content architecture',
                  body: 'Self-contained, extractable sections written for citation. When an AI system is deciding who to reference, your content is already formatted for the answer.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1a56db] flex-shrink-0" />
                  <p className="text-[#6a5a48] font-poppins leading-relaxed">
                    <span className="font-semibold text-[#0a0806]">{item.title} — </span>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-10 text-[#6a5a48] font-poppins leading-relaxed">
              This isn&apos;t about gaming an algorithm. It&apos;s about building the infrastructure that the next era of commerce requires — and building it now, while the cost is low and the territory is still open.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow mb-4">THE TIMELINE</p>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#0a0806] mb-8 leading-tight">
              Nobody Knows Exactly When.{' '}
              <span className="text-[#a0723a]">Everybody Knows It&apos;s Coming.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-[#6a5a48] font-poppins leading-relaxed">
              <p>
                Twelve months? Twenty-four? Thirty-six before full mainstream adoption?
              </p>
              <p>
                The honest answer: the hardware timeline has variables. Regulatory approvals, manufacturing scale, consumer adoption curves — these things slip.
              </p>
              <p>
                But the infrastructure timeline doesn&apos;t slip. The AI systems are already live. The agents are already routing. ChatGPT has over 300 million weekly users. Perplexity is processing hundreds of millions of queries. Google&apos;s AI Overviews are appearing on over a billion searches per day.
              </p>
              <p>
                The wearables accelerate a trend that&apos;s already in motion. Every day without the right signals is a day your competitors have a chance to establish the authority you could have claimed first.
              </p>
              <p>
                The only real questions are: who builds it, when, and whether you&apos;re first in your market or playing catch-up.
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
            <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mb-10">
              Common Questions
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {[
              {
                q: 'Why do businesses need to optimize for AI search now?',
                a: 'AI systems including ChatGPT, Perplexity, and Google AI Overviews are already routing hundreds of millions of queries per day. The authority signals these systems use to decide who to recommend are being established now — before AI hardware like the OpenAI device ships in 2027. Businesses that build machine-readable infrastructure today claim territory before the mainstream wave arrives.',
              },
              {
                q: 'What is the OpenAI / Jony Ive AI device?',
                a: "OpenAI acquired Jony Ive's design studio io for $6.4 billion in 2025 to build a family of AI-native hardware devices. The first is a screenless, pocket-sized device with cameras and microphones that builds contextual awareness of the user's world and routes queries to AI agents. Expected to ship early 2027.",
              },
              {
                q: 'What is agent.json and why does it matter?',
                a: "agent.json is a machine-readable file that tells AI agents what your business does, what it can transact, and how to interact with it. As the A2A economy matures under the Linux Foundation's A2A protocol standard, businesses with agent.json files will be discoverable and transactable by autonomous agents. Adoption is currently under 1% among local businesses.",
              },
              {
                q: 'What is llms.txt?',
                a: 'llms.txt is a plain text file placed at your domain root that tells large language models who your business is, what to cite you for, what pages exist, and how to transact with you. Modeled on robots.txt, it functions as a digital identity card written for AI systems rather than humans.',
              },
              {
                q: 'How long does it take to see results?',
                a: 'Technical wins appear in 30–60 days: schema errors clear, rich results appear, PageSpeed improves. Google entity recognition typically follows in 60–90 days. The AEO and GEO layer compounds over 3–6 months as LLMs begin citing structured entities. Real separation from competitors builds over 6–12 months.',
              },
              {
                q: 'What is an AI Scaffolding Audit?',
                a: "A free assessment of your business's current machine-readability: schema markup health, structured data validation, agent signal presence (llms.txt, agent.json), site speed and edge-readiness, and overall AI citation authority. KodeCite.AI provides this at no cost before any engagement.",
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
              See Exactly Where You Stand —{' '}
              <span className="text-[#a0723a]">Before the Rush Does.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-[rgba(240,232,216,0.7)] font-poppins leading-relaxed text-lg mb-4">
              Independent businesses like yours built real trust the hard way — one customer, one job, one year at a time. Don&apos;t let it become invisible to the systems deciding tomorrow&apos;s customers.
            </p>
            <p className="text-[rgba(240,232,216,0.7)] font-poppins leading-relaxed mb-10">
              We start every engagement with a free AI Scaffolding Audit. No sales pitch. No obligation. Just an honest look at your current machine-readability, your schema health, your agent signals, and what it would take to make your business the obvious AI recommendation in your market.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <Link
              href="/contact"
              className="inline-block font-poppins font-semibold text-white px-10 py-4 rounded-md text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1a56db' }}
            >
              Get My Free Audit
            </Link>
            <p className="mt-4 text-[rgba(240,232,216,0.4)] font-poppins text-xs">
              Takes about 15 minutes. We&apos;ll show you exactly what AI systems see when they look at your business today.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

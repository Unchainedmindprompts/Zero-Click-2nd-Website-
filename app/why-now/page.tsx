import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Why Now | KodeCite.AI — The AI Land Grab Is Already Underway',
  description:
    "Hundreds of billions committed. Hardware shipping. AI agents routing around invisible businesses. Here's why the window to claim your territory is open right now — and won't stay open.",
  alternates: {
    canonical: 'https://www.kodecite.ai/why-now',
  },
  openGraph: {
    title: 'Why Now — The AI Land Grab Is Already Underway',
    description:
      "The biggest companies in the world aren't spending hundreds of billions to make better memes. They're rebuilding how customers find businesses. Here's what that means for yours.",
    url: 'https://www.kodecite.ai/why-now',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Now — The AI Land Grab Is Already Underway',
  description:
    "Hundreds of billions committed. Hardware shipping. AI agents routing around invisible businesses. Here's why the window to claim your AI search territory is open right now.",
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
        text: 'AI systems including ChatGPT, Perplexity, and Google AI Overviews are already handling hundreds of millions of searches per day. The authority signals these systems use to decide who to recommend are being established now — before AI hardware like the OpenAI/Jony Ive device ships in early 2027. Businesses that build machine-readable infrastructure today claim territory before the mainstream wave arrives.',
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
        text: "llms.txt is a plain text file placed at your domain root that acts as a digital ID card for AI systems. It tells every major AI model — ChatGPT, Claude, Gemini, Perplexity — exactly who your business is, what you do, where you're located, and what topics to cite you for. Adoption is currently under 1% among local businesses, making it a significant first-mover opportunity.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is agent.json?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'agent.json is a machine-readable file that tells AI agents what your business offers and how to interact with it — booking, referrals, service queries. As AI helpers become capable of taking actions on behalf of users, this file creates a direct line between your business and the systems making recommendations. Virtually no local businesses have one yet.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from AI search optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical wins appear in 30–60 days: schema errors clear, rich results appear, page speed improves. AI systems begin recognizing your business as a trusted entity within 60–90 days. The compounding effect — consistent AI recommendations over competitors — builds over 3–6 months and accelerates from there.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a free AI Scaffolding Audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A free assessment of what AI systems currently see when they look at your business. KodeCite.AI checks your structured data health, page speed, llms.txt and agent.json presence, and overall AI citation authority — then shows you exactly where you stand compared to competitors in your market. No obligation, takes about 15 minutes.",
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
                The biggest tech companies in the world aren&apos;t dropping hundreds of billions of dollars — the major players are collectively spending around{' '}
                <strong className="text-[#0a0806]">$700 billion in 2026 alone</strong> — to make better memes or prettier pictures.
              </p>
              <p>
                They&apos;re building the highways, the railways, and the electric grid of a new economy. The infrastructure that everything else will run on. And one of the changes that comes with that shift is how people discover and interact with businesses like yours.
              </p>
              <p>
                This isn&apos;t something coming in five years. It&apos;s happening right now, on every phone in every pocket. The hardware just makes it impossible to ignore.
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
                Businesses with the right setup get recommended. Businesses without it get skipped entirely — not penalized, just invisible. And the AI moves on in milliseconds.
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
                  body: 'Not patches on slow, outdated platforms. Modern sites that load instantly anywhere in the world. Why does speed matter? AI helpers won\'t wait for slow pages. Think of it like a shop with a long line out the door versus one that\'s quick and easy — customers and AI both go to the fast one.',
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
                You have time — if you start soon. The setup that makes you visible to AI happens now, before the devices ship and before everyone rushes to do what you&apos;ve already done.
              </p>
              <p>
                Waiting until these gadgets are everywhere means higher costs, tougher competition, and markets where the best positions are already taken.
              </p>
              <p>
                The businesses that move in the next 6–12 months are the ones that own their category when the wave fully arrives.
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
                a: "Yes — and that's the whole point. You don't need to understand how any of this works under the hood. You need to understand that your competitors are either already doing it or don't know it exists yet. We handle every technical piece. You just need to decide whether you want to be early or late.",
              },
              {
                q: 'How is this different from regular SEO?',
                a: "Traditional SEO gets you in front of people who are already searching on Google. AI search optimization gets you recommended by AI systems before someone even thinks to search — and soon, by devices that are proactively surfacing businesses in real-time based on context. They work together, but AI optimization is the newer, less crowded layer.",
              },
              {
                q: 'What exactly is a "digital ID card" for my business?',
                a: 'It\'s a simple file that lives on your website called llms.txt. It tells every major AI model — ChatGPT, Claude, Gemini, Perplexity — exactly who you are, what you do, where you\'re located, what topics to cite you for, and how to send customers to you. Think of it like your business\'s entry in an AI-readable directory. Most businesses don\'t have one. Adoption is currently under 1% among local businesses.',
              },
              {
                q: 'What\'s the "AI agent" file you mentioned?',
                a: "It's called agent.json. As AI helpers become more capable of taking actions — booking appointments, comparing services, routing referrals — this file tells them what your business offers and how to interact with it. It's like setting up a direct line between your business and the AI systems that will be making recommendations. It doesn't exist yet at most businesses.",
              },
              {
                q: 'How long before I see results?',
                a: 'Technical wins show up in 30–60 days — your business starts appearing in rich results, schema errors clear, page speed improves. AI systems start recognizing your business as a trusted entity within 60–90 days. The compounding effect — where AI consistently recommends you over competitors — builds over 3–6 months and accelerates from there.',
              },
              {
                q: "What's the free audit?",
                a: "A straightforward look at what AI systems currently see when they look at your business. We check your structured data, your page speed, whether you have the right signals in place, and how you compare to competitors in your market. No sales pressure. Just an honest picture of where you stand today. Takes about 15 minutes on our end.",
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
            <p className="text-[rgba(240,232,216,0.7)] font-poppins leading-relaxed text-lg mb-10">
              You&apos;ve built real trust the hard way — one customer, one job, one year at a time. Don&apos;t let it become invisible to the systems deciding tomorrow&apos;s recommendations.
              <br /><br />
              We start every conversation with a free AI Scaffolding Audit. No obligation. No pitch. Just an honest look at your current visibility to AI systems and what it would take to make you the obvious recommendation in your market.
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

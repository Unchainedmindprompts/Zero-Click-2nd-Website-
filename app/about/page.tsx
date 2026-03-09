import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About | KodeCite.AI — Why We Built This',
  description:
    'Two thousand hours down a rabbit hole. One simple test that changed everything. Here\'s the story behind KodeCite.AI and why we exist to help local businesses compete in the AI age.',
  alternates: {
    canonical: 'https://www.kodecite.ai/about',
  },
  openGraph: {
    title: 'About KodeCite.AI — Why We Built This',
    description:
      'Two thousand hours down a rabbit hole. One simple test that changed everything. Here\'s the story behind KodeCite.AI.',
    url: 'https://www.kodecite.ai/about',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.kodecite.ai/about' },
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mark Abplanalp',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'KodeCite.AI',
    url: 'https://www.kodecite.ai',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Post Falls',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Answer Engine Optimization',
    'AI Search Visibility',
    'Structured Data',
    'Local Business Marketing',
    'Agent-to-Agent Economy',
    'Machine-Readable Content',
  ],
  description:
    'Founder of KodeCite.AI. Spent 2,000+ hours researching how AI systems discover, read, and cite local businesses — and built a consultancy to help independent businesses compete against national chains and PE roll-ups in the AI age.',
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="eyebrow mb-4">ABOUT</p>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#0a0806] mb-6 leading-tight max-w-4xl">
            Why We Built{' '}
            <span className="text-[#a0723a]">KodeCite.AI</span>
          </h1>
          <p className="text-[#6a5a48] text-xl font-poppins max-w-3xl leading-relaxed">
            Two thousand hours down a rabbit hole. One simple test that changed everything. Here&apos;s the story.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Story */}
      <section className="py-24 md:py-32 bg-[#f2ede4] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/5] bg-[#e8e0d0] rounded-2xl overflow-hidden border border-[rgba(100,70,30,0.2)] relative">
                  <Image
                    src="/about-photo.png"
                    alt="KodeCite.ai founder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Name badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#f8f5f0]/95 backdrop-blur-sm rounded-xl p-4 border border-[rgba(100,70,30,0.2)]">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-poppins font-semibold text-[#0a0806] text-sm">Mark Abplanalp</div>
                      <div className="text-[#6a5a48] text-xs font-poppins">Founder, KodeCite.AI</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Story text */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <h2 className="font-playfair font-bold text-3xl text-[#0a0806] mb-4">
                  Two Thousand Hours Later,{' '}
                  <span className="text-[#a0723a]">I Couldn&apos;t Stop.</span>
                </h2>

                <p className="text-[#6a5a48] leading-relaxed font-poppins">
                  A couple of years ago I told myself I needed to figure out AI — not in a vague
                  &ldquo;keep up with the times&rdquo; way, but really understand how it was going
                  to change marketing for my business.
                </p>

                <p className="text-[#6a5a48] leading-relaxed font-poppins">
                  So I started pulling threads.
                </p>

                <p className="text-[#6a5a48] leading-relaxed font-poppins">
                  Two thousand hours later, I couldn&apos;t stop.
                </p>

                <p className="text-[#6a5a48] leading-relaxed font-poppins">
                  What started as curiosity about my own business turned into a full obsession with
                  how AI systems discover, read, and decide who to cite. Then how large language
                  models actually process information. Then the agent-to-agent economy and why
                  autonomous agents need digital rails like Solana and Ethereum to buy compute and
                  settle tasks without human intervention. Then how all of it connects.
                </p>

                <div className="pt-4">
                  <Link href="/contact" className="btn-gold text-sm font-bold px-6 py-3 rounded-md inline-block">
                    Start the Conversation
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The Story Sections */}
      <section className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">THE STORY</p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#0a0806] text-center mb-16 leading-tight">
              The Test That <span className="text-[#a0723a]">Changed Everything</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Test That Changed Everything',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                points: [
                  'I started running Google Rich Results tests on local businesses — HVAC companies, realtors, window treatment shops, contractors.',
                  'Almost nothing. Virtually zero structured data. No schema. No machine-readable signals. No llms.txt. No agent.json.',
                  'Just websites built for humans — completely invisible to the AI systems increasingly deciding which businesses get recommended.',
                  'And I realized: nobody is doing this. At least not at the local level.',
                ],
                delay: 0,
              },
              {
                title: 'The Opportunity Nobody Saw',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                points: [
                  'National chains and private equity roll-ups are quietly building the infrastructure to dominate AI search at scale.',
                  'Independent local businesses that built their reputations over decades have no idea the ground is shifting beneath them.',
                  "Local knowledge, community trust, years of real experience — that's exactly the raw material AI systems are learning to reward.",
                  'They just need someone to help them structure it.',
                ],
                delay: 150,
              },
              {
                title: 'What We Do',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                points: [
                  "That's KodeCite.AI. We build the hidden scaffolding that makes AI choose your business — not your competitor's.",
                  'We start with a free AI Scaffolding Audit so you can see exactly where you stand before the rush really begins.',
                  "If you own a local or regional business and you've ever wondered whether AI is going to help you or hurt you — we'd love to talk.",
                ],
                delay: 300,
              },
            ].map((pillar) => (
              <ScrollReveal key={pillar.title} delay={pillar.delay}>
                <div className="authority-card h-full">
                  <div className="text-[#a0723a] mb-5">{pillar.icon}</div>
                  <h3 className="font-poppins font-bold text-xl text-[#0a0806] mb-5">{pillar.title}</h3>
                  <ul className="space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-[#6a5a48] font-poppins">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a0723a] flex-shrink-0 mt-1.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Stats + CTA */}
      <section className="py-24 bg-[#1c1814] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '2,000+', label: 'Hours researching AI systems' },
              { value: '0', label: 'Local businesses with schema found' },
              { value: '100%', label: 'Free AI Scaffolding Audit' },
              { value: '0', label: 'Invalid schema items ever' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="stat-block rounded-xl">
                  <div className="font-playfair font-bold text-4xl text-[#1a56db] mb-2">{stat.value}</div>
                  <div className="text-[rgba(240,232,216,0.6)] text-sm font-poppins">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[rgba(240,232,216,0.6)] text-lg font-poppins leading-relaxed mb-8">
                Based in Post Falls, Idaho — serving businesses across the United States. Every client
                gets direct access, honest communication, and results that can be measured in days,
                not months.
              </p>
              <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
                Let&apos;s Build Something Together
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="max-w-2xl mx-auto text-center mt-16 pt-12 border-t border-[rgba(240,232,216,0.1)]">
              <p className="text-[rgba(240,232,216,0.6)] font-poppins text-base leading-relaxed">
                — Mark Abplanalp<br />
                <span className="text-[#a0723a] font-semibold">Founder, KodeCite.AI</span><br />
                Post Falls, Idaho
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

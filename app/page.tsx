import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import CounterAnimation from '@/components/CounterAnimation';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f8f5f0] pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <div>
              <ScrollReveal>
                <h1 className="font-poppins font-bold text-[#0a0806] leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
                  Stop competing with a broken foundation.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="font-poppins text-[#6a5a48] text-lg leading-relaxed mb-5">
                  Your WordPress, Squarespace, or Wix site was built for an era that&apos;s ending. AI search doesn&apos;t reward content volume, review counts, or mention equity — it rewards businesses whose digital foundation is built for machine clarity.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="font-poppins text-[#6a5a48] text-base leading-relaxed mb-8">
                  We rebuild the foundation on Next.js — engineered for clarity, speed, and AI readability. You own it. Forever. And every dollar you spend on content or marketing after that actually starts compounding.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/audit" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block text-center">
                    Get My Free Scaffolding Audit
                  </Link>
                  <Link href="/services" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block text-center">
                    See What&apos;s Included
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Image */}
            <ScrollReveal delay={150}>
              <div className="relative w-full flex items-center justify-center">
                <Image
                  src="/images/kodecite-hero.png"
                  alt="KodeCite.ai — AI-ready digital foundations"
                  width={640}
                  height={520}
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Foundation Build */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">

          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">WHAT WE BUILD</p>
              <h2 className="font-poppins font-bold text-[#0a0806] mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                The Foundation Build
              </h2>
              <p className="font-poppins text-[#6a5a48] text-lg max-w-2xl mx-auto leading-relaxed">
                One-time build. Fixed scope. Fixed timeline. You own everything we deliver — forever.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                'Custom Next.js website engineered for AI readability',
                'Full entity graph: business, founder, services, credentials, location',
                'Custom JSON-LD schema per page — no copy-paste, no conflicts',
                'llms.txt and agent.json deployed on every build',
                'Sub-1 second load time on modern devices',
                'Directory launch: Google Business, Bing Places, Apple Business, Yelp, BBB',
                'You own the GitHub repo and the Vercel account — no platform lock-in',
                'Built in 6–8 weeks with full transparency',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-[#f8f5f0] rounded-lg px-5 py-4">
                  <svg className="w-5 h-5 text-[#a0723a] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-poppins text-[#0a0806] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="text-center">
              <p className="font-poppins text-[#6a5a48] text-sm tracking-wide uppercase mb-6">
                Fixed scope. Fixed timeline. Transparent pricing.
              </p>
              <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
                Start the Conversation
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-[#1c1814] py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">THE FRAMEWORK</p>
              <h2 className="font-poppins font-bold text-[rgba(240,232,216,0.95)] mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                Build in the Right Order
              </h2>
              <p className="font-poppins text-[rgba(240,232,216,0.55)] text-lg max-w-2xl mx-auto leading-relaxed">
                An F1 team doesn&apos;t start with the sponsor logos. They start with the chassis — because the chassis determines everything above it. The AI discovery stack works the same way.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { num: '01', label: 'CHASSIS', title: 'Foundation', desc: 'The platform itself. Server-rendered. Machine-readable. Built for speed and structural clarity from the ground up.' },
              { num: '02', label: 'ENGINE',  title: 'Entity',     desc: 'Your identity graph. Schema wired to reality. Every connection, credential, and signal telling AI exactly who you are.' },
              { num: '03', label: 'AERO',    title: 'Content',    desc: 'Answer-first structure. Built to be extracted, synthesized, and cited by LLMs — not just read by humans.' },
              { num: '04', label: 'GRAPHICS',title: 'Mentions',   desc: 'Reviews, citations, press, social. The layer that works only after the three underneath are built correctly.' },
            ].map(({ num, label, title, desc }, i) => (
              <ScrollReveal key={num} delay={i * 100}>
                <div className="relative flex flex-col px-8 py-10 border-t border-[rgba(240,232,216,0.1)] lg:border-t-0 lg:border-l first:border-l-0 border-[rgba(240,232,216,0.1)] h-full">
                  {/* Connector arrow — desktop only, not on last column */}
                  {i < 3 && (
                    <span className="hidden lg:block absolute -right-3 top-10 z-10 text-[#a0723a] text-xl select-none">›</span>
                  )}
                  <p className="font-poppins font-bold text-[#a0723a] text-4xl mb-3 leading-none">{num}</p>
                  <p className="font-poppins text-[rgba(240,232,216,0.4)] text-xs tracking-widest uppercase mb-2">{label}</p>
                  <p className="font-poppins font-bold text-[rgba(240,232,216,0.95)] text-2xl mb-4">{title}</p>
                  <p className="font-poppins text-[rgba(240,232,216,0.55)] text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-[#f8f5f0] py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">WHO IT&apos;S FOR</p>
              <h2 className="font-poppins font-bold text-[#0a0806] mb-5" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
                Built for Owner-Operators Who Can&apos;t Afford to Be Invisible
              </h2>
              <p className="font-poppins text-[#6a5a48] text-lg max-w-2xl mx-auto leading-relaxed">
                If your business depends on local trust and high-value client relationships, AI search is already shaping who gets found — and who doesn&apos;t.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-3 9 3v6c0 5.25-4 9-9 10.5C7 21 3 17.25 3 12V6z" />
                  </svg>
                ),
                title: 'Law Firms',
                desc: 'Estate planning, business law, family practice. Clients search before they call. AI either names you or skips you.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M5 20h14M5 4h14" />
                  </svg>
                ),
                title: 'Financial Advisors',
                desc: 'Fiduciary, planning, wealth management. Trust decisions start online. Your digital identity has to earn it.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m0 14v1M5.636 6.636l.707.707m11.314 9.9l.707.707M4 12h1m14 0h1M6.343 17.657l-.707.707M18.364 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ),
                title: 'Medical Practices & Med Spas',
                desc: 'Private practice, aesthetics, specialty care. Patients research before they book. Visibility is the entire funnel.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
                  </svg>
                ),
                title: 'Home Services',
                desc: 'High-ticket residential work. Window treatments, audio/video, specialty trades. Buyers shortlist in AI before they call.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 11-4 0 2 2 0 014 0zM5 20a7 7 0 0114 0H5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h.01M12 11h.01" />
                    <circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l3-3 2 2 4-4 2 2 3-3" />
                  </svg>
                ),
                title: 'Real Estate Teams',
                desc: 'Buyer agents, listing specialists, relocation pros. AI search is replacing Google as the first stop for buyers.',
              },
            ].map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="bg-white rounded-xl border border-[rgba(100,70,30,0.12)] p-7 h-full flex flex-col gap-4 hover:border-[rgba(160,114,58,0.4)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(160,114,58,0.1)] flex items-center justify-center text-[#a0723a]">
                    {icon}
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-[#0a0806] text-lg mb-2">{title}</p>
                    <p className="font-poppins text-[#6a5a48] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Proof */}
      <section className="bg-[#f2ede4] py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">PROOF</p>
              <h2 className="font-poppins font-bold text-[#0a0806]" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
                The Case Study We Built First
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* Left: Story */}
            <ScrollReveal delay={100}>
              <div className="flex flex-col justify-center h-full">
                <p className="font-poppins text-xs font-semibold tracking-widest uppercase text-[#a0723a] mb-4">
                  Luxe Window Works · Post Falls, Idaho
                </p>
                <h3 className="font-poppins font-bold text-[#0a0806] text-3xl leading-snug mb-5">
                  From Invisible to Cited in 90 Days
                </h3>
                <p className="font-poppins text-[#6a5a48] text-base leading-relaxed mb-8">
                  We built Luxe Window Works on Next.js with a complete entity graph, custom schema, llms.txt, and agent.json deployed at launch. Within 90 days, Luxe was being surfaced in ChatGPT, Perplexity, Google AI Overviews, Copilot, Bing, and DuckDuckGo for North Idaho window treatment queries — outranking nationally-franchised competitors with larger domains and older sites.
                </p>
                <div>
                  <Link href="/case-studies/luxe-window-works" className="btn-gold-outline text-sm font-bold px-6 py-3 rounded-md inline-block">
                    See the Full Case Study
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Stats */}
            <ScrollReveal delay={200}>
              <div className="bg-[#1c1814] rounded-2xl px-8 py-12 flex flex-col justify-center gap-10">
                <CounterAnimation end={6}  label="AI Engines Citing Luxe" />
                <CounterAnimation end={90} label="Days to First Citation" duration={2500} />
                <CounterAnimation end={4}  label="Pages Cited Per Session — Bing / Copilot Analytics, 3 Months" suffix="x" />
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* What's Different */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">WHAT&apos;S DIFFERENT</p>
              <h2 className="font-poppins font-bold text-[#0a0806]" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
                Not Another Agency Retainer
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'You Own Everything',
                desc: 'The GitHub repo. The Vercel account. The domain. No monthly platform rent. No lock-in. We build it, you keep it.',
              },
              {
                title: 'One-Time Build, Not a Retainer',
                desc: "Fixed scope. Fixed timeline. Clear deliverables. We're not selling you a subscription to hope.",
              },
              {
                title: 'Built on Modern Infrastructure',
                desc: 'Next.js on Vercel. Server-rendered. Edge-deployed. Engineered for AI readability from the ground up — not bolted onto a legacy platform.',
              },
              {
                title: 'Schema Done Correctly',
                desc: 'Custom JSON-LD per page, entity graphs wired to reality, llms.txt and agent.json deployed at launch. Not plugin-generated. Not copy-pasted. Built as code.',
              },
              {
                title: 'Sub-1 Second Load Times',
                desc: "Speed is a trust signal, not a UX metric. We verify performance on real devices before we go live.",
              },
              {
                title: 'Content and Marketing That Actually Compounds',
                desc: 'Once your foundation is built, every dollar you spend on content, ads, or mentions starts working harder — because the infrastructure underneath is finally holding them up.',
              },
            ].map(({ title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="flex flex-col gap-3 p-6 rounded-xl border border-[rgba(100,70,30,0.12)] bg-[#f8f5f0] h-full hover:border-[rgba(160,114,58,0.35)] transition-colors duration-300">
                  <div className="w-8 h-8 rounded-md bg-[rgba(160,114,58,0.12)] flex items-center justify-center">
                    <span className="font-poppins font-bold text-[#a0723a] text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="font-poppins font-bold text-[#0a0806] text-base leading-snug">{title}</p>
                  <p className="font-poppins text-[#6a5a48] text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* The Window */}
      <section className="bg-[#1c1814] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">THE WINDOW</p>
            <h2 className="font-poppins font-bold text-[rgba(240,232,216,0.95)] mb-8" style={{ fontSize: 'clamp(26px, 3.5vw, 46px)' }}>
              This Is a 2–3 Year Window. It&apos;s Open Right Now.
            </h2>
            <p className="font-poppins text-[rgba(240,232,216,0.65)] text-lg leading-relaxed mb-10">
              The businesses showing up in AI answers today aren&apos;t there because they outspent anyone. They&apos;re there because they built machine-readable foundations before their competitors thought to. That advantage compounds — every month an entity graph exists, it accumulates more citation signals, more cross-platform verification, more AI crawler trust. In 2–3 years this will be table stakes. The businesses that own the space in their market today will be extraordinarily difficult to displace.
            </p>
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Start the Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Free Audit */}
      <section className="bg-[#f8f5f0] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Header + subhead */}
            <ScrollReveal>
              <div>
                <p className="eyebrow mb-4">FREE AUDIT</p>
                <h2 className="font-poppins font-bold text-[#0a0806] mb-5" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}>
                  Find Out If AI Can Actually Read You
                </h2>
                <p className="font-poppins text-[#6a5a48] text-lg leading-relaxed mb-8">
                  Most businesses don&apos;t know what their entity graph looks like to a machine. We&apos;ll show you — in plain English, with no pressure and no pitch.
                </p>
                <Link href="/audit" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
                  Get My Free Scaffolding Audit
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: Bullets */}
            <ScrollReveal delay={150}>
              <ul className="flex flex-col gap-5">
                {[
                  'How your business currently appears in ChatGPT, Perplexity, and Google AI Overviews — in plain English',
                  'A plain-English breakdown of your schema gaps and what AI can\'t verify about you right now',
                  'How your infrastructure benchmarks against your top competitors in your market',
                  'One specific action you can take today — whether you work with us or not',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-[rgba(160,114,58,0.15)] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#a0723a]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-poppins text-[#0a0806] text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-[#f2ede4] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-6">THE PROBLEM</p>
            <p className="font-poppins text-[#0a0806] text-xl leading-relaxed">
              You&apos;ve been sold SEO. You&apos;ve been sold content. You&apos;ve been sold reviews, Reddit tactics, mentions, and retainer after retainer. None of it is compounding the way it&apos;s supposed to. That&apos;s not because you picked the wrong agency. It&apos;s because the ground has shifted — and almost no one in the industry is telling you the truth about what&apos;s actually happening.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

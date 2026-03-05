import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CounterAnimation from '@/components/CounterAnimation';

export const metadata: Metadata = {
  title: 'Zero Click Strategies — AI Search Optimization & AEO Agency',
  description:
    '60% of Google searches end without a click. AI answers the question — and your competitor gets the credit. We make sure the machine chooses you. Free AEO Audit available.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zero Click Strategies',
  url: 'https://www.zeroclickstrategies.com',
  description:
    'Answer Engine Optimization agency. We structure websites so AI agents cite your business as the definitive answer.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.zeroclickstrategies.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ===== SECTION 2 — HERO ===== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden hero-dark-bg hero-grid-bg"
        id="hero"
      >
        {/* Radial glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#D4A94A]/5 blur-[120px] pointer-events-none" />

        {/* Animated content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div style={{ opacity: 0, animation: 'heroFadeIn 0.7s ease 0s forwards' }}>
            <p className="eyebrow mb-6 tracking-[0.3em]">
              THE GREAT DECOUPLING · 2026
            </p>
          </div>

          {/* H1 */}
          <h1
            className="font-playfair font-bold text-[38px] md:text-[62px] lg:text-[72px] text-white leading-[1.1] mb-7"
            style={{ opacity: 0, animation: 'heroFadeIn 0.7s ease 0.15s forwards' }}
          >
            Your SEO Is Working.{' '}
            <br className="hidden sm:block" />
            <span className="text-[#D4A94A]">
              Your Business Is Still Invisible.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="font-poppins font-normal text-base md:text-xl text-[#8A9BB5] max-w-[640px] mx-auto leading-relaxed"
            style={{ opacity: 0, animation: 'heroFadeIn 0.7s ease 0.3s forwards' }}
          >
            60% of Google searches now end without a single click. AI answers the
            question — and your competitor gets the credit. We make sure the machine
            chooses you.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            style={{ opacity: 0, animation: 'heroFadeIn 0.7s ease 0.45s forwards' }}
          >
            <Link
              href="/contact"
              className="btn-gold font-poppins font-bold text-base inline-block rounded-md"
              style={{ padding: '16px 36px' }}
            >
              Get Your Free AEO Audit
            </Link>
            <a
              href="#problem"
              className="btn-ghost font-poppins text-base inline-flex items-center justify-center gap-2"
              style={{ padding: '16px 24px' }}
            >
              See How It Works ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#D4A94A]" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== SECTION 3 — THE PROBLEM ===== */}
      <section id="problem" className="py-24 md:py-32 bg-[#080810] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">WHY THIS IS HAPPENING</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-[56px] text-white text-center mb-10 leading-[1.15]">
              The game changed.{' '}
              <span className="text-[#8A9BB5]">Nobody told your marketing team.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-[#8A9BB5] text-lg md:text-xl leading-relaxed font-poppins mb-5">
                Your rankings didn&apos;t drop. Your traffic did. That&apos;s not a coincidence
                — it&apos;s the new reality of AI-driven search.
              </p>
              <p className="text-[#8A9BB5] text-base md:text-lg leading-relaxed font-poppins">
                When someone asks ChatGPT, Perplexity, or Google&apos;s AI Overview a question
                about your industry, the AI synthesizes an answer from sites it can read, trust,
                and cite. If your site isn&apos;t structured for machine discovery, you aren&apos;t
                ranked lower. <span className="text-white font-semibold">You&apos;re not in the conversation at all.</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Animated stat blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                end: 60,
                suffix: '%',
                label: 'of Google searches end without a click',
                delay: 0,
              },
              {
                end: 77,
                suffix: '%',
                label: 'of mobile searches never visit a single website',
                delay: 150,
              },
              {
                end: 25,
                suffix: '%',
                label: 'predicted drop in traditional search traffic by 2026 — Gartner',
                delay: 300,
              },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={stat.delay}>
                <div className="stat-block">
                  <CounterAnimation
                    end={stat.end}
                    suffix={stat.suffix}
                    label={stat.label}
                    duration={2200}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <p className="text-center text-[#8A9BB5] text-base md:text-lg font-poppins max-w-2xl mx-auto leading-relaxed">
              Traditional SEO gets you to the top of a list nobody is scrolling anymore.{' '}
              <span className="text-white font-semibold">
                Answer Engine Optimization makes you the answer itself.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== SECTION 4 — THE SOLUTION (AUTHORITY ENGINE) ===== */}
      <section id="solution" className="py-24 md:py-32 bg-[#05050f] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">THE AUTHORITY ENGINE</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-[56px] text-white text-center mb-6 leading-[1.15]">
              We don&apos;t build websites.
              <br />
              <span className="text-[#D4A94A]">We build Answer Real Estate.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-[#8A9BB5] text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Every site we build is engineered as a four-layer Authority Engine —
              structured to be read, trusted, and cited by AI systems today, and
              discoverable by wearables tomorrow.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: 'Stop Lead Leakage',
                body: 'AI crawlers skip slow sites. A 3-second delay isn\'t a UX problem — it\'s a silent revenue killer. Our Next.js sites on Vercel\'s edge infrastructure load in under a second, making your site the first one AI agents read and the last one they need.',
                delay: 0,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
                title: 'Own the Answer',
                body: 'We force AI models to describe your brand accurately. Custom schema encodes your expertise, location, and authority as machine-readable facts — so when someone asks ChatGPT about your industry, your business is the cited source, not your competitor.',
                delay: 100,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
                title: 'The Wearable Fast-Track',
                body: 'We deploy llms.txt — the Digital ID Card that gives AI agents a direct map to your most valuable content. When a customer asks their Meta glasses a question about your business, this file is the reason they hear your name in their ear.',
                delay: 200,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                ),
                title: 'Autonomous Discovery',
                body: 'We implement agent.json — the emerging "DNS for AI agents" — before your competitors know it exists. When autonomous AI systems are shopping services on behalf of buyers, your site is the one they find and can interact with.',
                delay: 300,
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={card.delay}>
                <div className="authority-card h-full">
                  <div className="text-[#D4A94A] mb-5">{card.icon}</div>
                  <h3 className="font-playfair font-bold text-xl text-[#D4A94A] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-poppins text-[#8A9BB5] text-sm leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== SECTION 5 — INTENT COMPRESSION ===== */}
      <section id="intent-compression" className="py-24 md:py-32 bg-[#080810] px-4">
        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <p className="eyebrow text-center mb-5">WHY THIS CHANGES EVERYTHING</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-[56px] text-white text-center mb-10 leading-[1.15]">
              AI doesn&apos;t send you traffic.{' '}
              <span className="text-[#D4A94A]">It sends you buyers.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-[#8A9BB5] text-lg md:text-xl leading-relaxed font-poppins mb-5">
                Visitors who discover your business through an AI citation aren&apos;t browsing —
                they&apos;ve already been vetted. The AI has evaluated your authority, matched your
                expertise to the user&apos;s question, and delivered a pre-qualified buyer directly
                to your door.
              </p>
              <p className="text-[#8A9BB5] text-base md:text-lg leading-relaxed font-poppins">
                This is what we call{' '}
                <span className="text-white font-semibold">Intent Compression</span>. The research
                phase that used to take days of Google searches happens inside the AI in seconds.
                By the time they land on your site, the decision is nearly made.
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison table */}
          <ScrollReveal delay={200}>
            <div className="mb-16 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="font-poppins font-semibold text-[#8A9BB5] text-sm py-4 pr-6 min-w-[180px]">
                      Metric
                    </th>
                    <th className="font-poppins font-semibold text-[#8A9BB5] text-sm py-4 pr-6 min-w-[160px]">
                      Traditional Search
                    </th>
                    <th className="font-poppins font-semibold text-[#D4A94A] text-sm py-4 min-w-[200px]">
                      AI-Cited Traffic
                      <span className="block text-xs font-normal text-[#8A9BB5] mt-0.5">
                        Your 4-Layer Stack
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Conversion Rate', traditional: '2.8%', ai: '14.2% — 5x higher' },
                    { metric: 'Purchase Speed', traditional: 'Standard', ai: '47% faster completion' },
                    { metric: 'Pages Per Session', traditional: 'Baseline', ai: '50% more pages viewed' },
                    { metric: 'Order / Transaction Value', traditional: 'Standard', ai: '25% higher per transaction' },
                    { metric: 'Likelihood to Convert', traditional: 'Baseline', ai: 'Up to 23x more likely' },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-[#D4A94A]/3 transition-colors"
                    >
                      <td className="font-poppins text-white font-medium text-sm py-4 pr-6">
                        {row.metric}
                      </td>
                      <td className="font-poppins text-[#8A9BB5] text-sm py-4 pr-6">
                        {row.traditional}
                      </td>
                      <td className="font-poppins text-[#D4A94A] font-semibold text-sm py-4">
                        {row.ai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-[#8A9BB5] text-center mt-5 font-poppins italic">
                Sources: Current AI search traffic analysis, 2025–2026. B2C metrics across retail, real estate, and professional services sectors.
              </p>
            </div>
          </ScrollReveal>

          {/* Three animated stat callouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                end: 14.2,
                decimals: 1,
                suffix: '%',
                label: 'AI citation conversion rate vs. 2.8% traditional search',
                delay: 0,
              },
              {
                end: 47,
                decimals: 0,
                suffix: '%',
                label: 'faster purchase completion for AI-assisted buyers',
                delay: 150,
              },
              {
                end: 23,
                decimals: 0,
                suffix: 'x',
                label: 'more likely to convert vs. traditional organic traffic',
                delay: 300,
              },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={stat.delay}>
                <div className="stat-block">
                  <CounterAnimation
                    end={stat.end}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    label={stat.label}
                    duration={2200}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Pull quote */}
          <ScrollReveal delay={200}>
            <blockquote className="border-l-4 border-[#D4A94A] bg-[#0d0d1a] rounded-r-xl px-8 py-8 max-w-3xl mx-auto mb-12">
              <p className="font-poppins text-white/90 text-base md:text-lg leading-relaxed italic">
                &ldquo;When an AI recommends your business, it isn&apos;t sending a curious
                visitor. It&apos;s sending a pre-educated buyer who already trusts you —
                before they&apos;ve read a single word on your site.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          {/* Section CTA */}
          <ScrollReveal delay={300}>
            <div className="text-center">
              <Link
                href="/services"
                className="btn-gold-outline font-poppins font-semibold text-base inline-flex items-center gap-2 rounded-md"
                style={{ padding: '15px 36px' }}
              >
                See how we build this for your business
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== SECTION 6 — PROOF ===== */}
      <section id="proof" className="py-24 md:py-32 bg-[#080810] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">REAL RESULTS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-[56px] text-white text-center mb-5 leading-[1.15]">
              Sites AI agents actually read.
            </h2>
            <p className="font-poppins text-[#8A9BB5] text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Every site we build scores 93–100 on PageSpeed. Zero invalid schema items.
              Built to be the first result machines trust.
            </p>
          </ScrollReveal>

          {/* Client score cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                company: 'Zero Click Strategies',
                category: 'Marketing Agency',
                metrics: [
                  { value: '100', label: 'Performance' },
                  { value: '100', label: 'Accessibility' },
                  { value: '100', label: 'Best Practices' },
                  { value: '91', label: 'SEO' },
                ],
                delay: 0,
              },
              {
                company: 'INW Basecamp',
                category: 'Real Estate & Relocation',
                metrics: [
                  { value: '96', label: 'Performance' },
                  { value: '96', label: 'Accessibility' },
                  { value: '100', label: 'Best Practices' },
                  { value: '100', label: 'SEO' },
                ],
                delay: 150,
              },
              {
                company: 'Luxe Window Works',
                category: 'Home Services',
                metrics: [
                  { value: '93', label: 'Performance' },
                  { value: '96', label: 'Accessibility' },
                  { value: '100', label: 'Best Practices' },
                  { value: '100', label: 'SEO' },
                ],
                delay: 300,
              },
            ].map((study, i) => (
              <ScrollReveal key={i} delay={study.delay}>
                <div className="bg-[#0d0d1a] rounded-xl overflow-hidden border border-white/6 hover:border-[#D4A94A]/25 transition-all duration-300 group h-full flex flex-col">
                  <div className="p-7 border-b border-white/5">
                    <span className="category-tag mb-3 inline-block">{study.category}</span>
                    <h3 className="font-poppins font-bold text-xl text-white mt-2">
                      {study.company}
                    </h3>
                  </div>
                  <div className="p-7 flex-1">
                    <div className="grid grid-cols-2 gap-5">
                      {study.metrics.map((m, j) => (
                        <div key={j} className="score-badge">
                          <span className="score-value">{m.value}</span>
                          <span className="score-label">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Proof stats row */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
              {[
                {
                  value: '93–100',
                  label: 'PageSpeed across all sites',
                  sub: 'Performance · Accessibility · Best Practices · SEO',
                },
                {
                  value: '66%',
                  label: 'better mobile scores vs. competitors',
                  sub: 'Compared to WordPress, Wix, and Squarespace sites',
                },
                {
                  value: '0',
                  label: 'invalid schema items across all sites',
                  sub: 'Machine-readable, validated, authoritative',
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center border border-white/5 rounded-xl py-7 px-6 bg-[#0d0d1a]/60"
                >
                  <div className="font-poppins font-bold text-3xl md:text-4xl text-[#D4A94A] mb-1.5">
                    {stat.value}
                  </div>
                  <div className="font-poppins text-white font-semibold text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="font-poppins text-[#8A9BB5] text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* INW Basecamp case study callout */}
          <ScrollReveal delay={200}>
            <div className="inw-callout">
              <p className="eyebrow mb-4">INW Basecamp — Case Study</p>
              <p className="font-poppins text-white/90 text-base md:text-lg leading-relaxed">
                &ldquo;We structured INW Basecamp with amenityFeature schema, FAQPage markup, and a
                relocation knowledge base built for AI queries. When someone asks an AI assistant
                about relocating to North Idaho, Shirin&apos;s site surfaces as the authoritative
                source — while local competitors remain{' '}
                <span className="text-[#D4A94A] font-semibold">completely invisible.</span>&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Link href="/case-studies" className="btn-gold-outline text-sm font-bold px-8 py-3.5 rounded-md inline-block">
                See Full Case Studies
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== SECTION 6 — FREE AEO AUDIT CTA ===== */}
      <section id="audit" className="py-24 md:py-36 bg-[#0d0d1a] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-5">YOUR FIRST STEP</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-[56px] text-white mb-7 leading-[1.15]">
              Find out if AI knows you exist.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-[#8A9BB5] text-lg leading-relaxed mb-5">
              Most business owners don&apos;t know they&apos;re invisible until we show them. Our free
              AEO Audit shows you exactly how your business appears — or doesn&apos;t — when
              someone asks ChatGPT, Perplexity, or Google AI Overviews about your service.
            </p>
            <p className="font-poppins text-[#8A9BB5] text-base leading-relaxed mb-10">
              No pitch. No pressure. Just an honest look at your current AI visibility
              and a clear explanation of what it would take to fix it.
            </p>
          </ScrollReveal>

          {/* Checklist */}
          <ScrollReveal delay={200}>
            <div className="text-left max-w-xl mx-auto mb-12 space-y-4">
              {[
                'How your business currently appears in ChatGPT, Perplexity, and Google AI Overviews',
                'Your PageSpeed score vs. your top three competitors',
                'A plain-English breakdown of your schema gaps',
                'One specific action you can take today — whether you work with us or not',
              ].map((item, i) => (
                <div key={i} className="checklist-item">
                  <svg
                    className="w-5 h-5 text-[#D4A94A] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-poppins text-white/85 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link
              href="/contact"
              className="btn-gold font-poppins font-bold text-base inline-block rounded-md"
              style={{ padding: '18px 44px' }}
            >
              Book Your Free AEO Audit — 20 Minutes. No Obligation.
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== SECTION 7 — FORWARD LOOKING ===== */}
      <section id="future" className="py-24 md:py-32 bg-[#05050f] px-4 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#D4A94A]/4 blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="eyebrow mb-5">WHAT&apos;S COMING</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-[56px] text-white mb-8 leading-[1.15]">
              The same stack that wins today is the foundation for tomorrow.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-[#8A9BB5] text-lg leading-relaxed mb-5">
              The technical preparation for Google AI Overviews in 2026 is identical to
              what&apos;s required for Oakley Meta glasses in 2027. When a potential customer
              walks down the street and asks their glasses &ldquo;who&apos;s the best [business]
              near me&rdquo; — the answer comes from structured data, not a website visit.
            </p>
            <p className="font-poppins text-[#8A9BB5] text-lg leading-relaxed mb-12">
              We&apos;re building that infrastructure now. For the clients who move first, the
              competitive window is open.{' '}
              <span className="text-white font-semibold">
                For everyone else, it&apos;s closing.
              </span>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <Link href="/contact" className="btn-gold-outline font-poppins font-semibold text-base inline-block rounded-md" style={{ padding: '15px 40px' }}>
              Start the Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== SECTION 8 — FOOTER CTA ===== */}
      <section id="cta" className="py-24 md:py-36 bg-[#080810] px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4A94A]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-5 leading-[1.1]">
              Ready to Become{' '}
              <span className="text-[#D4A94A]">the Answer?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="font-poppins text-[#8A9BB5] text-xl md:text-2xl mb-10 leading-relaxed">
              Stop watching AI recommend your competitors.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <Link
              href="/contact"
              className="btn-gold font-poppins font-bold text-lg inline-block rounded-md"
              style={{ padding: '20px 52px' }}
            >
              Get Your Free AEO Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

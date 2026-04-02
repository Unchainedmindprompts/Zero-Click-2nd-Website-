import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CounterAnimation from '@/components/CounterAnimation';

export const metadata: Metadata = {
  title: 'KodeCite.ai — AI Search Optimization & AEO Agency',
  description:
    'AI already answers your customers\u2019 questions \u2014 we rebuild your site so it\u2019s the one answer ChatGPT, Perplexity, and Google\u2019s AI trust enough to recommend. Free AEO Audit available.',
  alternates: {
    canonical: 'https://www.kodecite.ai/',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KodeCite.ai',
  url: 'https://kodecite.ai',
  description:
    'Answer Engine Optimization agency. We structure websites so AI agents cite your business as the definitive answer.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://kodecite.ai/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'KodeCite.ai',
  url: 'https://kodecite.ai',
  logo: 'https://kodecite.ai/logo.png',
  description:
    'KodeCite.ai builds AI-ready websites for small and mid-sized businesses. We rebuild the digital foundation — fast edge hosting, custom schema, and AI identity files — so AI agents can understand, trust, and recommend your business.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Post Falls',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  areaServed: 'United States',
  serviceType: [
    'Answer Engine Optimization',
    'AI Search Optimization',
    'Next.js Website Development',
    'Schema Markup Implementation',
    'AI Identity File Setup',
  ],
  knowsAbout: [
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'AI Search Visibility',
    'JSON-LD Schema Markup',
    'Next.js Edge Hosting',
    'llms.txt',
    'agent.json',
  ],
  sameAs: [
    'https://www.kodecite.ai',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Search Infrastructure Build',
  provider: {
    '@type': 'ProfessionalService',
    name: 'KodeCite.ai',
    url: 'https://kodecite.ai',
  },
  description:
    'We build custom Next.js websites with sub-second load times, per-page JSON-LD schema, and AI identity files (llms.txt + agent.json) so AI systems can read, trust, and recommend your business.',
  serviceType: 'Answer Engine Optimization',
  areaServed: 'United States',
  offers: {
    '@type': 'Offer',
    description: 'One-time website build. No monthly retainer. Client owns the codebase, domain, and hosting account.',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden hero-dark-bg hero-grid-bg"
        id="hero"
        style={{ paddingTop: '87px' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(160,114,58,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div style={{ opacity: 0, animation: 'heroFadeIn 0.7s ease 0.1s forwards' }}>
            <p className="eyebrow mb-6">THE GREAT DECOUPLING · 2026</p>
          </div>

          {/* H1 — Bebas Neue */}
          <h1
            className="font-playfair text-[#0a0806] leading-[1.0] mb-7"
            style={{ fontSize: 'clamp(68px, 10vw, 128px)', opacity: 0, animation: 'heroFadeIn 0.7s ease 0.2s forwards' }}
          >
            <span style={{ color: '#0a0806', display: 'block' }}>Your SEO Is <span className="wood-underline">Working.</span></span>
            <span style={{ color: '#1a56db', display: 'block' }}>Your Business Is Still Invisible.</span>
          </h1>

          {/* Subhead */}
          <p
            className="font-poppins text-base md:text-xl max-w-[640px] mx-auto leading-relaxed"
            style={{ color: '#6a5a48', opacity: 0, animation: 'heroFadeIn 0.7s ease 0.3s forwards' }}
          >
            AI already answers your customers&rsquo; questions &mdash; we rebuild your digital foundation so
            your business is easier for ChatGPT, Perplexity, and Google&apos;s AI to understand, trust,
            and recommend.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            style={{ opacity: 0, animation: 'heroFadeIn 0.7s ease 0.45s forwards' }}
          >
            <a href="#problem" className="btn-ghost font-poppins text-base inline-flex items-center justify-center gap-2" style={{ padding: '16px 24px' }}>
              See How It Works ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom, transparent, #a0723a)', animation: 'pulse-glow 2s ease-in-out infinite' }} />
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== THE HARD TRUTH ===== */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">THE HARD TRUTH</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-6 leading-[1.05]" style={{ color: '#0a0806' }}>
              Most Websites Can&apos;t Be<br />Recommended by AI.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg text-center max-w-2xl mx-auto mb-5 leading-relaxed" style={{ color: '#6a5a48' }}>
              Not because of AI — because of what was broken long before AI arrived. AI doesn&apos;t guess. If it can&apos;t clearly understand and verify your business, it skips you entirely.
            </p>
            <p className="font-poppins text-base md:text-lg text-center max-w-2xl mx-auto mb-12 font-medium leading-relaxed" style={{ color: '#0a0806' }}>
              AI doesn&apos;t rank the best business. It selects the one it understands with the highest confidence.
            </p>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto mb-12 space-y-4">
            {[
              { label: 'No structured entity data', body: 'AI agents need machine-readable signals to understand who you are, what you do, and where you operate. Most sites have none.' },
              { label: 'Inconsistent business signals', body: 'Conflicting NAP data, missing directory listings, and unverified profiles tell AI your business can\'t be trusted.' },
              { label: 'Generic, templated content', body: 'Content that doesn\'t clearly answer questions about your specific expertise gives AI nothing to cite.' },
              { label: 'Slow, bloated infrastructure', body: 'AI crawlers deprioritize slow sites. A 4-second load time isn\'t just a UX problem — it\'s a trust signal failure.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 p-5 rounded-xl" style={{ background: '#ffffff', border: '1px solid rgba(160,114,58,0.15)' }}>
                  <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#c0392b' }}>
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-poppins font-semibold text-sm md:text-base mb-1" style={{ color: '#0a0806' }}>{item.label}</p>
                    <p className="font-poppins text-sm leading-relaxed" style={{ color: '#6a5a48' }}>{item.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="max-w-2xl mx-auto space-y-5">
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                Most business owners I talk to want to be recommended by AI. They&apos;ve heard the terms — AEO, GEO, answer engine optimization — but most have no idea what they actually mean yet.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                The bigger problem: 80–90% of them have a weak or broken SEO foundation. Without fixing the basics first — fast cold-load performance, proper schema, clean entity signals — no content strategy in the world will help. AI agents simply won&apos;t trust or fully parse the site.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                That&apos;s why we start with the infrastructure. We rebuild the foundation so your site is actually readable and trustworthy to AI systems. Only then does the AEO/GEO layer become truly effective.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed font-medium" style={{ color: '#0a0806' }}>
                Without fixing the foundation first, every dollar you spend on content, ads, or AI tools is building on sand.{' '}
                <span style={{ color: '#a0723a' }}>Generic solutions don&apos;t fix structural problems — they just make the bill bigger.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PROOF IT WORKS ===== */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: '#faf7f2' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">PROOF IT WORKS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-6 leading-tight" style={{ color: '#0a0806' }}>
              We Proved It On Our Own Business First.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-base md:text-lg text-center leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#6a5a48' }}>
              Luxe Window Works — our own custom window treatment company in Post Falls, Idaho — went from unknown to AI-recommended first across six platforms in 2.5 months with zero ad spend. One year old business. One year old domain. Previously on Wix, then WordPress.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <ul className="space-y-2 max-w-xl mx-auto mb-8">
              {[
                { time: '9:36 AM', text: 'ChatGPT \u2014 \u201cBest overall pick locally.\u201d' },
                { time: '9:43 AM', text: 'Google Map Pack \u2014 ranked #1.' },
                { time: '9:43 AM', text: 'Google AI Mode \u2014 first under \u201cTop-Rated Local Specialists.\u201d' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start font-poppins text-sm md:text-base" style={{ color: '#6a5a48' }}>
                  <span className="font-semibold shrink-0" style={{ color: '#a0723a' }}>{item.time}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={210}>
            <div className="text-center">
              <Link
                href="/our-work/luxe-window-works"
                className="btn-ghost font-poppins text-base inline-flex items-center justify-center gap-2"
                style={{ padding: '16px 32px' }}
              >
                See the Full Case Study →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={230}>
            <p className="font-poppins text-sm text-center mt-6 font-medium" style={{ color: '#a0723a' }}>
              Nothing about the business changed. Only how machines understood it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== WHAT WE ACTUALLY DO ===== */}
      <section id="the-missing-tier" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">WHAT WE ACTUALLY DO</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-6 leading-[1.05]" style={{ color: '#0a0806' }}>
              Here&apos;s What We Actually Do
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed" style={{ color: '#6a5a48' }}>
              We don&apos;t optimize existing websites. We build the digital infrastructure AI systems can actually trust — an owned asset designed to compound over time, not disappear when ad spend stops.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Build the Foundation',
                  body: 'We create a custom Next.js site on your own Vercel edge network — engineered for sub-second cold loads on real devices. No templates. No rented platforms. No bloat. And because everything is built in code on edge infrastructure, adapting to changes in AI search is faster too — we\'re not waiting on plugins, themes, or bloated platforms to catch up.',
                },
                {
                  step: '2',
                  title: 'Encode Your Authority',
                  body: 'We embed your expertise, location, and services directly into machine-readable schema and identity files (llms.txt + agent.json) so AI agents can understand exactly who you are — and cite you by name.',
                },
                {
                  step: '3',
                  title: 'Ship an Asset You Own',
                  body: 'When we\'re done, you get the full codebase, domain, and hosting account. No monthly rent. No platform lock-in. Just an owned digital asset built to stay fast, adapt quickly, and compound in value as AI-driven discovery evolves.',
                },
              ].map((item) => (
                <ScrollReveal key={item.step} delay={parseInt(item.step) * 100}>
                  <div className="p-8 rounded-xl border h-full" style={{ borderColor: 'rgba(160,114,58,0.2)', backgroundColor: '#ffffff', borderTop: '3px solid #a0723a' }}>
                    <p className="font-playfair text-3xl font-bold mb-3" style={{ color: '#a0723a' }}>{item.step}</p>
                    <h3 className="font-poppins font-semibold text-lg mb-3" style={{ color: '#0a0806' }}>{item.title}</h3>
                    <p className="font-poppins text-sm leading-relaxed" style={{ color: '#6a5a48' }}>{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Stat callout row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { number: 'Sub-1s', label: 'Real-device load time on modern iPhone — vs. 3–8s on subscription platforms', delay: 0 },
              { number: '90–100', label: 'Lighthouse desktop score on every build. Mobile scores in the 80s–90s — because Lighthouse mobile simulates a 2018 device on throttled 4G. Real users are on 5G.', delay: 150 },
              { number: 'Custom', label: 'Schema markup built per page, per article — never copy-pasted site-wide', delay: 300 },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={stat.delay}>
                <div style={{
                  textAlign: 'center',
                  padding: '2.5rem 2rem',
                  background: '#ffffff',
                  border: '1.5px solid rgba(160,114,58,0.35)',
                  borderRadius: '1rem',
                  borderTop: '3px solid #a0723a',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 12px rgba(160,114,58,0.08)',
                }}>
                  <p className="font-playfair font-bold" style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1, color: '#a0723a' }}>{stat.number}</p>
                  <p className="font-poppins text-sm mt-3 uppercase tracking-wider font-semibold" style={{ color: '#6a5a48' }}>{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA — KodeCite Standard */}
          <ScrollReveal delay={280}>
            <div className="text-center mb-6">
              <a
                href="#kodecite-standard"
                className="font-poppins font-semibold text-base inline-flex items-center gap-2 pb-0.5 transition-colors"
                style={{ color: '#a0723a', borderBottom: '1px solid rgba(160,114,58,0.4)' }}
              >
                → See the KodeCite Standard
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <div className="section-divider" />

      {/* ===== INTENT COMPRESSION — mid warm ===== */}
      <section id="intent-compression" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">WHY THIS CHANGES EVERYTHING</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-10 leading-[1.05]" style={{ color: '#0a0806' }}>
              AI doesn&apos;t send traffic.{' '}
              <span style={{ color: '#a0723a' }}>It sends pre-qualified buyers.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg md:text-xl leading-relaxed font-poppins mb-5" style={{ color: '#6a5a48' }}>
                Visitors who discover your business through an AI citation aren&apos;t browsing —
                they&apos;ve already been vetted. The AI has evaluated your authority, matched your
                expertise to the user&apos;s question, and delivered a pre-qualified buyer directly
                to your door.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-poppins" style={{ color: '#6a5a48' }}>
                This is what we call{' '}
                <span className="font-semibold" style={{ color: '#0a0806' }}>Intent Compression</span>. The research
                that used to take days happens inside the AI in seconds.
                By the time they land on your site, the decision is nearly made.
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison table */}
          <ScrollReveal delay={200}>
            <div className="mb-16 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(100,70,30,0.2)' }}>
                    <th className="font-poppins font-semibold text-sm py-4 pr-6 min-w-[180px]" style={{ color: '#6a5a48' }}>Metric</th>
                    <th className="font-poppins font-semibold text-sm py-4 pr-6 min-w-[160px]" style={{ color: '#6a5a48' }}>Traditional Search</th>
                    <th className="font-poppins font-semibold text-sm py-4 min-w-[200px]" style={{ color: '#a0723a' }}>
                      AI-Cited Traffic
                      <span className="block text-xs font-normal mt-0.5" style={{ color: '#6a5a48' }}>KodeCite Stack</span>
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
                    <tr key={i} className="transition-colors" style={{ borderBottom: '1px solid rgba(100,70,30,0.1)' }}>
                      <td className="font-poppins font-medium text-sm py-4 pr-6" style={{ color: '#0a0806' }}>{row.metric}</td>
                      <td className="font-poppins text-sm py-4 pr-6" style={{ color: '#6a5a48' }}>{row.traditional}</td>
                      <td className="font-poppins font-semibold text-sm py-4" style={{ color: '#a0723a' }}>{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-center mt-5 font-poppins italic" style={{ color: '#6a5a48' }}>
                Sources: Current AI search traffic analysis, 2025–2026. B2C metrics across retail, real estate, and professional services sectors.
              </p>
            </div>
          </ScrollReveal>

          {/* Stat callouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { end: 14.2, decimals: 1, suffix: '%', label: 'AI citation conversion rate vs. 2.8% traditional search', delay: 0 },
              { end: 47, decimals: 0, suffix: '%', label: 'faster purchase completion for AI-assisted buyers', delay: 150 },
              { end: 23, decimals: 0, suffix: 'x', label: 'more likely to convert vs. traditional organic traffic', delay: 300 },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={stat.delay}>
                <div className="stat-block">
                  <CounterAnimation end={stat.end} decimals={stat.decimals} suffix={stat.suffix} label={stat.label} duration={2200} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Pull quote */}
          <ScrollReveal delay={200}>
            <blockquote className="rounded-r-xl px-8 py-8 max-w-3xl mx-auto mb-12" style={{ borderLeft: '4px solid #a0723a', background: '#e8e0d0' }}>
              <p className="font-poppins text-base md:text-lg leading-relaxed italic" style={{ color: '#1c1814' }}>
                &ldquo;When an AI recommends your business, it isn&apos;t sending a curious
                visitor. It&apos;s sending a pre-educated buyer who already trusts you —
                before they&apos;ve read a single word on your site.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center">
              <Link href="/services" className="btn-gold-outline font-poppins font-semibold text-base inline-flex items-center gap-2 rounded-md" style={{ padding: '15px 36px' }}>
                See how we build this for your business
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== THE PROBLEM — dark charcoal stats bar ===== */}
      <section id="problem" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#1c1814' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5" style={{ color: '#c8945a' }}>WHY THIS IS HAPPENING</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-10 leading-[1.05]" style={{ color: '#f8f5f0' }}>
              AI Search Changed How Customers Find You.{' '}
              <span style={{ color: 'rgba(240,232,216,0.55)' }}>Most businesses haven&apos;t caught up yet.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-lg md:text-xl leading-relaxed font-poppins mb-5" style={{ color: 'rgba(240,232,216,0.82)' }}>
                Your rankings didn&apos;t drop. Your traffic did. The answer is sitting at the top of the page — and it&apos;s not your website.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-poppins" style={{ color: 'rgba(240,232,216,0.82)' }}>
                ChatGPT, Perplexity, and Google AI Overviews synthesize answers from sites they can read, trust, and cite.
                If your site isn&apos;t structured for machine discovery, you aren&apos;t ranked lower.{' '}
                <span className="font-semibold" style={{ color: '#f8f5f0' }}>You&apos;re not in the conversation at all.</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { end: 60, suffix: '%', label: 'of Google searches end without a click', delay: 0 },
              { end: 77, suffix: '%', label: 'of mobile searches never visit a single website', delay: 150 },
              { end: 47, suffix: '%', label: 'of all Google searches now trigger an AI Overview', delay: 300 },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={stat.delay}>
                <div className="stat-block">
                  <CounterAnimation end={stat.end} suffix={stat.suffix} label={stat.label} duration={2200} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <p className="text-center text-base md:text-lg font-poppins max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(240,232,216,0.82)' }}>
              Traditional SEO gets you to the top of a list nobody is scrolling anymore.{' '}
              <span className="font-semibold" style={{ color: '#f8f5f0' }}>
                Answer Engine Optimization makes you the answer itself.
              </span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== WHY NOTHING ELSE SOLVES THIS ===== */}
      <section id="why-nothing-else" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">WHY NOTHING ELSE SOLVES THIS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-6 leading-[1.05]" style={{ color: '#0a0806' }}>
              Why Nothing Else Solves This
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed" style={{ color: '#a0723a' }}>
              The market has two options for AI search visibility. Neither one was built for you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <div className="max-w-3xl mx-auto mb-14 space-y-5">
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                <strong style={{ color: '#0a0806' }}>Trap One: Enterprise SEO platforms.</strong> Powerful tools for Fortune 500 teams. They optimize what already exists — they don&apos;t fix a slow, bloated, AI-invisible foundation. If your infrastructure is the problem, better reporting won&apos;t solve it.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                <strong style={{ color: '#0a0806' }}>Trap Two: Subscription website platforms.</strong> WordPress agencies, real estate website builders, and monthly SaaS tools promise simplicity. What they deliver is shared infrastructure that often loads in 3–8 seconds on mobile — while our builds deliver the same pages in under a second on a real iPhone. That&apos;s not a benchmark. That&apos;s what your visitors and AI crawlers actually experience.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                In between sits the majority of serious small and mid-sized businesses with no purpose-built solution. We are the missing tier: a site built from the ground up for how AI actually works.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== OWNERSHIP ===== */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-6xl mx-auto">
          {/* ===== YOU OWN THE ASSET ===== */}
          <ScrollReveal delay={100}>
            <div className="p-8 md:p-10 rounded-2xl" style={{ background: '#e8e0d0', border: '1.5px solid rgba(160,114,58,0.25)' }}>
              <p className="eyebrow mb-3">OWNERSHIP</p>
              <h3 className="font-playfair text-2xl md:text-3xl mb-6 leading-tight" style={{ color: '#0a0806' }}>
                You Own the Asset
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  'Built on your own Vercel account — no platform lock-in, ever.',
                  'Custom Next.js codebase in your GitHub — move it, fork it, extend it.',
                  'One-time build. Ongoing content and optimization is available, never mandatory.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#a0723a' }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-poppins text-sm md:text-base leading-relaxed" style={{ color: '#6a5a48' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-poppins text-sm md:text-base font-medium" style={{ color: '#0a0806' }}>
                We don&apos;t sell SEO retainers. We build the structured, edge-hosted asset that AI assistants rely on to decide who to recommend — and hand you the keys when we&apos;re done.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== KODECITE STANDARD ===== */}
      <section id="kodecite-standard" className="py-24 md:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#1c1814' }}>
        <div className="absolute top-0 left-0 right-0" style={{ height: '4px', background: 'linear-gradient(90deg, #3e1f08 0%, #7a5228 15%, #a0723a 30%, #c8945a 50%, #a0723a 70%, #7a5228 85%, #3e1f08 100%)' }} />
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5" style={{ color: '#c8945a' }}>NON-NEGOTIABLES</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-4 leading-[1.05]" style={{ color: '#f8f5f0' }}>
              The KodeCite Standard
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="font-poppins text-lg text-center mb-12 leading-relaxed" style={{ color: 'rgba(240,232,216,0.7)' }}>
              Every build ships with all of this. No exceptions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-4">
              {([
                'AI identity files (llms.txt + agent.json) deployed on every build — your digital ID for the agent era.',
                'Sub-1s real-device load time on a modern iPhone — verified before go-live, not simulated.',
                'Custom per-page JSON-LD schema — homepage, services, locations, articles, and FAQ — never copy-pasted site-wide.',
                'Zero invalid schema items at launch — machine-verified before delivery.',
                (<><strong style={{ color: '#f8f5f0' }}>Launch indexing checklist</strong> — directory scaffolding across GBP, Bing Places, Apple Business Connect, Yelp, and BBB, plus sitemap.xml submitted to Google Search Console and Bing at go-live.</>),
                'You own the code, domain, and hosting account outright — we hand over the keys when we\'re done.',
              ] as React.ReactNode[]).map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(160,114,58,0.15)' }}
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#a0723a' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-poppins text-sm md:text-base leading-relaxed" style={{ color: 'rgba(240,232,216,0.85)' }}>{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== FREE AEO AUDIT CTA — light ===== */}
      <section id="audit" className="py-24 md:py-36 px-4" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-5">FREE AI SCAFFOLDING AUDIT</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] mb-7 leading-[1.05]" style={{ color: '#0a0806' }}>
              Find out if AI knows you exist.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg leading-relaxed mb-5" style={{ color: '#6a5a48' }}>
              Visibility in AI doesn&apos;t mean much if the scaffolding is weak. Find out if AI truly
              trusts, reads, and chooses you — or if you&apos;re one structured competitor away from being passed over entirely.
            </p>
            <p className="font-poppins text-base leading-relaxed mb-10" style={{ color: '#6a5a48' }}>
              No pitch. No pressure. Just an honest look at the hidden structure beneath your AI presence
              and a clear explanation of what it would take to fix it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="text-left max-w-xl mx-auto mb-12 space-y-4">
              {[
                'How your business currently appears in ChatGPT, Perplexity, and Google AI Overviews — in plain English.',
                'Your PageSpeed score benchmarked against your top three local competitors.',
                'A plain-English breakdown of your schema gaps and what AI can\'t read about you right now.',
                'One specific action you can implement today — whether you work with us or not.',
              ].map((item, i) => (
                <div key={i} className="checklist-item">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#a0723a' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-poppins text-sm md:text-base" style={{ color: '#6a5a48' }}>{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SHORTLIST IS SHRINKING — mid warm ===== */}
      <section id="future" className="py-24 md:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#f2ede4' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(160,114,58,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="eyebrow mb-5">WHY THE SHORTLIST IS SHRINKING</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] mb-8 leading-[1.05]" style={{ color: '#0a0806' }}>
              AI interfaces don&apos;t show ten results.{' '}
              <span style={{ color: '#a0723a' }}>They recommend one.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg leading-relaxed mb-5" style={{ color: '#6a5a48' }}>
              Ten blue links gave every business a chance to be clicked. AI interfaces — chat, voice, and ambient — compress that list down to the few answers a system trusts most. Meta is already shipping AI glasses today, and as interfaces become more conversational and context-aware, the number of businesses surfaced in any given query is likely to shrink further.
            </p>
            <p className="font-poppins text-lg leading-relaxed mb-12" style={{ color: '#6a5a48' }}>
              This isn&apos;t a prediction. It&apos;s the interface trend already underway. The businesses with the clearest machine-readable structure get selected more consistently — across chat, voice, AI Overviews, and whatever interface comes next.{' '}
              <span className="font-semibold" style={{ color: '#0a0806' }}>Structure built today compounds tomorrow.</span>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <Link href="/contact" className="btn-gold-outline font-poppins font-semibold text-base inline-block rounded-md" style={{ padding: '15px 40px' }}>
              Start the Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== FOOTER CTA — warm gradient ===== */}
      <section id="cta" className="py-24 md:py-36 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #f8f5f0, #e8e0d0)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(160,114,58,0.07) 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl mb-5 leading-[1.0]" style={{ color: '#0a0806' }}>
              Visible by Default.{' '}
              <span style={{ color: '#a0723a' }}>Or Visible by Design.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="font-poppins text-xl md:text-2xl mb-10 leading-relaxed" style={{ color: '#6a5a48' }}>
              Most businesses showing up in AI answers are there because no one else has claimed the space yet. We audit the hidden scaffolding — the structure that determines whether AI truly trusts, reads, and chooses you… or replaces you the moment a structured competitor arrives.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <Link href="/contact" className="btn-gold font-poppins font-semibold text-lg inline-block rounded-md" style={{ padding: '20px 52px' }}>
              Get My Free Scaffolding Audit →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

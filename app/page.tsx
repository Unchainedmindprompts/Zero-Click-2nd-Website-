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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
            AI already answers your customers&rsquo; questions &mdash; we rebuild your site so
            it&rsquo;s the one answer ChatGPT, Perplexity, and Google&rsquo;s AI trust enough to
            recommend.
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

      {/* ===== WHO THIS IS FOR ===== */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">BUILT FOR</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-10 leading-tight" style={{ color: '#0a0806' }}>
              Who This Is For
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                'Local Attorneys',
                'Independent Financial Advisors',
                'Real Estate Agents',
                'Med Spas & Aesthetic Practices',
                'Specialist Service Businesses',
              ].map((item, i, arr) => (
                <span key={i} className="font-poppins font-medium text-sm md:text-base" style={{ color: '#0a0806' }}>
                  {item}{i < arr.length - 1 && <span style={{ color: '#a0723a', margin: '0 0.5rem' }}>·</span>}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== IN 10 SECONDS ===== */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">IN 10 SECONDS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12 leading-[1.05]" style={{ color: '#0a0806' }}>
              Here&apos;s what we actually do
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6">
              {[
                { bold: 'Build', rest: ' your site on a sub-1s Next.js + Vercel edge chassis. No templates. No rented platforms.' },
                { bold: 'Encode', rest: ' your expertise and location in AI-readable schema and identity files so AI systems cite you by name.' },
                { bold: 'Ship', rest: ' an owned asset — your code, your domain, your hosting account — built to be cited by AI for years.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-poppins font-bold text-sm"
                    style={{ background: 'rgba(160,114,58,0.12)', color: '#a0723a', minWidth: '2rem' }}
                  >
                    {i + 1}
                  </div>
                  <p className="font-poppins text-base md:text-lg leading-relaxed pt-0.5" style={{ color: '#6a5a48' }}>
                    <strong style={{ color: '#0a0806' }}>{item.bold}</strong>{item.rest}
                  </p>
                </div>
              ))}
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
              The game changed.{' '}
              <span style={{ color: 'rgba(240,232,216,0.55)' }}>Nobody told your marketing team.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <p className="text-lg md:text-xl leading-relaxed font-poppins mb-5" style={{ color: 'rgba(240,232,216,0.82)' }}>
                Your rankings didn&apos;t drop. Your traffic did. That&apos;s not a coincidence
                — it&apos;s the new reality of AI-driven search.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-poppins" style={{ color: 'rgba(240,232,216,0.82)' }}>
                When someone asks ChatGPT, Perplexity, or Google&apos;s AI Overview a question
                about your industry, the AI synthesizes an answer from sites it can read, trust,
                and cite. If your site isn&apos;t structured for machine discovery, you aren&apos;t
                ranked lower.{' '}
                <span className="font-semibold" style={{ color: '#f8f5f0' }}>You&apos;re not in the conversation at all.</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { end: 60, suffix: '%', label: 'of Google searches end without a click', delay: 0 },
              { end: 77, suffix: '%', label: 'of mobile searches never visit a single website', delay: 150 },
              { end: 25, suffix: '%', label: 'predicted drop in traditional search traffic by 2026 — Gartner', delay: 300 },
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
                The businesses trying to solve this right now are falling into one of two traps — and spending real money to do it.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                <strong style={{ color: '#0a0806' }}>Trap One: Enterprise SEO platforms.</strong> Powerful tools. Built for Fortune 500 marketing departments with dedicated teams and $3,000–$10,000+ monthly budgets. They optimize existing infrastructure — they don&apos;t build it. If your foundation is slow, bloated, and AI-invisible, adding enterprise reporting tools on top doesn&apos;t fix the foundation. It just gives you better data on a problem you still can&apos;t fix.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                <strong style={{ color: '#0a0806' }}>Trap Two: Subscription website platforms.</strong> WordPress agencies. Real estate website builders. Monthly SaaS site tools. They promise simplicity. What they deliver is shared infrastructure with real-device load times of 3 to 8 seconds on mobile — while our builds deliver the same pages in under a second on a modern iPhone on WiFi or 5G. That&apos;s not a benchmark number. That&apos;s what your visitors and AI crawlers actually experience. Retrofitting a slow, bloated subscription site for AI discoverability is like installing a jet engine in a station wagon. The engine doesn&apos;t fit. The frame wasn&apos;t built for it.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                In between these two options sits the overwhelming majority of small and mid-sized businesses — the local attorney, the independent financial advisor, the real estate agent building their own brand — with no purpose-built solution designed for how AI actually works. Not one that starts from the foundation up. Not one that owns and compounds instead of renting and churning. Not until now.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== THE ONE TIER THAT DOESN'T EXIST YET ===== */}
      <section id="the-missing-tier" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">THE MISSING TIER</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-6 leading-[1.05]" style={{ color: '#0a0806' }}>
              The Web Was Built for 2005. AI Doesn&apos;t Care.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed" style={{ color: '#a0723a' }}>
              Most business websites were designed for a world that no longer exists &mdash; static pages built to rank on Google, not to be understood by AI. We build the infrastructure that actually works in the world you&apos;re operating in now.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <div className="max-w-3xl mx-auto mb-16 space-y-5">
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                A site built from the ground up for AI discoverability looks fundamentally different from anything in either tier above.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                It starts with edge infrastructure — Next.js deployed across a global CDN so your content reaches any user or AI crawler in under a second on a real device. Not a simulated stress test. Not a lab benchmark. Actual load time on a 2026 iPhone on WiFi or 5G — 66% faster than the average WordPress site in real-user conditions. It layers in answer-first content architecture that AI systems can extract and cite. It adds custom schema markup — not copy-pasted templates, but per-page JSON-LD that encodes your expertise, location, and authority as machine-readable facts. And it builds the SEO foundation that everything else depends on before adding a single layer of AEO or GEO on top.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                Enterprise tools assume that foundation exists. Subscription platforms can&apos;t build it — and even if they could, you&apos;d never own it. We start at the foundation, we build it right, and when it&apos;s done it&apos;s yours. No monthly rent. No platform risk. No churn.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                The one thing nobody can promise about AI is what it looks like six months from now. New protocols. New file standards. New crawlers. The space changes faster than any agency can predict — and anyone who tells you otherwise is overselling. That&apos;s one of the core reasons KodeCite exists. When the standard changes — and it will — we update a line of code, push to GitHub, and it deploys in minutes. No drama. No delays. No plugin conflicts. No waiting for a vendor to release a patch. Your infrastructure adapts as fast as the technology does.
              </p>
              <p className="font-poppins text-base md:text-lg leading-relaxed" style={{ color: '#6a5a48' }}>
                The result: a site AI systems don&apos;t just crawl. They trust, cite, and recommend.
              </p>
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

          {/* CTA */}
          <ScrollReveal delay={300}>
            <div className="text-center">
              <a
                href="#solution"
                className="font-poppins font-semibold text-base inline-flex items-center gap-2 pb-0.5 transition-colors"
                style={{ color: '#a0723a', borderBottom: '1px solid rgba(160,114,58,0.4)' }}
              >
                See How We Build It
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== COMPARISON TABLE + OWNERSHIP ===== */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-6xl mx-auto">
          {/* Three-tier comparison table */}
          <ScrollReveal delay={200}>
            <div className="mb-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(100,70,30,0.2)' }}>
                    <th className="font-poppins font-semibold text-sm py-4 pr-6 min-w-[160px]" style={{ color: '#6a5a48' }}></th>
                    <th className="font-poppins font-semibold text-sm py-4 pr-6 min-w-[180px]" style={{ color: '#6a5a48' }}>Enterprise Platforms</th>
                    <th className="font-poppins font-semibold text-sm py-4 pr-6 min-w-[180px]" style={{ color: '#6a5a48' }}>Subscription Builders</th>
                    <th className="font-poppins font-semibold text-sm py-4 min-w-[200px]" style={{ color: '#a0723a' }}>
                      KodeCite.AI
                      <span className="block text-xs font-normal mt-0.5" style={{ color: '#6a5a48' }}>Built for this</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Built for', ent: 'Fortune 500 + dedicated team', sub: 'Small business volume', kc: 'Small-mid business serious about AI' },
                    { label: 'Monthly cost', ent: '$3,000–$10,000+', sub: '$150–$600', kc: '$0 after build — you own it' },
                    { label: 'Builds the foundation', ent: 'No — assumes you have it', sub: 'No — templated and slow', kc: 'Yes — from the ground up' },
                    { label: 'PageSpeed scores', ent: 'Depends on existing site', sub: 'Typically 40–65', kc: '90–100, guaranteed' },
                    { label: 'Schema markup', ent: 'Reporting tools', sub: 'Template-level, site-wide', kc: 'Custom per page and article' },
                    { label: 'AI citation result', ent: 'Possible if foundation exists', sub: 'Rarely cited', kc: 'Built to be cited' },
                    { label: 'You own it', ent: 'No — software license', sub: 'No — rented platform', kc: 'Yes — outright' },
                  ].map((row, i) => (
                    <tr key={i} className="transition-colors" style={{ borderBottom: '1px solid rgba(100,70,30,0.1)' }}>
                      <td className="font-poppins font-medium text-sm py-4 pr-6" style={{ color: '#0a0806' }}>{row.label}</td>
                      <td className="font-poppins text-sm py-4 pr-6" style={{ color: '#6a5a48' }}>{row.ent}</td>
                      <td className="font-poppins text-sm py-4 pr-6" style={{ color: '#6a5a48' }}>{row.sub}</td>
                      <td className="font-poppins font-semibold text-sm py-4" style={{ color: '#a0723a' }}>{row.kc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* ===== YOU OWN THE ASSET ===== */}
          <ScrollReveal delay={250}>
            <div className="mt-10 p-8 md:p-10 rounded-2xl" style={{ background: '#e8e0d0', border: '1.5px solid rgba(160,114,58,0.25)' }}>
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

      {/* ===== AUTHORITY ENGINE — light, service cards ===== */}
      <section id="solution" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">THE AUTHORITY ENGINE</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-6 leading-[1.05]" style={{ color: '#0a0806' }}>
              We don&apos;t build websites.
              <br />
              <span style={{ color: '#a0723a' }}>We build Answer Real Estate.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed" style={{ color: '#6a5a48' }}>
              Every site we build is engineered as a four-layer Authority Engine —
              structured to be read, trusted, and cited by AI systems today, and
              discoverable by wearables tomorrow.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                title: 'Stop Lead Leakage',
                body: "AI crawlers skip slow sites. A 3-second delay isn't a UX problem — it's a silent revenue killer. Our Next.js sites on Vercel's edge infrastructure load in under a second, making your site the first one AI agents read and the last one they need.",
                delay: 0,
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
                title: 'Own the Answer',
                body: "We force AI models to describe your brand accurately. Custom schema encodes your expertise, location, and authority as machine-readable facts — so when someone asks ChatGPT about your industry, your business is the cited source, not your competitor.",
                delay: 100,
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
                title: 'The Wearable Fast-Track',
                body: "We deploy llms.txt — the Digital ID Card that gives AI agents a direct map to your most valuable content. When a customer asks their Meta glasses a question about your business, this file is the reason they hear your name in their ear.",
                delay: 200,
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>,
                title: 'Autonomous Discovery',
                body: 'We implement agent.json — the emerging "DNS for AI agents" — before your competitors know it exists. When autonomous AI systems are shopping services on behalf of buyers, your site is the one they find and can interact with.',
                delay: 300,
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={card.delay}>
                <div className="authority-card h-full">
                  <div style={{ color: '#a0723a' }} className="mb-5">{card.icon}</div>
                  <h3 className="font-playfair text-xl mb-3 leading-snug" style={{ color: '#0a0806' }}>
                    {card.title}
                  </h3>
                  <p className="font-poppins text-sm leading-relaxed" style={{ color: '#6a5a48' }}>
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              AI doesn&apos;t send you traffic.{' '}
              <span style={{ color: '#a0723a' }}>It sends you buyers.</span>
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
                    <th className="font-poppins font-semibold text-sm py-4 pr-6 min-w-[180px]" style={{ color: '#6a5a48' }}>
                      Metric
                    </th>
                    <th className="font-poppins font-semibold text-sm py-4 pr-6 min-w-[160px]" style={{ color: '#6a5a48' }}>
                      Traditional Search
                    </th>
                    <th className="font-poppins font-semibold text-sm py-4 min-w-[200px]" style={{ color: '#a0723a' }}>
                      AI-Cited Traffic
                      <span className="block text-xs font-normal mt-0.5" style={{ color: '#6a5a48' }}>
                        KodeCite Stack
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

      {/* ===== REAL RESULTS — dark proof section ===== */}
      <section id="proof" className="py-24 md:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#1c1814' }}>
        {/* Top wood band */}
        <div className="absolute top-0 left-0 right-0" style={{ height: '5px', background: 'linear-gradient(90deg, #3e1f08 0%, #7a5228 15%, #a0723a 30%, #c8945a 50%, #a0723a 70%, #7a5228 85%, #3e1f08 100%)' }} />

        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5" style={{ color: '#c8945a' }}>WHY THE INFRASTRUCTURE MATTERS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-center mb-10 leading-[1.05]" style={{ color: '#f8f5f0' }}>
              We don&apos;t build websites for hits.{' '}
              <br className="hidden lg:block" />
              We build{' '}
              <span style={{ color: '#c8945a' }}>high-fidelity data structures</span>{' '}
              AI engines trust.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <blockquote className="rounded-r-xl px-8 py-8 max-w-3xl mx-auto mb-20" style={{ borderLeft: '4px solid #a0723a', background: '#2a2420' }}>
              <p className="font-poppins text-base md:text-lg leading-relaxed italic" style={{ color: 'rgba(240,232,216,0.85)' }}>
                &ldquo;Every metric below is a machine-readability signal — the difference between being cited as the answer
                and being skipped entirely.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                end: 0.8, decimals: 1, suffix: 's',
                label: 'MACHINE PRIORITY',
                descriptor: 'AI crawlers operate on a limited token budget and skip slow, heavy sites to save compute costs. Our Next.js + Edge infrastructure loads in under a second — making your site the first one AI agents read and the last one they need.',
                delay: 0,
              },
              {
                end: 0, decimals: 0, suffix: '',
                label: 'SOURCE OF TRUTH — ZERO RECOGNITION ERRORS',
                descriptor: 'Every site we build has zero invalid schema items. AI never has to guess what your business offers. Your services, location, expertise, and authority are encoded as machine-readable facts — cited with 100% certainty.',
                delay: 150,
              },
              {
                end: 66, decimals: 0, suffix: '%',
                label: 'ANSWER LAYER ADVANTAGE',
                descriptor: '77% of mobile searches end without a click. Our mobile infrastructure scores 66% better than the typical WordPress, Wix, or Squarespace competitor — ensuring your site wins the Answer Layer where traditional sites are invisible.',
                delay: 300,
              },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={stat.delay}>
                <div className="stat-block h-full flex flex-col">
                  <CounterAnimation end={stat.end} decimals={stat.decimals} suffix={stat.suffix} label={stat.label} duration={2000} />
                  <p className="font-poppins text-sm mt-6 leading-relaxed flex-1" style={{ color: 'rgba(240,232,216,0.78)' }}>
                    {stat.descriptor}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <p className="font-poppins text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: 'rgba(240,232,216,0.7)' }}>
              &ldquo;When an AI assistant recommends a business, it&apos;s because that business
              gave the machine a reason to trust it.{' '}
              <span className="font-semibold" style={{ color: '#f8f5f0' }}>
                We build that reason into every line of code.
              </span>
              &rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center">
              <Link
                href="/services"
                className="font-poppins font-semibold text-base inline-flex items-center gap-2 pb-0.5 transition-colors"
                style={{ color: '#c8945a', borderBottom: '1px solid rgba(200,148,90,0.4)' }}
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
              trusts, reads, and chooses you — or if you&apos;re one structured competitor away from invisible.
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

      {/* ===== FORWARD LOOKING — mid warm ===== */}
      <section id="future" className="py-24 md:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#f2ede4' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(160,114,58,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="eyebrow mb-5">WHAT&apos;S COMING</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] mb-8 leading-[1.05]" style={{ color: '#0a0806' }}>
              The same stack that wins today is the foundation for tomorrow.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg leading-relaxed mb-5" style={{ color: '#6a5a48' }}>
              The technical preparation for Google AI Overviews in 2026 is identical to
              what&apos;s required for Oakley Meta glasses in 2027. When a potential customer
              walks down the street and asks their glasses &ldquo;who&apos;s the best [business]
              near me&rdquo; — the answer comes from structured data, not a website visit.
            </p>
            <p className="font-poppins text-lg leading-relaxed mb-12" style={{ color: '#6a5a48' }}>
              We&apos;re building that infrastructure now. For the clients who move first, the
              competitive window is open.{' '}
              <span className="font-semibold" style={{ color: '#0a0806' }}>For everyone else, it&apos;s closing.</span>
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

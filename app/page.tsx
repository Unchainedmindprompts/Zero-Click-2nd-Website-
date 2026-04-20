import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CounterAnimation from '@/components/CounterAnimation';

export const metadata: Metadata = {
  title: 'KodeCite.ai — Entity Graph Infrastructure for AI & Traditional Search',
  description:
    'Schema.org has been the language of the internet for 15 years. An entity graph is Schema used correctly — the foundation that makes your business visible in both AI discovery and traditional search. Built on infrastructure you own.',
  alternates: {
    canonical: 'https://www.kodecite.ai/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden hero-dark-bg hero-grid-bg"
        id="hero"
        style={{ paddingTop: '87px' }}
      >
        {/* Radial gradient — keep exactly as is */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(160,114,58,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Lines 1-4 — not SEO list */}
          <h1
            className="font-playfair text-[#0a0806] leading-[1.05] mb-4 text-center"
            style={{ fontSize: 'clamp(44px, 6.5vw, 88px)', opacity: 0, animation: 'heroFadeIn 0.7s ease 0.2s forwards' }}
          >
            <span style={{ display: 'block' }}>Your website is not SEO.</span>
            <span style={{ display: 'block' }}>Your content is not SEO.</span>
            <span style={{ display: 'block' }}>Your copywriter is not SEO.</span>
            <span style={{ display: 'block' }}>100 social media posts are not SEO.</span>
          </h1>

          {/* Gold rule divider */}
          <div style={{ width: '80px', height: '2px', background: '#a0723a', margin: '1.5rem auto', opacity: 0, animation: 'heroFadeIn 0.7s ease 0.35s forwards' }} />

          {/* The reveal */}
          <div style={{ opacity: 0, animation: 'heroFadeIn 0.7s ease 0.45s forwards' }}>
            <p
              className="font-playfair leading-[1.0] text-center mb-7"
              style={{ fontSize: 'clamp(68px, 10vw, 128px)', color: '#1a56db' }}
            >
              An entity graph is SEO.
            </p>
          </div>

          {/* Subhead */}
          <p
            className="font-poppins text-base md:text-xl max-w-[640px] mx-auto leading-relaxed text-center"
            style={{ color: '#6a5a48', opacity: 0, animation: 'heroFadeIn 0.7s ease 0.55s forwards' }}
          >
            Almost no business on the internet has one built correctly —
            regardless of what they&apos;re paying, or who built their site.
          </p>

          {/* CTA */}
          <div
            className="flex justify-center mt-10"
            style={{ opacity: 0, animation: 'heroFadeIn 0.7s ease 0.65s forwards' }}
          >
            <Link href="/contact" className="btn-gold font-poppins text-base inline-flex items-center justify-center gap-2" style={{ padding: '16px 32px' }}>
              Find Out If AI Can Read You →
            </Link>
          </div>
        </div>

        {/* Scroll indicator — keep exactly as is */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom, transparent, #a0723a)', animation: 'pulse-glow 2s ease-in-out infinite' }} />
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== LANGUAGE OF THE INTERNET ===== */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">THE LANGUAGE OF THE INTERNET</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-10 leading-[1.05]" style={{ color: '#0a0806' }}>
              In 2011, the four largest search engines on the planet agreed on something.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-6 text-left" style={{ color: '#6a5a48' }}>
              Google. Microsoft. Yahoo. Yandex. Four fierce competitors built a shared language — a structured vocabulary that lets machines understand what a business is, who runs it, what it offers, where it operates, and why it should be trusted.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <p className="font-playfair italic text-2xl md:text-3xl leading-relaxed mb-6 text-center" style={{ color: '#0a0806' }}>
              They called it Schema.org.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-8 text-left" style={{ color: '#6a5a48' }}>
              That was 15 years ago. Schema.org is still the language of the internet today. Every search engine reads it. Every AI crawler depends on it. Every LLM uses it to understand, verify, and decide which businesses to recommend.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <p className="font-poppins text-xl md:text-2xl font-semibold leading-relaxed text-center" style={{ color: '#0a0806' }}>
              And the overwhelming majority of businesses still don&apos;t use it correctly.<br />
              Not because it&apos;s complicated. Because nobody told them it mattered.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== WHAT CHANGED ===== */}
      <section className="py-24 md:py-32 px-4" style={{ backgroundColor: '#1c1814' }}>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5" style={{ color: '#c8945a' }}>WHAT CHANGED</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-10 leading-[1.05]" style={{ color: '#f8f5f0' }}>
              For 14 years, ignoring Schema was a missed opportunity.<br />
              Today it&apos;s the reason you don&apos;t exist in the answer.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(240,232,216,0.82)' }}>
              Traditional search engines were forgiving. Google crawled your site, inferred meaning from your content, filled in the gaps, and ranked you anyway. Ambiguity was tolerable because humans resolved it — they clicked your link and made their own judgment.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <p className="font-playfair text-4xl md:text-5xl text-center mb-8 leading-[1.0]" style={{ color: '#f8f5f0' }}>
              LLMs are not forgiving.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-10" style={{ color: 'rgba(240,232,216,0.82)' }}>
              They don&apos;t infer. They don&apos;t fill gaps. They synthesize, select, and recommend — based entirely on what they can structurally verify about your business. If the structured signals aren&apos;t there, they move to the next business that gave them something to work with.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <p className="font-poppins text-xl font-semibold text-center leading-relaxed" style={{ color: '#f8f5f0' }}>
              For the first time in 15 years, a correctly built entity graph isn&apos;t a best practice.<br />
              It&apos;s the price of entry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== CATEGORY LEADERS ===== */}
      <section id="the-gap" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">THIS ISN&apos;T A SMALL BUSINESS PROBLEM</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-10 leading-[1.05]" style={{ color: '#0a0806' }}>
              The businesses getting this wrong aren&apos;t just startups.<br />They&apos;re category leaders.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-10" style={{ color: '#6a5a48' }}>
              We&apos;ve audited the digital infrastructure of platforms serving thousands of professionals. Companies with national recognition. Marketing platforms trusted by the highest-producing agents and advisors in the country. Businesses paying tens of thousands of dollars annually for digital presence.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="rounded-2xl p-8 mb-10 text-left" style={{ backgroundColor: '#1c1814' }}>
              <p className="font-playfair text-2xl md:text-3xl mb-4 leading-snug" style={{ color: '#f8f5f0' }}>Zero llms.txt files.</p>
              <p className="font-playfair text-2xl md:text-3xl mb-4 leading-snug" style={{ color: '#f8f5f0' }}>Zero agent.json files.</p>
              <p className="font-playfair text-2xl md:text-3xl leading-snug" style={{ color: 'rgba(240,232,216,0.6)' }}>Auto-generated schema with missing fields and broken entity connections.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-8" style={{ color: '#6a5a48' }}>
              The gap isn&apos;t about budget. It&apos;s about awareness. Schema.org has existed for 15 years and the industry responsible for digital presence has largely ignored the one layer that actually tells machines who you are. They built beautiful brochures. They forgot to build the foundation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <blockquote className="px-8 py-6 rounded-r-xl text-left" style={{ borderLeft: '4px solid #a0723a', background: '#e8e0d0' }}>
              <p className="font-poppins text-lg font-semibold leading-relaxed" style={{ color: '#0a0806' }}>
                The window to get there first is open right now. It won&apos;t stay open forever.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== BOTH DIRECTIONS ===== */}
      <section id="both-directions" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f8f5f0' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">THE PART NOBODY TELLS YOU</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-6 leading-[1.05]">
              <span style={{ color: '#0a0806', display: 'block' }}>An entity graph doesn&apos;t make you visible to AI instead of Google.</span>
              <span style={{ color: '#a0723a', display: 'block' }}>It makes both work better. Simultaneously.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed" style={{ color: '#6a5a48' }}>
              Google has rewarded correctly structured Schema for 15 years. LLMs require it. The signals are the same. The foundation is the same. Build it once — compound in both traditional search and AI discovery. Forever.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              <div className="rounded-2xl p-8" style={{ background: '#e8e0d0', border: '1.5px solid rgba(160,114,58,0.25)' }}>
                <p className="eyebrow mb-4">TRADITIONAL SEARCH</p>
                <p className="font-poppins text-base leading-relaxed" style={{ color: '#6a5a48' }}>
                  Google has rewarded correct Schema for 15 years. Entity clarity, structured credentials, consistent NAP data, and verified service areas have always been foundational ranking signals. An entity graph makes all of them stronger.
                </p>
              </div>
              <div className="rounded-2xl p-8" style={{ background: '#1c1814', border: '1.5px solid rgba(160,114,58,0.25)' }}>
                <p className="eyebrow mb-4" style={{ color: '#c8945a' }}>LLM DISCOVERY</p>
                <p className="font-poppins text-base leading-relaxed" style={{ color: 'rgba(240,232,216,0.82)' }}>
                  LLMs don&apos;t infer. They read your structured identity and either recommend you or skip you. An entity graph gives them everything they need to cite your business with confidence — across ChatGPT, Perplexity, Google AI, and every AI interface being built right now.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <p className="font-poppins text-xl font-semibold text-center" style={{ color: '#0a0806' }}>
              You don&apos;t have to choose. You just have to build it correctly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== THE WINDOW ===== */}
      <section id="the-window" className="py-24 md:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#1c1814' }}>
        <div className="absolute top-0 left-0 right-0" style={{ height: '4px', background: 'linear-gradient(90deg, #3e1f08 0%, #7a5228 15%, #a0723a 30%, #c8945a 50%, #a0723a 70%, #7a5228 85%, #3e1f08 100%)' }} />
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5" style={{ color: '#c8945a' }}>THE WINDOW</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-10 leading-[1.05]" style={{ color: '#f8f5f0' }}>
              This is a 2–3 year window.<br />It&apos;s open right now.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(240,232,216,0.82)' }}>
              The businesses showing up in AI answers today aren&apos;t there because they outspent anyone. They&apos;re there because they built machine-readable identity before their competitors thought to.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <p className="font-poppins text-base md:text-lg leading-relaxed mb-10" style={{ color: 'rgba(240,232,216,0.82)' }}>
              That advantage compounds. Every month an entity graph exists, it accumulates more citation signals, more cross-platform verification, more AI crawler trust. This isn&apos;t pay-to-play. It&apos;s build-to-earn.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-poppins text-xl font-semibold text-center mb-12" style={{ color: '#f8f5f0' }}>
              In 2–3 years this will be table stakes. The businesses that own the space in their market today will be extraordinarily difficult to displace.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div className="text-center">
              <Link href="/contact" className="btn-gold-outline font-poppins font-semibold text-base inline-flex items-center gap-2 rounded-md" style={{ padding: '15px 36px' }}>
                Start the Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== NOT ROCKET SCIENCE ===== */}
      <section id="what-is-it" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">NOT ROCKET SCIENCE</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-6 leading-[1.05]" style={{ color: '#0a0806' }}>
              An entity graph is Schema.org used the way it was always intended.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#6a5a48' }}>
              Not a new technology. Not a proprietary system. The structured identity layer that connects every element of your business into a single, machine-readable truth — built on a 15-year-old standard that almost no one deploys correctly.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                'Who you are',
                'Who runs the business',
                'What services you offer',
                'Where you operate',
                'What credentials you hold',
                'Who verifies you',
                'How long you&apos;ve been doing this',
                'Why you should be trusted',
              ].map((item, i) => (
                <div key={i} style={{ borderLeft: '3px solid #a0723a', background: '#e8e0d0', padding: '0.75rem 1rem', borderRadius: '0 0.5rem 0.5rem 0' }}>
                  <p className="font-poppins text-sm font-medium" style={{ color: '#0a0806' }} dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <p className="font-poppins text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-6" style={{ color: '#6a5a48' }}>
              Every element connected. Every signal consistent. Every page reinforcing the same identity — so when an AI crawler reads your business, it doesn&apos;t find fragments. It finds a complete, verifiable entity it can cite with confidence.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className="font-poppins text-xl font-semibold text-center" style={{ color: '#0a0806' }}>
              That&apos;s what KodeCite builds. That&apos;s what almost no one else does.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== TWO PATHS ===== */}
      <section id="two-paths" className="py-24 md:py-32 px-4" style={{ backgroundColor: '#f2ede4' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">HOW WE WORK</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-6 leading-[1.05]" style={{ color: '#0a0806' }}>
              One methodology. Two ways to deploy it.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="font-poppins text-lg text-center max-w-xl mx-auto mb-14 leading-relaxed" style={{ color: '#6a5a48' }}>
              Same entity graph foundation. Same KodeCite Standard. Configured for your situation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* For businesses */}
              <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1.5px solid rgba(160,114,58,0.35)' }}>
                <p className="eyebrow mb-4">FOR BUSINESSES</p>
                <h3 className="font-playfair text-2xl mb-4 leading-tight" style={{ color: '#0a0806' }}>Custom build</h3>
                <p className="font-playfair mb-1" style={{ fontSize: '2.5rem', lineHeight: 1, color: '#a0723a' }}>$7,500–$12,000</p>
                <p className="font-poppins text-sm mb-8" style={{ color: '#6a5a48' }}>one-time · yours forever</p>
                <div className="space-y-3 mb-8">
                  {[
                    'Full entity graph from day one',
                    'Custom Next.js on your Vercel account',
                    'GitHub repo in your name',
                    'llms.txt + agent.json + robots.ts',
                    'Launch indexing at go-live',
                    'You own everything. No monthly rent.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#a0723a' }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-poppins text-sm leading-relaxed" style={{ color: '#6a5a48' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-gold-outline font-poppins font-semibold text-base inline-flex items-center gap-2 rounded-md w-full justify-center" style={{ padding: '14px 24px' }}>
                  Start the Conversation →
                </Link>
              </div>

              {/* For platforms */}
              <div className="rounded-2xl p-8" style={{ background: '#1c1814', border: '1.5px solid rgba(160,114,58,0.25)' }}>
                <p className="eyebrow mb-4" style={{ color: '#c8945a' }}>FOR PLATFORMS &amp; AGENCIES</p>
                <h3 className="font-playfair text-2xl mb-4 leading-tight" style={{ color: '#f8f5f0' }}>Wholesale partnership</h3>
                <p className="font-poppins text-base mb-8 leading-relaxed" style={{ color: 'rgba(240,232,216,0.7)' }}>
                  You serve professional service businesses at scale. Your clients have no entity graph underneath their digital presence. Let&apos;s change that.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'Templated deployment per industry vertical',
                    'Real estate, law, and financial advisory rule sets',
                    'Each client gets owned infrastructure',
                    'Schema validated before every delivery',
                    'Same methodology — configured for your client base',
                    'You serve clients. We build the foundation.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#a0723a' }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-poppins text-sm leading-relaxed" style={{ color: 'rgba(240,232,216,0.82)' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="font-poppins font-semibold text-base inline-flex items-center gap-2 pb-0.5"
                  style={{ color: '#c8945a', borderBottom: '1px solid rgba(200,148,90,0.4)' }}
                >
                  Let&apos;s Talk →
                </Link>
              </div>

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
              Every build ships with the complete entity graph stack. No exceptions. No upsells.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-4">
              {([
                'Custom entity graph — business, founder, services, credentials, and location. All connected through stable identity anchors every AI crawler can traverse.',
                'AI identity files (llms.txt + agent.json) deployed on every build — your machine-readable introduction to every LLM that crawls the web.',
                'Custom JSON-LD schema per page, per article — never copy-pasted site-wide, never conflicting with platform auto-schema.',
                'Sub-1s real-device load time on a modern iPhone — verified before go-live. Speed is a trust signal, not just UX.',
                'Launch indexing across GBP, Bing Places, Apple Business Connect, Yelp, and BBB — plus sitemap.xml submitted to Google Search Console at go-live.',
                'You own the GitHub repo and Vercel account outright — no platform lock-in, no monthly rent on your own digital identity.',
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

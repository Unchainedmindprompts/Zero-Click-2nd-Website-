import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CounterAnimation from '@/components/CounterAnimation';

export const metadata: Metadata = {
  title: 'Zero Click Strategies — AI Search Optimization & Digital Marketing',
  description:
    'Most businesses are invisible to AI. Zero Click Strategies builds the websites, content, and campaigns that make you the answer — in AI search, Google, and beyond.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zero Click Strategies',
  url: 'https://zeroclickstrategies.com',
  description: 'AI search optimization and digital marketing micro agency.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://zeroclickstrategies.com/blog?q={search_term_string}',
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

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#0F1E3C] hero-grid-bg"
        id="hero"
      >
        {/* Topographic lines overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4A94A" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#D4A94A" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGlow)" />
            {/* Topographic contour lines */}
            <path d="M -100 400 Q 200 200 500 400 T 1100 400" fill="none" stroke="#D4A94A" strokeWidth="0.8" opacity="0.3" />
            <path d="M -100 380 Q 200 180 500 380 T 1100 380" fill="none" stroke="#D4A94A" strokeWidth="0.6" opacity="0.2" />
            <path d="M -100 420 Q 200 220 500 420 T 1100 420" fill="none" stroke="#D4A94A" strokeWidth="0.6" opacity="0.2" />
            <path d="M -100 360 Q 200 160 500 360 T 1100 360" fill="none" stroke="#D4A94A" strokeWidth="0.5" opacity="0.15" />
            <path d="M -100 440 Q 200 240 500 440 T 1100 440" fill="none" stroke="#D4A94A" strokeWidth="0.5" opacity="0.15" />
            <path d="M -100 340 Q 200 140 500 340 T 1100 340" fill="none" stroke="#D4A94A" strokeWidth="0.4" opacity="0.1" />
            <path d="M -100 460 Q 200 260 500 460 T 1100 460" fill="none" stroke="#D4A94A" strokeWidth="0.4" opacity="0.1" />
            <path d="M -100 550 Q 300 350 600 550 T 1200 550" fill="none" stroke="#D4A94A" strokeWidth="0.5" opacity="0.12" />
            <path d="M -100 250 Q 300 50 600 250 T 1200 250" fill="none" stroke="#D4A94A" strokeWidth="0.5" opacity="0.12" />
          </svg>
        </div>

        {/* Animated content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <div
            className="reveal visible"
            style={{ animation: 'fadeIn 0.8s ease forwards' }}
          >
            <p className="eyebrow mb-6">AI SEARCH OPTIMIZATION</p>
          </div>
          <h1
            className="font-poppins font-bold text-[40px] md:text-[64px] text-white leading-tight mb-6"
            style={{ opacity: 0, animation: 'heroFadeIn 0.6s ease 0s forwards' }}
          >
            Most Businesses Are{' '}
            <span className="text-[#D4A94A]">Invisible</span>
            {' '}to AI.
          </h1>
          <p
            className="font-poppins font-normal text-base md:text-xl text-[#8A9BB5] max-w-[600px] mx-auto leading-relaxed"
            style={{ marginTop: '24px', opacity: 0, animation: 'heroFadeIn 0.6s ease 0.2s forwards' }}
          >
            We build the websites, content, and campaigns that make you the answer.
          </p>
          <div
            style={{ marginTop: '36px', opacity: 0, animation: 'heroFadeIn 0.6s ease 0.4s forwards' }}
          >
            <a
              href="#problem"
              className="btn-gold font-poppins font-bold inline-block rounded-md"
              style={{ padding: '16px 36px' }}
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-0.5 h-12 bg-gradient-to-b from-transparent to-[#D4A94A] animate-pulse" />
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== PROBLEM SECTION ===== */}
      <section id="problem" className="py-24 md:py-32 bg-[#0A1628] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">THE PROBLEM</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center mb-16 leading-tight">
              Search changed.<br />
              <span className="text-[#8A9BB5]">Most businesses didn&apos;t.</span>
            </h2>
          </ScrollReveal>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                stat: '60%+',
                text: 'of Google searches end without a click — Source: SparkToro',
                delay: 0,
              },
              {
                stat: 'AI',
                text: 'answers questions before anyone visits your site',
                delay: 150,
              },
              {
                stat: '0',
                text: 'traffic if you\'re not the answer — you\'re invisible',
                delay: 300,
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={item.delay}>
                <div className="text-center p-8 rounded-xl bg-[#162444] border border-white/5 hover:border-[#D4A94A]/20 transition-all duration-300">
                  <div className="font-poppins font-bold text-6xl md:text-7xl text-[#D4A94A] mb-4 leading-none">
                    {item.stat}
                  </div>
                  <p className="text-white font-poppins font-medium text-lg leading-snug">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#8A9BB5] text-lg md:text-xl leading-relaxed font-poppins">
                Zero click search means AI tools like ChatGPT, Google&apos;s AI Overviews, and Perplexity
                answer questions directly — without sending users to your website. If your business
                isn&apos;t structured for AI to read and cite, you don&apos;t exist in the new search landscape.
                Traditional SEO is no longer enough.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== SOLUTION SECTION ===== */}
      <section id="solution" className="py-24 md:py-32 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">THE SOLUTION</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white text-center mb-4 leading-tight">
              We Build Lead Generation Systems
            </h2>
            <p className="font-poppins font-semibold text-2xl md:text-3xl text-[#D4A94A] text-center mb-16">
              That Work in 2026
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Superior Website',
                desc: 'Fast, clean Next.js sites on Vercel. No WordPress bloat. No plugin conflicts. Built for speed and AI discoverability from day one.',
                delay: 0,
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Structured Content',
                desc: 'Schema markup and AEO-optimized articles that train Google and AI engines to cite your business as the answer.',
                delay: 150,
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                ),
                title: 'Paid Campaigns',
                desc: 'Facebook ads with dedicated landing pages that match the message exactly. Pixel, audiences, and copy built to convert.',
                delay: 300,
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={card.delay}>
                <div className="card-gold-border bg-[#162444] rounded-xl p-8 hover:bg-[#1a2d54] transition-all duration-300 group h-full">
                  <div className="text-[#D4A94A] mb-5 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#8A9BB5] leading-relaxed font-poppins text-sm">
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== PROOF SECTION ===== */}
      <section id="proof" className="py-24 md:py-32 bg-[#0A1628] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">REAL RESULTS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white text-center mb-4 leading-tight">
              We Proved It On Our Own
            </h2>
            <p className="font-poppins font-bold text-4xl md:text-5xl text-[#D4A94A] text-center mb-16">
              Businesses First
            </p>
          </ScrollReveal>

          {/* Case study cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                company: 'Luxe Window Works',
                category: 'Window Treatments',
                metrics: [
                  { value: '49', label: 'new pages indexed' },
                  { value: '48h', label: 'time to index' },
                  { value: '4', label: 'rich result types' },
                ],
                desc: '49 new pages indexed in 48 hours. Schema validated across 4 rich result types. 0 invalid items.',
                delay: 0,
              },
              {
                company: 'INW Basecamp',
                category: 'Home Theater & AV',
                metrics: [
                  { value: '1', label: 'day to launch' },
                  { value: '100%', label: 'schema valid' },
                  { value: '0', label: 'invalid items' },
                ],
                desc: 'Arizona landing page live, schema validated, and rich results firing same day as deployment.',
                delay: 150,
              },
            ].map((study, i) => (
              <ScrollReveal key={i} delay={study.delay}>
                <div className="bg-[#162444] rounded-xl overflow-hidden border border-white/5 hover:border-[#D4A94A]/30 transition-all duration-300 group h-full">
                  <div className="bg-gradient-to-br from-[#D4A94A]/10 to-transparent p-8 border-b border-white/5">
                    <span className="category-tag mb-3">{study.category}</span>
                    <h3 className="font-poppins font-bold text-2xl text-white mt-3">
                      {study.company}
                    </h3>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((m, j) => (
                        <div key={j} className="text-center">
                          <div className="font-poppins font-bold text-2xl text-[#D4A94A]">
                            {m.value}
                          </div>
                          <div className="text-[#8A9BB5] text-xs mt-1 font-poppins">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[#8A9BB5] text-sm leading-relaxed font-poppins">
                      {study.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Animated counter */}
          <ScrollReveal delay={200}>
            <div className="bg-[#162444] rounded-2xl p-12 md:p-16 text-center border border-[#D4A94A]/20">
              <CounterAnimation
                end={124}
                label="Pages indexed after technical SEO overhaul"
                duration={2500}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Link href="/case-studies" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
                See Full Case Studies
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className="py-24 md:py-32 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">PACKAGES</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white text-center mb-4">
              Simple Pricing.
            </h2>
            <p className="font-poppins font-bold text-4xl md:text-5xl text-[#D4A94A] text-center mb-16">
              Serious Results.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <ScrollReveal delay={0}>
              <div className="bg-[#162444] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="font-poppins font-bold text-xl text-white mb-2">Starter</h3>
                  <div className="font-poppins font-bold text-5xl text-white mb-1">
                    $2,500
                  </div>
                  <p className="text-[#8A9BB5] text-sm font-poppins">One-time investment</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'Next.js website on Vercel',
                    'Facebook pixel setup',
                    '3 custom audiences',
                    '3 ad creatives ready to launch',
                    '3 schema-optimized blog articles',
                    'Google Business Profile optimization',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#8A9BB5] font-poppins">
                      <svg className="w-4 h-4 text-[#D4A94A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-gold-outline text-sm font-semibold py-3 px-6 rounded-md text-center w-full block">
                  Get Started
                </Link>
              </div>
            </ScrollReveal>

            {/* Growth - Most Popular */}
            <ScrollReveal delay={150}>
              <div className="pricing-popular bg-[#162444] rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(212,169,74,0.2)] transition-all duration-300 relative flex flex-col h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#D4A94A] text-[#0F1E3C] text-xs font-bold px-4 py-1.5 rounded-full font-poppins uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6 mt-2">
                  <h3 className="font-poppins font-bold text-xl text-white mb-2">Growth</h3>
                  <div className="font-poppins font-bold text-5xl text-[#D4A94A] mb-1">
                    $4,500
                  </div>
                  <p className="text-[#8A9BB5] text-sm font-poppins">One-time investment</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'Everything in Starter',
                    '6 blog articles',
                    'Retargeting campaign setup',
                    'Dedicated conversion landing page',
                    '90 days of indexing monitoring',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-poppins">
                      <svg className="w-4 h-4 text-[#D4A94A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={feature === 'Everything in Starter' ? 'text-[#D4A94A] font-semibold' : 'text-[#8A9BB5]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-gold text-sm font-bold py-3 px-6 rounded-md text-center w-full block">
                  Get Started
                </Link>
              </div>
            </ScrollReveal>

            {/* Full Launch */}
            <ScrollReveal delay={300}>
              <div className="bg-[#162444] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="font-poppins font-bold text-xl text-white mb-2">Full Launch</h3>
                  <div className="font-poppins font-bold text-5xl text-white mb-1">
                    $7,500
                  </div>
                  <p className="text-[#8A9BB5] text-sm font-poppins">One-time investment</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    'Everything in Growth',
                    '90 days ad management',
                    'Monthly reporting dashboard',
                    'Lookalike audience build',
                    'Schema audit & implementation across entire site',
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-poppins">
                      <svg className="w-4 h-4 text-[#D4A94A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={feature === 'Everything in Growth' ? 'text-[#D4A94A] font-semibold' : 'text-[#8A9BB5]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-gold-outline text-sm font-semibold py-3 px-6 rounded-md text-center w-full block">
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center text-[#8A9BB5] mt-12 text-base md:text-lg font-poppins max-w-2xl mx-auto leading-relaxed">
              One closed real estate deal pays for the entire package. One new window treatment project does the same.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== BLOG PREVIEW SECTION ===== */}
      <section id="blog" className="py-24 md:py-32 bg-[#0A1628] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">INSIGHTS</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white text-center mb-16">
              The Zero Click Playbook
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'AEO & AI Search',
                title: 'What Is Zero Click Search and Why Your Business Is Invisible',
                excerpt:
                  'AI answers questions before users visit your site. If you\'re not structured for AI to read and cite, you\'re invisible to the fastest-growing search channel.',
                delay: 0,
              },
              {
                category: 'Website Performance',
                title: 'Why WordPress Sites Are Losing the AI Search War',
                excerpt:
                  'Bloated plugins, slow load times, and poor Core Web Vitals scores are pushing WordPress sites to the back of AI-generated answers. Here\'s what we use instead.',
                delay: 150,
              },
              {
                category: 'Case Studies',
                title: 'How We Indexed 49 New Pages in 48 Hours',
                excerpt:
                  'The complete breakdown of the technical SEO overhaul that transformed Luxe Window Works from invisible to cited across four rich result types.',
                delay: 300,
              },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={post.delay}>
                <article className="bg-[#162444] rounded-xl overflow-hidden border border-white/5 hover:border-[#D4A94A]/20 transition-all duration-300 group h-full flex flex-col">
                  {/* Card image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-[#0F1E3C] to-[#162444] flex items-center justify-center relative overflow-hidden">
                    <svg className="w-full h-full opacity-20" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="200" cy="100" r="80" stroke="#D4A94A" strokeWidth="0.5" />
                      <circle cx="200" cy="100" r="60" stroke="#D4A94A" strokeWidth="0.5" />
                      <circle cx="200" cy="100" r="40" stroke="#D4A94A" strokeWidth="0.5" />
                      <circle cx="200" cy="100" r="20" stroke="#D4A94A" strokeWidth="0.5" />
                      <line x1="0" y1="100" x2="400" y2="100" stroke="#D4A94A" strokeWidth="0.3" />
                      <line x1="200" y1="0" x2="200" y2="200" stroke="#D4A94A" strokeWidth="0.3" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#162444] to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="category-tag mb-4 self-start">{post.category}</span>
                    <h3 className="font-poppins font-bold text-lg text-white mb-3 leading-snug group-hover:text-[#D4A94A] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#8A9BB5] text-sm leading-relaxed font-poppins flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href="/blog"
                      className="mt-4 text-[#D4A94A] text-sm font-semibold font-poppins hover:text-[#E8C478] transition-colors inline-flex items-center gap-1 group/link"
                    >
                      Read More
                      <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ===== FINAL CTA SECTION ===== */}
      <section id="cta" className="py-24 md:py-36 bg-[#0F1E3C] px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A94A]/5 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Ready to Become{' '}
              <span className="text-[#D4A94A]">the Answer?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-[#8A9BB5] text-xl md:text-2xl font-poppins mb-10">
              Let&apos;s build your lead generation system.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Link href="/contact" className="btn-gold text-lg font-bold px-10 py-5 rounded-md inline-block">
              Start the Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

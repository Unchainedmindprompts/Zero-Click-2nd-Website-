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
                desc: 'Fast, clean Next.js sites on Vercel. No template platform bloat. No plugin conflicts. Built for speed and AI discoverability from day one.',
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
              Sites That Score.
            </h2>
            <p className="font-poppins font-bold text-4xl md:text-5xl text-[#D4A94A] text-center mb-6">
              Clients Win.
            </p>
            <p className="font-poppins text-lg text-[#8A9BB5] text-center mb-16">
              Custom-coded. No page builders. No plugins. Deployed on enterprise infrastructure.
            </p>
          </ScrollReveal>

          {/* Case study cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                desc: 'Desktop PageSpeed scores: 100 Performance, 100 Accessibility, 100 Best Practices, 91 SEO.',
                delay: 0,
              },
              {
                company: 'INW Basecamp',
                category: 'Home Theater & AV',
                metrics: [
                  { value: '96', label: 'Performance' },
                  { value: '96', label: 'Accessibility' },
                  { value: '100', label: 'Best Practices' },
                  { value: '100', label: 'SEO' },
                ],
                desc: 'Desktop PageSpeed scores: 96 Performance, 96 Accessibility, 100 Best Practices, 100 SEO.',
                delay: 150,
              },
              {
                company: 'Luxe Window Works',
                category: 'Window Treatments',
                metrics: [
                  { value: '93', label: 'Performance' },
                  { value: '96', label: 'Accessibility' },
                  { value: '100', label: 'Best Practices' },
                  { value: '100', label: 'SEO' },
                ],
                desc: 'Desktop PageSpeed scores: 93 Performance, 96 Accessibility, 100 Best Practices, 100 SEO.',
                delay: 300,
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
                    <div className="grid grid-cols-2 gap-4 mb-6">
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
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 mt-10">
              <div className="text-center border border-white/5 rounded-xl py-7 px-6 bg-[#162444]/50">
                <div className="font-poppins font-bold text-4xl md:text-5xl text-[#D4A94A] mb-2">93–100</div>
                <div className="font-poppins text-white font-semibold text-base mb-1">Desktop PageSpeed across all sites</div>
                <div className="font-poppins text-[#8A9BB5] text-sm">Performance · Accessibility · Best Practices · SEO</div>
              </div>
              <div className="text-center border border-white/5 rounded-xl py-7 px-6 bg-[#162444]/50">
                <div className="font-poppins font-bold text-4xl md:text-5xl text-[#D4A94A] mb-2">66% better</div>
                <div className="font-poppins text-white font-semibold text-base mb-1">Mobile scores vs. the typical competitor</div>
                <div className="font-poppins text-[#8A9BB5] text-sm">Compared to WordPress, Wix, and Squarespace sites</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Animated counter */}
          <ScrollReveal delay={200}>
            <div className="bg-[#162444] rounded-2xl p-12 md:p-16 text-center border border-[#D4A94A]/20">
              <CounterAnimation
                end={124}
                label="Invalid schema items across all sites"
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
                title: 'How We Built Sites That Score 93–100 on PageSpeed',
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

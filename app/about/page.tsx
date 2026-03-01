import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About — Built by Someone Who Did It On Their Own Businesses First',
  description:
    '20 years of entrepreneurship, from window treatments to home theater to discovering AEO. Zero Click Strategies was built on businesses that proved the methodology works.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zeroclickstrategies.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://zeroclickstrategies.com/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0A1628] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="eyebrow mb-4">ABOUT</p>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-4xl">
            Built by Someone Who Did It{' '}
            <span className="text-[#D4A94A]">On Their Own Businesses First</span>
          </h1>
          <p className="text-[#8A9BB5] text-xl font-poppins max-w-3xl leading-relaxed">
            Most agencies are still guessing at AI search. After 1,000+ hours researching AEO, GEO, and structured content strategy, I developed a methodology — not a hunch. Structured content is the real estate of the AI economy. How you deploy it, with lightning-fast websites, schema markup, and coordinated social signals, determines whether AI agents find you or your competitor.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Story */}
      <section className="py-24 md:py-32 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Profile photo */}
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/5] bg-[#162444] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/profile-photo.png"
                    alt="Profile photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Location badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0A1628]/90 backdrop-blur-sm rounded-xl p-4 border border-[#D4A94A]/20">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#D4A94A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-poppins font-semibold text-white text-sm">Post Falls, Idaho</div>
                      <div className="text-[#8A9BB5] text-xs font-poppins">Serving businesses nationwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Story text */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div>
                  <h2 className="font-poppins font-bold text-3xl text-white mb-4">
                    30 Years of Sales. 23 Years of Building. Here&apos;s What Actually Works.
                  </h2>
                  <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                    With 30 years of sales experience and 23 years as an entrepreneur, you develop a sharp eye for what actually moves the needle — and zero patience for what doesn&apos;t.
                  </p>
                </div>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  Then AI search happened. And for the first time, the rules of digital marketing started
                  making sense — if you understood them. The businesses that structured their content and
                  websites correctly were getting cited by AI. The rest were becoming invisible.
                </p>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  Rather than theorize about it, the approach was to test it — on Luxe Window Works and
                  INW Basecamp, two real businesses with real customers and real revenue on the line.
                  The results were immediate and measurable: desktop PageSpeed scores of 93–100, perfect SEO scores across the board, and businesses that AI systems could finally find, read, and cite.
                </p>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  Zero Click Strategies was built from that proof. Not from a marketing playbook, but
                  from businesses that had to generate leads or close. That&apos;s the difference.
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

      {/* The Methodology */}
      <section className="py-24 md:py-32 bg-[#0A1628] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">THE METHODOLOGY</p>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white text-center mb-16 leading-tight">
              Why We Do Things <span className="text-[#D4A94A]">Differently</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Why Vercel Over WordPress',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                points: [
                  'WordPress averages 3–5 second load times. Vercel averages under 1 second.',
                  'Plugin dependencies create conflicts that break Core Web Vitals.',
                  'AI crawlers prioritize fast, clean HTML — not plugin-rendered content.',
                  'Vercel\'s edge network delivers content globally without additional CDN costs.',
                ],
                delay: 0,
              },
              {
                title: 'Why Schema Over Plugins',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                points: [
                  'SEO plugins generate generic, often invalid schema that AI ignores.',
                  'Hand-coded JSON-LD is precise, validated, and entity-specific.',
                  'Custom schema tells AI exactly what you do, where, and for whom.',
                  'Google\'s Rich Results Test confirms valid structured data — we verify everything.',
                ],
                delay: 150,
              },
              {
                title: 'Why AEO Over Traditional SEO',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                points: [
                  'Traditional SEO targets keywords. AEO targets questions AI is asked.',
                  'AI Overviews pull from structured, authoritative, entity-clear content.',
                  'FAQ schema, How-To schema, and Article schema trigger rich results.',
                  'The goal isn\'t to rank #1 — it\'s to be the source AI cites.',
                ],
                delay: 300,
              },
            ].map((pillar) => (
              <ScrollReveal key={pillar.title} delay={pillar.delay}>
                <div className="card-gold-border bg-[#162444] rounded-xl p-8 h-full hover:bg-[#1a2d54] transition-all duration-300 group">
                  <div className="text-[#D4A94A] mb-5">{pillar.icon}</div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-5">{pillar.title}</h3>
                  <ul className="space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-[#8A9BB5] font-poppins">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A94A] flex-shrink-0 mt-1.5" />
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

      {/* Values / Quick stats */}
      <section className="py-24 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '30+', label: 'Years of sales experience' },
              { value: '3', label: 'Businesses proven first' },
              { value: '1,000+', label: 'Hours of AEO & GEO research' },
              { value: '23', label: 'Years as an entrepreneur' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 bg-[#162444] rounded-xl border border-white/5">
                  <div className="font-poppins font-bold text-4xl text-[#D4A94A] mb-2">{stat.value}</div>
                  <div className="text-[#8A9BB5] text-sm font-poppins">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#8A9BB5] text-lg font-poppins leading-relaxed mb-8">
                Based in Post Falls, Idaho — serving businesses across the United States. Every client
                gets direct access, honest communication, and results that can be measured in days,
                not months.
              </p>
              <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
                Let&apos;s Build Something Together
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

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
      <section className="pt-36 pb-20 bg-[#05050f] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#D4A94A]/5 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="eyebrow mb-4">ABOUT</p>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-4xl">
            Built by Someone Who Did It{' '}
            <span className="text-[#D4A94A]">On Their Own Businesses First</span>
          </h1>
          <p className="text-[#8A9BB5] text-xl font-poppins max-w-3xl leading-relaxed">
            No theory. No agency fluff. Just a 20-year entrepreneur who discovered how AI search
            works and proved it could generate leads — before offering it to anyone else.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Story */}
      <section className="py-24 md:py-32 bg-[#080810] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/5] bg-[#0d0d1a] rounded-2xl overflow-hidden border border-white/10 relative">
                  <Image
                    src="/about-photo.png"
                    alt="Zero Click Strategies founder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {/* Name badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#07070f]/90 backdrop-blur-sm rounded-xl p-4 border border-[#D4A94A]/20">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-poppins font-semibold text-white text-sm">Mark Abplanalp</div>
                      <div className="text-[#8A9BB5] text-xs font-poppins">Owner, Zero Click Strategies</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Story text */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <h2 className="font-playfair font-bold text-3xl text-white mb-4">
                  30 Years of Sales. 23 Years of Building.{' '}
                  <span className="text-[#D4A94A]">I Was My Own First Client.</span>
                </h2>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  When my wife and I relocated to North Idaho, I did what you&apos;ve probably done:
                  I looked for a way to build visibility in a new market. I sat in the same meetings
                  you&apos;ve likely sat in, hearing the same{' '}
                  <span className="text-white font-medium">&ldquo;Yesterday&apos;s Playbook&rdquo;</span>
                  —spend more, wait longer, chase the blue link.
                </p>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  But while my rankings looked good on paper, the phones weren&apos;t ringing. I felt
                  that{' '}
                  <span className="text-white font-medium">&ldquo;quiet panic&rdquo;</span> of knowing
                  the game was shifting, even if the &ldquo;experts&rdquo; in the room couldn&apos;t
                  explain why.
                </p>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  I didn&apos;t start Zero Click Strategies to build an agency. I started it because I
                  was tired of writing checks for &ldquo;visibility&rdquo; that didn&apos;t turn into
                  revenue.
                </p>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  I spent a year digging into the data and realized we are in the middle of{' '}
                  <span className="text-white font-medium">&ldquo;The Great Decoupling.&rdquo;</span>{' '}
                  Search volume is higher than ever, but nearly 60% of those searches now end without
                  a single click to a website. AI and wearables — like the Oakley Meta glasses — are
                  giving your customers answers before they ever see your link.
                </p>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  I built the Authority Engine because my own family&apos;s revenue depended on it. I
                  needed to ensure that when a homebuyer asked their glasses for a &ldquo;realtor in
                  Coeur d&apos;Alene,&rdquo; my wife&apos;s name was the one they heard in their ear.
                </p>

                <div className="border-l-4 border-[#D4A94A] bg-[#0d0d1a] rounded-r-xl px-6 py-5">
                  <p className="text-white/90 leading-relaxed font-poppins text-sm md:text-base">
                    Here is what I learned: When an AI cites you, it&apos;s a{' '}
                    <span className="text-[#D4A94A] font-semibold">&ldquo;warm referral&rdquo;</span>{' '}
                    from the machine. These buyers arrive pre-vetted — they spend 40% more time on
                    your site and convert at a rate 5x higher than traditional search.
                  </p>
                </div>

                <p className="text-[#8A9BB5] leading-relaxed font-poppins">
                  I&apos;m not a computer programmer. I&apos;m a business owner who found a way to
                  stop the bleeding. If you&apos;re feeling the{' '}
                  <span className="text-white font-medium">&ldquo;quiet panic&rdquo;</span> of
                  disappearing clicks, I get it. I built this stack to reclaim the{' '}
                  <span className="text-white font-medium">&ldquo;Answer Real Estate&rdquo;</span> for
                  my businesses — and I&apos;m here to help you do the same for yours.
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
      <section className="py-24 md:py-32 bg-[#05050f] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">THE METHODOLOGY</p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white text-center mb-16 leading-tight">
              Why We Do Things <span className="text-[#D4A94A]">Differently</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Why Next.js Over WordPress',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                points: [
                  'WordPress, Wix, and Squarespace sites average 3–5 second load times. Our Next.js sites average under 1 second.',
                  'Plugin dependencies create conflicts that break Core Web Vitals.',
                  'AI crawlers prioritize fast, clean HTML — not plugin-rendered content.',
                  'Our edge network delivers content globally without additional CDN costs.',
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
                  "Google's Rich Results Test confirms valid structured data — we verify everything.",
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
                  "The goal isn't to rank #1 — it's to be the source AI cites.",
                ],
                delay: 300,
              },
            ].map((pillar) => (
              <ScrollReveal key={pillar.title} delay={pillar.delay}>
                <div className="card-gold-border bg-[#0d0d1a] rounded-xl p-8 h-full hover:bg-[#111122] transition-all duration-300 border border-white/5 hover:border-[#D4A94A]/25">
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

      {/* Stats + CTA */}
      <section className="py-24 bg-[#080810] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '20+', label: 'Years in business' },
              { value: '3', label: 'Businesses proven first' },
              { value: '124', label: 'Pages indexed post-launch' },
              { value: '0', label: 'Invalid schema items ever' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 bg-[#0d0d1a] rounded-xl border border-white/5 hover:border-[#D4A94A]/20 transition-all duration-300">
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

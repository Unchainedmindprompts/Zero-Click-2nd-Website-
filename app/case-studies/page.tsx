import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Case Studies — Real Results from AI Search Optimization',
  description:
    'See real results: 49 pages indexed in 48 hours for Luxe Window Works, same-day schema validation for INW Basecamp Arizona. Zero Click Strategies proves the methodology first.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zeroclickstrategies.com' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://zeroclickstrategies.com/case-studies' },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0A1628] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">CASE STUDIES</p>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            We Proved It{' '}
            <span className="text-[#D4A94A]">On Our Own Businesses</span>
          </h1>
          <p className="text-[#8A9BB5] text-xl font-poppins max-w-3xl mx-auto leading-relaxed">
            Before selling a methodology, we tested it. These are the real results from businesses we built and operated — the same systems we now deploy for clients.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Case Study 1: Luxe Window Works */}
      <section id="luxe" className="py-24 md:py-32 bg-[#0F1E3C] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="category-tag">Window Treatments</span>
              <span className="category-tag">Technical SEO</span>
              <span className="category-tag">Schema Markup</span>
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              Luxe Window Works
            </h2>
            <p className="text-[#8A9BB5] text-xl font-poppins max-w-3xl leading-relaxed mb-12">
              A complete technical SEO overhaul that transformed a slow, invisible WordPress site into
              a fast, schema-validated Next.js powerhouse — indexed in under 48 hours.
            </p>
          </ScrollReveal>

          {/* Big metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '93-100', label: 'Desktop PageSpeed score', sub: 'all categories' },
              { value: '100', label: 'SEO score', sub: 'all three sites' },
              { value: '0', label: 'Invalid schema items', sub: 'across all pages' },
              { value: '66%', label: 'Better mobile performance', sub: 'than average WordPress site' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#162444] rounded-xl p-6 text-center border border-[#D4A94A]/20 hover:border-[#D4A94A]/40 transition-all duration-300">
                  <div className="font-poppins font-bold text-4xl md:text-5xl text-[#D4A94A] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-poppins font-semibold text-white text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[#8A9BB5] text-xs font-poppins">
                    {stat.sub}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Before/After indexed pages chart */}
          <ScrollReveal delay={200}>
            <div className="bg-[#162444] rounded-2xl p-8 md:p-12 mb-16 border border-white/5">
              <h3 className="font-poppins font-bold text-2xl text-white mb-8">
                Pages Indexed — Before & After
              </h3>
              <div className="flex items-end gap-8 md:gap-16">
                {/* Before bar */}
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="text-[#8A9BB5] font-poppins font-bold text-2xl">3</div>
                  <div className="w-full relative" style={{ height: '160px' }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-[#8A9BB5]/20 rounded-t-lg border border-[#8A9BB5]/30 flex items-start justify-center pt-3"
                      style={{ height: '12%' }}
                    >
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#8A9BB5] text-sm font-poppins font-semibold">BEFORE</div>
                    <div className="text-[#8A9BB5] text-xs font-poppins">WordPress site</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 pb-12">
                  <svg className="w-8 h-8 text-[#D4A94A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* After bar */}
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="text-[#D4A94A] font-poppins font-bold text-2xl">52</div>
                  <div className="w-full relative" style={{ height: '160px' }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 rounded-t-lg"
                      style={{
                        height: '100%',
                        background: 'linear-gradient(to top, #D4A94A33, #D4A94A66)',
                        border: '1px solid #D4A94A',
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-[#D4A94A] text-sm font-poppins font-semibold">AFTER</div>
                    <div className="text-[#8A9BB5] text-xs font-poppins">Next.js + Schema (48hrs)</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Schema validation results */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-[#162444] rounded-xl p-8 border border-white/5">
                <h3 className="font-poppins font-bold text-xl text-white mb-6">
                  Schema Rich Results Validated
                </h3>
                <div className="space-y-4">
                  {[
                    { type: 'LocalBusiness', status: 'Valid', count: '1 entity' },
                    { type: 'Product + Offer', status: 'Valid', count: '12 pages' },
                    { type: 'BreadcrumbList', status: 'Valid', count: '49 pages' },
                    { type: 'FAQPage', status: 'Valid', count: '8 pages' },
                  ].map((item) => (
                    <div key={item.type} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <div>
                        <div className="font-poppins font-semibold text-white text-sm">{item.type}</div>
                        <div className="text-[#8A9BB5] text-xs font-poppins">{item.count}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-green-400 text-sm font-poppins font-semibold">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[#8A9BB5] font-poppins text-sm">Total Invalid Items</span>
                  <span className="text-[#D4A94A] font-poppins font-bold text-2xl">0</span>
                </div>
              </div>

              <div className="bg-[#162444] rounded-xl p-8 border border-white/5">
                <h3 className="font-poppins font-bold text-xl text-white mb-6">
                  What We Did
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', action: 'Migrated from WordPress to Next.js App Router' },
                    { step: '2', action: 'Built 49 service and location pages with unique content' },
                    { step: '3', action: 'Implemented JSON-LD schema on every page type' },
                    { step: '4', action: 'Submitted XML sitemap to Google Search Console' },
                    { step: '5', action: 'Set up Index Now API for instant indexing signals' },
                    { step: '6', action: 'Validated all rich results in Google Rich Results Test' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#D4A94A]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#D4A94A] text-xs font-bold font-poppins">{item.step}</span>
                      </div>
                      <p className="text-[#8A9BB5] text-sm font-poppins leading-relaxed">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Case Study 2: INW Basecamp */}
      <section id="inw" className="py-24 md:py-32 bg-[#0A1628] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="category-tag">Real Estate & Relocation</span>
              <span className="category-tag">Landing Page</span>
              <span className="category-tag">Facebook Ads</span>
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              INW Basecamp — Arizona Market
            </h2>
            <p className="text-[#8A9BB5] text-xl font-poppins max-w-3xl leading-relaxed mb-12">
              A new market expansion campaign that went from concept to live landing page, validated
              schema, and active Facebook campaigns in a single day.
            </p>
          </ScrollReveal>

          {/* Big metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '1', label: 'Day to full launch', sub: 'concept to live' },
              { value: '100%', label: 'Schema validation', sub: 'zero errors' },
              { value: 'Same', label: 'Day rich results', sub: 'firing on launch day' },
              { value: '3', label: 'Ad campaigns live', sub: 'at launch' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#162444] rounded-xl p-6 text-center border border-[#D4A94A]/20 hover:border-[#D4A94A]/40 transition-all duration-300">
                  <div className="font-poppins font-bold text-4xl md:text-5xl text-[#D4A94A] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-poppins font-semibold text-white text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[#8A9BB5] text-xs font-poppins">
                    {stat.sub}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Campaign breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal delay={0}>
              <div className="bg-[#162444] rounded-xl p-8 border border-white/5 h-full">
                <h3 className="font-poppins font-bold text-xl text-white mb-6">
                  The Launch System
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      phase: 'Phase 1 — Morning',
                      title: 'Landing Page Build',
                      desc: 'Next.js landing page built with Arizona-specific copy, imagery, and LocalBusiness schema targeting the Phoenix/Scottsdale market.',
                    },
                    {
                      phase: 'Phase 2 — Afternoon',
                      title: 'Schema Validation',
                      desc: 'JSON-LD implemented and validated through Google Rich Results Test. All rich result types returned valid with zero warnings.',
                    },
                    {
                      phase: 'Phase 3 — Evening',
                      title: 'Facebook Campaigns Live',
                      desc: 'Pixel installed, custom audiences built, three campaigns launched targeting homeowners in target zip codes.',
                    },
                  ].map((phase) => (
                    <div key={phase.phase} className="border-l-2 border-[#D4A94A]/30 pl-4">
                      <div className="text-[#D4A94A] text-xs font-poppins font-semibold uppercase tracking-wider mb-1">
                        {phase.phase}
                      </div>
                      <div className="font-poppins font-semibold text-white text-sm mb-2">
                        {phase.title}
                      </div>
                      <div className="text-[#8A9BB5] text-xs font-poppins leading-relaxed">
                        {phase.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-6">
                <div className="bg-[#162444] rounded-xl p-8 border border-[#D4A94A]/20">
                  <h3 className="font-poppins font-bold text-lg text-white mb-4">
                    Schema Validation Results
                  </h3>
                  <div className="space-y-3">
                    {[
                      { type: 'LocalBusiness', result: 'Valid — 0 errors, 0 warnings' },
                      { type: 'BreadcrumbList', result: 'Valid — 0 errors, 0 warnings' },
                      { type: 'Service', result: 'Valid — 0 errors, 0 warnings' },
                    ].map((item) => (
                      <div key={item.type} className="flex items-center justify-between">
                        <span className="text-white font-poppins text-sm">{item.type}</span>
                        <span className="text-green-400 text-xs font-poppins font-semibold">{item.result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#162444] rounded-xl p-8 border border-white/5">
                  <h3 className="font-poppins font-bold text-lg text-white mb-4">
                    Ad Campaign Structure
                  </h3>
                  <div className="space-y-3">
                    {[
                      { campaign: 'Awareness', target: 'Homeowners, HHI $100k+, AZ' },
                      { campaign: 'Consideration', target: 'Home theater interest, AZ' },
                      { campaign: 'Retargeting', target: 'Landing page visitors 30-day' },
                    ].map((item) => (
                      <div key={item.campaign}>
                        <div className="font-poppins font-semibold text-white text-sm">{item.campaign}</div>
                        <div className="text-[#8A9BB5] text-xs font-poppins">{item.target}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24 bg-[#0F1E3C] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
              Your Business Could Be <span className="text-[#D4A94A]">Next</span>
            </h2>
            <p className="text-[#8A9BB5] text-xl font-poppins mb-10 leading-relaxed max-w-2xl mx-auto">
              The same approach that builds 93–100 desktop scores and gets businesses cited by AI — available for your business right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md">
                Start the Conversation
              </Link>
              <Link href="/services" className="btn-gold-outline text-base font-semibold px-8 py-4 rounded-md">
                See Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

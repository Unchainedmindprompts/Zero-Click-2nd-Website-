import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import ProductionProof from '@/components/proof/ProductionProof';
import ProofWall from '@/components/proof/ProofWall';
import SecondaryPageShell from '@/components/SecondaryPageShell';

export const metadata: Metadata = {
  title: 'Case studies — What the work made possible',
  description:
    'Inspect the documented Luxe consultation-request test, dated discovery evidence and earlier website launches. What worked, what was measured and what it does not prove.',
  alternates: { canonical: 'https://www.kodecite.ai/case-studies' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.kodecite.ai/case-studies' },
  ],
};

export default function CaseStudiesPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#101b1a] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-50 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">CASE STUDIES</p>
          <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            The work.{' '}
            <span className="text-[#c8eea0]">The evidence. The limits.</span>
          </h1>
          <p className="text-[#b1c0ae] text-xl font-poppins max-w-3xl mx-auto leading-relaxed">
            A useful website should help a real customer move forward. The Luxe case follows that idea from clearer business information to a consultation request an outside assistant could submit. Explore the recorded tests and earlier launch work below.
          </p>
          <div className="mt-10">
            <Link href="/blog/from-recommended-to-actionable-luxe-window-works" className="d-btn d-btn-primary text-base font-bold px-8 py-4 rounded-md inline-block">
              Read the Luxe agent case study
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <ProductionProof />

      {/* Case Study 1: Luxe Window Works */}
      <section id="luxe" className="py-24 md:py-32 bg-[#101b1a] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="category-tag">Window Treatments</span>
              <span className="category-tag">Business identity</span>
              <span className="category-tag">Consultation request</span>
            </div>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              Luxe Window Works
            </h2>
            <p className="text-[#b1c0ae] text-xl font-poppins max-w-3xl leading-relaxed mb-12">
              The first chapter was a client-owned website and an indexing improvement. The later production test added a protected consultation request. These are different results: publishing clearer information helped discovery, while an explicit action connection handled the request.
            </p>
          </ScrollReveal>

          {/* Big metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '93-100', label: 'Desktop PageSpeed score', sub: 'all categories' },
              { value: '100', label: 'SEO score', sub: 'all three sites' },
              { value: '0', label: 'Invalid schema items', sub: 'across all pages' },
              { value: 'Tested', label: 'Consultation request', sub: 'recorded authorized test' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#172422] rounded-xl p-6 text-center border border-[#c8eea0]/20 hover:border-[#c8eea0]/40 transition-all duration-300">
                  <div className="font-poppins font-bold text-4xl md:text-5xl text-[#c8eea0] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-poppins font-semibold text-white text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[#b1c0ae] text-xs font-poppins">
                    {stat.sub}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Before/After indexed pages chart */}
          <ScrollReveal delay={200}>
            <div className="bg-[#172422] rounded-2xl p-8 md:p-12 mb-16 border border-white/5">
              <h3 className="font-poppins font-bold text-2xl text-white mb-8">
                Reported indexing change at the original launch
              </h3>
              <div className="flex items-end gap-8 md:gap-16">
                {/* Before bar */}
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="text-[#b1c0ae] font-poppins font-bold text-2xl">75</div>
                  <div className="w-full relative" style={{ height: '160px' }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-[#b1c0ae]/20 rounded-t-lg border border-[#b1c0ae]/30 flex items-start justify-center pt-3"
                      style={{ height: '60.5%' }}
                    >
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#b1c0ae] text-sm font-poppins font-semibold">BEFORE</div>
                    <div className="text-[#b1c0ae] text-xs font-poppins">WordPress site</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 pb-12">
                  <svg className="w-8 h-8 text-[#c8eea0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* After bar */}
                <div className="flex-1 flex flex-col items-center gap-3">
                  <div className="text-[#c8eea0] font-poppins font-bold text-2xl">124</div>
                  <div className="w-full relative" style={{ height: '160px' }}>
                    <div
                      className="absolute bottom-0 left-0 right-0 rounded-t-lg"
                      style={{
                        height: '100%',
                        background: 'linear-gradient(to top, #c8eea033, #c8eea066)',
                        border: '1px solid #c8eea0',
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-[#c8eea0] text-sm font-poppins font-semibold">AFTER</div>
                    <div className="text-[#b1c0ae] text-xs font-poppins">After 48 hours (original report)</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Schema validation results */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-[#172422] rounded-xl p-8 border border-white/5">
                <h3 className="font-poppins font-bold text-xl text-white mb-6">
                  Structured data reported at the original launch
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
                        <div className="text-[#b1c0ae] text-xs font-poppins">{item.count}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-green-400 text-sm font-poppins font-semibold">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[#b1c0ae] font-poppins text-sm">Total Invalid Items</span>
                  <span className="text-[#c8eea0] font-poppins font-bold text-2xl">0</span>
                </div>
              </div>

              <div className="bg-[#172422] rounded-xl p-8 border border-white/5">
                <h3 className="font-poppins font-bold text-xl text-white mb-6">
                  What We Did
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', action: 'Migrated from WordPress to Next.js App Router' },
                    { step: '2', action: 'Built 49 service and location pages with unique content' },
                    { step: '3', action: 'Implemented JSON-LD schema on every page type' },
                    { step: '4', action: 'Submitted XML sitemap to Google Search Console' },
                    { step: '5', action: 'Set up IndexNow to notify participating search engines of changes' },
                    { step: '6', action: 'Checked structured data and eligible rich-result types' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#c8eea0]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#c8eea0] text-xs font-bold font-poppins">{item.step}</span>
                      </div>
                      <p className="text-[#b1c0ae] text-sm font-poppins leading-relaxed">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      <section className="page-section"><div style={{ maxWidth: 1000, margin: "0 auto" }}><p style={{ color: "var(--d-fg-dim)", lineHeight: 1.8 }}>The performance, indexing and schema figures above are reported in the original launch record. They are historical observations, not current measurements or proof that a particular change caused an AI recommendation. Schema validity does not guarantee a search feature.</p><Link href="/blog/how-we-indexed-49-pages-48-hours" className="d-btn d-btn-ghost mt-6">Read the original indexing case →</Link></div></section>

      <ProofWall />

      {/* Case Study 2: INW Basecamp */}
      <section id="inw" className="py-24 md:py-32 bg-[#101b1a] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="category-tag">Real Estate & Relocation</span>
              <span className="category-tag">Landing Page</span>
              <span className="category-tag">Facebook Ads</span>
            </div>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
              INW Basecamp — Arizona Market
            </h2>
            <p className="text-[#b1c0ae] text-xl font-poppins max-w-3xl leading-relaxed mb-12">
              An earlier real-estate and relocation project: a market-specific landing page, structured information and a paid distribution launch. It shows the value of publishing a clear offer and a usable inquiry path; it is not evidence of a connected agent action.
            </p>
          </ScrollReveal>

          {/* Big metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '1', label: 'Day to full launch', sub: 'concept to live' },
              { value: '100%', label: 'Schema validation', sub: 'zero errors' },
              { value: 'Checked', label: 'Structured data', sub: 'reported at launch' },
              { value: '3', label: 'Ad campaigns live', sub: 'at launch' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#172422] rounded-xl p-6 text-center border border-[#c8eea0]/20 hover:border-[#c8eea0]/40 transition-all duration-300">
                  <div className="font-poppins font-bold text-4xl md:text-5xl text-[#c8eea0] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-poppins font-semibold text-white text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[#b1c0ae] text-xs font-poppins">
                    {stat.sub}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Campaign breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal delay={0}>
              <div className="bg-[#172422] rounded-xl p-8 border border-white/5 h-full">
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
                      desc: 'JSON-LD published alongside the visible content and checked at launch. Validation describes the markup, not eligibility for a particular Google feature.',
                    },
                    {
                      phase: 'Phase 3 — Evening',
                      title: 'Facebook Campaigns Live',
                      desc: 'Tracking and the original campaign configuration were prepared as part of the recorded launch. This is historical project work, not the current Kodecite offer.',
                    },
                  ].map((phase) => (
                    <div key={phase.phase} className="border-l-2 border-[#c8eea0]/30 pl-4">
                      <div className="text-[#c8eea0] text-xs font-poppins font-semibold uppercase tracking-wider mb-1">
                        {phase.phase}
                      </div>
                      <div className="font-poppins font-semibold text-white text-sm mb-2">
                        {phase.title}
                      </div>
                      <div className="text-[#b1c0ae] text-xs font-poppins leading-relaxed">
                        {phase.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-6">
                <div className="bg-[#172422] rounded-xl p-8 border border-[#c8eea0]/20">
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

                <div className="bg-[#172422] rounded-xl p-8 border border-white/5">
                  <h3 className="font-poppins font-bold text-lg text-white mb-4">
                    The customer journey behind the launch
                  </h3>
                  <div className="space-y-3">
                    {[
                      { campaign: 'Awareness', target: 'Introduce the Northern Idaho relocation offer' },
                      { campaign: 'Consideration', target: 'Explain the market and relocation fit' },
                      { campaign: 'Follow-up path', target: 'Give interested visitors a clear way to enquire' },
                    ].map((item) => (
                      <div key={item.campaign}>
                        <div className="font-poppins font-semibold text-white text-sm">{item.campaign}</div>
                        <div className="text-[#b1c0ae] text-xs font-poppins">{item.target}</div>
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

      <section className="page-section"><div style={{ maxWidth: 1000, margin: "0 auto" }}><p style={{ color: "var(--d-fg-dim)", lineHeight: 1.8 }}>Launch speed and validation are implementation milestones. They do not establish customer conversion or ongoing AI placement. For the original project detail and its context, read the launch report.</p><Link href="/blog/inw-basecamp-arizona-launch" className="d-btn d-btn-ghost mt-6">Read the INW Basecamp launch →</Link></div></section>

      {/* CTA */}
      <section className="py-24 bg-[#101b1a] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Start with <span className="text-[#c8eea0]">your customer’s next step.</span>
            </h2>
            <p className="text-[#b1c0ae] text-xl font-poppins mb-10 leading-relaxed max-w-2xl mx-auto">
              Get a free written review of what your business makes clear today and where a customer’s assistant would need more information. Delivered within two business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/machine-read" className="d-btn d-btn-primary text-base font-bold px-8 py-4 rounded-md">
                Request an Agent Readiness Review
              </Link>
              <Link href="/services" className="d-btn d-btn-ghost text-base font-semibold px-8 py-4 rounded-md">
                See Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SecondaryPageShell>
  );
}

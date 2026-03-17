import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services — Brand Authority Architecture | KodeCite.ai',
  description:
    'KodeCite.ai builds Brand Authority Architecture — Next.js infrastructure, Source of Truth schema, Pre-Vetted Audience Campaigns, and Spatial SEO that makes AI systems cite your business as the definitive answer.',
  alternates: {
    canonical: 'https://www.kodecite.ai/services',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Brand Authority Architecture',
  provider: {
    '@type': 'ProfessionalService',
    name: 'KodeCite.ai',
    url: 'https://kodecite.ai',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Authority Engine Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Machine-Priority Infrastructure',
        description:
          'Next.js websites on Vercel edge infrastructure. Sub-second load times. Machine-priority indexing for AI crawlers.',
      },
      {
        '@type': 'Offer',
        name: 'Source of Truth Engine',
        description:
          'Custom JSON-LD schema with 100% machine discovery rate. Zero recognition errors. AI cites your brand with certainty.',
      },
      {
        '@type': 'Offer',
        name: 'Pre-Vetted Audience Campaigns',
        description:
          'Facebook campaigns with dedicated AEO-optimized landing pages built for high-intent AI-era buyers.',
      },
      {
        '@type': 'Offer',
        name: 'Spatial SEO & Multi-Modal Discovery',
        description:
          'llms.txt, agent.json, and wearable-ready structured data for Meta glasses, Apple Vision Pro, and autonomous AI agent discovery.',
        url: 'https://kodecite.ai/services',
      },
      {
        '@type': 'Offer',
        name: 'Free AEO Audit',
        description:
          'No-obligation AI visibility audit showing how your business appears in ChatGPT, Perplexity, and Google AI Overviews.',
        price: '0',
        priceCurrency: 'USD',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is zero click search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Zero click search happens when search engines or AI tools answer a query directly on the results page — without the user clicking through to any website. AI Overviews, featured snippets, and knowledge panels are examples. If your business isn't structured to be the source of those answers, you're invisible.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why Next.js instead of WordPress, Wix, or Squarespace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WordPress, Wix, and Squarespace are built on template-driven frameworks that are bloated, slow, and dependent on plugins and third-party integrations that conflict with each other and break Core Web Vitals scores. Next.js on Vercel loads faster, scores higher on Lighthouse, and is far easier for AI crawlers to parse and index. For AI search visibility, technical performance is no longer optional.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is schema markup and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schema markup is structured data code added to your website that tells search engines and AI exactly what your business is, what you do, where you are, and what you offer. Without it, AI tools have to guess. With it, they can confidently cite your business as the answer to relevant questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO and schema results can appear within days to weeks as AI crawlers begin indexing your structured data. Facebook ad campaigns typically generate initial data within the first week. Full organic traction from content builds over 60–90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside of Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. KodeCite.ai is based in Post Falls, Idaho, but serves businesses nationwide. All our work is delivered remotely. We've worked with clients across different states and industries.",
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have deep experience in home services (window treatments, home theater, AV), real estate, and local service businesses. We apply the same AEO and digital marketing methodology across industries — the principles of AI visibility and lead generation are universal.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://kodecite.ai/services' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ===== HERO ===== */}
      <section className="pt-36 pb-20 bg-[#f8f5f0] px-4 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="eyebrow mb-4">BRAND AUTHORITY ARCHITECTURE</p>
          <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-[#0a0806] mb-6 leading-tight">
            Stop Chasing Clicks.{' '}
            <br className="hidden md:block" />
            Start{' '}
            <span className="text-[#a0723a]">Owning the Answer.</span>
          </h1>
          <p className="text-[#6a5a48] text-xl md:text-2xl font-poppins max-w-3xl mx-auto leading-relaxed">
            We build the only infrastructure that allows a business to exist in a world where users
            no longer click. Every service below is a layer of your Authority Engine — designed to
            make AI systems read, trust, and cite your brand as the definitive source.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PILLAR ONE — MACHINE-PRIORITY INFRASTRUCTURE ===== */}
      <section id="website" className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow mb-4">PILLAR ONE</p>
                <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#0a0806] mb-6 leading-tight">
                  <span className="text-[#1a56db]">Machine-Priority</span>{' '}
                  Infrastructure
                </h2>
                <p className="text-[#6a5a48] text-lg leading-relaxed font-poppins mb-6">
                  AI crawlers operate on a token budget. They skip slow, bloated sites and prioritize
                  the fastest, cleanest signal.
                </p>
                <p className="text-[#6a5a48] leading-relaxed font-poppins mb-6">
                  Our <strong className="text-[#0a0806]">Next.js</strong> sites deployed on{' '}
                  <strong className="text-[#0a0806]">Vercel&apos;s edge infrastructure</strong> load in
                  under a second — making your site the first one AI agents read. Not faster than
                  your old site.{' '}
                  <span className="text-[#0a0806] font-semibold">
                    Faster than every competitor in your market.
                  </span>
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'App Router architecture for maximum performance',
                    'Core Web Vitals optimized from day one',
                    'next/image for automatic image optimization',
                    'next/font for zero layout shift typography',
                    'Structured data embedded at build time',
                    'AI crawler-friendly URL structure and metadata',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#6a5a48] font-poppins">
                      <svg className="w-4 h-4 text-[#a0723a] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[#f2ede4] rounded-2xl p-8 border border-[rgba(100,70,30,0.15)]">
                <h3 className="font-poppins font-bold text-lg text-[#0a0806] mb-6">The Vercel Advantage</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Machine-Priority Indexing', value: '<1s', desc: 'Average first contentful paint vs 3–5s on template platforms' },
                    { label: 'Lighthouse Score', value: '95+', desc: 'Target across all four categories' },
                    { label: 'Deployment', value: 'Edge', desc: 'Global CDN with automatic SSL and zero downtime' },
                    { label: 'Uptime', value: '99.99%', desc: 'Vercel SLA for production deployments' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-start gap-4">
                      <div className="text-right min-w-[4rem]">
                        <div className="font-poppins font-bold text-2xl text-[#a0723a]">{stat.value}</div>
                      </div>
                      <div>
                        <div className="font-poppins font-semibold text-[#0a0806] text-sm">{stat.label}</div>
                        <div className="text-[#6a5a48] text-xs font-poppins mt-0.5">{stat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PILLAR TWO — SOURCE OF TRUTH ENGINE ===== */}
      <section id="content" className="py-24 md:py-32 bg-[#f2ede4] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="bg-[#f8f5f0] rounded-2xl p-8 border border-[rgba(100,70,30,0.15)]">
                <h3 className="font-poppins font-bold text-lg text-[#0a0806] mb-2">100% Machine Discovery Rate</h3>
                <p className="text-[#6a5a48] text-xs font-poppins mb-6">Schema types we implement:</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Organization', 'LocalBusiness', 'WebSite', 'Service',
                    'FAQPage', 'Article', 'BreadcrumbList', 'Product',
                    'Review', 'HowTo', 'Event', 'VideoObject',
                  ].map((schema) => (
                    <div key={schema} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a0723a] flex-shrink-0" />
                      <span className="text-[#6a5a48] text-sm font-poppins">{schema}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <div>
                <p className="eyebrow mb-4">PILLAR TWO</p>
                <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#0a0806] mb-6 leading-tight">
                  <span className="text-[#a0723a]">Source of Truth</span>{' '}
                  Engine
                </h2>
                <p className="text-[#6a5a48] text-lg leading-relaxed font-poppins mb-6">
                  We force AI models to describe your brand accurately. Custom{' '}
                  <strong className="text-[#0a0806]">JSON-LD schema</strong> encodes your expertise,
                  location, services, and authority as machine-readable facts.
                </p>
                <p className="text-[#6a5a48] leading-relaxed font-poppins mb-8">
                  Zero recognition errors means AI never guesses what you offer — it cites you with
                  certainty. When someone asks ChatGPT about your industry,{' '}
                  <span className="text-[#0a0806] font-semibold">the answer is you.</span>
                </p>

                {/* Proof of Outcome */}
                <div className="stat-block rounded-xl p-6 mb-8">
                  <p className="eyebrow text-xs mb-5">PROOF OF OUTCOME</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="font-playfair font-bold text-4xl text-[#1a56db] leading-none">+40%</div>
                      <div className="text-[rgba(240,232,216,0.85)] text-sm font-poppins font-semibold mt-2">Session Lift</div>
                      <div className="text-[rgba(240,232,216,0.6)] text-xs font-poppins mt-1 leading-snug">
                        Avg. engagement increase across AEO-optimized client sites
                      </div>
                    </div>
                    <div>
                      <div className="font-playfair font-bold text-4xl text-[#1a56db] leading-none">5x</div>
                      <div className="text-[rgba(240,232,216,0.85)] text-sm font-poppins font-semibold mt-2">Conversion Rate</div>
                      <div className="text-[rgba(240,232,216,0.6)] text-xs font-poppins mt-1 leading-snug">
                        vs. template-platform baseline on equivalent traffic
                      </div>
                    </div>
                  </div>
                  <p className="text-[rgba(240,232,216,0.80)] text-xs font-poppins mt-5 pt-4 border-t border-[rgba(240,232,216,0.08)] italic">
                    Our Next.js + Edge stack isn&apos;t an expense — it&apos;s a high-performance lead generation engine.
                  </p>
                </div>

                <Link href="/contact" className="btn-gold text-sm font-bold px-6 py-3 rounded-md inline-block">
                  Free Scaffolding Audit
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PILLAR THREE — PRE-VETTED AUDIENCE CAMPAIGNS ===== */}
      <section id="campaigns" className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="eyebrow mb-4">PILLAR THREE</p>
                <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#0a0806] mb-6 leading-tight">
                  Pre-Vetted{' '}
                  <span className="text-[#a0723a]">Audience Campaigns</span>
                </h2>
                <p className="text-[#6a5a48] text-lg leading-relaxed font-poppins mb-6">
                  Paid campaigns built for the AI era. We combine Facebook&apos;s targeting precision
                  with dedicated landing pages structured for machine discovery — so every dollar spent
                  reaches buyers who are already in research mode.
                </p>
                <p className="text-[#6a5a48] leading-relaxed font-poppins mb-8">
                  No wasted impressions. No cold audiences. Just high-intent traffic arriving{' '}
                  <span className="text-[#0a0806] font-semibold">pre-educated and ready to act.</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Pixel Setup', desc: 'Full event tracking from day one' },
                    { title: 'Custom Audiences', desc: '3 targeted segments minimum' },
                    { title: 'Ad Creatives', desc: 'Copy and design ready to launch' },
                    { title: 'Landing Pages', desc: 'Dedicated pages for each campaign' },
                    { title: 'Retargeting', desc: 'Sequential follow-up sequences' },
                    { title: 'Lookalike Build', desc: 'Scale to proven converters' },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#f2ede4] rounded-lg p-4 border border-[rgba(100,70,30,0.15)]">
                      <div className="font-poppins font-semibold text-[#0a0806] text-sm mb-1">{item.title}</div>
                      <div className="text-[#6a5a48] text-xs font-poppins">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[#f2ede4] rounded-2xl p-8 border border-[rgba(100,70,30,0.15)]">
                <h3 className="font-poppins font-bold text-lg text-[#0a0806] mb-2">The Flywheel Effect</h3>
                <p className="text-[#6a5a48] text-sm font-poppins mb-8">How paid and organic compound together:</p>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Launch Ads', desc: 'Immediate traffic and lead data from day one' },
                    { step: '02', title: 'Pixel Learns', desc: 'Facebook algorithm optimizes toward converters' },
                    { step: '03', title: 'Build Audiences', desc: 'Custom and lookalike audiences scale reach' },
                    { step: '04', title: 'Organic Rises', desc: 'Schema content gets cited and indexed' },
                    { step: '05', title: 'Costs Drop', desc: 'Retargeting converts warm leads cheaper' },
                    { step: '06', title: 'System Compounds', desc: 'Both channels feed each other indefinitely' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="font-poppins font-bold text-[#a0723a] text-sm min-w-[2rem]">{item.step}</div>
                      <div>
                        <div className="font-poppins font-semibold text-[#0a0806] text-sm">{item.title}</div>
                        <div className="text-[#6a5a48] text-xs font-poppins mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== PRE-VETTED INTENT — THE REVENUE DIFFERENCE ===== */}
      <section id="revenue-difference" className="py-24 md:py-32 bg-[#1c1814] px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-5">THE REVENUE DIFFERENCE</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-[52px] text-[rgba(240,232,216,0.9)] text-center mb-10 leading-[1.15]">
              We don&apos;t bring you browsers.{' '}
              <br className="hidden lg:block" />
              We bring you{' '}
              <span className="text-[#a0723a]">pre-educated buyers.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-[rgba(240,232,216,0.6)] text-lg md:text-xl leading-relaxed font-poppins mb-5">
                Traditional search sends traffic. AI citations send intent. By the time a visitor
                arrives from an AI recommendation, the machine has already research-vetted your brand,
                matched your expertise to their question, and delivered a pre-qualified buyer to your door.
              </p>
              <p className="text-[rgba(240,232,216,0.6)] text-base md:text-lg leading-relaxed font-poppins">
                The difference isn&apos;t clicks.{' '}
                <span className="text-[rgba(240,232,216,0.9)] font-semibold">It&apos;s conversion velocity.</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison table */}
          <ScrollReveal delay={200}>
            <div className="mb-12 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(240,232,216,0.1)]">
                    <th className="font-poppins font-semibold text-[rgba(240,232,216,0.82)] text-sm py-4 pr-6 min-w-[200px]">
                      Metric
                    </th>
                    <th className="font-poppins font-semibold text-[rgba(240,232,216,0.82)] text-sm py-4 pr-6 min-w-[160px]">
                      Traditional Search
                    </th>
                    <th className="font-poppins font-semibold text-[#a0723a] text-sm py-4 min-w-[220px]">
                      AI Citation
                      <span className="block text-xs font-normal text-[rgba(240,232,216,0.72)] mt-0.5">
                        KodeCite Stack
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Conversion Rate', traditional: '2.8%', ai: '14.2% — 5x higher' },
                    { metric: 'Time on Site', traditional: '~1.5 minutes', ai: '40% longer' },
                    { metric: 'Purchase Speed', traditional: 'Standard', ai: '47% faster completion' },
                    { metric: 'Transaction Value', traditional: 'Baseline', ai: '25% higher per order' },
                    { metric: 'Likelihood to Convert', traditional: 'Baseline', ai: 'Up to 23x more likely' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[rgba(240,232,216,0.06)] hover:bg-[rgba(160,114,58,0.05)] transition-colors">
                      <td className="font-poppins text-[rgba(240,232,216,0.85)] font-medium text-sm py-4 pr-6">{row.metric}</td>
                      <td className="font-poppins text-[rgba(240,232,216,0.72)] text-sm py-4 pr-6">{row.traditional}</td>
                      <td className="font-poppins text-[#a0723a] font-semibold text-sm py-4">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Pull quote */}
          <ScrollReveal delay={200}>
            <blockquote className="border-l-4 border-[#a0723a] bg-[#2a2420] rounded-r-xl px-8 py-7 max-w-3xl mx-auto mb-10">
              <p className="font-poppins text-[rgba(240,232,216,0.9)] text-base md:text-lg leading-relaxed italic">
                &ldquo;When an AI recommends your business, the research phase is already over.
                The buyer arrives trusting you before they&apos;ve read a single word.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="text-[rgba(240,232,216,0.6)] text-base md:text-lg font-poppins text-center max-w-2xl mx-auto leading-relaxed">
              This is{' '}
              <span className="text-[rgba(240,232,216,0.9)] font-semibold">Intent Compression</span>. It&apos;s
              what happens when your infrastructure is built for machines, not just humans.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== SPATIAL SEO — THE FRONTIER SERVICE ===== */}
      <section id="spatial-seo" className="py-24 md:py-32 bg-[#1c1814] px-4 relative overflow-hidden">
        {/* Premium glow treatment */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#a0723a]/6 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 border-y border-[rgba(160,114,58,0.15)] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block font-poppins font-bold text-xs tracking-[0.3em] text-[#a0723a] bg-[rgba(160,114,58,0.1)] border border-[rgba(160,114,58,0.3)] rounded-full px-5 py-2 mb-6">
                THE FRONTIER SERVICE
              </span>
              <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-[52px] text-[rgba(240,232,216,0.9)] mb-8 leading-[1.15]">
                Spatial SEO &amp;{' '}
                <span className="text-[#a0723a]">Multi-Modal Discovery</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-5">
                <p className="text-[rgba(240,232,216,0.6)] text-lg md:text-xl leading-relaxed font-poppins">
                  Visual search is dying. The next generation of buyers won&apos;t type a query or tap
                  a link — they&apos;ll ask their Oakley Meta glasses a question while standing in front
                  of your building.
                </p>
                <p className="text-[rgba(240,232,216,0.6)] text-base md:text-lg leading-relaxed font-poppins">
                  When that happens, the glasses don&apos;t browse your website. They ingest a
                  structured data layer — and surface the businesses whose digital infrastructure is
                  built to be read in real-time.{' '}
                  <span className="text-[rgba(240,232,216,0.9)] font-semibold">We build that infrastructure.</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Three feature points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Wearable-Ready Digital ID Cards',
                body: 'Our llms.txt and agent.json files act as the "Digital ID Cards" for the wearable era — giving Meta glasses, Apple Vision Pro, and AI agents a direct, structured map to your most valuable content. When a customer asks a question near your location, your name is the answer they hear.',
                delay: 0,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: 'Real-Time Update Velocity',
                body: 'We build and ship using Claude Code + Vercel\'s edge infrastructure. When your data changes — a listing goes pending, a service updates, a price shifts — we can push machine-readable updates in minutes. AI assistants always have your most current information.',
                delay: 150,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                ),
                title: 'Agent2Agent Protocol (agent.json)',
                body: 'The emerging "DNS for AI agents" backed by the Linux Foundation. We implement agent.json before your competitors know it exists — declaring what your business can do to autonomous AI systems that are already shopping services on behalf of buyers.',
                delay: 300,
              },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={feature.delay}>
                <div className="bg-[#2a2420] border border-[rgba(160,114,58,0.15)] rounded-2xl p-8 hover:border-[rgba(160,114,58,0.3)] transition-all duration-300 h-full">
                  <div className="text-[#a0723a] mb-5">{feature.icon}</div>
                  <h3 className="font-playfair font-bold text-xl text-[#a0723a] mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-poppins text-[rgba(240,232,216,0.6)] text-sm leading-relaxed">
                    {feature.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center">
              <Link
                href="/contact"
                className="btn-gold font-poppins font-bold text-base inline-block rounded-md"
                style={{ padding: '16px 40px' }}
              >
                Ask us about Spatial SEO for your business
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-24 md:py-32 bg-[#f8f5f0] px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">FAQ</p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#0a0806] text-center mb-16">
              Common Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                q: 'What is zero click search?',
                a: "Zero click search happens when search engines or AI tools answer a query directly on the results page — without the user clicking through to any website. AI Overviews, featured snippets, and knowledge panels are examples. If your business isn't structured to be the source of those answers, you're invisible.",
              },
              {
                q: 'Why Next.js instead of WordPress, Wix, or Squarespace?',
                a: 'WordPress, Wix, and Squarespace are built on template-driven frameworks that are bloated, slow, and dependent on plugins and third-party integrations that conflict with each other and break Core Web Vitals scores. Next.js on Vercel loads faster, scores higher on Lighthouse, and is far easier for AI crawlers to parse and index. For AI search visibility, technical performance is no longer optional.',
              },
              {
                q: 'What is schema markup and why does it matter?',
                a: 'Schema markup is structured data code added to your website that tells search engines and AI exactly what your business is, what you do, where you are, and what you offer. Without it, AI tools have to guess. With it, they can confidently cite your business as the answer to relevant questions.',
              },
              {
                q: 'How long does it take to see results?',
                a: 'Technical SEO and schema results can appear in days to weeks — we indexed 49 new pages in 48 hours for one client. Facebook ad campaigns typically generate initial data within the first week. Full organic traction from content builds over 60–90 days.',
              },
              {
                q: 'Do you work with businesses outside of Idaho?',
                a: "Yes. KodeCite.ai is based in Post Falls, Idaho, but serves businesses nationwide. All our work is delivered remotely. We've worked with clients across different states and industries.",
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We have deep experience in home services (window treatments, home theater, AV), real estate, and local service businesses. We apply the same AEO and digital marketing methodology across industries — the principles of AI visibility and lead generation are universal.',
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <details className="group bg-[#f2ede4] rounded-xl border border-[rgba(100,70,30,0.15)] hover:border-[#a0723a] transition-all duration-300">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-poppins font-semibold text-[#0a0806] pr-4">{faq.q}</h3>
                    <svg
                      className="w-5 h-5 text-[#a0723a] flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-[#6a5a48] font-poppins leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-[#1c1814] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">FREE AI SCAFFOLDING AUDIT</p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[rgba(240,232,216,0.9)] mb-6">
              Not sure where to start?
            </h2>
            <p className="text-[rgba(240,232,216,0.6)] text-lg font-poppins mb-3 leading-relaxed">
              We&apos;ll audit the hidden structure beneath your AI presence and show you whether
              you&apos;re visible by design — or just by default.
            </p>
            <p className="text-[rgba(240,232,216,0.6)] text-base font-poppins mb-10 leading-relaxed">
              20 minutes. No obligation. One clear action you can take today.
            </p>
            <Link href="/contact" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">
              Start the Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

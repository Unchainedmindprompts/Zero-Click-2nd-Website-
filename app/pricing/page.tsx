import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import { REVIEW_HREF, REVIEW_TURNAROUND } from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'A business-owned website and clear information for customers and their AI assistants. Foundation Build: $4,995 one-time. Actions scoped separately. No mandatory retainer.',
  alternates: { canonical: `${ORIGIN}/pricing` },
};

const PAGE_URL = `${ORIGIN}/pricing`;

const pricingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Pricing — KodeCite.ai',
      description:
        'Foundation Build costs $4,995 one-time for a business-owned website and connected information. Agent Capability Build is separately scoped. Platform Capability Layer is an application-only pilot.',
      inLanguage: 'en-US',
      isPartOf: { '@id': WEBSITE_ID },
      about: businessRef,
      primaryImageOfPage: { '@id': `${ORIGIN}/#logo` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      mainEntity: { '@id': `${PAGE_URL}#foundation-build` },
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#foundation-build`,
      name: 'Foundation Build',
      serviceType: 'Owned business infrastructure',
      provider: businessRef,
      description:
        'A business-owned website with clear identity, offers, evidence, policies, and connected business information. A live agent-action endpoint is scoped separately. No mandatory retainer.',
      areaServed: { '@type': 'Country', name: 'United States' },
      offers: {
        '@type': 'Offer',
        '@id': `${PAGE_URL}#offer`,
        price: '4995',
        priceCurrency: 'USD',
        url: PAGE_URL,
        availability: 'https://schema.org/InStock',
        description: 'One-time Foundation Build. You own the site and the accounts it runs on.',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: PAGE_URL },
      ],
    },
  ],
};

const whatYouGet = [
  { t: 'A website customers can use comfortably.', d: 'Fast, clear pages that make your services, evidence, and next steps easy to find.' },
  { t: 'A consistent business identity.', d: 'Your people, locations, service area, and contact details connected to one accurate record.' },
  { t: 'Offers with enough detail to assess fit.', d: 'Services, relevant limits, credentials, examples, and policies explained together.' },
  { t: 'Connected information for assistants.', d: 'Structured business information and appropriate discovery files that agree with what customers see on the site.' },
  { t: 'A plan for useful next steps.', d: 'Which actions could be supported, what information they need, who approves them, and what a successful result would mean. Implementation of a live agent action is scoped separately.' },
  { t: 'Ownership and a practical handoff.', d: 'The website, code, and operating accounts are yours. You get a walkthrough and clear dependencies, without a mandatory retainer.' },
];

const addOns = [
  { t: 'Extra service or area pages', price: '$250 each (or 5 for $1,000)', d: 'Cover more towns and more services on the owned foundation.' },
  { t: 'Decision-support articles', price: '$350 each (or 3 for $900)', d: 'Owned pages that answer the questions buyers actually ask — written for people first, structured for machines second.' },
  { t: 'Rush delivery', price: '+$1,500', d: 'Faster ship when the foundation is otherwise in scope.' },
  { t: 'Additional location or second vertical', price: '$2,500', d: 'A second full location or service set on the same owned system.' },
];

const FG = 'var(--d-fg)';
const DIM = 'var(--d-fg-dim)';
const MUTE = 'var(--d-fg-mute)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function PricingPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />

      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">PRICING</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(30px, 4.8vw, 62px)', lineHeight: 1.12, letterSpacing: '-0.03em', color: FG, maxWidth: '16ch' }}>
            A foundation you own. <em className="serif" style={{ color: ACCENT }}>An action when you need it.</em>
          </h1>
          <p className="font-inter mb-9" style={{ fontSize: '18px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '620px' }}>
            Start with a $4,995 one-time Foundation Build: a website and connected business information you own. Add one approved assistant action when you need it, with its scope and price agreed separately.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary justify-center">Request an Agent Readiness Review →</Link>
            <Link href="/services" className="d-btn d-btn-ghost justify-center">See how it works →</Link>
          </div>
          <div className="glass-panel-soft flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-2" style={{ padding: '16px 22px' }}>
            <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.06em', color: MUTE }}>
              See dated examples of how client businesses have appeared in search and AI answers.
            </span>
            <Link href="/services#proof" className="font-inter font-semibold" style={{ fontSize: '13px', color: ACCENT }}>
              See discovery proof →
            </Link>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">THE FOUNDATION</div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
            <h2 className="font-inter font-semibold" style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: FG }}>
              Foundation Build
            </h2>
            <span className="font-inter font-semibold" style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: ACCENT }}>$4,995</span>
          </div>
          <p className="font-mono mb-8" style={{ fontSize: '12px', letterSpacing: '0.1em', color: MUTE }}>
            ONE-TIME · YOU OWN THE SITE AND THE ACCOUNTS · NO REQUIRED RETAINER
          </p>
          <p className="font-inter mb-10" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            A complete website and connected business information: who you are, what you offer, who it fits, why a customer can trust it, and how to take the next step. A live agent-action endpoint is a separate Agent Capability Build, scoped around one defined workflow.
          </p>

          <p className="font-mono mb-5" style={{ fontSize: '10px', letterSpacing: '0.18em', color: ACCENT }}>WHAT YOU GET</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {whatYouGet.map((w) => (
              <div key={w.t} className="glass-panel-soft flex gap-4" style={{ padding: '22px 26px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" style={{ marginTop: '2px' }}>
                  <path d="M5 10L8.5 13.5L15 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="font-inter font-semibold mb-1" style={{ fontSize: '15px', color: FG, letterSpacing: '-0.005em' }}>{w.t}</p>
                  <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{w.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            <strong style={{ color: FG, fontWeight: 600 }}>When it is done, it is yours</strong> — the website, the hosting, and the code accounts.
            Active capabilities may use third-party services with direct costs. Credentials and security may need maintenance.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">AGENT CAPABILITY BUILD</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            One useful action. <em className="serif" style={{ color: ACCENT }}>Scoped around your business.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '720px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Choose a next step worth making easier: a consultation request, a qualified inquiry, or a handoff to your team. We define the required information, customer permission, business conditions, and the result the customer should receive.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              Pricing follows that scope. The build includes the agreed validation, duplicate protection, delivery, response, and handoff checks. If the result is a request for follow-up, it says so clearly. Confirmed bookings, prices, or purchases require their own supported rules and integrations.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">PLATFORM CAPABILITY LAYER · PILOT</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Keeping your website? <em className="serif" style={{ color: ACCENT }}>Apply for the pilot.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
            For selected businesses on WordPress, Wix, Squarespace, or similar platforms, we assess a business-owned layer alongside the existing site. The pilot is application-only, with scope determined by your platform and the workflow you need. We review fit before quoting; there is no published pilot price.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel
          style={{
            padding: 'clamp(22px, 5vw, 64px)',
            border: '1px solid var(--d-line-s)',
            boxShadow: 'none',
          }}
        >
          <div className="inline-flex items-center gap-2 mb-6" style={{ padding: '6px 14px', borderRadius: '999px', border: '1px solid var(--d-line-s)', background: 'var(--d-bg-3)' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, boxShadow: 'none' }} />
            <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.2em', color: ACCENT }}>HOW WE CHECK THE WORK</span>
          </div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.8vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Agree what good looks like. <em className="serif" style={{ color: ACCENT }}>Then test it.</em>
          </h2>
          <p className="font-inter mb-5" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            Before the build, we agree in writing what will be published, which reading and customer journeys will be checked, and what any included action must do. We verify those outputs, including relevant failure and handoff paths, before calling the work complete.
          </p>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            The commitment covers the agreed build and tests. It is not a money-back guarantee tied to citations, and it cannot guarantee that a particular assistant will read, rank, or recommend your business.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(22px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-4">FOUNDATION ADD-ONS</div>
          <p className="font-inter mb-10" style={{ fontSize: '15px', lineHeight: 1.6, color: MUTE, fontWeight: 300, fontStyle: 'italic', maxWidth: '620px' }}>
            Optional, one-time additions for more services, locations, or questions your customers need answered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map((a) => (
              <div key={a.t} className="glass-panel-soft" style={{ padding: '24px 28px' }}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <p className="font-inter font-semibold" style={{ fontSize: '15.5px', color: FG, letterSpacing: '-0.01em' }}>{a.t}</p>
                  <p className="font-mono" style={{ fontSize: '13px', color: ACCENT, whiteSpace: 'nowrap' }}>{a.price}</p>
                </div>
                <p className="font-inter" style={{ fontSize: '13.5px', lineHeight: 1.6, color: MUTE, fontWeight: 300 }}>{a.d}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: 'clamp(48px, 10vw, 120px)' }}>
        <GlassPanel style={{ padding: 'clamp(28px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">HOW TO START</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            Start with an <em className="serif" style={{ color: ACCENT }}>Agent Readiness Review.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            See where customers and their assistants can understand your offer, verify it, and take the next step, and where they may get stuck. The review gives you practical priorities before you choose a build. {REVIEW_TURNAROUND} You keep the report either way.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary">Request an Agent Readiness Review →</Link>
            <Link href="/services" className="d-btn d-btn-ghost">See how it works →</Link>
          </div>
          <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.14em', color: MUTE }}>
            CLEAR SCOPE · BUSINESS OWNERSHIP · NO MANDATORY RETAINER
          </p>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}

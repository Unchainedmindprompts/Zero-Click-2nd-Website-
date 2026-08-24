import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';
import { ORIGIN, WEBSITE_ID, businessRef } from '@/lib/schema';
import { PRICING_CONTEXT, REVIEW_HREF, REVIEW_TURNAROUND } from '@/lib/positioning';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Foundation Build — one-time $4,995 for the owned foundation AI can understand and evaluate. Agent Capability adds one approved action after the rules are clear. Foundation does not automatically include a live agent-action endpoint.',
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
        'Foundation Build — one-time $4,995 for the owned foundation AI can understand and evaluate. Custom actions are scoped separately. No citation money-back guarantee.',
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
        'A one-time owned website, truth, and discovery foundation. Does not automatically include a custom protected action endpoint. Transferred to you on handoff. No required retainer.',
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
  { t: 'An owned high-performance website.', d: 'Fast pages for people, on accounts you control.' },
  { t: 'One reliable record of the business.', d: 'Identity, services, locations, credentials, proof, policies, and limitations — not scattered pieces.' },
  { t: 'Connected services, locations, credibility, and proof.', d: 'So search and AI can check the same facts.' },
  { t: 'Published clearly for search and AI.', d: 'The same accurate information, published so people and assistants can find it. This does not make every system read the business with certainty.' },
  { t: 'A map of actions AI may eventually request.', d: 'What can be asked for, what information is required, where you work, and what success does not mean. This is the map — not an automatic live action endpoint.' },
  { t: 'A system and handoff the business can operate and own.', d: 'You own the site and the accounts it runs on. No mandatory retainer. A protected action later is a separate Agent Capability Build.' },
];

const addOns = [
  { t: 'Extra service or area pages', price: '$250 each (or 5 for $1,000)', d: 'Cover more towns and more services on the owned foundation.' },
  { t: 'Decision-support articles', price: '$350 each (or 3 for $900)', d: 'Owned pages that answer the questions buyers actually ask — written for people first, structured for machines second.' },
  { t: 'Rush delivery', price: '+$1,500', d: 'Faster ship when the foundation is otherwise in scope.' },
  { t: 'Additional location or second vertical', price: '$2,500', d: 'A second full location or service set on the same owned system.' },
];

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function PricingPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />

      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">PRICING</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: FG, maxWidth: '16ch' }}>
            Price the foundation. <em className="serif" style={{ color: ACCENT }}>Scope the action.</em>
          </h1>
          <p className="font-inter mb-9" style={{ fontSize: '18px', lineHeight: 1.6, color: DIM, fontWeight: 300, maxWidth: '620px' }}>
            As customers begin to delegate outcomes to AI, the assistant has to understand the business and decide whether it fits. {PRICING_CONTEXT}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary justify-center">Request an Agent Readiness Review →</Link>
            <Link href="/services" className="d-btn d-btn-ghost justify-center">See how it works →</Link>
          </div>
          <div className="glass-panel-soft flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-2" style={{ padding: '16px 22px' }}>
            <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.06em', color: MUTE }}>
              Discovery evidence on Luxe, Shirin, and others is visibility — one outcome of clearer infrastructure.
            </span>
            <Link href="/services#proof" className="font-inter font-semibold" style={{ fontSize: '13px', color: ACCENT, whiteSpace: 'nowrap' }}>
              See discovery proof →
            </Link>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
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
            The owned foundation AI can understand and evaluate. It does not automatically include a live agent-action
            endpoint. If the business later needs a defined action — a consultation request, a qualified inquiry,
            a controlled handoff — that is scoped as an Agent Capability Build after the rules are clear.
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
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">AGENT CAPABILITY BUILD</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            One defined action at a time. <em className="serif" style={{ color: ACCENT }}>No published price.</em>
          </h2>
          <div className="flex flex-col gap-5" style={{ maxWidth: '720px' }}>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              A consultation request is not a booking. A price inquiry is not a checkout. A commercial project is not a one-click accept.
              Different actions carry different rules, different risk, and different control requirements.
            </p>
            <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300 }}>
              We only scope this after the business rules are understood: required customer information, service area, permission checks,
              protection from invalid, abusive, or duplicate requests, human follow-up, and a clear meaning of success. Checking the agreed result is part of the work.
            </p>
          </div>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">PLATFORM CAPABILITY LAYER · PILOT</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            Application-only. <em className="serif" style={{ color: ACCENT }}>No invented price.</em>
          </h2>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '720px' }}>
            For selected businesses remaining on WordPress, Wix, Squarespace, or similar platforms: an owned capability layer that can sit alongside the existing website, on infrastructure and a domain you control.
            This is a founding pilot. A full rebuild is still the strongest path.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel
          style={{
            padding: 'clamp(36px, 5vw, 64px)',
            border: '1px solid rgba(93,213,255,0.45)',
            boxShadow: '0 0 0 1px rgba(93,213,255,0.15), 0 24px 70px -30px rgba(93,213,255,0.45)',
          }}
        >
          <div className="inline-flex items-center gap-2 mb-6" style={{ padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(93,213,255,0.4)', background: 'rgba(93,213,255,0.08)' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, boxShadow: '0 0 8px rgba(93,213,255,0.8)' }} />
            <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.2em', color: ACCENT }}>PRODUCTION ACCEPTANCE</span>
          </div>
          <h2 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3.8vw, 46px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: FG, maxWidth: '18ch' }}>
            The work is not done until the <em className="serif" style={{ color: ACCENT }}>agreed outputs pass.</em>
          </h2>
          <p className="font-inter mb-5" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            Before a build starts, we agree in writing what the system must publish, what AI must be able to understand,
            and — when an action is included — what the protected workflow must successfully do. The engagement is not complete until those tests pass.
          </p>
          <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '700px' }}>
            This is an acceptance standard, not a money-back guarantee and not a promise that a specific AI engine will cite the business.
          </p>
        </GlassPanel>
      </section>

      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-4">FOUNDATION ADD-ONS</div>
          <p className="font-inter mb-10" style={{ fontSize: '15px', lineHeight: 1.6, color: MUTE, fontWeight: 300, fontStyle: 'italic', maxWidth: '620px' }}>
            Optional. One-time. These extend the owned foundation. They are not citation-tracking retainers.
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

      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">HOW TO START</div>
          <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: FG }}>
            Start with an <em className="serif" style={{ color: ACCENT }}>Agent Readiness Review.</em>
          </h2>
          <p className="font-inter mb-8" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            The Agent Readiness Review shows what AI can understand, evaluate, and safely do with your business today. {REVIEW_TURNAROUND} You keep the report either way.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href={REVIEW_HREF} className="d-btn d-btn-primary">Request an Agent Readiness Review →</Link>
            <Link href="/services" className="d-btn d-btn-ghost">See how it works →</Link>
          </div>
          <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.14em', color: MUTE }}>
            OWNED BY YOU · CONTROLLED BY YOU · READY FOR THE AGENT-DRIVEN WEB
          </p>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}

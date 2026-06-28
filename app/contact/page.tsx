import type { Metadata } from 'next';
import Link from 'next/link';
import InquiryForm from '@/components/contact/InquiryForm';
import SecondaryPageShell from '@/components/SecondaryPageShell';
import GlassPanel from '@/components/GlassPanel';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact KodeCite for project inquiries, scope questions, partnerships, or direct conversations about AI-readable website infrastructure.',
  alternates: { canonical: 'https://www.kodecite.ai/contact' },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact — KodeCite.ai',
  url: 'https://www.kodecite.ai/contact',
  description:
    'Contact KodeCite for project inquiries, scope questions, partnerships, or direct conversations about AI-readable website infrastructure. For the free diagnostic, start with a Machine Read.',
  publisher: { '@id': 'https://www.kodecite.ai/#business' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.kodecite.ai/contact' },
  ],
};

const FG = 'var(--d-fg)';
const DIM = 'rgba(233, 238, 255, 0.95)';
const MUTE = 'rgba(219, 227, 255, 0.8)';
const ACCENT = 'var(--d-accent)';
const sectionGap = { marginTop: '30px' };

export default function ContactPage() {
  return (
    <SecondaryPageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="secondary-section secondary-hero">
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="d-eyebrow mb-6">CONTACT KODECITE</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: FG }}>
            Let&apos;s talk about<br />
            what you&apos;re <em className="serif" style={{ color: ACCENT }}>building.</em>
          </h1>
          <p className="font-inter mb-10" style={{ fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '580px' }}>
            Use this page for project inquiries, partnerships, scope questions, or
            direct conversations. If you want the free diagnostic first, start with the
            Machine Read.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="mailto:mark@kodecite.ai" className="d-btn d-btn-primary justify-center">
              Email KodeCite
            </a>
            <Link href="/machine-read" className="d-btn d-btn-ghost justify-center">
              Start with a Machine Read
            </Link>
          </div>
        </GlassPanel>
      </section>

      {/* ── Direct inquiry panel ─────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(32px, 4.5vw, 56px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="d-eyebrow mb-6">PROJECT INQUIRY</div>
              <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG }}>
                Already have a project <em className="serif" style={{ color: ACCENT }}>in mind?</em>
              </h2>
              <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '420px' }}>
                Send the site, the goal, the rough timeline, and what you&apos;re trying
                to solve. We&apos;ll respond with the clearest next step.
              </p>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </GlassPanel>
      </section>

      {/* ── Machine Read redirect panel ──────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="d-eyebrow mb-6">FREE DIAGNOSTIC</div>
              <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG }}>
                Need the <em className="serif" style={{ color: ACCENT }}>diagnostic</em> first?
              </h2>
              <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '460px' }}>
                The Machine Read is the free starting point if you want to know what AI
                systems can and can&apos;t understand, verify, and trust about your current
                website.
              </p>
            </div>

            <div className="flex md:justify-end">
              <Link href="/machine-read" className="d-btn d-btn-primary justify-center">
                Start with Machine Read →
              </Link>
            </div>
          </div>
        </GlassPanel>
      </section>

      {/* ── Email / direct card ──────────────────────────── */}
      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(36px, 5vw, 64px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="d-eyebrow mb-6">DIRECT LINE</div>
              <h2 className="font-inter font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.12, letterSpacing: '-0.025em', color: FG }}>
                Prefer to <em className="serif" style={{ color: ACCENT }}>just email?</em>
              </h2>
              <p className="font-inter" style={{ fontSize: '16px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '440px' }}>
                Reach out directly and tell us what you&apos;re working on. We&apos;ll point
                you to the right next step.
              </p>
            </div>

            <div>
              <a href="mailto:mark@kodecite.ai" className="glass-panel-soft secondary-jump" style={{ display: 'block', padding: '36px 40px', textDecoration: 'none' }}>
                <p className="font-mono mb-4" style={{ fontSize: '9px', letterSpacing: '0.2em', color: MUTE }}>EMAIL · DIRECT</p>
                <p className="font-inter font-semibold mb-4" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', letterSpacing: '-0.015em', color: ACCENT, wordBreak: 'break-all' }}>mark@kodecite.ai</p>
                <div className="flex flex-col gap-1 mb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.10)', paddingTop: '16px' }}>
                  <p className="font-inter" style={{ fontSize: '13px', color: MUTE, fontWeight: 300 }}>No sales handoff. A senior review, written in plain English.</p>
                </div>
                <span style={{ color: ACCENT, fontSize: '18px' }}>→</span>
              </a>
            </div>
          </div>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}

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
          <div className="d-eyebrow mb-6">CONTACT</div>
          <h1 className="font-inter font-semibold mb-6" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: FG }}>
            Get in <em className="serif" style={{ color: ACCENT }}>touch.</em>
          </h1>
          <p className="font-inter" style={{ fontSize: '17px', lineHeight: 1.65, color: DIM, fontWeight: 300, maxWidth: '560px' }}>
            Questions about a project, timeline, or working together? Send a few
            details below and we&apos;ll get back to you — usually within one business day.
          </p>
        </GlassPanel>
      </section>

      {/* ── Contact form ─────────────────────────────────── */}
      <section className="secondary-section" style={sectionGap}>
        <GlassPanel style={{ padding: 'clamp(32px, 4.5vw, 56px)', maxWidth: '760px', margin: '0 auto' }}>
          <InquiryForm />
        </GlassPanel>
      </section>

      {/* ── Contact details ──────────────────────────────── */}
      <section className="secondary-section" style={{ ...sectionGap, paddingBottom: '120px' }}>
        <GlassPanel style={{ padding: 'clamp(32px, 4.5vw, 56px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="mailto:mark@kodecite.ai" className="glass-panel-soft secondary-jump" style={{ display: 'block', padding: '32px 36px', textDecoration: 'none' }}>
              <p className="font-mono mb-3" style={{ fontSize: '9px', letterSpacing: '0.2em', color: MUTE }}>EMAIL</p>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', letterSpacing: '-0.015em', color: ACCENT, wordBreak: 'break-all' }}>mark@kodecite.ai</p>
              <p className="font-inter" style={{ fontSize: '13px', color: MUTE, fontWeight: 300 }}>Prefer email? Reach out directly anytime.</p>
            </a>

            <Link href="/machine-read" className="glass-panel-soft secondary-jump" style={{ display: 'block', padding: '32px 36px', textDecoration: 'none' }}>
              <p className="font-mono mb-3" style={{ fontSize: '9px', letterSpacing: '0.2em', color: MUTE }}>FREE MACHINE READ</p>
              <p className="font-inter font-semibold mb-2" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', letterSpacing: '-0.015em', color: ACCENT }}>Want the free diagnostic first? →</p>
              <p className="font-inter" style={{ fontSize: '13px', color: MUTE, fontWeight: 300 }}>See what AI systems understand about your current site.</p>
            </Link>
          </div>
        </GlassPanel>
      </section>
    </SecondaryPageShell>
  );
}

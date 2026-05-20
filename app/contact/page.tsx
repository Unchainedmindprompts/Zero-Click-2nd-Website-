import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Machine Read — KodeCite.ai',
  description:
    'Run a free Machine Read on your site. We check schema, entity coherence, crawler accessibility, and AI visibility — and send back a plain-language report. No sales pitch. 24–48 hour turnaround.',
  alternates: { canonical: 'https://www.kodecite.ai/contact' },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Machine Read — KodeCite.ai',
  url: 'https://www.kodecite.ai/contact',
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

const heroStats = [
  { num: '9/10',   label: 'sites we read have foundation issues' },
  { num: '24–48H', label: 'turnaround · no automation, real read' },
  { num: '$0',     label: "if we're not a fit, you still get the report" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: '120px 32px 80px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">THE MACHINE READ · FREE · 24–48H</div>

          <h1
            className="font-inter font-semibold mb-6"
            style={{
              fontSize: 'clamp(44px, 6vw, 80px)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--d-fg)',
            }}
          >
            See your site<br />
            the way <em className="serif">a machine</em> sees it.
          </h1>

          <p
            className="font-inter mb-12"
            style={{
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth: '560px',
            }}
          >
            We run a structured read against your live site — schema, entity coherence,
            crawler accessibility, AI visibility — and send back a plain-language report.
            No sales pitch. No methodology lecture. Just what&apos;s there and what isn&apos;t.
          </p>

          {/* 3-stat trust meta row */}
          <div
            className="flex flex-col sm:flex-row gap-px"
            style={{
              background: 'var(--d-line)',
              border: '1px solid var(--d-line)',
              borderRadius: '12px',
              overflow: 'hidden',
              maxWidth: '640px',
            }}
          >
            {heroStats.map((s) => (
              <div
                key={s.num}
                className="flex-1"
                style={{ padding: '20px 24px', background: 'var(--d-bg-2)' }}
              >
                <p
                  className="font-inter font-semibold mb-1"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    color: 'var(--d-accent)',
                  }}
                >
                  {s.num}
                </p>
                <p
                  className="font-inter"
                  style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--d-fg-mute)', fontWeight: 300 }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Machine Read Form ────────────────────────────── */}
      <section
        id="machine-read"
        style={{ padding: '80px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </section>

      {/* ── Direct line ──────────────────────────────────── */}
      <section
        style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <div>
              <div className="d-eyebrow mb-6">DIRECT LINE</div>
              <h2
                className="font-inter font-semibold mb-5"
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  color: 'var(--d-fg)',
                }}
              >
                Already know{' '}
                <em className="serif">what you need?</em>
              </h2>
              <p
                className="font-inter"
                style={{
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: 'var(--d-fg-dim)',
                  fontWeight: 300,
                  maxWidth: '440px',
                }}
              >
                Skip the read. Email Mark directly with the build you want, your timeline,
                and your budget. He&apos;ll respond within one business day.
              </p>
            </div>

            {/* Right: email card */}
            <div>
              <a
                href="mailto:mark@kodecite.ai"
                className="d-contact-card"
                style={{
                  display: 'block',
                  background: 'var(--d-bg-2)',
                  border: '1px solid var(--d-line)',
                  borderRadius: '14px',
                  padding: '36px 40px',
                  textDecoration: 'none',
                }}
              >
                <p
                  className="font-mono mb-4"
                  style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--d-fg-mute)' }}
                >
                  EMAIL · DIRECT
                </p>
                <p
                  className="font-inter font-semibold mb-4"
                  style={{
                    fontSize: 'clamp(16px, 2.5vw, 22px)',
                    letterSpacing: '-0.015em',
                    color: 'var(--d-accent)',
                    wordBreak: 'break-all',
                  }}
                >
                  mark@kodecite.ai
                </p>
                <div
                  className="flex flex-col gap-1 mb-5"
                  style={{ borderTop: '1px solid var(--d-line)', paddingTop: '16px' }}
                >
                  <p className="font-inter" style={{ fontSize: '13px', color: 'var(--d-fg-mute)', fontWeight: 300 }}>
                    One-person operation.
                  </p>
                  <p className="font-inter" style={{ fontSize: '13px', color: 'var(--d-fg-mute)', fontWeight: 300 }}>
                    You&apos;ll hear back from Mark himself.
                  </p>
                </div>
                <span style={{ color: 'var(--d-accent)', fontSize: '18px' }}>→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

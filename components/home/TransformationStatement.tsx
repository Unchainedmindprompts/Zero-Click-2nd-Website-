import ScrollReveal from '@/components/ScrollReveal';

const beats = [
  { n: '01', plain: 'A human-readable ', accent: 'website', tail: '.', dim: true },
  { n: '02', plain: 'becomes a machine-readable ', accent: 'entity', tail: '.', dim: false },
  { n: '03', plain: 'that AI can verify, trust, and ', accent: 'recommend', tail: '.', dim: false },
];

export default function TransformationStatement() {
  return (
    <section style={{ padding: '120px 32px 140px', backgroundColor: 'var(--d-bg)', borderTop: '1px solid var(--d-line)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-20">THE TRANSFORMATION</div>

        <div className="flex flex-col">
          {beats.map((b, i) => (
            <ScrollReveal key={b.n} className={i > 0 ? 'mt-[12vh]' : ''}>
              <div className="flex items-start gap-5 sm:gap-8">
                <span className="font-mono flex-shrink-0" style={{ fontSize: 'clamp(11px, 1.2vw, 14px)', color: 'var(--d-fg-mute)', letterSpacing: '0.1em', paddingTop: '0.9em' }}>{b.n}</span>
                <p
                  className="font-inter font-semibold"
                  style={{
                    fontSize: 'clamp(34px, 6vw, 82px)',
                    lineHeight: 1.04,
                    letterSpacing: '-0.04em',
                    color: b.dim ? 'var(--d-fg-dim)' : 'var(--d-fg)',
                    maxWidth: '18ch',
                  }}
                >
                  {b.plain}
                  <em className="serif" style={{ color: 'var(--d-accent)', fontStyle: 'italic' }}>{b.accent}</em>
                  {b.tail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

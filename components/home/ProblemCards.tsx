const problems = [
  { t: 'Plugin-generated schema', d: 'Templated, shallow, often the wrong type.' },
  { t: 'Inconsistent citations', d: 'Name, address, and phone disagree across directories.' },
  { t: 'Vague service areas', d: 'A city in the footer is not a verifiable service map.' },
  { t: 'Weak entity relationships', d: 'Provider, services, and business aren’t connected.' },
  { t: 'Disconnected reviews', d: 'Proof exists, but nothing ties it to the entity.' },
  { t: 'No agent action rules', d: 'AI can’t tell what a customer may safely do next.' },
  { t: 'No machine-readable proof', d: 'Credentials and authority live only in prose.' },
];

export default function ProblemCards() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE PROBLEM</div>
        <h2
          className="font-inter font-semibold mb-3"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--d-fg)' }}
        >
          Most websites leave AI <em className="serif">guessing.</em>
        </h2>
        <p className="font-inter mb-12" style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '560px' }}>
          When the signals are thin or contradictory, the system recommends the business it can verify
          instead — even if yours is better.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p) => (
            <div
              key={p.t}
              style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)', borderLeft: '3px solid var(--d-warn)', borderRadius: '14px', padding: '22px 24px' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span style={{ color: 'var(--d-warn)', fontSize: 13 }}>!</span>
                <p className="font-inter font-semibold" style={{ fontSize: '15px', color: 'var(--d-fg)', letterSpacing: '-0.01em' }}>{p.t}</p>
              </div>
              <p className="font-inter text-sm" style={{ color: 'var(--d-fg-mute)', lineHeight: 1.55 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

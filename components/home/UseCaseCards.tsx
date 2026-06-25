const cases = [
  { t: 'Dentists & Healthcare', d: 'The provider, services, reviews, location, credentials, FAQs, and appointment path.' },
  { t: 'Attorneys & Law Firms', d: 'Practice areas, bar credentials, jurisdiction, case-type match, and consultation path.' },
  { t: 'Home Service Businesses', d: 'Services, service area, licensing, reviews, emergency availability, and quote path.' },
  { t: 'Real Estate Professionals', d: 'Agent identity, license, market specialization, transaction proof, and contact path.' },
  { t: 'Financial Advisors', d: 'Credentials, specialties, regulatory profiles, service area, and consultation path.' },
  { t: 'Specialty Trades', d: 'Capabilities, licensing, project proof, geographic coverage, and booking path.' },
  { t: 'Regional Independent Operators', d: 'A single, consistent identity across every directory, profile, and citation.' },
];

export default function UseCaseCards() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">WHO IT&apos;S FOR</div>
        <h2
          className="font-inter font-semibold mb-3"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--d-fg)', maxWidth: '720px' }}
        >
          Established operators AI <em className="serif">can&apos;t fully verify yet.</em>
        </h2>
        <p className="font-inter mb-12" style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '560px' }}>
          Different categories, same gap — real-world trust that isn&apos;t machine-readable. Here&apos;s
          what AI needs to verify for each.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => (
            <div key={c.t} className="d-card">
              <p className="font-inter font-semibold mb-2" style={{ fontSize: '15px', color: 'var(--d-fg)', letterSpacing: '-0.01em' }}>{c.t}</p>
              <p className="font-inter text-sm" style={{ color: 'var(--d-fg-mute)', lineHeight: 1.55 }}>
                <span style={{ color: 'var(--d-fg-dim)' }}>AI verifies:</span> {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

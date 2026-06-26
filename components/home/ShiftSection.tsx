import SearchShiftVisual from '@/components/home/SearchShiftVisual';

export default function ShiftSection() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div className="d-eyebrow mb-6">THE SHIFT</div>
        <h2
          className="font-inter font-semibold mb-4"
          style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: 'var(--d-fg)', maxWidth: '760px' }}
        >
          Search is moving from websites to <em className="serif">recommendations.</em>
        </h2>
        <p className="font-inter mb-12" style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--d-fg-dim)', fontWeight: 300, maxWidth: '600px' }}>
          AI systems don&apos;t just rank pages. They verify entities, compare proof, connect services
          to locations, and decide what can be safely recommended.
        </p>

        <SearchShiftVisual />
      </div>
    </section>
  );
}

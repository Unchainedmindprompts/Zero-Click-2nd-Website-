import type { HomeSlide } from './slides';

/**
 * CinematicSlide — the editorial text overlay for one slide.
 *
 * Real HTML text (always in the DOM for crawlability). The first slide uses
 * <h1>; the rest use <h2> so the page keeps a single primary heading. Entrance
 * animation is driven by the parent `.kc-slide-text.is-active` wrapper, so it
 * replays each time the slide becomes active.
 */
export default function CinematicSlide({
  slide,
  index,
  total,
}: {
  slide: HomeSlide;
  index: number;
  total: number;
}) {
  const Heading = index === 0 ? 'h1' : 'h2';

  return (
    <div
      className="kc-slide-copy relative h-full w-full mx-auto px-8 flex flex-col justify-end"
      style={{
        maxWidth: '1320px',
        paddingTop: '120px',
        paddingBottom: 'clamp(150px, 22vh, 240px)',
      }}
    >
      <div
        className="kc-slide-reveal d-eyebrow mb-6"
        style={{ animationDelay: '0.05s' }}
      >
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} — {slide.kicker}
      </div>

      <Heading
        className="kc-slide-focus font-inter font-semibold"
        style={{
          fontSize: 'clamp(36px, 6vw, 84px)',
          lineHeight: 1.03,
          letterSpacing: '-0.045em',
          color: 'var(--d-fg)',
          maxWidth: '18ch',
          textShadow: '0 2px 40px rgba(3,5,14,0.55)',
        }}
      >
        {slide.headline.map((line, li) =>
          line.accent ? (
            <span
              key={li}
              className="serif"
              style={{ display: 'block', color: 'var(--d-accent-2)', fontStyle: 'italic' }}
            >
              {line.text}
            </span>
          ) : (
            <span key={li} style={{ display: 'block' }}>
              {line.text}
            </span>
          ),
        )}
      </Heading>

      <p
        className="kc-slide-reveal font-inter mt-7"
        style={{
          animationDelay: '0.2s',
          fontSize: 'clamp(16px, 1.9vw, 20px)',
          lineHeight: 1.55,
          color: 'var(--d-fg-dim)',
          fontWeight: 300,
          maxWidth: '560px',
          textShadow: '0 2px 30px rgba(3,5,14,0.5)',
        }}
      >
        {slide.support}
      </p>
    </div>
  );
}

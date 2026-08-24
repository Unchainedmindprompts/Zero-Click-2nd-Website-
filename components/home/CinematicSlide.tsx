import Link from 'next/link';
import type { HomeSlide } from './slides';
import {
  HOME_SUPPORT_ELIGIBILITY,
  HOME_SUPPORT_HERO,
  REVIEW_CTA,
  REVIEW_HREF,
} from '@/lib/positioning';

/**
 * CinematicSlide — one homepage chapter from HOME_SLIDES.
 *
 * The same nodes render for every viewport. Desktop CSS stacks chapters as
 * carousel layers; phone CSS keeps them in normal document flow. Only the
 * first chapter uses <h1>; the rest use <h2>.
 */
const PALETTE = {
  dark: {
    fg: 'var(--d-fg)',
    accent: 'var(--d-accent-2)',
    dim: 'var(--d-fg-dim)',
    headShadow: '0 2px 40px rgba(3,5,14,0.55)',
    bodyShadow: '0 2px 30px rgba(3,5,14,0.5)',
    eyebrow: undefined as string | undefined,
  },
  light: {
    fg: '#0b101c',
    accent: '#1e44c8',
    dim: '#1f2735',
    headShadow: '0 0 1px rgba(255,255,255,0.55), 0 2px 20px rgba(255,255,255,0.9)',
    bodyShadow: '0 0 1px rgba(255,255,255,0.6), 0 1px 14px rgba(255,255,255,0.95)',
    eyebrow: '#222b3a',
  },
};

export default function CinematicSlide({
  slide,
  index,
  total,
  isActive,
  className,
  ariaHidden,
}: {
  slide: HomeSlide;
  index: number;
  total: number;
  isActive: boolean;
  className?: string;
  ariaHidden?: boolean;
}) {
  const Heading = index === 0 ? 'h1' : 'h2';
  const isIntro = index === 0;
  const c = slide.theme === 'light' ? PALETTE.light : PALETTE.dark;
  const themeClass = slide.theme === 'light' ? ' kc-chapter--light' : '';
  const introClass = isIntro ? ' kc-chapter--intro' : '';
  // Mobile-only overlay strength. Desktop still hides .kc-chapter-scrim.
  const overlayClass =
    slide.id === 'outcome' || slide.id === 'problem'
      ? ' kc-overlay-soft'
      : slide.id === 'proof'
        ? ' kc-overlay-proof'
        : ' kc-overlay-lift';

  return (
    <article
      className={`kc-chapter${themeClass}${introClass}${overlayClass} ${className ?? ''}`.trim()}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}: ${slide.kicker}`}
      aria-hidden={ariaHidden || undefined}
      data-slide={slide.id}
    >
      <div className={isIntro ? 'kc-intro-lead' : 'kc-chapter-body'}>
        <div
          className={`kc-chapter-media kc-slide-bg${isActive ? ' is-active' : ''}`}
          aria-hidden
        >
          {slide.image ? (
            <>
              {/* Decorative plate — accessible copy is the HTML text. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.image} alt="" className="kc-slide-img" />
              <div
                className={`kc-slide-bg__plate${
                  slide.theme === 'light' ? ' kc-slide-bg__plate--light' : ''
                }`}
              />
            </>
          ) : (
            <div className="w-full h-full" style={{ background: slide.bg }} />
          )}
          <div className="kc-chapter-scrim" />
        </div>

        <div
          className={`kc-slide-copy relative h-full w-full mx-auto px-8 flex flex-col justify-end${
            slide.steps?.length ? ' kc-slide-copy--journey' : ''
          }`}
          style={{
            maxWidth: '1320px',
            paddingTop: '120px',
            paddingBottom: 'clamp(150px, 22vh, 240px)',
          }}
        >
          <div className={isIntro ? 'kc-intro-copy' : undefined}>
            {!slide.brandEyebrow && (
              <div
                className="kc-slide-reveal d-eyebrow mb-6"
                style={{ animationDelay: '0.05s', ...(c.eyebrow ? { color: c.eyebrow } : {}) }}
              >
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} — {slide.kicker}
              </div>
            )}

            <Heading
              className="kc-slide-focus kc-slide-h font-inter font-semibold"
              style={{
                fontSize: 'clamp(32px, 4.4vw, 84px)',
                lineHeight: 1.08,
                letterSpacing: '-0.045em',
                color: c.fg,
                maxWidth: '18ch',
                textShadow: c.headShadow,
              }}
            >
              {slide.headline.map((line, li) =>
                line.accent ? (
                  <span
                    key={li}
                    className="serif"
                    style={{ display: 'block', color: c.accent, fontStyle: 'italic' }}
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
                color: c.dim,
                fontWeight: 300,
                maxWidth: '560px',
                textShadow: c.bodyShadow,
              }}
            >
              {isIntro ? (
                <>
                  <span className="kc-support-hero">{HOME_SUPPORT_HERO}</span>
                  {' '}
                  <span className="kc-support-more">{HOME_SUPPORT_ELIGIBILITY}</span>
                </>
              ) : (
                slide.support
              )}
            </p>

            {isIntro && (
              <Link href={REVIEW_HREF} className="d-btn d-btn-primary kc-hero-cta">
                {REVIEW_CTA} →
              </Link>
            )}

            {!isIntro && slide.support2 && (
              <p
                className="kc-slide-reveal font-inter mt-4"
                style={{
                  animationDelay: '0.28s',
                  fontSize: 'clamp(16px, 1.9vw, 20px)',
                  lineHeight: 1.55,
                  color: c.fg,
                  fontWeight: 450,
                  maxWidth: '560px',
                  textShadow: c.bodyShadow,
                }}
              >
                {slide.support2}
              </p>
            )}

            {slide.points && slide.points.length > 0 && (
              <ul
                className="kc-slide-reveal mt-5 flex flex-wrap gap-2"
                style={{ animationDelay: '0.32s', maxWidth: '640px' }}
              >
                {slide.points.map((point) => (
                  <li
                    key={point}
                    className="font-mono"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: c.fg,
                      border: `1px solid ${slide.theme === 'light' ? 'rgba(11,16,28,0.22)' : 'rgba(93,213,255,0.35)'}`,
                      borderRadius: '999px',
                      padding: '6px 12px',
                      textShadow: c.bodyShadow,
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {isIntro && slide.steps && slide.steps.length > 0 && (
            <div className="kc-journey-band">
              <ol
                className="kc-slide-reveal kc-journey"
                aria-label="Customer delegates an outcome, AI evaluates, then qualified businesses are recommended or contacted"
                style={{ animationDelay: '0.24s' }}
              >
                {slide.steps.map((step, i) => (
                  <li key={step} className="kc-journey-item">
                    <div className="kc-journey-rail" aria-hidden>
                      <span className="kc-journey-index font-mono" style={{ color: c.accent }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {i < (slide.steps?.length ?? 0) - 1 && <span className="kc-journey-stem" />}
                    </div>
                    <div
                      className="kc-journey-card font-mono"
                      style={{
                        color: c.fg,
                        borderColor: slide.theme === 'light' ? 'rgba(11,16,28,0.22)' : 'rgba(93,213,255,0.35)',
                        textShadow: c.bodyShadow,
                      }}
                    >
                      <span className="kc-journey-num font-mono" style={{ color: c.accent }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="kc-journey-label">{step}</span>
                    </div>
                    {i < (slide.steps?.length ?? 0) - 1 && (
                      <span
                        aria-hidden
                        className="kc-journey-arrow font-inter"
                        style={{ color: c.accent }}
                      >
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              {slide.support2 && (
                <p
                  className="kc-slide-reveal kc-journey-consequence font-inter mt-4"
                  style={{
                    animationDelay: '0.28s',
                    fontSize: 'clamp(16px, 1.9vw, 20px)',
                    lineHeight: 1.55,
                    color: c.fg,
                    fontWeight: 450,
                    maxWidth: '560px',
                    textShadow: c.bodyShadow,
                  }}
                >
                  {slide.support2}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

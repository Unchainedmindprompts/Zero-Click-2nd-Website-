import Link from 'next/link';
import { HOME_SLIDES, type HomeSlide } from './slides';
import {
  HOME_SUPPORT_HERO,
  HOME_SUPPORT_ELIGIBILITY,
  HOME_CONSEQUENCE,
  HOME_JOURNEY,
  REVIEW_HREF,
  REVIEW_CTA,
} from '@/lib/positioning';

function Headline({
  slide,
  as: Tag,
  id,
}: {
  slide: HomeSlide;
  as: 'h1' | 'h2';
  id?: string;
}) {
  return (
    <Tag id={id} className="kc-mhome-h font-inter font-semibold">
      {slide.headline.map((line, li) => (
        <span
          key={`${line.text}-${li}`}
          className={line.accent ? 'kc-mhome-accent serif' : undefined}
        >
          {line.text}
          {li < slide.headline.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

function Media({ slide }: { slide: HomeSlide }) {
  return (
    <div className="kc-mhome-media" aria-hidden>
      {slide.image ? (
        // Decorative section plate — text is the accessible content.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={slide.image} alt="" className="kc-mhome-img" />
      ) : (
        <div className="kc-mhome-img" style={{ background: slide.bg }} />
      )}
      <div className="kc-mhome-scrim" />
    </div>
  );
}

/**
 * MobileHomeStory — phone-width homepage. Same HOME_SLIDES / positioning
 * source as the desktop carousel, laid out as a normal scrolling page.
 * Hidden from desktop via .kc-home-mobile (see HomeExperience).
 */
export default function MobileHomeStory() {
  const [intro, behavior, problem, system, proof] = HOME_SLIDES;
  const chapters = [behavior, problem, system, proof];

  return (
    <div className="kc-mhome">
      <section className="kc-mhome-block kc-mhome-hero" aria-labelledby="kc-mhome-h1">
        <Media slide={intro} />
        <div className="kc-mhome-copy">
          <Headline slide={intro} as="h1" id="kc-mhome-h1" />
          <p className="kc-mhome-lede font-inter">{HOME_SUPPORT_HERO}</p>
          <Link href={REVIEW_HREF} className="d-btn d-btn-primary kc-mhome-cta">
            {REVIEW_CTA} →
          </Link>
        </div>
      </section>

      <section
        className="kc-mhome-block kc-mhome-journey"
        aria-label="How the customer journey now starts"
      >
        <div className="kc-mhome-copy">
          <ol className="kc-mhome-steps">
            {HOME_JOURNEY.map((step, i) => (
              <li key={step} className="kc-mhome-step">
                <span className="kc-mhome-step-num font-mono" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="kc-mhome-step-label font-inter">{step}</span>
              </li>
            ))}
          </ol>
          <p className="kc-mhome-consequence font-inter">{HOME_CONSEQUENCE}</p>
          <p className="kc-mhome-body font-inter">{HOME_SUPPORT_ELIGIBILITY}</p>
        </div>
      </section>

      {chapters.map((slide) => (
        <section
          key={slide.id}
          className="kc-mhome-block"
          aria-labelledby={`kc-mhome-${slide.id}`}
        >
          <Media slide={slide} />
          <div className="kc-mhome-copy">
            <p className="kc-mhome-kicker d-eyebrow">{slide.kicker}</p>
            <Headline slide={slide} as="h2" id={`kc-mhome-${slide.id}`} />
            <p className="kc-mhome-body font-inter">{slide.support}</p>
            {slide.support2 && (
              <p className="kc-mhome-body kc-mhome-body--strong font-inter">{slide.support2}</p>
            )}
            {slide.points && slide.points.length > 0 && (
              <ul className="kc-mhome-points">
                {slide.points.map((point) => (
                  <li key={point} className="font-mono">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="kc-mhome-block kc-mhome-close" aria-label="Request a review">
        <div className="kc-mhome-copy">
          <Link href={REVIEW_HREF} className="d-btn d-btn-primary kc-mhome-cta">
            {REVIEW_CTA} →
          </Link>
          <Link href="/faq" className="d-btn d-btn-ghost kc-mhome-cta">
            Start Here
          </Link>
        </div>
      </section>
    </div>
  );
}

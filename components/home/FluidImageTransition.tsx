import type { HomeSlide } from './slides';

/**
 * FluidImageTransition — the cinematic background layer stack.
 *
 * Every slide's visual is rendered as an absolutely-positioned full-bleed layer;
 * only the active one is opaque. The active layer animates opacity (crossfade) +
 * scale(1.08→1) + blur(16px→0) via CSS (.kc-slide-bg.is-active in globals.css).
 *
 * Visual-agnostic: a slide with `image` renders an <img> (object-cover); swap in
 * a <video> here later if motion art is wanted. Otherwise the CSS gradient `bg`
 * placeholder is used.
 */
export default function FluidImageTransition({
  slides,
  active,
}: {
  slides: HomeSlide[];
  active: number;
}) {
  return (
    <div className="absolute inset-0" aria-hidden>
      {slides.map((s, i) => (
        <div key={s.id} className={`kc-slide-bg ${i === active ? 'is-active' : ''}`}>
          {s.image ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt="" className="kc-slide-img" />
              {/* readability plate behind the copy. Dark slides darken the left
                  for white text; light slides get a faint light lift for dark
                  text and keep the image bright. */}
              <div
                className={`kc-slide-bg__plate ${
                  s.theme === 'light' ? 'kc-slide-bg__plate--light' : ''
                }`}
              />
            </>
          ) : (
            <div className="w-full h-full" style={{ background: s.bg }} />
          )}
        </div>
      ))}

      {/* Legibility: top + bottom scrim, then a soft vignette. */}
      <div className="kc-slider__scrim" />
      <div className="kc-slider__vignette" />
    </div>
  );
}

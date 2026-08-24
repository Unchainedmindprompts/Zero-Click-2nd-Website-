'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * HomeExperience — one homepage, two presentations.
 *
 * Desktop (≥768px) keeps the cinematic slider. Phone widths render the
 * vertical MobileHomeStory. CSS hides the unused pane immediately (no flash);
 * after mount we mark it inert so assistive tech and crawlers that execute JS
 * do not hear a second copy of the same HOME_SLIDES source.
 */
export default function HomeExperience({
  desktop,
  mobile,
}: {
  desktop: ReactNode;
  mobile: ReactNode;
}) {
  const deskRef = useRef<HTMLDivElement>(null);
  const mobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const sync = () => {
      const isMobile = mq.matches;
      const desk = deskRef.current;
      const mob = mobRef.current;
      if (desk) {
        desk.inert = isMobile;
        desk.setAttribute('aria-hidden', isMobile ? 'true' : 'false');
      }
      if (mob) {
        mob.inert = !isMobile;
        mob.setAttribute('aria-hidden', isMobile ? 'false' : 'true');
      }
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <>
      <div ref={deskRef} className="kc-home-desktop">
        {desktop}
      </div>
      <div ref={mobRef} className="kc-home-mobile">
        {mobile}
      </div>
    </>
  );
}

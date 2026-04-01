'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

interface Screenshot {
  src: string;
  caption: string;
}

export default function LightboxGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length));
  }, [screenshots.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % screenshots.length));
  }, [screenshots.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((img, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <figure className="flex flex-col gap-3">
              <button
                onClick={() => setActiveIndex(i)}
                className="overflow-hidden rounded-xl border w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a0723a] group"
                style={{ borderColor: 'rgba(160,114,58,0.2)' }}
                aria-label={`View full size: ${img.caption}`}
              >
                <div className="relative">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'rgba(10,8,6,0.35)' }}>
                    <svg className="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </button>
              <figcaption className="font-poppins text-sm text-center px-2" style={{ color: '#a0927a' }}>
                {img.caption}
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(10,8,6,0.92)' }}
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition-opacity"
            onClick={close}
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].caption}
              width={1200}
              height={750}
              className="rounded-xl object-contain max-h-[75vh] w-auto"
              style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
            />
            <p className="font-poppins text-sm text-center" style={{ color: 'rgba(240,232,216,0.75)' }}>
              {screenshots[activeIndex].caption}
            </p>
            <p className="font-poppins text-xs" style={{ color: 'rgba(240,232,216,0.4)' }}>
              {activeIndex + 1} / {screenshots.length} · ESC to close · ← → to navigate
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

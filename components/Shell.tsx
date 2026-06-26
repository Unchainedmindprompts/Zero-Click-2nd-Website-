'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NavOverlay from './NavOverlay';

/**
 * Shell — the persistent site frame.
 *
 * Logo stays top-left and the controls (Machine Read + menu) stay top-right
 * across the entire site; only the page content beneath changes. The menu
 * button opens the full-screen NavOverlay. This is the single site nav —
 * individual pages must NOT render their own header/nav (blog breadcrumbs
 * are page content, not site nav).
 */
export default function Shell() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the overlay on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Elevate the shell once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`kc-shell ${scrolled || open ? 'kc-shell--scrolled' : ''}`}>
        <div className="kc-shell__inner">
          {/* Brand — top-left, persistent */}
          <Link href="/" className="kc-brand" aria-label="KodeCite.ai home">
            <span style={{ color: 'var(--d-accent)', fontSize: '13px', lineHeight: 1 }}>▸</span>
            <span
              className="font-inter font-semibold"
              style={{ fontSize: '14px', letterSpacing: '-0.02em' }}
            >
              <span style={{ color: 'var(--kc-fg)' }}>KODECITE</span>
              <span style={{ color: 'var(--d-fg-mute)' }}>.AI</span>
            </span>
          </Link>

          {/* Controls — top-right, persistent */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="d-btn d-btn-primary d-btn-sm kc-shell-cta">
              Machine Read →
            </Link>
            <button
              type="button"
              className="kc-menu-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="kc-nav-overlay"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="kc-nav-overlay">
        <NavOverlay open={open} onClose={() => setOpen(false)} />
      </div>
    </>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About'    },
  { href: '/blog',     label: 'Blog'     },
  { href: '/contact',  label: 'Contact'  },
];

export default function Navigation() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  const elevated = scrolled || menuOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        style={{
          backgroundColor: elevated ? 'rgba(10,12,31,0.92)' : 'transparent',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: elevated ? '1px solid var(--d-line-s)' : '1px solid transparent',
          transition: 'background-color 300ms ease, border-color 300ms ease',
        }}
      >
        <div
          className="flex items-center justify-between h-16"
          style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px' }}
        >
          {/* Brand mark */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span style={{ color: 'var(--d-accent)', fontSize: '13px', lineHeight: 1 }}>▸</span>
            <span
              className="font-inter font-semibold"
              style={{ fontSize: '14px', letterSpacing: '-0.02em' }}
            >
              <span style={{ color: 'var(--d-fg)' }}>KODECITE</span>
              <span style={{ color: 'var(--d-fg-mute)' }}>.AI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-sm font-medium transition-colors duration-200"
                style={{ color: isActive(link.href) ? 'var(--d-accent)' : 'var(--d-fg-dim)' }}
                onMouseEnter={(e) => {
                  if (!isActive(link.href))
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--d-fg)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = isActive(link.href)
                    ? 'var(--d-accent)'
                    : 'var(--d-fg-dim)';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="d-btn d-btn-primary d-btn-sm hidden sm:inline-flex"
            >
              Machine Read →
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className="block w-5 h-px transition-all duration-300 origin-center"
                style={{
                  backgroundColor: 'var(--d-fg-dim)',
                  transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  backgroundColor: 'var(--d-fg-dim)',
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300 origin-center"
                style={{
                  backgroundColor: 'var(--d-fg-dim)',
                  transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="md:hidden fixed inset-0 flex flex-col"
        style={{
          top: '64px',
          backgroundColor: 'var(--d-bg)',
          borderTop: '1px solid var(--d-line)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 300ms cubic-bezier(0.4,0,0.2,1), opacity 300ms ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
          zIndex: 40,
        }}
      >
        <div className="flex flex-col gap-1 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter font-medium text-xl py-3 px-4 rounded-xl transition-colors duration-200"
              style={{
                color: isActive(link.href) ? 'var(--d-accent)' : 'var(--d-fg)',
                backgroundColor: isActive(link.href)
                  ? 'rgba(93,213,255,0.06)'
                  : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-5 mt-3" style={{ borderTop: '1px solid var(--d-line)' }}>
            <Link href="/contact" className="d-btn d-btn-primary w-full justify-center">
              Machine Read →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

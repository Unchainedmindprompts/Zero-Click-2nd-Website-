'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/services', label: 'What we build' },
  { href: '/case-studies', label: 'The evidence' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Insights' },
  { href: '/about', label: 'About' },
];

export default function Shell() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuRef.current?.focus(); }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="site-brand" href="/" aria-label="Kodecite home">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span>kodecite<span className="brand-dot">.</span></span>
          </Link>
          <nav className="desktop-navigation" aria-label="Main navigation">
            {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}
          </nav>
          <div className="header-actions">
            <Link className="header-review" href="/machine-read">Free readiness review <span aria-hidden="true">↗</span></Link>
            <button ref={menuRef} className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
          </div>
        </div>
        {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {[...links, { href: '/why-now', label: 'Why now' }, { href: '/faq', label: 'Your questions' }, { href: '/contact', label: 'Contact' }, { href: '/machine-read', label: 'Free readiness review ↗' }].map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}
        </nav>}
      </header>
    </>
  );
}

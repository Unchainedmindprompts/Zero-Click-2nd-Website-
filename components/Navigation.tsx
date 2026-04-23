'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/why-now', label: 'Why Now' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Wood band — 7px gradient bar at the very top */}
      <div
        style={{
          height: '7px',
          background: 'linear-gradient(90deg, #3e1f08 0%, #7a5228 10%, #a0723a 22%, #c8945a 34%, #ddb888 46%, #a0723a 58%, #7a5228 70%, #c8945a 82%, #3e1f08 100%)',
        }}
      />

      {/* Nav bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#f8f5f0]/97 nav-blur shadow-sm'
            : 'bg-[#f8f5f0]'
        }`}
        style={{ borderBottom: '1px solid rgba(100,70,30,0.25)' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-poppins font-bold text-lg tracking-tight">
                <span style={{ color: '#1a56db' }}>K</span>
                <span style={{ color: '#0a0806' }}>ODE</span>
                <span style={{ color: '#1a56db' }}>C</span>
                <span style={{ color: '#0a0806' }}>ITE</span>
                <span style={{ color: '#a0723a' }}>.</span>
                <span style={{ color: '#0a0806' }}>AI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-poppins font-medium transition-colors duration-200"
                  style={{
                    color: pathname === link.href ? '#a0723a' : '#6a5a48',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="font-poppins font-semibold text-sm text-white px-5 py-2.5 rounded-md whitespace-nowrap transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: '#1a56db' }}
              >
                AI Visibility Check
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
                style={{ backgroundColor: '#0a0806' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
                style={{ backgroundColor: '#0a0806' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
                style={{ backgroundColor: '#0a0806' }}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '87px', backgroundColor: '#f8f5f0' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-poppins font-semibold text-2xl transition-colors"
              style={{
                color: pathname === link.href ? '#a0723a' : '#0a0806',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-poppins font-semibold text-base text-white px-8 py-3.5 rounded-md mt-4 text-center"
            style={{ backgroundColor: '#1a56db' }}
          >
            AI Visibility Check
          </Link>
        </div>
      </div>
    </header>
  );
}

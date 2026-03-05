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
    { href: '/services', label: 'Services' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#07070f]/95 nav-blur border-b border-white/5 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-poppins font-bold text-lg tracking-tight">
              <span className="text-[#D4A94A]">ZERO</span>
              <span className="text-white"> CLICK</span>
              <span className="text-white"> STRATEGIES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-poppins font-medium text-sm transition-colors duration-200 hover:text-[#D4A94A] ${
                  pathname === link.href ? 'text-[#D4A94A]' : 'text-[#8A9BB5]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-gold text-sm font-bold px-5 py-2.5 rounded-md whitespace-nowrap"
            >
              Get Your Free AEO Audit
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
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#07070f] z-40 flex flex-col transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '80px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-poppins font-semibold text-2xl transition-colors hover:text-[#D4A94A] ${
                pathname === link.href ? 'text-[#D4A94A]' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold text-base font-bold px-8 py-3.5 rounded-md mt-4 text-center"
          >
            Get Your Free AEO Audit
          </Link>
        </div>
      </div>
    </header>
  );
}

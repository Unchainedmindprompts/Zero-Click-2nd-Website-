'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about',    label: 'About' },
  { href: '/blog',     label: 'Blog' },
  { href: '/faq',      label: 'FAQ' },
  { href: '/contact',  label: 'Contact' },
  { href: '/contact',  label: 'Machine Read' },
];

/**
 * NavOverlay — full-screen navigation that opens from the persistent shell.
 *
 * Links live in the DOM at all times (crawlable); the overlay toggles
 * visibility/opacity. The inner <nav> is keyed on `open` so the staggered
 * entrance (.kc-stagger-in) replays each time the overlay opens.
 */
export default function NavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <div
      className={`kc-overlay ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <nav className="kc-overlay__nav" key={open ? 'open' : 'closed'}>
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="kc-overlay__link"
            style={{
              animationDelay: open ? `${0.1 + i * 0.06}s` : '0s',
              opacity: isActive(link.href) ? 1 : undefined,
            }}
          >
            <span className="kc-overlay__index" aria-hidden>
              {String(i + 1).padStart(2, '0')}
            </span>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="kc-overlay__meta">
        <span>KODECITE.AI</span>
        <span>ENTITY INFRASTRUCTURE FOR THE AI WEB</span>
      </div>
    </div>
  );
}

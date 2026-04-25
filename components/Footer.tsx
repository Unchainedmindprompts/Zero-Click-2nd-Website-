import Link from 'next/link';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about'    },
  { label: 'Blog',     href: '/blog'     },
  { label: 'Contact',  href: '/contact'  },
  { label: 'Pricing',  href: '/pricing'  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--d-line)', backgroundColor: 'var(--d-bg)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 32px 40px' }}>

        {/* Top — brand + links */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

          <div>
            <Link href="/" className="d-footer-link inline-flex items-center gap-2 mb-5">
              <span style={{ color: 'var(--d-accent)', fontSize: '13px', lineHeight: 1 }}>▸</span>
              <span
                className="font-inter font-semibold"
                style={{ fontSize: '14px', letterSpacing: '-0.02em' }}
              >
                <span style={{ color: 'var(--d-fg)' }}>KODECITE</span>
                <span style={{ color: 'var(--d-fg-mute)' }}>.AI</span>
              </span>
            </Link>
            <p
              className="font-inter"
              style={{
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: 1.65,
                color: 'var(--d-fg-dim)',
                maxWidth: '280px',
              }}
            >
              Built once.{' '}
              <em className="serif">Owned forever.</em>{' '}
              Found by AI.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3 content-start pt-1">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="d-footer-link font-inter text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--d-line)' }}
        >
          <p
            className="font-mono text-xs"
            style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.12em' }}
          >
            © 2026 KODECITE.AI
          </p>
          <p
            className="font-mono text-xs"
            style={{ color: 'var(--d-fg-mute)', letterSpacing: '0.1em' }}
          >
            FOUNDATION BUILD · NO RETAINER · YOU OWN IT
          </p>
        </div>

      </div>
    </footer>
  );
}

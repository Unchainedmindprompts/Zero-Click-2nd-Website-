import Link from 'next/link';

const footerLinks = [
  { label: 'Start Here', href: '/faq'      },
  { label: 'Services',   href: '/services' },
  { label: 'Insights',   href: '/blog'     },
  { label: 'About',      href: '/about'    },
  { label: 'Contact',    href: '/contact'  },
  { label: 'Pricing',    href: '/pricing'  },
];

// Service Areas — location landing pages. Add a line as each page goes live
// (Spokane, North Idaho, Post Falls next).
const serviceAreas = [
  { label: "Coeur d'Alene", href: '/locations/coeur-dalene' },
  { label: 'Spokane', href: '/locations/spokane' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.10)',
        /* transparent so the fixed urban background continues behind the footer;
           a gentle settle toward the bottom keeps the fine print legible */
        background: 'linear-gradient(to bottom, transparent 0%, rgba(3, 7, 14, 0.30) 55%, rgba(2, 5, 11, 0.55) 100%)',
      }}
    >
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

          <div className="flex flex-col sm:flex-row gap-x-16 gap-y-8">
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

            {/* Service Areas */}
            <div className="pt-1">
              <p className="font-mono mb-3" style={{ fontSize: '10px', letterSpacing: '0.18em', color: 'var(--d-fg-mute)' }}>
                SERVICE AREAS
              </p>
              <nav className="flex flex-col gap-2">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="d-footer-link font-inter text-sm"
                  >
                    {area.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--d-line-s)' }}
        >
          <p
            className="font-mono text-xs"
            style={{ color: 'var(--d-fg-dim)', letterSpacing: '0.12em' }}
          >
            © 2026 KODECITE.AI
          </p>
          <p
            className="font-mono text-xs"
            style={{ color: 'var(--d-fg-dim)', letterSpacing: '0.1em' }}
          >
            FOUNDATION BUILD · NO RETAINER · YOU OWN IT
          </p>
        </div>

      </div>
    </footer>
  );
}

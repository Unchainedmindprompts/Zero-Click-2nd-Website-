'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = 2026;

  const columns = [
    {
      title: 'Services',
      links: [
        { href: '/services#website', label: 'Next.js Websites' },
        { href: '/services#content', label: 'AEO Content' },
        { href: '/services#campaigns', label: 'Facebook Campaigns' },
        { href: '/services#schema', label: 'Schema Markup' },
      ],
    },
    {
      title: 'Our Work',
      links: [
        { href: '/our-work', label: 'Our Work' },
      ],
    },
    {
      title: 'Blog',
      links: [
        { href: '/blog', label: 'All Articles' },
        { href: '/blog', label: 'AEO & AI Search' },
        { href: '/blog', label: 'Website Performance' },
        { href: '/blog', label: 'Facebook Ads' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { href: '/contact', label: 'Start the Conversation' },
        { href: '/contact', label: 'Get a Quote' },
        { href: '/about', label: 'About Us' },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: '#0a0806', borderTop: '3px solid #7a5228' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-poppins font-bold text-lg tracking-tight">
                <span style={{ color: '#1a56db' }}>K</span>
                <span style={{ color: 'rgba(240,232,216,0.9)' }}>ODE</span>
                <span style={{ color: '#1a56db' }}>C</span>
                <span style={{ color: 'rgba(240,232,216,0.9)' }}>ITE</span>
                <span style={{ color: '#c8945a' }}>.</span>
                <span style={{ color: 'rgba(240,232,216,0.9)' }}>AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed font-poppins" style={{ color: 'rgba(240,232,216,0.75)' }}>
              Built for AI Search.<br />Built for Growth.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-poppins font-semibold text-sm mb-4 tracking-wide uppercase" style={{ color: 'rgba(240,232,216,0.9)' }}>
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link text-sm font-poppins"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(160,114,58,0.12)' }}>
          <p className="text-sm font-poppins" style={{ color: 'rgba(240,232,216,0.65)' }}>
            © {currentYear} KodeCite.ai · Post Falls, Idaho
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61586478347376"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ color: 'rgba(240,232,216,0.65)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1877F2')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,232,216,0.65)')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <p className="text-xs font-poppins" style={{ color: 'rgba(240,232,216,0.55)' }}>
              Most businesses are invisible to AI. We fix that.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

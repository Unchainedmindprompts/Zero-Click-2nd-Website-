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
      title: 'Case Studies',
      links: [
        { href: '/case-studies#luxe', label: 'Luxe Window Works' },
        { href: '/case-studies#inw', label: 'INW Basecamp' },
        { href: '/case-studies', label: 'View All' },
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
    <footer className="bg-[#0A1628] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-poppins font-bold text-lg tracking-tight">
                <span className="text-[#D4A94A]">ZERO</span>
                <span className="text-white"> CLICK</span>
                <br />
                <span className="text-white">STRATEGIES</span>
              </span>
            </Link>
            <p className="text-[#8A9BB5] text-sm leading-relaxed font-poppins">
              Built for AI Search.<br />Built for Growth.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-poppins font-semibold text-white text-sm mb-4 tracking-wide uppercase">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#8A9BB5] text-sm hover:text-[#D4A94A] transition-colors font-poppins"
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
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8A9BB5] text-sm font-poppins">
            © {currentYear} Zero Click Strategies · Post Falls, Idaho
          </p>
          <p className="text-[#8A9BB5] text-xs font-poppins">
            Most businesses are invisible to AI. We fix that.
          </p>
        </div>
      </div>
    </footer>
  );
}

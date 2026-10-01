import Link from 'next/link';

export default function Footer() {
  return <footer className="site-footer"><div>
    <div className="site-footer-top"><div><Link href="/" className="site-brand">kodecite<span className="brand-dot">.</span></Link><p className="footer-description">Your business, clearly understood.<br />Your customer’s next step, made easier.</p><p className="footer-description" style={{ fontSize: 12, marginTop: 18 }}>Based in North Idaho.<br />Built for service businesses anywhere.</p></div>
    <div><p className="footer-nav-title">EXPLORE</p><nav aria-label="Footer navigation">{[['What we build','/services'],['Pricing & ownership','/pricing'],['The evidence','/case-studies'],['Insights','/blog'],['About Mark & Kodecite','/about'],['Why now','/why-now']].map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}</nav></div>
    <div><p className="footer-nav-title">LET’S START A CONVERSATION</p><nav aria-label="Contact and service areas">{[['Free readiness review →','/machine-read'],['Your questions, answered','/faq'],['Contact','/contact'],["Coeur d’Alene",'/locations/coeur-dalene'],['Spokane','/locations/spokane'],['North Idaho','/locations/north-idaho']].map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}</nav></div></div>
    <div className="site-footer-bottom"><span>© 2026 KODECITE.AI</span><span>BUSINESS-OWNED WEBSITES & CONNECTED BUSINESS INFORMATION</span><span>NO MANDATORY RETAINER</span></div>
  </div></footer>;
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BusinessJourney from '@/components/home/BusinessJourney';

export const metadata: Metadata = {
  title: 'Kodecite — Make your business ready for your customer’s AI assistant',
  description: 'Make your business easy for your customer’s AI assistant to understand, trust and do business with. Owned websites, connected business information and carefully scoped next steps.',
  alternates: { canonical: 'https://www.kodecite.ai/' },
};
const schema = {
  '@context': 'https://schema.org', '@type': 'WebPage', '@id': 'https://www.kodecite.ai/#webpage', url: 'https://www.kodecite.ai/',
  name: 'Kodecite — Make your business ready for your customer’s AI assistant', description: metadata.description,
  inLanguage: 'en-US', isPartOf: { '@id': 'https://www.kodecite.ai/#website' }, about: { '@id': 'https://www.kodecite.ai/#business' },
};
const businessParts = [
  { n: '01', title: 'Who you are', text: 'Your business, your people and your service area. One consistent identity, wherever the customer’s assistant looks.' },
  { n: '02', title: 'What you offer', text: 'Services, products, project fit and conditions. Enough detail to tell a promising match from the wrong one.' },
  { n: '03', title: 'Why trust you', text: 'Real work, credentials, reviews and experience, connected to evidence that supports the claim.' },
  { n: '04', title: 'How to move forward', text: 'A clear contact path today. Where separately connected, a defined action with permission, required details and an honest result.' },
];

export default function HomePage() {
  return <div className="business-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="home-hero home-wrap">
      <div className="home-hero-copy">
        <p className="home-eyebrow"><span /> YOUR BUSINESS. YOUR CUSTOMER’S AI.</p>
        <h1>Make your business easy for your customer’s AI assistant to <em>understand, trust and do business with.</em></h1>
        <p className="home-lead">Your customer wants the right outcome with less work. As they hand research and next steps to AI, your business needs to be clear enough to evaluate and easy enough to engage.</p>
        <div className="home-actions"><Link className="home-button" href="/machine-read">Get your free readiness review <span>→</span></Link><Link className="home-text-link" href="/services">See what we build <span>→</span></Link></div>
        <p className="home-fineprint">A written review within two business days. A clear place to start.</p>
      </div>
      <BusinessJourney />
    </section>
    <div className="home-principles"><div className="home-wrap"><span>Built around your real business</span><span>You own the website and accounts</span><span>No mandatory retainer</span></div></div>
    <section className="home-section home-wrap home-intro">
      <p className="home-eyebrow">01 / THE CUSTOMER IS STILL THE POINT</p>
      <div className="home-editorial-grid"><h2>Less searching.<br />Less chasing.<br /><em>One useful next step.</em></h2><div><p className="home-large-copy">People don’t want more tabs. They want help choosing a business and getting something done.</p><p>An assistant can reduce the work of comparing options, checking the details and making contact. That changes what a business needs to publish: enough information to answer the customer’s real question, and a dependable way to move it forward.</p><p>Kodecite builds the website and connected business information behind that experience. AI search engines, personal assistants and outside agents can encounter the same facts. Your customers can read them too.</p><Link className="home-text-link" href="/why-now">Why this matters now <span>→</span></Link></div></div>
    </section>
    <section className="home-section home-foundation"><div className="home-wrap">
      <div className="home-section-heading"><div><p className="home-eyebrow">02 / GIVE THE ASSISTANT THE WHOLE BUSINESS</p><h2>Turn scattered information<br />into a <em>clear picture.</em></h2></div><p>A useful digital representation of your business starts with what’s true. Then it connects the details that matter to a decision.</p></div>
      <div className="business-parts">{businessParts.map(part => <article key={part.n}><span>{part.n}</span><h3>{part.title}</h3><p>{part.text}</p></article>)}</div>
      <p className="home-context-note">The website, structured data and discovery files are ways to publish that picture. No single file makes every AI system read or recommend you.</p>
    </div></section>
    <section className="home-section home-wrap home-action-section"><div><p className="home-eyebrow">03 / MAKE THE NEXT STEP WORK</p><h2>Understanding is the start.<br /><em>A useful response is the goal.</em></h2><p className="home-lead">When your business is ready, we connect one well-defined action: a consultation request, a qualified inquiry or a handoff to your team.</p><p>The assistant needs to know what it can ask for, what the customer must provide, and what the result means. You decide the boundaries. A person stays involved wherever judgment or confirmation is needed.</p><Link className="home-text-link" href="/services#agent-capability">Explore an Agent Capability Build <span>→</span></Link></div>
      <div className="action-receipt"><div className="receipt-head"><span>THE STANDARD FOR A USEFUL NEXT STEP</span><span aria-hidden="true">→</span></div><ol><li><span>1</span><div><h3>Known fit</h3><p>The service and area match the request.</p></div></li><li><span>2</span><div><h3>Clear permission</h3><p>The customer authorizes the request. Your rules define what is allowed.</p></div></li><li><span>3</span><div><h3>Confirmed result</h3><p>Received, rejected or handed to a human. Never a success message for work that did not happen.</p></div></li></ol><p className="receipt-bottom">A consultation request ≠ a confirmed appointment</p></div>
    </section>
    <section className="home-proof"><div className="home-wrap home-proof-grid"><div className="proof-photo"><Image src="/luxe-window-works-hero.png" alt="Luxe Window Works website, the documented Kodecite consultation-request case study" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>FIELD NOTES / LUXE WINDOW WORKS</span></div><div className="home-proof-copy"><p className="home-eyebrow">04 / WORK YOU CAN INSPECT</p><h2>From being found<br />to a request<br /><em>that reached the business.</em></h2><p>Luxe Window Works is the working example behind the approach. The documented production test followed an outside AI from capability discovery to an authorized consultation request delivered by email.</p><ul><li>Repeated requests did not create duplicate delivery</li><li>A conflicting identity was rejected</li><li>Human follow-up remained the next step</li></ul><p className="proof-scope">This is evidence of the recorded test, not a new delivery test or a promise of ongoing availability. The capability requests a consultation; it does not book, price or take payment.</p><Link className="home-text-link" href="/blog/from-recommended-to-actionable-luxe-window-works">Read the implementation and evidence <span>→</span></Link></div></div></section>
    <section className="home-section home-wrap"><div className="home-section-heading"><div><p className="home-eyebrow">05 / A PRACTICAL PLACE TO BEGIN</p><h2>Build the foundation.<br /><em>Then connect the right action.</em></h2></div><p>Clear scope. Business-owned infrastructure. Start with what your business actually needs.</p></div>
      <div className="home-offers"><article className="offer-primary"><p className="offer-label">THE OWNED FOUNDATION</p><h3>Foundation Build</h3><p className="offer-price">$4,995 <span>one-time</span></p><p>An owned, high-performance website with a consistent business identity, connected services and evidence, discoverable information, and a map of possible actions.</p><ul><li>You own the site, code and accounts</li><li>No mandatory retainer</li><li>A live action endpoint is scoped separately</li></ul><Link className="home-button" href="/pricing">See what’s included <span>→</span></Link></article><div className="offer-secondary"><article><p className="offer-label">WHEN THE NEXT STEP IS CLEAR</p><h3>Agent Capability Build</h3><p>Connect one approved action with the right inputs, safeguards, result checks and human follow-up. Scoped after we understand your process.</p><Link className="home-text-link" href="/services#agent-capability">Explore the action build <span>→</span></Link></article><article><p className="offer-label">FOR AN EXISTING PLATFORM</p><h3>Platform Capability Layer</h3><p>An application-only pilot for selected businesses keeping WordPress, Wix or Squarespace. An owned layer alongside the website you already use.</p><Link className="home-text-link" href="/services#platform-pilot">Explore the pilot <span>→</span></Link></article></div></div>
    </section>
    <section className="home-founder home-wrap"><Image src="/mark-abplanalp.png" alt="Mark Abplanalp, founder of Kodecite" width={112} height={136} /><div><p className="home-eyebrow">BUILT BY AN OPERATOR</p><p>Thirty years in sales. Real service-business experience. The person who scopes the work is the person who builds it.</p><span>Mark Abplanalp · Founder · North Idaho</span><Link className="home-text-link" href="/about">Meet the person doing the work <span>→</span></Link></div></section>
    <section className="home-final"><div className="home-wrap"><p className="home-eyebrow">START WITH YOUR BUSINESS</p><h2>What can your customer’s<br />assistant <em>understand today?</em></h2><p>Get a plain-English review of your identity, services, evidence and next-step gaps. Then decide what’s worth building.</p><Link className="home-button" href="/machine-read">Get your free readiness review <span>→</span></Link><span className="home-fineprint">Written within two business days</span></div></section>
  </div>;
}

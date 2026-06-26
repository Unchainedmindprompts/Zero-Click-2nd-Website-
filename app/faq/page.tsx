import type { Metadata } from 'next';
import Link from 'next/link';
import SecondaryPageShell from '@/components/SecondaryPageShell';

export const metadata: Metadata = {
  title: 'FAQ — AI Search & Entity Graphs',
  description:
    'Answers to common questions about AI search visibility, entity graphs, and why most business websites are invisible to AI systems.',
  alternates: { canonical: 'https://www.kodecite.ai/faq' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.kodecite.ai/faq/#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Answer Engine Optimization (AEO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Answer Engine Optimization is the practice of building your website and online presence so that AI tools — like ChatGPT, Perplexity, Google AI Overview, Microsoft Copilot, and Bing — surface your business when someone asks a relevant question. Traditional SEO was built for Google's blue links. AEO is built for the way people actually search now: asking questions and trusting the answer they get back. Most businesses have zero AEO infrastructure. That's the gap KodeCite closes.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get my business to show up in ChatGPT or Google AI Overview?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "AI engines don't rank websites the way Google traditionally does. They look for verified, consistent, structured information about a business across multiple trusted sources — your website, your Google Business Profile, your directories, your reviews, and the structured data markup on every page. When all of those signals point to the same entity and tell the same story, AI engines are far more likely to treat your business as credible and surface it in responses. When they don't, you're invisible. KodeCite builds the full infrastructure that makes that consistency possible.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is an entity graph and why does it matter for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An entity graph is the complete web of connected, verified information that proves your business is real, credible, and authoritative. It includes your website, Google Business Profile, Bing Places, Apple Maps, Yelp, Yellow Pages, BBB, Facebook Business, and any industry-specific directories relevant to your vertical. Every one of those profiles points back to the same business name, address, phone number, and website — and mirrors the structured data language on your site. Google and AI engines use this graph to verify your identity. Without it, you're just a website. With it, you're a trusted business entity.",
      },
    },
    {
      '@type': 'Question',
      name: "What's wrong with my current website?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Probably nothing visually. The problem is almost always invisible. Most small business websites — including those built on WordPress, Wix, Squarespace, and even national brand platforms — have broken schema markup, duplicate structured data, missing entity signals, and no connection to a verified directory footprint. They were built to look good and rank for keywords. They were never built to be understood by AI engines. That's not a design problem — it's an infrastructure problem. And it's fixable.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is schema markup and why do most business websites get it wrong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Schema markup is structured data code — specifically JSON-LD — that tells search engines and AI tools exactly what your business is, what it offers, where it operates, who runs it, and why it's credible. It's the difference between a search engine guessing what your page is about and knowing with certainty. Most small business websites either have no schema, use auto-generated schema with errors, or have conflicting schema blocks that contradict each other. Duplicate and broken schema is one of the most common and most damaging technical issues KodeCite finds on existing sites.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is a KodeCite website just a regular website with better SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. A KodeCite build is a digital infrastructure asset — not a website with a few extra features. The difference is the stack: Next.js on Vercel, a complete JSON-LD schema layer, a verified entity graph across every major directory, and content built specifically for AI citation. This is the same technical foundation that SaaS companies and enterprise brands use. Most small businesses have never had access to it because the agencies serving them don't know how to build it. The result is a compounding asset — something that gets stronger and more visible over time, not a static brochure that decays.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does "compounding digital asset" mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Every article published, every review earned, every directory citation added, and every page indexed makes the entire entity stronger — not just that individual piece. The schema signals reinforce each other. The directory listings verify the website. The content gets cited by AI engines, which increases authority, which improves rankings, which earns more citations. Over time, a well-built entity graph compounds the way a solid investment does — quietly and consistently. A template website on a subscription platform doesn't work this way. It's a lease. A KodeCite build is a deed.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do customer reviews help with AI search rankings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Reviews are trust signals — but most businesses let them sit passively on Google and Yelp without doing anything to amplify them. KodeCite takes a different approach: we take real customer reviews, create structured content and articles from them, retrieve the direct Google review URL, and link everything together with the right schema markup. The result is that each review does significantly more work than it would sitting alone on a third-party platform. The review becomes part of your entity's credibility story — indexed, structured, and readable by AI engines.",
      },
    },
    {
      '@type': 'Question',
      name: "I'm a realtor. How does KodeCite handle my listings?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Every active listing becomes its own page on your site with full per-page schema markup — property details, location, price, agent credentials. When the home sells, that page doesn't disappear. It converts to a sold property page with the final sale price and stays indexed. Over time, as you close more transactions, you build a permanent, compounding record of your sales history on your own domain — not buried in Zillow or a third-party platform you don't control. The listing URLs stay clean and off your main navigation, so your site looks polished while the asset base quietly grows underneath it.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the website KodeCite builds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You do. Completely. The site lives in your own Vercel account. The code lives in your own GitHub repository. KodeCite builds the infrastructure and hands you the keys. There are no monthly platform fees to keep the lights on, no proprietary system that holds your content hostage, and no dependency on KodeCite to keep your site running. We offer optional ongoing support and content retainers — but those are your choice, not a requirement. You own the asset outright from day one.",
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of businesses benefit most from what KodeCite builds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "KodeCite works best for established, owner-operated businesses that already have a real reputation — good reviews, genuine expertise, and a track record in their market. The infrastructure amplifies what's already there. It's not a shortcut for a brand new business with no history. The ideal KodeCite client is a professional service business — a law firm, financial advisor, realtor, med spa, contractor, or specialty retailer — that is already good at what they do but is invisible in the places their best future customers are looking.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on the query, the competition, and how established the business already is — but KodeCite clients have seen early AI visibility signals in as little as 30 days on a brand new domain. Entity graph signals like directory listings typically start surfacing in Bing and Google within 60–90 days as crawlers verify the cross-platform consistency. The compounding effect builds over months and years, not overnight. What makes KodeCite different from paid advertising is that the foundation doesn't disappear when a budget runs out — the infrastructure keeps working.",
      },
    },
    {
      '@type': 'Question',
      name: "Isn't AEO just rebranded SEO?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Partially — and that's a fair question. The foundational practices overlap: consistent directory listings, structured data, helpful content, strong reviews. Good SEO has always included these things. What's genuinely new is where visibility now happens. A growing share of people never click a search result at all — they ask ChatGPT, Perplexity, or Google AI Overview and trust the answer they get back. Those systems evaluate businesses differently than Google's traditional crawler does. They weight entity consistency, structured data signals, and authoritative content in ways that most small business websites aren't built to support. So yes — the practices are related. What's changed is the destination. KodeCite builds for both.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ',  item: 'https://www.kodecite.ai/faq' },
  ],
};

const faqs: { q: string; a: string | string[] }[] = [
  {
    q: 'What is Answer Engine Optimization (AEO)?',
    a: "Answer Engine Optimization is the practice of building your website and online presence so that AI tools — like ChatGPT, Perplexity, Google AI Overview, Microsoft Copilot, and Bing — surface your business when someone asks a relevant question. Traditional SEO was built for Google's blue links. AEO is built for the way people actually search now: asking questions and trusting the answer they get back. Most businesses have zero AEO infrastructure. That's the gap KodeCite closes.",
  },
  {
    q: 'How do I get my business to show up in ChatGPT or Google AI Overview?',
    a: "AI engines don't rank websites the way Google traditionally does. They look for verified, consistent, structured information about a business across multiple trusted sources — your website, your Google Business Profile, your directories, your reviews, and the structured data markup on every page. When all of those signals point to the same entity and tell the same story, AI engines are far more likely to treat your business as credible and surface it in responses. When they don't, you're invisible. KodeCite builds the full infrastructure that makes that consistency possible.",
  },
  {
    q: 'What is an entity graph and why does it matter for my business?',
    a: "An entity graph is the complete web of connected, verified information that proves your business is real, credible, and authoritative. It includes your website, Google Business Profile, Bing Places, Apple Maps, Yelp, Yellow Pages, BBB, Facebook Business, and any industry-specific directories relevant to your vertical. Every one of those profiles points back to the same business name, address, phone number, and website — and mirrors the structured data language on your site. Google and AI engines use this graph to verify your identity. Without it, you're just a website. With it, you're a trusted business entity.",
  },
  {
    q: "What's wrong with my current website?",
    a: [
      "Probably nothing visually. The problem is almost always invisible.",
      "Most small business websites — including those built on WordPress, Wix, Squarespace, and even national brand platforms — have broken schema markup, duplicate structured data, missing entity signals, and no connection to a verified directory footprint. They were built to look good and rank for keywords. They were never built to be understood by AI engines. That's not a design problem — it's an infrastructure problem. And it's fixable.",
    ],
  },
  {
    q: 'What is schema markup and why do most business websites get it wrong?',
    a: "Schema markup is structured data code — specifically JSON-LD — that tells search engines and AI tools exactly what your business is, what it offers, where it operates, who runs it, and why it's credible. It's the difference between a search engine guessing what your page is about and knowing with certainty. Most small business websites either have no schema, use auto-generated schema with errors, or have conflicting schema blocks that contradict each other. Duplicate and broken schema is one of the most common — and most damaging — technical issues KodeCite finds on existing sites.",
  },
  {
    q: 'Is a KodeCite website just a regular website with better SEO?',
    a: [
      "No. A KodeCite build is a digital infrastructure asset — not a website with a few extra features.",
      "The difference is the stack: Next.js on Vercel, a complete JSON-LD schema layer, a verified entity graph across every major directory, and content built specifically for AI citation. This is the same technical foundation that SaaS companies and enterprise brands use. Most small businesses have never had access to it because the agencies serving them don't know how to build it.",
      "The result is a compounding asset — something that gets stronger and more visible over time, not a static brochure that decays.",
    ],
  },
  {
    q: 'What does “compounding digital asset” mean?',
    a: [
      "Every article published, every review earned, every directory citation added, and every page indexed makes the entire entity stronger — not just that individual piece. The schema signals reinforce each other. The directory listings verify the website. The content gets cited by AI engines, which increases authority, which improves rankings, which earns more citations.",
      "Over time, a well-built entity graph compounds the way a solid investment does — quietly and consistently. A template website on a subscription platform doesn't work this way. It's a lease. A KodeCite build is a deed.",
    ],
  },
  {
    q: 'How do customer reviews help with AI search rankings?',
    a: [
      "Reviews are trust signals — but most businesses let them sit passively on Google and Yelp without doing anything to amplify them.",
      "KodeCite takes a different approach: we take real customer reviews, create structured content and articles from them, retrieve the direct Google review URL, and link everything together with the right schema markup. The result is that each review does significantly more work than it would sitting alone on a third-party platform. The review becomes part of your entity's credibility story — indexed, structured, and readable by AI engines.",
    ],
  },
  {
    q: "I'm a realtor. How does KodeCite handle my listings?",
    a: [
      "Every active listing becomes its own page on your site with full per-page schema markup — property details, location, price, agent credentials. When the home sells, that page doesn't disappear. It converts to a sold property page with the final sale price and stays indexed.",
      "Over time, as you close more transactions, you build a permanent, compounding record of your sales history on your own domain — not buried in Zillow or a third-party platform you don't control. The listing URLs stay off your main navigation so your site looks polished while the asset base quietly grows underneath it.",
    ],
  },
  {
    q: 'Who owns the website KodeCite builds?',
    a: [
      "You do. Completely.",
      "The site lives in your own Vercel account. The code lives in your own GitHub repository. KodeCite builds the infrastructure and hands you the keys. There are no monthly platform fees to keep the lights on, no proprietary system that holds your content hostage, and no dependency on KodeCite to keep your site running.",
      "We offer optional ongoing support and content retainers — but those are your choice, not a requirement. You own the asset outright from day one.",
    ],
  },
  {
    q: 'What kind of businesses benefit most from what KodeCite builds?',
    a: [
      "KodeCite works best for established, owner-operated businesses that already have a real reputation — good reviews, genuine expertise, and a track record in their market. The infrastructure amplifies what's already there. It's not a shortcut for a brand new business with no history.",
      "The ideal KodeCite client is a professional service business — a law firm, financial advisor, realtor, med spa, contractor, or specialty retailer — that is already good at what they do but is invisible in the places their best future customers are looking.",
    ],
  },
  {
    q: 'How long does it take to see results?',
    a: [
      "It depends on the query, the competition, and how established the business already is — but KodeCite clients have seen early AI visibility signals in as little as 30 days on a brand new domain. Entity graph signals like directory listings typically start surfacing in Bing and Google within 60–90 days as crawlers verify the cross-platform consistency.",
      "The compounding effect builds over months and years, not overnight. What makes KodeCite different from paid advertising is that the foundation doesn't disappear when a budget runs out — the infrastructure keeps working.",
    ],
  },
  {
    q: "Isn't AEO just rebranded SEO?",
    a: [
      "Partially — and that's a fair question.",
      "The foundational practices overlap: consistent directory listings, structured data, helpful content, strong reviews. Good SEO has always included these things. If an agency tells you AEO has nothing to do with SEO, they're overselling.",
      "What's genuinely new is where visibility now happens. A growing share of people never click a search result at all — they ask ChatGPT, Perplexity, or Google AI Overview and trust the answer they get back. Those systems evaluate businesses differently than Google's traditional crawler does. They weight entity consistency, structured data signals, and authoritative content in ways that most small business websites aren't built to support.",
      "So yes — the practices are related. What's changed is the destination. KodeCite builds for both.",
    ],
  },
];

export default function FAQPage() {
  return (
    <SecondaryPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ padding: '120px 32px 80px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div className="d-eyebrow mb-6">FREQUENTLY ASKED QUESTIONS</div>

          <h1
            className="font-inter font-semibold mb-6"
            style={{
              fontSize:      'clamp(40px, 5.5vw, 72px)',
              lineHeight:    1.05,
              letterSpacing: '-0.03em',
              color:         'var(--d-fg)',
              maxWidth:      '820px',
            }}
          >
            Everything you wanted{' '}
            <em className="serif">to ask.</em>
          </h1>

          <p
            className="font-inter"
            style={{
              fontSize:   '17px',
              lineHeight: 1.65,
              color:      'var(--d-fg-dim)',
              fontWeight: 300,
              maxWidth:   '580px',
            }}
          >
            Most people who find KodeCite already sense that something is broken
            with their online presence. They just don&apos;t have the language for it
            yet. These are the questions worth asking.
          </p>
        </div>
      </section>

      {/* ── FAQ Items ─────────────────────────────────────── */}
      <section style={{ padding: '0 32px 120px', backgroundColor: 'var(--d-bg)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {faqs.map((item, i) => (
            <div
              key={i}
              style={{ borderTop: '1px solid var(--d-line)', padding: '48px 0' }}
            >
              {/* Question */}
              <div className="flex gap-5 mb-5">
                <span
                  className="font-mono flex-shrink-0"
                  style={{
                    fontSize:      '10px',
                    letterSpacing: '0.18em',
                    color:         'var(--d-accent)',
                    paddingTop:    '5px',
                    minWidth:      '24px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2
                  className="font-inter font-semibold"
                  style={{
                    fontSize:      'clamp(18px, 2.2vw, 22px)',
                    lineHeight:    1.25,
                    letterSpacing: '-0.015em',
                    color:         'var(--d-fg)',
                  }}
                >
                  {item.q}
                </h2>
              </div>

              {/* Answer */}
              <div className="flex gap-5">
                <span style={{ minWidth: '24px', flexShrink: 0 }} />
                <div className="flex flex-col gap-4">
                  {(Array.isArray(item.a) ? item.a : [item.a]).map((para, j) => (
                    <p
                      key={j}
                      className="font-inter"
                      style={{
                        fontSize:   '16px',
                        lineHeight: 1.75,
                        color:      'var(--d-fg-dim)',
                        fontWeight: 300,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Final rule */}
          <div style={{ borderTop: '1px solid var(--d-line)' }} />

          {/* Still have questions? */}
          <div className="pt-12 text-center">
            <p
              className="font-inter mb-6"
              style={{ fontSize: '16px', color: 'var(--d-fg-dim)', fontWeight: 300 }}
            >
              Still have questions?
            </p>
            <Link href="/contact" className="d-btn d-btn-primary">
              Let&apos;s talk →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <section
        style={{
          padding:         '100px 32px',
          backgroundColor: 'var(--d-bg-2)',
          borderTop:       '1px solid var(--d-line)',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="d-eyebrow d-eyebrow-center mb-6">GET THE REAL AUDIT</div>

          <h2
            className="font-inter font-semibold mb-5"
            style={{
              fontSize:      'clamp(28px, 3.5vw, 44px)',
              lineHeight:    1.1,
              letterSpacing: '-0.025em',
              color:         'var(--d-fg)',
            }}
          >
            Reading about it is one thing.{' '}
            <em className="serif">Having it built is another.</em>
          </h2>

          <p
            className="font-inter mb-8"
            style={{
              fontSize:   '16px',
              lineHeight: 1.65,
              color:      'var(--d-fg-dim)',
              fontWeight: 300,
            }}
          >
            The Machine Read shows you exactly what AI can and can&apos;t verify
            about your business right now. No pitch. Just data.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="d-btn d-btn-primary">
              Get My Free Machine Read →
            </Link>
            <Link href="/services" className="d-btn d-btn-ghost">
              See What&apos;s Included
            </Link>
          </div>
        </div>
      </section>
    </SecondaryPageShell>
  );
}

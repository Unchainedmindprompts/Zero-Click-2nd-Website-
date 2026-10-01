import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "schema-markup-complete-guide",
  "title": "Schema Markup for a Business AI Can Understand",
  "description": "A practical guide to business identity, people, services, evidence and offers in JSON-LD, with validation and an honest boundary between description and action.",
  "date": "2026-02-08",
  "category": "TECHNICAL",
  "intro": "Schema markup gives you a deliberate way to describe your business in code. The useful starting point is the real business: who runs it, what it offers, who it serves and what evidence supports a customer’s decision. Choose the markup after those facts are clear.",
  "sections": [
    {
      "h": "What schema does, and what remains your job",
      "p": [
        "Schema.org supplies types and properties for describing things and their relationships. JSON-LD is one way to publish that linked data on a web page. A business, its owner, a service and an article can each have an identity and references to the others.",
        "This can reduce ambiguity for systems that use the data. It does not establish that a claim is true, guarantee a recommendation or make every assistant consume the same fields. Keep the visible explanation useful on its own. The code and the page should describe the same business."
      ],
      "source": "schema"
    },
    {
      "h": "1. Model the business and people accurately",
      "p": [
        "Choose Organization, LocalBusiness or an appropriate subtype according to what the entity actually is. A physical branch and the parent company may be separate entities. Use a stable @id for each identity so service and article nodes can refer to the correct one.",
        "Include accurate public names, URLs, contact routes and relevant geography. Distinguish a public customer location from a private administrative address; do not publish private information merely to fill a field. Model a founder or practitioner as a Person when that relationship is relevant and supported. A biography should explain the role and experience in ordinary language too."
      ],
      "source": "local"
    },
    {
      "h": "2. Describe each meaningful service",
      "p": [
        "A Service node can identify the provider and the area served. Its description should explain the work, its intended customer and the important limits. Not every minor variation needs a separate page. Create separate pages when they answer a genuinely different customer question.",
        "For a hypothetical shades installer, consultation, product selection and installation may be parts of an offering. The website should clarify which are included and how the process begins. It should also distinguish work the company performs from adjacent services it does not offer. Do not imply that every business in an example performs every service."
      ],
      "source": "service"
    },
    {
      "h": "3. Represent price only when you have a real price",
      "p": [
        "LocalBusiness has a priceRange property for broad business-level price context. An Offer can use price, priceCurrency and an appropriate priceSpecification for actual commercial terms. These are different uses; a priceRange string is not a substitute for a valid offer price.",
        "If a project needs measurement or consultation before quoting, explain that process. Do not put a made-up starting price into schema to satisfy a template. A published offer should make its conditions clear to people, including what the price covers and whether it is still current."
      ],
      "source": "offer"
    },
    {
      "h": "4. Link identity and evidence thoughtfully",
      "p": [
        "Use sameAs, with that exact capitalization, for URLs that identify the same entity. A verified company profile may be an identity link; a general page about the industry is not. Keep a person’s profiles separate from the company’s.",
        "Credentials, awards and reviews need accurate attribution and context. A source can support a specific claim without proving the business is best for every customer. Publish the issuing organization and relevant dates where available. Do not add ratings or endorsements that the visible page and original evidence cannot support."
      ]
    },
    {
      "h": "5. Keep articles, navigation and questions coherent",
      "p": [
        "Article markup can connect the author, publisher, publication date and updated date. BreadcrumbList can describe the page’s place in the site. Use dates honestly: a substantial revision may justify dateModified, while the original publication date should remain intact.",
        "Helpful visible questions and answers can still reduce customer friction. FAQPage is a Schema.org vocabulary type, but it should not be sold as a Google rich-result benefit: Google ended that search feature in May 2026. Current feature support is a separate question from whether vocabulary is valid."
      ],
      "source": "updates"
    },
    {
      "h": "A small connected example",
      "p": [
        "This illustrative example uses a fictional business and service. It shows a stable business identity, a named founder and a service that references the provider. A real implementation needs the business’s actual facts, supported types and corresponding visible content. The example does not create a callable consultation endpoint."
      ]
    },
    {
      "h": "6. Validate meaning as well as syntax",
      "p": [
        "Parse the JSON first and run the markup through a Schema.org validator. Then compare it with the visible page and the approved business record. Correct syntax cannot tell you that a phone number is current, a service is offered or a credential belongs to the right person.",
        "Use consumer-specific tools for their stated purpose. Google’s Rich Results Test checks supported Google search features; it is not a general score of whether all AI systems understand a business. An unsupported type is not automatically invalid Schema.org. Zero warnings also does not prove a future recommendation."
      ],
      "items": [
        "Confirm every identifier and relationship refers to the intended entity.",
        "Review names, service areas, price conditions and contact routes for accuracy.",
        "Check source links for credentials, awards and other material evidence.",
        "Inspect the published response, not only the development preview.",
        "Recheck after template, plugin, content or policy changes."
      ]
    },
    {
      "h": "7. Add a real capability when there is an action to support",
      "p": [
        "A service description explains what a business offers. An operational capability explains what another system can request now, the input it must supply, applicable conditions and what the result means. A descriptive action in markup does not implement that behavior.",
        "When a live workflow is in scope, build and test the receiver, permissions, validation, duplicate handling and human handoff. A customer’s assistant should get a real result, such as a request received for follow-up. A booking or transaction should be claimed only when the connected system has actually completed it."
      ]
    },
    {
      "h": "Maintain the representation as the business changes",
      "p": [
        "Treat structured data as part of the website’s content system. Assign an owner for changing services, people, locations and commercial terms. Where practical, generate the visible page and structured fields from the same approved facts.",
        "The aim is a business that is easier to understand and engage with across search engines, assistants and outside agents. Good schema supports that work. The accurate information and working customer process are what make it useful."
      ]
    }
  ],
  "sources": [
    [
      "Schema.org: About the vocabulary",
      "https://schema.org/docs/about.html"
    ],
    [
      "W3C: JSON-LD 1.1",
      "https://www.w3.org/TR/json-ld11/"
    ],
    [
      "Schema.org: LocalBusiness",
      "https://schema.org/LocalBusiness"
    ],
    [
      "Schema.org: Service",
      "https://schema.org/Service"
    ],
    [
      "Schema.org: Offer",
      "https://schema.org/Offer"
    ],
    [
      "Google Search documentation updates",
      "https://developers.google.com/search/updates"
    ]
  ],
  "related": [
    "what-is-an-entity-graph",
    "aeo-technical-seo-done-correctly"
  ],
  "example": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://example.com/#business",
        "name": "Example Shade Studio",
        "url": "https://example.com/",
        "founder": {
          "@id": "https://example.com/#owner"
        }
      },
      {
        "@type": "Person",
        "@id": "https://example.com/#owner",
        "name": "Example Owner"
      },
      {
        "@type": "Service",
        "@id": "https://example.com/services/shades#service",
        "name": "Custom shade consultation",
        "provider": {
          "@id": "https://example.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": "Example City"
        },
        "description": "Consultation about custom shades. Project scope and timing are discussed with the team."
      }
    ]
  }
};
const SOURCE_LINKS: Record<string, string[]> = {
  "google": [
    "Google Search Central: AI features and your website",
    "https://developers.google.com/search/docs/appearance/ai-features"
  ],
  "schema": [
    "Schema.org: About the vocabulary",
    "https://schema.org/docs/about.html"
  ],
  "jsonld": [
    "W3C: JSON-LD 1.1",
    "https://www.w3.org/TR/json-ld11/"
  ],
  "local": [
    "Schema.org: LocalBusiness",
    "https://schema.org/LocalBusiness"
  ],
  "service": [
    "Schema.org: Service",
    "https://schema.org/Service"
  ],
  "offer": [
    "Schema.org: Offer",
    "https://schema.org/Offer"
  ],
  "updates": [
    "Google Search documentation updates",
    "https://developers.google.com/search/updates"
  ],
  "crawl": [
    "Vercel: The rise of the AI crawler",
    "https://vercel.com/blog/the-rise-of-the-ai-crawler"
  ],
  "reviews": [
    "Google Business Profile: Local ranking guidance",
    "https://support.google.com/business/answer/7091?hl=en"
  ],
  "sitemap": [
    "Google Search Central: Sitemaps",
    "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
  ],
  "luxe": [
    "Luxe Window Works: Public consultation capability",
    "https://www.luxewindowworks.com/api/capabilities/request-in-home-consultation"
  ],
  "meta": [
    "Meta Business Help Center",
    "https://www.facebook.com/business/help"
  ],
  "terms": [
    "Meta: Customer List Custom Audiences Terms",
    "https://www.facebook.com/legal/terms/customaudience"
  ]
};
const PAGE_URL = `https://www.kodecite.ai/blog/${ARTICLE.slug}`;
const WORD_COUNT = 1025;
const READ_TIME = '5 min read';
const PUBLISHED = 'February 8, 2026';

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.description,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: ARTICLE.title, description: ARTICLE.description, url: PAGE_URL, type: 'article', publishedTime: `${ARTICLE.date}T00:00:00-07:00`, modifiedTime: '2026-10-01T15:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', '@id': `${PAGE_URL}#article`,
  headline: ARTICLE.title, description: ARTICLE.description,
  datePublished: `${ARTICLE.date}T00:00:00-07:00`, dateModified: '2026-10-01T15:00:00Z',
  wordCount: WORD_COUNT, articleSection: ARTICLE.category,
  author: articleAuthor, publisher: articlePublisher, isPartOf: blogCollectionPage,
  url: PAGE_URL, mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  image: 'https://www.kodecite.ai/og-image.png', about: [businessRef],
  citation: ARTICLE.sources.map(([name, url]) => ({ '@type': 'CreativeWork', name, url })),
};
const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: ARTICLE.title, item: PAGE_URL },
  ],
};

export default function ArticlePage() {
  const related = ARTICLE.related.map((slug) => blogPosts.find((post) => post.slug === slug)).filter(Boolean);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }} />
      <header className="pt-36 pb-16 px-5 md:px-8" style={{ background: 'var(--d-bg)', borderBottom: '1px solid var(--d-line)' }}>
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex gap-3 text-sm font-inter text-[var(--d-fg-dim)] mb-9">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog">Insights</Link>
          </nav>
          <p className="d-eyebrow mb-6">{ARTICLE.category} · {READ_TIME}</p>
          <h1 className="font-inter font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-[var(--d-fg)] mb-8">{ARTICLE.title}</h1>
          <p className="font-inter text-lg md:text-xl leading-relaxed text-[var(--d-fg-dim)] max-w-3xl">{ARTICLE.intro}</p>
          <div className="mt-9 pt-6 font-inter text-sm text-[var(--d-fg-dim)]" style={{ borderTop: '1px solid var(--d-line)' }}>
            <p className="font-semibold text-[var(--d-fg)] mb-1">Mark Abplanalp · Kodecite</p>
            <p>Published {PUBLISHED} · Updated October 1, 2026</p>
          </div>
        </div>
      </header>
      <section className="px-5 md:px-8 py-16 md:py-20" style={{ background: 'var(--d-bg)' }}>
        <article className="max-w-3xl mx-auto font-inter text-[var(--d-fg-dim)]" style={{ fontSize: '17px', lineHeight: 1.85 }}>
          {ARTICLE.sections.map((section) => (
            <section key={section.h} className="mb-12">
              <h2 className="font-inter font-semibold text-2xl md:text-3xl leading-tight tracking-tight text-[var(--d-fg)] mb-5">{section.h}</h2>
              {section.p.map((paragraph) => <p key={paragraph} className="mb-5">{paragraph}</p>)}
              {section.items && <ul className="space-y-3 pl-6 mb-5 list-disc">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              {section.source && SOURCE_LINKS[section.source] && <p className="text-sm"><a href={SOURCE_LINKS[section.source][1]} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-4">{SOURCE_LINKS[section.source][0]} ↗</a></p>}
              {section.h === 'A small connected example' && ARTICLE.example && <pre className="overflow-x-auto rounded-xl p-5 text-xs md:text-sm leading-relaxed my-6" style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)' }}><code>{JSON.stringify(ARTICLE.example, null, 2)}</code></pre>}
            </section>
          ))}
          <section className="pt-8 mt-12" style={{ borderTop: '1px solid var(--d-line)' }}>
            <h2 className="text-xl font-semibold text-[var(--d-fg)] mb-5">Sources and further reading</h2>
            <ul className="space-y-3 text-sm">{ARTICLE.sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-4">{label} ↗</a></li>)}</ul>
          </section>
          <section className="pt-8 mt-10" style={{ borderTop: '1px solid var(--d-line)' }}>
            <h2 className="text-xl font-semibold text-[var(--d-fg)] mb-5">Keep reading</h2>
            <ul className="space-y-4">{related.map((post) => post && <li key={post.slug}><Link href={`/blog/${post.slug}`} className="text-[var(--d-accent)] hover:underline">{post.title} →</Link></li>)}</ul>
            <Link href="/blog" className="inline-block mt-8 text-sm text-[var(--d-fg-dim)] hover:text-[var(--d-fg)]">← All insights</Link>
          </section>
        </article>
      </section>
      <section className="py-20 px-5 md:px-8" style={{ background: 'var(--d-bg-2)', borderTop: '1px solid var(--d-line)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="d-eyebrow mb-5">YOUR BUSINESS, CLEARLY UNDERSTOOD</p>
          <h2 className="font-inter text-3xl md:text-4xl font-semibold tracking-tight text-[var(--d-fg)] mb-5">Make the next step easier for your customer and their AI assistant.</h2>
          <p className="font-inter text-[var(--d-fg-dim)] text-lg leading-relaxed mb-8">An Agent Readiness Review looks at your business information, supporting evidence and the next steps a customer can take. Start with the gaps that matter to a real inquiry.</p>
          <Link href="/machine-read" className="d-btn d-btn-primary">Request an Agent Readiness Review →</Link>
        </div>
      </section>
    </>
  );
}

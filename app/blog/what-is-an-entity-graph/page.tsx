import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "what-is-an-entity-graph",
  "title": "What Is an Entity Graph? A Connected Map of Your Business",
  "description": "Understand how an entity graph connects a business, its owner, services, locations and evidence, and where live agent capabilities begin.",
  "date": "2026-04-17",
  "category": "BUSINESS TRUTH",
  "intro": "An entity graph is a connected representation of real things and their relationships. For a service business, it can describe who runs the company, what it offers, where it works and what evidence supports its claims. The value is a clearer business, not simply more markup.",
  "sections": [
    {
      "h": "Begin with things, then connect them",
      "p": [
        "Take a hypothetical window-treatment company. The company is one entity. Its owner is another. Its consultation service, service area and project article are others. The graph describes relationships: the person founded the company, the company provides the service, and the article documents relevant work.",
        "This is more useful than repeating a business name everywhere without explaining the connections. It also makes maintenance easier. When one service changes, the model gives the publisher a way to identify which pages and interfaces depend on that information."
      ]
    },
    {
      "h": "Schema.org supplies vocabulary; JSON-LD supplies a format",
      "p": [
        "Schema.org is a shared vocabulary of types and properties. JSON-LD is a standardized way to express linked data in JSON. They are commonly used together on websites, but neither is the business strategy itself.",
        "The vocabulary includes types such as Organization, LocalBusiness, Person and Service. The implementation should choose types that genuinely describe the business. Specificity is useful when accurate; choosing a more prestigious type or adding unsupported properties does not improve the underlying facts."
      ],
      "source": "schema"
    },
    {
      "h": "Stable identifiers keep references consistent",
      "p": [
        "A stable @id gives an entity an identifier that other objects can reference. A service can point to the same business identity that publishes an article. The author can point to the same person described on the About page. In JSON-LD, related nodes can be grouped in an @graph.",
        "One giant block is not mandatory, and multiple blocks are not automatically wrong. What matters is coherent identifiers and relationships in the published data. Avoid creating contradictory versions of the same organization with different names, addresses or service areas."
      ],
      "source": "jsonld"
    },
    {
      "h": "A useful graph starts with owner-approved facts",
      "p": [
        "The owner’s identity and the business’s trading name should be clear. Services need scope and geography. Credentials belong to the actual holder. Awards need a recipient, issuer and date. External profile links should identify the same person or business, rather than unrelated pages with useful keywords.",
        "The sameAs property is for identity links. It is not a generic place to put every authority website you would like associated with your brand. Other evidence may belong in visible citations or appropriately modeled relationships. Start with what a claim means, then choose how to represent it."
      ]
    },
    {
      "h": "Evidence remains separate from assertion",
      "p": [
        "A business can publish that it has an award. An issuing organization’s public record may corroborate the claim. Those are different sources. A good website makes that distinction understandable instead of treating its own markup as verification.",
        "Some facts, such as current service limits, may be authoritative because the business itself sets them. Others need independent support. Maintain source links where possible and review them over time. A broken credential link or expired certification should trigger a check, not remain a permanent trust badge."
      ]
    },
    {
      "h": "A graph supports understanding; it does not guarantee selection",
      "p": [
        "AI systems can use ordinary text, search results, structured information and other sources. There is no universal rule that a graph is required before a business can be recommended. Different consumers use different parts of the web.",
        "The graph’s practical value is to publish deliberate, consistent relationships that supported consumers can use. It can help reduce ambiguity, but it does not force a platform to accept every claim or grant a permanent position. Measure actual behavior without attributing every positive result to one technical feature."
      ]
    },
    {
      "h": "The step from identity to capability",
      "p": [
        "Once an assistant understands the business, its customer may ask it to do something. A description saying consultations are available does not tell software how to submit a request, what information to include or what the response means.",
        "That needs an additional capability description and, where scoped, a working interface. It should define the action, conditions, permissions and outcome. The business model remains the source of the rules, while the action system enforces them. A personal assistant can then make a useful request without confusing it with a confirmed appointment."
      ]
    },
    {
      "h": "How to review your own business map",
      "p": [
        "Choose a service and follow the relationships from the customer’s question to the next step. Can you identify the provider, relevant person, service area, evidence and request process? Are the visible pages and structured data telling the same story?"
      ],
      "items": [
        "Check that repeated identities have consistent names and identifiers.",
        "Confirm that services and evidence connect to the correct business or person.",
        "Inspect facts that change: location, availability, price conditions and credentials.",
        "Test whether the next action is real, documented and accurately confirmed."
      ]
    },
    {
      "h": "Ownership includes maintenance",
      "p": [
        "An owned graph can travel with the website and be reused in future interfaces. It still needs an accountable person and an update process. A maintained representation of the business is sometimes called a digital twin; here, that means a useful model of the real business, not an autonomous replacement for its owner.",
        "The work succeeds when customers and their assistants can understand the business more easily, make a better decision and take an appropriate next step."
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
    ]
  ],
  "related": [
    "below-the-content-layer",
    "schema-markup-complete-guide"
  ]
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
const WORD_COUNT = 870;
const READ_TIME = '5 min read';
const PUBLISHED = 'April 17, 2026';

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
              {section.source && SOURCE_LINKS[section.source] && <p className="text-sm"><a href={SOURCE_LINKS[section.source][1]} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-4">{SOURCE_LINKS[section.source][0]} →</a></p>}
              {section.h === 'A small connected example' && ARTICLE.example && <pre className="overflow-x-auto rounded-xl p-5 text-xs md:text-sm leading-relaxed my-6" style={{ background: 'var(--d-bg-2)', border: '1px solid var(--d-line)' }}><code>{JSON.stringify(ARTICLE.example, null, 2)}</code></pre>}
            </section>
          ))}
          <section className="pt-8 mt-12" style={{ borderTop: '1px solid var(--d-line)' }}>
            <h2 className="text-xl font-semibold text-[var(--d-fg)] mb-5">Sources and further reading</h2>
            <ul className="space-y-3 text-sm">{ARTICLE.sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--d-accent)] underline underline-offset-4">{label} →</a></li>)}</ul>
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

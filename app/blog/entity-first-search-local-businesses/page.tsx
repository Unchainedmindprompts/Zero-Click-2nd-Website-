import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "entity-first-search-local-businesses",
  "title": "Help AI Connect Your Business, People, Services and Proof",
  "description": "A practical guide to modeling the relationships an AI assistant needs to evaluate a service business and help a customer take the next step.",
  "date": "2026-05-09",
  "category": "BUSINESS TRUTH",
  "intro": "Your business is more than its homepage. It includes the people behind the work, the services they deliver, the customers they suit and the evidence that supports a choice. Bringing those pieces together helps customers and their AI assistants evaluate the real business.",
  "sections": [
    {
      "h": "What entity-first means in practice",
      "p": [
        "An entity is an identifiable thing: a business, person, service, place or article. Entity-first planning begins with those real things and their relationships, then decides how the website should represent them.",
        "For a local specialist, the relationship may be simple: a named owner runs a business; that business offers a defined service in particular towns; examples and credentials support the work; a consultation is the next step. A collection of pages should communicate that same picture consistently."
      ]
    },
    {
      "h": "AI can use prose as well as structured information",
      "p": [
        "Language models can understand ordinary text. Search and assistant systems may combine documents, structured data, search results, feeds and tools. It is inaccurate to say they only query entity graphs or cannot read a site without schema.",
        "The case for deliberate structure is practical: it makes facts and relationships explicit and easier to maintain. A named service provider is less ambiguous than a page saying “we can help.” A dated credential with an issuing source is more useful than a broad claim of expertise."
      ]
    },
    {
      "h": "Identify the people without overstating their role",
      "p": [
        "Publish the people customers need to know about: the owner, practitioner or team member responsible for the work. Explain relevant experience and connect genuine qualifications to the correct person. Keep professional profiles consistent where you control them.",
        "Avoid transferring an individual’s credential to the entire company without explanation. A former employee’s qualification should not quietly remain a current business claim. Awards also need context: recipient, category, issuer and year. This level of clarity helps a customer understand what the evidence actually establishes."
      ]
    },
    {
      "h": "Make the offer specific enough to compare",
      "p": [
        "A broad category such as home services rarely answers the buying question. Explain the actual offering, typical use cases, important exclusions and geographic coverage. Distinguish a product you sell from a system you repair, and a consultation you offer from work you have already agreed to perform.",
        "Price information should reflect the real process. If a site visit determines the quote, explain why and what the customer can expect before that visit. If there is a published starting price, show its conditions. A vague or invented number can make a comparison easier while making the eventual experience worse."
      ]
    },
    {
      "h": "Connect evidence to the relevant claim",
      "p": [
        "A portfolio photograph demonstrates a kind of work, but it does not automatically establish who performed every element or whether the current team offers it. Add enough context to make it useful: service, scope, date when relevant and the business’s role.",
        "Reviews offer a customer perspective. Certifications and licensing sources establish different facts. Public sources should be linked where practical, while private customer details should stay private. The purpose is credible evaluation, not the publication of every record the business holds."
      ]
    },
    {
      "h": "Publish the model in more than one useful form",
      "p": [
        "Use clear pages for people and supported structured formats for machines. Stable identifiers can connect an Organization or LocalBusiness to a Person, Service and Article without recreating unrelated versions of each object on every page.",
        "Do not assume that publishing a graph forces another platform to adopt it as truth. Each consumer chooses what to retrieve and use. The business remains responsible for its own representations, and third-party profiles or evidence may still disagree."
      ],
      "source": "jsonld"
    },
    {
      "h": "Extend the model when the customer wants action",
      "p": [
        "A personal assistant may understand a business well enough to recommend it and still need instructions for contacting it. A capability description should identify the request that is available, the required details, the conditions and the response.",
        "A live interface then has to enforce those rules and return the real outcome. That could be an inquiry accepted for follow-up, a request outside the service area or a question routed to a person. The customer benefits when their assistant can make progress without re-entering the same information or inventing certainty."
      ]
    },
    {
      "h": "Test the representation against real questions",
      "p": [
        "Ask whether the published information answers a handful of actual customer scenarios: a suitable project, an unsupported service, a nearby but out-of-area address, a price question and a request needing expert judgment. Check the site itself before testing assistant answers.",
        "Keep dated observations across the engines and assistants that matter to the business. Look for missing facts and incorrect explanations, not only mentions. The result you want is a clearer, more useful representation that supports informed choice and qualified engagement."
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
const WORD_COUNT = 774;
const READ_TIME = '4 min read';
const PUBLISHED = 'May 9, 2026';

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

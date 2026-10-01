import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "aeo-technical-seo-done-correctly",
  "title": "What Technical SEO Gives Your Customer’s AI Assistant",
  "description": "A practical technical foundation for readable business facts, connected evidence and reliable customer actions across search and AI.",
  "date": "2026-07-06",
  "category": "TECHNICAL",
  "intro": "Technical SEO still does useful work: it helps the right information reach the systems and people that need it. As customers delegate more research to AI assistants, that foundation should explain the business clearly and support a dependable next step.",
  "sections": [
    {
      "h": "The goal is a usable customer journey",
      "p": [
        "A service business does not need a new acronym every time an interface changes. It needs customers to understand what it does, see why it fits, and reach the right next step. Search engines and AI assistants are different ways people can enter that journey.",
        "Technical work supports this by making information accessible, consistent and maintainable. It cannot manufacture expertise or guarantee recommendations. A fast, well-structured site with an unclear offer still leaves an assistant, and its customer, with unanswered questions."
      ]
    },
    {
      "h": "First, check what can actually be retrieved",
      "p": [
        "Inspect a representative service page, location page and contact flow. Check the HTTP response, visible content, canonical URL, internal links, indexing settings and mobile behavior. Make sure access controls or bot protection are not accidentally blocking the intended reader.",
        "Compare the initial HTML response with the rendered page. Important facts available in the initial response are easier for a wider range of clients to retrieve. Vercel’s crawler research is useful evidence about the behavior it observed, but a crawler study is not a permanent specification for every assistant or browser tool. Test the clients relevant to the project."
      ],
      "source": "crawl"
    },
    {
      "h": "Use research to choose tests, not promise a result",
      "p": [
        "Semrush’s January 2026 study examined five million URLs cited by ChatGPT Search and Google AI Mode. It found patterns involving structured data and other technical characteristics, while explicitly identifying the work as correlational. The sample concerns those systems and cited URLs; it does not establish that adding a particular schema type causes an uncited local business to be selected.",
        "That distinction makes the research more useful. It suggests technical areas worth inspecting and testing, while leaving the project accountable to its own evidence: accessible facts, consistent identity, useful content and a customer journey that works."
      ],
      "source": "semrush"
    },
    {
      "h": "Then connect the business behind the pages",
      "p": [
        "Give the business a consistent identity across its own pages. Relate its people, services, locations, credentials, articles and evidence deliberately. Stable identifiers in JSON-LD can keep references consistent, so a service provider and an article publisher do not accidentally appear as unrelated organizations.",
        "The important decisions precede the markup. Which person holds the credential? Is an address a showroom or a service-area office? Does a brand relationship mean an authorized dealer or simply an installed product? These distinctions affect customer understanding. A syntactically valid graph can still describe the wrong thing."
      ]
    },
    {
      "h": "Use tools according to the control they provide",
      "p": [
        "A framework or plugin should be evaluated by the result it produces. WordPress and other systems can serve readable pages and structured data. Plugins can produce connected graphs. Problems arise when the implementation is incomplete, contradictory or hard to maintain, not simply because a plugin exists.",
        "Kodecite uses code-level builds to control the content model, rendering, relationships and request flows together. That is an implementation choice, not an automatic ranking advantage. For an existing site, decide whether a repair, rebuild or separately scoped capability layer best fits the real constraints."
      ]
    },
    {
      "h": "Treat publishing and acting as different tests",
      "p": [
        "A foundation test asks whether the published services, geography, evidence and conditions match the business. An action test asks whether a request can be received, validated, routed and confirmed. Both matter, but passing one does not demonstrate the other.",
        "For a consultation flow, the test set should include a valid request, missing information, an unsupported location, a retry and a downstream delivery failure. The customer-facing response must describe the actual state. “Received for follow-up” can be a useful success; it should not quietly become “appointment booked.”"
      ]
    },
    {
      "h": "Keep discovery files in proportion",
      "p": [
        "Schema.org offers a shared vocabulary for publishing facts. Other files or tool descriptions may help specific consumers navigate a site or discover an interface. Their value depends on whether the intended consumer reads and supports them.",
        "Do not buy a generic agent file as proof of universal integration. Google explicitly says llms.txt is unnecessary for its search visibility. Other services may have their own conventions. The durable work is the accurate business information and working interface underneath, with adapters added when there is a real use case."
      ],
      "source": "google"
    },
    {
      "h": "A technical acceptance checklist",
      "p": [
        "Agree on the outputs before the build begins. Keep the checklist tied to observable behavior rather than a future search position controlled by another company."
      ],
      "items": [
        "Important pages load, link correctly and expose their essential content.",
        "Visible facts and structured facts agree with the owner-approved business record.",
        "Public evidence supports material claims; missing evidence is identified.",
        "Forms and included actions handle valid, invalid and repeated requests honestly.",
        "The owner receives the code, accounts, documentation and a clear maintenance boundary."
      ]
    },
    {
      "h": "Keep learning after launch",
      "p": [
        "Record what assistants say about the business and investigate errors against the underlying sources. Track which inquiries are useful and where customers abandon the process. A change in an AI answer does not by itself identify its cause.",
        "The best next improvement may be technical, editorial or operational. It might be a blocked page, an unclear service limit or a consultation request that asks for too much information. Start with the observed friction and fix that."
      ]
    }
  ],
  "sources": [
    [
      "Google Search Central: AI features and your website",
      "https://developers.google.com/search/docs/appearance/ai-features"
    ],
    [
      "W3C: JSON-LD 1.1",
      "https://www.w3.org/TR/json-ld11/"
    ],
    [
      "Vercel: The rise of the AI crawler",
      "https://vercel.com/blog/the-rise-of-the-ai-crawler"
    ],
    [
      "Semrush: Technical SEO and AI citations study, January 2026",
      "https://www.semrush.com/blog/technical-seo-impact-on-ai-search-study/"
    ]
  ],
  "related": [
    "schema-markup-complete-guide",
    "why-your-website-cant-talk-to-ai"
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
  ],
  "semrush": [
    "Semrush: Technical SEO and AI citations study, January 2026",
    "https://www.semrush.com/blog/technical-seo-impact-on-ai-search-study/"
  ]
};
const PAGE_URL = `https://www.kodecite.ai/blog/${ARTICLE.slug}`;
const WORD_COUNT = 888;
const READ_TIME = '5 min read';
const PUBLISHED = 'July 6, 2026';

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

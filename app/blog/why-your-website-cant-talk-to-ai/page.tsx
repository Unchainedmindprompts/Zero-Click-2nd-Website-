import type { Metadata } from 'next';
import Link from 'next/link';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';
import { blogPosts } from '@/lib/blog';

type Section = { h: string; p: string[]; items?: string[]; source?: string };
const ARTICLE: { slug: string; title: string; description: string; date: string; category: string; intro: string; sections: Section[]; sources: string[][]; related: string[]; example?: object } = {
  "slug": "why-your-website-cant-talk-to-ai",
  "title": "Can Your Customer’s AI Assistant Understand Your Website?",
  "description": "A practical website review for clear identity, relevant services, checkable evidence and a next step an outside assistant can use.",
  "date": "2026-06-14",
  "category": "TECHNICAL",
  "intro": "Your customer may ask an assistant to do the reading, compare providers and start a conversation. The useful question is whether your website gives that assistant enough accurate information to represent your business well and help the customer move forward.",
  "sections": [
    {
      "h": "Run the customer’s task through the site",
      "p": [
        "Choose a realistic request: “Find someone who installs motorized shades in my town and ask about a consultation.” Read the site as if you knew nothing about the business. Can you determine the service, location, relevant experience and available next step?",
        "Notice where you have to guess. “Serving the region” may be too vague to establish coverage. “Contact us” may not explain whether an inquiry is appropriate. “Award-winning” says little without a named award. These gaps create work for people as well as assistants."
      ]
    },
    {
      "h": "Separate retrieval from understanding",
      "p": [
        "First establish whether the content can be retrieved. Inspect important URLs, response codes, access settings and the initial HTML. Then inspect the rendered page. An assistant using a browser can have different capabilities from a crawler collecting pages for a search index.",
        "Serving essential information in the initial HTML can improve compatibility across clients. Vercel’s published crawler observations support testing this rather than assuming every crawler executes site JavaScript. They do not establish that every modern assistant has identical limitations. Use actual retrieval tests alongside the documentation."
      ],
      "source": "crawl"
    },
    {
      "h": "Make identity and fit explicit",
      "p": [
        "A reader should be able to identify the business, the people responsible for the work, the specific services and the area served. Explain who each offer suits and any important limits. The goal is enough clarity for a useful comparison, not a longer list of search terms.",
        "Connect those facts in code as well as prose. Consistent entity identifiers and relationships can keep an owner biography, service page and project article tied to the same business. The data should describe what is visible and true, not add a hidden set of stronger claims."
      ]
    },
    {
      "h": "Let evidence do a specific job",
      "p": [
        "A review, license, certification, award and portfolio photograph each support different conclusions. Explain the connection to the service. If the customer cares about experience with a particular product or situation, show relevant work rather than only a general testimonial.",
        "Use original public sources where practical. Keep dates and attribution, and distinguish the business’s own account from third-party evidence. An assistant may still summarize imperfectly; providing clear context gives both the assistant and the customer a better basis for checking the claim."
      ]
    },
    {
      "h": "Judge the implementation, not the platform label",
      "p": [
        "A WordPress site can publish readable HTML and connected structured data. A custom site can be poorly built. Inspect the output instead of assuming that a platform, plugin or framework tells you whether the business is understandable.",
        "Kodecite’s code-level approach is intended to give the owner deliberate control over the business model and customer journey. A rebuild can be appropriate when the existing system makes those changes difficult. Selected existing-platform projects may suit a separate capability-layer pilot. The decision should follow the actual constraints."
      ]
    },
    {
      "h": "Describe an action in terms an assistant can follow",
      "p": [
        "A usable next step needs a purpose, required information, eligibility conditions and a clear outcome. For a consultation request, the relevant facts might include project type, location and a contact route approved by the customer. Collect only what the step needs.",
        "The receiving system should identify missing information and unsupported requests clearly. It should handle retries without producing repeated leads and return what actually happened. If a person must confirm timing or discuss scope, the handoff should carry useful context and explain that follow-up is still required."
      ]
    },
    {
      "h": "Keep proof scoped to the observation",
      "p": [
        "Kodecite has published dated discovery examples for businesses including Real Estate With Shirin and Luxe Window Works. Those examples show particular systems citing or recommending the businesses in particular answers. They do not isolate the effect of a schema graph or prove permanent placement.",
        "The later Luxe consultation test demonstrates a different result: an outside AI submitted one permitted request, the email arrived, and a duplicate did not create another lead. Discovery evidence and operational evidence answer different questions. A useful review keeps both visible."
      ]
    },
    {
      "h": "A review you can act on",
      "p": [
        "Ask for findings connected to a customer task, with the evidence and next change alongside each one. “Your site is not AI-ready” is too broad to guide a decision. “Your service page includes this town, but the request form rejects it” is a concrete problem."
      ],
      "items": [
        "What can be retrieved from the website today?",
        "Which facts about identity, services and fit are missing or contradictory?",
        "Which claims have useful supporting evidence?",
        "What can a customer or assistant actually request?",
        "What does the response confirm, and where does a person take over?"
      ]
    },
    {
      "h": "Improve the next obstacle",
      "p": [
        "Start with the gap that most affects a real customer. Repair inaccessible content, clarify an offer, update evidence or connect the next step. Test again after the change.",
        "That is how a website becomes more useful in an assistant-led journey: accurate business information, a clear buying decision and a dependable way to engage."
      ]
    }
  ],
  "sources": [
    [
      "Vercel: The rise of the AI crawler",
      "https://vercel.com/blog/the-rise-of-the-ai-crawler"
    ],
    [
      "W3C: JSON-LD 1.1",
      "https://www.w3.org/TR/json-ld11/"
    ],
    [
      "Luxe Window Works: Public consultation capability",
      "https://www.luxewindowworks.com/api/capabilities/request-in-home-consultation"
    ]
  ],
  "related": [
    "entity-first-search-local-businesses",
    "from-recommended-to-actionable-luxe-window-works"
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
const WORD_COUNT = 846;
const READ_TIME = '5 min read';
const PUBLISHED = 'June 14, 2026';

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

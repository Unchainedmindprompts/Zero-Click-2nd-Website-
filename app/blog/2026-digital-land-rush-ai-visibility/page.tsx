import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "2026-digital-land-rush-ai-visibility",
  "title": "A Practical 2026 Plan for AI-Ready Businesses",
  "description": "Build an owned business foundation for AI-assisted customers with a phased plan for accurate facts, evidence, and one useful next step.",
  "date": "2026-03-07",
  "intro": "Customers have a reason to delegate finding and comparing businesses: it takes less effort. Prepare for that behavior with a measured investment plan, starting with the facts and customer journeys you can improve today.",
  "sections": [
    {
      "heading": "The opportunity is a better customer journey",
      "paragraphs": [
        "The language of a digital land rush suggests that a business can claim a permanent piece of an answer engine. It cannot. An assistant's answer can change with the question, the available sources, the user's preferences, and the system itself.",
        "What a business can own is the quality of its information and the way it receives customers. Clear services, connected evidence, accurate profiles, and a dependable next step remain useful even when a search interface changes. Those are concrete assets to improve.",
        "For an owner deciding where to spend, the first question is where the current journey breaks. Are the wrong people contacting you? Do customers repeat information? Is important expertise missing from the site? Does an inquiry reach someone who can respond? Start with the failure that costs your business time or opportunity."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Phase one: establish what is true",
      "paragraphs": [
        "Choose a priority service and map the facts needed to evaluate it. Record who provides the work, which customers it fits, the service area, relevant qualifications, the process, and the evidence available. Identify the owner of each fact and where updates come from.",
        "A local contractor might know exactly which project types the crew can undertake, yet have a website that only says “quality home improvement.” Translating that knowledge into service pages and structured data makes the business more useful to a customer and their assistant.",
        "Publish the facts you can support. If price depends on an inspection or consultation, explain the variables and the quote process. If capacity changes, avoid describing an old availability claim as live. A completed foundation means the business can be described accurately, not that a search system has promised it a position."
      ],
      "items": [
        "Business and owner identity",
        "Offerings, service areas, and customer fit",
        "Credentials, awards, and the sources behind them",
        "Current contact routes and response process"
      ],
      "sources": []
    },
    {
      "heading": "Phase two: give customers reasons to choose",
      "paragraphs": [
        "Build the pages that help someone make a decision. A project story can explain the initial problem, the service provided, the constraints, and the documented result. A provider biography can show who is responsible and which credentials apply. A comparison can explain when your service is appropriate and when another approach is a better fit.",
        "Local knowledge is useful when it answers a real question. A service business in North Idaho might explain how it works with remote properties or which areas incur travel conditions. That detail is helpful because it changes the customer's decision, not because mentioning a town automatically creates authority.",
        "External reviews and professional profiles can corroborate the story. Retain links to the source, respect permissions, and avoid suggesting a review verifies claims it never makes. Your website should make the evidence easier to examine, rather than rewrite every third-party statement as a blanket endorsement."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Phase three: prove one next step",
      "paragraphs": [
        "Pick one action that customers already want to take. For many service businesses, a well-defined consultation request is more useful to start with than a large automation project.",
        "Specify what the assistant may submit, which information is necessary, what the customer must approve, and what the business returns. Test the normal request, missing information, a repeated submission, and an unavailable service area. A request should either complete with an accurate receipt or explain how a person can help.",
        "Luxe Window Works provides a bounded example: an outside AI submitted a consultation request, one email was produced, and a duplicate was prevented. It is evidence of that path working, not evidence that booking, prices, or payments have been automated."
      ],
      "items": [],
      "sources": [
        {
          "label": "Read the Luxe Window Works implementation",
          "href": "/blog/from-recommended-to-actionable-luxe-window-works"
        }
      ]
    },
    {
      "heading": "Use milestones you can actually verify",
      "paragraphs": [
        "Set milestones around deliverables and customer outcomes. Do not use a six-month “citation phase” followed by an eighteen-month “local dominance phase.” No publisher can promise that sequence across independent AI systems.",
        "Your first milestone might be that an unfamiliar reader can understand the priority offer. The second might be that sampled assistants describe it accurately with relevant evidence. The third might be that an authorized request arrives once, reaches the right person, and gets a clear response.",
        "Record baseline inquiries, suitability, response time, and completion before making changes. Continue to track useful search and referral data. A gain in mentions without better-fit inquiries may tell you little about business value."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Budget for ownership and the real operating work",
      "paragraphs": [
        "KodeCite's foundation is $4,995 one time, owned by the business, with no required retainer. It establishes the business information and supporting infrastructure. A live action is separately scoped because its systems, permissions, and completion rules vary. A platform-layer pilot is a separate engagement.",
        "Ownership still comes with practical responsibilities: domain and hosting arrangements, current information, software upkeep, and a person accountable for incoming requests. Establish those responsibilities before launch. No required retainer should not be confused with a promise that a business will never need updates.",
        "Improve the parts that help customers now, then expand after the evidence justifies it. Early work can provide learning and a better foundation. It does not buy a permanent recommendation or shut the door on later competitors."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "The next decision",
      "paragraphs": [
        "If your site already communicates the business accurately, preserve what works. If the offer is hard to understand, fix that before buying more content. If the request flow is unreliable, repair it before inviting an outside agent to use it.",
        "An Agent Readiness Review is a useful starting point when you need to establish which of those situations applies. The output should help you choose a next investment based on the actual business, not on a countdown to a speculative land rush."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Own accurate business information",
    "Sequence work around customer friction",
    "Expand after a tested result"
  ],
  "faq": [
    {
      "q": "Can early investment lock in AI recommendations?",
      "a": "No. The work creates owned information, evidence, and capabilities. Independent search and AI systems still decide what to show."
    },
    {
      "q": "What should be the first milestone?",
      "a": "A priority offer that a customer or assistant can accurately understand, evaluate, and take the correct next step with."
    }
  ]
};
const canonical = `https://www.kodecite.ai/blog/${article.slug}`;
const modified = '2026-10-01T00:00:00Z';
const published = `${article.date}T00:00:00-07:00`;
const imageUrl = "https://www.kodecite.ai/blog-hero.png";
const articleText = [article.intro, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...section.items]), ...article.faq.flatMap((item) => [item.q, item.a])].join(' ');
const wordCount = articleText.trim().split(/\s+/).length;
const readingTime = Math.max(1, Math.ceil(wordCount / 200));
const publishedLabel = new Date(`${article.date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const sources = article.sections.flatMap((section) => section.sources).filter((source, index, list) => list.findIndex((item) => item.href === source.href) === index);

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical },
  openGraph: {
    title: article.title,
    description: article.description,
    url: canonical,
    type: 'article',
    publishedTime: published,
    modifiedTime: modified,
    authors: ['Mark Abplanalp'],
    images: [{ url: imageUrl }],
  },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [imageUrl] },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${canonical}#article`,
  headline: article.title,
  description: article.description,
  author: articleAuthor,
  publisher: articlePublisher,
  datePublished: published,
  dateModified: modified,
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  url: canonical,
  image: imageUrl,
  isPartOf: blogCollectionPage,
  about: [businessRef],
  articleSection: 'AI Business Strategy',
  wordCount,
  citation: sources.filter((source) => source.href.startsWith('https://')).map((source) => ({ '@type': 'CreativeWork', name: source.label, url: source.href })),
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${canonical}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kodecite.ai' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kodecite.ai/blog' },
    { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${canonical}#faq`,
  mainEntity: article.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <section className="bg-[var(--d-bg)] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--d-fg-dim)] mb-6 font-inter">
            <Link href="/" className="hover:text-[var(--d-accent)] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[var(--d-accent)] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--d-fg)]">{article.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--d-accent)] font-inter">AI Business Strategy</span>
            <span className="text-[var(--d-fg-dim)] text-xs font-inter">·</span>
            <span className="text-xs text-[var(--d-fg-dim)] font-inter">{readingTime} min read</span>
          </div>
          <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl text-[var(--d-fg)] leading-tight mb-6">{article.title}</h1>
          <p className="font-inter text-lg text-[var(--d-fg-dim)] max-w-3xl mb-8 leading-relaxed">{article.intro}</p>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[var(--d-accent)] flex items-center justify-center text-white font-inter font-semibold text-sm">MA</div>
            <div>
              <p className="font-inter font-semibold text-sm text-[var(--d-fg)]">Mark Abplanalp</p>
              <p className="font-inter text-xs text-[var(--d-fg-dim)]"><time dateTime={article.date}>{publishedLabel}</time> · Updated <time dateTime="2026-10-01">October 1, 2026</time></p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />
      <section className="bg-[var(--d-bg)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <article className="lg:col-span-2 prose-content font-inter text-[var(--d-fg-dim)]">
              {article.sections.map((section, index) => (
                <section key={section.heading} aria-labelledby={`section-${index}`}>
                  <h2 id={`section-${index}`} className="font-inter text-3xl text-[var(--d-fg)] mt-12 mb-5">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="leading-relaxed mb-6">{paragraph}</p>)}
                  {section.items.length > 0 && <ul className="list-disc pl-6 space-y-3 mb-8">{section.items.map((item) => <li key={item} className="leading-relaxed">{item}</li>)}</ul>}
                  {section.sources.length > 0 && <ul className="space-y-2 mb-8">{section.sources.map((source) => <li key={source.href}><a href={source.href} className="text-sm text-[var(--d-accent)] hover:underline">{source.label}</a></li>)}</ul>}
                </section>
              ))}
              <section aria-labelledby="article-faq" className="mt-12 pt-8 border-t border-[var(--d-line)]">
                <h2 id="article-faq" className="font-inter text-3xl text-[var(--d-fg)] mb-6">Frequently asked questions</h2>
                {article.faq.map((item) => <div key={item.q} className="mb-8"><h3 className="font-inter font-semibold text-xl text-[var(--d-fg)] mb-3">{item.q}</h3><p className="leading-relaxed">{item.a}</p></div>)}
              </section>
              <div className="mt-12 pt-8 border-t border-[var(--d-line)]">
                <Link href="/blog" className="text-[var(--d-accent)] font-semibold hover:underline">Back to the articles</Link>
              </div>
            </article>
            <aside className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="sticky top-28 space-y-6">
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">THE PRACTICAL TAKEAWAY</p>
                  <ul className="space-y-4">{article.takeaways.map((takeaway) => <li key={takeaway} className="text-sm leading-relaxed text-[var(--d-fg)]">{takeaway}</li>)}</ul>
                </div>
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="font-inter font-semibold text-[var(--d-fg)] text-lg mb-3">See what your customer’s assistant can understand</p>
                  <p className="text-[var(--d-fg-dim)] text-sm font-inter leading-relaxed mb-5">Review the business facts, evidence, and next step before deciding what to build.</p>
                  <Link href="/machine-read" className="btn-gold w-full text-center text-sm font-bold py-3 rounded-md block">Request an Agent Readiness Review</Link>
                </div>
                <div className="bg-[rgba(255,255,255,0.14)] rounded-xl border border-[var(--d-line-s)] p-6">
                  <p className="eyebrow mb-4 text-xs">RELATED READING</p>
                  <div className="space-y-4">
                    <Link href="/blog/what-is-an-entity-graph" className="block text-sm text-[var(--d-fg)] hover:text-[var(--d-accent)]">How an entity graph connects the business facts</Link>
                    <Link href="/blog/from-recommended-to-actionable-luxe-window-works" className="block text-sm text-[var(--d-fg)] hover:text-[var(--d-accent)]">The Luxe Window Works consultation-request proof</Link>
                    <Link href="/blog" className="block text-sm text-[var(--d-fg)] hover:text-[var(--d-accent)]">More practical guides for AI-ready businesses</Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="section-divider" />
      <section className="py-20 bg-[var(--d-bg-3)] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">BE UNDERSTOOD. BE CHOSEN. MAKE THE NEXT STEP WORK.</p>
          <h2 className="font-inter text-3xl md:text-4xl text-[var(--d-fg)] mb-4">Make your business easy for your customer’s AI assistant to understand, trust and do business with.</h2>
          <p className="text-[var(--d-fg-dim)] font-inter mb-8 leading-relaxed">Start with an Agent Readiness Review. The owned foundation is $4,995 one time, with no required retainer. A live action is separately scoped; a platform-layer pilot is a separate engagement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/machine-read" className="btn-gold text-base font-bold px-8 py-4 rounded-md inline-block">Request an Agent Readiness Review</Link>
            <Link href="/blog" className="btn-gold-outline text-base font-bold px-8 py-4 rounded-md inline-block">Read more articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}

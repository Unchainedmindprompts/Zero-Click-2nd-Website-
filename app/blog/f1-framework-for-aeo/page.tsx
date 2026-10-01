import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "f1-framework-for-aeo",
  "title": "The F1 Framework: Sequence Your AI-Ready Business Build",
  "description": "Use a practical F1-inspired framework to prioritize access, business identity, decision-making content, evidence, and a tested customer action.",
  "date": "2026-04-23",
  "intro": "An F1-inspired framework can help an owner see how the parts of a digital business fit together. Use it to diagnose the current constraint and sequence useful work, rather than to promise a place at the front of AI search.",
  "sections": [
    {
      "heading": "Use the metaphor as a planning tool",
      "paragraphs": [
        "A capable race car is a coordinated system. A business's digital presence also has interdependent parts: access, accurate identity, useful information, evidence, and a way to complete the next step.",
        "The comparison is a metaphor, not a literal account of how every Formula 1 team builds a car. Real engineering is iterative. Website work should be too. An established business may already have excellent content or a dependable platform; it does not need to discard them to follow a fixed order.",
        "Start with the constraint that blocks a real customer journey. If the page cannot be accessed, fix access. If the offer is unclear, clarify it. If requests disappear, fix that flow. The framework helps locate the work rather than justify an automatic rebuild."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Chassis: the pages need to work",
      "paragraphs": [
        "The chassis represents reliable access and delivery. Important content should be reachable, readable, and easy to navigate. The customer should not have to fight a broken menu, slow form, or missing service page.",
        "Inspect rendered content, ordinary links, crawl controls, and the main request path. Where a consumer cannot execute JavaScript, server-rendered or pre-rendered content can make information available. Evaluate the current implementation before choosing a framework or hosting provider.",
        "The acceptance test is concrete: can the intended reader or system obtain the relevant information, and can the customer use the site? A platform name is not a test result. A speed score alone cannot answer whether the business description is accurate."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: JavaScript and rendering",
          "href": "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
        }
      ]
    },
    {
      "heading": "Engine: connect the business facts",
      "paragraphs": [
        "The engine represents the model of the business: the company, owners, providers, services, locations, and relationships between them. It gives the rest of the site a consistent account to use.",
        "Connect each important claim to the right subject. A provider has a credential; a business has a service area; a project demonstrates particular work. Use accurate identifiers and relevant external profiles. Make the same information understandable in the page and in appropriate structured data.",
        "Check both syntax and meaning. The Schema Markup Validator can inspect vocabulary use, while Google's Rich Results Test checks supported search features. Neither tool confirms that a credential is genuine or that an AI assistant will recommend the business."
      ],
      "items": [],
      "sources": [
        {
          "label": "Schema.org validator",
          "href": "https://validator.schema.org/"
        },
        {
          "label": "Google Rich Results Test",
          "href": "https://search.google.com/test/rich-results"
        }
      ]
    },
    {
      "heading": "Aero: help a customer make the decision",
      "paragraphs": [
        "The aero package represents the way information is organized around the customer's task. Clear headings, direct explanations, and useful examples reduce the work of comparing options.",
        "A service page should explain who it fits, what the work includes, where it is available, and what happens next. If the customer needs an estimate, show what affects it and what information is needed. If a consultation comes first, explain the consultation.",
        "An article should answer a real question and connect to the relevant service or evidence. A frequently asked question deserves a useful answer because customers need it, not because a particular markup type is a shortcut into an AI response."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Evidence: the record behind the reputation",
      "paragraphs": [
        "The original metaphor called off-site mentions the graphics on the car. That understates the importance of substantive evidence. A verified credential, an independent review, and a documented project each do a different job in helping someone judge a provider.",
        "Bring the relevant proof into context on the website and link to original sources. Identify dates, roles, scope, and permissions. A customer should be able to tell what is independently verified and what is the business's own explanation.",
        "You do not need to finish every technical task before correcting an inaccurate directory listing or making a valid credential easier to find. Work can proceed in parallel where dependencies allow it. Sequence by impact and evidence rather than by a rigid metaphor."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Pit operations: make the next step complete",
      "paragraphs": [
        "A well-described business still needs a reliable way to receive the customer. Add a final question to the framework: after someone chooses us, what can they actually do?",
        "A request path needs required information, customer permission, service conditions, and a result that reflects reality. If a human needs to confirm availability, the assistant should return a request receipt and explain the follow-up. A confirmed appointment needs an actual reservation.",
        "Test the ordinary request and the awkward cases: missing details, an unsupported location, a duplicate, and an unavailable receiving service. Keep a clear route to a person. The aim is to reduce friction without inventing a promise on the business's behalf."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Turn the framework into a small work plan",
      "paragraphs": [
        "Write down the current journey for one important service. Identify each failure with evidence, choose the next change, and name its acceptance test. Avoid a long specification whose only measure of success is that more technology was installed.",
        "For example, unclear service coverage calls for accurate published areas and a test of an out-of-area request. Repeated inquiries call for a response process and duplicate handling. A false qualification in an AI answer calls for checking and correcting the source facts.",
        "After the change, retest the same journey and observe actual inquiries. AI answer samples can reveal misunderstandings; business results show whether the work helps. Neither a schema validator nor a single mention proves commercial success."
      ],
      "items": [
        "Identify one customer journey",
        "Find the constraint using observable evidence",
        "Make the smallest useful correction",
        "Test the result and the failure cases",
        "Expand only when the next need is clear"
      ],
      "sources": []
    },
    {
      "heading": "Build for the customer who delegates",
      "paragraphs": [
        "KodeCite's $4,995 one-time owned foundation, with no required retainer, connects the business facts and evidence. Live actions are scoped separately. That separation keeps the build aligned with the work the business can actually support.",
        "A personal agent or digital twin may help a customer research, compare, and make contact because it saves effort. Your site should make that journey easier. The framework succeeds when it helps you choose useful work and verify it, not when it produces a claim of guaranteed AI visibility."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Diagnose before rebuilding",
    "Connect the facts and proof",
    "Test a real customer journey"
  ],
  "faq": [
    {
      "q": "Must these layers be built in a fixed order?",
      "a": "No. Fix actual dependencies and preserve what works. Several improvements can proceed in parallel."
    },
    {
      "q": "What should count as a successful build?",
      "a": "A customer or supported assistant can understand the offer, inspect relevant evidence, and complete the correct next step with an accurate result."
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

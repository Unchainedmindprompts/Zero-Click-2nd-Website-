import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "the-ai-search-stack-nobody-is-building-for-small-businesses",
  "title": "The Business Foundation Behind AI Discovery and Action",
  "description": "A practical small-business stack for readable identity, connected evidence, clear offers, and tested actions that customers can use through AI assistants.",
  "date": "2026-03-13",
  "intro": "A business website needs to explain the company and support the next step. As customers delegate more research and contact work, those two jobs need to connect clearly for outside assistants as well as people.",
  "sections": [
    {
      "heading": "Start with the business model a machine can read",
      "paragraphs": [
        "A small business can have a polished homepage while leaving basic questions unanswered. Who owns it? Which person provides a specialized service? Where is it available? What proof supports the claims? What can a customer do next?",
        "The needed work is often connective. The facts may already exist in biographies, proposals, professional profiles, project records, and the owner's experience. Bring the relevant public facts together so they form a coherent account of the business.",
        "A website builder, content platform, or enterprise tool can be part of that solution. No product category is automatically incapable of it. Evaluate the particular implementation against the actual requirements instead of assuming a new framework guarantees discovery."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Layer one: dependable access",
      "paragraphs": [
        "Make important pages reachable through stable URLs and ordinary links. Check whether the main content is available to the consumers that need it. Identify accidental access blocks, broken pages, and essential information trapped in an inaccessible widget.",
        "Server rendering or pre-rendering can help where a crawler does not execute JavaScript. Google's documentation notes that not all bots can run it. That is a reason to inspect how a page is delivered, not a reason to claim every site built on a particular platform is unreadable.",
        "Performance needs measurement and ongoing care. Check actual loading, interaction, and stability. A CDN can help with delivery, while large media and third-party scripts can still hurt a modern site. No technology choice alone warrants a promised PageSpeed score."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: JavaScript and rendering",
          "href": "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
        },
        {
          "label": "web.dev: Core Web Vitals",
          "href": "https://web.dev/articles/vitals"
        }
      ]
    },
    {
      "heading": "Layer two: a consistent business identity",
      "paragraphs": [
        "Use one coherent identity for the company and connect the relevant owners, providers, locations, and services. Make the real relationships clear to a reader and express them in suitable structured data.",
        "This is where an entity graph becomes useful. It can connect a service to its provider, an article to its author, or a project to the business that performed the work. Stable identifiers help pages refer to the same thing rather than creating competing versions.",
        "The code should be specific because the underlying facts are specific. Do not invent qualifications, awards, reviews, locations, or years of experience to make a graph look complete. Markup validation checks structure; it does not verify the truth of a claim."
      ],
      "items": [],
      "sources": [
        {
          "label": "W3C: JSON-LD 1.1",
          "href": "https://www.w3.org/TR/json-ld11/"
        }
      ]
    },
    {
      "heading": "Layer three: offers and evidence a customer can evaluate",
      "paragraphs": [
        "Describe each priority offer in terms of the decision the customer faces. Include fit, scope, process, service area, and the conditions that affect price or availability. Link relevant proof near the claim it supports.",
        "A project archive can show how the business approaches different situations. A provider page can explain expertise and credentials. A video or article can answer a practical question. The value is in the relationship to the service, not in reaching a content quota.",
        "External sources remain useful. Link to professional records, relevant reviews, or original award announcements where appropriate. Keep owned explanations accurate and let independent sources remain independently identifiable."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Layer four: explicit capabilities",
      "paragraphs": [
        "Tell the customer and their assistant which next steps are actually supported. A contact link offers a route to a conversation. A request endpoint may accept a structured inquiry. A booking integration may reserve a live time slot. A transaction connection may support a purchase. Those claims require different evidence.",
        "For a live action, define required information, service conditions, customer permission, and an exact result. Preserve a route to a person when the request falls outside the supported path. A supported interface should be documented for its intended consumer.",
        "Files such as llms.txt can provide context, but they do not activate a service. The original llms.txt publication is a proposal for organizing information for language models. A custom agent.json file also needs an actual consuming integration before it becomes useful operationally."
      ],
      "items": [],
      "sources": [
        {
          "label": "Answer.AI: the original llms.txt proposal",
          "href": "https://www.answer.ai/posts/2024-09-03-llmstxt.html"
        }
      ]
    },
    {
      "heading": "Layer five: verify the whole path",
      "paragraphs": [
        "Test whether an unfamiliar customer can understand the offer and complete the next step. Then test any supported outside-agent path with authorized test data. Include missing fields, unsupported requests, a repeat submission, and a failure in the receiving system.",
        "For Luxe Window Works, the established result is an external AI consultation request, one email, and a duplicate prevented. The scope is deliberately precise. It does not demonstrate automated quotes, appointment booking, or checkout.",
        "The measure of an action is what actually happened in the business system. If the request was received but a person still needs to respond, say that. If the integration failed, do not return a success message simply because the assistant attempted the action."
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
      "heading": "Choose the right scope to own",
      "paragraphs": [
        "KodeCite's foundation is $4,995 one time, with ownership and no required retainer. A live action is separately scoped around the particular business systems and completion rules. A platform-layer pilot is a separate engagement rather than an implied feature of every foundation.",
        "Ask what you own, which services incur operating costs, who maintains the facts, and what access is needed. Domain, hosting, updates, and service-provider charges do not disappear merely because a build is owned.",
        "The goal is not a stack with the most tools. It is a business that a customer's assistant can understand, evaluate, and engage correctly. Keep working components, fix observed gaps, and expand capability after a useful result is established."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Readable access and clear identity",
    "Offers connected to credible proof",
    "Actions backed by real integrations"
  ],
  "faq": [
    {
      "q": "Does this require Next.js or a new website?",
      "a": "Not necessarily. Inspect the current site against the required access, content, data, and action capabilities. Rebuild only when there is a demonstrated reason."
    },
    {
      "q": "Does the foundation include live booking or checkout?",
      "a": "A live action is separately scoped and tested. A foundation should not imply access to a calendar, pricing system, or payment service that has not been connected."
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

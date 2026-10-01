import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "compressed-search-entity-trust",
  "title": "Compressed Search: Give AI a Clear Reason to Choose You",
  "description": "When assistants summarize business options, specific identity, credentials, evidence, and next steps help customers make an informed choice.",
  "date": "2026-05-09",
  "intro": "An AI assistant can do some of the reading and comparing before a customer visits your site. Give it specific, checkable reasons your business fits, along with a clear path from interest to a real request.",
  "sections": [
    {
      "heading": "What compressed search means in practice",
      "paragraphs": [
        "Compressed search is a useful description of a customer journey in which an assistant summarizes some of the research. The person can ask a question, compare options, and refine the request without opening every source personally.",
        "It is not a rule about how many businesses or links appear. A broad research question may produce a long answer. A precise request may lead to a small set of options or a request for more information. Voice interfaces can favor brevity without removing the user's ability to ask for alternatives.",
        "For a business, the planning implication is that important comparisons may happen before a visit. Make the reasons for choosing you available at that point, rather than relying on a visitor to infer them from photographs and a slogan."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Entity clarity connects the facts to the right business",
      "paragraphs": [
        "An entity is a distinct thing: the company, an owner, a service, a location, a project, or an article. Connecting those things makes it easier to establish which facts belong together.",
        "Google's 2012 Knowledge Graph announcement described a move toward understanding entities and their relationships. JSON-LD is a standard way to express linked data. These are useful foundations for describing a business; they are not a scoring system that assigns it a guaranteed recommendation.",
        "An owner's credential should connect to that person. A service should connect to its provider and actual service area. A project should identify the work the business performed. A stable business identity helps keep those relationships from drifting across pages."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google: the original Knowledge Graph announcement",
          "href": "https://blog.google/products/search/introducing-knowledge-graph-things-not/"
        },
        {
          "label": "W3C: JSON-LD 1.1",
          "href": "https://www.w3.org/TR/json-ld11/"
        }
      ]
    },
    {
      "heading": "Trust needs something a reader can inspect",
      "paragraphs": [
        "The word “trusted” is easy to publish. The useful question is what supports it. A qualification can have an issuer, a status, and a scope. An award can have a year, category, and source. A review can link to its original context. A project can describe the problem and the documented work.",
        "For professional services, make the people visible. A visitor should know who will provide the service, what the person's role is, and which qualifications apply. Do not turn a company claim into a personal credential or present an old award as a current endorsement.",
        "Structured data should represent these facts accurately. It should not add hidden superlatives or imply a review exists on a page where it does not. The goal is to make evidence easier to find and interpret, not to substitute code for evidence."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: structured data guidelines",
          "href": "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"
        }
      ]
    },
    {
      "heading": "Useful specificity beats a generic claim of expertise",
      "paragraphs": [
        "Consider two hypothetical descriptions of a window-treatment business. One says it offers exceptional quality and service. The other explains which spaces it works with, which product decisions it helps customers make, where it travels, what happens at a consultation, and when a quote is prepared.",
        "The second description gives an assistant more information for a particular household's request. Project examples can add evidence of similar work. Clear limits can prevent a poor match before anyone spends time on an inquiry.",
        "This approach applies to services with very different sales processes. A consultant can explain the size and stage of business they serve. A contractor can state the work they undertake and what an estimate requires. The details should come from the operator, not from a template predicting what a market wants."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Keep evidence on your site and connected to its sources",
      "paragraphs": [
        "If useful evidence is scattered across directories, videos, or professional profiles, create an owned page that puts it in context. Link to the original sources so a reader can verify the claims. Keep the distinction between your own account of the work and an independent assessment.",
        "A real estate professional might publish a permitted project or transaction story, explaining their role without disclosing private client details. A video can sit beside a reviewed transcript and the relevant service. The page remains useful even when someone encounters the business through a different platform.",
        "Ownership does not require copying material you do not have permission to reproduce. Preserve attribution, respect client permissions, and update or remove evidence when its status changes. A small, maintained body of proof is more credible than a large stale archive."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "A recommendation still needs a usable next step",
      "paragraphs": [
        "After a customer identifies a suitable business, the assistant needs to know what it can help them do. Requesting a consultation, checking live availability, booking a time, and purchasing a product are separate capabilities.",
        "For each available action, make the requirements clear: the information needed, any service conditions, customer approval, and the expected result. A supported path should return an accurate confirmation or a way to reach a person.",
        "The Luxe Window Works example demonstrates an external AI consultation request, one email, and a duplicate prevented. That is a useful bridge from discovery to engagement. Broader scheduling or transaction capabilities would need their own tested integrations."
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
      "heading": "Review the decision, not just the mention",
      "paragraphs": [
        "Test a few realistic customer questions with the assistants your customers may use. Include different needs, locations, and constraints. Record which service is described, what evidence is cited, where the answer is uncertain, and whether the proposed next step is accurate.",
        "A mention can be encouraging, but the stronger result is a correct match with an honest explanation. If an assistant says you offer something you do not, that is a problem even when the business name appears prominently.",
        "This is the practical meaning of machine-readable trust: a coherent, checkable account of the business that supports a better customer decision. It remains useful whether the customer sees a list, hears a summary, or asks an agent to make contact."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Connect people, offers, and evidence",
    "Show why a specific customer fits",
    "Make the next step dependable"
  ],
  "faq": [
    {
      "q": "Does compressed search always mean fewer links?",
      "a": "No. It describes research being summarized or delegated. The number of options and sources varies by question, interface, and system."
    },
    {
      "q": "Does an entity graph prove a business is trustworthy?",
      "a": "No. It connects claims and evidence to the right people and business. The underlying evidence still needs to be accurate and independently assessable."
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

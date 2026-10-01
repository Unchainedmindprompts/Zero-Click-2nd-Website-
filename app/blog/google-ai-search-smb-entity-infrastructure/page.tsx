import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "google-ai-search-smb-entity-infrastructure",
  "title": "Google AI Search and the Business Facts Customers Need",
  "description": "Prepare a small-business website for AI-assisted research with clear identity, useful services, verifiable evidence, and an accurate next step.",
  "date": "2026-05-20",
  "intro": "Google’s AI search experiences are one route through which customers may compare a business. Build a clear account of who you are, what you offer, and how to proceed that also works for other assistants and outside agents.",
  "sections": [
    {
      "heading": "What changes when an assistant does part of the research",
      "paragraphs": [
        "A customer researching a service may want an explanation of the options before visiting a provider. An assistant can help summarize the information, compare possible fits, and refine the question. The business website remains a place where important facts and evidence can be checked.",
        "Google describes AI Overviews and AI Mode as search experiences that surface supporting links and can explore related queries. It does not require special AI markup or additional AI files for inclusion. Existing search fundamentals remain relevant.",
        "The useful owner response is to make the business easier to understand across the journey. Google's interface matters, but so do ChatGPT, Perplexity, other assistants, direct referrals, and customers who read the site themselves."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: AI features and your website",
          "href": "https://developers.google.com/search/docs/appearance/ai-features"
        }
      ]
    },
    {
      "heading": "Write the business record before adding more articles",
      "paragraphs": [
        "Start with the facts a customer needs to know about the company. Identify the business, the owners or providers relevant to the work, actual locations, service areas, and ways to make contact. Distinguish a place where customers can visit from an area where a mobile service operates.",
        "Next, explain the offer in enough detail to judge fit. What problem does it solve? Which customers does it serve? What is included? What needs a consultation, measurement, or review? Which conditions affect price or timing?",
        "These facts are often spread across proposals, intake calls, and the owner's experience. Bring the publishable information onto the website. A useful business record reduces repeated questions and gives an assistant a firmer basis for an accurate comparison."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Connect expertise to the person who has it",
      "paragraphs": [
        "A business name and logo do not tell a customer who will provide a service. Introduce the people responsible for the work and connect their experience to the actual offer.",
        "Where credentials matter, identify the qualification and its issuer, and link to a relevant verification source when available. State an award's year and category. Explain a person's role in a project rather than making a broad claim that the entire company has the same experience.",
        "This is particularly useful when a customer brings a specific problem. A general claim of expertise may be less informative than a clear explanation of which person handles the work and what supports that qualification. Keep sensitive customer details out of the public record."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Use structured data to express the visible facts",
      "paragraphs": [
        "Appropriate structured data can describe the business, people, services, and content in code. It should agree with the page a customer can read. Choose types and relationships that fit the real information rather than adding every available property.",
        "A website can connect an article to its author, a service to its provider, and a business to its public profiles. A validator can help find implementation errors. It cannot determine whether a claim is true or whether a particular assistant will select it.",
        "Google's structured data guidance requires accurate representation of page content and makes clear that correct markup does not guarantee a search feature. Treat the code as a maintained description, not a substitute for clear writing and real evidence."
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
      "heading": "Keep useful content close to the decision",
      "paragraphs": [
        "A page should earn its place by answering a real customer question. For a hypothetical remodeling service, an article could explain what the first site visit covers, which decisions affect an estimate, and what information the owner should gather beforehand.",
        "Link that explanation to the relevant service and any permitted examples. A reader should be able to follow the connection without guessing which part of the business is responsible. The same context can help an assistant avoid summarizing a general guide as a promise about a specific project.",
        "Maintain older content when conditions change. A precise article with an outdated process can create more confusion than a shorter current answer. Assign someone to update important offers, qualifications, and next-step instructions."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Give a chosen customer a clear route forward",
      "paragraphs": [
        "After comparison comes engagement. Make the current next step explicit: call, request a consultation, submit a defined inquiry, or use a live action supported by a real connection.",
        "A future-facing capability should not be written as a deployed feature. If a calendar is not connected, an assistant cannot infer a reserved appointment from business hours. If pricing requires review, a service page cannot become an automatic quote.",
        "The Luxe Window Works example demonstrates a specific external AI consultation request, one email, and a duplicate prevented. It connects discovery to a useful request without claiming autonomous booking or checkout. That is the level of specificity a customer deserves."
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
      "heading": "Decide whether to tune or rebuild using evidence",
      "paragraphs": [
        "A current site may already support much of this work. Check the actual content, access, structured data, performance, and request flow. WordPress, Wix, Squarespace, and custom sites should be judged by what the implementation can do.",
        "Ask a reviewer to show the failed journey and the proposed correction. Some gaps call for an updated service page or corrected profile. Others require data modeling or a live integration. A new technology stack is a means, not the outcome.",
        "KodeCite's $4,995 one-time owned foundation has no required retainer. A live action is separately scoped, and a platform-layer pilot is separate. The aim is to make the business easy for the customer's assistant to understand, trust, and do business with across the channels that matter."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Make the business facts explicit",
    "Connect expertise to evidence",
    "Support the step after comparison"
  ],
  "faq": [
    {
      "q": "Is Google the whole AI-readiness strategy?",
      "a": "No. Google is one discovery route. The business foundation should also help general assistants, outside agents, and people evaluating the business directly."
    },
    {
      "q": "Should I replace my website platform first?",
      "a": "Check the implementation first. A rebuild needs a demonstrated requirement that cannot be met well by improving the existing site."
    }
  ]
};
const canonical = `https://www.kodecite.ai/blog/${article.slug}`;
const modified = '2026-10-01T00:00:00Z';
const published = `${article.date}T00:00:00-07:00`;
const imageUrl = "https://www.kodecite.ai/images/google-ai-search-smb-entity-infrastructure.png";
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
      <section className="bg-[var(--d-bg)] px-4 pb-12"><div className="max-w-4xl mx-auto"><Image src="/images/google-ai-search-smb-entity-infrastructure.png" alt="Illustration connecting a business and its identity, services, and evidence to an AI-assisted search interface" width={1672} height={941} className="w-full rounded-xl shadow-sm" priority /></div></section>
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

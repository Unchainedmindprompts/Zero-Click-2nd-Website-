import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "automation-vs-digital-real-estate",
  "title": "Where AI Helps a Business: Discovery and the Next Step",
  "description": "Choose AI investments by the customer journey: accurate discovery, useful comparisons, and a reliable next step, alongside internal time savings.",
  "date": "2026-03-10",
  "intro": "Internal automation and customer-facing readiness solve different problems. The useful investment is the one that removes a real obstacle for your team or the people trying to do business with you.",
  "sections": [
    {
      "heading": "Start with the work, not the category",
      "paragraphs": [
        "A business can benefit from faster document preparation, better intake, easier discovery, or fewer repeated questions. There is no universal rule that automation fails or that visibility deserves every dollar first.",
        "Map a recent customer journey. How did the person find you? What did they need to understand? What almost stopped them? Which information did the team have to collect twice? Where did a person make a judgment that the software could not responsibly make?",
        "This separates distinct opportunities. An internal assistant may save preparation time. Better public information may attract a more suitable customer. A connected request flow may remove friction between being chosen and being contacted. Measure each against the problem it is meant to solve."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Your customer may bring their own assistant",
      "paragraphs": [
        "An on-site chatbot only meets people who have reached your site. A customer's personal agent may be comparing businesses before that visit, carrying preferences across different sources, and preparing the next step on the customer's behalf.",
        "For example, a homeowner might ask for providers who serve a specific area, work with a particular kind of property, and offer a consultation before a custom quote. If your website explains those facts clearly, the assistant has a better basis for judging fit. If your site only says “contact us for more,” the comparison leaves important questions unanswered.",
        "The broader opportunity includes AI search engines, general assistants, and outside agents. The business foundation should remain useful across those routes, without assuming one platform will become every customer's front door."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Define the business before delegating its promises",
      "paragraphs": [
        "Before automating a customer-facing response, establish what the business actually offers. Identify the company, its owners and providers, its services, the customers it serves, and evidence for qualifications or claims. Encode supported relationships where appropriate and keep the same facts visible to people.",
        "Then distinguish a fact from a decision. “We offer in-home consultations in these areas” may be a stable public fact. “We can visit Tuesday at 2 p.m.” needs current scheduling information. “Your project will cost this amount” may require measurements, product choices, and a person authorized to quote.",
        "An assistant should not have to turn a general service description into a promise. Good preparation makes the available next step explicit, including what information or approval is still needed."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Choose an action with a clean boundary",
      "paragraphs": [
        "A useful first action is specific enough to verify. “Help the customer” is too broad. “Submit a consultation request using approved contact details and return its reference” gives everyone a result to check.",
        "List the information required and collect only what the request needs. Explain who receives it and why. If the customer is asking through an outside assistant, the permission to pass their details should be clear. Send sensitive intake to an appropriate channel rather than putting it in public website files.",
        "Define the response just as carefully. Received, awaiting review, booked, declined, and needs more information mean different things. The wording should match what the receiving system or person has actually established."
      ],
      "items": [
        "A named action and supported destination",
        "Required fields and customer permission",
        "Business conditions that can be checked",
        "An accurate result or a human handoff"
      ],
      "sources": []
    },
    {
      "heading": "A narrow proof is more useful than a broad claim",
      "paragraphs": [
        "For Luxe Window Works, the verified result is an external AI consultation request, one email, and a duplicate prevented. That demonstrates a working request path and a useful repeated-submission safeguard.",
        "It does not establish an autonomous scheduling or quoting service. Calling the same result an “AI booking” would create the wrong expectation for both the owner and the customer. The distinction matters because the business still has to respond and agree on what happens next.",
        "Future actions could include availability checks, reservations, or transactions where the business systems and rules support them. Each needs a separate design and a test of the actual outcome. Capability descriptions should grow with demonstrated capability."
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
      "heading": "Measure time saved and business completed separately",
      "paragraphs": [
        "For internal automation, compare the time and correction effort before and after the change. A quick draft that requires lengthy repair may not save work. Include exceptions, staff review, and the impact on the customer.",
        "For discovery, track whether people are finding the right service and arriving with accurate expectations. For an action flow, track accepted requests, duplicates, errors, human follow-up, and completed outcomes. Do not count a submission as revenue or a tool call as a successful appointment.",
        "These measures help decide what comes next. A strong request path with slow human follow-up may need an operational change. A well-run operation attracting unsuitable inquiries may need clearer service information. The answer need not be another AI feature."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Own the foundation, then connect useful capabilities",
      "paragraphs": [
        "KodeCite builds a $4,995 one-time owned foundation with no required retainer. It makes the business easier to understand and evaluate. A live action is separately scoped around the actual workflow; a platform-layer pilot is separate as well.",
        "The purpose is to help a business be understood, chosen, and engaged when customers delegate. Internal tools can support that work, but the public description and the real operating process need to agree.",
        "Choose the smallest improvement that makes the journey better, verify it, and keep a person available for the decisions that still need one. That is a more practical investment discipline than choosing between “automate everything” and “get recommended first.”"
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Find the actual friction",
    "Describe only real capabilities",
    "Measure a confirmed customer outcome"
  ],
  "faq": [
    {
      "q": "Should I prioritize internal automation or AI discovery?",
      "a": "Choose the bottleneck you can demonstrate. Internal time savings, better customer fit, and completed next steps require different work and measures."
    },
    {
      "q": "Does an AI request mean the customer has booked?",
      "a": "No. A request confirms only the state returned by the business. A booking requires an actual reserved slot and confirmation."
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

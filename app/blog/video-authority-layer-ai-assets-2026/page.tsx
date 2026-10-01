import type { Metadata } from 'next';
import Link from 'next/link';

import { articleAuthor, articlePublisher, blogCollectionPage, businessRef } from '@/lib/schema';

const article = {
  "slug": "video-authority-layer-ai-assets-2026",
  "title": "Make Your Business Videos Useful to Customers and AI",
  "description": "Connect videos to services, people, accurate transcripts, and structured metadata so customers and assistants can evaluate the work and take the next step.",
  "date": "2026-03-23",
  "intro": "A useful video can explain the work and show the people behind a business. Put it in context on your website so customers and their assistants can understand what it demonstrates and what to do next.",
  "sections": [
    {
      "heading": "Give the video a job in the customer decision",
      "paragraphs": [
        "A process walkthrough, product explanation, or project story can answer something a prospective customer genuinely needs to know. Start there rather than with a target number of uploads.",
        "A hypothetical installer might demonstrate how a consultation helps a homeowner choose among window-treatment options. A service provider might explain what information is needed before an estimate. A project video might show the work performed and the limits of what the example proves.",
        "YouTube and other platforms can be valuable distribution channels. An owned page gives you another place to connect the video to the service, the people involved, and the current next step. Neither route guarantees reach or a citation by an AI system."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Make the important information available in text",
      "paragraphs": [
        "Different systems can encounter a video through its page, captions, metadata, or media content. Do not assume every assistant processes video the same way or that none of them can interpret it.",
        "A reviewed transcript and a concise explanation help a customer who cannot or does not want to watch. They also provide readable material for systems that rely on text. Correct names, technical terms, and numbers, while preserving what the speaker actually said.",
        "If you add a summary or an updated answer, label it clearly rather than silently rewriting the transcript. A video recorded under older conditions may need a note explaining what has changed. Accuracy is more valuable than adding repeated keywords."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Connect the content to the real business",
      "paragraphs": [
        "Identify the speaker and their role. Link the relevant service, project, or provider page. Explain what the video covers, where the example applies, and whether it represents a general process or one customer's situation.",
        "Where credentials or awards are relevant, connect them to their source. Where a client appears or a project reveals private details, confirm the appropriate permission before publishing. A useful example does not require exposing names, addresses, or other unnecessary information.",
        "This context helps prevent overinterpretation. A video about one completed project should not become a claim that every job has the same scope, cost, or result. Give an assistant the information it needs to describe the example accurately."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Use video metadata that matches the actual media",
      "paragraphs": [
        "Google's VideoObject guidance lists name, thumbnailUrl, and uploadDate as required properties for its video structured data. Recommended details include a description, duration, and a supported route to the media. A contentUrl identifies the media file itself; an embedUrl identifies the player. Do not invent a downloadable file URL for a third-party embed.",
        "Schema.org also defines a transcript property. Supply a faithful transcript when using it, and ensure the video is actually available on the page. The vocabulary describes the media; its existence does not guarantee that every assistant will use it.",
        "Useful metadata can include the actual creator, publisher, subject, and supported segments. Only add timestamped clips when the player and URLs work as described. Validate the implementation and inspect the human experience as well."
      ],
      "items": [],
      "sources": [
        {
          "label": "Google Search Central: video structured data",
          "href": "https://developers.google.com/search/docs/appearance/structured-data/video"
        },
        {
          "label": "Schema.org: VideoObject vocabulary",
          "href": "https://schema.org/VideoObject"
        }
      ]
    },
    {
      "heading": "Keep the page useful even before someone presses play",
      "paragraphs": [
        "Lead with a short explanation of the question the video answers. Offer the relevant service context, a readable transcript or detailed summary, and a way to move to the next step. Avoid a page that contains only an unexplained player.",
        "Check the video on mobile and on a slower connection. Verify that the thumbnail, captions, and player work. A heavy embed should not make the rest of the page difficult to use. If the source video is removed or made private, the page needs attention.",
        "For a library of videos, organize around customer questions rather than upload dates alone. A small set of current, well-contextualized videos can be easier to evaluate than a large feed of unrelated clips."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Connect the explanation to an honest next step",
      "paragraphs": [
        "If the video helps someone decide a service may fit, make the follow-through clear. Explain whether the next step is a consultation request, a discussion about scope, or a supported booking or purchase.",
        "A customer's personal agent may help collect approved information and initiate the available request. It needs the same clarity as the person: what information is required, which conditions apply, and what the returned result means.",
        "Do not infer live pricing or availability from a recorded video. A price mentioned months ago may no longer apply, and a demonstration of a booking screen does not establish access for an outside agent. Current business information and tested capabilities need to support the next step."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Measure usefulness before buying more distribution",
      "paragraphs": [
        "Track whether people watch or read the material, whether it answers repeated questions, and whether inquiries arrive with better information. Look at the quality of the requests, not only the view count.",
        "AI citations can be one additional observation. Record the question, date, source, and accuracy if a video or its page is used. There is no established universal multiplier for an “enriched” transcript, and no guaranteed loop in which an AI citation causes YouTube to distribute a video more widely.",
        "If paid distribution is part of the plan, set its budget and outcome separately. A useful page can support that work, but the presence of structured data does not prove an advertising campaign will pay for itself."
      ],
      "items": [],
      "sources": []
    },
    {
      "heading": "Start with one video worth keeping",
      "paragraphs": [
        "Choose a video that answers an important pre-hire question. Check the permissions and facts, prepare the text, connect the relevant person and service, add accurate metadata, and test the page and next step.",
        "KodeCite's owned business foundation connects this kind of evidence to the business it describes. The foundation is $4,995 one time with no required retainer; additional media work and live actions should have an explicit scope rather than be assumed from a general promise.",
        "The goal is a customer or assistant that can understand what the video proves, decide whether the service fits, and proceed with accurate expectations. That makes an existing video a useful part of the business, whatever channel brings the customer to it."
      ],
      "items": [],
      "sources": []
    }
  ],
  "takeaways": [
    "Choose a real customer question",
    "Preserve accurate transcripts and context",
    "Link evidence to the next step"
  ],
  "faq": [
    {
      "q": "Can an AI system watch video?",
      "a": "Capabilities vary. Some systems can process video, while a particular search or retrieval path may rely on text and metadata. Provide clear context rather than assuming one universal behavior."
    },
    {
      "q": "Do I need both contentUrl and embedUrl?",
      "a": "Use the real media or player URLs that apply. Do not manufacture a media-file URL merely to fill a property."
    },
    {
      "q": "Will adding VideoObject guarantee citations?",
      "a": "No. It describes the media. Discovery and citation depend on the consuming system and the usefulness and availability of the content."
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

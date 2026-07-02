// ─────────────────────────────────────────────────────────────────────────────
// Canonical KodeCite entity-graph identifiers + reusable JSON-LD fragments.
//
// SINGLE SOURCE OF TRUTH. Article schema must reference these instead of
// hardcoding @id strings, so the identity graph can never drift if the
// canonical host or an @id ever changes (e.g. the non-www → www migration).
//
// Standard for every article going forward:
//   import { articleAuthor, articlePublisher, blogCollectionPage,
//            entityGraphTerm, businessRef } from '@/lib/schema';
//   ...
//   author: articleAuthor,
//   publisher: articlePublisher,
//   isPartOf: blogCollectionPage,
//   about: [ entityGraphTerm, /* topic DefinedTerms */, businessRef ],
// ─────────────────────────────────────────────────────────────────────────────

export const ORIGIN = 'https://www.kodecite.ai';

// Canonical entity @ids (defined once in app/layout.tsx's site @graph)
export const BUSINESS_ID = `${ORIGIN}/#business`;
export const FOUNDER_ID = `${ORIGIN}/#founder`;
export const WEBSITE_ID = `${ORIGIN}/#website`;
export const ENTITY_GRAPH_ID = `${ORIGIN}/#entity-graph`;
export const GLOSSARY_ID = `${ORIGIN}/#glossary`;
export const BLOG_ID = `${ORIGIN}/blog`;

// Lean article author. The full bio / knowsAbout / sameAs live ONLY in the
// canonical #founder node in app/layout.tsx — never duplicated per article.
export const articleAuthor = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Mark Abplanalp',
  jobTitle: 'Founder',
  url: ORIGIN,
} as const;

export const articlePublisher = {
  '@type': 'Organization',
  '@id': BUSINESS_ID,
  name: 'KodeCite.ai',
  logo: {
    '@type': 'ImageObject',
    url: `${ORIGIN}/og-image.png`,
    width: 1200,
    height: 630,
  },
} as const;

export const blogCollectionPage = {
  '@type': 'CollectionPage',
  '@id': BLOG_ID,
  name: 'KodeCite.ai Blog',
  url: BLOG_ID,
} as const;

// Canonical DefinedTerm node for KodeCite's coined "Entity Graph" concept.
export const entityGraphTerm = {
  '@type': 'DefinedTerm',
  '@id': ENTITY_GRAPH_ID,
  name: 'Entity Graph',
  inDefinedTermSet: { '@id': GLOSSARY_ID },
} as const;

// Reference to the canonical business entity (for an article's `about`).
export const businessRef = { '@id': BUSINESS_ID } as const;

// Canonical areaServed for the #business node (imported by app/layout.tsx so it
// propagates to every page). Typed local City / AdministrativeArea nodes with
// Wikipedia sameAs for entity resolution, plus Country so we stay nationally
// declared — a local signal for "AEO agency North Idaho / Spokane" queries
// without self-limiting to one market.
export const businessAreaServed = [
  { '@type': 'City', name: "Coeur d'Alene", sameAs: 'https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho' },
  { '@type': 'City', name: 'Post Falls', sameAs: 'https://en.wikipedia.org/wiki/Post_Falls,_Idaho' },
  { '@type': 'City', name: 'Hayden', sameAs: 'https://en.wikipedia.org/wiki/Hayden,_Idaho' },
  { '@type': 'City', name: 'Sandpoint', sameAs: 'https://en.wikipedia.org/wiki/Sandpoint,_Idaho' },
  { '@type': 'City', name: 'Spokane', sameAs: 'https://en.wikipedia.org/wiki/Spokane,_Washington' },
  { '@type': 'AdministrativeArea', name: 'Kootenai County', sameAs: 'https://en.wikipedia.org/wiki/Kootenai_County,_Idaho' },
  { '@type': 'AdministrativeArea', name: 'North Idaho', sameAs: 'https://en.wikipedia.org/wiki/Idaho_Panhandle' },
  { '@type': 'Country', name: 'United States' },
] as const;

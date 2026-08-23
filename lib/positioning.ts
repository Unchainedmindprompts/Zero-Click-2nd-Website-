// Shared positioning copy.
// Internal claim rules control what we write. They are not the public message.
// Do not claim: first/only/category leader, human search is dead, mass adoption,
// guaranteed rankings/citations, or that Foundation includes an action endpoint.

export const CATEGORY =
  'Owned business infrastructure for the agent-driven web.';

export const THESIS =
  'Kodecite builds the trusted digital business layer that helps AI agents understand, evaluate, recommend, and take authorized next steps with service businesses.';

export const CONSEQUENCE =
  'As customers delegate more discovery and action to AI, businesses need to remain understandable, verifiable, and safely actionable inside the commercial decision loop.';

export const WEBSITE_ROLE =
  'The website remains the human-facing experience. The digital business layer is the verified, machine-facing representation of the same business.';

export const AGREEMENT =
  'Business truth, services, geography, policies, permissions, capabilities, and actions must agree.';

export const RECOMMENDATION_STAGE =
  'Recommendation is only one stage. The larger goal is safe agent participation.';

// FAQ-only: one concise competitive-market explanation. Do not repeat on other pages.
export const MARKET_SHAPE =
  'This is an emerging, fragmented category. Existing tools often address individual layers — visibility, schema, scheduling, browser automation, commerce, or enterprise agent governance. Service businesses still need those layers reconciled into one usable system.';

export const CONNECTIVE_LAYER =
  'Kodecite connects verified business truth, explicit capabilities, controlled agent actions, owned infrastructure, and human handoff.';

export const LUXE_PROOF =
  'Luxe Window Works is production proof that this infrastructure can work.';

export const HOME_H1 = 'Make your business usable by AI.';

export const HOME_SUPPORT =
  'Kodecite builds the trusted digital business layer that makes your company understandable, verifiable, recommendable, and safely actionable by AI—while keeping you in control.';

export const PRINCIPLE =
  'AI should not merely find a business. It should understand what the business does, know what it is allowed to do, and take the next authorized step with a customer.';

export const OUTCOMES = [
  'Understandable',
  'Verifiable',
  'Recommendable',
  'Actionable',
  'Controlled',
] as const;

export const FOOTER_LINE =
  'Owned by you. Controlled by you. Ready for the agent-driven web.';

export const LOCALITY =
  'Based in North Idaho. Built for service businesses anywhere.';

export const REVIEW_NAME = 'Agent Readiness Review';
export const REVIEW_HREF = '/machine-read';
export const REVIEW_PROMISE =
  'See what AI can understand, verify and safely do with your business today.';
export const REVIEW_CTA = 'Request an Agent Readiness Review';
export const REVIEW_CTA_SHORT = 'Agent Readiness Review';
export const REVIEW_TURNAROUND = 'Free. Written within two business days.';

export const PLATFORM_SIDECAR =
  'a Kodecite-built, business-owned Next.js/Vercel sidecar deployed on infrastructure and a domain the client controls';

export const FOUNDATION_BOUNDARY =
  'The $4,995 Foundation Build includes an owned website, canonical business truth, entity graph, discovery, and capability mapping. It does not automatically include a production action endpoint.';

export const FIVE_LAYERS = [
  {
    n: '01',
    name: 'Truth',
    h: 'What is true about the business.',
    d: 'Identity, people, services, products, locations and service areas, credentials, proof, policies, and limitations — published as one authoritative record.',
  },
  {
    n: '02',
    name: 'Capability',
    h: 'What can actually be requested.',
    d: 'What a customer or agent may ask for, what information is required, where the business works, which services are available, and what success does — and does not — mean.',
  },
  {
    n: '03',
    name: 'Control',
    h: 'What the business will not pretend.',
    d: 'Human confirmation, authorization, validation, rate limiting, idempotency, and fail-closed behavior. No false booking, pricing, purchase, or acceptance.',
  },
  {
    n: '04',
    name: 'Action',
    h: 'The next authorized step.',
    d: 'Submit a consultation, send a qualified inquiry, request an appointment, or hand off to a human. Schedule or transact later only where the real business permits it. Not every client needs every action. A production action is a separately scoped Agent Capability Build.',
  },
  {
    n: '05',
    name: 'Distribution',
    h: 'How people, search, and agents find the same truth.',
    d: 'Website, search, structured data and entity graphs, external profiles, llms.txt, agent.json, capability discovery, protected APIs, and future MCP or browser agents. These are delivery surfaces — not the product category.',
  },
] as const;

export const LUXE_CAPABILITY_URL =
  'https://www.luxewindowworks.com/api/capabilities/request-in-home-consultation';

export const LUXE_FLAGSHIP_HREF =
  '/blog/from-recommended-to-actionable-luxe-window-works';

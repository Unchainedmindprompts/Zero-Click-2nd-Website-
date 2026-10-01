// Shared positioning copy.
// Internal claim rules control what we write. They are not the public message.
// Do not claim: first/only/category leader, human search is dead, mass adoption,
// guaranteed rankings/citations, or that Foundation includes an action endpoint.

export const CATEGORY =
  'Business-owned websites and connected business information for the agent-driven web.';

export const THESIS =
  'Kodecite makes a business easier for a customer’s AI assistant to understand, trust and do business with: a clear identity, useful service information, real evidence and a dependable next step.';

export const CONSEQUENCE =
  'Customers want less work between a need and a useful result. When they delegate that work to an assistant, the business needs to make its fit, evidence and next steps clear.';

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
  'The Luxe Window Works case study documents an authorized production consultation-request test, including email delivery, duplicate handling and conflict rejection.';

export const HOME_H1 = 'Make your business easy for your customer’s AI assistant to understand, trust and do business with.';

/** Shared summary for supporting components. */
export const HOME_SUPPORT_HERO =
  'Your next customer may ask an AI assistant to find, compare, and contact a business for them. Before they visit your website, the AI may determine which businesses fit.';

/** Remainder of HOME_SUPPORT — shown after the mobile journey. */
export const HOME_SUPPORT_ELIGIBILITY =
  'If it cannot establish fit or trust, your business may never reach that customer. Kodecite keeps you eligible by making the business understandable, verifiable, and safely actionable.';

export const HOME_SUPPORT = `${HOME_SUPPORT_HERO} ${HOME_SUPPORT_ELIGIBILITY}`;

export const HOME_CONSEQUENCE =
  'If AI cannot establish that your business fits, the customer connection may end before it begins.';

export const HOME_JOURNEY = [
  'Customer delegates an outcome',
  'AI evaluates businesses',
  'Qualified businesses are recommended or contacted',
] as const;

export const ABOUT_MISSION =
  'Kodecite exists to make it easier for customers and their AI assistants to understand a good business and take the next step with it.';

export const PRICING_CONTEXT =
  'Foundation Build creates the owned foundation AI can understand and evaluate. Agent Capability Build adds one approved action after the rules are clear. Foundation does not automatically include a live agent-action endpoint.';

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
  'Your business, clearly understood. Your customer’s next step, made easier.';

export const LOCALITY =
  'Based in North Idaho. Built for service businesses anywhere.';

export const REVIEW_NAME = 'Agent Readiness Review';
export const REVIEW_HREF = '/machine-read';
export const REVIEW_PROMISE =
  'Find the gaps between what your business offers and what a customer’s assistant can understand or request today.';
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
    h: 'Who you are, what you offer and why you fit.',
    d: 'Identity, people, services, products, locations and service areas, credentials, proof, policies, and limitations — published as one authoritative record.',
  },
  {
    n: '02',
    name: 'Capability',
    h: 'What the customer’s assistant can ask for.',
    d: 'What a customer or agent may ask for, what information is required, where the business works, which services are available, and what success does — and does not — mean.',
  },
  {
    n: '03',
    name: 'Control',
    h: 'Clear rules and an honest result.',
    d: 'Human confirmation, authorization, validation, rate limiting, idempotency, and fail-closed behavior. No false booking, pricing, purchase, or acceptance.',
  },
  {
    n: '04',
    name: 'Action',
    h: 'A next step that actually works.',
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

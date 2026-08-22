// ── Homepage cinematic slider — slide content + visuals ──────────────────────
//
// SWAP POINT FOR FINAL ART:
// Each slide currently renders a CSS gradient placeholder (`bg`). To drop in
// final art later, set `image` to a path under /public (e.g. '/home/slide-1.jpg')
// or '/home/slide-1.webp'. When `image` is present, FluidImageTransition renders
// it (object-cover, full-bleed) instead of the gradient — no other code changes.
// For motion art, you can likewise swap the layer for a <video> in
// FluidImageTransition; the slider logic is visual-agnostic.
//
// NOTE: /home/slide-ai-web.webp and /home/slide-problem.webp are natively
// text-free renders — no baked copy to work around. The left scrim handles
// legibility. Swap either file in place to update the art.

export interface HomeSlideLine {
  text: string;
  /** Render this line as the serif accent (italic, accent color). */
  accent?: boolean;
}

export interface HomeSlide {
  id: string;
  kicker: string;
  headline: HomeSlideLine[];
  support: string;
  /** Optional second supporting paragraph, rendered directly under `support`
   *  with slightly more emphasis (heavier weight + stronger text color). */
  support2?: string;
  /** Compact outcome / layer list. Used only when a slide needs five short
   *  labels without turning the homepage into an architecture diagram. */
  points?: string[];
  /** Suppress the "NN / NN — kicker" eyebrow. The intro/title slide's headline
   *  IS the tagline, so it carries no eyebrow (the KODECITE.AI wordmark already
   *  lives in the header). */
  brandEyebrow?: boolean;
  /** Optional final-art image path under /public. Overrides `bg` when set. */
  image?: string;
  /** Placeholder cinematic background (CSS). Used when `image` is absent. */
  bg: string;
  /**
   * Copy treatment. Default (undefined) = dark background → light/white text +
   * dark left scrim. 'light' = bright background → dark text + a faint light
   * lift (no darkening), and the CTAs adapt. Use for near-white hero images.
   */
  theme?: 'light';
}

export const HOME_SLIDES: HomeSlide[] = [
  {
    // ART DIRECTION: cinematic night city + glass office with warm interior
    // glow — the brand's opening title card. Dark plate (default theme) keeps
    // the white headline legible over the image.
    id: 'outcome',
    kicker: 'The trusted digital business layer',
    brandEyebrow: true,
    headline: [
      { text: 'Make your business' },
      { text: 'usable by AI.', accent: true },
    ],
    support:
      'Kodecite builds the trusted digital business layer that lets AI understand what you offer, evaluate what is true, recommend you accurately, and take the next authorized step with a customer.',
    image: '/home/slide-intro.webp',
    bg:
      'radial-gradient(60% 80% at 72% 30%, rgba(200,140,60,0.14), transparent 60%),' +
      'radial-gradient(70% 90% at 15% 90%, rgba(93,120,180,0.16), transparent 64%),' +
      'linear-gradient(158deg, #060a16 0%, #0a0e1f 55%, #05070f 100%)',
  },
  {
    // ART DIRECTION: cinematic golden-hour city street opening to a glowing
    // glass building / office on the right — "the AI web" as a place business
    // life happens. Natively text-free; the left scrim (kc-slide-bg__plate)
    // darkens the bright street so the real HTML headline/CTAs stay legible.
    id: 'behavior',
    kicker: 'THE NEW CUSTOMER BEHAVIOR',
    headline: [
      { text: 'Customers are asking' },
      { text: 'AI to act — not just' },
      { text: 'to find a name.', accent: true },
    ],
    support:
      'People still search websites themselves. They are also beginning to delegate discovery and next steps to AI agents. Human search is not dead. Agent commerce has not reached mass adoption. The commercial decision loop is still moving.',
    support2:
      'As customers delegate more discovery and action, a business that cannot be reliably understood, evaluated, and acted upon may be excluded before the customer ever sees it.',
    image: '/home/slide-ai-web.webp',
    bg:
      'radial-gradient(58% 78% at 76% 24%, rgba(93,213,255,0.22), transparent 60%),' +
      'radial-gradient(70% 90% at 18% 92%, rgba(124,120,255,0.20), transparent 64%),' +
      'linear-gradient(158deg, #06091c 0%, #0a0c1f 55%, #070a18 100%)',
  },
  {
    // ART DIRECTION: fragmented and unresolved. Dark, cinematic, scattered
    // web/search/review/profile fragments drifting in disconnected space — no
    // portal yet. AI sees disconnected pieces. Left stays dark for text.
    id: 'problem',
    kicker: 'THE PROBLEM',
    headline: [
      { text: 'Most businesses are' },
      { text: 'spread across pieces', accent: true },
      { text: 'AI cannot reconstruct.' },
    ],
    support:
      'Website, directories, forms, calendars, and unwritten rules live in different places. Tools usually cover one isolated layer — visibility, schema, scheduling, automation, commerce, or governance. AI may find pieces. It still cannot reliably reconstruct what the business can do or safely act.',
    image: '/home/slide-problem.webp',
    bg:
      'conic-gradient(from 210deg at 62% 38%, rgba(70,90,150,0.10), transparent 26%),' +
      'radial-gradient(50% 60% at 28% 30%, rgba(120,140,200,0.12), transparent 60%),' +
      'radial-gradient(42% 52% at 82% 72%, rgba(80,100,160,0.10), transparent 60%),' +
      'linear-gradient(150deg, #070912 0%, #0a0c18 60%, #05060f 100%)',
  },
  {
    // ART DIRECTION: fragments beginning to align and flow into structure.
    // Elegant light paths, architectural clarity — the move from noise to
    // order. Left stays dark for text.
    id: 'system',
    kicker: 'THE KODECITE SYSTEM',
    headline: [
      { text: 'One authoritative' },
      { text: 'system.', accent: true },
    ],
    support:
      'The website stays the human-facing experience. The digital business layer is the verified, machine-facing representation. Truth, services, geography, policies, permissions, capabilities, and actions have to agree.',
    support2:
      'Recommendation is only one stage. The larger goal is safe agent participation. The category is early and fragmented. Kodecite is not claiming to own it.',
    points: [
      'Truth',
      'Capability',
      'Control',
      'Action',
      'Distribution',
    ],
    image: '/home/slide-transformation.webp',
    theme: 'light',
    bg:
      'radial-gradient(60% 70% at 50% 46%, rgba(93,213,255,0.26), transparent 60%),' +
      'radial-gradient(90% 100% at 50% 118%, rgba(124,120,255,0.22), transparent 60%),' +
      'linear-gradient(180deg, #0c1230 0%, #101842 55%, #0a0f2a 100%)',
  },
  {
    // ART DIRECTION: calm, resolved, premium, trusted. The portal / world is
    // open; the business identity reads as clear, structured, and ready. Left
    // stays dark for text.
    id: 'proof',
    kicker: 'LIVE PRODUCTION PROOF',
    headline: [
      { text: 'Discovered.' },
      { text: 'Understood.' },
      { text: 'Actioned.', accent: true },
    ],
    support:
      'Luxe Window Works publishes a machine-readable in-home consultation capability. An authorized production test submitted one valid request. It was accepted. The duplicate was suppressed. A conflicting replay was rejected. Booking, pricing, and checkout stayed unavailable.',
    support2:
      'Luxe is production proof that this is no longer hypothetical. Recommendation is only one stage. The larger goal is safe agent participation.',
    image: '/home/slide-outcome.webp',
    theme: 'light',
    bg:
      'radial-gradient(80% 90% at 50% 24%, rgba(122,240,194,0.20), transparent 62%),' +
      'radial-gradient(70% 90% at 64% 84%, rgba(93,213,255,0.26), transparent 62%),' +
      'linear-gradient(170deg, #0b1c2e 0%, #102a3e 52%, #0a1c2c 100%)',
  },
];

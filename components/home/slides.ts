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
// NOTE: /home/slide-ai-web.webp is a TEMPORARY cleaned asset. The source comp
// had headline/CTA text baked into the left; that region was covered with a
// color-matched dark fill to create clean negative space. Replace it with a
// final, natively text-free render when available.

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
  /** Optional final-art image path under /public. Overrides `bg` when set. */
  image?: string;
  /** Placeholder cinematic background (CSS). Used when `image` is absent. */
  bg: string;
}

export const HOME_SLIDES: HomeSlide[] = [
  {
    // ART DIRECTION: dark cinematic environment; fragmented web/search/business
    // signals streaming toward a bright architectural portal on the right; dark
    // negative space on the left for the real HTML text. No embedded text/UI.
    id: 'ai-web',
    kicker: 'THE AI WEB',
    headline: [
      { text: 'The next web won’t search pages.' },
      { text: 'It will verify entities.', accent: true },
    ],
    support:
      'KodeCite builds AI-readable business infrastructure for the next era of discovery.',
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
      { text: 'AI can’t recommend' },
      { text: 'what it can’t verify.', accent: true },
    ],
    support:
      'Most websites leave business identity, services, locations, proof, and next actions disconnected.',
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
    id: 'transformation',
    kicker: 'THE TRANSFORMATION',
    headline: [
      { text: 'From website to' },
      { text: 'machine-readable foundation.', accent: true },
    ],
    support:
      'KodeCite connects your business, people, services, locations, citations, FAQs, and action paths into one structured entity.',
    bg:
      'radial-gradient(54% 64% at 50% 54%, rgba(93,213,255,0.20), transparent 62%),' +
      'radial-gradient(82% 92% at 50% 122%, rgba(124,120,255,0.18), transparent 60%),' +
      'linear-gradient(180deg, #080a1e 0%, #0a0c22 60%, #06081a 100%)',
  },
  {
    // ART DIRECTION: calm, resolved, premium, trusted. The portal / world is
    // open; the business identity reads as clear, structured, and ready. Left
    // stays dark for text.
    id: 'outcome',
    kicker: 'THE OUTCOME',
    headline: [
      { text: 'Understandable.' },
      { text: 'Verifiable.' },
      { text: 'Recommendable.' },
      { text: 'Agent-ready.', accent: true },
    ],
    support: 'Built once. Owned forever. Found by AI.',
    bg:
      'radial-gradient(68% 80% at 50% 28%, rgba(122,240,194,0.14), transparent 60%),' +
      'radial-gradient(60% 80% at 72% 82%, rgba(93,213,255,0.22), transparent 62%),' +
      'linear-gradient(170deg, #06101c 0%, #081626 55%, #050d18 100%)',
  },
];

// ── ProofWall data ───────────────────────────────────────────────────────────
// Real AI answers to real queries. Each item's `result` is used verbatim as the
// screenshot's alt text — accessibility AND machine-readable proof. The `src`
// paths point at the real screenshots committed under /public. Append new
// business blocks to `proofCases`.

export const PROOF_DATE = 'Apr 1, 2026';

// Only list engines we actually show on the wall — never name an engine
// without a visible card to back it. Re-add 'Perplexity' and 'Gemini' here
// (and their cards below + the intro line in ProofWall) once those
// screenshots are committed to /public.
export const PROOF_ENGINES = [
  'ChatGPT',
  'Google AI Mode',
  'Microsoft Copilot',
];

export interface ProofItem {
  /** Path under /public — served at this exact URL. */
  src: string;
  /** Engine name, shown in the caption bar. */
  engine: string;
  /** The exact query asked, shown quoted in the caption bar. */
  query: string;
  /** Full result description — used as the image alt text (a11y + machine-readable). */
  result: string;
}

export interface ProofCase {
  business: string;
  tagline: string;
  items: ProofItem[];
}

export const proofCases: ProofCase[] = [
  {
    business: "Luxe Window Works — Coeur d'Alene",
    tagline:
      "Our founder's own business, rebuilt on a KodeCite entity-graph foundation. When North Idaho homeowners ask AI who to hire, Luxe comes back first.",
    items: [
      {
        src: '/chatgpt-luxe-first-recommendation.jpeg',
        engine: 'ChatGPT',
        query:
          "I live in Post Falls Idaho and I'm in the market for new window treatments. Who do you recommend?",
        result:
          "ChatGPT lists Luxe Window Works first under 'Top Local Window Treatment Companies' — 5.0 rating, called a 'very strong all-around pick locally' — ahead of Pro Shades & Blinds and other options. Captured Apr 1, 2026.",
      },
      {
        src: '/google-ai-mode-luxe-top-rated.jpeg',
        engine: 'Google AI Mode',
        query: 'window treatments Post Falls Idaho',
        result:
          "Google's AI Mode answer lists Luxe Window Works LLC first among Top-Rated Local Specialists — 5.0 with 14 reviews — for 'window treatments Post Falls Idaho.' Captured Apr 1, 2026.",
      },
      {
        src: '/copilot-luxe-best-local-specialist.jpeg',
        engine: 'Microsoft Copilot',
        query: 'Who are the best local window treatment specialists in Post Falls?',
        result:
          'Microsoft Copilot lists Luxe Window Works first among Best Local Specialists, citing luxewindowworks.com, ahead of Coeur Window Covering. Captured Apr 1, 2026.',
      },
      {
        src: '/chatgpt-luxe-shutters-energy-efficiency.jpeg',
        engine: 'ChatGPT',
        query: 'What are the best energy-efficient window treatments, and who should I hire near Post Falls?',
        result:
          'Asked about energy-efficient window treatments, ChatGPT names Luxe Window Works the best local company for custom, high-end shutters and energy-efficient solutions. Captured Apr 1, 2026.',
      },
    ],
  },
];

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── legacy tokens — blog post pages depend on these, do not remove ──
        navy: {
          DEFAULT: '#0F1E3C',
          dark:    '#0A1628',
          card:    '#162444',
        },
        charcoal: {
          DEFAULT: '#07070f',
          mid:     '#0d0d1a',
          card:    '#111122',
          light:   '#16162a',
        },
        gold: {
          DEFAULT: '#D4A94A',
          light:   '#E8C478',
          dark:    '#B8902E',
        },
        text: {
          primary:   '#FFFFFF',
          secondary: '#8A9BB5',
        },
        surface: '#F8F9FA',

        // ── design system v2 tokens ────────────────────────────────────────
        d: {
          bg:           '#0a0c1f',
          bg2:          '#0e1130',
          bg3:          '#141845',
          fg:           '#e9ecff',
          'fg-dim':     '#8a90c4',
          'fg-mute':    '#5a608f',
          accent:       '#5dd5ff',
          accent2:      '#8ab4ff',
          warn:         '#ff6b8a',
          ok:           '#7af0c2',
        },
      },

      fontFamily: {
        // ── legacy — blog post pages depend on these ──────────────────────
        poppins:   ['var(--font-poppins)',   'sans-serif'],
        playfair:  ['var(--font-playfair)',  'Impact', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        // ── design system v2 ─────────────────────────────────────────────
        inter:  ['var(--font-inter)',  'system-ui', 'sans-serif'],
        mono:   ['var(--font-mono)',   'monospace'],
        serif:  ['var(--font-serif)',  'Georgia', 'serif'],
      },

      boxShadow: {
        glow:       '0 0 0 1px rgba(93,213,255,0.3), 0 12px 40px -12px rgba(93,213,255,0.5)',
        'glow-md':  '0 0 0 1px rgba(93,213,255,0.5), 0 18px 50px -10px rgba(93,213,255,0.5)',
        'glow-sm':  '0 0 0 1px rgba(93,213,255,0.2), 0 6px 24px -8px rgba(93,213,255,0.35)',
      },

      borderRadius: {
        pill: '100px',
        card: '14px',
        'card-lg': '16px',
      },

      animation: {
        // legacy
        'fade-up':  'fadeUp 0.7s ease forwards',
        'fade-in':  'fadeIn 0.7s ease forwards',
        // v2
        'draw-edge':    'drawEdge 1.5s ease forwards',
        'pulse-node':   'pulseNode 3s ease-in-out infinite',
        'stack-in':     'stackIn 0.5s ease forwards',
        'scan-sweep':   'scanSweep 1.5s ease-in-out forwards',
      },

      keyframes: {
        // legacy
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // v2
        drawEdge: {
          '0%':   { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseNode: {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '1' },
        },
        stackIn: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scanSweep: {
          '0%':   { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },

      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
}

export default config

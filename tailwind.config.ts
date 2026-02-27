import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1E3C',
          dark: '#0A1628',
          card: '#162444',
        },
        gold: {
          DEFAULT: '#D4A94A',
          light: '#E8C478',
          dark: '#B8902E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#8A9BB5',
        },
        surface: '#F8F9FA',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.7s ease forwards',
        'count-up': 'countUp 2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

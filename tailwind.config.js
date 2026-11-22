/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Midnight & Mint; existing component tokens retain their layout roles.
        ink: { DEFAULT: '#0B1220', 2: '#142033', 3: '#1B2C43' },
        iris: '#5EEAD4',
        peach: '#60A5FA',
        edge: '#2A3A50',
        white: '#E6EDF6',
        zinc: {
          50: '#F5F8FC',
          100: '#E6EDF6',
          200: '#D7E2F0',
          300: '#E6EDF6',
          400: '#A4B3C8',
          500: '#8EA2BE',
          600: '#7E94B1',
          700: '#344C68',
          800: '#23364F',
          900: '#142033',
          950: '#0B1220',
        },
        emerald: { 400: '#5EEAD4' },
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(4%, -6%) scale(1.08)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        drift: 'drift 18s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};

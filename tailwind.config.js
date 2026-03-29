/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-deep': '#0a1f44',
        'blue-mid':  '#1a4b8c',
        'blue-light':'#2e6fd4',
        'blue-pale': '#e8f0fb',
        'gold':      '#c9a96e',
        'gold-hover':'#e0b97a',
        'text-dark': '#0d1b36',
        'text-muted':'#6b7a99',
        'off-white': '#f7f8fc',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%':       { opacity: '1',   transform: 'scaleY(1.1)' },
        },
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
      borderRadius: {
        sm: '2px',
      },
    },
  },
  plugins: [],
};

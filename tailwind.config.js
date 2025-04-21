/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#0a1930', // dark navy
          900: '#0f2652', // navy
          800: '#1a3a7e', // dark blue
          700: '#2563eb', // primary blue
          600: '#3b82f6', // blue
          500: '#60a5fa', // light blue
          400: '#93c5fd', // lighter blue
          300: '#bfdbfe', // very light blue
          200: '#dbeafe', // pale blue
          100: '#eff6ff', // almost white blue
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.8,
            transform: 'scale(1.05)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
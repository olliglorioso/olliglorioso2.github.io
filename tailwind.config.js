/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matte-red': '#211951'
      },
      animation: {
        'appear-from-left': 'appear-from-left 2s ease-in-out forwards',
        'disappear-to-left': 'appear-from-left 2s ease-in-out forwards direction-reverse'
      },
      keyframes: {
        'appear-from-left': {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)'}
        },
      }
    },
  },
  plugins: [],
}


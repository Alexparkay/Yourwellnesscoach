/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        wide: '0.04em',
      },
    },
  },
  plugins: [],
};

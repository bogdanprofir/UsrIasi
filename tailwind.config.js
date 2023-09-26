/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#002A59',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      display: ['group-hover'],
      fontFamily: {
        'eleron': ['Eleron', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = ['Barlow', 'sans-serif'];

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: fontFamily,
      colors: {
        primary: '#e0834f',
        background: '#f9faf8',
        black: '#232323',
        darkGray: '#374151',
        gray: '#686868',
        medGray: '#e0e3e5',
        lightGray: '#e1e6e3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

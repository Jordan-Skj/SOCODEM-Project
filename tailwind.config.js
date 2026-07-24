/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#070D1F",
        cobalt: "#1E6FFF",
        gold: "#FFB800",
        light: "#F8F8F8",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

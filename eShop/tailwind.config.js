/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Lobster', 'sans-serif'],
      },
      colors: {
        bestGreen: '#52673D',
        bestWhite: '#CACACA',
        bestBlack: '#0B0B0B',
      },
    },
  },
  plugins: [],
}



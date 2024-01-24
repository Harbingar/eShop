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
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        '50' : '50px',
        '75' : '75px',
        '100' : '100px',
        '150' : '150px',
        '300' : '300px',
        'full': '9999px',
        'large': '12px',
      },
    },
  },
  plugins: [],
}



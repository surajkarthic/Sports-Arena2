/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"

  ],
  theme: {
    extend: {
        fontFamily: {
        masque: ['Masque', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],// 'masque' is the class name you will use
      },
    },
  },
  plugins: [],
}


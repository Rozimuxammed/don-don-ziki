/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        triangle: "url(../imgs/triangle.svg)",
      },
      boxShadow:{
        blur:"0px 0px 0px 50px rgba(255, 255, 255, 0.05), 0px 0px 0px 100px rgba(255, 255, 255, 0.05), 0px 0px 0px 150px rgba(255, 255, 255, 0.05)"
      }
    },
  },
  plugins: [require('daisyui'),],
}


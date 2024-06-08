/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvasThem: '#44B584'
      },
      fontFamily : {
        'poppins' : "'Poppins', sans-serif",
        'roboto' : "'Roboto', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        l_blue: '#EFF5F9',
        d_blue: '#75BB99',
        d_green: '#003E1C',

      },
   
    },
  },
  plugins: [require("daisyui")],
}
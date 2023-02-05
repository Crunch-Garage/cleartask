/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend :{
      colors: {
        "black": "#0f0e0e",
        "primary":"#EC058E"
      },
    }
  },
  plugins: [],
}

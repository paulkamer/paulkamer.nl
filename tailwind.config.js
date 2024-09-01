/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        late: {
          50: "#f9f9f9",
          100: "#f3f3f3",
          200: "#e0e0e0",
          300: "#cecece",
          400: "#a9a9a9",
          500: "#858585",
          600: "#787878",
          700: "#676767",
          800: "#4d4d4d",
          900: "#3f3f3f",
         
        },
      },
    },
  },
  plugins: [],
};
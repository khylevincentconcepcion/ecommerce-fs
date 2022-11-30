/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d98ba",
        secondary: "#ba2f0d",
      },
      transitionProperty: {
        width: "width",
        bg: "background-color,color",
      },
    },
  },
  plugins: [],
};

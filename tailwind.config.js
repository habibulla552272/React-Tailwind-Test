/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9500",
      },
      fontFamily: {
        font_1: ["Be Vietnam Pro", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

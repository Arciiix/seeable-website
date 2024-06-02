/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seeable: "#dac500",
        "seeable-dark": "#3f3a13",
        "app-background": "#141414",

        primary: "#8f811a",
        secondary: "#ff7e33",
        info: "#0C63E7",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};

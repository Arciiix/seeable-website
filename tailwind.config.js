/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  safelist: [
    "bg-blue-100",
    "bg-rose-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-red-100",
    "bg-yellow-100",
    "from-amber-400",
    "to-yellow-400",
    "text-yellow-950",
    "from-blue-400",
    "to-cyan-200 text-blue-950",
    "from-emerald-400",
    "to-green-400",
    "text-green-950",
    "from-pink-400",
    "to-rose-400",
    "text-pink-950",
    "from-purple-400",
    "to-violet-400",
    "text-purple-950",
    "from-red-400",
    "to-rose-400",
    "text-red-950",
  ],
  plugins: [],
};

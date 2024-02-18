/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-300": "#E73636",
        "red-500": "#DB4200",
        "yellow-500": "#FFDE59",
        gray: "#696969",
        "silver-500": "#C7C7C7",
        "silver-100": "#F5F5F5",
      },
      fontFamily: {
        kadwa: ["Kadwa", "serif"],
        jura: ["Jura", "sans-serif"],
      },
    },
  },
  plugins: [],
};

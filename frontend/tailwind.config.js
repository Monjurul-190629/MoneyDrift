/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class", // enables toggle via class
  theme: {
    extend: {
      colors: {
        "green-950": "#064e3b", // a very dark green
      },
    },
  },
  plugins: [],
};

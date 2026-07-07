/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B5ED7",
        saffron: "#FF9933",
        indiaGreen: "#138808",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 38, 135, 0.15)",
      },
      backgroundImage: {
        hero: "linear-gradient(135deg, #0B5ED7 0%, #4F9CF9 100%)",
      },
    },
  },
  plugins: [],
};
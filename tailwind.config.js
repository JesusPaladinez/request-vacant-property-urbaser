/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "urbaser-1": "#053630",
        "urbaser-2": "#53d1c9",
        "fondo-principal": "#f9fafb",
      },
    },
  },
  plugins: [],
};


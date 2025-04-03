/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#22D3F7",
        "primary-light": "#0891b2",
        secondary: "#764ABC",
        "secondary-light": "#9662D9",
        dark: "#1a1a1a",
        "dark-light": "#2d2d2d",
        light: "#f8fafc",
        "light-dark": "#e2e8f0",
      },
      fontFamily: {
        sans: ["Fira Code", "monospace"],
      },
      backgroundColor: {
        "light-card": "rgba(255, 255, 255, 0.8)",
        "dark-card": "rgba(45, 45, 45, 0.8)",
      },
    },
  },
  plugins: [],
};

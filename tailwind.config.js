/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#007aff", // Deep Navy Blue
        "secondary": "#E84E36", // Accent Red/Orange
        "background-light": "#f4f6f8",
        "background-dark": "#14161e",
        "surface": "#ffffff",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0px", // Sharp edges requested
        "sm": "0px",
        "lg": "0px",
        "xl": "0px",
      },
    },
  },
  plugins: [],
}

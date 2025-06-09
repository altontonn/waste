/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#1c1c1c",
        lightgray: "#2a2a2a"
      }
    },
  },
  plugins: [],
}
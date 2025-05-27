/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        winky: ["Winky", "sans-serif"],
        anton: ['Anton', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

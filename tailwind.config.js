/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#6366F1",
          600: "#4F46E5",
        },
      }
    },
  },
  plugins: [],
}
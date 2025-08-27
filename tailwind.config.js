/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFD3E1',
          lavender: '#E6E6FA',
          mint: '#B8F2B8',
          peach: '#FFCBA4',
          sky: '#B8E6FF',
          yellow: '#FFF4B8',
          purple: '#DDA0DD',
          coral: '#FFB3BA',
          sage: '#C8E6C9',
          cream: '#FFF8DC'
        }
      }
    },
  },
  plugins: [],
}

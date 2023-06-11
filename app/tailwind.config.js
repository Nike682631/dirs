/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      '20v': '20vh',
      '80': '354px',
    },
    minWidth: {
      '60v': '60vw',
    },
    extend: {
      animation: {
        wiggle: 'wiggle 2s ease',
      },
      keyframes: {
        wiggle: {
          '0%': { padding: '10px' },
          '100%': { padding: '50px' },
        }
      }
    },
  },
  plugins: [],
}


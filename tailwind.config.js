/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          navy: {
            800: '#1e293b',
            900: '#0f172a',
          },
          gold: {
            300: '#fcd34d',
            500: '#d97706',
          },
          emerald: {
            300: '#6ee7b7',
            500: '#10b981',
          },
          amber: {
            300: '#fcd34d',
            500: '#f59e0b',
          },
          red: {
            300: '#fca5a5',
            500: '#ef4444',
          }
        },
      },
    },
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 1s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  }
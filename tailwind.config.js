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
    plugins: [],
  }
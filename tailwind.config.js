/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0a1d14',
          900: '#112d20',
          800: '#193f2d',
          700: '#23533c',
          600: '#2e6b4e',
          500: '#3c8461',
          400: '#53a17a',
          300: '#7bc19e',
          200: '#aee0c7',
          100: '#daf1e5',
          50: '#f0f9f4',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f2',
          200: '#f4ede2',
          300: '#eae0d0',
          400: '#d7c7b0',
        },
        accent: {
          amber: '#e67e22',
          gold: '#d97706',
          sun: '#f59e0b',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Montserrat"', '"Plus Jakarta Sans"', 'sans-serif'],
        cursive: ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(17, 45, 32, 0.08)',
        'card': '0 15px 35px -5px rgba(17, 45, 32, 0.12)',
        'elevated': '0 25px 50px -12px rgba(17, 45, 32, 0.25)',
      }
    },
  },
  plugins: [],
}

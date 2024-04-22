/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '2xl': '1.540rem',
        '3xl': '1.75rem',
        '4xl': '2.00rem',
        '6xl': '3.35rem'
      },
      letterSpacing: {
        'widest': '0.415em'
      },
      spacing: {
        '55': '13.75rem'
      }
    },
  },
  plugins: [],
}


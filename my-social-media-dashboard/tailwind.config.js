/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      'azure-blue': 'hsl(var(--color-azure-blue) / <alpha-value>)',
      blue: {
        100: 'hsl(var(--color-blue-100) / <alpha-value>)',
        200: 'hsl(var(--color-blue-200) / <alpha-value>)',
        400: 'hsl(var(--color-blue-400) / <alpha-value>)',
        700: 'hsl(var(--color-blue-700) / <alpha-value>)',
      },
      'candy-apple-red': 'hsl(var(--color-candy-apple-red) / <alpha-value>)',
      'chili-red': 'hsl(var(--color-chili-red) / <alpha-value>)',
      'dark-blue': {
        400: 'hsl(var(--color-dark-blue-400) / <alpha-value>)',
        600: 'hsl(var(--color-dark-blue-600) / <alpha-value>)',
        800: 'hsl(var(--color-dark-blue-800) / <alpha-value>)',
      },
      lime: 'hsl(var(--color-lime) / <alpha-value>)',
      red: 'hsl(var(--color-red) / <alpha-value>)',
      'sky-blue': 'hsl(var(--color-sky-blue) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)',
      yellow: 'hsl(var(--color-yellow) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'sm': '0.895rem',
        'xl': '1.500rem',
        '2xl': '1.540rem',
        '3xl': '1.75rem',
        '4xl': '2.00rem',
        '6xl': '3.50rem',
      },
      letterSpacing: {
        'widest': '0.415em'
      },
      maxWidth: {
        '7xl': '73.75rem'
      },
      spacing: {
        '53': '13.25rem',
        '54': '13.50rem'
      }
    },
  },
  plugins: [],
}


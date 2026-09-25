/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: '#f2f2f1',
        black: '#161616',
        neutral: {
          50: '#ececeb',
          100: '#e3e3e2',
          200: '#d5d5d4',
          300: '#c2c2c1',
          400: '#9f9f9e',
          500: '#7a7a79',
          600: '#5d5d5c',
          700: '#474746',
          800: '#333332',
          900: '#242423',
          950: '#1b1b1a',
        },
      },
    },
  },
  plugins: [],
}

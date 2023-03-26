/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      'light-grayish-blue': '#d2dce7',
      blue: {
        100: '#91e4ff',
        200: '#6fccee',
        300: '#4db4dc',
        400: '#2b9bcb',
        500: '#0983b9',
      },
      'dark-blue': {
        100: '#065992',
        200: '#054a81',
        300: '#033c70',
        400: '#022d5f',
        500: '#001e4e',
      },
      'dark-violet': {
        100: '#591bba',
        200: '#4314a8',
        300: '#2d0e96',
        400: '#160783',
        500: '#000071',
      },
    },
  },
  plugins: [],
}

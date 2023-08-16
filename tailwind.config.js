/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    colors: {
      white: '#ffffff',
      'dark-grey': '#111111',
      beige: '#DCC1AB',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      height: {
        18: '4.5rem',
      },
      spacing: {
        18: '4.5rem',
      },
      inset: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};

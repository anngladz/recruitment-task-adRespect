/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    colors: {
      white: '#ffffff',
      beige: '#DCC1AB',
      'light-grey': '#F5F0EC',
      green: '#1B5B31',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      height: {
        18: '4.5rem',
        108: '27rem',
      },
      spacing: {
        18: '4.5rem',
        108: '27rem',
      },
      inset: {
        18: '4.5rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // name of one of the included themes for dark mode
  },
};

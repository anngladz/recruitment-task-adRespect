/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    colors: {
      white: '#ffffff',
      beige: '#DCC1AB',
      'dark-grey': '#111111',
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
        26: '7.5rem',
        108: '27rem',
      },
      inset: {
        18: '4.5rem',
      },
      fontSize: {
        '2hxl': '1.75rem',
      },
      animation: {
        'one-shake': 'shake 1s linear',
        'bounce-right': 'bounce-two 1s linear infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
        },
        'bounce-two': {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // name of one of the included themes for dark mode
  },
};

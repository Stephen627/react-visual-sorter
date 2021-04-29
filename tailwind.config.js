const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.emerald,
      secondary: colors.orange,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
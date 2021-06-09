const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.{js, ts, tsx, jsx}',
    './components/**/*.{js, ts, jsx, tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#040A0D',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
      green: colors.green,
      blue: colors.blue,
      pink: colors.pink
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

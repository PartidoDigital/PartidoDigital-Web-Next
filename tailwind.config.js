const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [ 
    './**/*.html'
  ],
  theme: {
    gradients: theme => ({
      'orange-full': ["-45deg", theme("colors.orange.light"), theme("colors.orange.default"), theme("colors.orange.dark"), theme("colors.orange.darkest")],
      'orange-light-dark': ["to right", theme('colors.orange.light'), theme('colors.orange.default'), theme('colors.orange.dark')],
      'orange-dark-light': ["to right", theme('colors.orange.dark'), theme('colors.orange.default'), theme('colors.orange.light')],
      // ...
    }),
    extend: {
      colors: {
        orange: {
          lightest: "#ffd8a7",
          light: "#fe8c00",
          default: "#f87200",
          dark: "#f83600",
          darkest: "#e06c02"
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-plugins/gradients'),
  ],
}

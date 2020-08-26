const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [ 
    './**/*.html'
  ],
  theme: {
    gradients: theme => ({
      'orange-full': ["-45deg", theme("colors.orange.300"), theme("colors.orange.500"), theme("colors.orange.700"), theme("colors.orange.900")],
      'orange-light-dark': ["to right", theme('colors.orange.300'), theme('colors.orange.500'), theme('colors.orange.700')],
      'orange-dark-light': ["to right", theme('colors.orange.700'), theme('colors.orange.500'), theme('colors.orange.300')],
      // ...
    }),
    extend: {
      colors: {
        orange: {
          "100": "#ffd8a7",
          "300": "#fe8c00",
          "500": "#f87200",
          "700": "#f83600",
          "900": "#e06c02"
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

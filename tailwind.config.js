const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  dark: 'class',
  experimental: {
    darkModeVariant: true
  },
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
          "500": "#ee7211",
          "700": "#f83600",
          "900": "#e06c02"
        },
        "custom-blue": "#1636a3"
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus', 'active', 'dark'],
    borderColor: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus', 'dark'],
    boxShadow: ['responsive', 'group-focus', 'hover', 'focus', 'dark'],
    textColor: [
      'responsive',
      'group-hover',
      'group-focus',
      'hover',
      'focus-within',
      'focus',
      'active',
      'dark'
    ],
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-plugins/gradients'),
  ],
}

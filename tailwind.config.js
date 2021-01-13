const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  purge: [
    "_includes/**/*.html",
    "!_includes/recursos/**",
    "_layouts/**/*.html",
    "collections/**/*.md",
    "assets/scripts/*.js"
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  theme: {
    minHeight: {
      '28': '7rem'
     },
    extend: {
      colors: {
        orange: {
          "100": "#ffd8a7",
          "300": "#fe8c00",
          "500": "#ee7211",
          "700": "#f83600",
          "900": "#e06c02"
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/forms')
  ]
}

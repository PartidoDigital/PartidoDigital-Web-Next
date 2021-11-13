const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    "_data/equipo.yml",
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1,h2,h3,h4,h5': {
              'margin-top' : '1em',
            },
            p: {
              'margin-top': '1em'
            },
            'a:not(.text-white)': {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.orange.700'),
              },
            },
            'a.text-white': {
              color: theme('colors.white')
            },
          },
        },
      }),
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: { 
    enabled: process.env.JEKYLL_ENV == "production",
    content: [
      "_data/equipo.yml",
      "_includes/**/*.html",
      "!_includes/recursos/**",
      "_layouts/**/*.html",
      "collections/**/*.md",
      "assets/scripts/*.js"
    ]
  },
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}

const nodeEnv = process.env.NODE_ENV || "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(nodeEnv !== "development" ? [
      require("cssnano")({ preset: "default" })
    ] : [])
  ]
}
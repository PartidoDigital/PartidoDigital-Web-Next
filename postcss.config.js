const jekyllEnv = process.env.JEKYLL_ENV || process.env.NODE_ENV || "development";

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(jekyllEnv != "development" ? [
        require("cssnano")({ preset: "default" }),
    ] : [])
  ]
};
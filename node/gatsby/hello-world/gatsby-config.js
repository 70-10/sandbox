module.exports = {
  siteMetadata: {
    title: "Gatsby Practice"
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    }
  ]
};

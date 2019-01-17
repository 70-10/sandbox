module.exports = {
  siteMetadata: {
    title: "Gatsby Practice"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    }
  ]
};

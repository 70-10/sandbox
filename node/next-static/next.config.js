const withProgressBar = require("next-progressbar");
const withSass = require("@zeit/next-sass");

module.exports = withProgressBar(
  withSass({
    exportPathMap: defaultPathMap => ({
      "/": { page: "/" },
      "/about": { page: "/about" }
    })
  })
);

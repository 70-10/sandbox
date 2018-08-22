const withSass = require("@zeit/next-sass");

module.exports = withSass({
  exportPathMap: defaultPathMap => ({
    "/": { page: "/" }
  })
});

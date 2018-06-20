const yaml = require("js-yaml");
const path = require("path");

function pathResolve(filePath) {
  if (path.isAbsolute(filePath)) {
    return filePath;
  }

  return path.join(process.cwd(), filePath);
}

module.exports = swaggerFile => {
  const filePath = pathResolve(swaggerFile || "index.js");

  process.stdout.write(yaml.dump(require(filePath)));
};

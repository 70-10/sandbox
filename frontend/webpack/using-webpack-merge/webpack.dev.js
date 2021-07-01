const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "eval-cheap-module-source-map"
})
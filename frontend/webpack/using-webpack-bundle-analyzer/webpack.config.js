const path = require("path")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")

module.exports = {
    mode: "development",
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: "bundle.js"
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}
const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    mode: "production",
    entry: {
        app: "./src/js/app.js",
        app2: "./src/js/app2.js",
        app3: "./src/js/app3.js"
    },
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: "[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor"
                }
            }
        },
        minimizer: [
            new TerserPlugin({ extractComments: false })
        ]
    }

}
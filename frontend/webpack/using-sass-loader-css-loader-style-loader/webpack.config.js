const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "src", "scss"),
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}
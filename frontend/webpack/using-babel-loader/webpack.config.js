const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src", "js"),
                use: "babel-loader"
            }
        ]
    }
}
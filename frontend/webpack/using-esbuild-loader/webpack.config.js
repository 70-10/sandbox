const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "esbuild-loader"
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 9000,
    },
}
const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    modules: [
      path.resolve(__dirname, "/src"),
      path.resolve(__dirname, "node_modules/")
    ],
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: [{
          loader: "awesome-typescript-loader"
        }]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "source-map-loader"
          },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Rafael Melón - Portfolio",
      template: "./src/index.html",
    })
  ]
};
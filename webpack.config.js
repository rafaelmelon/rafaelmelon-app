const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
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
        use: [{
          loader: "source-map-loader"
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
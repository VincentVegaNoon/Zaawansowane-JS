const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name]-[contenthash:6].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  devServer: {
    open: true,
    static: path.resolve(__dirname, "../", "public"),
    port: 5001,
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "nowa aplikacja",
      template: "src/template.html",
    }),
  ],
};

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name].js",
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "nowa aplikacja",
      template: "src/templates/template.html",
    }),
  ],
};

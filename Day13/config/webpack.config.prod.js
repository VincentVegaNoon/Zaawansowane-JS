const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "js/[name]-[contenthash].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "src/templates/template.html",
      title: "nowa aplikacja",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
  ],
};

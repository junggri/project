const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // enntry file
  entry: ["@babel/polyfill", "./dist/javascript/index.js", "./static/css/style.css"],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.join(__dirname, "webpack/"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname + "./../dist/jsvascript/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "url-loader",
        options: {
          name: "[hash].[ext]",
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    // 기타 플러그인
    new MiniCssExtractPlugin({ filename: "app.css" }),
  ],
  devtool: "source-map",
  mode: "development",
};

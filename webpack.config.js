const path = require("path");

module.exports = {
  // enntry file
  entry: "./dist/public/index.js",
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.join(__dirname, "dist/public/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname + "./../dist/public/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
};

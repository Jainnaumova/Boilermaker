const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: ["babel-polyfill", "./app/main.js"],
  mode: isDev ? "development" : "production",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: ["@babel/proposal-class-properties"]
        }
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

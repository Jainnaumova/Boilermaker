module.exports = {
  entry: ["babel-polyfill", "./app/main"],
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
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

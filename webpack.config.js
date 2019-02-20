"use strict";
// import webpack from "webpack";
// import path from "path";
const path = require("path");

module.exports = {
  entry: "./app/main",
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

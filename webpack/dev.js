const { merge } = require("webpack-merge");
const path = require("path");

const base = require("./base");

module.exports = merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    compress: true,
  },
});

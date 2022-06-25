import { merge } from "webpack-merge";
import "webpack-dev-server";

import base from "./base";

const config = merge(base, {
  mode: "development",
  devtool: "eval",
  devServer: {
    open: true,
    compress: true,
  },
});

export default config;

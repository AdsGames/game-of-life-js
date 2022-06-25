import { merge } from "webpack-merge";

import base from "./base";

const config = merge(base, {
  mode: "production",
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
});

export default config;

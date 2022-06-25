import { DefinePlugin, Configuration } from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: {
    app: "./src/app.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            minify: true,
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: false,
              },
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
    }),
    new ESLintPlugin({ extensions: ["ts"] }),
  ],
};

export default config;

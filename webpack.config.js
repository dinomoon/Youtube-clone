const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoPrefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          { loader: "css-loader" }, // css -> js
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoPrefixer({ overrideBrowserslist: "cover 99.5%" })];
              },
            },
          }, // prefix를 붙여준다.
          { loader: "sass-loader" }, // scss -> css
        ]),
      },
    ],
  },
  output: {
    path: OUPUT_DIR,
    filename: "[name].js",
  },
  plugins: [new ExtractCSS("styles.css")],
};

module.exports = config;

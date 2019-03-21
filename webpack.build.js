const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.js");

module.export = merge(baseWebpackConfig, {
  mode: "production",
  plugins: []
});

const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.js");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: baseWebpackConfig.externals.path.dist,
    overlay: {
      port: 8081,
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].map"
    })
  ]
});

// module.export = new Promise((resolve, reject) => {
//   resolve(devWebpackConfig);
// });

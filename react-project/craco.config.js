const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === "production") {
        // Rename the build js files
        webpackConfig.output.filename = "static/js/bundle.js";
        webpackConfig.optimization.splitChunks = false;

        webpackConfig.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1
        }))
        
       // Stop creating separate css bundle file instead add it into generated bundle js file.
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(
          plugin instanceof MiniCssExtractPlugin))

        webpackConfig.module.rules.forEach(rule => {
          rule?.oneOf?.forEach(subRule => {
            if (subRule?.use?.[0]?.loader?.includes("mini-css-extract-plugin"))
              subRule.use[0] = {
                loader: require.resolve("style-loader")
              }
          })
        })
      }

      return webpackConfig;
    }

  }
};


const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  webpack: function (config, env) {
    if (env === 'development') {
      config.plugins.push(
        new StylelintPlugin({
            files: 'src/**/*.(s)?css'
        })
      )
    }

    return config
  }
  // jest: function(config) {
  //   // customize jest here
  //   return config;
  // },
  // devServer: function(configFunction) {
  //   return function(proxy, host) {
  //     // customize devServer config here
  //     return config;
  //   }
  // }
}
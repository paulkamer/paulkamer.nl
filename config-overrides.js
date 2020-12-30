
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
}
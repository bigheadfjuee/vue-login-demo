const path = require('path')

module.exports = {
  /*
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(path.resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.3.99'
      },
      '/image': {
        target: 'http://192.168.3.99'
      }
    }
  }
  */
}

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: "/",

  // where to output built files
  // 打包后的输出目录
  outputDir: "dist",

  // whether to use eslint-loader for lint on save.
  // 保存时是不是用eslint-loader 来lint 代码
  lintOnSave: false,


  // generate sourceMap for production build?
  // 生产环境的sourceMap 要不要？
  productionSourceMap: true,

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    extract: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {},

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    // 用不用 css Modules 啊？
    modules: false
  },


  // configure webpack-dev-server behavior
  // Webpack dev server
  devServer: {
      host: "localhost",
      port: 8081,
      https: false,
      open: true,
    proxy: {
      '^/vega-example': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true
      }
    }
  }
  }

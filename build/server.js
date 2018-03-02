'use strict'

const config = require('./config')
const webpackDev = require('./webpack.dev')
const webpack = require('webpack')

const WebpackDevServer = require('webpack-dev-server')
const options = {
  contentBase: config.dist_path,
  hot: true,
  host: 'localhost',
  historyApiFallback: true,
  https: true

}
WebpackDevServer.addDevServerEntrypoints(webpackDev, options)

const compiler = webpack(webpackDev)
// const WebpackMiddleware = require("webpack-dev-middleware")(compiler,{})
// const WebpackHotMiddleware = require('webpack-hot-middleware')(compiler)
// const chokidar = require('chokidar')

// let refresh = function(path) {
//   console.log('______________________________________')
//   console.log('* ' + path + ' changed')
//   WebpackHotMiddleware.publish({
//     action: 'reload'
//   })
// }

let server = new WebpackDevServer(compiler, options)

// server.use(WebpackMiddleware)
// server.use(WebpackHotMiddleware)

server.listen(config.port, (err) => {
  console.log('==> Listening on http://localhost:' + config.port)
  if (err) {
    console.log(err)
  }
  // chokidar.watch(config.refresh).on('change', refresh)
})

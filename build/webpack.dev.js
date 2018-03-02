'use strict'

const webpack = require('webpack')
const webpackBase = require('./webpack.base')
const config = require('./config')
const CircularDependencyPlugin = require('circular-dependency-plugin')

config.entry.app = ['./src/js/_before.js', './src/js/bootstrap.js', './src/js/_after.js']

webpackBase.devtool = 'cheap-module-eval-source-map'
webpackBase.output.publicPath = 'https://localhost:' + config.port + config.dist_url

webpackBase.devServer = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}

webpackBase.plugins.push(
  new webpack.DefinePlugin({
    'window.__DEVELOPPEMENT__': JSON.stringify(true),
    'window.__ASSERT__': JSON.stringify(true),
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: true,
    cwd: process.cwd()
  })
)

module.exports = webpackBase

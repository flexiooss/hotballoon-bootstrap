'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const AssetsPlugin = require('assets-webpack-plugin')
const webpackBase = require('./webpack.base')
const config = require('./config')

config.entry.app = ['babel-polyfill', './src/js/bootstrap.js']

webpackBase.devtool = false
webpackBase.output.filename = '[name].js'

webpackBase.plugins.push(
  new ProgressBarPlugin(),
  new CleanWebpackPlugin([config.dist_path]),
  new ExtractTextPlugin('all.css'),
  new UglifyJsPlugin({
    test: /\.js($|\?)/i
  }),
  new webpack.DefinePlugin({
    'window.__DEVELOPPEMENT__': JSON.stringify(false),
    'process.env.NODE_ENV': JSON.stringify('production')
  })
)

webpackBase.module.rules.forEach(function(rule, k) {
  if ('.css'.match(rule.test)) {
    rule.use.shift()
    webpackBase.module.rules[k].use = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: rule.use[0].loader,
        options: {
          minimize: true
        }
      }]
    })
  }
})

module.exports = webpackBase
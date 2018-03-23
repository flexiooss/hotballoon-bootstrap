'use strict'

const config = require('./config')
const StyleLintPlugin = require('stylelint-webpack-plugin')

let webpackBase = {
  entry: config.entry,
  output: {
    path: config.dist_path,
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: [/node_modules/],
      enforce: 'pre'
    },
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        query: {
          limit: 10
          // name: '[name].[hash:7].[ext]'
        }
      }]

    }
    ]
  },
  plugins: []
}

if (config.stylelint) {
  webpackBase.plugins.push(
    new StyleLintPlugin({
      files: config.stylelint
    })
  )
}

if (config.html) {
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  webpackBase.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    })
  )
}

module.exports = webpackBase

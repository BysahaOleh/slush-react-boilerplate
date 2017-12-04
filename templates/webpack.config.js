const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: __dirname + '/src',

  entry: {
    bundle: './js/index.jsx'
  },

  output: {
    path: __dirname + '/public',
    filename: '[name].[chunkhash].js',
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: __dirname + '/src/',
    publicPath: '/',
    port: ''
  },

  module: {
    rules: [

    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ]
};
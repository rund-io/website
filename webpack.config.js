var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/rund.io.js',
  output: {
    filename: 'rund.io.js',
    path: __dirname + '/docs'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
          screw_ie8: true
      },
      comments: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      template: './app/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'rund.io.css'
    })
  ]
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname),
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  resolve: {
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  devtool: 'eval-source-map',
  target: 'node'
};
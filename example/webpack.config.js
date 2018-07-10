const DynamicSrc = require('../');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name][chunkhash].js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin(),
    new DynamicSrc({ fn: 'dynamicSrc' })
  ]
}
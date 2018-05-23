
const path = require('path');

const CleanPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist/front'),
    filename: 'app.bundle.[hash].js',
  },

  module: {
    rules: [
    ],
  },

  plugins: [
    new CleanPlugin('./dist'),
    new HtmlPlugin({ template: './src/front/index.html' }),
  ],

  devtool: 'source-map',

  mode: 'development',
};

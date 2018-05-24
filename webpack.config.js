
const path = require('path');

const CleanPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const devMode = false; // process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',

  target: 'web',

  entry: {
    app: './src/app.js',
  },

  output: {
    path: path.join(__dirname, './dist/front'),
    filename: devMode ? '[name].js' : '[name].[hash].js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },

      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new CleanPlugin('./dist'),

    new CopyPlugin([
      { from: './src/front/pages', to: './pages' },
    ]),

    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),

    new HtmlPlugin({ template: './src/front/index.html' }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, './dist/front'),
    compress: true,
    port: 1234,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/index.html' },
      ],
    },
  },
};

import path from 'path';
import webpack from 'webpack';

import CleanPlugin from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlPlugin from 'html-webpack-plugin';

module.exports = (env: IEnv = {}) => ({
  mode: env.dev ? 'development' : 'production',

  target: 'web',

  context: __dirname,

  entry: {
    app: './src/front.entry.ts',
  },

  output: {
    path: path.join(__dirname, './dist/front'),
    filename: env.dev ? '[name].js' : '[name].[hash].js',
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
        test: /\.scss$/,
        use: [
          env.dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.css$/,
        use: [
          env.dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new CleanPlugin('./dist/front'),

    new CopyPlugin([
      { from: './src/front/pages', to: './pages' },
    ]),

    new MiniCssExtractPlugin({
      filename: env.dev ? '[name].css' : '[name].[hash].css',
      chunkFilename: env.dev ? '[id].css' : '[id].[hash].css',
    }),

    new HtmlPlugin({
      template: './src/front/index.html',
    }),
  ],

  /*
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
  */

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, './dist/front'),
    compress: true,
    host: '127.0.0.1',
    port: 9000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/content/, to: '/index.html' },
      ],
    },
  },
});

interface IEnv {
  dev?: boolean;
}
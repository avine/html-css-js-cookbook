
import path from 'path';

import CleanPlugin from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const devMode = false;

export default {
  mode: devMode ? 'development' : 'production',

  target: 'node',

  node: {
    __filename: false,
    __dirname: false
  },

  entry: {
    app: './src/back.ts',
  },

  output: {
    path: path.join(__dirname, './dist/back'),
    filename: '[name].js',
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
    ],
  },

  plugins: [
    new CleanPlugin('./dist/back'),

    new CopyPlugin([
      { from: './src/back/pages', to: './pages' },
    ]),
  ],

  devtool: 'source-map',
};

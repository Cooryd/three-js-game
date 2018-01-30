const path = require('path');

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: '3000',
    contentBase: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader'] }
    ]
  }
};

module.exports = config;

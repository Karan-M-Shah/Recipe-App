const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { //polyfill features that babel loaders cannot convert
  entry: ['babel-polyfill','./src/js/index.js'],
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },

  devServer: {
    contentBase: './dist'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ], //step one of installing babel, adding the following rules
  module: {
    rules: [
      {
        test: /\.js$/, //Regular expression to convert ES6 JS to ES5
        exclude: /node_modules/, //excludes the .js files in the node modules folder
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
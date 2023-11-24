const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  devServer: {
    hot: true,
  },
};

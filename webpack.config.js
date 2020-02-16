const path = require('path')

module.exports = {
  entry: './script.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    port: 8080,
    overlay: true
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader'] }
    ]
  }
}

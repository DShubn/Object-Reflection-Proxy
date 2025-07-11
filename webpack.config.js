const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла
  },
  mode: 'development', 
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  resolve: {
    extensions: ['', '.js', '.css'],
    modulesDirectories: [
      'node_modules'
    ]
  },
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Elimiate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify js
    new webpack.optimize.UgligyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
      // {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      // {test: /\.css$/, loader: 'style!css'}
    ]
  }
}

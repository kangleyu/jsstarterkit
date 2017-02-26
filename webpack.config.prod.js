import path from 'path';

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
    path.resolve(__dirname, 'dist/index')
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
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
      // {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      // {test: /\.css$/, loader: 'style!css'}
    ]
  }
}

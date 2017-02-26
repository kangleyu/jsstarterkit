import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
  debug: true,
  devtool: 'inline-source-map',
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
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    // create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
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

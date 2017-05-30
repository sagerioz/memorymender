import path from 'path'
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared'),
        ],
        loaders: 'babel',
        query: {
          presets: [ 'react' ]
        }
      }
    ]
  },
  entry: [
  'webpack-hot-middleware/client?reload=true',
  path.join(__dirname, './client/index.js'),
 ],
  resolve: {
    extentions: [ '', '.js' ]
  }
}

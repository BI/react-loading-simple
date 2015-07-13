/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './example.js',

  output: {
    path: path.join(__dirname),
    filename: './react-loading-simple.js',
    libraryTarget: 'umd',
    library: 'ReactLoadingSimple'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'jsx-loader?harmony',
      },
      {test: /\.svg$/, loader: 'raw-loader'}
    ]
  }
};

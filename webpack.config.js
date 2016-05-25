var webpack = require('webpack');
var path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets:['react']},
      },
      {
        test: /\.s?css$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {test: /\.svg$/, loader: 'raw-loader'}
    ],
  },

  entry: './src/react-loading-simple.js',

  output: {
    library: 'ReactLoadingSimple',
    libraryTarget: 'umd',
    path: 'dist',
    filename: 'react-loading-simple.js',
  },

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    }
  },

  node: {
    Buffer: false
  },

};

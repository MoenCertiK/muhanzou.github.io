var webpack = require('webpack'),
    path    = require('path');

var DIST_DIR = path.resolve(__dirname, 'javascripts'),
    SRC_DIR  = path.resolve(__dirname, 'app');

var config = {
  entry : SRC_DIR + '/main.js',
  output: {
    path    : DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test   : /\.jsx?$/,
        include: SRC_DIR,
        exclude: /(node_modules)/,
        loader : 'babel',
        query  : {
          presets: ['react','es2015']
        }
      }
    ]
  }
};

module.exports = config;

const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer     = require('autoprefixer');

const DIST_DIR = path.resolve(__dirname, 'build');
const SRC_DIR  = path.resolve(__dirname, 'app');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
];

var config = {
  devtool: 'eval-source-map',
  entry  : SRC_DIR + '/main.js',
  output : {
    path    : DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/public',
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
      },
      {
        test  : /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test  : /\.(png|jpg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ],
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'app')]
  }
};

module.exports = config;

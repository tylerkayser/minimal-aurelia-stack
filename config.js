var AureliaWebPackPlugin = require('aurelia-webpack-plugin');
var resolve = require('path').resolve;
var webpack = require('webpack');

var paths = {
  index: resolve(__dirname, 'index.html'),
  dist: resolve(__dirname, './dist'),
  src: resolve(__dirname, './src')
};

module.exports = {
  devServer: {
    contentBase: paths.dist
  },

  paths: paths,

  port: 3000,

  webpack: {
    entry: {
      app: [],
      aurelia: [
        'aurelia-bootstrapper-webpack',
        'aurelia-polyfills',
        'aurelia-pal',
        'aurelia-pal-browser',
        'aurelia-binding',
        'aurelia-dependency-injection',
        'aurelia-event-aggregator',
        'aurelia-framework',
        'aurelia-history',
        'aurelia-history-browser',
        'aurelia-loader',
        'aurelia-loader-webpack',
        'aurelia-logging',
        'aurelia-logging-console',
        'aurelia-metadata',
        'aurelia-path',
        'aurelia-route-recognizer',
        'aurelia-router',
        'aurelia-task-queue',
        'aurelia-templating',
        'aurelia-templating-binding',
        'aurelia-templating-router',
        'aurelia-templating-resources'
      ]
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: ['es2015']
          }
        },
        {
          test: /\.html$/,
          exclude: paths.index,
          loader: 'html'
        }
      ],
    },
    output: {
      filename: '[name].js',
      path: paths.dist,
      publicPath: '/'
    },
    plugins: [
      new AureliaWebPackPlugin({src: paths.src}),
      new webpack.optimize.CommonsChunkPlugin({name: ['aurelia']}),
      new webpack.optimize.DedupePlugin()
    ]
  }
};

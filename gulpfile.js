var config = require('./config');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('watch', function(done) {
  new WebpackDevServer(webpack(config.webpack), config.devServer)
    .listen(config.port, 'localhost', function(error) {
      if (error) {
        throw new gutil.PluginError('webpack-dev-server', error);
      }
      gutil.log('[webpack-dev-server]', 'http://localhost:' + config.port + '/webpack-dev-server/');
      done();
    });
});

gulp.task('build', function() {
  webpack(config.webpack);
});

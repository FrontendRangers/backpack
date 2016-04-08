/**
*
* Backpack tasks
* @version: 0.8.0
* @author: Benoit Deziel
*
**/

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
    plugins.browserSync         = require('browser-sync').create();
    plugins.reload              = plugins.browserSync.reload;
    plugins.del                 = require('del');
    plugins.gutil               = require('gulp-util');

var config = require('require-dir')('./configs', {
    recurse: true
});

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, config);
}

gulp.task('scripts', getTask('scripts'));
gulp.task('styles', getTask('styles'));
// gulp.task('styleguide', ['clean'], getTask('styleguide'));
gulp.task('browserSync', ['styleguide'], getTask('browsersync'));

// Tasks to be put in a file

gulp.task('clean', function (cb) {
    return plugins.del([config.styleguide.path.dest.pages + '/**/*'], cb);
});

gulp.task('default', ['styleguide', 'browserSync'], function () {
    gulp.watch(config.styles.path.src + '/*.{css,scss}', ['styles', 'styleguide']);
    gulp.watch([
        config.styleguide.path.src.pages + '/**/*.{html,md}',
        config.styleguide.path.src.layouts + '/**/*.html',
        config.styleguide.path.src.components + '/**/*.html',
        config.styleguide.path.src.styles + '/**/*.css',
    ], ['styleguide']);
});

gulp.task('debug', function() {
    console.log(config);
});

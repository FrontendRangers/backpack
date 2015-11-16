'use strict';

/**
*
* Backpack tasks
* @version: 0.7.0
* @author: Benoit Deziel
*
**/

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
    plugins.autoprefixer = require('autoprefixer');
    plugins.precss = require('precss');
    plugins.postcssSimpleVars = require('postcss-simple-vars');
    plugins.postcssDiscardEmpty = require('postcss-discard-empty');
    plugins.postcssReporter = require('postcss-reporter');
    plugins.browserSync = require('browser-sync').create();
    plugins.reload = plugins.browserSync.reload;
    plugins.del = require('del');
    plugins.gutil = require('gulp-util');
    plugins.fs = require('fs');
var config = require('./config')(plugins);

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, config);
}

gulp.task('scripts', getTask('scripts'));
gulp.task('styles', getTask('styles'));
gulp.task('styleguide', ['clean'], getTask('styleguide'));
gulp.task('browserSync', ['styleguide'], getTask('browsersync'));

// Tasks to be put in a file

gulp.task('clean', function (cb) {
    return plugins.del([config.styleguide.path.dest.pages + '/**/*'], cb);
});

gulp.task('default', ['styleguide', 'browserSync'], function () {
    gulp.watch(config.styles.path.src + '/*.{css,scss}', ['styles', 'styleguide']);
    gulp.watch([
        config.styleguide.path.src.pages + '/**/*.html',
        config.styleguide.path.src.layouts + '/**/*.html',
        config.styleguide.path.src.components + '/**/*.html',
        config.styleguide.path.src.styles + '/**/*.css',
    ], ['styleguide']);
});

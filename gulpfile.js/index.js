'use strict';

/**
*
* Backpack tasks
* @version: 0.8.0
* @author: Benoit Deziel
*
**/

var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;



require('require-dir')('./tasks', {
    recurse: true
});

var config = require('./configs/styleguide');
var guidebook = require('guidebook');


gulp.task('styleguide', guidebook(config));

gulp.task('default', function(callback) {
  runSequence('styleguide',
              ['styles', 'styles:styleguide'],
              'styleguide:server',
              callback);
});

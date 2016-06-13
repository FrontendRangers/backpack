'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync');

gulp.task('styles', function() {
    return gulp.src('./assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/docs/assets/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles:styleguide', function() {
    return gulp.src('./src/styleguide/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/docs/styleguide/styles'));
});

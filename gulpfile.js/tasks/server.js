'use strict';

var config = require('../configs/styleguide'),
    gulp = require('gulp'),
    browserSync = require('browser-sync').create('Styleguide'),
    reload = browserSync.reload;

gulp.task('styleguide:server', function() {

    browserSync.init({
        logPrefix: "Backpack",
        server: {
            baseDir: config.path.dest.pages
        },
        open: false
    });

    gulp.watch('./assets/styles/**/*.scss', ['styles']).on('change', reload);
    gulp.watch('./src/docs/**/*', ['styleguide']).on('change', reload);

});

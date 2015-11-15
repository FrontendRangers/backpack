module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src('src/js/**/*.js')
            .pipe(plugins.concat('scripts.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest('dest'));
    };
};

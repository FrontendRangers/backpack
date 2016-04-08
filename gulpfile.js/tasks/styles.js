module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.styles.path.in)
            .pipe(plugins.sass())
            .pipe(gulp.dest(config.styles.path.out))
            .pipe(plugins.reload({stream:true}));
    };
};

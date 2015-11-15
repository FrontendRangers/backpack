module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.styles.path.src + '/*.{css,scss}')
            .pipe(plugins.sass())
            .pipe(plugins.postcss(config.styles.processors))
            .pipe(gulp.dest(config.styles.path.dest))
            .pipe(plugins.reload({stream:true}));
    };
};

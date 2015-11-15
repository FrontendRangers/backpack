module.exports = function (gulp, plugins, config) {
    return function() {
        plugins.browserSync.init({
            server: {
                baseDir: config.styleguide.path.dest.pages
            },
            open: false
        });
    };
};

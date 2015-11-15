module.exports = function (gulp, plugins, config) {
    return function() {
        plugins.nunjucksRender.nunjucks.configure([config.styleguide.path.src.pages], {watch: false});

        // Import the libs files in the styleguide
        gulp.src(config.libs + '**/*.{css,js,html}')
            .pipe(gulp.dest(config.styleguide.path.dest.libs));

        // Compile styleguide pages with nunjucks
        gulp.src(config.styleguide.path.src.pages + '/**/*.html')
            .pipe(plugins.plumber())
            .pipe(plugins.nunjucksRender())
            .pipe(gulp.dest(config.styleguide.path.dest.pages))
            .pipe(plugins.reload({stream:true}));

        // Compile styleguide components
        gulp.src(config.styleguide.path.src.components + '/*.html')
            .pipe(plugins.plumber())
            .pipe(plugins.htmlPostcss(config.styles.processors))
            .pipe(gulp.dest(config.styleguide.path.dest.components))
            .pipe(plugins.reload({stream:true}));

        // Compile styleguide css
        gulp.src(config.styleguide.path.src.styles + '/guidebook.css')
            .pipe(plugins.plumber())
            .pipe(plugins.postcss(config.styles.processors))
            .pipe(gulp.dest(config.styleguide.path.dest.styles))
            .pipe(plugins.reload({stream:true}));

        // Compile app css
        gulp.src(config.styles.path.src + '/*.{css,scss}')
            .pipe(plugins.sass())
            .pipe(plugins.postcss(config.styles.processors))
            .pipe(gulp.dest(config.styleguide.path.dest.pages + '/assets/css/'))
            .pipe(plugins.reload({stream:true}));
    };
};

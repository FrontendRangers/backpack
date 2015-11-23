
module.exports = function(gulp, plugins, config) {
    return function() {

        var showError = function(err) {
          plugins.util.beep();
          console.log(err);
        };

        // Import the libs files in the styleguide
        gulp.src(config.libs + '**/*.{css,js,html}')
            .pipe(gulp.dest(config.styleguide.path.dest.libs));

        // Compile styleguide components
        var fmFilter = plugins.filter("**/*.{html,md}");

        gulp.src(config.styleguide.path.src.pages + '/**/*.{html,md}')
            .pipe(plugins.plumber({
                errorHandler: showError
            }))
            .pipe(fmFilter)
            .pipe(plugins.frontMatter({
                property: 'frontMatter'
            })).on("data", function(file) {
                plugins.assign(file, file.frontMatter);
                delete file.frontMatter;
            })
            .pipe(fmFilter.restore())
            .pipe(
                plugins.gulpsmith()

                .use(plugins.collections({
                    Components: {pattern: 'components/*.md'},
                    Templates: {pattern: 'templates/*.md'}
                }))
                .use(plugins.inPlace({
                    'engine': 'handlebars',
                    'pattern': '/**/*.md'
                }))
                .use(plugins.markdown({
                     'gfm': true
                }))
                .use(plugins.permalinks({
                    pattern: ':collections/:title',
                    relative: false
                }))
                .use(plugins.layouts({
                    'engine': 'handlebars',
                    'directory': config.styleguide.path.src.layouts,
                    'default': 'default.html'
                }))
            )
            .pipe(gulp.dest(config.styleguide.path.dest.pages))
            .pipe(plugins.reload({
                stream: true
            }));

        gulp.src(config.styleguide.path.src.components + '/**/*.html')
            .pipe(gulp.dest(config.styleguide.path.dest.components))
            .pipe(plugins.reload({
                stream: true
            }));

        // Compile styleguide css
        gulp.src(config.styleguide.path.src.styles + '/guidebook.css')
            .pipe(plugins.plumber())
            .pipe(plugins.postcss(config.styles.processors))
            .pipe(gulp.dest(config.styleguide.path.dest.styles))
            .pipe(plugins.reload({
                stream: true
            }));

        // Compile app css
        gulp.src(config.styles.path.src + '/*.{css,scss}')
            .pipe(plugins.sass())
            .pipe(plugins.postcss(config.styles.processors))
            .pipe(gulp.dest(config.styleguide.path.dest.pages + '/assets/css/'))
            .pipe(plugins.reload({
                stream: true
            }));

        gulp.src(config.styleguide.path.src.pages + '/**/*.md')
            .pipe(plugins.filelist('filelist.json'))
            .pipe(gulp.dest(config.styleguide.path.dest.pages));
    //
    // var metalsmith  = require('gulp-metalsmith'),
    //     markdown    = require('metalsmith-markdown'),
    //     layouts     = require('metalsmith-layouts'),
    //     inPlace     = require('metalsmith-in-place'),
    //     collections = require('metalsmith-collections'),
    //     permalinks  = require('metalsmith-permalinks'),
    //     ignore      = require('metalsmith-ignore');
     };
};

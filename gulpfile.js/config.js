var dest = './_build/',
    src = './',
    libs = './libs/';

module.exports = function (plugins) {
    var config = {
        dest: dest,
        libs: libs,
        styles: {
            path: {
                src: src + 'assets/_scss',
                dest: dest + 'css'
            },
            processors: [
                plugins.postcssSimpleVars,
                plugins.precss,
                plugins.autoprefixer({browsers: ['last 2 version']})
            ]
        },
        styleguide: {
            path: {
                src: {
                    pages: src + 'docs',
                    layouts: src + 'docs/styleguide/layouts',
                    components: src + 'docs/styleguide/components',
                    styles: src + 'docs/styleguide/styles'
                },
                dest: {
                    pages: dest + 'docs',
                    libs: dest + 'docs/libs',
                    layouts: dest + 'docs/styleguide/layouts',
                    components: dest + 'docs/styleguide/components',
                    styles: dest + 'docs/styleguide/styles'
                }
            }
        }
    };

    return config;
};

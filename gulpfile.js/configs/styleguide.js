var pkg = require('../../package.json');

var dest = './build/',
    src = './src/',
    libs = './libs/';

module.exports = {
    helpers: src + 'styleguide/helpers',
    metadata: {
        site: {
            name: 'Backpack',
            description: 'Backpack is a css toolkit.',
            version: pkg.version
        }
    },
    collections: {
        getting_started: {
            pattern: 'getting_started/*.md'
        },
        base: {
            pattern: 'base/**/*',
            metadata: {
                layout: 'pattern.html'
            }
        },
        components: {
            pattern: 'components/**/*',
            metadata: {
                layout: 'pattern.html'
            }
        },
        modules: {
            pattern: 'modules/**/*',
            metadata: {
                layout: 'pattern.html'
            }
        },
        helpers: {
            pattern: 'helpers/**/*',
            metadata: {
                layout: 'pattern.html'
            }
        },
        templates: {
            pattern: 'templates/*.{html,md}',
            metadata: {
                layout: 'page_template.html'
            }
        }
    },
    path: {
        root: './',
        src: {
            pages: src + 'docs/',
            layouts: src + 'styleguide/templates/',
            components: src + 'styleguide/components/',
            partials: src + 'styleguide/partials/',
            styles: src + 'styleguide/styles/',
            scripts: src + 'styleguide/scripts/',
            libs: './libs/',
            watch: [src + 'docs/**/*', src + 'styleguide/**/*'],
        },
        dest: {
            pages: dest + 'docs/',
            libs: dest + 'docs/libs/',
            layouts: dest + 'docs/styleguide/layouts/',
            components: dest + 'docs/styleguide/components/',
            styles: dest + 'docs/styleguide/styles/',
            scripts: dest + 'docs/styleguide/scripts/',
            libs: dest + 'docs/libs/'
        }
    }
};

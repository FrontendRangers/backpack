var dest = './_build/',
    src = './',
    libs = './libs/';

module.exports = {
    metadata: {
        title: "Guidebook"
    },
    collections: {
        components: {
            pattern: "components/*.md"
        },
        modules: {
            pattern: "modules/*.md"
        }
    },
    path: {
        src: {
            pages: src + 'docs',
            layouts: src + 'docs/styleguide/layouts/',
            components: src + 'docs/styleguide/components/',
            helpers: src + 'docs/styleguide/',
            styles: src + 'docs/styleguide/styles/'
        },
        dest: {
            pages: dest + 'docs',
            libs: dest + 'docs/libs',
            layouts: dest + 'docs/styleguide/layouts',
            components: dest + 'docs/styleguide/components',
            styles: dest + 'docs/styleguide/styles'
        }
    }
};

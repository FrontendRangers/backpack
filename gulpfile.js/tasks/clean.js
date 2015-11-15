var del = require('del');

module.exports = function (gulp, plugins, config) {
    return del([config.styleguide.path.dest + '/**/*'], cb);
};

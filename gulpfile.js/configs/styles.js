var dest = './_build/',
    src = './',
    libs = './libs/';

module.exports = {
    path: {
        in: src + 'assets/_scss/*.scss',
        out: dest + 'assets/styles'
    }
};

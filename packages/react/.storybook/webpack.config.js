const path = require('path');

module.exports = (_baseConfig, _env, config) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [['react-app', { flow: false, typescript: true }]],
                },
            },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};

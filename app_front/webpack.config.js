const path = require('path');

module.exports = {
    entry: {
        main: './js/load.js'
    },
    output: {
        path: path.join(__dirname, '../public/js'),
        publicPath: '/public/js/',
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    context: path.resolve(__dirname, './'),
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './js'),
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};

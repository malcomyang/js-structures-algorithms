const path = require('path');

module.exports = {
    entry: './src/library.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'structuresalgorithms.js'
    }
};
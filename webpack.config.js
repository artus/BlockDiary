const webpack = require('webpack');

const UglifyEsPlugin = require('uglify-es-webpack-plugin');
const UglifyEsPluginConfig = new UglifyEsPlugin({
    mangle: {
        reserved: [
            'Buffer',
            'BigInteger',
            'Point',
            'ECPubKey',
            'ECKey',
            'sha512_asm',
            'asm',
            'ECPair',
            'HDNode'
        ]
    }
});

module.exports = {
    entry: './js/requires.js',
    target: 'web',
    output: {
        filename: './js/bundle.js',
    }, plugins: [
        UglifyEsPluginConfig
    ]
}
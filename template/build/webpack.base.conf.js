/**
 * Created by OUYANG on 2017/2/27.
 */

var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': resolve('node_modules/vue/dist/vue.esm.js'),
            '@': resolve('src')
        }
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [resolve('src')]
            },{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },{
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: utils.assetsPath('img/[name].[ext]?[hash]')
                }
            },{
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: utils.assetsPath('img/[name].[ext]?[hash]')
                }
            }
        ]
    },
};
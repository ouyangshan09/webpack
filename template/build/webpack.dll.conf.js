/**
 * Created by ouyangshan09 on 2017/2/28.
 * 应用DllReferencePlugin和DllPlugin插件,打包第三方库,利用缓存减少下载
 * @author Ouyang
 * @version 1.0
 */
var utils = require('./utils');
var DllPlugin = require('webpack/lib/DllPlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var path = require("path");
var config = require('../config');

const dll = [
    'vue',
    'vue-router'
];

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        "lib": dll
    },
    output: {
        path: resolve('lib'),
        filename: '[name].js',
        library: '[name]'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': resolve('node_modules/vue/dist/vue.esm.js'),
            '@': resolve('src')
        }
    },
    // devtool: '#source-map',
    plugins: [
        new DllPlugin({
            path: config.build.assetsLib + '/manifest.json',
            name: '[name]',
            context: config.build.assetsLib
        }),
        new UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true,
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
    ]
};
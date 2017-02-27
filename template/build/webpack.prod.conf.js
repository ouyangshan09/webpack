/**
 * Created by OUYANG on 2017/2/27.
 * 正式环境编译配置
 */
process.env.NODE_ENV = 'production';

var utils = require('./utils');
var path = require('path');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');

var DefinePlugin = require('webpack/lib/DefinePlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = config.build.env;

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devetool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    plugins: [
        new DefinePlugin({
            'process.env': env
        }),
        new UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: true,
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            title: "个人",
        }),
    ]
});
module.exports = webpackConfig;

/**
 * Created by OUYANG on 2017/2/27.
 * 开发环境脚本配置
 */
var path = require('path');
var webpack = require('webpack');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
var NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');
var merge = require('webpack-merge');
var config = require('../config');
var utils = require('./utils');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorPlugin = require('friendly-errors-webpack-plugin');

utils.styleLoaders({sourceMap: config.dev.cssSourceMap});


module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, "../"),
        port: 9999
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new DefinePlugin({
            'process.env': config.dev.env
        }),
        new HotModuleReplacementPlugin(),
        new NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorPlugin()
    ],
});
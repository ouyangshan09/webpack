/**
 * Created by ouyangshan09 on 2017/2/28.
 * vue携带css加载配置
 */
var utils = require('./utils');
var config = require('../config');
var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    })
};
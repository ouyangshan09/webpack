/**
 * Created by OUYANG on 2017/2/27.
 */
var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});
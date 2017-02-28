/**
 * Created by ouyangshan09 on 2017/2/28.
 */
var config = require('../config');
var webpack = require('webpack');
var dllBundleConfig = require('./webpack.dll.conf');
var path = require('path');
var ora = require('ora');

var spinner = ora('dll bundle for loading...');
spinner.start();

webpack(dllBundleConfig, function (err, status) {
    spinner.stop();
    if(err) throw err;
    process.stdout.write(status.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }));
    console.log('dll 打包完成');
    console.log('');
});
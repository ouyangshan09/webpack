/**
 * Created by OUYANG on 2017/2/27.
 * 编译脚本
 * @file dist folder
 */
process.env.NODE_ENV = 'production';

var ora = require('ora');
var rm = require('rimraf');
var chalk = require('chalk');
var path = require('path');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('./webpack.prod.conf2.js');

var spinner = ora('building for production');
spinner.start();

webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');
    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ));
});

// rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
//     if(err) throw err;
//
// });
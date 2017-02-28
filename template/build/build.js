/**
 * Created by OUYANG on 2017/2/27.
 * 编译->发布脚本
 * @file dist folder
 */

process.env.NODE_ENV = 'production';

var ora = require('ora');
var rm = require('rimraf');
var chalk = require('chalk');
var path = require('path');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('./webpack.prod.conf.js');

var spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if(err) throw err;
    webpack(webpackConfig, function (err, stats) {
        spinner.stop();
        if(err) throw err;
        if(stats == null){
            return;
        }
        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n');
        console.log(chalk.cyan('  编译完成.\n'));
        console.log(chalk.yellow(
            '  Tip: 通过静态服务器访问index.html 可看到效果.\n' +
            '  例如使用Nginx服务器,注意文件结构'
        ));
    });
});
/**
 * Created by OUYANG on 2017/3/14.
 * 开发环境中 客户端自动刷新服务
 */
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');
hotClient.subscribe(function (event) {
    if(event.action === 'reload'){
        window.location.reload();
    }
});

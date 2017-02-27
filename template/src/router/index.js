/**
 * Created by OUYANG on 2017/2/27.
 */
import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../component/Hello';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
});
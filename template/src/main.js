/**
 * Created by OUYANG on 2017/2/27.
 */
import Vue from 'vue';
import App from './App';
import Router from './router';

new Vue({
    el: '#app',
    router: Router,
    components: {
        App,
    },
    template: '<App/>'
});
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import {polyfill} from 'es6-promise';

polyfill();

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');

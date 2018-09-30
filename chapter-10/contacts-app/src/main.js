import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import {polyfill} from 'es6-promise'

polyfill();

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app')

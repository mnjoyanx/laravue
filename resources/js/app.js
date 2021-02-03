require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import App from './components/App'
import 'uikit/dist/css/uikit.min.css'

import router from './router/index'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

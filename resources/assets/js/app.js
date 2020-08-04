require('./bootstrap');

window.Vue = require('vue');


import Bootstrap from 'bootstrap-vue'

Vue.use(Bootstrap)

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

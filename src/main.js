import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Header from './modules/Header.vue'
import Menu from './modules/Menu.vue'

Vue.use(VueRouter);

// ROUTES
import Rejuv from './modules/Rejuv.vue'
import Estetska from './modules/Estetska.vue'
import Ultrazvuk from './modules/Ultrazvuk.vue'
import Kontakt from './modules/Kontakt.vue'

const routes = [
    {path: '/', redirect: '/rejuvenacijska' },
    {path: '/rejuvenacijska', component: Rejuv },
    {path: '/estetska', component: Estetska },
    {path: '/ultrazvuk', component: Ultrazvuk },
    {path: '/kontakt', component: Kontakt }
];

const router = new VueRouter({
    routes
})

// COMPONENTS
Vue.component('site-header', Header);
Vue.component('site-menu', Menu);

// VUE

new Vue({
  el: '#app',
  router,

  render: h => h(App)
})

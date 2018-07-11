import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from '../vue/App.vue';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(Vuex);

// Initialize the plugins and save them in a var
const router = new VueRouter({
  routes: routes
});

const store = new Vuex.Store({
  state: {
    counter: 0
  }
});

const app = new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
});
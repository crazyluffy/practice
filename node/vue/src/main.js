import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ViewUI);

const routerConfig = {
    // mode: 'history',
    routes: Routers
}

const router = new VueRouter(routerConfig);

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

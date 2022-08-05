import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import store from '@/store';
import '@/mock/mockServe';
import 'swiper/css/swiper.css';
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.config.productionTip = false;
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },

  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

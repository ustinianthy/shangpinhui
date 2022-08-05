import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import TypeNav from '@/components/TypeNav';
import Carsoules from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button, MessageBox } from 'element-ui';

Vue.component(Button.name, Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);
Vue.component(Carsoules.name, Carsoules);
//引入路由

import 'swiper/css/swiper.css';
import '@/mock/mockServe';

import * as API from '@/api';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount('#app');

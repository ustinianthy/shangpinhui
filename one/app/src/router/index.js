import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true },
    },
    {
      path: '/search/:keyword?',
      name: 'search',
      component: Search,
      meta: { show: true },
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false },
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false },
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
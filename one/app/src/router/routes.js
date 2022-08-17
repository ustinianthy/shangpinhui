import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '../pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';

export default [
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: '/addcartsuccess/:num',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: '/detail/:skuid',
    name: 'detail',
    component: Detail,
    meta: { show: true },
  },
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
];

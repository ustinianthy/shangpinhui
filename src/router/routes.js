import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center'
import Myorder from '@/pages/Center/myOrder'

export default [
  {
    path: '/center',
    component: Center,
    children: [
      {
        path: 'MyOrder',
        component: Myorder,
      },
    ],
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: '/pay',
    component: Pay,
    meta: { show: true },
  },
  {
    path: '/trade',
    component: Trade,
    meta: { show: true },
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true },
  },
  {
    path: '/home',
    component: Home,
    meta: { show: true },
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false },
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false },
  },
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/communication',
    component: () =>
      import('@/pages/Communication/Communication'),
    children: [
      {
        path: 'event',
        component: () =>
          import(
            '@/pages/Communication/EventTest/EventTest'
          ),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'model',
        component: () =>
          import(
            '@/pages/Communication/ModelTest/ModelTest'
          ),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'sync',
        component: () =>
          import('@/pages/Communication/SyncTest/SyncTest'),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'attrs-listeners',
        component: () =>
          import(
            '@/pages/Communication/AttrsListenersTest/AttrsListenersTest'
          ),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'children-parent',
        component: () =>
          import(
            '@/pages/Communication/ChildrenParentTest/ChildrenParentTest'
          ),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'scope-slot',
        component: () =>
          import(
            '@/pages/Communication/ScopeSlotTest/ScopeSlotTest'
          ),
        meta: {
          isHideFooter: true,
        },
      },
    ],
  },
];

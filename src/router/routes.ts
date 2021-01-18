import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import Login from '@/views/login/index.vue';
import Home from '@/views/home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/form/index.vue'),
      },
      {
        path: 'menu:pathMatch(.*)*',
        name: 'Menu',
        component: () => import('@/views/menu/index.vue'),
      },
    ],
  },
  // {
  //   path: '/user',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'User',
  //       component: () => import('@/views/user/index.vue'),
  //     },
  //   ],
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/error/404',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    alias: '/error',
  },
  {
    path: '/error/403',
    name: 'NotAuth',
    component: () => import('@/views/error/403.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NoMatch',
    redirect: '/error/404',
  },
];

export default routes;

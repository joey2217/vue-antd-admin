import Vue from 'vue';
import VueRouter from 'vue-router';
import Nprogress from 'nprogress';
import store from '../store';

import Layout from '@/layout/index.vue';
import Exception from '@/views/exception/index.vue';
import Login from '@/views/login/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
  },
  {
    path: '/exception/:code',
    name: 'Exception',
    component: Exception,
  },
  {
    path: '*',
    redirect: '/exception/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 })
});

// 角色

router.beforeEach(async(to, from, next) => {
  const roles = store.state.user.roles;
  Nprogress.start();
  if (roles && roles.length > 0) {
    if (to.path === '/login') {
      next('/');
    } else {
      console.log(to.path);
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      const roles = await store.dispatch('user/getUserInfo');
      if (roles && roles.length > 0) {
        next({ ...to, replace: true });
      } else {
        next(`/login?redirect=${to.path}`);
      }
    }
  }
});

router.afterEach((to, from) => {
  Nprogress.done();
});

export default router;

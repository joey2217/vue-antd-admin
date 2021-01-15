import { createRouter, createWebHistory } from 'vue-router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import routes from './routes';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

const ALLOW_LIST = ['/login', '/error/403', '/error/404'];

function checkPath(path: string): boolean {
  // TODO
  console.log(path);
  return true;
}

router.beforeEach(async (to, form) => {
  nprogress.start();
  if (ALLOW_LIST.includes(to.path)) {
    return true;
  } else {
    const token = store.getters.token;
    console.log(token);
    if (token) {
      const menus = store.getters.menus as unknown[];
      if (menus.length <= 0) {
        await store.dispatch('getUserInfo');
      }
      if (to.meta.auth) {
        const valid = checkPath(to.path);
        if (!valid) {
          router.replace('/error/403');
          return false;
        }
      }
    } else {
      router.replace('/error/403');
      return false;
    }
  }
});

router.afterEach(() => {
  nprogress.done();
});

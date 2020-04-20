import Layout from '@/layout/index.vue';

export default {
  path: '/nested',
  name: 'Nested',
  component: Layout,
  redirect: '/nested/menu1',
  meta: {
    auth: true
  },
  children: [
    {
      path: 'menu1',
      name: 'menu1',
      component: () => import('@/views/nested/menu1/index.vue'),
      meta: {
        auth: true
      },
    },
    {
      path: 'menu2',
      name: 'menu2',
      component: () => import('@/views/nested/menu2/index.vue'),
      redirect: '/nested/menu2/menu2-1',
      children: [
        {
          path: 'menu2-1',
          name: 'menu2-1',
          component: () => import('@/views/nested/menu2/menu2-1/index.vue'),
          meta: {
            auth: true
          },
        },
      ]
    }
  ]
};

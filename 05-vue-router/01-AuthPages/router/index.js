import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      path: '/',
      name: 'PageIndex',
      component: () => import('../views/PageIndex'),
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: () => import('../views/PageLogin'),
    },
    {
      path: '/register',
      name: 'PageRegister',
      component: () => import('../views/PageRegister'),
    },
  ],
});

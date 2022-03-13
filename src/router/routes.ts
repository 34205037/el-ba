import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/view1',
    component: () => import('../views/view1.vue'),
  },
  {
    path: '/more',
    component: () => import('../views/more.vue'),
  },
];

export default routes;
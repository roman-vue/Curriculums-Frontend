import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/modules/Home/pages/Home.vue';
import NotFound from '@/modules/shared/pages/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
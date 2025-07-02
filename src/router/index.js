import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FreeFireView from '../views/FreeFireView.vue';
import ROVView from '../views/ROVView.vue';
import ValorantView from '../views/ValorantView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/freefire',
    name: 'freefire',
    component: FreeFireView
  },
  {
    path: '/rov',
    name: 'rov',
    component: ROVView
  },
  {
    path: '/valorant',
    name: 'valorant',
    component: ValorantView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
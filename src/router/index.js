import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ROVView from '../views/ROVView.vue';
import FreeFireView from '../views/FreeFireView.vue';
import ValorantView from '../views/ValorantView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rov',
      name: 'rov',
      component: ROVView
    },
    {
      path: '/freefire',
      name: 'freefire',
      component: FreeFireView
    },
    {
      path: '/valorant',
      name: 'valorant',
      component: ValorantView
    }
  ],
  // นี่คือส่วนที่คุณต้องเพิ่มเพื่อควบคุมการเลื่อนหน้าจอ
  scrollBehavior(to, from, savedPosition) {
    // ถ้ามีตำแหน่งที่บันทึกไว้ (เช่น จากปุ่มย้อนกลับของเบราว์เซอร์) ให้กลับไปที่ตำแหน่งนั้น
    if (savedPosition) {
      return savedPosition;
    } else {
      // ถ้าไม่มีตำแหน่งที่บันทึกไว้ (เปลี่ยนหน้าปกติ) ให้เลื่อนไปบนสุด
      return { top: 0, left: 0, behavior: 'smooth' };
    }
  }
});

export default router;
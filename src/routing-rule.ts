import { createRouter, createWebHashHistory } from "vue-router";
import PasswordGenerateTest from '@/components/PasswordGenerateTest.vue';
import HelloWorldVue from './components/HelloWorld.vue';

const routes = [
  { path: '/', component: PasswordGenerateTest, },
  { path: '/test', component: HelloWorldVue, }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
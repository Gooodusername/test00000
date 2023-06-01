import Vue from 'vue';
import VueRouter from 'vue-router';
import Shouye from '../pages/shouye/shouye.vue';
import Xiangqingye from '../pages/xiangqingye/xiangqingye.vue';
import Wode from '../pages/wode/wode.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'shouye',
    component: Shouye,
  },
  {
    path: '/xiangqingye',
    name: 'xiangqingye',
    component: Xiangqingye,
  },
  {
    path: '/wode',
    name: 'wode',
    component: Wode,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import PublicHome from '../pages/PublicHome.vue';
import UserHome from '../pages/UserHome.vue'
import Dashboard from '../pages/Dashboard.vue';
import MyCartPage from '../pages/MyCartPage.vue';
import PaymentPage from '@/pages/PaymentPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import Laptops from '@/product_pages/Laptops.vue';

import Smartphones from '@/product_pages/Smartphones.vue';
import Wearables from '@/product_pages/Wearables.vue';
import Accessories from '@/product_pages/Accessories.vue';

const routes = [
  {
    path: '/',
    name: 'PublicHome',
    component: PublicHome,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/user',
    component: UserHome,
    children: [
      {
        path: '',
        redirect: 'user/smartphones' // 默认跳转到 laptops
      },
      {
        path: 'cart',
        name: 'MyCart',
        component: MyCartPage,
      },
      {
        path: 'smartphones',
        name: 'Smartphones',
        component: Smartphones,
      },
      {
        path: 'laptops',
        name: 'Laptops',
        component: Laptops,
      },
      {
        path: 'accessories',
        name: 'Accessories',
        component: Accessories,
      },
      {
        path: 'wearables',
        name: 'Wearables',
        component: Wearables,
      },
            {
        path: 'payment',
        name: 'PaymentPage',
        component: PaymentPage,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;


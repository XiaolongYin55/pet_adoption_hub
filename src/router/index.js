import { createRouter, createWebHistory } from 'vue-router';
import PublicHome from '../pages/PublicHome.vue';
import UserHome from '../pages/UserHome.vue'
import UserNews from '@/pages/UserNews.vue';
import UserPublish from '@/pages/UserPublish.vue';

import AdminHome from '@/pages/AdminHome.vue';
import Dashboard from '../pages/Dashboard.vue';
import MyCartPage from '../pages/MyCartPage.vue';
import PaymentPage from '@/pages/PaymentPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import Laptops from '@/product_pages/Laptops.vue';
import AdminProduct from '@/product_pages/AdminProduct.vue';

import Smartphones from '@/product_pages/Smartphones.vue';
import Wearables from '@/product_pages/Wearables.vue';
import Accessories from '@/product_pages/Accessories.vue';
import AdminNews from '@/pages/AdminNews.vue';
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
        redirect: 'laptops'  // 默认跳转到 /user/smartphones
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
        path: 'news',
        name: 'UserNews',
        component: UserNews,
      },
      {
        path: 'publish',
        name: 'UserPublish',
        component: UserPublish,
      },
      {
        path: 'payment',
        name: 'PaymentPage',
        component: PaymentPage,
      },
    ]
  },
  {
    path: '/admin',
    component: AdminHome,
    children: [
      {
        path: '',
        redirect: 'smartphones'  // 默认跳转到 /admin/smartphones
      },
      {
        path: 'cart',
        name: 'AdminMyCart',
        component: MyCartPage,
      },
      {
        path: 'smartphones',
        name: 'AdminSmartphones',
        component: Smartphones,
      },
      {
        path: 'laptops',
        name: 'AdminLaptops',
        component: Laptops,
      },
      {
        path: 'accessories',
        name: 'AdminAccessories',
        component: Accessories,
      },
      {
        path: 'wearables',
        name: 'AdminWearables',
        component: Wearables,
      },
      {
        path: 'product',
        name: 'AdminProduct',
        component: AdminProduct,
      },
      {
        path: 'news',
        name: 'AdminNews',
        component: AdminNews,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;


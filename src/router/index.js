import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Welcome from '../views/Welcome.vue';
import Login from '../views/Login.vue';
import HomePage from '../views/HomePage.vue';
import CartPage from '../views/CartPage.vue';
import Logout from '../views/Logout.vue';
import Testing from '../views/Testing.vue';
import MyAccount from '../views/MyAccount.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/cartpage',
    name: 'CartPage',
    component: CartPage,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing,
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

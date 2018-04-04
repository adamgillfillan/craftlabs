import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Register from '../components/User/Register';
import Login from '../components/User/Login';
import Profile from '../components/User/Profile';
import Logout from '../components/User/Logout';
import Shop from '../components/Shop/Shop';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
  ],
});

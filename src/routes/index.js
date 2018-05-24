import VueRouter from 'vue-router';

import Home from './Home';
import Login from './Login';
import store from '../store';

const auth = (to, from, next) => {
  const token = to.query.access_token;
  const isAuth = store.getters.isAuthenticated;

  if (token) {
    store.commit('setToken', token);
    localStorage.setItem('access_token', token);
  }

  if (isAuth) {
    next();
    return;
  }

  next('/login');
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: auth,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
});

export default router;

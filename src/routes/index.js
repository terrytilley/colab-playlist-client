import VueRouter from 'vue-router';

import Home from './Home';
import Login from './Login';
import Playlist from './Playlist';
import store from '../store';

const ifAuth = (to, from, next) => {
  const accessToken = to.query.access_token;
  const refreshToken = to.query.refresh_token;
  const isAuth = store.getters.isAuthenticated;

  if (accessToken && refreshToken) {
    store.commit('setToken', accessToken);
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  if (isAuth) {
    next();
    return;
  }

  next('/login');
};

const ifNotAuth = (to, from, next) => {
  const isAuth = store.getters.isAuthenticated;

  if (!isAuth) {
    next();
    return;
  }

  next('/');
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: ifAuth,
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: ifNotAuth,
    },
    {
      name: 'Playlist',
      path: '/playlist/:id',
      component: Playlist,
      beforeEnter: ifAuth,
    },
  ],
});

export default router;

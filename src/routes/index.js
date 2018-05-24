import VueRouter from 'vue-router';

import Home from './Home';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});

import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import auth from './modules/auth';
import playlist from './modules/playlist';
import playlists from './modules/playlists';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
    auth,
    playlist,
    playlists,
  },
});

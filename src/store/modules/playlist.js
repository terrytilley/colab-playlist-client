// import api from '../../api';

const state = {
  name: '',
  tracks: [],
};

const getters = {
  playlist: state => state,
};

const actions = {
  async getPlaylist({ state, rootState }) {
    console.log('state', state);
    console.log('rootState', rootState);
  },
};

const mutations = {
  updateTracks: (state, tracks) => {
    console.log('tracks', tracks);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

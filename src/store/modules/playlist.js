import api from '../../api';

const state = {
  name: '',
  tracks: {},
  images: [],
};

const getters = {
  playlist: state => state,
};

const actions = {
  async getPlaylist({ getters, commit, dispatch }, playlistId) {
    try {
      await dispatch('getUser');
      const token = getters.token;
      const userId = getters.user.id;
      const response = await api.getPlaylist(token, userId, playlistId);

      commit('setPlaylistDetails', response.data);
      commit('setPlaylistTracks', response.data);
    } catch (err) {
      console.error(err);
    }
  },
};

const mutations = {
  setPlaylistDetails: (state, payload) => {
    state.name = payload.name;
    state.images = payload.images;
  },
  setPlaylistTracks: (state, payload) => {
    state.tracks = payload.tracks;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

import api from '../../api';

const state = {};

const getters = {
  user: state => state,
};

const actions = {
  async getUser({ rootState, getters, commit }) {
    if (!getters.user.id) {
      try {
        const { token } = rootState.auth;
        const response = await api.currentUser(token);

        commit('setUser', response.data);
      } catch (err) {
        console.error(err);
      }
    }
  },
};

const mutations = {
  setUser: (state, payload) => {
    state.id = payload.id;
    state.email = payload.email;
    state.displayName = payload.display_name;
    state.followers = payload.followers.total;
    state.image = payload.images[0].url;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

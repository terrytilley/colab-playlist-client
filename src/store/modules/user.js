import api from '../../api';

const state = {};

const getters = {
  user: state => state,
};

const actions = {
  async getUser({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.currentUser(token);

    commit('updateUser', response.data);
  },
};

const mutations = {
  updateUser: (state, user) => {
    state.id = user.id;
    state.country = user.country;
    state.name = user.display_name;
    state.email = user.email;
    state.externalUrls = user.external_urls;
    state.followers = user.followers;
    state.href = user.href;
    state.images = user.images;
    state.uri = user.uri;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

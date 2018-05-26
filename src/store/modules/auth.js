const state = {
  token: window.localStorage.getItem('access_token') || null,
};

const getters = {
  token: state => state.token,
  isAuthenticated: state => !!state.token,
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  mutations,
};

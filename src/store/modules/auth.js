const state = {
  token: window.localStorage.getItem('access_token'),
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

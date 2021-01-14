export default {
  state: {
    user: {},
  },
  actions: {
    login() {},
    register() {},
    forgot() {},
    logout() {},
    updateProfile() {},
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser;
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
};

export default {
  state: {
    theme: "light",
  },
  actions: {},
  mutations: {
    setTheme(state, newTheme) {
      state.theme = newTheme;
    },
  },
  getters: {
    getTheme: (state) => {
      return state.theme;
    },
  },
};

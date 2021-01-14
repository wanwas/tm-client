export default {
  state: {
    theme: "dark",
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

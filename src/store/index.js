import Vue from "vue";
import Vuex from "vuex";

import user from "@/store/modules/user";
import theme from "@/store/modules/theme";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    theme,
    user,
  },
});

export default store;

import Vue from "vue";
import Vuex from "vuex";

import user from "@/store/modules/user";
import theme from "@/store/modules/theme";
import tasks from "@/store/modules/tasks";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    theme,
    user,
    tasks,
  },
});

export default store;

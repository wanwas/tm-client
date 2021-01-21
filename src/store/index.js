import Vue from "vue";
import Vuex from "vuex";

import user from "@/store/modules/user";
import theme from "@/store/modules/theme";
import tasks from "@/store/modules/tasks";
import subtasks from "@/store/modules/subtasks";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    theme,
    user,
    tasks,
    subtasks,
  },
});

export default store;

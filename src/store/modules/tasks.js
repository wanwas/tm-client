export default {
  state: {
    tasks: [],
  },
  actions: {
    createTask(ctx, newTask) {
      ctx.commit("addTask", newTask);
      localStorage.setItem("state", JSON.stringify(this.state));
      console.log(ctx.state.theme);
    },
    switchStatus(ctx, id) {
      ctx.commit("setStatus", id);
      localStorage.setItem("state", JSON.stringify(this.state));
    },
    updateTask(ctx, newTask) {
      ctx.commit("setTask", newTask);
      localStorage.setItem("state", JSON.stringify(this.state));
    },
    deleteTask(ctx, id) {
      ctx.commit("removeTask", id);
      localStorage.setItem("state", JSON.stringify(this.state));
    },
    createSubtask(ctx, obj) {
      ctx.commit("addSubtask", obj);
      localStorage.setItem("state", JSON.stringify(this.state));
    },
    deleteSubtask(ctx, obj) {
      ctx.commit("removeSubtask", obj);
      localStorage.setItem("state", JSON.stringify(this.state));
    },
    readySubtask(ctx, obj) {
      ctx.commit("setSubtaskStatus", obj);
      localStorage.setItem("state", JSON.stringify(this.state));
    },
  },
  mutations: {
    addTask(state, newTask) {
      state.tasks.unshift({ ...newTask, id: state.tasks.length + 1 });
    },
    removeTask(state, id) {
      let index;
      state.tasks.find((el, idx) => {
        if (el.id === id) index = idx;
      });
      state.tasks.splice(index, 1);
    },
    addSubtask(state, obj) {
      state.tasks.map((el) => {
        if (el.id === obj.idTask) {
          el.subtasks.push(obj.subtask);
        }
      });
    },
    setSubtaskStatus(state, obj) {
      state.tasks.map((el) => {
        if (el.id === obj.idTask) {
          el.subtasks.map((sub) => {
            if (sub.id === obj.idSubtask) sub.completed = !sub.completed;
          });
        }
      });
    },
    removeSubtask(state, obj) {
      state.tasks.map((el) => {
        if (el.id === obj.idTask) {
          let index;
          el.subtasks.find((sub, idx) => {
            if (sub.id === obj.idSubtask) index = idx;
          });
          el.subtasks.splice(index, 1);
        }
      });
    },
    setTask(state, newTask) {
      state.tasks.map((el) => {
        if (el.id === newTask.id) {
          el.task = newTask.task;
          el.description = newTask.description;
        }
      });
    },
    setStatus(state, id) {
      state.tasks.map((el) => {
        if (el.id == id) el.completed = !el.completed;
      });
    },
  },
  getters: {
    getTasks: (state) => {
      return state.tasks;
    },
  },
};

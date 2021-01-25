export default {
  state: {
    tasks: [
      {
        completed: false,
        task: "Just do it",
        description: "типо хоть чет сделай ну давай ты сможешь",
        id: 1,
        subtasks: [
          {
            id: 12,
            subtask: "asdsa sad asd asad asd",
            completed: false,
          },
          {
            id: 22,
            subtask: "ASD asdasad asd asad asd",
            completed: false,
          },
          {
            id: 32,
            subtask: "ASDas ASDSAD asad asd",
            completed: true,
          },
        ],
      },
      {
        completed: false,
        task: "sdfsadf",
        description: "asdfsdafdsa",
        id: 2,
        subtasks: [],
      },
      {
        completed: false,
        task: "Just do it",
        description: "create tasks list in predoplom project pls",
        id: 3,
        subtasks: [],
      },
      {
        completed: true,
        task: "ASdasdsadad",
        description: "sdgdsgsdg dssdd ssd sdf sdf ",
        id: 4,
        subtasks: [],
      },
      {
        completed: true,
        task: "Just asdasdasd it",
        description: "creatassdae tasks list in predoplom project pls",
        id: 5,
        subtasks: [],
      },
    ],
  },
  actions: {
    createTask(ctx, newTask) {
      ctx.commit("addTask", newTask);
    },
    switchStatus(ctx, id) {
      ctx.commit("setStatus", id);
    },
    updateTask(ctx, newTask) {
      ctx.commit("setTask", newTask);
    },
    deleteTask(ctx, id) {
      ctx.commit("removeTask", id);
    },
    createSubtask(ctx, obj) {
      ctx.commit("addSubtask", obj);
    },
    deleteSubtask(ctx, obj) {
      ctx.commit("removeSubtask", obj);
    },
    readySubtask(ctx, obj) {
      ctx.commit("setSubtaskStatus", obj);
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

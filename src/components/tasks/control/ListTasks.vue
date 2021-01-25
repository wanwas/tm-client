<template>
  <div class="list">
    <div class="list-tasks">
      <div class="task-add"></div>
      <transition-group
        name="list-complete"
        v-if="tasks.length !== 0 || tasks == undefined"
        tag="ul"
      >
        <TaskItem
          tag="li"
          v-for="item in tasksUnready"
          :item="item"
          :key="item.id"
          @show-task="showTask"
        />

        <div tag="li" key="'uniqueSpan'" class="line"><div></div></div>

        <TaskItem
          tag="li"
          v-for="item in tasksReady"
          :item="item"
          :key="item.id"
        />
      </transition-group>
      <div v-else class="list-clear">
        Ваш список задач пуст...
        <img src="https://img.icons8.com/ios/50/000000/empty-box.png" />
      </div>
    </div>
    <transition name="slide-fade">
      <div class="active-task" v-if="selectedTask != null">
        <ActiveTask @close-task="closeTask" :item="selectedTask" />
      </div>
    </transition>
    <div class="list-sidebar"><CreateTask /></div>
  </div>
</template>
<script>
import CreateTask from "@/components/tasks/control/CreateTask";
import TaskItem from "@/components/tasks/control/TaskItem";
import ActiveTask from "@/components/tasks/control/ActiveTask";
import { mapGetters } from "vuex";

export default {
  components: {
    CreateTask,
    TaskItem,
    ActiveTask,
  },
  data() {
    return {
      selectedTask: null,
    };
  },
  methods: {
    showTask(id) {
      this.selectedTask = this.tasks.find((el) => el.id === id);
    },
    closeTask() {
      this.selectedTask = null;
    },
  },
  computed: {
    ...mapGetters({
      tasks: "getTasks",
    }),
    tasksReady() {
      return this.tasks.filter((el) => el.completed == true);
    },
    tasksUnready() {
      return this.tasks.filter((el) => el.completed == false);
    },
  },
};
</script>
<style lang="scss" scoped>
.active-task {
  width: 500px;
  box-shadow: 0px 0px 2px var(--shadow);
}
.list-tasks {
  width: 100%;
  box-shadow: 0px 0px 2px var(--shadow);
}
.line {
  margin: 10px;
  box-shadow: 0px 0px 3px var(--shadow);
  div {
    width: 100%;
    height: 1px;
    background: var(--shadow);
  }
}
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.list-clear {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

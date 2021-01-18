<template>
  <div class="tasks">
    <div class="tasks-content">
      <TaskCreate />
      <TaskList />
    </div>
  </div>
</template>
<script>
import TaskCreate from '@/components/main/tasks/TaskCreate';
import TaskList from '@/components/main/tasks/TaskList';
export default {
    components: {
        TaskCreate,
        TaskList
    }
}
</script>
<style lang="scss" scoped>
.tasks {
  background: var(--bg-color);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.tasks-content {
  width: 1000px;
  height: 100%;
  background: var(--darken);
  box-shadow: 0px 0px 3px var(--shadow);
}
</style>

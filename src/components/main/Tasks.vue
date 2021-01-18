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
  padding: 10px;
}
.tasks-content {
  width: 1000px;
  height: 100%;
  overflow-y: scroll;
  background: var(--darken);
  box-shadow: 0px 0px 3px var(--shadow);
}
.tasks-content::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: var(--bg-color);
}

.tasks-content::-webkit-scrollbar
{
	width: 8px;
	background-color: var(--bg-color);
}

.tasks-content::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px var(--shadow);
	background-color: var(--primary);
}
</style>

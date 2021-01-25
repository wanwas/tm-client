<template>
  <div class="tasks-list">
    <div class="list-header">
      <h3>Tasks</h3>
      <div class="sort">
        <div class="sort-logo">
          <i class="arrow up"></i>
          <i class="arrow down"></i>
        </div>
        <h4>Сортировать</h4>
      </div>
    </div>
    <div class="list-content">
      <ListTasks />
    </div>
  </div>
</template>
<script>
import ListTasks from "@/components/tasks/control/ListTasks";
export default {
  components: {
    ListTasks,
  },
};
</script>
<style lang="scss" scoped>
.list-content {
  display: flex;
  height: calc(100vh - 33px - 60px);
}
.tasks-list {
  height: 100%;
}
.list-header {
  width: calc(100vw - 60px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--darken);
  padding: 5px 15px;
  h3 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    cursor: default;
  }
  .sort {
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
    }
    h4 {
      font-weight: 200;
    }
    &:hover {
      h4 {
        color: var(--primary);
      }
      .sort-logo {
        i {
          border: solid var(--primary);
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
        }
      }
    }
    .sort-logo {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      i {
        border: solid var(--font);
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
      }
      .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }

      .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    }
  }
  border-bottom: 1px solid var(--shadow);
}
</style>

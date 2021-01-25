<template>
  <div class="subtasks-list">
    <SubtaskItem
      v-for="item in unreadySubtasks"
      :key="item.id"
      :item="item"
      class="list-ready"
      @ready-subtask="readySubtask"
      @delete-subtask="deleteSubtask"
    >
    </SubtaskItem>
    <SubtaskItem
      v-for="item in readySubtasks"
      :key="item.id"
      :item="item"
      class="list-ready"
      @ready-subtask="readySubtask"
      @delete-subtask="deleteSubtask"
    >
    </SubtaskItem>
  </div>
</template>
<script>
import SubtaskItem from "@/components/tasks/control/SubtaskItem";
export default {
  props: ["item"],
  components: {
    SubtaskItem,
  },
  computed: {
    readySubtasks() {
      return this.item.filter((el) => el.completed == true);
    },
    unreadySubtasks() {
      return this.item.filter((el) => el.completed == false);
    },
  },
  methods: {
    readySubtask(id) {
      this.$emit("ready-subtask", id);
    },
    deleteSubtask(id) {
      this.$emit("delete-subtask", id);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.list-status {
  color: var(--border);
}
</style>

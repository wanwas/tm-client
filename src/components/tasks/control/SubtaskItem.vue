<template>
  <div class="subtask-item" :class="{ ready: item.completed == true }">
    <div class="item-complete">
      <div class="checkbox">
        <input
          @change="switchSubtaskStatus(item.id)"
          class="custom-checkbox"
          :checked="item.completed"
          type="checkbox"
          :id="item.id"
          :name="item.id"
        />
        <label :for="item.id"></label>
      </div>
    </div>
    <div class="item-content" @click="$emit('show-task', item.id)">
      <div class="item-label">{{ item.subtask }}</div>
    </div>
    <div
      class="delete-task"
      @click="deleteSubtask(item.id)"
      v-if="item.completed == true"
    >
      <img src="https://img.icons8.com/metro/52/fa314a/delete.png" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  methods: {
    switchSubtaskStatus(id) {
      this.$emit("ready-subtask", id);
    },
    deleteSubtask(id) {
      this.$emit("delete-subtask", id);
    },
  },
};
</script>
<style lang="scss" scoped>
.subtask-item {
  margin-bottom: 5px;
  width: max-content;
  display: flex;
  align-items: center;
  &:hover {
    background: var(--primary-light);
  }
  //box-shadow: 0px 0px 2px var(--shadow);
}
.delete-task {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  &:active {
    img {
      transform: scale(0.95);
    }
  }
  img {
    width: 17px;
    height: 17px;
  }
}
.item.ready {
  background: rgba(0, 0, 0, 0.082);
  .item-label {
    text-decoration: line-through;
  }
}
.item-complete {
  width: 25px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-content {
  width: 100%;
  cursor: pointer;
  .item-label {
    font-weight: 400;
    font-size: 14px;
  }
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  cursor: pointer;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid var(--border);
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: var(--primary-light);
}

.custom-checkbox:not(:disabled):active + label::before {
  background-color: var(--primary-light);
  border-color: var(--primary-light);
}

.custom-checkbox:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-checkbox:focus:not(:checked) + label::before {
  border-color: var(--primary-light);
}

.custom-checkbox:checked + label::before {
  border-color: var(--primary);
  background-color: var(--primary);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox:disabled + label::before {
  background-color: #e9ecef;
}
</style>

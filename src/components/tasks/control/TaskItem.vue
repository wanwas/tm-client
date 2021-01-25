<template>
  <div class="item" :class="{ ready: item.completed }">
    <div class="item-complete">
      <div class="checkbox">
        <input
          @change="switchStatus(item.id)"
          class="custom-checkbox"
          :checked="item.completed"
          type="checkbox"
          :id="item.id"
          :name="item.id"
        />
        <label :for="item.id"></label>
      </div>
    </div>
    <div class="item-content">
      <div class="item-label" @click="$emit('show-task', item.id)">
        {{ item.task }}
      </div>
      <div class="item-desc" @click="$emit('show-task', item.id)">
        {{ item.description }}
      </div>
      <div class="item-subtasks">
        <div class="list-status" v-if="item.subtasks.length > 0">
          {{ readySubtasks.length }} из {{ item.subtasks.length }}
        </div>
        <SubtasksList
          :item="item.subtasks"
          @ready-subtask="switchSubtaskStatus"
          @delete-subtask="deleteSubtask"
        />
      </div>
    </div>
    <div class="delete-task" @click="deleteTask(item.id)" v-if="item.completed">
      <img src="https://img.icons8.com/metro/52/fa314a/delete.png" />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import SubtasksList from "@/components/tasks/control/SubtasksList";

export default {
  props: ["item"],
  components: { SubtasksList },
  computed: {
    readySubtasks() {
      return this.item.subtasks.filter((el) => {
        if (el.completed == true) return el;
      });
    },
    unreadySubtasks() {
      return this.item.subtasks.filter((el) => {
        if (el.completed == false) return el;
      });
    },
  },
  methods: {
    ...mapActions({
      readyTask: "switchStatus",
      removeTask: "deleteTask",
      readySubtask: "readySubtask",
      removeSubtask: "deleteSubtask",
    }),
    async switchStatus(id) {
      try {
        await this.readyTask(id);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(id) {
      try {
        await this.removeTask(id);
      } catch (error) {
        console.log(error);
      }
    },
    async switchSubtaskStatus(id) {
      try {
        await this.readySubtask({ idSubtask: id, idTask: this.item.id });
        if (this.unreadySubtasks.length == 0) {
          await this.switchStatus(this.item.id);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteSubtask(id) {
      try {
        await this.removeSubtask({ idSubtask: id, idTask: this.item.id });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.list-status {
  color: var(--border);
  margin-top: 5px;
  padding-left: 1.25rem;
}
.item {
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  padding: 5px 0px;
  &:hover {
    background: var(--primary-light);
  }
  //box-shadow: 0px 0px 2px var(--shadow);
}
.delete-task {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
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
    width: 25px;
    height: 25px;
  }
}
.item.ready {
  background: rgba(0, 0, 0, 0.082);
  .item-label {
    text-decoration: line-through;
  }
}
.item-complete {
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.item-content {
  width: 100%;
  cursor: pointer;
  .item-label {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 20px;
  }
  .item-desc {
    font-weight: 300;
    font-size: 16 px;
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
  width: 1.25em;
  height: 1.25em;
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

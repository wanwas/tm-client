<template>
  <div class="active-task">
    <div class="active-task-content">
      <div class="active-label">
        <div class="field">
          <label for="title">Название задачи</label>
          <input
            type="text"
            name="title"
            :value="item.task"
            ref="title"
            @input="changeTitle"
            maxlength="80"
          />
        </div>
      </div>
      <div class="active-desc">
        <div class="ta-field">
          <textarea
            maxlength="200"
            ref="desc"
            :value="item.description"
            @input="switchCount"
            placeholder="Введите описание"
          ></textarea>
        </div>
      </div>
      <div class="active-subtasks">
        <div class="subtask-list">
          <div
            v-for="(item, index) in newTask.subtasks"
            :key="item.id"
            class="subtask-item"
          >
            <div class="subtask-title">
              <label for="subtask">{{ ++index }}.</label>
              <input type="text" name="subtask" :value="item.subtask" />
              <div class="subtask-remove" @click="delSubtask(item.id)">
                <img src="https://img.icons8.com/metro/52/fa314a/delete.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="subtask-title" v-if="isAddSubtaskOpen">
          <label for="subtaskAdd">{{ newTask.subtasks.length + 1 }}.</label>
          <input type="text" name="subtaskAdd" ref="subtask" />
          <div class="subtask-ready" @click="addSubtask">
            <img src="https://img.icons8.com/ios/50/26e07f/checked--v1.png" />
          </div>
        </div>
        <div class="subtusk-control">
          <div
            @click="openSubtaskAdd"
            :class="{ open: isAddSubtaskOpen }"
            class="subtask-add"
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
          </div>
        </div>
        <FormError>{{ errorSubtask }}</FormError>
      </div>
    </div>
    <submit-btn @click.native="changeTask" :label="'Готово'"></submit-btn>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import SubmitBtn from "@/components/buttons/SubmitBtn.vue";
import FormError from "@/components/errors/FormError.vue";

export default {
  components: { SubmitBtn, FormError },
  props: ["item"],
  data() {
    return {
      newTask: {
        description: "",
        task: "",
        subtasks: [],
      },
      isAddSubtaskOpen: false,
      count: 0,
      errorSubtask: "",
    };
  },
  methods: {
    ...mapActions(["updateTask", "createSubtask", "deleteSubtask"]),
    switchCount() {
      this.newTask.description = this.$refs.desc.value;
    },
    changeTitle() {
      this.newTask.task = this.$refs.title.value;
    },
    async changeTask() {
      await this.updateTask({ ...this.newTask, id: this.item.id });
      this.$emit("close-task");
    },
    openSubtaskAdd() {
      this.isAddSubtaskOpen = !this.isAddSubtaskOpen;
      this.errorSubtask = "";
    },
    async addSubtask() {
      try {
        if (!this.$refs.subtask.value) {
          this.errorSubtask = "Вы ничего не ввели";
          return false;
        }
        const subtask = {
          id: this.newTask.subtasks.length + 1 + 's',
          subtask: this.$refs.subtask.value,
          completed: false,
        };
        await this.createSubtask({ subtask, idTask: this.item.id });
        this.isAddSubtaskOpen = !this.isAddSubtaskOpen;
        this.errorSubtask = "";
      } catch (error) {
        this.errorSubtask = error;
      }
    },
    async delSubtask(id) {
      try {
        await this.deleteSubtask({ idSubtask: id, idTask: this.item.id });
        this.errorSubtask = "";
      } catch (error) {
        this.errorSubtask = error;
      }
    },
  },
  updated() {
    this.newTask.task = this.item.task;
    this.newTask.description = this.item.description;
    this.newTask.subtasks = this.item.subtasks;
  },
  mounted() {
    this.newTask.task = this.item.task;
    this.newTask.description = this.item.description;
    this.newTask.subtasks = this.item.subtasks;
  },
};
</script>
<style lang="scss" scoped>
.subtask-title {
  margin: 10px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  input {
    background: var(--bg-color);
    color: var(--font);
    border: none;
    outline: none;
    font-size: 15px;
    padding: 3px 10px;
    width: 100%;
    border-bottom: 2px solid var(--border);
  }
}
.subtask-remove,
.subtask-ready {
  width: 20px;
  height: 100%;
  img {
    width: 17px;
    height: 17px;
  }
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
}
.active-task {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.field {
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    padding: 6px;
    border: 2px solid var(--border);
    border-radius: 4px;
    transition: 0.4s;
    outline: none;
    font-size: 18px;
    background: var(--bg-color);
    color: var(--font);
    &:hover {
      border: 2px solid var(--border);
    }

    &:focus {
      border: 2px solid var(--primary);
    }
  }
}
.ta-field {
  position: relative;
  display: inline;

  textarea {
    font-size: 16px;
    margin: 10px 0px;
    width: 100%;
    min-height: 100px;
    padding: 6px;
    resize: none;
    border: 2px solid var(--border);
    border-radius: 4px;
    transition: 0.4s;
    outline: none;
    background: var(--bg-color);
    color: var(--font);
  }

  textarea:hover {
    border: 2px solid var(--border);
  }

  textarea:focus {
    border: 2px solid var(--primary);
  }

  label {
    position: absolute;
    bottom: 15px;
    right: 12px;
    font-size: 15px;
    color: var(--border);
  }
  .fill {
    color: var(--primary);
  }
}
.subtusk-control {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
}
.subtask-add {
  width: 30px;
  height: 30px;
  margin: 3px;
  border: 2px solid var(--border);
  border-radius: 50%;
  text-align: center;
  position: relative;
  transition: all 0.3s;
  // box-shadow: 0px 0px 3px var(--shadow);

  &:hover {
    transform: scale(1.05);
    border-color: var(--primary);
  }
  &:active {
    transform: scale(0.96);
  }
  .bar1,
  .bar2 {
    height: 2px;
    width: 16px;
    background: var(--border);
    position: absolute;
    left: 50%;
    margin-left: -8px;
    top: 50%;
    margin-top: -1px;
    transition: all 0.5s;
  }
  .bar2 {
    transform: rotate(90deg);
  }
}
.open {
  .bar2 {
    transform: rotate(0deg);
  }
}
</style>

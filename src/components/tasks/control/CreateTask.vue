<template>
  <div class="create-task">
    <transition name="slide-fade">
      <form v-if="isOpen" @submit.prevent="onSubmit">
        <h2>Создание задачи</h2>
        <input
          type="text"
          v-model="newTask.task"
          placeholder="Введите заголовок"
          maxlength="80"
        />
        <div class="ta-field">
          <textarea
            ref="desc"
            @input="switchCount"
            placeholder="Введите описание"
            maxlength="200"
          ></textarea>
          <label :class="{ fill: count === 200 }">{{ count }}/200</label>
        </div>
        <SubmitBtn :label="'Создать задачу'" />
        <FormError>{{ errorMsg }}</FormError>
      </form>
    </transition>
    <div class="open-create-form">
      <div @click="openForm" :class="{ open: isOpen }" class="form-open-btn">
        <div class="bar1"></div>
        <div class="bar2"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import SubmitBtn from "@/components/buttons/SubmitBtn";
import FormError from "@/components/errors/FormError.vue";
export default {
  components: {
    SubmitBtn,
    FormError,
  },
  data() {
    return {
      newTask: {
        task: "",
        description: "",
      },
      errorMsg: "",
      count: 0,
      isOpen: false,
    };
  },
  methods: {
    ...mapActions({
      createTask: "createTask", //also supports payload `this.nameOfAction(amount)`
    }),
    async onSubmit() {
      try {
        if (this.newTask.task == "") {
          throw new Error("Вы не ввели название задачи");
        }
        await this.createTask({
          ...this.newTask,
          completed: false,
          subtasks: [],
        });
        this.errorMsg = "";
        this.newTask.task = "";
        this.newTask.description = "";
        this.$refs.desc.value = "";
      } catch (error) {
        this.errorMsg = error;
      }
    },
    switchCount() {
      if (this.count < 200) {
        this.count = this.$refs.desc.value.length;
        this.newTask.description = this.$refs.desc.value;
      } else {
        this.$refs.desc.value = this.newTask.description;
      }
    },
    openForm() {
      this.errorMsg = "";
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
.create-task {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 10px;
  }

  form {
    width: 600px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
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
    .ta-field {
      position: relative;
      display: inline;

      textarea {
        font-size: 16px;
        margin: 10px 0px;
        width: 100%;
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
  }
}
.form-open-btn {
  width: 40px;
  height: 40px;
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
    width: 22px;
    background: var(--border);
    position: absolute;
    left: 50%;
    margin-left: -11px;
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

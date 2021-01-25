<template>
  <div class="wrapper">
    <div class="container">
      <div class="container-head">
        <h1>task<br />Manager</h1>
        <img
          src="https://img.icons8.com/fluent/48/000000/microsoft-todo-2019.png"
        />
      </div>
      <div class="container-main">
        <p>
          Task Manager поможет Вам распланировать свое время правильно и не
          забыть даже про самые маленькие но важные задачи.
        </p>
        <router-link tag="button" class="link" :to="link"
          >Начать использовать</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUser"]),
  },
  data() {
    return {
      link: "/auth",
    };
  },
  mounted() {
    if (this.getUser.token) this.link = "/main";
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background: var(--bg-img);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}
.wrapper:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
}
.container {
  position: relative;
  z-index: 3;
}
.container-head {
  text-align: center;
  font-size: 30px;
  padding: 20px;
}
h1 {
  color: var(--font-inv);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 200;
}
p {
  color: var(--font-inv);
  letter-spacing: 1px;
  font-weight: 200;
  font-size: 18aspx;
  text-align: center;
  width: 400px;
}
.container-main {
  width: 400px;
  text-align: center;
}
@media screen and (max-width: 400px) {
  .container-main {
    width: 100%;
  }
  p {
    width: 100%;
  }
}
.link {
  margin-top: 20px;
  padding: 10px 15px;
  background: var(--primary);
  border: none;
  color: var(--font-inv);
  text-transform: uppercase;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>

<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-logo">
      <!-- <div class="logo-img">
        <img src="https://img.icons8.com/fluent/48/000000/microsoft-todo-2019.png">
      </div> -->
      <div class="menu-item" title="Меню">
        <img
          src="https://img.icons8.com/carbon-copy/100/ffffff/squared-menu.png"
        />
      </div>
      <div class="logo-text"><h2>Task Manager</h2></div>
    </router-link>
    <div class="header-menu">
      <router-link
        tag="a"
        to="/main/tasks/"
        class="menu-item"
        title="список задач"
      >
        <img src="https://img.icons8.com/ios/50/ffffff/checklist--v1.png" />
      </router-link>
      <router-link
        class="menu-item"
        title="профиль"
        tag="a"
        to="/main/profile/"
      >
        <img
          src="https://img.icons8.com/ios/50/ffffff/administrator-male--v1.png"
        />
      </router-link>
      <router-link
        tag="a"
        to="/main/settings/"
        class="menu-item"
        title="настройки"
      >
        <img src="https://img.icons8.com/ios/50/ffffff/settings.png" />
      </router-link>
      <div class="menu-item" @click="logout" title="выйти">
        <img src="https://img.icons8.com/ios/50/ffffff/exit.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: var(--primary);
  height: 60px;
  cursor: default;
}
.header * {
  color: var(--font-inv);
}
.header-logo {
  display: flex;
  align-items: center;
  margin: 0px 5px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .menu-item {
    img {
      width: 50px;
      height: 50px;
    }
    // &:hover {
    //   background: var(--lighten);
    // }
  }
}
.logo-text {
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 5px;
}
.header-menu {
  margin: 0px 5px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: transform 0.2s;
    img {
      width: 25px;
      height: 25px;
    }
    &:hover {
      background: var(--lighten);
    }
    &:active {
      border: 1px solid var(--font-inv);
    }
  }
  .router-link-active {
    background: var(--lighten);
  }
}
</style>

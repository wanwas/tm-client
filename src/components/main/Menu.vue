<template>
  <div class="header-menu">
    <router-link tag="button" class="menu-item" to="/main/tasks" title="tasks">
      <img src="https://img.icons8.com/metro/26/ffffff/list.png" />
    </router-link>
    <router-link tag="button" class="menu-item" to="/main/profile" title="profile">
      <img src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"/>
    </router-link>
    <button
      class="menu-item" @click="$emit('logout')" title="logout">
      <img src="https://img.icons8.com/metro/26/ffffff/logout-rounded.png" />
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header-menu {
  display: flex;
  width: max-content;
  height: 100%;
  padding-right: 10px;
}
.menu-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  outline: none;
  background: none;
  border: none;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--font-color-inverse);
  img {
    width: 30px;
    height: 30px;
  }
  .label {
    color: var(--font-color-inverse);
  }
  &:hover {
    background: var(--darken);
  }
  &:active {
    p {
      transform: scale(0.95);
    }
  }
}
</style>

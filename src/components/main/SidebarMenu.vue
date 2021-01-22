<template>
  <div class="sidebar">
    <div class="sidebar-menu">
      <router-link
        tag="div"
        v-for="(item, index) in menu"
        :key="index"
        class="menu-item"
        :title="item.title"
        :to="item.to"
      >
        <img :src="item.src" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menu: Array,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  background: var(--primary);
  width: 60px;
  height: calc(100vh - 60px);
  .sidebar-menu {
    background: var(--darken);
    height: 100%;
    .router-link-active {
      background: var(--darken);
    }
    .menu-item {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 30px;
        height: 30px;
      }
      &:hover {
        background: var(--darken);
      }
      &:active {
        background: var(--darken);
      }
    }
  }
}
</style>

<template>
  <div class="settings">
    <div class="content-sidebar">
      <SidebarMenu
        :menu="[
          {
            title: 'основные',
            src: 'https://img.icons8.com/ios/50/ffffff/macbook-settings.png',
            to: '/main/settings/major',
          },
          {
            title: 'интерфейс',
            src: 'https://img.icons8.com/ios/50/ffffff/brightness-settings.png',
            to: '/main/settings/theme',
          },
        ]"
      />
    </div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import SidebarMenu from "@/components/main/SidebarMenu";
export default {
  components: {
    SidebarMenu,
  },
};
</script>
<style lang="scss" scoped>
.settings {
  width: 100%;
  height: 100%;
  display: flex;
}
.content-sidebar {
  width: 60px;
}
.content-container {
  width: 100%;
  height: 100%;
  background: var(--bg-color);
}
</style>

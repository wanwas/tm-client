<template>
  <div class="tasks">
    <div class="content-sidebar">
      <SidebarMenu
        :menu="[
          {
            title: 'Все задачи',
            src: 'https://img.icons8.com/ios/50/ffffff/exterior.png',
            to: '/main/tasks/all',
          },
          {
            title: 'Сегодня',
            src: 'https://img.icons8.com/ios/50/ffffff/sun.png',
            to: '/main/tasks/today',
          },
          {
            title: 'Календарь',
            src: 'https://img.icons8.com/ios/50/ffffff/calendar--v1.png',
            to: '/main/tasks/calendar',
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
.tasks {
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

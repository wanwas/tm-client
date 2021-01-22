<template>
  <div class="profile">
    <div class="content-sidebar">
      <SidebarMenu
        :menu="[
          {
            title: 'информация',
            src: 'https://img.icons8.com/ios/50/ffffff/about-us-male.png',
            to: '/main/profile/info',
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
.profile {
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

<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <Header />
    </div>
    <div class="wrapper-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "@/components/main/Header";
export default {
  components: {
    Header,
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.wrapper-content {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
}
</style>

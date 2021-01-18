<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "@/components/main/Header";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
  },
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
};
</script>
<style lang="scss" scoped>
  .wrapper-content {
    width: 100vw;
    height: calc(100vh - 100px);
    background: var(--bg-color);
  }
</style>

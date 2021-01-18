<template>
  <div class="header">
    <Logo />
    <Menu @logout="logout" />
  </div>
</template>
<script>
import Logo from "@/components/main/Logo";
import Menu from "@/components/main/Menu";
import { mapActions } from "vuex";

export default {
  components: {
    Logo,
    Menu,
  },
  methods: {
    ...mapActions({
      logout: "logout",
    }),
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 100px;
  width: 100vw;
  background: var(--primary);
  display: flex;
  justify-content: space-between;
}
</style>

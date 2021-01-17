<template>
  <div id="app" :class="currentTheme">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      currentTheme: "getTheme",
    }),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/themes.scss";
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: var(--font-color);
}
</style>

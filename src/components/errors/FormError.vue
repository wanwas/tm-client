<template>
  <div class="form-error">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.form-error {
  min-height: 20px;
  color: var(--error);
  width: 100%;
  text-align: center;
  margin: 20px 0px;
}
</style>

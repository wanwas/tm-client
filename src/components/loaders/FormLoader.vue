<template>
  <div class="donut"></div>
</template>
<style lang="scss" scoped>
.donut {
  width: 3rem;
  height: 3rem; 
  border-radius: 50%;
  margin-bottom: 15px;
  margin-top: 2px;
  border: 0.3rem solid var(--hover);
  border-top-color: var(--primary);
  animation: 1.5s spin infinite linear;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

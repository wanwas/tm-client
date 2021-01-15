<template>
  <div class="content">
    <component
      class="component"
      :is="currentForm"
      @switch-form="switchForm"
    ></component>
  </div>
</template>
<script>
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Forgot from "@/components/auth/Forgot";
import Reset from "@/components/auth/Reset";

export default {
  name: "Auth",
  components: {
    Login,
    Register,
    Forgot,
    Reset,
  },
  data() {
    return {
      currentForm: "login",
    };
  },
  methods: {
    switchForm(newForm) {
      this.currentForm = newForm;
    },
  },
};
</script>
<style lang="scss">
.content {
  width: 100vw;
  height: 100vh;
  background: var(--bg-img);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.component {
  position: relative;
  z-index: 3;
  box-shadow: 0px 0px 3px var(--shadow);
  padding: 30px;
  background: var(--bg-color);
  width: 500px;
  transition: all 0.5s;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
@media screen and (max-width: 500px) {
  .component {
    width: 100vw;
    height: 100vh;
  }
}
.main {
  .foot {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    color: car(--font-color);
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.head {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
.btn-link {
  cursor: pointer;
  color: var(--font-color);
  text-transform: uppercase;
  padding: 10px;
  text-align: center;
  outline: none;
  background-position: center;
  border-radius: 3px;
  transition: background 0.8s;
  &:hover {
    color: var(--primary);
  }
  &:active {
    background-color: var(--hover);
    background-size: 100%;
    transition: background 0s;
  }
}
</style>

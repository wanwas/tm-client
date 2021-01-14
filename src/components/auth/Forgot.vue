<template>
  <div class="main">
    <div class="head">
      <img
        src="https://img.icons8.com/ios/50/000000/forgot-password.png"
        class="logo"
      />
    </div>
    <h2>forgot</h2>
    <form action.preven="onSubmit">
      <TextInput />
      <SubmitBtn />
    </form>
    <div class="foot">
      <a @click="$emit('switch-form', 'login')" class="btn-link"
        >Back to login</a
      >
    </div>
  </div>
</template>
<script>
import TextInput from "@/components/inputs/TextInput";
import SubmitBtn from "@/components/buttons/SubmitBtn";

export default {
  name: "Login",
  components: {
    TextInput,
    SubmitBtn,
  },
};
</script>
<style lang="scss" scoped></style>

<template>
  <div class="main">
    <div class="head">
      <img
        src="https://img.icons8.com/ios/50/000000/forgot-password.png"
        class="logo"
      />
    </div>
    <h2>forgot</h2>
    <form @submit.prevent="onSubmit">
      <TextInput
        :value="email"
        :required="true"
        :label="'Email'"
        :error="emailErr"
        @handleChange="getEmail"
        :success="emailSuc"
      />
      <FormLoader v-if="loading" />
      <SubmitBtn v-else :label="'Отправить письмо'" :disabled="!formReady" />
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
  data() {
    return {
      email: "",
      emailErr: "",
      emailSuc: false,
      formReady: false,
      loading: false,
    };
  },
  methods: {
    getEmail(val) {
      this.email = val;
      if (this.email === "") {
        this.emailErr = "Это обязательное поле";
        this.emailSuc = false;
      } else {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reg.test(this.email)) {
          this.emailErr = "Неверное значение email";
          this.emailSuc = false;
        } else {
          this.emailErr = "";
          this.emailSuc = true;
        }
      }
      this.checkFormReady();
    },
    checkFormReady() {
      if (this.emailSuc) {
        this.formReady = true;
      } else {
        this.formReady = false;
      }
    },
  },
  onSubmit() {
    this.loading = true;
    console.log(this.email);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped></style>

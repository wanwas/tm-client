<template>
  <div class="main">
    <div class="head">
      <img
        src="https://img.icons8.com/ios/50/000000/user--v1.png"
        class="logo"
      />
    </div>
    <h2>login</h2>
    <FormError>{{ errorMsg }}</FormError>
    <form @submit.prevent="onSubmit">
      <TextInput
        :value="email"
        :required="true"
        :label="'Email'"
        :error="emailErr"
        @handleChange="getEmail"
        :success="emailSuc"
      />
      <TextInput
        :value="password"
        :required="true"
        :label="'Пароль'"
        :type="'password'"
        :error="passwordErr"
        @handleChange="getPassword"
        :success="passwordSuc"
      />
      <FormLoader v-if="loading" />
      <SubmitBtn v-else :label="'Войти'" :disabled="!formReady" />
    </form>
    <div class="foot">
      <a @click="$emit('switch-form', 'forgot')" class="btn-link">Forgot</a>
      <a @click="$emit('switch-form', 'register')" class="btn-link"
        >Don't have account?</a
      >
    </div>
  </div>
</template>
<script>
import TextInput from "@/components/inputs/TextInput";
import SubmitBtn from "@/components/buttons/SubmitBtn";
import FormLoader from "@/components/loaders/FormLoader";
import FormError from "@/components/errors/FormError";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    TextInput,
    SubmitBtn,
    FormLoader,
    FormError,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordErr: "",
      emailErr: "",
      emailSuc: false,
      passwordSuc: false,
      formReady: false,
      loading: false,
      errorMsg: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
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
    getPassword(val) {
      this.password = val;
      if (this.password === "") {
        this.passwordErr = "Это обязательное поле";
        this.passwordSuc = false;
      } else {
        this.passwordErr = "";
        this.passwordSuc = true;
      }
      this.checkFormReady();
    },
    checkFormReady() {
      if (this.emailSuc && this.passwordSuc) {
        this.formReady = true;
      } else {
        this.formReady = false;
      }
    },
    async onSubmit() {
      this.loading = true;
      const user = {
        email: this.email,
        password: this.password,
      };
      await this.login(user)
        .then(() => {})
        .catch((err) => {
          this.email = "";
          this.password = "";
          this.emailSuc = false;
          this.passwordSuc = false;
          this.errorMsg = err;
        });
      this.loading = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>

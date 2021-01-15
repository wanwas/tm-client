<template>
  <div class="main">
    <div class="head">
      <img
        src="https://img.icons8.com/ios/50/000000/forgot-password.png"
        class="logo"
      />
    </div>
    <h2>forgot</h2>
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
import FormError from "@/components/errors/FormError";
import FormLoader from "@/components/loaders/FormLoader";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    TextInput,
    SubmitBtn,
    FormError,
    FormLoader,
  },
  data() {
    return {
      email: "",
      emailErr: "",
      emailSuc: false,
      formReady: false,
      loading: false,
      errorMsg: "",
    };
  },
  methods: {
    ...mapActions(["forgot"]),
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
    async onSubmit() {
      this.loading = true;
      await this.forgot(this.email)
        .then(() => {
          alert("Проверьте почту");
        })
        .catch((err) => {
          this.email = "";
          this.errorMsg = err;
        });
      this.loading = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>

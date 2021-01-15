<template>
  <div class="main">
    <div class="head">
      <img
        src="https://img.icons8.com/ios/50/000000/restore-page.png"
        class="logo"
      />
    </div>
    <h2>Reset</h2>
    <FormError>{{ errorMsg }}</FormError>
    <form @submit.prevent="onSubmit">
      <TextInput
        class="mf"
        :value="password"
        :required="true"
        :label="'Новый пароль'"
        :type="'password'"
        :error="passwordErr"
        @handleChange="getPassword"
        :success="passwordSuc"
      />
      <TextInput
        :value="repeatPassword"
        :required="true"
        :type="'password'"
        :label="'Повторите пароль'"
        :error="repeatPasswordErr"
        @handleChange="getRepeatPassword"
        :success="repeatPasswordSuc"
      />
      <FormLoader v-if="loading" />
      <SubmitBtn v-else :label="'Изменить пароль'" :disabled="!formReady" />
    </form>
  </div>
</template>
<script>
import TextInput from "@/components/inputs/TextInput";
import SubmitBtn from "@/components/buttons/SubmitBtn";
import FormError from "@/components/errors/FormError";
import FormLoader from "@/components/loaders/FormLoader";

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
      loading: false,
      password: "",
      repeatPassword: "",
      passwordErr: "",
      repeatPasswordErr: "",
      passwordSuc: false,
      repeatPasswordSuc: false,
      formReady: false,
      errorMsg: "",
    };
  },
  methods: {
    getPassword(val) {
      this.password = val;
      if (this.password === "") {
        this.passwordSuc = false;
        this.passwordErr = "Это обязательное поле";
      } else {
        if (this.password.length < 6) {
          this.passwordSuc = false;
          this.passwordErr = "Длинна пароля должна быть больше 6";
          if (this.password !== this.repeatPassword) {
            this.repeatPasswordSuc = false;
            this.repeatPasswordErr = "Пароли не совпадают";
          } else {
            this.repeatPasswordSuc = true;
            this.repeatPasswordErr = "";
          }
        } else {
          if (this.password !== this.repeatPassword) {
            this.passwordSuc = true;
            this.repeatPasswordSuc = false;
            this.passwordErr = "";
            this.repeatPasswordErr = "Пароли не совпадают";
          } else {
            this.passwordSuc = true;
            this.passwordErr = "";
            this.repeatPasswordSuc = true;
            this.repeatPasswordErr = "";
          }
        }
      }
      this.checkFormReady();
    },
    getRepeatPassword(val) {
      this.repeatPassword = val;
      if (this.repeatPassword === "") {
        this.repeatPasswordSuc = false;
        this.repeatPasswordErr = "Это обязательное поле";
      } else {
        if (this.password !== this.repeatPassword) {
          this.repeatPasswordSuc = false;
          this.repeatPasswordErr = "Пароли не совпадаю";
        } else {
          this.repeatPasswordSuc = true;
          this.repeatPasswordErr = "";
        }
      }
      this.checkFormReady();
    },
    checkFormReady() {
      if (this.passwordSuc && this.repeatPasswordSuc) {
        this.formReady = true;
      } else {
        this.formReady = false;
      }
    },
    async onSummit() {
      this.loading = true;
      await this.register(this.password)
        .then(() => {
          alert("Вы успешно изменили пароль, войдите");
          this.$emit("switch-form", "login");
        })
        .then((err) => {
          this.errorMsg = err;
        });
      this.loading = false;
    },
  },
};
</script>

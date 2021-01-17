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
    ...mapActions(["reset"]),
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
    async onSubmit() {
      this.loading = true;
      await this.reset({
        password: this.password,
        token: this.$route.params.token,
      })
        .then(() => {
          this.$emit("show-modal", {
            title: "Восстановление доступа",
            message:
              "Пароль успешно изменен, теперь Вам необходимо войти в свой аккаунта.",
          });
          this.$emit("switch-form", "login");
        })
        .then((err) => {
          this.password = "";
          this.repeatPassword = "";
          this.passwordSuc = false;
          this.repeatPasswordSuc = false;
          this.errorMsg = err;
        });
      this.loading = false;
    },
  },
};
</script>

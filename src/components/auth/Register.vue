<template>
  <div class="main">
    <div class="head"></div>
    <h2>Регистрация</h2>
    <FormError>{{ errorMsg }}</FormError>
    <form @submit.prevent="onSubmit">
      <div class="group-field">
        <TextInput
          class="mf"
          :value="name"
          :required="true"
          :label="'Имя'"
          :error="nameErr"
          @handleChange="getName"
          :success="nameSuc"
        />
        <TextInput
          :value="surname"
          :required="true"
          :label="'Фамилия'"
          :error="surnameErr"
          @handleChange="getSurname"
          :success="surnameSuc"
        />
      </div>
      <div class="group-field">
        <TextInput
          class="mf"
          :value="patronymic"
          :required="true"
          :label="'Отчество'"
          :error="patronymicErr"
          @handleChange="getPatronymic"
          :success="patronymicSuc"
        />
        <TextInput
          :value="status"
          :required="true"
          :label="'Должность'"
          :error="statusErr"
          @handleChange="getStatus"
          :success="statusSuc"
        />
      </div>
      <div class="group-field">
        <TextInput
          :value="email"
          :required="true"
          :label="'Email'"
          :error="emailErr"
          @handleChange="getEmail"
          :success="emailSuc"
        />
      </div>
      <div class="group-field">
        <TextInput
          class="mf"
          :value="password"
          :required="true"
          :label="'Пароль'"
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
      </div>
      <FormLoader v-if="loading" />
      <SubmitBtn v-else :label="'Регистрация'" :disabled="!formReady" />
    </form>
    <div class="foot">
      <a @click="$emit('switch-form', 'login')" class="btn-link">назад</a>
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
    FormError,
    FormLoader,
  },
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      repeatPassword: "",
      name: "",
      surname: "",
      patronymic: "",
      status: "",
      emailErr: "",
      passwordErr: "",
      repeatPasswordErr: "",
      nameErr: "",
      surnameErr: "",
      patronymicErr: "",
      statusErr: "",
      emailSuc: false,
      passwordSuc: false,
      repeatPasswordSuc: false,
      nameSuc: false,
      surnameSuc: false,
      patronymicSuc: false,
      statusSuc: false,
      formReady: false,
      errorMsg: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
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
    isValidStr(str) {
      return /[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?0-9]/g.test(str);
    },
    getName(val) {
      this.name = val;
      if (this.name === "") {
        this.nameErr = "Это обязательное поле";
        this.nameSuc = false;
      } else {
        if (this.isValidStr(this.name)) {
          this.nameErr = "Поле не должно содержать цифры или спецсимволы";
          this.nameSuc = false;
        } else {
          this.nameErr = "";
          this.nameSuc = true;
        }
      }
      this.checkFormReady();
    },
    getSurname(val) {
      this.surname = val;
      if (this.surname === "") {
        this.surnameErr = "Это обязательное поле";
        this.surnameSuc = false;
      } else {
        if (this.isValidStr(this.surname)) {
          this.surnameErr = "Поле не должно содержать цифры или спецсимволы";
          this.surnameSuc = false;
        } else {
          this.surnameErr = "";
          this.surnameSuc = true;
        }
      }
      this.checkFormReady();
    },
    getPatronymic(val) {
      this.patronymic = val;
      if (this.patronymic === "") {
        this.patronymicErr = "Это обязательное поле";
        this.patronymicSuc = false;
      } else {
        if (this.isValidStr(this.patronymic)) {
          this.patronymicErr = "Поле не должно содержать цифры или спецсимволы";
          this.patronymicSuc = false;
        } else {
          this.patronymicErr = "";
          this.patronymicSuc = true;
        }
      }
      this.checkFormReady();
    },
    getStatus(val) {
      this.status = val;
      if (this.status === "") {
        this.statusErr = "Это обязательное поле";
        this.statusSuc = false;
      } else {
        if (this.isValidStr(this.status)) {
          this.statusErr = "Поле не должно содержать цифры или спецсимволы";
          this.statusSuc = false;
        } else {
          this.statusErr = "";
          this.statusSuc = true;
        }
      }
      this.checkFormReady();
    },
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
      if (
        this.emailSuc &&
        this.passwordSuc &&
        this.repeatPasswordSuc &&
        this.nameSuc &&
        this.surnameSuc &&
        this.patronymicSuc &&
        this.statusSuc
      ) {
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
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        status: this.status,
      };
      await this.register(user)
        .then(() => {
          this.$emit("show-modal", {
            title: "Регистрация",
            message:
              "Регистрация прошла успешно, теперь Вам необходимо войти в свой аккаунта.",
          });
          this.$emit("switch-form", "login");
        })
        .catch((err) => {
          this.email = "";
          this.password = "";
          this.repeatPassword = "";
          this.emailSuc = false;
          this.passwordSuc = false;
          this.repeatPasswordSuc = false;
          this.errorMsg = err;
        });
      this.loading = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.group-field {
  display: flex;
  .mf {
    margin-right: 1rem;
  }
}
.component {
  width: 700px;
}
@media screen and (max-width: 700px) {
  .group-field {
    flex-direction: column;
  }
  .component {
    width: 500px;
  }
}
@media screen and (max-width: 500px) {
  .component {
    width: 100vw;
  }
}
</style>

import axios from "axios";
export default {
  state: {
    user: {},
  },
  actions: {
    login(ctx, user) {
      return new Promise((resolve, reject) => {
        const body = { ...user };
        const headers = {
          "Content-Type": "application/json",
        };
        axios
          .post("http://localhost:5000/auth/login", body, headers)
          .then(async (response) => {
            const data = await response.data();
            ctx.commit("setUser", data);
            localStorage.setItem("token", data.token);
            resolve();
          })
          .catch(async (err) => {
            console.log(err.message);
            reject(err.message);
          });
      });
    },
    register(ctx, user) {
      return new Promise((resolve, reject) => {
        const body = { ...user };
        const headers = {
          "Content-Type": "application/json",
        };
        axios
          .post("http://localhost:5000/auth/register", body, headers)
          .then(async () => {
            resolve();
          })
          .catch((err) => {
            reject(err.message);
          });
      });
    },
    forgot(ctx, email) {
      return new Promise((resolve, reject) => {
        const body = { email };
        const headers = {
          "Content-Type": "application/json",
        };
        axios
          .post("http://localhost:5000/auth/forgot", body, headers)
          .then(async () => {
            resolve();
          })
          .catch((err) => {
            reject(err.message);
          });
      });
    },
    reset(ctx, data) {
      return new Promise((resolve, reject) => {
        const body = { ...data };
        const headers = {
          "Content-Type": "application/json",
          "Authorization": data.token,
        };
        axios
          .post("http://localhost:5000/auth/reset", body, headers)
          .then(async () => {
            resolve();
          })
          .catch((err) => {
            reject(err.message);
          });
      });
    },
    logout(ctx) {
      ctx.commit("setUser", {});
      localStorage.removeItem("token");
    },
    updateProfile(ctx, user) {
      return new Promise((resolve, reject) => {
        const body = { ...user };
        const headers = {
          Authorization: ctx.getters.getUser.token,
          "Content-Type": "application/json",
        };
        axios
          .patch(`http://localhost:5000/users/${user._id}`, body, headers)
          .then(async (response) => {
            const data = await response.data();
            ctx.commit("setUser", data);
            localStorage.setItem("token", data.token);
            resolve();
          })
          .catch((err) => {
            reject(err.message);
          });
      });
    },
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser;
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
};

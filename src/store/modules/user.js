import { requestToApi } from "@/utils";
import router from "@/router/";
export default {
  state: {
    user: {},
  },
  actions: {
    login(ctx, user) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      return new Promise((resolve, reject) => {
        requestToApi("http://localhost:5000/auth/login", options)
          .then((data) => {
            ctx.commit("setUser", data);
            localStorage.setItem("token", data.token);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    register(ctx, user) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      return new Promise((resolve, reject) => {
        requestToApi("http://localhost:5000/auth/register", options)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    forgot(ctx, email) {
      const data = { email };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      return new Promise((resolve, reject) => {
        requestToApi("http://localhost:5000/auth/forgot", options)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    reset(ctx, data) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      return new Promise((resolve, reject) => {
        requestToApi("http://localhost:5000/auth/reset", options)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    logout(ctx) {
      ctx.commit("setUser", {});
      localStorage.removeItem("token");
      router.push("/auth");
    },
    updateProfile(ctx, user) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ctx.getters.getUser.token,
        },
        body: JSON.stringify(user),
      };
      return new Promise((resolve, reject) => {
        requestToApi(`http://localhost:5000/users/${user._id}`, options)
          .then((data) => {
            ctx.commit("setUser", data);
            localStorage.setItem("token", data.token);
            resolve();
          })
          .catch((error) => {
            reject(error);
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

import Router from "vue-router";
import Home from "@/views/Home";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Main",
    path: "/main",
    component: () => import("@/views/Main"),
    children: [
      {
        name: "Tasks",
        path: "tasks",
        component: ()=>import("@/components/main/Tasks")
      },
      {
        name: "Profile",
        path: "profile",
        component: ()=>import("@/components/main/Profile")
      }
    ]
  },
  {
    name: "Reset",
    path: "/auth/:token",
    component: () => import("@/views/Auth"),
  },
  {
    name: "Auth",
    path: "/auth",
    component: () => import("@/views/Auth"),
  },
];

const router = new Router({
  routes,
  mode: "history",
});

export default router;

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
    meta: {
      auth: true,
    },
    component: () => import("@/views/Main"),
    children: [
      {
        name: "Tasks",
        path: "/main/tasks",
        component: () => import("@/views/Tasks"),
        children: [
          {
            name: "All",
            path: "/main/tasks/all",
            component: () => import("@/components/tasks/All"),
          },
          {
            name: "Today",
            path: "/main/tasks/today",
            component: () => import("@/components/tasks/Today"),
          },
          {
            name: "Calendar",
            path: "/main/tasks/calendar",
            component: () => import("@/components/tasks/Calendar"),
          },
        ],
      },
      {
        name: "Settings",
        path: "/main/settings",
        component: () => import("@/views/Settings"),
        children: [
          {
            name: "Major",
            path: "/main/settings/major",
            component: () => import("@/components/settings/Major"),
          },
          {
            name: "Theme",
            path: "/main/settings/theme",
            component: () => import("@/components/settings/Theme"),
          },
        ],
      },
      {
        name: "Profile",
        path: "/main/profile",
        component: () => import("@/views/Profile"),
        children: [
          {
            name: "Info",
            path: "/main/profile/info",
            component: () => import("@/components/profile/Info"),
          },
        ],
      },
    ],
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

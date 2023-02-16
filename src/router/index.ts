import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
// // import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login/login.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/Home/index.vue"),
    children: [
      //   {
      //     // 这里不设置值，是把main作为默认页面
      //     path: "",
      //     redirect: "/entIndex",
      //   },
      {
        // 企业管理-列表页
        path: "entIndex",
        name: "entIndex",
        component: () => import("../views/Enterprise/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

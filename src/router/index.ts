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
      {
        // 这里不设置值，是把main作为默认页面
        path: "",
        redirect: "/main",
      },
      {
        // 首页
        path: "/main",
        name: "main",
        component: () => import("../views/Main/index.vue"),
      },
      {
        // 企业清单-列表页
        path: "/entIndex",
        name: "entIndex",
        component: () => import("../views/Enterprise/index.vue"),
      },
      {
        // 移动污染源-车辆备案查询-列表页
        path: "/queryIndex",
        name: "queryIndex",
        component: () => import("../views/Polluter/FilingQuery/index.vue"),
      },
      {
        // 移动污染源-车辆备进出台账-列表页
        path: "/StandingIndex",
        name: "StandingIndex",
        component: () => import("../views/Polluter/StandingBook/index.vue"),
      },
      {
        // 移动污染源-车辆备进出统计-列表页
        path: "/StatisticsIndex",
        name: "StatisticsIndex",
        component: () => import("../views/Polluter/Statistics/index.vue"),
      },
      {
        // 账号管理-列表页 Account
        path: "/AccIndex",
        name: "AccIndex",
        component: () => import("../views/Account/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

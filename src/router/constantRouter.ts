// /*
//  * @Description:
//  * @Autor: Dai YueLin
//  * @Date: 2022-04-13 14:13:48
//  * @LastEditors: Dai YueLin
//  * @LastEditTime: 2023-01-09 18:31:16
//  */
// /**
//  * 常量路由配置
//  * 格式：按标准路由数据格式配置
//  * */
// import {
//   createRouter,
//   createWebHashHistory,
//   createWebHistory,
//   RouteRecordRaw,
// } from "vue-router";
// export default [
//   {
//     path: "/login",
//     name: "login",
//     component: () => import("../views/Login/login.vue"),
//   },
//   {
//     path: "/",
//     name: "Layout",
//     component: () => import("../views/HomeFrame/index.vue"),
//     children: [
//       {
//         // 这里不设置值，是把main作为默认页面
//         path: "",
//         redirect: "/listPage",
//       },
//       {
//         // 这里不设置值，是把main作为默认页面
//         path: "listPage",
//         name: "listPage",
//         component: () =>
//           import("../views/MobilePollution/transport-vehicle/listPage.vue"),
//       },
//       {
//         // 视频监控-视频管理-线上视频查询列表页
//         path: "VideomonitorIndex",
//         name: "VideomonitorIndex",
//         component: () => import("../views/Videomonitor/index.vue"),
//       },
//       {
//         // 移动污染-车辆备案-运输车辆列表页
//         path: "transportIndex",
//         name: "transportIndex",
//         component: () =>
//           import("../views/MobilePollution/transport-vehicle/listPage.vue"),
//       },
//       // 移动污染-车辆备案-运输车辆新增页面
//       {
//         path: "transportAdd",
//         name: "transportAdd",
//         component: () =>
//           import("../views/MobilePollution/transport-vehicle/addPage.vue"),
//       },
//       // 移动污染-车辆备案-运输车辆详情页面
//       {
//         path: "transportDetail",
//         name: "transportDetail",
//         component: () =>
//           import("../views/MobilePollution/transport-vehicle/detail.vue"),
//       },
//       // 移动污染-车辆备案-场内车辆列表页
//       {
//         path: "onsiteIndex",
//         name: "onsiteIndex",
//         component: () =>
//           import("../views/MobilePollution/onSite-vehicle/index.vue"),
//       },
//       // 移动污染-车辆备案-场内车辆新增页
//       {
//         path: "onsiteAdd",
//         name: "onsiteAdd",
//         component: () =>
//           import("../views/MobilePollution/onSite-vehicle/addPage.vue"),
//       },
//       // 移动污染-车辆备案-场内车辆详情页
//       {
//         path: "onsiteDetail",
//         name: "onsiteDetail",
//         component: () =>
//           import("../views/MobilePollution/onSite-vehicle/detailPage.vue"),
//       },
//       // 移动污染-车辆备案-非道路移动机械列表页
//       {
//         path: "nonRoadIndex",
//         name: "nonRoadIndex",
//         component: () =>
//           import("../views/MobilePollution/nonRoad-vehicle/index.vue"),
//       },
//       // 移动污染-车辆备案-非道路移动机械新增页
//       {
//         path: "nonRoadAdd",
//         name: "nonRoadAdd",
//         component: () =>
//           import("../views/MobilePollution/nonRoad-vehicle/addPage.vue"),
//       },
//       // 移动污染-车辆备案-非道路移动机械详情页
//       {
//         path: "nonRoadDetail",
//         name: "nonRoadDetail",
//         component: () =>
//           import("../views/MobilePollution/nonRoad-vehicle/detailPage.vue"),
//       },
//       // 移动污染-数据应用-车辆进出台账列表页
//       {
//         path: "standingBookIndex",
//         name: "standingBookIndex",
//         component: () =>
//           import("../views/MobilePollution/standingBook-data/index.vue"),
//       },
//       // 移动污染-数据应用-车辆进出台账详情页
//       {
//         path: "standingBookDetail",
//         name: "standingBookDetail",
//         component: () =>
//           import("../views/MobilePollution/standingBook-data/detailPage.vue"),
//       },
//       {
//         // 企业环保-企业文件-文件分类管理列表页
//         path: "fileClassIndex",
//         name: "fileClassIndex",
//         component: () =>
//           import("../views/EntProtection/fileClass-qy/index.vue"),
//       },
//       {
//         // 企业环保-企业文件-政策法规列表页
//         path: "policyStatuteIndex",
//         name: "policyStatuteIndex",
//         component: () =>
//           import("../views/EntProtection/policyStatute-qy/index.vue"),
//       },
//       {
//         // 企业环保-供应商-供应商列表页
//         path: "supplierIndex",
//         name: "supplierIndex",
//         component: () =>
//           import("../views/EntProtection/supplier-gys/index.vue"),
//       },
//       {
//         // 企业环保-供应商-供应商分类管理列表页
//         path: "classIndex",
//         name: "classIndex",
//         component: () => import("../views/EntProtection/class-gys/index.vue"),
//       },
//       {
//         // 企业环保-供应商-供应商分类管理列表页
//         path: "contractIndex",
//         name: "contractIndex",
//         component: () =>
//           import("../views/EntProtection/contract-gys/index.vue"),
//       },
//       {
//         // 企业环保-人员管理-企业环保人员列表页
//         path: "entPersonIndex",
//         name: "entPersonIndex",
//         component: () => import("../views/EntProtection/entPerson/index.vue"),
//       },
//       {
//         // 企业环保-人员管理-供应商人员列表页
//         path: "bureauPersonIndex",
//         name: "bureauPersonIndex",
//         component: () =>
//           import("../views/EntProtection/bureauPerson/index.vue"),
//       },
//       {
//         // 企业环保-人员管理-供应商人员列表页
//         path: "supplierPersonIndex",
//         name: "supplierPersonIndex",
//         component: () =>
//           import("../views/EntProtection/supplierPerson/index.vue"),
//       },
//       {
//         // 账号管理-列表页
//         path: "accIndex",
//         name: "accIndex",
//         component: () => import("../views/AccountNumber/index.vue"),
//       },
//     ],
//   },
// ];

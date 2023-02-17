<template>
  <div class="box">
    <el-container>
      <el-aside width="18vw" style="background: #3780ba">
        <div id="one">
          <h4>移动污染源监控平台</h4>
        </div>
        <el-menu
          active-text-color="#fff"
          background-color="#3780B9"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
        >
          <template v-for="item in infoRef.test">
            <!-- 一级菜单 -->
            <el-menu-item :index="item.index">
              <el-icon>
                <document />
              </el-icon>
              <span>{{ item.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="background: #fff">
          <div
            style="
              float: left;
              height: 100%;
              width: 75%;
              align-items: center;
              display: flex;
            "
          >
            <div
              style="
                float: left;
                height: 100%;
                width: 70%;
                align-items: center;
                display: flex;
              "
            >
              <el-tabs
                style="margin-left: 60px"
                v-model="activeName"
                @tab-click="handleClick"
              >
                <el-tab-pane
                  v-for="item in tabs"
                  :label="item.count ? item.title + item.count : item.title"
                  :name="item.value"
                  :key="item.id"
                >
                  <div
                    slot="label"
                    class="my-label"
                    :class="activeName === item.value ? 'tab-active' : ''"
                  >
                    <!-- <span class="key">{{ item.title }}</span> -->
                    <!-- <span class="value" v-if="item.count">{{
                      item.count
                    }}</span> -->
                  </div>
                  <!-- {{ item.id }} -->
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div
            style="
              width: 20%;
              height: 100%;
              display: flex;
              justify-content: flex-end;
            "
            id="rightBox"
          >
            <div class="avatar">
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
              </div>
            </div>
            <div class="Percode">
              <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">
                  员工编号<el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="updatePwd"
                      >修改密码</el-dropdown-item
                    >
                    <el-dropdown-item @click="exitLogin()"
                      >退出登录</el-dropdown-item
                    >
                    <!-- <el-dropdown-item>Action 2</el-dropdown-item> -->
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <!--    修改密码弹窗-->
        <el-dialog
          v-model="updatePwdDialog"
          title="修改密码"
          width="50%"
          center
        >
          <div style="width: 90%">
            <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item label="旧密码" prop="password">
                <div>
                  <el-input
                    v-model="ruleForm.password"
                    placeholder="请输入旧密码"
                    autocomplete="off"
                  />
                </div>
                <div style="margin-left: 10px"></div>
              </el-form-item>
              <el-form-item label="新密码" prop="password">
                <div>
                  <el-input
                    v-model="ruleForm.password"
                    placeholder="请输入新密码"
                    autocomplete="off"
                  />
                </div>
                <div style="margin-left: 10px"></div>
              </el-form-item>
              <el-form-item label="确认密码" prop="password">
                <div>
                  <el-input
                    v-model="ruleForm.password"
                    placeholder="请确认您的密码"
                    autocomplete="off"
                  />
                </div>
                <div style="margin-left: 10px"></div>
              </el-form-item>
              <span style="font-size: 2px; color: #c0403f; margin-left: 120px"
                >要求包含:英文大小写+数字,不少于6位</span
              >
            </el-form>
          </div>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="updatePwdDialog = false">取消</el-button>
              <el-button type="primary" @click="updatePwdDialog = false">
                确认
              </el-button>
            </span>
          </template>
        </el-dialog>
        <!-- 主体模块：标签页 + 当前路由内容 -->
        <el-main class="el-main" style="width: 100%">
          <router-view style="height: 100vh" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref, reactive, nextTick, onMounted } from "vue";
import { ElMessageBox, TabsPaneContext } from "element-plus";
import { ArrowDown, Plus } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    // 修改密码
    const updatePwd = () => {
      ElMessageBox.confirm("真的要修改密码吗?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          updatePwdDialog.value = true;
        })
        .catch(() => {
          //取消：就不做任何提示了
        });
    };
    const updatePwdDialog = ref(false);
    const ruleForm = reactive({
      password: "",
    });
    //退出登陆
    const exitLogin = () => {
      ElMessageBox.confirm("真的要退出登陆吗?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // localStorage.removeItem("isLogin");
          router.push("/login");
        })
        .catch(() => {
          //取消：就不做任何提示了
        });
    };
    // tabs循环数据
    const tabs = [
      {
        title: "基本信息",
        value: "first",
        id: 1,
      },
      {
        title: "企业清单",
        value: "second",
        id: 2,
      },
      {
        title: "移动污染源监控数据",
        value: "three",
        id: 3,
      },
      {
        title: "账户管理",
        value: "four",
        id: 4,
      },
    ];
    // 侧边菜单打开关闭
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    // 首次进入选中的名称
    const activeName = ref("second");
    const infoRef = ref(source());
    let info = infoRef.value; // Js里操作只操作 info 就可以不用 infoRef.value 了
    function reset() {
      // 这样需要重置整个响应式对象就不需要 Object.assign和考虑深拷贝问题了
      infoRef.value = source();
      // 重新初始化整个响应式对象时，用来数据操作的实际变量也需要重新赋值！
      info = infoRef.value;
    }

    function source() {
      return {
        test: [
          {
            title: "今日监控数据",
            id: "1",
            sign: "first",
            index: "main",
          },
          {
            title: "企业清单查询",
            id: "2",
            sign: "second",
            index: "entIndex",
          },
          {
            title: "车辆备案查询",
            id: "3",
            sign: "three",
            index: "queryIndex",
          },
          {
            title: "车辆进出台账",
            id: "4",
            sign: "three",
            index: "StandingIndex",
          },
          {
            title: "车辆进出统计",
            id: "5",
            sign: "three",
            index: "StatisticsIndex",
          },
          {
            title: "账号管理",
            id: "6",
            sign: "four",
            index: "AccIndex",
          },
        ],
      };
    }
    let all_left_menu = source();
    return {
      tabs,
      infoRef,
      all_left_menu,
      exitLogin,
      updatePwd,
      updatePwdDialog,
      ruleForm,
    };
  },
  mounted() {
    this.infoRef = [];
  },
  methods: {
    log() {
      this.infoRef = [];
    },
    handleClick(tab, event) {
      let cur_menu = this.all_left_menu.test.filter(
        (e) => tab.props.name == e.sign
      );
      this.infoRef.test = cur_menu;
    },
  },
};
</script>

<style scoped>
.box {
  background: #f2f4f5;
  height: 100%;
}
/* 标签样式更改 */
/* 去掉el-tab-pane底部灰色线条 */

:deep() .el-tabs__nav-wrap::after {
  height: 0 !important;
}

:deep().el-tabs__item {
  color: #888;
}

:deep().el-tabs__active-bar {
  background-color: #3780b9;
}

:deep().el-tabs__item.is-active {
  color: #000;
}
/* 科擎环保门禁系统文字 */

#one {
  width: 100%;
  padding: 30px 0;
  color: #fff;
  text-align: center;
}
/* 菜单 */

.menu {
  background: #3780ba;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 500px;
}

.avatar {
  width: 30%;
  clear: both;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar > div {
  flex: 1;
  text-align: center;
}

.avatar > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}

.el-aside {
  overflow-x: hidden;
  height: 100vh;
}

.el-sub-menu .el-menu-item {
  padding-left: 60px !important;
}
/* 用户编号头像 */

.avatar {
  width: 30%;
  clear: both;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Percode {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>

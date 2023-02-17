<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>账号管理</el-breadcrumb-item>
            <el-breadcrumb-item>账号管理</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >账号列表</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <div class="inside-main-box">
          <el-row
            class="inside-main"
            style="background: #fff; padding-top: 10px; height: 46px"
          >
            <el-col :span="8" style="margin-left: 20px">
              <el-form-item label="用户名" size="small">
                <el-input v-model="form.num" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 20px">
              <el-button size="small" class="sele-but">查询</el-button>
              <el-button
                size="small"
                :icon="Plus"
                class="add-but"
                @click="centerDialogVisible = true"
                >新增</el-button
              >
            </el-col>
          </el-row>
        </div>
        <div style="background: #fff">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column align="center" prop="用户名" label="用户名" />
            <el-table-column align="center" prop="所属省份" label="所属省份" />
            <el-table-column align="center" prop="创建时间" label="创建时间" />
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="120"
            >
              <template #default>
                <el-button link type="primary" size="small">修改</el-button>
                <el-button link type="primary" size="small">封禁</el-button>
                <el-button link type="primary" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            style="margin-top: 20%; display: flex; justify-content: flex-end"
            v-model:current-page="currentPage3"
            v-model:page-size="pageSize3"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-main>
    </el-container>
    <!-- 新增弹窗 -->
    <el-dialog v-model="centerDialogVisible" title="新增分类" width="60%">
      <div style="width: 90%">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <div>
              <el-input
                v-model="ruleForm.username"
                placeholder="请输入"
                autocomplete="off"
              />
            </div>
            <div style="margin-left: 10px">
              <span style="font-size: 2px; color: #888"
                >支持中文、英文、数字</span
              >
            </div>
          </el-form-item>
          <el-form-item label="登录密码" prop="password">
            <div>
              <el-input
                v-model="ruleForm.password"
                placeholder="请输入"
                autocomplete="off"
              />
            </div>
            <div style="margin-left: 10px">
              <span style="font-size: 2px; color: #888"
                >要求包含:英文大小写+数字,不少于6位</span
              >
            </div>
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="关联门禁">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="开放页面权限">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="sele-but" @click="centerDialogVisible = true">
            保存并添加下一个
          </el-button>
          <el-button class="sele-but" @click="centerDialogVisible = false">
            保存
          </el-button>
          <el-button class="empty-but" @click="centerDialogVisible = false"
            >取消</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
// 路由
import { useRouter } from "vue-router";
import { FormInstance, FormRules } from "element-plus";
// 新增弹窗 表单校验
const ruleForm = reactive({
  username: "",
  region: "",
  desc: "",
});
const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      // min: 3,
      // max: 10,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
    ,
    {
      // min: 3,
      // max: 10,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
};
const router = useRouter();
// 新增弹窗
const centerDialogVisible = ref(false);

const name = "transportIndex";
// 时间
const size = ref("default");
const form = reactive({
  num: "",
});
// 表格假数据
const tableData = [
  {
    用户名: "102220",
    手机号: "18729383732",
    创建时间: "2022-10-10 14.26.23",
  },
  {
    用户名: "220239",
    手机号: "18729383732",
    创建时间: "2022-10-10 14.26.23",
  },
];
</script>
<style scoped>
/* 面包屑字体颜色更改 */

.breadcrumbColor >>> .el-breadcrumb__inner {
  color: #000;
}
/* 内部header */

.inside-header {
  height: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
}
/* 空心按钮样式 */

.empty-but {
  border: 1px solid #3780b9;
  color: #3780b9;
}
/* 实心按钮背景样式 */

.sele-but {
  background: #3780b9;
  border: 0px;
  border-radius: 2px;
  color: white;
}

.add-but {
  background: #dde5fe;
  color: #3780b9;
}
/* 分页 */
.demo-pagination-block {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>

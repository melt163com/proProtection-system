<template>
  <div>
    <el-container>
      <el-header style="15px">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item class="breadcrumbColor"
              >企业清单查询</el-breadcrumb-item
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
            <el-col :span="5" style="margin-left: 20px">
              <el-form-item label="企业名称" size="small">
                <el-input v-model="form.nume" placeholder="请输入企业名称" />
              </el-form-item>
            </el-col>

            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="环保等级" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="省" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="市" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="区" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 15px">
              <el-button size="small" class="sele-but">查询</el-button>
              <el-button size="small" class="empty-but">重置</el-button>
            </el-col>
          </el-row>
        </div>
        <div style="height: 40px; display: flex; align-items: center">
          <el-button size="small" :icon="Plus" class="add-but">新增</el-button>
          <el-button size="small" class="empty-but" @click="exportExcel"
            >导出</el-button
          >
        </div>
        <div style="height: 40px; display: flex; align-items: center">
          <span style="font-size: 10px; color: #888; margin-left: 20px"
            >园区企业:995家
            <span style="margin-left: 15px">其中环保A级：100家</span>
            <span style="margin-left: 15px"> 环保B级800家</span>
            <span style="margin-left: 15px"> 环保C级:4家</span>
            <span style="margin-left: 15px"> 环保D级:1家</span>
          </span>
        </div>
        <div style="background: #fff">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              align="center"
              prop="序号"
              label="序号"
              width="80px"
            />
            <el-table-column align="center" prop="企业名称" label="企业名称" />
            <el-table-column align="center" prop="法人" label="法人" />
            <el-table-column align="center" prop="环保等级" label="环保等级" />
            <el-table-column
              align="center"
              prop="移动污染源是否备案"
              label="移动污染源是否备案"
            />
            <el-table-column align="center" prop="生产范围" label="生产范围" />
            <el-table-column align="center" prop="地址" label="地址" />
            <el-table-column align="center" prop="联系人" label="联系人" />
            <el-table-column align="center" prop="联系电话" label="联系电话" />
            <el-table-column
              align="center"
              prop="办公室电话"
              label="办公室电话"
            />
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="120"
            >
              <template #default>
                <el-button link type="primary" size="small">修改</el-button>
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
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Plus } from "@element-plus/icons-vue";
import * as XLSX from "xlsx";
export default {
  name: "",
  setup() {
    const router = useRouter();
    const form = reactive({
      name: "",
    });
    // 表格假数据
    const tableData = [
      {
        序号: "1",
        企业名称: "",
        法人: "",
        环保等级: "",
        移动污染源是否备案: "",
        生产范围: "",
        地址: "",
        联系人: "",
        联系电话: "",
        办公室电话: "",
      },
    ];
    //导出
    let table = reactive({
      rows: [],
      total: 0,
    });
    const exportExcel = () => {
      const data = XLSX.utils.json_to_sheet(tableData); //此处tableData.value为表格的数据
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, data, "test-data"); //test-data为自定义的sheet表名
      XLSX.writeFile(wb, "企业清单.xlsx"); //test.xlsx为自定义的文件名
    };
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    return {
      form,
      tableData,
      exportExcel,
    };
  },
};
</script>
<style scoped>
.el-header {
  height: 15px;
}
/* 面包屑字体颜色更改 */

.breadcrumbColor >>> .el-breadcrumb__inner {
  color: #000;
}
/* 实心按钮背景样式 */

.sele-but {
  background: #3780b9;
  border: 0px;
  border-radius: 2px;
  color: white;
}
/* 空心按钮样式 */

.empty-but {
  border: 1px solid #3780b9;
  color: #3780b9;
}
.add-but {
  margin-left: 20px;
  background: #dde5fe;
  color: #3780b9;
}
</style>

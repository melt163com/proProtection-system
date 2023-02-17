<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item class="breadcrumbColor"
              >车辆进出统计</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <div class="inside-main-box">
          <el-row
            class="inside-main"
            style="background: #fff; padding-top: 10px; height: 85px"
          >
            <el-col :span="3" style="margin-left: 20px">
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
            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="企业名称" size="small">
                <el-input v-model="form.driver" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="出入类型" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="入厂" value="shanghai" />
                  <el-option label="出厂" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="环保等级" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="5" style="margin-left: 20px">
              <el-form-item label="申请时间" size="small">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="选择时间"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <span>-</span>
            <el-col :span="4">
              <el-form-item label="" size="small">
                <el-date-picker
                  v-model="form.date2"
                  type="date"
                  placeholder="选择时间"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>

            <el-col :span="6" style="margin-left: 20px">
              <el-button size="small" class="sele-but">查询</el-button>
              <el-button size="small" class="empty-but">刷新</el-button>
              <el-button size="small" class="empty-but" @click="exportExcel"
                >导出</el-button
              >
            </el-col>
          </el-row>
          <div></div>
        </div>
        <div style="background: #fff">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              align="center"
              prop="日期"
              label="日期"
              width="150"
            />
            <el-table-column
              align="center"
              prop="公司名称"
              label="公司名称"
              width="150"
            />
            <el-table-column
              align="center"
              prop="环保等级"
              label="环保等级"
              width="150"
            />
            <el-table-column
              align="center"
              prop="门禁号"
              label="门禁号"
              width="150"
            />
            <el-table-column align="center" prop="市" label="市" width="150" />
            <el-table-column
              align="center"
              prop="区域"
              label="区域"
              width="150"
            />
            <el-table-column
              align="center"
              prop="出入类型"
              label="出入类型"
              width="150"
            />
            <el-table-column align="center" label="国0">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="国I">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="国II">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="国III">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="国IV">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="国V">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="国VI">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="电动">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="合计">
              <el-table-column
                align="center"
                prop="数量"
                label="数量"
                width="120"
              />
              <el-table-column
                align="center"
                prop="占比"
                label="占比"
                width="120"
              >
              </el-table-column>
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

<script setup>
import { onMounted, reactive, ref } from "vue";
import { Plus, UploadFilled } from "@element-plus/icons-vue";
// import {
//     getUsers
// } from "@/api/user"
// 路由
import { useRouter } from "vue-router";
// 文件导入
import { ElMessage, ElMessageBox } from "element-plus";

import { UploadProps, UploadUserFile } from "element-plus";
import * as XLSX from "xlsx";
let table = reactive({
  rows: [],
  total: 0,
});
const exportExcel = () => {
  const data = XLSX.utils.json_to_sheet(tableData); //此处tableData.value为表格的数据
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, data, "test-data"); //test-data为自定义的sheet表名
  XLSX.writeFile(wb, "车辆进出统计.xlsx"); //test.xlsx为自定义的文件名
};
onMounted(() => {
  // getTbaleData(null);
});
// const getTbaleData = (namel) => {
//     getUsers({
//             displayName: name,
//             pageNo: 1,
//             pageSize: 10,
//         })
//         .then((res) => {
//             // table.rows = res.data.records;
//             // table.total = res.data.total
//         });
// };
// 导入
const fileList = ref([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food2.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
]);

const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePreview = (file) => {
  console.log(file);
};
// 导入弹出框
const dialogTableVisible = ref(false);
const router = useRouter();
// 新增跳转到新增页面
const addPage = () => {
  router.push({
    path: "/transportAdd",
    query: "",
  });
};
// 跳转到详情页面
const detailPage = () => {
  router.push({
    path: "transportDetail",
    query: "",
  });
};
const name = "transportIndex";
// 时间
const size = ref("default");
const form = reactive({
  date1: "",
  date2: "",
  num: "",
  driver: "",
  access: "",
});
// 表格假数据
const tableData = [
  {
    序号: "1",
    类型: "出门",
    车牌: "辽A88888",
    车辆照片: "点击查看图片",
    随车清单: "点击查看图片",
    行驶证: "点击查看图片",
    健康码: "点击查看图片",
    申请时间: "22.12.10 14：50：26",
    排放标准: "国V",
  },
  {
    序号: "2",
    类型: "出门",
    车牌: "辽A88888",
    车辆照片: "点击查看图片",
    随车清单: "点击查看图片",
    行驶证: "点击查看图片",
    健康码: "点击查看图片",
    申请时间: "22.12.10 14：50：26",
    排放标准: "国V",
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

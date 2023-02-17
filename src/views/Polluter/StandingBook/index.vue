<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item class="breadcrumbColor"
              >车辆进出台账</el-breadcrumb-item
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
            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="出入类型" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="企业名称" size="small">
                <el-input v-model="form.driver" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="门禁号" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
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
            <el-col :span="3" style="margin-left: 20px">
              <el-form-item label="排放阶段" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="车牌号" size="small">
                <el-input v-model="form.driver" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="5" style="margin-left: 5px">
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
              <el-button size="small" class="empty-but">导出</el-button>
            </el-col>
          </el-row>
          <div></div>
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
            <el-table-column align="center" prop="门禁号" label="门禁号" />
            <el-table-column align="center" prop="环保等级" label="环保等级" />

            <el-table-column align="center" prop="市" label="市" />
            <el-table-column align="center" prop="区" label="区" />
            <el-table-column align="center" prop="状态" label="状态" />
            <el-table-column align="center" prop="类型" label="类型" />
            <el-table-column align="center" prop="门禁号" label="门禁号" />
            <el-table-column align="center" prop="道闸编号" label="道闸编号" />
            <el-table-column align="center" prop="车牌" label="车牌" />
            <el-table-column align="center" prop="申请时间" label="申请时间" />
            <el-table-column align="center" prop="排放阶段" label="排放阶段" />
            <el-table-column align="center" prop="司机" label="司机" />
            <el-table-column align="center" prop="司机电话" label="司机电话" />
            <el-table-column align="center" prop="注册时间" label="注册时间" />
            <el-table-column
              align="center"
              prop="车辆识别代码"
              label="车辆识别代码(VIN)"
            />
            <el-table-column align="center" prop="发动机号" label="发动机号" />
            <el-table-column align="center" prop="出入时间" label="出入时间" />
            <el-table-column align="center" prop="运输货物" label="运输货物" />
            <el-table-column
              align="center"
              prop="运输货量/吨"
              label="运输货量/吨"
            />
            <el-table-column align="center" prop="查看视频" label="查看视频" />
            <el-table-column align="center" prop="查看照片" label="查看照片" />
            <el-table-column align="center" prop="受访部门" label="受访部门" />
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
import { useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { Plus, UploadFilled } from "@element-plus/icons-vue";
// 文件导入
import { ElMessage, ElMessageBox } from "element-plus";
import { UploadProps, UploadUserFile } from "element-plus";
export default {
  setup() {
    const router = useRouter();
    let table = reactive({
      rows: [],
      total: 0,
    });
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
        企业名称: "",
        环保等级: "",
        市: "",
        区: "",
        状态: "",
        类型: "",
        门禁号: "",
        道闸编号: "",
        车牌: "",
        申请时间: "",
        排放阶段: "",
        司机: "",
        司机电话: "",
        注册时间: "",
        车辆识别代码: "",
        发动机号: "",
        出入时间: "",
        运输货物: "钢铁",
        运输货量: "50",
        查看视频: "",
        查看照片: "",
        受访部门: "",
      },
    ];
    return {
      tableData,
      form,
    };
  },
};
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

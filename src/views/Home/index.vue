<template>
    <div class="box">
        <el-container>
            <el-aside width="18vw" style="background: #3780ba">
                <el-menu active-text-color="#fff" background-color="#3780B9" class="el-menu-vertical-demo" default-active="2" text-color="#fff" :router="true">
                    <template v-for="item in asideMenu">
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
    <el-header>
        <div style="
        float: left;
        height: 100%;
        width: 75%;
        align-items: center;
        display: flex;
      "></div>
        <div style="width: 20%; height: 100%;display: flex;justify-content: flex-end;" id="rightBox">
            <div class="avatar">
                <div>
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
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
                                        <el-dropdown-item @click="exitLogin()">退出登录</el-dropdown-item>
                                        <!-- <el-dropdown-item>Action 2</el-dropdown-item> -->
                                    </el-dropdown-menu>
                                </template>
                </el-dropdown>
            </div>
        </div>
    </el-header>
    <!-- 主体模块：标签页 + 当前路由内容 -->
    <el-main class="el-main" style="width: 100%">
        <router-view style="height: 100vh" />
    </el-main>
</el-container>
</el-container>
</div>
</template>

<script>
    import {
        reactive,
        toRefs,
        onBeforeMount,
        onMounted
    } from 'vue'
    import {
        Plus,
        ArrowDown
    } from "@element-plus/icons-vue";
    import qygl from "@/assets/qygl.png";
    import zhgl from "@/assets/zhgl.png";
    export default {
        name: '',
        setup() {
            console.log('1-开始创建组件-setup')
            const asideMenu = [{
                title: "用户",
                index: "entIndex",
            }, {
                title: "测试",
                index: "test",
            }, ]
            const data = reactive({})
            onBeforeMount(() => {
                console.log('2.组件挂载页面之前执行----onBeforeMount')
            })
            onMounted(() => {
                console.log('3.-组件挂载到页面之后执行-------onMounted')
            })
            return {
                ...toRefs(data),
                asideMenu
            }
        },
    }
</script>
<style scoped>
    .box {
        background: #f2f4f5;
        height: 100%;
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
    
    .avatar>div {
        flex: 1;
        text-align: center;
    }
    
    .avatar>div:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
    }
    
    .example-showcase .el-dropdown+.el-dropdown {
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
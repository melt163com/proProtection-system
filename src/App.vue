<template>
    <el-config-provider :locale="zhCn">
        <router-view />
    </el-config-provider>
</template>
<script lang="ts" setup>
    import {
        ref
    } from "vue"
    // 引入中文 把英文更改为中文 zhCn
    import zhCn from "element-plus/lib/locale/lang/zh-cn"
</script>
<style lang="scss">
    * {
        padding: 0px;
        margin: 0px;
    }
    
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
    }
</style>
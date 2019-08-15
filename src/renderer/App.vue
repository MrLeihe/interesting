<template>
  <div id="app">
    <el-button type="text" @click="goBack">返回上一页</el-button>
    <el-button type="text" @click="backHome">返回主页</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-spider',
    methods: {
      backHome() {
        this.$router.push({ path: "/" });
      },
      goBack(){
        this.$router.go(-1);
      } 
    }
  }
</script>

<style>
  /* CSS */
</style>

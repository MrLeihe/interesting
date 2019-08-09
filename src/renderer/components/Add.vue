<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="规则名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="内容地址">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="标题头">
      <el-input v-model="form.title_start"></el-input>
    </el-form-item>

    <el-form-item label="标题尾">
      <el-input v-model="form.title_end"></el-input>
    </el-form-item>

    <el-form-item label="时间头">
      <el-input v-model="form.time_start"></el-input>
    </el-form-item>

    <el-form-item label="时间尾">
      <el-input v-model="form.time_end"></el-input>
    </el-form-item>

    <el-form-item label="内容头">
      <el-input v-model="form.body_start"></el-input>
    </el-form-item>

    <el-form-item label="内容尾">
      <el-input v-model="form.body_end"></el-input>
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        title_start: "",
        title_end: "",
        time_start: "",
        time_end: false,
        body_start: [],
        body_end: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style scoped>
</style>


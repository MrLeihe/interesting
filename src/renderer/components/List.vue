<template>
  <div>
    <el-button type="text" @click="add">添加记录</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="编号" width="150"></el-table-column>
      <el-table-column prop="projectName" label="项目名称" width="120"></el-table-column>
      <el-table-column prop="createdTime" label="添加时间" width="120"></el-table-column>
      <el-table-column prop="updatedTime" label="更新时间" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import moment from "moment"
var db = require("../utils/localDb");
export default {
  data() {
    return {

    }
  },
  methods: {
    handleClick(row) {
      console.log(`/projects/${row.id}`)
      this.$router.push({path: `/projects/${row.id}`});
    },
    add() {
      this.$router.push({ path: "/add" });
    }
  },
  created() {
    
  },
  data() {
    return {
      tableData: db.get('projects').value()
    }
  }
};
</script>
<style scoped>
</style>


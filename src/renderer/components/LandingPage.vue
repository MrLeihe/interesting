<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="数据库主机地址">
        <el-input v-model="form.host"></el-input>
      </el-form-item>
      <el-form-item label="数据库端口号">
        <el-input v-model="form.port"></el-input>
      </el-form-item>
      <el-form-item label="数据库用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="数据库密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="数据库名">
        <el-input v-model="form.dbname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
var db = require("../utils/localDb");
const Sequelize = require("sequelize");

export default {
  name: "landing-page",
  data() {
    return {
      form: {
        host: "",
        port: "",
        username: "",
        password: "",
        dbname: ""
      }
    };
  },
  created() {
    var dbinfo = db.get('dbInfo').value()
    if (dbinfo.host) {
      this.form = dbinfo;
    }
  },
  computed: {
    sqlurl() {
      let form = this.form;
      return `mysql://${form.username}:${form.password}@${form.host}:${form.port}/${form.dbname}`;
    }
  },
  methods: {
    onSubmit() {
      const sequelize = new Sequelize(this.sqlurl);
      sequelize
        .authenticate()
        .then(() => {
          db.set('dbInfo', this.form).write()
          this.$router.push({ path: "/list" });
        })
        .catch(err => {
          console.log(err)
          alert("连接失败");
        });
    }
  }
};
</script>

<style>
</style>

<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="项目名称">
      <el-input v-model="form.projectName"></el-input>
    </el-form-item>
    <el-form-item label="项目地址">
      <el-input v-model="form.url"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{isEdit?"立即更新":"立即创建"}}</el-button>
      <el-button @click="goBack">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>

var db = require("../../utils/localDb");
const shortid = require("shortid");
export default {
  data() {
    return {
      isEdit: true,
      form: {
        projectName: "",
        createdTime: "",
        updatedTime: "",
        url:""
      }
    };
  },
  created() {
    const post = db
      .get("projects")
      .find({ id: this.$route.params.id })
      .value();

    if (post) {
      this.form = post;
    } else {
      this.isEdit = false;
    }
  },
  methods: {
    onSubmit() {
      if (this.isEdit) {
        this.update();
      } else {
        this.save();
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    update() {
      const time = Date.parse(new Date()) / 1000;
      this.form = {
        id: this.form.id,
        projectName: this.form.projectName,
        createdTime: this.form.createdTime,
        updatedTime: time,
        url:this.form.url
      };
      db.get("projects")
        .find({ id: this.form.id })
        .assign(this.form)
        .write();
      this.goBack();
    },
    save() {
      const time = Date.parse(new Date()) / 1000;
      this.form = {
        id: shortid.generate(),
        projectName: this.form.projectName,
        url:this.form.url,
        createdTime: time,
        updatedTime: time
      };

      db.get("projects")
        .push(this.form)
        .write();

      this.goBack();
    }
  }
};
</script>
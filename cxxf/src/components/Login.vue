<template>
  <div class="main_panl">
    <div class="head_logo">XXX平台管理系统</div>
    <div class="main_content">
      <el-form class="elform" :model="user" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="user.password" show-password></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: 'aaa',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请选择密码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度在 6 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //正常情况访问后台,跳转首页
          this.$router.push("/")
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.main_panl {
  background-color: #eee;
  width: 100%;
  height: 100vh;
}
.head_logo{
  width: 500px;
  height: 100px;
  margin: 0 auto;
  /*background-color: yellow;*/
  line-height: 100px;
  font-size: 3em;
  padding-top: 50px;
  text-align: center;
  font-family: 楷体;
}
.main_content{
  width: 500px;
  height: 250px;
  background-color: greenyellow;
  margin:0 auto;
  margin-top: 80px;
}
.elform {
  padding-top: 40px;
  padding-right: 40px;
}
.btn{
  display: flex;
  justify-content: flex-end;
}
</style>
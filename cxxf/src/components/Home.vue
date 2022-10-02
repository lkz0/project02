<template>
  <el-container class="home-container">
    <el-header class="el-header">
      <div>
        <img src="../assets/logo.png" width="60px" height="60px">
        <span>XXX平台系统</span>
      </div>
      <div>
        <span style="font-size: 15px;margin-right: 15px">admin</span>
        <el-button type="primary" @click="logout()">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside class="el-aside" width="200px">
        <el-menu default-active="defaultActive" class="el-menu-vertical-demo" router>
          <el-menu-item index="/welcome">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/userQuery">用户查询</el-menu-item>
            <el-menu-item index="/userAdd">用户添加</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="el-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data:function(){
    return{
      defaultActive:""
    }
  },
  beforeMount(){
    this.defaultActive=this.$route.path;
  },
  methods:{
    logout(){
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.home-container{
  height: 100vh;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  font-size: 30px;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img{
  display: block;
  float: left;
}
span{
  display: block;
  letter-spacing: 3px;
  float: left;
  margin-left: 20px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
</style>
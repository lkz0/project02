import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '@/components/Welcome'
import  UserQuery from '../components/user/UserQuery'
import  UserAdd from '../components/user/UesrAdd'

Vue.use(VueRouter);

//定义路由规则,通过路径访问到某个路由组件
const routes = [
    {path:'/login',component:Login},
    {path:'/',redirect: '/welcome'},
    {path:'/home',component: Home,
        children:[
            {path:"/welcome",component: Welcome},
            {path:"/userQuery",component: UserQuery},
            {path:"/userAdd",component: UserAdd}
        ]
    }
];
//创建路由对象
const router = new VueRouter({
    routes
});
//导出路由对象
export default router;
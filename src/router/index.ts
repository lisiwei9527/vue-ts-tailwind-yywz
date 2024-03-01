import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //函数的参数是 路由的基础路径 默认是 "/"
  //import.meta是JavaScript模块暴露的描述模块的信息对象   env.BASE_URL是Vite环境下才有的变量
  routes: []
})

export default router

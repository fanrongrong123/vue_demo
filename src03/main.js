// 组件入口文件

import Vue from 'vue'
import App from './App.vue'
import router from './router'  //路由




new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router  //配置路由器
})

// 组件入口文件
// 第三方
import Vue from 'vue'
import App from './App.vue'

// 本地
import   './base.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

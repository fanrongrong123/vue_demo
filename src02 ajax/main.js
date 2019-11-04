// 组件入口文件
// 第三方
import Vue from 'vue'
import App from './App.vue'
import Vue from 'vue-resource'

// 声明使用vue插件
Vue.use(VueResource)


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

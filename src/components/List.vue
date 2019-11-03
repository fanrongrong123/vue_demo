<template>
<!-- 列表组件 -->
  <ul class='todo-main'>
    <Item v-for = 'todo in todos':key = 'todo.id':todo='todo' :deleteTodo="deleteTodo" :updateTodo="updateTodo"></Item>
  </ul>
</template>



<script type="text/ecmascript-6">
// 引入Item组件
import Item from './Item'

// 默认暴露
  export default {
    // 声明接收标签属性：属性名
    name:'List',
    props:['todos','deleteTodo','updateTodo'],
    // 用components注册标签名，不注册用不了（作用：指定组件标签）
    components:{
      Item
    }
  }
</script>


<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
 
</style>

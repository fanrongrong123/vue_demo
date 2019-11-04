

<template>
<!-- 外部包裹父组件 -->
    <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>

      <Footer :todos="todos" :selectAll="selectAll" :clearAllComplete="clearAllComplete"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Item from './components/Item'
import Footer from './components/Footer'

// 默认暴露
export default {
  data (){
    return{
      todos:[],
      xxx:2
    }
  },

  mounted () {
    setTimeout(() => {
      // 读取local中的todos数据
      const todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
      // 更新数据
      this.todos = todos
    }, 1000);
  },

  watch:{
    todos:{
      deep:true, //深度监视
      handler:(value) =>{
        // 将最新的todos保存在local中
        localStorage.setItem('todos_key',JSON.stringify(value))
      }
    }
  },

  // 删除数据逻辑

  //  增加数据
  methods:{
   addTodo(todo){
     this.todos.unshift(todo)
   },

  //  删除数据
  deleTodo(id){
    this,todos = this.todos.filter(todo => id !== todo.id)
  },

  // 全选/全不选框
  selectAll(cheak){
    this.todos.forEach(todo => todo.complete = check)
  },

 //更新todo得complete值
  updatedTodo(todo,isCheck) {
    todo.complete = isCheck
  }
  },

   // 声明局部组件
  components:{
    Header,
    List,
    Footer
  }
}

</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

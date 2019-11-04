
  <template>
     <!-- 头部组件 -->
    <div class= 'todo-header'>
      <input type = 'text' placeholder = '请输入任务名称,按回车键确定' v-model="title" @keyup.enter="add"/>
    </div>
  </template>
  

  <script type="text/ecmascript-6">
// 默认暴露
    export default {
      name:'Header',
      props:{
        addTodo:{
          type:Function,
          required:true,
        }
      },

      // 数据
      data() {
        return {
          title:''
        }
      },
// 添加数据
      methods:{
        add(){
          const title = this.title.trim()

            // 检查添加数据合法性,输入空格直接返回
            if (titlt === '') return
              
            // 创建todo对象
            const todo = {
              id:Date.now(),
              complete:false,
              title,
            }
            // 调用addtodo()动态添加todo
            this.addTodo(todo)

            // 内容添加成功后清空输入框
            this.title = ''
                  }
                }
              }

  </script>
  
  <style scoped>
  /* 给标签添加  scoped，限制之影响当前组件样式，不影响外部样式 */
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
   
  </style>
  
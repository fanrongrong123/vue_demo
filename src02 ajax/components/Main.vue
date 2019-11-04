<template>
  <div>

    <h2 v-if="firstView">请输入关键字进行搜索</h2>
    <h2 v-else-if="loading">正在请求中...</h2>
    <h2 v-else-if="errorMsg">{{errorMsg}}</h2>

    <div class="row" v-else>
      <div class="card" v-for="(user, index) in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>


<script>
// 引入axios,发送请求
import axios from 'axios'
import { async } from 'q'

export default {
  data(){
    return{
      firstView:turn,
      loading:false,
      users:[],
      errorMsg:''
  }
  },
  
  // 绑定事件监听
  mounted(){
    this.$bus.$on('search',async(searchName) =>{
      // 更新数据(请求中)
      this.firstView = false
      this.loading = true
      try{
        // 发送请求
        const response = await axios({
          url: 'https://api.github.com/search/users',
            params: {
              q: searchName
            }
        })
        // 成功更新数据
        const result = response.data
        const users = result.items.map(item =>({
          username:item.login,
          avatar_url:item.avatar_url,
        }))
      this.loading = false
      this.users = users
        // 失败更新数据
      }catch(error){
        this.loading = false
        this.errorMsg = error.message;
        }
    })
  }
}
</script>


<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>

<template>
  <div>
    <ul>
        <li v-for="message in messages" :key="message.id">
        <router-link :to="'/home/message/detail/' + message.id">{{message.title}}</router-link>
        </li>
    </ul>
  <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        message:[]
      }
    },

    mounted () {
     setTimeout(() => {
        const message =[
          {id:1,title:'message001'},
          {id:2,title:'message002'},
          {id:3,title:'message003'},
        ]
        this.message = message
     }, 1000);
    }
  }
</script>

<style scoped>

 
</style>
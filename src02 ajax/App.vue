

<template>
<!-- 外部包裹父组件 -->
  <div class='container'>
    <Search/>
    <Main/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Main from './components/Main'

  export default {
    components: {
      Search,
      Main
    }
  }
</script>
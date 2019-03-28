<template>
  <div id="proNav">
    <h1>编程式导航</h1>
    <button @click="preivew">前进</button>
    <button @click="goBack">后退</button>
    <button @click="goHome">首页</button>
    <button @click="query">query</button>
  </div>
</template>

<script>
  export default {
    name: "programNav",
    data() {
      return {}
    },
    methods: {
      preivew() {
          this.$router.go(1)
      },
      goBack(){
        this.$router.go(-1)
      },
      goHome(){
        this.$router.push("/")
      },
      query(){
        this.$router.push({path:"/",query:{a:1,b:2}});
      }
    }
  }
</script>

<style scoped>

</style>

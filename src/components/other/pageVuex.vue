<template>
  <div id="pageVuex">
    <h1>vuex访问状态对象</h1>
    <div>vuex的count={{count}}</div>
    <button @click="plus">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
  /* import {mapState} from "vuex";*/
  import {mapState} from "vuex"

  export default {
    name: "pageVuex",
    /*方法一*/
    /* computed:{
       count(){
         return this.$store.state.count
       }
     },*/
    /*方法二*/
    /* computed: mapState({
       count: state => state.count
     }),*/
    /*方法三*/
     computed:mapState(["count"]),
    methods: {
      plus() {
        this.$store.commit("plus");
      },
      reduce() {
        this.$store.commit("reduce")
      }
    }
  }
</script>

<style lang="less">
  #pageVuex {
    padding: 20px;
    h1{
      font-size:16px;
      padding:20px 0;
    }
    button {
      margin-top: 20px;
    }
  }
</style>

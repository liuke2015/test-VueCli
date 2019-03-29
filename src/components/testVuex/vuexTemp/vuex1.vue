<template>
  <div id="vuex1">
    <h1>vuex访问状态对象</h1>
    <div>vuex的count={{count}}</div>
    <button @click="plus">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
  import {mapState} from "vuex"

  export default {
    name: "vuex1",
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
    /*方法一*/
     methods: {
       plus() {
         this.$store.commit("plus",);
       },
       reduce() {
         this.$store.commit("reduce")
       }
     }
  }
</script>

<style lang="less">
  #vuex1 {
    button {
      margin-top: 20px;
    }
  }
</style>

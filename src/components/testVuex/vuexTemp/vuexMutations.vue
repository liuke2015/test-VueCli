<template>
  <div id="vuexMutations">
    <h1>vuex触发mutations与传参</h1>
    <div>vuex的count={{count}}</div>
   <!-- <button @click="$store.commit('plus')">+</button>-->
    <button @click="plus({stemp:5})">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
  import {mapState,mapMutations} from "vuex"
  export default {
    name: "vuexMutations",  
    computed:mapState(["count"]),
    /*方法一*/
     methods: mapMutations([
       "plus","reduce"
     ])
  }
</script>

<style lang="less">
  #vuexMutations {
    button {
      margin-top: 20px;
    }
  }
</style>

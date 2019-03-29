<template>
  <div id="vuexMutations">
    <h1>vuex触发actions</h1>
    <div>vuex的count={{count}}</div>
   <!-- <button @click="$store.commit('plus')">+</button>-->
    <button @click="actPlus({stemp:5})">actions +</button>
    <button @click="reduce">actions -</button>
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex"
  export default {
    name: "vuexMutations",  
    computed:mapState(["count"]),
     methods:{
       /*方法一，数组*/
       ... mapActions([
         "actPlus"
       ]),
       /*方法二，对象*/
       ...mapActions({
         reduce:"actReduce"
       })
     }
  }
</script>

<style lang="less">
  #vuexMutations {
    button {
      margin-top: 20px;
    }
  }
</style>

<template>
  <div id="vuexGetters">
    <h1>vuex获取vuexGetters</h1>
    <ul>
      <li>vuex的count={{count}}</li>
      <li>uex的gCount={{gCount}}</li>
    </ul>
   <!-- <button @click="$store.commit('plus')">+</button>-->
    <button @click="plus({stemp:5})">count+</button>
    <button @click="reduce">count-</button>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapGetters} from "vuex"
  export default {
    name: "vuexGetters",
    /*注：vue2.0的computed不要使用箭头函数*/
    computed:{
      ...mapState(["count"]),
      /*方法一*/
      /*gCount(){
        return this.$store.getters.gCount;
      }*/
      /*方法二*/
      ...mapGetters(["gCount"])
    },
     methods: mapMutations([
       "plus","reduce"
     ])
  }
</script>

<style lang="less">
  #vuexGetters {
    button {
      margin-top: 20px;
    }
    ul{
      li{
        line-height:30px;
      }
    }
  }
</style>

<template>
  <div id="transi">
   <!-- <button @click="show=!show">show/hide text</button>
    <transition name="fade" mode="out-in">
        <p v-if="show">Hello World</p>
    </transition>-->
    <h1>路由动画transition</h1>
    <ul>
      <li>
        <router-link to="/transition/aaa">aaa</router-link>
      </li>
      <li>
        <router-link to="/transition/bbb">bbb</router-link>
      </li>
    </ul>
    <div class="con">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
        name: "transi",
      data(){
          return {
            show:true
          }
      }
    }
</script>

<style scoped lang="less">
  #transi{
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave {
      opacity: 0;
    }
    li{
      line-height:22px;
    }
    .con{
      border:1px solid #e7ebf3;
      width:300px;
      height:200px;
    }
  }
</style>

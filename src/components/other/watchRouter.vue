<template>
  <div id="watchRouter">
    <h1>watch路由</h1>
    <ul>
      <li>
        <router-link to="/watchRouter/aaa">aaa</router-link>
      </li>
      <li>
        <router-link to="/watchRouter/bbb">bbb</router-link>
      </li>
      <li>
        <router-link to="/watchRouter/ccc">ccc</router-link>
      </li>
      <li>
        <router-link to="/sdfdsfdf">sdfdsfdf(404页面)</router-link>
      </li>
    </ul>
    <div class="con">
      <transition :name="transiName" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "watch-router",
    data() {
       return {
         transiName:"fade"
       }
    },
    methods: {},
    watch: {
      "$route"(to, from) {
          if(from.path=="/watchRouter/bbb"){
            this.transiName="fade2"
          }else{
            this.transiName="fade"
          }
      }
    }
  }
</script>

<style lang="less">
  #watchRouter {
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  .fade2-enter-active,.fade2-leave-active{
    transition:background 0.5s ease-in,color 0.3s ease-out;
  }
    .fade2-enter,.fade2-leave-to{
      background-color: #ccc;
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

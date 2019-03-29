<template>
  <div id="pageVuex">
    <ul>
      <li>
        <router-link to="/pageVuex/vuex1">vuex理论实践</router-link>
      </li>
      <li>
        <router-link to="/pageVuex/vuexMutations">vuex触发mutations与传参</router-link>
      </li>
      <li>
        <router-link to="/pageVuex/vuexGetters">vuex-getter</router-link>
      </li>
      <li>
        <router-link to="/pageVuex/vuexActions">vuex-actions</router-link>
      </li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pageVuex",
  }
</script>

<style lang="less">
  #pageVuex {
    padding: 20px;
    ul{
      margin-bottom:10px;
      li{
        line-height:30px;
        cursor: pointer;
        font-size:16px;
        a{
          color:#333;
          &.router-link-active{
            color:#f00
          }
        }
      }
    }
    .content{
      width:300px;
      height:500px;
      border:1px solid #e7ebf3;
      padding:10px;
      h1{
        font-size:20px;
        padding:10px 0;
        margin-bottom:20px;
        border-bottom:1px solid #ccc;
      }
    }
  }
</style>

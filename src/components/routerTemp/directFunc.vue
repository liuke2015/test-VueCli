<template>
    <div id="direct-func">
      <h1>路由重定向函数(ccc，使用了函数的方法)</h1>
      <ul>
        <li>
          <router-link to="/directFunc/aaa/001">aaa</router-link>
        </li>
        <li>
          <router-link to="/directFunc/bbb/002">bbb</router-link>
        </li>
        <li>
          <router-link to="/directFunc/ccc/003">ccc</router-link>
        </li>
      </ul>
      <div class="con">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "direct-func"
    }
</script>

<style lang="less">
  #direct-func{
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

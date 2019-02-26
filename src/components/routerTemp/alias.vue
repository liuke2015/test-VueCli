<template>
    <div id="alias-func">
      <h1>路由别名(alias)</h1>
      <transition name="fade">
        <p v-if="true">Hello World</p>
      </transition>
      <ul>
        <li>
          <router-link to="/alias/aaa">aaa</router-link>
        </li>
        <li>
          <router-link to="/alias/bbb">bbb</router-link>
        </li>
        <li>
          <router-link to="/alias/baa">baa-(bbb的别名)</router-link>
        </li>
        <li>
          <router-link to="/alias/ccc">ccc</router-link>
        </li>
        <li>
          <router-link to="/alias/caa">caa-(ccc的别名)</router-link>
        </li>
        <li>
          <router-link to="/alias/cbb">cbb-(ccc的别名)</router-link>
        </li>
      </ul>
      <div class="con">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "alias-func"
    }
</script>

<style lang="less">
  #alias-func{
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

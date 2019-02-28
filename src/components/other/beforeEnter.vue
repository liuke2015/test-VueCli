<template>
  <div id="beforeEnter">
    <h1>路由钩子</h1>
    <ul>
      <li>
        <router-link to="/beforeEnter/beforeA">beforeA</router-link>
      </li>
      <li>
        <router-link to="/beforeEnter/beforeB">beforeB</router-link>
      </li>
    </ul>
    <div class="con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "before-enter",
    beforeRouteEnter(to, from, next) {
      console.log(to);
      console.log(from);
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log(to);
      console.log(from);
      next();
    }
  }
</script>

<style scoped lang="less">
  li {
    line-height: 22px;
  }

  .con {
    border: 1px solid #e7ebf3;
    width: 300px;
    height: 200px;
  }
</style>

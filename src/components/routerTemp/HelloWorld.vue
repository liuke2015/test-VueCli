<template>
  <div class="hello">
    <h1>导航</h1>
    <ol>
      <li>
        <router-link to="/helloWorld/home">/</router-link>
      </li>
      <li>
        <router-link to="/helloWorld/first">first</router-link>
      </li>
      <li>
        <router-link to="/helloWorld/second">second</router-link>
      </li>
    </ol>
    <router-view></router-view>
    <router-view name="left" style="width:50%;height:200px;background: aliceblue;float:left"></router-view>
    <router-view name="right" style="width:50%;height:200px;background: #ff0;float:right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

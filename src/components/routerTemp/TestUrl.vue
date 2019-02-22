<template>
    <div id="TestUrl">
       <h1>路由url传参</h1>
      <ul>
        <!--path: '/'-->
        <li>
          <router-link to="/testUrl">/testUrl</router-link>
        </li>
        <!--path: 'params/:aaa/:bbb'-->
        <li>
          <router-link  to="/testUrl/params/111/222">
            /params/111/222
          </router-link>
        </li>
        <!--path: 'params-regex/:id(\\d+)'-->
        <li>
          <router-link  to="/testUrl/params-regex/222">
            /params-regex/222
          </router-link>
        </li>
      </ul>
      <p>Show</p>
      <pre>
        <code>
          aaa={{$route.params.aaa}}<!--111-->
          id={{$route.params.id}}<!--222-->
         <!-- obj={{routeData}}-->
        </code>
      </pre>
    </div>
</template>

<script>
    export default {
        name: "test-url",
      msg:"路由url传参",
      data(){
          return {
          /*  routeData:JSON.stringify(this.$route)*/
          }
      },
      watch:{
          '$route':function(newVal,oldVal){
           /* this.routeData= JSON.stringify(newVal)*/
          }
      }
    }
</script>

<style lang="less">
#TestUrl{
  padding:20px;
  h1{
    font-size:20px;
    line-height:40px;
  }
  li{
    line-height: 30px;
  }
  p{
    text-align: left;
    line-height:40px;
  }
  pre{
    text-align: left;
    background: #f6fbc3;
    code{
      text-align: left;
      line-height:30px;
    }
  }
}
</style>

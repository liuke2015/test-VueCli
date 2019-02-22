<template>
  <div id="TestQueryAppendExact">
    <h1>Query&&Append&&Exact导航</h1>
    <ul>
      <!--path: '/'-->
      <li>
        <router-link to="/testQuery/home">/home</router-link>
      </li>
      <!--path: 'params/:aaa/:bbb'-->
      <li>
        <router-link  to="/testQuery/users/her">/users</router-link>
        <ol>
          <li>
            <!--params需要用name-->
           <!-- <router-link :to="{name:'HelloWorld',params:{id:'123'}}">HelloWorld</router-link>-->
            <!--query可以不用name，只需要path-->
            <router-link :to="{path:'/testQuery/users/wos',query:{aaa:'bbb'}}">/wos</router-link>
          </li>
          <li>
            <router-link to="about" append>
              append
            </router-link>
          </li>
          <li>
            <router-link to="about" exact>
              exact
            </router-link>
          </li>
        </ol>
      </li>
    </ul>
    <h3>以下是router-view内容</h3>
    <router-view></router-view>
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
  #TestQueryAppendExact{
    padding:20px;
    h1{
      font-size:20px;
      line-height:40px;
    }
    h3{
      padding:30px 0;
    }
    li{
      line-height: 30px;
      &.router-link-active{
        a{
          color:#f66;
        }
      }
      a.router-link-active{
        color:#f66;
      }
      ol{
        padding-left:20px;
      }
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

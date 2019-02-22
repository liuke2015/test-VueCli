<template>
    <div id="enter">
      <div class="header">
        头部
      </div>
      <div class="content">
        <div class="left">
          <ul>
            <li>
              <router-link to="/helloWorld">路由的组件群</router-link>
            </li>
            <li>
              <router-link to="/testUrl">路由url传参</router-link>
            </li>
            <li>
              <router-link to="/testQuery">Query&Append&Exact</router-link>
            </li>
            <li>
              <router-link :to="{name:'directFunc',params:{id:333}}">路由重定向函数</router-link>
            </li>
          </ul>
        </div>
        <router-view class="right"></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "enter"
    }
</script>

<style lang="less">
   #enter{
     height:100%;
     display: flex;
     flex-direction: column;
     .header{
       width:100%;
       height:60px;
       background: #ddd;
     }
     .content{
       display: flex;
       flex:1;
       .left{
         width:150px;
         height:100%;
         background: #eee;
         ul{
           padding-top:10px;
         }
         li{
           height:50px;
           line-height:50px;
           cursor: pointer;
           background: none;
           a{
             display: block;
             &.router-link-active{
               background: #f3f3f3;
             }
           }
         }
       }
       .right{
         width:calc(~"100% - 150px");
         background: #fff;
       }
     }
   }
</style>

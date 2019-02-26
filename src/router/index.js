import Vue from 'vue'
import Router from 'vue-router'

import Enter from '@/components/enter'
import HelloWorld from '@/components/routerTemp/HelloWorld'
import TestUrl from '@/components/routerTemp/TestUrl'
import TestQuery from '@/components/routerTemp/TestQueryAppendExact'
import DirectFunc from '@/components/routerTemp/directFunc'
import AliasFun from  '@/components/routerTemp/alias'
import Transition from '@/components/other/transition'

Vue.use(Router)

const Home = {template: "<div>Home内容</div>"};
const first = {template: "<div>first内容</div>"};
const second = {template: "<div>second内容</div>"};
const left = {template: "<div>left内容</div>"};
const right = {template: "<div>right内容</div>"};
const about = {template: "<div>right内容</div>"};
const aaa = {template: "<div>aaa内容</div>"};
const bbb = {template: "<div>bbb内容</div>"};
const ccc = {template: "<div>ccc内容</div>"};
const users = {
  template: `
  <div>
      <h2>users内容</h2>
      <router-view></router-view>
</div>
  `
};
const user = {
  template: `
  <div>
  <br/>
      <h2>---user---</h2><br/>
      $route.params.lastName={{$route.params.lastName}}<br/><br/>
      $route.query.aaa={{$route.query.aaa}}
</div>
  `
};

let baseRouter=[
  {
    path: '/',
    name: 'Enter',
    component: Enter,
    redirect: 'helloWorld',
    children: [
      {
        path: 'helloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          title: "路由的组件群"
        },
        redirect: "/helloWorld/home",
        children: [
          {
            path: '/helloWorld/home',
            components: {
              default: Home,
              left: left,
              right: right
            }
          },
          {
            path: '/helloWorld/first',
            components: {
              default: first,
              left: left,
              right: right
            }
          },
          {
            path: '/helloWorld/second',
            components: {
              default: second,
              left: left,
              right: right
            }
          }
        ]
      },
      {
        path: 'testUrl',
        name: 'testUrl',
        component: TestUrl,
        meta: {
          title: "路由url传参"
        },
        redirect: "/testUrl",
        children: [
          {
            path: '/testUrl',
            component: TestUrl,
          },
          {
            path: '/testUrl/params/:aaa/:bbb',//: - 代表绑定
            component: TestUrl,
          },
          {
            path: '/testUrl/params-regex/:id(\\d+)',
            component: TestUrl,
          },
        ]
      },
      {
        path: 'testQuery',
        name: 'testQuery',
        meta: {
          title: "Query&&Append&&Exact"
        },
        component: TestQuery,
        redirect: "/testQuery/home",
        children: [
          {
            path: '/testQuery/home',
            component: Home,
          },
          {
            path: '/testQuery/users',
            name: "testQuery-users",
            component: users,
            redirect: "/testQuery/users/:lastName",
            children: [
              {
                path: "/testQuery/users/:lastName",//: - 代表绑定
                name: "user",
                component: user
              }
            ]
          },
          {
            path: 'about',
            component: about,
          },
        ]
      },
      {
        name: "directFunc",
        path: "directFunc",
        component: DirectFunc,
        meta: {
          title: "路由重定向"
        },
        redirect:"/directFunc/aaa/:id",
        /*   redirect: "/directFunc/aaa/:id",*/
        children: [
          {
            name: "",
            path: "/directFunc/aaa/:id",
            component: aaa,
          },
          {
            name: "",
            path: "/directFunc/bbb/:id",
            redirect: "/directFunc/aaa/:id"//重定向到aaa
          },
          {
            name: "",
            path: "/directFunc/ccc/:id",
            redirect: xxxx => {//函数方法
              const {hash, params, query} = xxxx;
              console.log("xxxx=");
              console.log(xxxx);
              if (params.id == "003") {
                return "/"
              }
            }
          }
        ]
      },
      {
        path: 'alias',
        name: 'alias',
        component: AliasFun,
        meta: {
          title: "路由的别名"
        },
        redirect: "/alias/aaa",
        children: [
          {
            path: '/alias/aaa',
            component: aaa
          },
          {
            path: '/alias/bbb',
            component: bbb,
            alias:"/alias/baa"
          },
          {
            path: '/alias/ccc',
            component:ccc,
            alias:["/alias/caa","/alias/cbb"]
          }
        ]
      },
      {
        path: 'transition',
        name: 'transition',
        component: Transition,
        meta: {
          title: "vue动画"
        },
        redirect:"/transition/aaa",
        children:[
          {
            path:"/transition/aaa",
            component:aaa,
            meta: {
              title: "vue动画a"
            },
          },
          {
            path:"/transition/bbb",
            component:bbb,
            meta: {
              title: "vue动画b"
            },
          }
        ]
      },
    ]
  },
];

let router=new Router({
  routes: baseRouter
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router

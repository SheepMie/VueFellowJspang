# vuetest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vscode配置vue
下载eslint插件后，在工作区设置里设置为
```
"files.autoSave":"off",
"eslint.validate": [
   "javascript",
   "javascriptreact",
   "html",
   { "language": "vue", "autoFix": true }
 ],
 "eslint.options": {
    "plugins": ["html"]
 }
```
### == 注意所有的install最好用cmd的不要用bash ==
> ### vue-cli

---

npm i -g vue-cli

npm i -g webpack 

npm i -g vue        //查看vue版本要-V V大写

vue init webpack vuetest(文件名)

起名要小写

cd vuetest

npm i

npm install protuction

==router/.js包括大部分js因为es6写法，不要有多余空格，注意书写格式，否则报错==

所有资源文件在src中，各种引入文件的解释参考[https://juejin.im/entry/58f48484da2f60005d3cb46c](http://note.youdao.com/)

==编辑.vue单页时最后一行要添加一个回车空白行==
> ### vue-router

---

import 的对象要与router的对象一一对应

> ### .vue单文件组件

---

调用组件时事件要添加.native,
```
 <my-button @click.native="buttonClick"></my-button>
```

## 要从main.js讲起了
```
import Vue from 'vue'       
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({               //vue构造器了
  el: '#app',           //index.html的作用域名
  router,               //引入router模块
  template: '<App/>',   //调用模板
  components: { App }   //引入组件
})
```

## 引入了APP就要看它是啥子东西了
组件，js操作，style样式都包进去了，但奇怪的是这里怎么又是一个id="app"呢，还有啊为什么Hello.vue的组件怎么跑到router-view里去了呢，那就要看main.js里引入的router模块了。
```

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
## router是个操刀手啊
你想要看到的变化的内容就是用router来实现啦
```
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'      //看到了没在这里引入了Hello组件了
import Hi from '@/components/Hi'            //试着添加一个吧

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello              //path地址为: '/'时调起Hello组件，现在你就可以像这样不断的加组件啦。只是记得要引入啊
    },{
      path: '/Hi',          //现在地址加Hi后就调出Hi组件啦
      name: 'Hi',
      component: Hi             
    }
  ]
})
```
## 组件怎么写勒
那就看看hello的例子啦
```
<template>
  <div class="hello">   //每个组件都要有一个父容器
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {        //这里就相当于一个构造器
  name: 'hello',        //给孩儿取个名吧
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

```
## 那么问题来啦，怎么在页面间相互跳转勒
那就要学习新标签啦<router-link to="/">hello</router-link>就是跳到hello页啦，聪明的你一定知道to="/Hi"就是hi页啦
记得一定要在router里引入啊，不然调的开裆裤都没了
``` 
拿app.vue开个刀
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">hello啊sir</router-link>|
      <router-link to="/hi">hi啥子hi啊</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
```
但是我要在组件里做页面跳转勒
``` 
那也没啥。只要在router里稍微改改就行哩，但要注意配置是子模块啦
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'      //看到了没在这里引入了Hello组件了
import Hi from '@/components/Hi'            //试着添加一个吧

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello              
    },{
      path: '/hi',        
      name: 'Hi',
      component: Hi,
      children:[
        {path:'/',component:Hi},
        {path:'hi1',name: hi1',component:Hi1},
        {path:'hi2',name: 'hi2',component:Hi2},
      ]
    }
  ]
})
```
## 好像在写点传参就可以挑大梁啦
传参呢，听说有两个方法，但其中一个基本废弃啦，就用流行语句吧
动态传参当然是写在事件里的啦，所以就在连接里写就好啦
```
<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
name是要跳转的地址，需要跟router里设置的name一样，params就是参数啦，键值对随便写
```
然后嘞，在调用的的组件写
```
{{$route.params.key}}
就能获取key值啦
```
当然啦，传参数的方法多了去啦，还有一种url传参是不是一样期待呢

首先路由配置写好来，跟node一样一样的，如果你希望newsId传的必须是个数字，还能在这里加正则呢
```
{
    path:'/params/:newsId/:newsTitle', //path:'/params/:newsId(\\d+)/:newsTitle'
     component:Params
}
```
然后获取
```
<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>
 
<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  }
}
</script>
```
写个rul传一下吧
```
<router-link to="/params/198/jspang website is very good">params</router-link> 
```
## 那能不能多个路由在同一页面，还能各自为王呢
当然扣以啦

首先在APP.vue中添加这几个路由组件
```

<router-view ></router-view>
 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-vie
```
然后在router里添加components，注意components是有s的
```

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:Hello,  //默认就叫做Hello
        left:Hi1,
        right:Hi2
      }
    },{
      path: '/Hi',
      components: {
        default:Hello,
        left:Hi2,
        right:Hi1
      }
    }
 
  ]
})
```
##  重定向redirect 
经常有这样的功能，要祖册登录后就跳转到首页就已经有登录的信息啦
```
router index

{
     path:'/goParams/:newsId(\\d+)/:newsTitle',
     redirect:'/params/:newsId(\\d+)/:newsTitle'
}
```

```
<router-link to="/goParams/198/jspang website is very good">params</router-link> 
```
这样就回到原来的页面还带上了参数啦

== 上面那个是改变了url的 ，还有可以不改变url的路径，就是将path加一个别名 ==
```
router index

{
     path:'/goParams/:newsId(\\d+)/:newsTitle',
     redirect:'/params/:newsId(\\d+)/:newsTitle',
     alias:'/gopage'
}
```
需要注意的是alias的路径是不能在path:'/'的情况下起作用的
```
<router-link to="/gopage">jspang</router-link>
```
##  页面切来切去很生硬，总得有些过渡咯
当然是有的啦
```
<transition name="fade">
  <router-view ></router-view>
</transition>
```
给router-view外添加一个<transition>就可以给router-view添加样式啦

style
```
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
```
##  加入地址错误，404页面怎么显示呢
```
{
   path:'*',
   component:Error
}
```
这里的path:’*’就是找不到页面时的配置，component是我们新建的一个Error.vue的文件。
```
/*vue组件*/
<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Error:404'
    }
  }
}
</script>
```
##  进出页面做个过度效果
使用组件的生命钩子，有两种方法
```
/*写在route中*/
{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
```
```
/* 写在组件中*/
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>
```
##  前进后退必须有啊，还有指定跳转
this.$router.go(-1) 和 this.$router.go(1)
```
<button @click="goback">后退</button>
```
```
<script>
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>
```
跳转指定页面this.$router.push(‘/xxx ‘)
```
<button @click="goHome">回到首页</button>
```
```
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
```
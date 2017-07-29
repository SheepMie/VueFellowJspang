import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import ChuancanUrl from '@/components/ChuancanUrl'

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
        {path:'hi1',name: 'Hi1',component:Hi1},
        {path:'hi2',name: 'Hi2',component:Hi2},
      ]
    },{
      path: '/chuancan/:newid/:topic',
      name: 'chuancan',
      component: ChuancanUrl
    }
    
  ]
})

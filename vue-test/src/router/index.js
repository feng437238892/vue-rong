import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
   {
   	path:'/',
   	redirect:'/pages/index',
   	meta:{
   		title:'首页'
   	}
   },
   {
   	path:'/pages/index',
    name:'index',
   	component:()=>import('@/pages/index'),
   	meta:{
   		title:'首页',
       keepAlive: false
   	}
   },
   {
     path:'/pages/menu/menu',
     name:'menus',
     component:()=>import('@/pages/menu/menu'),
     meta:{
       title:'菜单',
       keepAlive: false
     }
   },
   {
     path:'/pages/order/index',
     name:'order',
     component:()=>import('@/pages/order/index'),
     meta:{
       title:'订单',
       keepAlive: false
     }
   },
   {
     path:'/pages/fix/index',
     name:'fix',
     component:()=>import('@/pages/fix/index'),
     meta:{
       title:'定位',
       keepAlive: false
     } 
   },
   {
     path:'/pages/user/index',
     name:'user',
     component:()=>import('@/pages/user/index'),
     meta:{
       title:'用户',
       keepAlive: false
     } 
   },
   {
     path:'/pages/register/register',
     name:'register',
     component:()=>import('@/pages/register/register'),
     meta:{
         title:'注册',
         keepAlive: false
     }
   },
   {
     path:'/pages/product/product',
     name:'product',
     component:()=>import('@/pages/product/product'),
     meta:{
         title:'商品详情',
         keepAlive: false
     }
   },
   {
     path:'/pages/demo/demo',
     name:'demo',
     component:()=>import('@/pages/demo/demo'),
     meta:{
         title:'demo',
         keepAlive:true
     }
   },
   {
     path:'/pages/cart/cart',
     name:'cart',
     component:()=>import('@/pages/cart/cart'),
     meta:{
         title:'购物车'
     }
   },
   {
     path:'/pages/login/login',
     name:'UserLogIn',
     component:()=>import('@/pages/login/login'),
     meta:{
         title:'登录'
     }
   }
  ]
})


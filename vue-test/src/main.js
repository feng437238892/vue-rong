// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import mixins from './mixins'
import 'lib-flexible/flexible'
import vueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios
Vue.mixin(mixins)
Vue.use(vueDirectiveImagePreviewer)
Vue.use(preview)
Vue.use(ElementUI)
// Vue.use(Vuex)

Vue.config.productionTip = false;
//全局守卫
router.beforeEach((to, from, next) => {
         console.log(to,"to")
         console.log(to,"from")
         console.log(to,"next")
         const nextRoute = ['user', 'cart', 'product'] 
         if (nextRoute.indexOf(to.name) >= 0) { // 检测是否登录的页面
           if (!localStorage.getItem('user')) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
              if (from.name === 'UserLogIn') {
                next('/')
                return
              }
        　　　　// 登录后，跳到到当前页面
              router.push({
                name: 'UserLogIn',
                params: {redirect: to.fullPath}  
              })
            }
        }
        // 已登录状态；当路由到 UserLogIn 时，跳转至 Home
        // if (to.name === 'UserLogIn') {
        //   if (localStorage.getItem('user')) {
        //     next('/')
        //     return
        //   }
        // }
        // if(to.path == '/pages/index'){
        //       next();
        // }else if(localStorage.getItem('user')) {
        //          next();
        // }else{
        //         router.push({
        //           name: 'UserLogIn',
        //           params: {redirect: to.fullPath}  
        //         })
        //       // router.push({  path: "/pages/login/login"})
            
        //  }
        next()
    })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

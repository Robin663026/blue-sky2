
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import  'lib-flexible'
import  'px2rem-loader'
import news from './components/news/news'
import me from './components/me/me'
import order from './components/order/order'


Vue.use(VueRouter)
Vue.use(VueResource)
let router =new VueRouter({
  linkActiveClass:'active',
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/news'
    },
    {
      path:'/news',
      component:news
    },
    {
      path:'/me',
      component:me
    },
    {
      path:'/order',
      component:order
    }

  ]
})

new Vue({
  el:'#app',
  router,
  render:h=>h(App)
});




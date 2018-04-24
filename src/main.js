import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VuePreview from 'vue2-preview'
import FastClick from 'fastclick'
// FastClick.attach(document.body);
import './assets/css/common.less'

Vue.use(VuePreview)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/gif_loading.gif')
})


new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
});


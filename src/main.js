// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/index/index'
import UserInfo from './components/user/UserInfo'
import axios from 'axios'
import qs from 'qs';
import  { AlertPlugin } from 'vux';


Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.prototype.$axios = axios


Vue.prototype.$qs = qs;

const routes = [
  {
  path: '/',
  component: Home
  },{
    path: '/userInfo',
    component: UserInfo
  }]

const router = new VueRouter({
  routes,
  mode: "history"
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')


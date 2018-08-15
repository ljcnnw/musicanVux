// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import UserInfo from '../user/UserInfo'

Vue.use(VueRouter)

const routes = [{
  path: '/userInfo',
  component: UserInfo
}]

const router = new VueRouter({
  routes,
  mode:"history"
})

FastClick.attach(document.body)

Vue.config.productionTip = false

import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Stocks from './views/Stocks.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'startPage',
      component: Start
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },{
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    },
  ]
})

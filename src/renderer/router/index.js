import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/list',
      name: 'list',
      component: require('@/components/List').default
    },
    {
      path: '/add',
      name: 'add',
      component: require('@/components/Add').default
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import ModelBar from '@/components/ModelBar'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'ModelBar',
      component: ModelBar
    }
  ]
})

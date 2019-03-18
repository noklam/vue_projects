import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Team from './views/Team.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: () => import( './views/Team.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( './views/About.vue')
    },
    {
      path: '/button',
      name: 'button',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Button.vue')
    },

    {path: '/altair',
     name: 'altair',
     component: () => import(/* webpackChunkName: "about" */ './views/altair.vue')}
  ]
})

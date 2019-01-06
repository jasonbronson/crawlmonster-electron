import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      meta: { layout: 'no-sidebar' },
      component: require('@/components/Signin').default
    },
    {
      path: '/signup-page',
      name: 'signup',
      meta: { layout: 'no-sidebar' },
      component: require('@/components/Signup').default
    },
    {
      path: '/landing-page',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/settings',
      name: 'settings-page',
      component: require('@/components/SettingsPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

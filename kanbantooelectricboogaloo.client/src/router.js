import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'
import ActiveBoard from './pages/ActiveBoardPage'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadPage('ProfilePage'),
    beforeEnter: authGuard
    // utilized authoGuard for navigating to Boards page. Async useful for making sure only the user can get their boards
  },
  {
    path: '/activeboard/:boardId',
    name: 'ActiveBoardPage',
    component: ActiveBoard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router

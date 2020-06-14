import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')

  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')

  },
  {
    path: '/todotasks',
    name: 'TodoTasks',
    component: () => import(/* webpackChunkName: "about" */ '../views/todotasks/TodoTasks.vue')
  },
  {
    path: '/todotasks/create',
    name: 'TodoTasks Create',
    component: () => import(/* webpackChunkName: "about" */ '../views/todotasks/TodoTaskCreate.vue'),
    props: true
  },
  {
    path: '/todotasks/details/:id',
    name: 'TodoTasks Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/todotasks/TodoTaskDetails.vue'),
    props: true
  },
  {
    path: '/todotasks/edit/:id',
    name: 'TodoTasks Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/todotasks/TodoTaskEdit.vue'),
    props: true
  },
  {
    path: '/todotasks/delete/:id',
    name: 'TodoTasks Delete',
    component: () => import(/* webpackChunkName: "about" */ '../views/todotasks/TodoTaskDelete.vue'),
    props: true
  },
  {
    path: '/categories',
    name: 'TodoCategories',
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/Categories.vue')
  },
  {
    path: '/categories/create',
    name: 'TodoCategories Create',
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/CategoryCreate.vue')
  },
  {
    path: '/categories/details/:id',
    name: 'TodoCategories Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/CategoryDetails.vue'),
    props: true
  },
  {
    path: '/categories/edit/:id',
    name: 'TodoCategories Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/CategoryEdit.vue'),
    props: true
  },
  {
    path: '/categories/delete/:id',
    name: 'TodoCategories Delete',
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/CategoryDelete.vue'),
    props: true
  },
  {
    path: '/priorities',
    name: 'TodoPriorities',
    component: () => import(/* webpackChunkName: "about" */ '../views/priorities/Priorities.vue')
  },
  {
    path: '/priorities/create',
    name: 'TodoPriorities Create',
    component: () => import(/* webpackChunkName: "about" */ '../views/priorities/PriorityCreate.vue')
  },
  {
    path: '/priorities/details/:id',
    name: 'TodoPriorities Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/priorities/PriorityDetails.vue'),
    props: true
  },
  {
    path: '/priorities/edit/:id',
    name: 'TodoPriorities Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/priorities/PriorityEdit.vue'),
    props: true
  },
  {
    path: '/priorities/delete/:id',
    name: 'TodoPriorities Delete',
    component: () => import(/* webpackChunkName: "about" */ '../views/priorities/PriorityDelete.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // store.dispatch('fetchAccessToken');
  if (to.fullPath === '/todotasks' || to.fullPath === '/categories' || to.fullPath === '/priorities') {
    if (store.state.token === '') {
      next('/')
    }
  }
  if (to.fullPath === '/login' || to.fullPath === '/register') {
    if (store.state.token !== '') {
      next('/todotasks')
    }
  }
  next()
})

export default router

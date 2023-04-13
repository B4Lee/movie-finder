import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Movie from '../views/MovieView.vue'
import Actors from '../views/ActorsView.vue'
import ActorsDetail from '../views/ActorDetails.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie
    },
    {
      path: '/actors/',
      name: 'actors',
      component: Actors
    },
    {
      path: '/actor/:id',
      name: 'actor',
      component: ActorsDetail
    },
    {
      path: '/profile/',
      name: 'profile',
      component: ProfileView
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

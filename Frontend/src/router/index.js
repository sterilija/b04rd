import { createRouter, createWebHistory } from 'vue-router'

import PostsView from "../views/PostsView.vue";
import ProfileView from "../views/ProfileView.vue";
import AuthView from "../views/AuthView.vue";
import BrowseView from "../views/BrowseView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Browse',
      component: BrowseView
    },
    {
      path: '/posts',
      name: 'Posts',
      component: PostsView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/auth/register',
      name: 'Register',
      props: {registerMode: true},
      component: AuthView
    },
    {
      path: '/auth/login',
      name: 'Log in',
      props: {registerMode: false},
      component: AuthView
    },
  ]
})

export default router

import Vue from 'vue';
import Router from 'vue-router';

// Import your components here
// import AppSignup from '@/components/AppSignup.vue';
// import AppSignin from '@/components/AppSignin.vue';
import AppMovieGrid from '@/components/AppMovieGrid.vue'; 
import AppMoviesLayout from '@/components/AppMoviesLayout.vue';
//import AppHomePage from '@/components/AppHomePage.vue';
import AppHome from '@/views/AppHome.vue';
import AppProfile from '@/views/AppProfile.vue';
import { authGuard } from '../auth/authGuard';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/videos',
      name: 'AppMovieGrid',
      component: AppMovieGrid
    },

    /*
    {
      path: '/',
      name: 'Movies',
      component: AppMoviesLayout

    },
    */
    {
      path: '/',
      name: 'Home',
      component: AppHome

    },
    {
      path: '/movies',
      name: 'movies',
      component: AppMoviesLayout,
      beforeEnter: authGuard

    },
    {
      path: '/profile',
      name: 'profile',
      component: AppProfile,
      beforeEnter: authGuard
    }
    
    // Add other routes as needed
  ]
});

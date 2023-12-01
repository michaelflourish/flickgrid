import Vue from 'vue';
import Router from 'vue-router';

// Import your components here
import AppSignup from '@/components/AppSignup.vue';
import AppSignin from '@/components/AppSignin.vue';
import AppMovieGrid from '@/components/AppMovieGrid.vue'; 
import AppMoviesLayout from '@/components/AppMoviesLayout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppSignup',
      component: AppSignup
    },
    {
      path: '/signin',
      name: 'AppSignin',
      component: AppSignin
    },
    {
      path: '/videos',
      name: 'AppMovieGrid',
      component: AppMovieGrid
    },
    {
      path: '/movies',
      name: 'Movies',
      component: AppMoviesLayout

    }
    
    // Add other routes as needed
  ]
});

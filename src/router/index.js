import Vue from 'vue';
import Router from 'vue-router';

// Import your components here
// import AppSignup from '@/components/AppSignup.vue';
// import AppSignin from '@/components/AppSignin.vue';
import AppMovieGrid from '@/components/AppMovieGrid.vue'; 
import AppMoviesLayout from '@/components/AppMoviesLayout.vue';
import AppHomePage from '@/components/AppHomePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/videos',
      name: 'AppMovieGrid',
      component: AppMovieGrid
    },
    {
      path: '/callback',
      name: 'Movies',
      component: AppMoviesLayout

    },
    {
      path: '/',
      name: 'Home',
      component: AppHomePage

    }
    
    // Add other routes as needed
  ]
});

import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Import the entire Auth0 configuration object
import authConfig from '../auth_config.json';

// Import the Auth0 plugin
import { Auth0Plugin } from './auth';

// Install the authentication plugin using properties from the authConfig object
Vue.use(Auth0Plugin, {
  domain: authConfig.domain,
  clientId: authConfig.clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

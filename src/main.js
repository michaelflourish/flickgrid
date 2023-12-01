import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css';
import router from './router';

/*
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'; 

Amplify.configure(awsExports);

*/

import Amplify from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


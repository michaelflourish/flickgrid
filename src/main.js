import Vue from 'vue';
import App from './App.vue';
import './assets/styles.css';
import router from './router';


/*
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
Amplify.config(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules);

*/

/*
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
console.log(Amplify.configure(awsExports));
*/

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


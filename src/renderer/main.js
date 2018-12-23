import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import Toasted from './toasted'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faHome, faCogs, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faHome, faCogs, faTimes)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'), BootstrapVue)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  store,
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')

var config = {
  apiKey: "AIzaSyB47RcVszIVsIiwvCvnCk_UX0N0UDTgoF8",
  //authDomain: "crawlmonster-com.firebaseapp.com",
  databaseURL: "https://crawlmonster-com.firebaseio.com",
  storageBucket: "crawlmonster-com.appspot.com",
};
firebase.initializeApp(config);

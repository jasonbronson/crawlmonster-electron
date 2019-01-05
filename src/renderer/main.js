import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import toasted from './toasted'
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

const http = axios.create({
  baseURL: 'https://crawlmonster.test/api/',
  timeout: 8000,
  headers: {'X-Custom-Header': 'Crawlmonster Electron App'}
});

/* eslint-disable no-new */
window.App = new Vue({
  store,
  components: { App },
  router,
  template: '<App/>',
  http
}).$mount('#app')

var config = {
  apiKey: "AIzaSyB47RcVszIVsIiwvCvnCk_UX0N0UDTgoF8",
  authDomain: "crawlmonster-com.firebaseapp.com",
  databaseURL: "https://crawlmonster-com.firebaseio.com",
  projectId: "crawlmonster-com",
  storageBucket: "crawlmonster-com.appspot.com",
  messagingSenderId: "773666620772"
};
firebase.initializeApp(config);
Vue.prototype.$firebase = firebase

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index.js'
import router from './route/router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueAxios,axios)
Vue.use(MintUI)

axios.defaults.baseURL = 'http://webfrontend.duobb.cn'
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

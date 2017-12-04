import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import './common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

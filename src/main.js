import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './Bus.vue'
import VueLazyLoad from 'vue-lazyload'
import toast from 'components/common/toast'

Vue.prototype.$bus = Bus
Vue.use(toast)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

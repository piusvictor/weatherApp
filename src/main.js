import Vue from 'vue'
import WeatherApp from './WeatherApp.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(WeatherApp) }
}).$mount('#app')

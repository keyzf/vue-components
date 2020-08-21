import Vue from 'vue'
import App from './App.vue'
import dialog from './paskages/dialog'
import HelloWorld from './components/HelloWorld'
Vue.component('HelloWorld',HelloWorld)
Vue.use(dialog);
// import packages from './paskages'

// Vue.use(packages);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

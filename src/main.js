import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './router.js'
import VModal from 'vue-js-modal'
import Vuelidate from 'vuelidate'
import { store } from './store/store'
import VueProgressBar from 'vue-progressbar'
import firebase from 'firebase'
import moment from 'moment'
const options = {
  color: '#2ecc71',
  failedColor: '#874b4b',
  thickness: '18px',
  transition: {
    speed: '2.2s',
    opacity: '0.6s',
    termination: 400
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(Vuelidate);
Vue.use(VueProgressBar, options);
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

const router = new VueRouter({
  mode: 'history',
  routes
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('getCurrentUser', user);
 }
})
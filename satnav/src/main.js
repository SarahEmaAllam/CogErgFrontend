import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

import 'leaflet/dist/leaflet.css';

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload);
Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.config.productionTip = false
import VueGeolocation from "vue-browser-geolocation/src"
import * as VueGoogleMaps from 'vue2-google-maps'
import Buefy from 'buefy'
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});
import 'buefy/dist/buefy.css'



Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueGeolocation)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB1ED2DuS-ZEoCzoxhgGoj4EwdkiVwozMs'
  }
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App),

}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInstagram, faGithub, faLinkedinIn, faStackOverflow)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

// console.log(router);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

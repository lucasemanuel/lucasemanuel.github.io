import Vue from "vue";
import App from "./App.vue";
import VuePageTransition from "vue-page-transition";

import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
  faPhp,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faEnvelope,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faInstagram,
  faGithub,
  faLinkedinIn,
  faEnvelope,
  faPhp,
  faJs,
  faDatabase,
  faCogs
);

Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VuePageTransition);

// console.log(router);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

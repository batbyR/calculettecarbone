// import bootstrap from "./bootstrap";
import Vue from "vue";
import router from "./router";
import store from "./store/store";
import animate from "animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Axios from "axios";
import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import VModal from "vue-js-modal";

import App from "./CalculetteCarbone.vue";

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

window.Vue = require("vue");
window.Vuex = require("vuex");

Vue.use(animate);
Vue.use(Axios);
Vue.use(VModal, { dialog: true });

const files = require.context("./", true, /\.vue$/i);
files.keys().map(key =>
  Vue.component(
    key
      .split("/")
      .pop()
      .split(".")[0],
    files(key).default
  )
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

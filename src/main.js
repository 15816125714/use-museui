import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import MuseUi from "muse-ui";
console.log("MuseUi -------------- ", MuseUi);

import store from "./store";

Vue.use(MuseUi);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

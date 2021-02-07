import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import MuseUi from "muse-ui";
import Theme from "muse-ui/theme";

Theme.add("uemlib", {
  primary: "#ffd200",
  text: {
    primary: "#545252",
    secondary: "#545252",
    alternate: "",
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
}, "light")
Theme.use("uemlib");

import store from "./store";

Vue.use(MuseUi);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

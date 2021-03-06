import Vue from "vue";
import './plugins/vuetify'
import "./plugins/vuetify";
import App from "./App.vue";
import Trend from "vuetrend";
import router from './router'

Vue.config.productionTip = false;
Vue.use(Trend);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

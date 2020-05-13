import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueSilentbox from "vue-silentbox";
AOS.init({ disable: 'mobile' });
Vue.config.productionTip = false
Vue.use(VueSilentbox);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

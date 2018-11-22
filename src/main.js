import Vue from 'vue'
import App from './App';
import router from './router';
import VueChatScroll from 'vue-chat-scroll';
import VueClipboard from 'vue-clipboard2';
import VueAlert from '@vuejs-pt/vue-alert';
import moment from 'moment'

Vue.prototype.moment = moment

Vue.use(VueChatScroll)
Vue.use(VueAlert)
Vue.use(VueClipboard

)

VueClipboard.config.autoSetContainer = true
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




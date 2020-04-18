import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpinner, faEnvelope, faPhone, faFacebook, faTwitter, faLinkedinIn, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue' 

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */ 
import { faTwitter, faFacebookF, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons' 
import { faCartShopping, faAngleDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faTwitter, faFacebookF, faInstagram, faYoutube, faCartShopping, faAngleDown, faMagnifyingGlass)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

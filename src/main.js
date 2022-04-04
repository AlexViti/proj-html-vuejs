import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faMagnifyingGlass, faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'vue-resize/dist/vue-resize.css'
import VueResize from 'vue-resize'

import VueNumber from 'vue-number-animation'

import VueObserveVisibility from 'vue-observe-visibility'
import VueAnimateNumber from 'vue-animate-number'

library.add(faChevronUp, faFacebookF, faTwitter, faYoutube, faInstagram, faMagnifyingGlass, faLink)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueResize)
Vue.use(VueNumber)
Vue.use(VueObserveVisibility)
Vue.use(VueAnimateNumber)

Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App)
}).$mount('#app')

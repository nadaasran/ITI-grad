import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


library.add(faCartShopping)
library.add(faMagnifyingGlass)


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
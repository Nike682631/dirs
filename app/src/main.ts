import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCross, faPen, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faPen, faXmark)

const app = createApp(App)

app
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

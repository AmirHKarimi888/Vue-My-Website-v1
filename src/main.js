import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './api'
import cors from "cors"

// Vuetify
//import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})




createApp(App).use(cors).use(vuetify).use(router).mount('#app')

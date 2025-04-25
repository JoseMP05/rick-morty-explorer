import './assets/main.css'

import { createApp } from 'vue'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Asegúrate de importar los estilos de MDI
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

createApp(App).use(vuetify).mount('#app')

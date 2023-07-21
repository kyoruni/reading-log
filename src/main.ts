import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components: {
    ...components,
    VDataTable
  },
  directives,
  theme: {
    defaultTheme: 'light',
  },
})

createApp(App).use(vuetify).mount('#app')

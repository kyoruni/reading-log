import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import App from './App.vue'

import "primevue/resources/themes/saga-orange/theme.css"
import "primevue/resources/primevue.min.css"
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css"

createApp(App).use(PrimeVue).mount('#app')

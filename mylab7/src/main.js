import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import BootstrapVue, {BToastPlugin} from './BootstrapVue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//css
// import './assets/main.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Icon
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using

const vuetify = createVuetify({
  components,
  directives,
})




const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
// app.use(BootstrapVue)
app.mount('#app')
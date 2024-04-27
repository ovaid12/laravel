import "admin-lte/plugins/jquery/jquery.min.js"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"
import "admin-lte/dist/js/adminlte.min.js"
import 'vuetify/dist/vuetify.min.css';

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { createVuetify} from 'vuetify';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import route from './route'

const app = createApp({})
const vuetify = createVuetify({
    components,
    directives,
  })
  
 
const router = createRouter({
    routes: route,
    history: createWebHistory()
})

app.use(router)
app.use(vuetify)
app.mount('#app')

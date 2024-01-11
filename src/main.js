/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


import { registerPlugins } from '@/plugins'
import App from '@/App.vue';
import router from './router'
import { createApp } from 'vue'

const app = createApp(App)
app.use(router)

registerPlugins(app)

app.mount('#app')
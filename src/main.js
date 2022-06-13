import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes.js'
import "index.css"

createApp(App)
  .use(routes)
  .mount('#app')

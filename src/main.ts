import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'tailwindcss/tailwind.css' // Add this line to include Tailwind CSS styles
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' // Choose a PrimeVue theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


const app = createApp(App)

app.use(PrimeVue)
app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router'
import './styles/tokens.css'
import './styles/tailwind.css'
import './styles/reset.css'
import './styles/base.css'
import './styles/typography.css'
import './styles/forms.css'
import './styles/utilities.css'

createApp(App).use(createPinia()).use(router).use(autoAnimatePlugin).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

import './styles/css/normalize.css'
import './styles/less/index.less'
import router, { setupRouter } from '@/router/index'
import { setupPinia } from '@/store'
import { setupDirective } from '@/directive'
// import { setupAntElementPlus } from '@/plugins/elementPlus'

async function bootstrap() {
    const app = createApp(App)

    setupPinia(app)
    setupRouter(app)
    setupDirective(app)
    // setupAntElementPlus(app)

    await router.isReady()

    app.mount('#app')
}

bootstrap()

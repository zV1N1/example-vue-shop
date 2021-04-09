import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseBadge from './components/UI/BaseBadge.vue'

const app = createApp(App)

app.component('base-badge', BaseBadge)

app.use(router)
app.use(store)

router.isReady().then(function() {
    app.mount('#app')
})

//createApp(App).mount('#app')

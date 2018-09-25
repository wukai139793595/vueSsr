import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
export default function createApp() {
    return new Vue({
        store: store(),
        router: router(),
        render: createElement => createElement(App)
    })
}
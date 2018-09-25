
import router from 'vue-router'
import Vue from 'vue'
import Home from './components/home.vue'
import About from './components/about.vue'
import Center from './components/center.vue'

Vue.use(router)

export default function () {
    return new router({
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: About
            },
            {
                path: '/center',
                name: 'center',
                component: Center
            }
        ],
        mode: 'history'
    })
}
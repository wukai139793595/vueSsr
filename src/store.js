import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex);

export default function () {
    return new vuex.Store({
        state: {
            value: 'hi'
        },
        mutations: {
            setValue(state, value) {
                state.value = value
            }
        },
        actions: {
            getValue({commit}){
                return axios.get('http://127.0.0.1:3000/api/getValue').then(
                    (res) => commit('setValue', res.data)
                )
            }
        }
    })
}
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{ path: '/',component: require('../views/Main.vue') },
        { path: '/type/:type',component: require('../views/Main.vue') }]
})
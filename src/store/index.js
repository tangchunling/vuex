import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        goodslist:[

        ]
    },
    getters: {
        goodslist: state => state.goodslist
    }
})


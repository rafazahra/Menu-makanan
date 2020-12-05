import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        listAgenda: [
            { hari: 'KING DEALS CHEESY BEEF BURGER', kegiatan: '4' },
            { hari: 'KING CHICKEN BURGER', kegiatan: '2' }
        ]
    },
    mutations: {
        KONFIRMASI_AGENDA: (state, agenda) => {
            state.listAgenda.push(agenda)
        }
    },
    actions: {
        simpanAgenda({ commit, state }, agenda) {
            setTimeout(() => {
                commit('KONFIRMASI_AGENDA', agenda)
                state.isLoding = false 
            }, 1500)
        }
    }
})
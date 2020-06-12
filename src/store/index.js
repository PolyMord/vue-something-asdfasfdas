import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideIsOpen: false,
  },
  mutations: {
    openSide(state) {
      return state.sideIsOpen = !state.sideIsOpen
    }
  },
  actions: {},
  modules: {},
})

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideIsOpen: false,
    cards: []
  },
  mutations: {
    openSide(state) {
      return state.sideIsOpen = !state.sideIsOpen
    },

    createCards(state, count) {
      if (count > 20) count = 20
      if (count < 0) count = 0

      const countWords = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
      ]

      const cards = []
      for (let i = 0; i < count; i++) {
        const obj = {
          id: i + 1,
          title: countWords[i],
        }

        cards.push(obj)
      }
      return state.cards = cards
    },

    filterCards(state, input) {
      input = input.match(/\d/) ? +input : input
      
      let card
      if (typeof input === 'string') {
        card = state.cards.find(c => c.title === input)
      } else if (typeof input === 'number') {
        card = state.cards.find(c => c.id === input)
      }

      if (card) {
        state.cards = [card]
      } else {
        console.log('Nothing here')
      }
    },
  },
  actions: {},
  modules: {},
})

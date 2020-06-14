<template>
  <div class="home__head">
    <div class="home__wrap">
      <form class="home__search" @submit.prevent="searchHandler">
        <button type="submit" class="search__button">
          Search
        </button>
        <input
          type="text"
          id="search__input"
          class="search__input"
          v-model="input"
        />
      </form>
      <div class="home__filters">
        <button
          class="filters__button fillters__btnOne"
          @click="createCards(20)"
        >
          20
        </button>
        <button
          class="filters__button fillters__btnTwo"
          @click="createCards(10)"
        >
          10
        </button>
        <button
          class="filters__button fillters__btnThree"
          @click="createCards(5)"
        >
          5
        </button>
        <button
          class="filters__button fillters__btnFour"
          @click="filterCards('one')"
        >
          one
        </button>
        <button
          class="filters__button fillters__btnFive"
          @click="filterCards('two')"
        >
          two
        </button>
        <button
          class="filters__button fillters__btnSix"
          @click="filterCards('three')"
        >
          three
        </button>
      </div>
      <div class="home__buttons">
        <button class="buttons__button buttons__btnOne">@</button>
        <button class="buttons__button buttons__btnTwo">@</button>
        <button class="buttons__button buttons__btnThree">@</button>
        <button
          class="buttons__button buttons__btnFour"
          @click.stop="openProfile"
        >
          P
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"
export default {
  data: () => ({
    input: "",
  }),

  computed: {
    ...mapState({ isOpen: state => state.home.profile.isOpen }),
  },

  methods: {
    ...mapMutations(['filterCards', 'createCards', 'changeProfileStatus']), 

    searchHandler() {
      this.filterCards(this.input)
      this.input = ""
    },

    openProfile() {
      this.changeProfileStatus(true)
    },
  },
}
</script>

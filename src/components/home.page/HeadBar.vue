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
          @click="filteredCard('one')"
        >
          one
        </button>
        <button
          class="filters__button fillters__btnFive"
          @click="filteredCard('two')"
        >
          two
        </button>
        <button
          class="filters__button fillters__btnSix"
          @click="filteredCard('three')"
        >
          three
        </button>
      </div>
      <div class="home__buttons">
        <button class="buttons__button buttons__btnOne">@</button>
        <button class="buttons__button buttons__btnTwo">@</button>
        <button class="buttons__button buttons__btnThree">@</button>
        <button class="buttons__button buttons__btnFour">@</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    input: "",
  }),

  methods: {
    searchHandler() {
      this.$store.commit("filterCards", this.input)
      this.input = ""
    },

    filteredCard(title) {
      this.$store.commit("filterCards", title)
    },

    createCards(count) {
      return this.$store.commit("createCards", count)
    },
  },
}
</script>

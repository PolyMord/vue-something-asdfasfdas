<template>
  <div :class="sideIsOpen ? 'home__sidebar--open' : ''" class="home__sidebar">
    <div class="sidebar__header">
      <button class="sidebar__btn" @click.prevent="openSide">
        <div class="sidebar__btn-text">&#9776;</div>
      </button>
      <h3 class="sidebar__head">Sidebar</h3>
    </div>
    <div class="sidebar__content">
      <div class="sidebar__tweets" v-for="t of tweets" :key="t.id">
        <h4 class="sidebar__name">{{ t.name }}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          assumenda expedita. Aspernatur maiores similique cum ratione vel
          nulla.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  data: () => ({
    tweets: [
      { id: 0, name: "Name One" },
      { id: 1, name: "Name Two" },
      { id: 2, name: "Name Three" },
      { id: 3, name: "Name Four" },
      { id: 4, name: "Name Five" },
      { id: 5, name: "Name Six" },
      { id: 6, name: "Name Seven" },
      { id: 7, name: "Name Eight" },
    ],
  }),

  computed: {
    ...mapState({
      sideIsOpen: state => state.home.sideIsOpen,
    }),
  },

  methods: {
    ...mapMutations(["openSide"]),
  },
}
</script>

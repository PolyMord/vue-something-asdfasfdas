<template>
  <div class="home">
    <div
      :class="sideIsOpen ? 'home__main-section--open' : ''"
      class="home__main-section"
    >
      <HeadBar />
      <Main />
      <FootBar />
    </div>
    <Sidebar />
    <button @click.prevent="openSide" class="home__button">@</button>
  </div>
</template>

<script>
import HeadBar from "@/components/home.page/HeadBar.vue"
import Main from "@/components/home.page/Main.vue"
import Sidebar from "@/components/home.page/Sidebar.vue"
import FootBar from "@/components/home.page/FootBar.vue"

export default {
  name: "Home",
  components: {
    HeadBar,
    Main,
    Sidebar,
    FootBar,
  },

  computed: {
    sideIsOpen() {
      return this.$store.state.sideIsOpen
    },
  },

  methods: {
    openSide() {
      return this.$store.commit("openSide")
    },
  },
}
</script>

<style>
@import "../assets/home.assets/home.css";
</style>

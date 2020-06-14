<template>
  <div class="home">
    <Profile />
    <Login />
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
import Profile from "@/components/home.page/Profile.vue"
import Login from "@/components/home.page/Login.vue"
import { mapState, mapMutations } from 'vuex'

export default {
  name: "Home",
  components: {
    HeadBar,
    Main,
    Sidebar,
    FootBar,
    Profile,
    Login
  },

  computed: {
    ...mapState({
      sideIsOpen: state => state.home.sideIsOpen
    })
  },

  methods: {
    ...mapMutations(['openSide'])
  },
}
</script>

<style>
@import "../assets/home.assets/home.css";
</style>

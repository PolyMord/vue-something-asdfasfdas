<template>
  <div class="home">
    <Profile />
    <div
      :class="sideIsOpen ? 'home__main-section--open' : ''"
      class="home__main-section"
    >
      <HeadBar />
      <Main />
      <FootBar />
    </div>
    <Sidebar />
  </div>
</template>

<script>
import HeadBar from "@/components/home.page/HeadBar.vue"
import Main from "@/components/home.page/Main.vue"
import Sidebar from "@/components/home.page/Sidebar.vue"
import FootBar from "@/components/home.page/FootBar.vue"
import Profile from "@/components/home.page/Profile.vue"
import { mapState } from "vuex"

export default {
  name: "Home",
  components: {
    HeadBar,
    Main,
    Sidebar,
    FootBar,
    Profile,
  },

  computed: {
    ...mapState({ sideIsOpen: state => state.home.sideIsOpen }),
  },
}
</script>

<style>
@import "../assets/home.assets/home.css";
</style>

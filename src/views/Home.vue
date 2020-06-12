<template>
  <div class="home">
    <h1>This is a home page</h1>
    <div class="head">
      <HeadBar />
    </div>
    <div class="main">
      <Main />
    </div>
    <div class="menu">
      <Menu />
    </div>
    <div class="foot">
      <FootBar />
    </div>
  </div>
</template>

<script>
import HeadBar from "@/components/home.page/HeadBar.vue"
import Main from "@/components/home.page/Main.vue"
import Menu from "@/components/home.page/Menu.vue"
import FootBar from "@/components/home.page/FootBar.vue"

export default {
  name: "Home",
  components: {
    HeadBar,
    Main,
    Menu,
    FootBar,
  },
}
</script>

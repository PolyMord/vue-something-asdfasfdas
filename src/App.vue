<template>
  <div id="app" :class="isDarkTheme ? 'dark' : ''">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/empty.vue"
import MainLayout from "@/layouts/main.vue"
import { mapState } from "vuex"

export default {
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    ...mapState({ isDarkTheme: state => state.home.isDarkTheme }),
    layout() {
      return (this.$route.meta.layout || "main") + "-layout"
    },
  },
}
</script>

<style>
@import "./assets/app.assets/header.css";

body {
  margin: 0;
  padding: 0;
}
</style>

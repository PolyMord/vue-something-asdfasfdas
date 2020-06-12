<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/empty.vue"
import MainLayout from "@/layouts/main.vue"

export default {
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
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
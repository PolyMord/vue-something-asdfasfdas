<template>
  <div class="main">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/app/Header"

export default {
  components: {
    Header,
  },
}
</script>

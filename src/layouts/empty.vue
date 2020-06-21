<template>
  <div class="empty">
    <router-link class="back-btn" to="/">Back to Home</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style scoped>
.back-btn {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
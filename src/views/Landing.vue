<template>
  <div class="landing">
    <h1>This is a landing page</h1>
    <First />
    <Second />
    <Third />
  </div>
</template>

<script>
import First from "@/components/landing.page/First.vue"
import Second from "@/components/landing.page/Second.vue"
import Third from "@/components/landing.page/Third.vue"

export default {
  name: "Landing",
  components: {
    First,
    Second,
    Third,
  },
}
</script>

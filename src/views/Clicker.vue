<template>
  <div class="clicker">
    <h1>This is a clicker page</h1>
    <Canvas />
    <Upgrade />
    <Something />
  </div>
</template>

<script>
import Canvas from "@/components/clicker.page/Canvas.vue"
import Upgrade from "@/components/clicker.page/Upgrade.vue"
import Something from "@/components/clicker.page/Something.vue"

export default {
  name: "Clicker",
  components: {
    Canvas,
    Upgrade,
    Something,
  },
}
</script>

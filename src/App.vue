<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/clicker">Clicker</router-link>
      <router-link to="/typer">Typer</router-link>
      <router-link to="/landing">Landing</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.nav a:not(:last-child) {
  margin-right: 10px;
}
</style>
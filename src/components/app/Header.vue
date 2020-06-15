<template>
  <div class="header">
    <div class="login">
      <div class="login__logo">
        <img :src="logo" alt="" />
      </div>
      <div class="login__signIn">
        <a href="#" class="login__link">Sign In </a>
      </div>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/typer">Typer</router-link>
      <router-link to="/clicker">Clicker</router-link>
      <router-link to="/landing">Landing</router-link>
    </div>
    <div class="theme">
      <button class="theme__button" @click.stop="changeTheme">Dark</button>
      <div class="theme__img">
        <img :src="isDarkTheme ? toDark : toLight" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/home.assets/logo.png"
import toDark from "@/assets/home.assets/toDark.png"
import toLight from "@/assets/home.assets/toLight.png"
import { mapState, mapMutations } from "vuex"

export default {
  data: () => ({
    logo,
    toDark,
    toLight,
  }),

  computed: {
    ...mapState({ isDarkTheme: state => state.home.isDarkTheme }),
  },

  methods: {
    ...mapMutations(["changeTheme"]),
  },
}
</script>

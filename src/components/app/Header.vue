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
      <router-link to="/clicker">Clicker</router-link>
      <router-link to="/typer">Typer</router-link>
      <router-link to="/landing">Landing</router-link>
    </div>
    <div class="theme">
      <button class="theme__button">Dark</button>
      <div class="theme__img">
        <img :src="toDark" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/home.assets/logo.png"
import toDark from "@/assets/home.assets/toDark.png"
import toLight from "@/assets/home.assets/toLight.png"

export default {
  data: () => ({
    logo,
    toDark,
    toLight,
  }),
}
</script>

<style scoped>
.header {
  padding: 10px 2vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #2c3e50;
  background-color: #ccc;
}

.login {
  height: 100%;
  display: flex;
  align-items: center;
}
.login__logo img {
  display: flex;
  border-radius: 50%;
  border: thin solid black;
  cursor: pointer;
}
.login__signIn {
  margin: 0 10px;
  height: 25px;
  border: thin solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.login__link {
  height: 100%;
  display: block;
  line-height: 25px;
  color: black;
  text-decoration: none;
}

.nav {
  height: 100%;
  width: 40vw;
  max-width: 400px;
  background-color: #fff;
  border: thin solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.nav .router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
.nav a:not(:last-child) {
  margin-right: 10px;
}

.theme {
  height: 100%;
  display: flex;
  align-items: center;
}
.theme__button {
  margin: 0 10px;
  height: 25px;
  border: thin solid black;
  border-radius: 5px;
  background-color: inherit;
}
.theme__img img {
  display: flex;
  border-radius: 50%;
  cursor: pointer;
}
</style>

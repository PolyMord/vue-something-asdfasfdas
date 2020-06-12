import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: Home,
  },
  {
    path: "/clicker",
    name: "Clicker",
    meta: { layout: "main" },
    component: () => import("../views/Clicker.vue"),
  },
  {
    path: "/typer",
    name: "Typer",
    meta: { layout: "main" },
    component: () => import("../views/Typer.vue"),
  },
  {
    path: "/landing",
    name: "Landing",
    meta: { layout: "empty" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Landing.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

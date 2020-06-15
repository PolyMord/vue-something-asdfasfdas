<template>
  <div
    @click="closeProfile"
    class="profile"
    :class="[
      sideIsOpen ? 'profile--sideOpen ' : '',
      isOpen ? '' : 'profile--closed',
    ]"
  >
    <div class="profile__container">
      <h1 class="profile__head-one">
        {{ inputOne || "Profile" }}
      </h1>
      <h2 class="profile__head-two">
        {{ inputTwo || "Something" }}
      </h2>
      <h3 class="profile__head-three">{{ headThree }}</h3>
      <form class="profile__form">
        <div class="profile__input-one">
          <input
            placeholder="One"
            type="text"
            id="input-one"
            maxlength="10"
            v-model="inputOne"
          />
        </div>
        <div class="profile__input-two">
          <input
            placeholder="Two"
            type="text"
            id="input-two"
            maxlength="15"
            v-model="inputTwo"
          />
        </div>
        <button class="profile__button" @click.prevent="clickHandler">
          Button
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  data: () => ({
    inputOne: "",
    inputTwo: "",
    headThree: "Other",
  }),

  computed: {
    ...mapState({
      sideIsOpen: state => state.home.sideIsOpen,
      isOpen: state => state.home.profile.isOpen,
    }),
  },

  methods: {
    ...mapMutations(["changeProfileStatus"]),

    clickHandler() {
      if (!(this.inputOne && this.inputTwo)) {
        return (this.headThree = "Other")
      }
      return (this.headThree = this.inputOne + " " + this.inputTwo)
    },

    closeProfile(event) {
      if (event.target === event.currentTarget) {
        const result = confirm("Are you sure?")
        result ? this.changeProfileStatus(false) : result
      }
    },
  },
}
</script>

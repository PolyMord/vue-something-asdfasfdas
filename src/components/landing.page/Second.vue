<template>
  <div>
    <div
      class="L-second__header"
      :style="{ backgroundImage: 'url(' + background + ')' }"
    >
      <div class="L-header__container">
        <div class="L-header__logo">
          <img :src="logo" alt="logo" />
        </div>
        <div class="L-header__the-next">
          THE NEXT
        </div>
        <div class="L-header__big-thing">
          BIG THING IS HERE
        </div>
        <div data-aos="fade-right" class="L-header__small-text">
          OH, AND WE'ARE LAUNCHING OUR OWN THING THAT'S PRETTY COOL.
        </div>
      </div>
      <div class="L-second__email">
        <div class="L-email__container">
          <div data-aos="fade-right" class="L-email__left-text">
            <div class="L-email__big-text">
              Get an electronic mail when it’s ready.
            </div>
            <div class="L-email__small-text">
              That’s right — no stamps required.
            </div>
          </div>
          <form data-aos="fade-left" class="L-email__form">
            <div class="L-email__inputfield">
              <label class="L-email__label" for="L-email__input">EMAIL</label>
              <input class="L-email__input" id="L-email__input" type="text" />
            </div>
            <button
              class="L-email__submit-btn"
              type="submit"
              @click.prevent="submitHandler"
            >
              STAY INFORMED
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/landing.assets/img/L-logo.png"
import background from "@/assets/landing.assets/img/L-background.jpg"

export default {
  data: () => ({
    logo,
    background,
  }),
}
</script>
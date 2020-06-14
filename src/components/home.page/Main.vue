<template>
  <div class="home__main">
    <div class="home__card">
      <div class="home__image">
        <iframe
          src="https://www.youtube.com/embed/W8x4m-qpmJ8?t=90"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="home__content">
        <p>
          真情像草原广阔 层层风雨不能阻隔 总有云开 日出时候 万丈阳光照亮你我
          真情像梅花开遍 冷冷冰雪不能掩没 就在最冷 枝头绽放 看见春天走向你我
          雪花飘飘北风啸啸 天地一片苍茫
        </p>
      </div>
      <div class="home__action">
        <a href="#">Xue Hua Piao</a>
      </div>
    </div>
    <div class="home__card" v-for="c of cards" :key="c.id">
      <div class="home__image">
        <img :src="cardImgOne" />
      </div>
      <div class="home__content">
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
      </div>
      <div class="home__action">
        <a href="#">{{ "This is a link " + c.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import cardImgOne from "@/assets/home.assets/card_img_one.png"

export default {
  data: () => ({
    cardImgOne,
  }),

  computed: {
    ...mapState({
      cards: state => state.home.cards,
    }),
  },
}
</script>

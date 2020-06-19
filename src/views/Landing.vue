<template>
  <div class="landing">
    <First />
    <div class="container">
      <p data-aos="fade-up">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        asperiores esse ullam at vero sit illo. Modi, dolores. Atque
        necessitatibus voluptas illo architecto adipisci similique perferendis
        magnam, natus nulla officiis? Nemo ullam porro quibusdam ut dicta
        accusantium enim alias animi sapiente iusto veniam quis eum molestias
        hic, voluptas tempora architecto aperiam quam dolorem dolore cupiditate
        molestiae. Autem expedita quisquam totam. Omnis dolores, ab nam repellat
        id architecto ut fugiat itaque vel, at quod ullam. Magni illo nisi amet,
        cupiditate, officia autem fuga est recusandae voluptate odio nesciunt ad
        error quis! Ut ducimus aspernatur quos. Quia nostrum unde temporibus
        quis iusto asperiores. Iusto voluptate quaerat labore vero tempora
        numquam, rerum laboriosam deserunt necessitatibus ipsam accusantium
        reprehenderit ratione et explicabo suscipit praesentium! Explicabo
        possimus soluta officiis reprehenderit veritatis nostrum inventore
        obcaecati. Necessitatibus laborum iste, voluptatum accusamus maxime
        culpa vel eum doloribus placeat tempora enim fugit non animi quia odit
        iure eaque ipsa?
      </p>
      <p data-aos="fade-up">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        asperiores esse ullam at vero sit illo. Modi, dolores. Atque
        necessitatibus voluptas illo architecto adipisci similique perferendis
        magnam, natus nulla officiis? Nemo ullam porro quibusdam ut dicta
        accusantium enim alias animi sapiente iusto veniam quis eum molestias
        hic, voluptas tempora architecto aperiam quam dolorem dolore cupiditate
        molestiae. Autem expedita quisquam totam. Omnis dolores, ab nam repellat
        id architecto ut fugiat itaque vel, at quod ullam. Magni illo nisi amet,
        cupiditate, officia autem fuga est recusandae voluptate odio nesciunt ad
        error quis! Ut ducimus aspernatur quos. Quia nostrum unde temporibus
        quis iusto asperiores. Iusto voluptate quaerat labore vero tempora
        numquam, rerum laboriosam deserunt necessitatibus ipsam accusantium
        reprehenderit ratione et explicabo suscipit praesentium! Explicabo
        possimus soluta officiis reprehenderit veritatis nostrum inventore
        obcaecati. Necessitatibus laborum iste, voluptatum accusamus maxime
        culpa vel eum doloribus placeat tempora enim fugit non animi quia odit
        iure eaque ipsa?
      </p>
      <p data-aos="fade-up">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        asperiores esse ullam at vero sit illo. Modi, dolores. Atque
        necessitatibus voluptas illo architecto adipisci similique perferendis
        magnam, natus nulla officiis? Nemo ullam porro quibusdam ut dicta
        accusantium enim alias animi sapiente iusto veniam quis eum molestias
        hic, voluptas tempora architecto aperiam quam dolorem dolore cupiditate
        molestiae. Autem expedita quisquam totam. Omnis dolores, ab nam repellat
        id architecto ut fugiat itaque vel, at quod ullam. Magni illo nisi amet,
        cupiditate, officia autem fuga est recusandae voluptate odio nesciunt ad
        error quis! Ut ducimus aspernatur quos. Quia nostrum unde temporibus
        quis iusto asperiores. Iusto voluptate quaerat labore vero tempora
        numquam, rerum laboriosam deserunt necessitatibus ipsam accusantium
        reprehenderit ratione et explicabo suscipit praesentium! Explicabo
        possimus soluta officiis reprehenderit veritatis nostrum inventore
        obcaecati. Necessitatibus laborum iste, voluptatum accusamus maxime
        culpa vel eum doloribus placeat tempora enim fugit non animi quia odit
        iure eaque ipsa?
      </p>

      <div class="lorem">
        <span v-for="s of typedText(this.text, 50)" :key="s.delay">
          <span
            data-aos-offset="50"
            data-aos="fade"
            :data-aos-delay="s.delay"
            data-aos-duration="50"
            >{{ s.value }}</span
          >
        </span>
      </div>
    </div>
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

  data: () => ({
    text: "Lorem ipsum",
  }),

  methods: {
    typedText(text, step = 100) {
      /**
       * @param {number} step - 50, 100, 150 etc.
       */

      if (step < 50) step = 50
      if (step * text.length > 3000) step = 250
      if (step % 50 !== 0) step -= step % 50

      let delay = 0
      return text.split("").map(l => {
        return {
          value: l,
          delay: (delay += step),
        }
      })
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 35vw;
}
.container p {
  text-align: start;
  text-indent: 1rem;
}
.lorem {
  display: inline-block;
  font-size: 2rem;
}
</style>

<template>
  <div class="first">
    <div class="head">
      <h1 class="head__wrap">
        <div data-aos="fade" class="head__item">This is a landing page</div>
      </h1>
    </div>
    <div class="text">
      <p data-aos="fade-left">
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
    </div>
    <div class="img">
      <img data-aos="fade-right" :src="imgFive" alt="" />
    </div>
    <div class="type-text">
      <span>Lorem, ipsum.</span>
    </div>
  </div>
</template>

<script>
import imgFive from "@/assets/landing.assets/img/imgFive.png"

export default {
  data: () => ({
    imgFive,
  }),
}
</script>

<style scoped>
@import "../../assets/landing.assets/landing.css";

.first {
  height: 100vh;
}

.text {
  border: thin solid black;
}
.text p {
  width: 50%;
  text-align: start;
  text-indent: 1rem;
}

.img {
  border: thin solid black;
  display: flex;
  justify-content: flex-end;
}

.type-text {
  border: thin solid black;
  height: 16vh;
}

.head {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head__wrap {
  margin: 0;
  position: relative;
  height: 3rem;
  width: 35vw;
}
.head__item {
  position: absolute;
  white-space: nowrap;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: noise-shift 4s linear infinite alternate-reverse;
}
</style>

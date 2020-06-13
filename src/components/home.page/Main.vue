<template>
  <div class="home__main">
    <div class="home__card" v-for="c of cards" :key="c.id">
      <div class="home__image">
        <img src="images/sample-1.jpg" />
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
export default {
  data: () => ({
    // cards: [
    //   { id: 0, title: "one", img: cardImg_one },
    //   { id: 1, title: "two", img: cardImg_two },
    //   { id: 2, title: "three", img: cardImg_three },
    //   { id: 3, title: "four", img: cardImg_four },
    //   { id: 4, title: "five", img: cardImg_five },
    //   { id: 5, title: "six", img: cardImg_six },
    //   { id: 6, title: "seven", img: cardImg_seven },
    //   { id: 7, title: "eight", img: cardImg_eight },
    //   { id: 8, title: "nine", img: cardImg_nine },
    //   { id: 9, title: "ten", img: cardImg_ten },
    //   { id: 10, title: "eleven", img: cardImg_eleven },
    //   { id: 11, title: "twelve", img: cardImg_twelve },
    //   { id: 12, title: "thirteen", img: cardImg_thirteen },
    //   { id: 13, title: "fourteen", img: cardImg_fourteen },
    //   { id: 14, title: "fifteen", img: cardImg_fifteen },
    //   { id: 15, title: "sixteen", img: cardImg_sixteen },
    // ],
    cards: [],
  }),
  methods: {
    createCards(count) {
      if (count > 20) count = 20
      if (count < 0) count = 0

      const countWords = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
      ]

      const cards = []
      for (let i = 0; i < count; i++) {
        const obj = {
          id: i,
          title: countWords[i],
          img: `cardImg__${countWords[i]}`,
        }

        cards.push(obj)
      }
      return (this.cards = cards)
    },
  },
  mounted() {
    this.createCards(20)
  },
}
</script>

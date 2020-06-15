<template>
  <div class="typer">
    <h1>This is a typer page</h1>
    <div class="content">
      <div class="stats">
        <span>Score: {{ score }}</span>
        <span>Time: {{ (this.time * 0.01).toFixed(2) }}</span>
      </div>
      <p class="text">
        {{ text }}
      </p>
      <input
        type="text"
        class="input"
        v-model="input"
        @keyup.stop="generalKeys"
      />
      <div class="end">
        <span
          ><strong>WPM: {{ WPM }}</strong></span
        >
        <span
          ><strong>CPM: {{ CPM }}</strong></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Typer",

  data: () => ({
    text: "",
    input: "",
    value: [],
    texts: [
      "lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "eat",
      "play",
      "game",
      "work",
      "elit",
    ],
    score: 0,
    time: 0,
    WPM: 0,
    CPM: 0,
  }),

  methods: {
    generalKeys(e) {
      if (e.key === " ") {
        if (this.input.trim() === this.text) {
          this.input = ""
          this.score++
          this.randText()
        } else console.log("ыыы")
      }
    },

    timer() {
      const time = setInterval(() => {
        this.time++
        if (this.time === 6000) {
          clearInterval(time)
          this.WPM = this.score
          this.CPM = this.score * 5
        }
      }, 10)
    },

    randText() {
      return (this.text = this.texts[
        Math.floor(Math.random() * this.texts.length)
      ])
    },
  },

  mounted() {
    this.timer()
    this.randText()
  },
}
</script>

<style scoped>
.typer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  padding: 20px;
  border: thin solid black;
  border-radius: 10px;
}
.text {
  border: thin solid black;
  border-radius: 10px;
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  border: thin solid black;
  border-radius: 10px;
  box-sizing: border-box;
  height: 30px;
  width: 200px;
  outline: none;
}
.stats,
.end {
  display: flex;
  justify-content: space-between;
}
</style>

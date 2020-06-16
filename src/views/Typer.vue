<template>
  <div class="typer">
    <h1>This is a typer page</h1>
    <div class="content">
      <div class="stats">
        <span>Score: {{ score }}</span>
        <span>Time: </span>
      </div>
      <p class="text">
        <span style="background: green; color: white;">{{ typedWords.join(' ') }}</span>
        <span style="background: yellow; color: black;">{{ currentWord }}</span>
        <span>{{ untypedWords.join(' ')}}</span>
      </p>
      <input
        type="text"
        class="input"
        v-model="input"
        @keyup.stop="generalKeys"
        @input.stop="matchWord"
      />
      <div class="end">
        <span>
          <strong>WPM: </strong>
        </span>
        <span>
          <strong>CPM: </strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Typer",

  data: () => ({
    text: "lorem ipsum dolor sit amet eat play game work elit",
    input: "",
    allWords: [],
    untypedWords: [],
    typedWords: [],
    currentWord: "",
    idx: 0,
    charIdx: 0,
    score: 0,
  }),

  methods: {
    takeWord(idx) {
      this.untypedWords.shift()
      this.currentWord = this.allWords[idx]
    },

    matchWord(e) {
      if (this.currentWord) {
        const word = this.currentWord.split("")
        if (e.target.value[this.charIdx] === word[this.charIdx]) {
          console.log(word[this.charIdx])
          this.charIdx++
        }
      }
    },

    generalKeys(e) {
      if (e.key === " ") {
        if (this.input.trim() === this.currentWord) {
          this.input = ""
          this.score++
          this.charIdx = 0
          this.typedWords.push(this.allWords[this.idx])
          this.idx++
          this.takeWord(this.idx)
          console.log("норм")
        } else {
          console.log("ошибка")
        }
        if (this.allWords.length === this.idx) console.log("конец")
      }
    },

    init() {
      this.allWords = this.text.split(" ")
      this.untypedWords = [...this.allWords]
      this.takeWord(this.idx)
    },
  },

  mounted() {
    this.init()
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
  width: 300px;
  height: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: thin solid black;
  border-radius: 10px;
}
.text {
  white-space: wrap;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: thin solid black;
  border-radius: 10px;
}
.input {
  box-sizing: border-box;
  padding-left: 5px;
  height: 30px;
  outline: none;
  border: thin solid black;
  border-radius: 10px;
}
.stats,
.end {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>

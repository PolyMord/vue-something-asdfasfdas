<template>
  <div class="typer">
    <h1>This is a typer page</h1>
    <div v-if="play" class="content">
      <div>
        <span>Time: {{ time }}</span>
      </div>
      <div class="text" :class="starting ? 'text--starting' : ''">
        <div>
          <span class="typedText">{{ typedText.join(" ") }}</span
          >&nbsp;
          <span class="inputWord">{{ inputWord.join("") }}</span>
          <span v-if="error.length" class="error">{{ error.join("") }}</span>
          <span class="untypedWord">{{ untypedWord.join("") }}</span>
          <span class="untypedText"> {{ untypedText.join(" ") }}</span>
        </div>
      </div>
      <input
        ref="input"
        type="text"
        class="input"
        :class="[
          starting ? 'input--starting' : '',
          error.length ? 'input--error' : '',
        ]"
        v-model="input"
        @keydown="match"
        readonly
      />
    </div>
    <div v-else>
      <div class="end">
        <div class="stats">
          <span>
            <strong>Time: {{ time }}s</strong>
          </span>
          <span>
            <strong>WPM: {{ WPM }}</strong>
          </span>
          <span>
            <strong>CPM: {{ CPM }}</strong>
          </span>
        </div>
        <button class="btn-start" @click.stop="start">Start</button>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * - Верстка
 * - Считаются ли пробелы за слова?
 * - Доработка подсчета WPM/CPM
 * - Рефакторинг
 */


export default {
  name: "Typer",

  data: () => ({
    allTexts: [
      `Which was increased by the two guardsmen, who took sides with one of the loungers.`,
      `As he spoke the gleam of the sidelights of a carriage came round the curve of the avenue.`,
      `It was a smart little landau which rattled up to the door of Briony Lodge.`,
      `As it pulled up, one of the loafing men at the corner dashed forward to open the door.`,
      `In the hope of earning a copper, but was elbowed away by another loafer.`,
      `Who had rushed up with the same intention. A fierce quarrel broke out.`,
    ],
    text: [],
    input: "",
    currentWord: [],
    typedWord: [],
    untypedWord: [],
    inputWord: [],
    error: [],
    idx: 0,
    typedText: [],
    untypedText: [],
    play: false,
    time: 0,
    timer: null,
    WPM: 0,
    CPM: 0,
    starting: false,
  }),

  methods: {
    match() {
      const charList = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?:;'" `
      const key = event.key

      if (
        key === " " &&
        this.inputWord.length === this.currentWord.length &&
        !this.error.length
      ) {
        this.next()
      } else if (event.ctrlKey && key === "Backspace") {
        event.preventDefault()
      } else if (key === "Backspace") {
        this.isBackspace()
      } else if (charList.indexOf(key) !== -1) {
        this.isCorrect(key)
      }
    },

    isCorrect(key) {
      if (key === this.currentWord[this.idx] && !this.error.length) {
        this.inputWord.push(this.untypedWord.shift())
        this.idx++

        if (this.inputWord.length === this.currentWord.length) {
          if (this.typedText.length + 1 === this.text.length) {
            this.end()
          }
        }
      } else {
        if (this.input.length >= this.currentWord.length) {
          this.error.push(key)
        } else {
          this.error.push(this.untypedWord.shift())
          this.idx++
        }
      }
    },

    isBackspace() {
      if (!this.idx && !this.inputWord.length) {
        this.untypedWord = [...this.currentWord]
      } else if (!this.error.length) {
        this.untypedWord.unshift(this.inputWord.pop())
        this.idx--
      } else if (this.error.length) {
        if (this.input.length > this.currentWord.length) {
          this.error.pop()
        } else {
          this.untypedWord.unshift(this.error.pop())
          this.idx--
        }
      }
    },

    next() {
      this.typedText.push(this.currentWord)
      this.currentWord = this.untypedText.shift()
      this.untypedWord = [...this.currentWord]
      this.inputWord = []
      this.idx = 0
      setTimeout(() => (this.input = "")) // нужно для избавления от пробела
    },

    rand() {
      return this.allTexts[Math.floor(Math.random() * this.allTexts.length)]
    },

    init() {
      this.text = this.rand().split(" ")
      this.untypedText = [...this.text]
      this.currentWord = this.untypedText.shift()
      this.untypedWord = [...this.currentWord]
    },

    start() {
      this.untypedText = []
      this.currentWord = []
      this.untypedWord = []
      this.typedWord = []
      this.inputWord = []
      this.typedText = []
      this.error = []
      this.play = true
      this.input = ""
      this.time = 0
      this.idx = 0
      this.init()
      this.starting = true
      setTimeout(() => {
        this.timer = setInterval(() => this.time++, 1000)
        this.$refs.input.readOnly = false
        this.$refs.input.select()
        this.starting = false
      }, 2000)
    },

    end() {
      this.play = false
      clearInterval(this.timer)
      this.CPM = this.text.length * 5 * Math.floor(60 / this.time)
      this.WPM = this.text.length * Math.floor(60 / this.time)
    },
  },
}
</script>

<style scoped>
.typedText {
  color: #99cc00;
}
.typedWord {
  color: green;
}
.inputWord {
  color: #99cc00;
}
.error {
  background-color: red;
  color: white;
}
.untypedWord {
  text-decoration: underline;
}

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
  margin: 10px 0;
  white-space: wrap;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: thin solid black;
  border-radius: 10px;
  background: white;
  user-select: none;
  font-size: 1.2rem;
}
.text--starting {
  background: grey;
}
.input {
  box-sizing: border-box;
  padding-left: 5px;
  height: 30px;
  outline: none;
  border: thin solid black;
  border-radius: 10px;
  background: white;
  color: black;
}
.input--error {
  background: red;
  color: white;
}
.input--starting {
  background: grey;
}
.end {
  border: thin solid;
  border-radius: 10px;
  width: 300px;
  height: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.stats {
  border: thin solid;
  border-radius: 10px;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.btn-start {
  margin-top: 10px;
  border: thin solid;
  border-radius: 10px;
  height: 30px;
}
</style>

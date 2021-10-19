class Sphinx {
  constructor() {
    this.name = null
    this.riddles = []
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if(this.riddles.length === 4) {
      this.riddles.shift()
    }
  }

  attemptAnswer(answer) {
    if()
  }
}

module.exports = Sphinx

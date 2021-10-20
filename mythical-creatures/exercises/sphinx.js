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
    for (let i = 0; i < this.riddles.length; i++) {
      if(this.riddles[i].answer === answer) {
        this.riddles.splice(i, 1)
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    }
  }
}

module.exports = Sphinx

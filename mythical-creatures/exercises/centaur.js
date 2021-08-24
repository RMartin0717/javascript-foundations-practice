class Centaur {
  constructor({name: name, type: type}) {
    this.name = name
    this.breed = type
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.actionCount = 0
  }

  action() {
    this.actionCount++
    if (this.actionCount >= 3) {
      this.cranky = true
    }
  }

  shootBow() {
    this.action()
    if (this.cranky || this.layingDown) {
      return 'NO!'
    } else {
      return 'Twang!!!'
    }
  }

  run() {
    this.action()
    if (this.cranky || this.layingDown) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    }
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false
      this.actionCount = 0
    } else {
      return 'Not while I\'m laying down!'
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!'
    } else {
      this.cranky = false
      this.actionCount = 0
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }
}

module.exports = Centaur

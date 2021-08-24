class Centaur {
  constructor({name: name, type: type}) {
    this.name = name
    this.breed = type
    this.cranky = false
    this.standing = true
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
    if (this.cranky) {
      return 'NO!'
    } else {
      return 'Twang!!!'
    }
  }

  run() {
    this.action()
    if (this.cranky) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    }
  }
}

module.exports = Centaur

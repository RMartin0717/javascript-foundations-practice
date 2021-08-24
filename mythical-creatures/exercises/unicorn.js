class Unicorn {
  constructor(name, color) {
    this.name = name
    if (color) {
      this.color = color
    } else {
      this.color = 'white'
    }
  }

  isWhite() {
    return this.color === 'white'
  }

  says(phrase) {
    return `**;* ${phrase} *;**`
  }
}

module.exports = Unicorn

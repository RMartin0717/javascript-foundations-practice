class Magician {
  constructor({ name: name, assistant: assistant, clothing: clothing }) {
    this.name = `The Great ${name}`
    this.assistant = assistant
    this.favoriteAccessory = clothing || 'top hat'
    this.confidencePercentage = 10
  }

  performIncantation(spell) {
    this.confidencePercentage += 10
    return `${spell.toUpperCase()}!`
  }

  performTrick() {
    this.confidencePercentage += 10
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

}

module.exports = Magician

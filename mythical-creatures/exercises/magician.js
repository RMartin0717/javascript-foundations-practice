class Magician {
  constructor({ name: name, assistant: assistant, clothing: clothing }) {
    this.name = `The Great ${name}`
    this.assistant = assistant
    this.favoriteAccessory = clothing || 'top hat'
  }

  performIncantation(spell) {
    return `${spell.toUpperCase()}!`
  }
}

module.exports = Magician

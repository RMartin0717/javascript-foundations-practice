class Magician {
  constructor({ name: name, assistant: assistant, clothing: clothing }) {
    this.name = `The Great ${name}`
    this.assistant = assistant
    this.favoriteAccessory = clothing || 'top hat'
  }
}

module.exports = Magician

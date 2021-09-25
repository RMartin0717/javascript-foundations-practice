class Ogre {
  constructor({ name: name, abode: home }) {
    this.name = name
    this.home = home || 'Swamp'
    this.swings = 0
  }
  encounter(human) {
    human.encounterCounter++
    human.noticesOgre()
    if (human.noticesOgre()) {
      this.swings++
    }
    if (this.swings % 2 === 0 && this.swings !== 0) {
      human.knockedOut = true
    }
  }

  swingAt(human) {
    this.swings++
  }
}

module.exports = Ogre

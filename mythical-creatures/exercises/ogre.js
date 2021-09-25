class Ogre {
  constructor({ name: name, abode: home }) {
    this.name = name
    this.home = home || 'Swamp'
  }
  encounter(human) {
    human.encounterCounter++
    human.noticesOgre()
  }
}

module.exports = Ogre

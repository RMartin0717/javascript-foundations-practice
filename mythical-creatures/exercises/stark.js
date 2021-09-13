class Stark {
  constructor({ name: name, area: location }) {
    this.name = name
    this.location = location || 'Winterfell'
    this.safe = false
  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers'
    } else {
      return 'Winter is Coming'
    }
  }
}

module.exports = Stark

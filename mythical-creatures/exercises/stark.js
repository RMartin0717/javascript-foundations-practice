const Direwolf = require('../exercises/direwolf')

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

  callDirewolf(name, location) {
    const direwolf = new Direwolf(name, this.location)
    direwolf.protect(this)
    return direwolf
  }
}

module.exports = Stark

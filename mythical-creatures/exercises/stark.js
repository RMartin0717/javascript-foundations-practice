class Stark {
  constructor({ name: name, location: location }) {
    this.name = name
    this.location = location || 'Winterfell'
    this.starksToProtect = []
  }
}

module.exports = Stark

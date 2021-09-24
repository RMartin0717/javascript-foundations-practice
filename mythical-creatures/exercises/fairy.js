class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = { dresses: ['Iris']}
  }

  receiveBelief() {
    this.dust += 1
  }

  believe() {
    this.dust += 10
  }

  makeDresses(flowers) {
    this.clothes.dresses = [...this.clothes.dresses, ...flowers]
  }
}

module.exports = Fairy

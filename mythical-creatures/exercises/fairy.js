class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = { dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
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

  becomeProvoked() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards = [...this.humanWards, infant]
      let changeling = infant
      changeling.disposition = 'Malicious'
      if (this.humanWards.length >= 3) {
        this.disposition = 'Good natured'
      }
      return changeling
    } else {
      return infant
    }
  }
}

module.exports = Fairy

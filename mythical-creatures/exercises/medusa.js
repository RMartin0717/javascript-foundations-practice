var Person = require('../exercises/person');
var Statue = require('../exercises/statue');

class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }

  gazeAtVictim(person) {
    var newStatue = new Statue(person.name)
    this.statues.push(newStatue)
    if (this.statues.length > 3) {
      var freePerson = new Person(this.statues[0].name)
      freePerson.mood = 'relieved'
      this.statues.shift()
      return freePerson
    }
  }
}

module.exports = Medusa

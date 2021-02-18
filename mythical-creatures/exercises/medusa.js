var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    if (this.statues.length < 3) {
      var newStatue = new Statue(victim.name);
      this.statues.push(newStatue);
    } else {
      var humanAgain = new Person(this.statues[0].name);
      humanAgain.mood = "relieved";
      this.statues.shift();
      var newStatue = new Statue(victim.name);
      this.statues.push(newStatue);
      return humanAgain;
    }
  }
}

module.exports = Medusa;

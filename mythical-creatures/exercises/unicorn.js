class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
    } else {
      this.color = color;
    }
  }
  isWhite() {
    return this.color === "white";
  }
  says(saySomething) {
    return `**;* ${saySomething} *;**`
  }
}

module.exports = Unicorn;

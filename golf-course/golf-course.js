class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name
    this.difficulty = difficulty
    this.openings = openings
    this.features = features
    this.currentlyPlaying = []
  }

  checkInGroup(group) {
    if(group.length < this.openings) {
      this.currentlyPlaying = [...this.currentlyPlaying, ...group]
      this.openings = this.openings - group.length
    }
  }

}

module.exports = GolfCourse;

class Golfer {
  constructor({ name: name, handicap: handicap }) {
    this.name = name
    this.handicap = handicap
    this.frustration = 0
    this.confidence = 0
  }

  calculateAvg(par) {
    return `I usually shoot a ${par + this.handicap} on average.`
  }

  playRound(course) {
    if(course.difficulty === 'hard') {
      this.frustration = 500
    }
    if(course.difficulty === 'moderate') {
      this.frustration = 100
    }
  }

  hitTheRange() {
    this.confidence += 10
  }

  marvel(course) {
    if(course.features.length === 0) {
      return `I love the grass on this course!`
    }
    if(course.features.length === 1) {
      return `I love the ${course.features[0]} on this course!`
    }
    if(course.features.length === 2) {
      return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
    }
    if(course.features.length > 2) {
      const firstChunk = course.features.slice(0, course.features.length - 1)
      const firstFeaturesList = firstChunk.join(', ')
      const lastItem = course.features[course.features.length - 1]
      return `I love the ${firstFeaturesList}, and ${lastItem} on this course!`
    }
  }
}

module.exports = Golfer;

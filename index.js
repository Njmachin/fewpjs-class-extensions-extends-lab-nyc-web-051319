class Polygon {
    constructor(side) {
      this.side = side
    }
  
    get countSides() {
      return this.side.length
    }
  
    get perimeter() {
      return this.side.reduce(function(total, currentValue) { return total + currentValue })
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      for (var i = 0; i < this.side.length; i++) {
        let first = this.side[i]
        let second = this.side[i + 1]
        let third = this.side[i + 2]
        if (((first + second) <= third) || ((first + third) <= second) || ((second + third) <= first)) {
          return false
        }
      }
      return true
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      for (var i = 0; i < this.side.length; i++) {
        let first = this.side[i]
        let second = this.side[i + 1]
        let third = this.side[i + 2]
        let fourth = this.side[i + 3]
        if (first === second &&  second === third && third === fourth) {
          return true
        }
      }
      return false
    }
  
    get area() {
      return Math.pow(this.side[0], 2)
    }
  }
const ParentSquare = require('./5-square');

class Square extends ParentSquare {
  constructor(size) {
    super(size); // Call the constructor of the parent class (Square)
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Use 'X' if c is undefined
    }

    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;

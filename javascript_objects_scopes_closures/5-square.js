const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Call the constructor of the parent class (Rectangle) with the same size for width and height
  }
}

module.exports = Square;

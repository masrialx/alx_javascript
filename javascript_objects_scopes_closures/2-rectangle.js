class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {
      // If either width or height is not a positive integer, create an empty object
      this.width = undefined;
      this.height = undefined;
    } else {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;

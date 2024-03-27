#!/usr/bin/node
// Class that defines a rectangle
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }
}

// Exports class to a module
module.exports = Rectangle;

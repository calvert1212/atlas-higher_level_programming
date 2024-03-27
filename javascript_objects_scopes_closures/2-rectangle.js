#!/usr/bin/node
// Class that defines a rectangle
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      let emptyRect = new Rectangle();
      return emptyRect;
    }
    this.width = w;
    this.height = h;
   }
}
//Exports class to a module
module.exports = Rectangle;
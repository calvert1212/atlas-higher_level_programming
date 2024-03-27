#!/usr/bin/node
// Class that defines a rectangle
class Rectangle {
  constructor(w, h) {
  if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
    // If w or h is 0 on not int, create empty object
    return {'Rectangle {}'};
    }
  this.width = w;
  this.height = h;
 }
}
//Exports class to a module
module.exports = Rectangle;
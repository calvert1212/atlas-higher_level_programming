#!/usr/bin/node
// Prints a number followed by first arg if can be an int
const xnum = parseInt(process.argv[2]);
if (isNaN(xnum)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + (xnum));
}

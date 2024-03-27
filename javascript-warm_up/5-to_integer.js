#!/usr/bin/node
// Prints a message a number of times based on first arg
const xnum = process.argv[2];
if (isNaN(xnum)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + (xnum));
}

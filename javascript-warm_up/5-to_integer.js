#!/usr/bin/node
// Prints a message a number of times based on first arg
const xnum = process.argv[2];
if (isNaN(xnum)) {
  console.log('Missing number of occurences');
} else {
    for (let i = xnum; i > 0; i--) {
      console.log('C is fun');
    }
}

#!/usr/bin/node
// Prints a message a number of times based on first arg
const xnum = process.argv[2];
for (let i = xnum; i > 0; i--) {
  if (isNaN(xnum)) {
    console.log('Missing number of occurences');
    } else {
      console.log('C is fun');
    }
}

#!/usr/bin/node
// Prints a message a number of times based on first arg
const xnum = parseInt(process.argv[2]);
if (isNaN(xnum)) {
  console.log('Missing number of occurences');
} else {
    for (let i = 0; i < xnum; i++) {
      console.log('C is fun');
}
}
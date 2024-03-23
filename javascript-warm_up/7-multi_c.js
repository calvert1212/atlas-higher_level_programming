#!/usr/bin/node
// Prints 3 lines, C is fun, Python is cool, JavaScript is amazing
const xnum = process.argv[2];
for (let i = xnum; i > 0; i--) {
  if (isNaN(xnum)) {
    console.log('Missing number of occurences');
    } else {
      console.log('C is fun');
    }
}
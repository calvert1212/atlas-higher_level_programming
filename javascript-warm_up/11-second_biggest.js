#!/usr/bin/node
// Prints 3 lines, C is fun, Python is cool, JavaScript is amazing
function secBig (a, b) {
  return a - b;
}

const a = process.argv.slice(2);
let max = 0;
if (process.argv.length > 3) {
    a.sort(secBig);
    max = Number(a[a.length - 2]);
  }
  console.log(max);
  
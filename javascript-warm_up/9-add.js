#!/usr/bin/node
// Prints 3 lines, C is fun, Python is cool, JavaScript is amazing
const a = parseInt(process.argv[2]),b = parseInt(process.argv[3]);
function add(a, b) {
  let c = a + b;
  console.log(c);
}

add();

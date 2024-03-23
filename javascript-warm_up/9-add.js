#!/usr/bin/node
// Prints 3 lines, C is fun, Python is cool, JavaScript is amazing
function add(a, b) {
  const a = parseInt(process.argv[2]),b = parseInt(process.argv[3]);
  console.log(a + b);
}

add();
